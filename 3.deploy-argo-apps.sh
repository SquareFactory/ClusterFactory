#!/bin/sh

section() {
  echo
  echo "---$1---"
}

WORKDIR=$(pwd)
export KUBECONFIG="$WORKDIR/kubeconfig"

section "Checking prerequisites"

mkdir -p ./bin
PATH="$(pwd)/bin:${PATH}"
export PATH

KUBESEAL="$(command -v kubeseal)"
if ! [ -x "$KUBESEAL" ]; then
  KUBESEAL_VERSION=0.17.3
  echo "kubeseal could not be found. Downloading it locally in ./bin."
  rm -f ./bin/kubeseal
  curl -fsSL "https://github.com/bitnami-labs/sealed-secrets/releases/download/v${KUBESEAL_VERSION}/kubeseal-${KUBESEAL_VERSION}-linux-amd64.tar.gz" | tar -zxvf kubeseal
  mv kubeseal ./bin/kubeseal
  chmod +x ./bin/kubeseal
fi

K0SCTL="$(command -v k0sctl)"
if ! [ -x "${K0SCTL}" ]; then
  K0SCTL_VERSION=0.13.0-beta.5
  echo "k0sctl could not be found. Downloading it locally in ./bin"
  rm -f ./bin/k0sctl
  curl -fsSL -o ./bin/k0sctl https://github.com/k0sproject/k0sctl/releases/download/v${K0SCTL_VERSION}/k0sctl-linux-x64
  chmod +x ./bin/k0sctl
fi

KUBECTL="$(command -v kubectl)"
if ! [ -x "${KUBECTL}" ]; then
  echo "kubectl could not be found. Downloading it locally in ./bin"
  rm -f ./bin/kubectl
  curl -fsSL -o ./bin/kubectl "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
  chmod +x ./bin/kubectl
fi

set -e

section "Fetch the config"
$K0SCTL kubeconfig --config ./k0sctl.yaml >"$KUBECONFIG"
chmod 600 ./kubeconfig

section "Deploy initial namespaces"
$KUBECTL apply -f ./argo/initial/namespaces

section "Deploy initial volumes"
$KUBECTL apply -f ./argo/initial/volumes

section "Deploy initial secrets"
if ! [ -f ./argo/initial/secrets/grafana-admin-sealed-secret.yml ]; then
  echo "Grafana Sealed Secret not found. Generating Grafana Password..."
  cat <<EOF | $KUBESEAL \
    --controller-namespace sealed-secrets \
    --controller-name sealed-secrets \
    --format yaml \
    >./argo/initial/secrets/grafana-admin-sealed-secret.yml

apiVersion: v1
kind: Secret
metadata:
  name: grafana-admin-secret
  namespace: monitoring
type: Opaque
stringData:
  admin-user: admin
  admin-password: '$(tr </dev/urandom -dc 'a-zA-Z0-9' | head -c 32)'

EOF
fi

kubectl apply -f ./argo/initial/secrets

section "Deploy monitoring project"
kubectl apply -f ./argo/monitoring/app-project.yml

kubectl apply -f https://raw.githubusercontent.com/prometheus-community/helm-charts/main/charts/kube-prometheus-stack/crds/crd-alertmanagerconfigs.yaml --force-conflicts=true --server-side
kubectl apply -f https://raw.githubusercontent.com/prometheus-community/helm-charts/main/charts/kube-prometheus-stack/crds/crd-alertmanagers.yaml --force-conflicts=true --server-side
kubectl apply -f https://raw.githubusercontent.com/prometheus-community/helm-charts/main/charts/kube-prometheus-stack/crds/crd-podmonitors.yaml --force-conflicts=true --server-side
kubectl apply -f https://raw.githubusercontent.com/prometheus-community/helm-charts/main/charts/kube-prometheus-stack/crds/crd-probes.yaml --force-conflicts=true --server-side
kubectl apply -f https://raw.githubusercontent.com/prometheus-community/helm-charts/main/charts/kube-prometheus-stack/crds/crd-prometheuses.yaml --force-conflicts=true --server-side
kubectl apply -f https://raw.githubusercontent.com/prometheus-community/helm-charts/main/charts/kube-prometheus-stack/crds/crd-prometheusrules.yaml --force-conflicts=true --server-side
kubectl apply -f https://raw.githubusercontent.com/prometheus-community/helm-charts/main/charts/kube-prometheus-stack/crds/crd-servicemonitors.yaml --force-conflicts=true --server-side
kubectl apply -f https://raw.githubusercontent.com/prometheus-community/helm-charts/main/charts/kube-prometheus-stack/crds/crd-thanosrulers.yaml --force-conflicts=true --server-side

kubectl apply -f ./argo/monitoring/prometheus-app.yml
kubectl apply -f ./argo/monitoring/rittal-exporter-app.yml
kubectl apply -f ./argo/monitoring/snmp-exporter-app.yml
kubectl apply -f ./argo/monitoring/submer-pod-exporter-app.yml
kubectl apply -f ./argo/monitoring/ipmi-exporter-app.yml

section "Wait for all deployments to be Available"
kubectl wait deployments --all --all-namespaces --for condition=Available
