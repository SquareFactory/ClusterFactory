"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[2468],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(665),r=(n(9496),n(9613));const o={},s="5. Argo Apps Deployment",l={unversionedId:"getting-started/argo-apps-deployment",id:"getting-started/argo-apps-deployment",title:"5. Argo Apps Deployment",description:"Time to play with Argo CD!",source:"@site/docs/getting-started/05-argo-apps-deployment.md",sourceDirName:"getting-started",slug:"/getting-started/argo-apps-deployment",permalink:"/docs/getting-started/argo-apps-deployment",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory/tree/main/web/docs/getting-started/05-argo-apps-deployment.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"docs",previous:{title:"4. Core Apps Deployment",permalink:"/docs/getting-started/core-apps-deployment"},next:{title:"6. xCAT Deployment",permalink:"/docs/getting-started/xcat-deployment"}},i={},p=[{value:"1. Namespace and AppProject",id:"1-namespace-and-appproject",level:2},{value:"2. Prepare Volumes, Secrets, ConfigMaps and Ingresses",id:"2-prepare-volumes-secrets-configmaps-and-ingresses",level:2},{value:"2.1. Volumes",id:"21-volumes",level:3},{value:"2.2. Secret",id:"22-secret",level:3},{value:"3. Configure the Argo Application",id:"3-configure-the-argo-application",level:2}],u={toc:p};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"5-argo-apps-deployment"},"5. Argo Apps Deployment"),(0,r.kt)("p",null,"Time to play with Argo CD!"),(0,r.kt)("p",null,"Let's deploy the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/helm-charts/blob/main/charts/kube-prometheus-stack/values.yaml"},"Kube-Prometheus-Stack")," since we will need it to monitor the nodes."),(0,r.kt)("p",null,"A complete example is written in ",(0,r.kt)("inlineCode",{parentName:"p"},"argo/monitoring/"),", but we will start from scratch to learn the process of writing an Argo CD application."),(0,r.kt)("p",null,"Start by creating the ",(0,r.kt)("inlineCode",{parentName:"p"},"argo/my-monitoring")," directory, this will be our working directory."),(0,r.kt)("p",null,"Some objects shouldn't be handled by Argo CD, such as volumes, secrets and namespaces. These objects must be created before the deployment of an Argo application."),(0,r.kt)("h2",{id:"1-namespace-and-appproject"},"1. Namespace and AppProject"),(0,r.kt)("p",null,"Start with a namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/my-monitoring/namespace.yml"',title:'"argo/my-monitoring/namespace.yml"'},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: my-monitoring\n  labels:\n    app.kubernetes.io/name: my-monitoring\n")),(0,r.kt)("p",null,"and apply:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/my-monitoring/namespace.yml\n")),(0,r.kt)("p",null,"And create an ",(0,r.kt)("inlineCode",{parentName:"p"},"AppProject"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/my-monitoring/app-project.yml"',title:'"argo/my-monitoring/app-project.yml"'},"apiVersion: argoproj.io/v1alpha1\nkind: AppProject\nmetadata:\n  name: my-monitoring\n  namespace: argocd\n  # Finalizer that ensures that project is not deleted until it is not referenced by any application\n  finalizers:\n    - resources-finalizer.argocd.argoproj.io\nspec:\n  description: My monitoring stack\n  # Allow manifests to deploy from any Git repos\n  sourceRepos:\n    - '*'\n  # Only permit applications to deploy to the namespace in the same cluster\n  destinations:\n    - namespace: my-monitoring\n      server: https://kubernetes.default.svc\n\n  namespaceResourceWhitelist:\n    - kind: '*'\n      group: '*'\n\n  clusterResourceWhitelist:\n    - kind: '*'\n      group: '*'\n")),(0,r.kt)("p",null,"and apply:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/my-monitoring/app-project.yml\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AppProject")," configures the permissions of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Application"),". This is to avoid supply chain attacks (for example malicious resources get injected into the git repositories). You can learn more ",(0,r.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/user-guide/projects/"},"here"),"."),(0,r.kt)("h2",{id:"2-prepare-volumes-secrets-configmaps-and-ingresses"},"2. Prepare Volumes, Secrets, ConfigMaps and Ingresses"),(0,r.kt)("p",null,"It is best to know the configuration you need before deploying."),(0,r.kt)("p",null,"You can read the ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," file inside the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/helm-charts/blob/main/charts/kube-prometheus-stack/values.yaml"},"git repository of kube-prometheus-stack"),"."),(0,r.kt)("p",null,"We won't be deploying AlertManager, but we will deploy Grafana, Prometheus and the Prometheus Operator."),(0,r.kt)("p",null,"Therefore, we need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A persistent volume for Grafana"),(0,r.kt)("li",{parentName:"ul"},"A persistent volume for Prometheus"),(0,r.kt)("li",{parentName:"ul"},"A secret with the initial admin password for Grafana"),(0,r.kt)("li",{parentName:"ul"},"An Ingress for Grafana"),(0,r.kt)("li",{parentName:"ul"},"An Ingress for Prometheus")),(0,r.kt)("p",null,"However, we are lucky that the Helm Chart of Kube-Prometheus-Stack already handles ingresses. So we only need to add two PVs and a secret."),(0,r.kt)("p",null,"If you are not familiar with Helm, it's a software used for templating, similar to Ansible. Every variable is stored inside a ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," file. Helm can override these values by adding a additional values file on top (for example ",(0,r.kt)("inlineCode",{parentName:"p"},"values-production.yaml"),")."),(0,r.kt)("p",null,"If we were to deploy manually, we would call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/<helm chart directory>"',title:'"user@local:/<helm',chart:!0,'directory>"':!0},"helm install \\\n  -n <namespace> \\\n  -f values.yaml \\\n  -f values-production.yaml \\\n  <app name> \\\n  ./<path to app>\n")),(0,r.kt)("p",null,"Helm is also a package manager. Like any package manager, you need a repository URL. If we were to install an app coming from a repository, we would call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/<directory containing values-production.yaml>"',title:'"user@local:/<directory',containing:!0,'values-production.yaml>"':!0},"helm repo add <reponame> <repo_url>\nhelm repo update\n\nhelm install \\\n  -n <namespace> \\\n  -f values-production.yaml \\\n  <app name> \\\n  <reponame>/<app>\n")),(0,r.kt)("p",null,"We would store these commands in scripts. However, Argo CD is capable of deploying Helm applications, but also Kustomize and vanilla Kubernetes definition files. Argo CD is also able to synchronize with the remote repository, which means that it can perform rolling updates."),(0,r.kt)("p",null,"This way, we can centralize every definition, configuration and environments files inside a Git repository, with a common syntax, in YAML."),(0,r.kt)("p",null,"More details on Argo CD ",(0,r.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/"},"here"),"."),(0,r.kt)("h3",{id:"21-volumes"},"2.1. Volumes"),(0,r.kt)("p",null,"We are going the create 2 storage classes with the NFS CSI driver.\nThe deployment of k0s should have the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-csi/csi-driver-nfs"},"NFS CSI driver")," pre-deployed."),(0,r.kt)("p",null,"You could use other types of storage like ",(0,r.kt)("a",{parentName:"p",href:"https://rook.io"},"Rook")," or ",(0,r.kt)("a",{parentName:"p",href:"https://longhorn.io"},"Longhorn"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/my-monitoring/storageclasses.yaml"',title:'"argo/my-monitoring/storageclasses.yaml"'},"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: grafana-nfs\n  namespace: my-monitoring\n  labels:\n    app: grafana-nfs\n    topology.kubernetes.io/region: ch-sion\n    topology.kubernetes.io/zone: ch-sion-1\nprovisioner: nfs.csi.k8s.io\nparameters:\n  server: nfs.example.com\n  share: /srv/nfs/k8s/grafana\n  mountPermissions: '0775'\nmountOptions:\n  - hard\n  - nfsvers=4.1\n  - noatime\n  - nodiratime\nvolumeBindingMode: Immediate\nreclaimPolicy: Retain\nallowedTopologies:\n  - matchLabelExpressions:\n      - key: topology.kubernetes.io/region\n        values:\n          - ch-sion\n---\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: prometheus-nfs\n  namespace: my-monitoring\n  labels:\n    app: prometheus-nfs\n    topology.kubernetes.io/region: ch-sion\n    topology.kubernetes.io/zone: ch-sion-1\nprovisioner: nfs.csi.k8s.io\nparameters:\n  server: nfs.example.com\n  share: /srv/nfs/k8s/prometheus\n  mountPermissions: '0775'\nmountOptions:\n  - hard\n  - nfsvers=4.1\n  - noatime\n  - nodiratime\nvolumeBindingMode: Immediate\nreclaimPolicy: Retain\nallowedTopologies:\n  - matchLabelExpressions:\n      - key: topology.kubernetes.io/region\n        values:\n          - ch-sion\n")),(0,r.kt)("p",null,"Apply it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/my-monitoring/storageclasses.yaml\n")),(0,r.kt)("p",null,"You could also create one unique StorageClass mounted on ",(0,r.kt)("inlineCode",{parentName:"p"},"/srv/nfs/k8s")," for all the applications. However, this would mix all the volumes into a single directory and for the sake of the NFS server, we won't do that."),(0,r.kt)("p",null,"You may notice that we've been using ",(0,r.kt)("inlineCode",{parentName:"p"},"topology.kubernetes.io/zone")," since the beginning of the Getting Started.\nIt's a good practice to always annotate your nodes as some resources are not available in other zones."),(0,r.kt)("p",null,"You can always learn more ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/labels-annotations-taints/#topologykubernetesiozone"},"here"),"."),(0,r.kt)("p",null,"You could also create a ",(0,r.kt)("inlineCode",{parentName:"p"},"PersistentVolume")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"PersistentVolumeClaim")," instead of a ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageClass")," (which is what we've done for ",(0,r.kt)("a",{parentName:"p",href:"https://deepsquare.io"},"DeepSquare"),"). This is called static provisioning and is an acceptable solution."),(0,r.kt)("p",null,"The official example of static provisioning is written ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-csi/csi-driver-nfs/tree/master/deploy/example"},"here"),". Both methods are good, but dynamic provisioning is more suitable for ",(0,r.kt)("inlineCode",{parentName:"p"},"StatefulSet")," since it avoids creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"PersistentVolume")," for each replica."),(0,r.kt)("h3",{id:"22-secret"},"2.2. Secret"),(0,r.kt)("p",null,"Since we are doing GitOps, we will store a sealed secret in the git repository. Since the secret definition files are in plain text, to keep track of the version of the secrets, we need to push these files into git."),(0,r.kt)("p",null,"To avoid storing clear-text secrets in git, SealedSecrets encrypts secrets using asymmetric encryption. Currently, a SealedSecrets controller should run on the Kubernetes cluster with a unique private key. This private key is the master key and should only be stored on the Kubernetes cluster."),(0,r.kt)("p",null,"If you want to backup the key (because you want to do a migration, or to prepare for a disaster), you can follow ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitnami-labs/sealed-secrets#how-can-i-do-a-backup-of-my-sealedsecrets"},"this guide"),". You can also ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/maintenance/backup-restore"},"backup the whole cluster using cfctl"),"."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The SealedSecrets keys and backups made by k0s are sensitive data! You should either delete them after a certain time or make sure that they are strongly protected.")),(0,r.kt)("p",null,"Create a secret named ",(0,r.kt)("inlineCode",{parentName:"p"},"grafana-admin-secret.yaml.local"),". It is important to add ",(0,r.kt)("inlineCode",{parentName:"p"},".local")," at the end so it get filtered by Git."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/my-monitoring/grafana-admin-secret.yaml.local"',title:'"argo/my-monitoring/grafana-admin-secret.yaml.local"'},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: grafana-admin-secret\n  namespace: my-monitoring\nstringData:\n  admin-password: <FILL ME>\n  admin-user: <FILL ME>\ntype: Opaque\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DON'T APPLY IT"),". First, we will encrypt it."),(0,r.kt)("p",null,"Just run the ",(0,r.kt)("inlineCode",{parentName:"p"},"cfctl kubeseal"),", this will generate a ",(0,r.kt)("inlineCode",{parentName:"p"},"grafana-admin-sealed-secret.yaml"),". This file can be put inside the git repository."),(0,r.kt)("p",null,"Apply this file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/my-monitoring/grafana-admin-sealed-secret.yaml\n")),(0,r.kt)("p",null,"After applying the file, feel free to delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"-secret.yaml.local")," file. If you wish to retrieve the secret, like any secret, just use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get secret <secret> -o jsonpath='{.data}'"),"."),(0,r.kt)("h2",{id:"3-configure-the-argo-application"},"3. Configure the Argo Application"),(0,r.kt)("p",null,"Let's start with the CRDs of kube-prometheus-stack. Because the CRDs are too large, we need to deploy an Argo CD application which only deploys the CRDs."),(0,r.kt)("p",null,"Create the file ",(0,r.kt)("inlineCode",{parentName:"p"},"argo/my-monitoring/prometheus-crd-app.yml")," and add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/my-monitoring/prometheus-crd-app.yml"',title:'"argo/my-monitoring/prometheus-crd-app.yml"'},'apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: prometheus-crd-app\n  namespace: argocd\n  finalizers:\n    - resources-finalizer.argocd.argoproj.io\nspec:\n  project: my-monitoring\n  source:\n    chart: kube-prometheus-stack\n    repoURL: https://github.com/prometheus-community/helm-charts.git\n    path: charts/kube-prometheus-stack/crds/\n    targetRevision: kube-prometheus-stack-42.2.0\n\n    directory:\n      recurse: true\n\n  destination:\n    server: \'https://kubernetes.default.svc\'\n    namespace: my-monitoring\n\n  syncPolicy:\n    automated:\n      prune: true # Specifies if resources should be pruned during auto-syncing ( false by default ).\n      selfHeal: true # Specifies if partial app sync should be executed when resources are changed only in target Kubernetes cluster and no git change detected ( false by default ).\n      allowEmpty: false # Allows deleting all application resources during automatic syncing ( false by default ).\n    syncOptions:\n      - Replace=true\n    retry:\n      limit: 5 # number of failed sync attempt retries; unlimited number of attempts if less than 0\n      backoff:\n        duration: 5s # the amount to back off. Default unit is seconds, but could also be a duration (e.g. "2m", "1h")\n        factor: 2 # a factor to multiply the base duration after each failed retry\n        maxDuration: 3m # the maximum amount of time allowed for the backoff strategy\n')),(0,r.kt)("p",null,"Next, we need to configure the Argo CD application that actually deploys the kube-prometheus stack."),(0,r.kt)("p",null,"However, in order to apply custom values and still be GitOps compliant, we will need to use the ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/chart_template_guide/subcharts_and_globals/"},"subchart")," pattern."),(0,r.kt)("p",null,"To do that, in your fork, create a subchart or reuse the existing one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm-subcharts/kube-prometheus-stack/Chart.yaml"',title:'"helm-subcharts/kube-prometheus-stack/Chart.yaml"'},"apiVersion: v2\nname: kube-prometheus-stack-subchart\ndescription: Kube Prometheus Stack subchart\ntype: application\nversion: 42.2.0\nappVersion: '0.1.2'\n\ndependencies:\n  - name: kube-prometheus-stack\n    version: 42.2.0\n    repository: https://prometheus-community.github.io/helm-charts\n")),(0,r.kt)("p",null,"We will create the ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," file later on. Create the Argo CD Application which will use the subchart:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/my-monitoring/prometheus-app.yml"',title:'"argo/my-monitoring/prometheus-app.yml"'},'apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: prometheus-app\n  namespace: argocd\n  finalizers:\n    - resources-finalizer.argocd.argoproj.io\nspec:\n  project: my-monitoring\n  source:\n    # You should have forked this repo. Change the URL to your fork.\n    repoURL: git@github.com:<your account>/ClusterFactory.git\n    targetRevision: configs\n    path: helm-subcharts/kube-prometheus-stack\n    helm:\n      releaseName: prometheus\n\n      skipCrds: true # skipCrds because CRDs are too long!\n\n      # If the values file is not `values.yaml`:\n      # valueFiles:\n      #   - values-example.yaml\n\n  destination:\n    server: \'https://kubernetes.default.svc\'\n    namespace: my-monitoring\n\n  syncPolicy:\n    automated:\n      prune: true # Specifies if resources should be pruned during auto-syncing ( false by default ).\n      selfHeal: true # Specifies if partial app sync should be executed when resources are changed only in target Kubernetes cluster and no git change detected ( false by default ).\n      allowEmpty: false # Allows deleting all application resources during automatic syncing ( false by default ).\n    syncOptions: []\n    retry:\n      limit: 5 # number of failed sync attempt retries; unlimited number of attempts if less than 0\n      backoff:\n        duration: 5s # the amount to back off. Default unit is seconds, but could also be a duration (e.g. "2m", "1h")\n        factor: 2 # a factor to multiply the base duration after each failed retry\n        maxDuration: 3m # the maximum amount of time allowed for the backoff strategy\n')),(0,r.kt)("p",null,"More details ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/argoproj/argo-cd/blob/master/docs/operator-manual/application.yaml"},"here"),"."),(0,r.kt)("p",null,"Since ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/helm-charts/blob/main/charts/kube-prometheus-stack/values.yaml"},"Kube-Prometheus-Stack")," is a Helm application, we are going to override some values by creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," file inside the subchart."),(0,r.kt)("p",null,"We are also going to configure the Ingresses here."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm-subcharts/kube-prometheus-stack/values.yaml"',title:'"helm-subcharts/kube-prometheus-stack/values.yaml"'},"kube-prometheus-stack:\n  alertmanager:\n    enabled: false\n\n  ## Using default values from https://github.com/grafana/helm-charts/blob/main/charts/grafana/values.yaml\n  ##\n  grafana:\n    enabled: true\n\n    image:\n      repository: grafana/grafana-oss\n      tag: 8.5.1\n\n    persistence:\n      type: pvc\n      enabled: true\n      storageClassName: grafana-nfs\n\n    securityContext:\n      runAsUser: 472\n      runAsGroup: 472\n      fsGroup: 472\n\n    admin:\n      existingSecret: 'grafana-admin-secret'\n      userKey: admin-user\n      passwordKey: admin-password\n\n    initChownData:\n      enabled: false\n\n    ingress:\n      enabled: true\n      ingressClassName: traefik\n\n      annotations:\n        cert-manager.io/cluster-issuer: selfsigned-cluster-issuer\n        traefik.ingress.kubernetes.io/router.entrypoints: websecure\n        traefik.ingress.kubernetes.io/router.tls: 'true'\n\n      hosts:\n        - grafana.example.com\n\n      path: /\n\n      tls:\n        - secretName: grafana.example.com-secret\n          hosts:\n            - grafana.example.com\n\n  ## Component scraping the kube controller manager\n  ##\n  kubeControllerManager:\n    enabled: false\n\n  ## Component scraping coreDns. Use either this or kubeDns\n  ##\n  coreDns:\n    enabled: false\n\n  ## Component scraping kubeDns. Use either this or coreDns\n  ##\n  kubeDns:\n    enabled: false\n\n  ## Component scraping etcd\n  ##\n  kubeEtcd:\n    enabled: false\n\n  ## Component scraping kube scheduler\n  ##\n  kubeScheduler:\n    enabled: false\n\n  ## Component scraping kube proxy\n  ##\n  kubeProxy:\n    enabled: false\n\n  ## Component scraping kube state metrics\n  ##\n  kubeStateMetrics:\n    enabled: true\n\n  ## Configuration for kube-state-metrics subchart\n  ##\n  kube-state-metrics:\n    prometheus:\n      monitor:\n        enabled: true\n\n  ## Deploy node exporter as a daemonset to all nodes\n  ##\n  nodeExporter:\n    enabled: true\n\n  ## Configuration for prometheus-node-exporter subchart\n  ##\n  prometheus-node-exporter:\n    prometheus:\n      monitor:\n        enabled: true\n\n  ## Manages Prometheus and Alertmanager components\n  ##\n  prometheusOperator:\n    enabled: true\n\n    ## Resource limits & requests\n    ##\n    resources:\n      limits:\n        cpu: 200m\n        memory: 200Mi\n      requests:\n        cpu: 100m\n        memory: 100Mi\n\n  ## Deploy a Prometheus instance\n  ##\n  prometheus:\n    enabled: true\n\n    ingress:\n      enabled: true\n\n      annotations:\n        cert-manager.io/cluster-issuer: selfsigned-cluster-issuer\n        traefik.ingress.kubernetes.io/router.entrypoints: websecure\n        traefik.ingress.kubernetes.io/router.tls: 'true'\n\n      hosts:\n        - prometheus.example.com\n\n      paths:\n        - /\n\n      tls:\n        - secretName: prometheus.example.com-secret\n          hosts:\n            - prometheus.example.com\n\n    prometheusSpec:\n      ruleSelectorNilUsesHelmValues: false\n      serviceMonitorSelectorNilUsesHelmValues: false\n      podMonitorSelectorNilUsesHelmValues: false\n      probeSelectorNilUsesHelmValues: false\n\n      resources:\n        limits:\n          cpu: 1\n          memory: 2Gi\n        requests:\n          cpu: 200m\n          memory: 2Gi\n\n      storageSpec:\n        volumeClaimTemplate:\n          spec:\n            storageClassName: 'prometheus-nfs'\n            accessModes: ['ReadWriteOnce']\n            resources:\n              requests:\n                storage: 50Gi\n")),(0,r.kt)("p",null,"Now, you can commit and push:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},'git add .\ngit commit -m "Added kube-prometheus-stack subchart"\ngit push\n')),(0,r.kt)("p",null,"You can deploy the Argo CD app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/my-monitoring/prometheus-crd-app.yml\nkubectl apply -f argo/my-monitoring/prometheus-app.yml\n")),(0,r.kt)("p",null,"Congratulation, you have deployed an Argo CD app!"),(0,r.kt)("p",null,"You can observe the deployment in the Argo CD dashboard by following the URL ",(0,r.kt)("a",{parentName:"p",href:"https://argocd.example.com"},"argocd.example.com"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To fetch the Argo CD password:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl get secret -n argocd argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 --decode)\n'))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220503170825336",src:n(9627).Z,width:"1823",height:"938"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220503171011051",src:n(9886).Z,width:"1454",height:"528"})),(0,r.kt)("p",null,"Pretty cool, huh?"),(0,r.kt)("p",null,"However, ClusterFactory isn't just a Kubernetes Cluster. It contains all the apps necessary to create an HPC cluster."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/monitoring/deploy"},"guides")," to deploy each application. Otherwise, let's deploy xCAT, our solution to deploy and manage bare metal servers!"))}m.isMDXComponent=!0},9627:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20220503170825336-691d6d299d690cca7f83fce461d19420.png"},9886:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20220503171011051-eaba85022fa9bfb85949e00851b3aaa3.png"}}]);