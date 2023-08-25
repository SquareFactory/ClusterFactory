"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[2348],{7942:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(665),r=(n(959),n(7942));const o={},i="6. Grendel Deployment",l={unversionedId:"getting-started/grendel-deployment",id:"getting-started/grendel-deployment",title:"6. Grendel Deployment",description:"The argo/provisioning directory deploys the Grendel application.",source:"@site/docs/getting-started/06-grendel-deployment.md",sourceDirName:"getting-started",slug:"/getting-started/grendel-deployment",permalink:"/docs/getting-started/grendel-deployment",draft:!1,editUrl:"https://github.com/deepsquare-io/ClusterFactory/tree/main/web/docs/getting-started/06-grendel-deployment.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"docs",previous:{title:"5. Adding the Git repository to ArgoCD",permalink:"/docs/getting-started/adding-repository-argocd"},next:{title:"K0s, the Kubernetes distribution for bare-metal",permalink:"/docs/main-concepts/k0s"}},s={},p=[{value:"1. Namespace and AppProject",id:"1-namespace-and-appproject",level:2},{value:"2. Preparing the dynamic provisioning of volumes",id:"2-preparing-the-dynamic-provisioning-of-volumes",level:2},{value:"3. Apps",id:"3-apps",level:2},{value:"4. Values configuration",id:"4-values-configuration",level:2},{value:"Sticking the Grendel Pod to the right zone",id:"sticking-the-grendel-pod-to-the-right-zone",level:3},{value:"Grendel Configuration Secret",id:"grendel-configuration-secret",level:3},{value:"Nodes configuration",id:"nodes-configuration",level:3},{value:"Persistence",id:"persistence",level:3},{value:"IPVLAN configuration",id:"ipvlan-configuration",level:3},{value:"(Optional) IPMI API configuration",id:"optional-ipmi-api-configuration",level:3},{value:"5. CoreDNS configuration",id:"5-coredns-configuration",level:2},{value:"6. Commit, Push, Deploy",id:"6-commit-push-deploy",level:2},{value:"7. (Optional) Building the OS Image",id:"7-optional-building-the-os-image",level:2},{value:"8. Adding the OS Image to Grendel",id:"8-adding-the-os-image-to-grendel",level:2},{value:"9. BIOS configuration",id:"9-bios-configuration",level:2},{value:"10. IPMI commands, rebooting and provision",id:"10-ipmi-commands-rebooting-and-provision",level:2},{value:"Congratulation!",id:"congratulation",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"6-grendel-deployment"},"6. Grendel Deployment"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"argo/provisioning")," directory deploys the Grendel application."),(0,r.kt)("h2",{id:"1-namespace-and-appproject"},"1. Namespace and AppProject"),(0,r.kt)("p",null,"Create the Kubernetes namespace and ArgoCD AppProject."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/provisioning\n")),(0,r.kt)("p",null,"Kubernetes namespaces are used to isolate workloads and organize the Kubernetes cluster application."),(0,r.kt)("p",null,"ArgoCD AppProjects are used in the continuous deployment process to prevent unauthorized deployment of resources. The more restrictive this is, the better we can avoid a supply chain attack."),(0,r.kt)("h2",{id:"2-preparing-the-dynamic-provisioning-of-volumes"},"2. Preparing the dynamic provisioning of volumes"),(0,r.kt)("p",null,"Grendel needs to store its OS images. We will use NFS for the storage in this guide but there are other solution like OpenEBS or local-path (see the local-path-storage ArgoCD application in the ",(0,r.kt)("inlineCode",{parentName:"p"},"argo/local-path-storage")," directory)."),(0,r.kt)("p",null,"We need to deploy a StorageClass so that Kubernetes can dynamically provision volumes."),(0,r.kt)("p",null,"Look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"argo/volumes/dynamic-nfs.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/volumes/dynamic-nfs.yaml"',title:'"argo/volumes/dynamic-nfs.yaml"'},"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: dynamic-nfs\n  labels:\n    topology.kubernetes.io/region: ch-sion\n    topology.kubernetes.io/zone: ch-sion-1\nprovisioner: nfs.csi.k8s.io\nparameters:\n  server: nfs.example.com\n  share: /srv/nfs/dynamic\n  mountPermissions: '0775'\nmountOptions:\n  - hard\n  - nfsvers=4.1\n  - noatime\n  - nodiratime\nvolumeBindingMode: Immediate\nreclaimPolicy: Retain\nallowedTopologies:\n  - matchLabelExpressions:\n      - key: topology.kubernetes.io/region\n        values:\n          - ch-sion\n")),(0,r.kt)("p",null,"Change the server address ",(0,r.kt)("inlineCode",{parentName:"p"},"nfs.example.com")," to your NFS server and apply the resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl apply -f argo/volumes/dynamic-nfs.yaml\n")),(0,r.kt)("h2",{id:"3-apps"},"3. Apps"),(0,r.kt)("p",null,"Since Grendel is using DHCP (and therefore L2 networking), we need to connect Grendel to the network connected to the compute nodes. To do that, we use Multus CNI with IPVLan."),(0,r.kt)("p",null,"Let's start with the ArgoCD application declaration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/provisioning/apps/grendel-app.yaml"',title:'"argo/provisioning/apps/grendel-app.yaml"'},'apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: grendel-app\n  namespace: argocd\n  finalizers:\n    - resources-finalizer.argocd.argoproj.io\nspec:\n  project: provisioning\n  source:\n    # You should have forked this repo. Change the URL to your fork.\n    repoURL: git@github.com:<your account>/ClusterFactory.git\n    # You should use your branch too.\n    targetRevision: HEAD\n    path: helm/grendel\n    helm:\n      releaseName: grendel\n\n      # We will create a values file inside the fork and change the values.\n      valueFiles:\n        - values-production.yaml\n\n  destination:\n    server: \'https://kubernetes.default.svc\'\n    namespace: provisioning\n\n  syncPolicy:\n    automated:\n      prune: true # Specifies if resources should be pruned during auto-syncing ( false by default ).\n      selfHeal: true # Specifies if partial app sync should be executed when resources are changed only in target Kubernetes cluster and no git change detected ( false by default ).\n      allowEmpty: false # Allows deleting all application resources during automatic syncing ( false by default ).\n    syncOptions: []\n    retry:\n      limit: 5 # number of failed sync attempt retries; unlimited number of attempts if less than 0\n      backoff:\n        duration: 5s # the amount to back off. Default unit is seconds, but could also be a duration (e.g. "2m", "1h")\n        factor: 2 # a factor to multiply the base duration after each failed retry\n        maxDuration: 3m # the maximum amount of time allowed for the backoff strategy\n')),(0,r.kt)("p",null,"Most of the options don't need to change, so just add ",(0,r.kt)("inlineCode",{parentName:"p"},"values-production.yaml")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"valueFiles")," field because we will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"values-production.yaml"),"."),(0,r.kt)("p",null,"If you've looked inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm/grendel/")," directory, you can see the default ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml"),". To change these values, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"values-production.yaml")," file directly inside the helm application."),(0,r.kt)("h2",{id:"4-values-configuration"},"4. Values configuration"),(0,r.kt)("h3",{id:"sticking-the-grendel-pod-to-the-right-zone"},"Sticking the Grendel Pod to the right zone"),(0,r.kt)("p",null,"After adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"values-production.yaml")," file in the helm application directory. We can start by selecting where Grendel will be hosted:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/grendel/values-production.yaml"',title:'"helm/grendel/values-production.yaml"'},"nodeSelector:\n  kubernetes.io/hostname: k0s-1.example.com\n")),(0,r.kt)("p",null,"Since we are using IPVLAN, the pod needs to be stuck on a Kubernetes node with a known network interface."),(0,r.kt)("h3",{id:"grendel-configuration-secret"},"Grendel Configuration Secret"),(0,r.kt)("p",null,"Grendel needs a configuration file which contains credentials. Therefore, you need to create a secret with the ",(0,r.kt)("inlineCode",{parentName:"p"},"grendel.toml")," inside. Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"grendel-secret.yaml.local")," with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/provisioning/secrets/grendel-secret.yaml.local"',title:'"argo/provisioning/secrets/grendel-secret.yaml.local"'},'apiVersion: v1\nkind: Secret\nmetadata:\n  name: grendel-secret\n  namespace: provisioning\ntype: Opaque\nstringData:\n  grendel.toml: |\n    dbpath = ":memory:"\n    loggers = {cli="on", tftp="on", dhcp="on", dns="off", provision="on", api="on", pxe="on"}\n    admin_ssh_pubkeys = []\n\n    [provision]\n    listen = "0.0.0.0:80"\n    token_ttl = 3600\n    root_password = ""\n    default_image = ""\n    repo_dir = "/var/lib/grendel"\n\n    [dhcp]\n    listen = "0.0.0.0:67"\n    lease_time = "24h"\n    dns_servers = []\n    domain_search = []\n    mtu = 1500\n    proxy_only = false\n    router_octet4 = 0\n    subnets = [\n        {gateway = "192.168.0.1/24", dns="192.168.0.100", domainSearch="example.com", mtu="1500"}\n    ]\n\n    [dns]\n    listen = "0.0.0.0:53"\n    ttl = 86400\n\n    [tftp]\n    listen = "0.0.0.0:69"\n\n    [pxe]\n    listen = "0.0.0.0:4011"\n\n    [api]\n    socket_path = "/var/run/grendel/grendel-api.socket"\n\n    [client]\n    api_endpoint = "/var/run/grendel/grendel-api.socket"\n    insecure = false\n\n    [bmc]\n    user = "admin"\n    password = "password"\n\n    [discovery]\n    user = ""\n    password = ""\n    domain = ""\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You need to change the ",(0,r.kt)("inlineCode",{parentName:"strong"},"dhcp.subnets")," configuration according to your network configuration.")),(0,r.kt)("p",null,"Seal the secret and apply it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"cfctl kubeseal\nkubectl apply -f argo/provisioning/secrets/grendel-sealed-secret.yaml\n")),(0,r.kt)("h3",{id:"nodes-configuration"},"Nodes configuration"),(0,r.kt)("p",null,"After adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"values-production.yaml")," file in the helm application directory. We can start by adding the provisioning configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/grendel/values-production.yaml"',title:'"helm/grendel/values-production.yaml"'},"config:\n  ## Secret containing grendel.toml\n  secretName: grendel-secret\n  secretKey: grendel.toml\n\n  hosts:\n    - name: cn1\n      provision: true\n      boot_image: squareos-8.6\n      interfaces:\n        - ip: 10.10.2.51/24\n          mac: aa:bb:cc:11:22:33\n          bmc: false\n        - ip: 10.10.3.51/32\n          bmc: true\n\n  images:\n    - name: squareos-8.6\n      kernel: '/var/lib/grendel/vmlinuz-4.18.0-372.19.1.el8_6.x86_64'\n      initrd:\n        - '/var/lib/grendel/initramfs-4.18.0-372.19.1.el8_6.x86_64.img'\n      liveimg: '/var/lib/grendel/squareos-8.6.squashfs'\n      cmdline: console=ttyS0 console=tty0 root=live:http://grendel.example.com/repo/squareos-8.6.squashfs BOOTIF=01-{{ $.nic.MAC | toString | replace \":\" \"-\" }} grendel.hostname={{ $.host.Name }} grendel.address=http://grendel.example.com rd.live.overlay.readonly=1 rd.live.overlay.overlayfs=1 rd.neednet=1\n\n  postscript: |\n    #!/bin/sh\n    touch /hello-world\n")),(0,r.kt)("p",null,"The MAC address corresponds to the network interface connected to the network with Grendel."),(0,r.kt)("p",null,"Inside the image configuration, you can notice some kernel parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"console=ttyS0 console=tty0")," means that the kernel messages will appear on both the first serial port and virtual terminal."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"root=live:http://grendel.example.com/repo/squareos-8.6.squashfs")," means that dracut will load the OS image as a live OS image. ",(0,r.kt)("strong",{parentName:"li"},"Modify the URL based on the domain name you want to use.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rd.live.overlay.readonly=1 rd.live.overlay.overlayfs=1 rd.neednet=1")," are parameters relative to loading the live OS image. Here, we are mounting the OS image as a read-only base image for the OverlayFS. This is to create a stateless filesystem."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"grendel.hostname={{ $.host.Name }} grendel.address=http://grendel.example.com")," are parameters used to change the hostname of the OS and fetch the postscript. ",(0,r.kt)("strong",{parentName:"li"},"Modify the URL based on the domain name you want to use."))),(0,r.kt)("h3",{id:"persistence"},"Persistence"),(0,r.kt)("p",null,"Remember the ",(0,r.kt)("inlineCode",{parentName:"p"},"dynamic-nfs")," storage class we've just created? Let's use it now:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/grendel/values-production.yaml"',title:'"helm/grendel/values-production.yaml"'},"persistence:\n  storageClassName: 'provisioning-nfs'\n  accessModes: ['ReadWriteMany']\n  size: 20Gi\n  selectorLabels:\n    app: grendel\n")),(0,r.kt)("p",null,"This will create a PersistentStorageClaim asking for 20Gi to the NFS provisioner. The NFS provisioner will create a directory inside the NFS with the following path ",(0,r.kt)("inlineCode",{parentName:"p"},"/srv/nfs/dynamic/pvc-<UUID>"),". The UUID in randomized."),(0,r.kt)("h3",{id:"ipvlan-configuration"},"IPVLAN configuration"),(0,r.kt)("p",null,"To expose Grendel to the external network, instead of using ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancers"),", we use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/multus-cni"},"Multus"),". Generally, Multus is a CNI plugin to attach multiple network interfaces on Pods. However, we will use Multus CNI to replace the default network interface with an IPVLAN interface."),(0,r.kt)("p",null,"IPVLAN allows us to directly expose the pod to the host network by assigning an IP to the pod. To do that, you must specify the network interface of the node with the ",(0,r.kt)("inlineCode",{parentName:"p"},"masterInterface")," field. Then, you should allocate an address using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ipam")," field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/grendel/values-production.yaml"',title:'"helm/grendel/values-production.yaml"'},"net:\n  # Kubernetes host interface\n  masterInterface: eth0\n  mode: l2\n  type: ipvlan\n\n  # https://www.cni.dev/plugins/current/ipam/static/\n  ipam:\n    type: static\n    addresses:\n      - address: 192.168.0.3/24\n        gateway: 10.10.2.1\n    routes:\n      - dst: 0.0.0.0/0\n\n  # https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-dns-config\n  dns:\n    nameservers:\n      - 1.1.1.1\n")),(0,r.kt)("p",null,"More details on IPAM ",(0,r.kt)("a",{parentName:"p",href:"https://www.cni.dev/plugins/current/ipam/static/"},"here")," and for IPVLAN ",(0,r.kt)("a",{parentName:"p",href:"https://www.cni.dev/plugins/current/main/ipvlan/"},"here"),"."),(0,r.kt)("h3",{id:"optional-ipmi-api-configuration"},"(Optional) IPMI API configuration"),(0,r.kt)("p",null,"The helm application can also deploy an IPMI API. This API doesn't use L2, so we can expose that service through Traefik by using an Ingress:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/grendel/values-production.yaml"',title:'"helm/grendel/values-production.yaml"'},"ipmi:\n  ingress:\n    enabled: true\n    ingressClass: 'traefik'\n\n    annotations:\n      cert-manager.io/cluster-issuer: private-cluster-issuer\n      traefik.ingress.kubernetes.io/router.entrypoints: websecure\n      traefik.ingress.kubernetes.io/router.tls: 'true'\n\n    hosts:\n      - ipmi.example.com\n\n    path: /\n\n    tls:\n      - secretName: ipmi.example.com-secret\n        hosts:\n          - ipmi.example.com\n")),(0,r.kt)("p",null,"With this, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"cfctl")," to control your nodes."),(0,r.kt)("h2",{id:"5-coredns-configuration"},"5. CoreDNS configuration"),(0,r.kt)("p",null,"Remember to add a DNS entry each time you want to expose an application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="core/coredns/overlays/prod/configmap.yaml"',title:'"core/coredns/overlays/prod/configmap.yaml"'},"data:\n  example.com.db: |\n    # ...\n    192.168.0.3 grendel.example.com\n    192.168.1.100 ipmi.example.com\n")),(0,r.kt)("h2",{id:"6-commit-push-deploy"},"6. Commit, Push, Deploy"),(0,r.kt)("p",null,"Commit and push:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'git add .\ngit commit -m "Added Grendel application and values"\ngit push\n')),(0,r.kt)("p",null,"Deploy the app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/provisioning/apps/grendel-app.yaml\n")),(0,r.kt)("h2",{id:"7-optional-building-the-os-image"},"7. (Optional) Building the OS Image"),(0,r.kt)("p",null,"This step is optional, you can download a pre-built SquareOS image:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://sos-ch-dk-2.exo.io/osimages/squareos-8.6/initramfs-4.18.0-372.19.1.el8_6.x86_64.img"},"initramfs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://sos-ch-dk-2.exo.io/osimages/squareos-8.6/squareos-8.6.squashfs"},"OS image")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://sos-ch-dk-2.exo.io/osimages/squareos-8.6/vmlinuz-4.18.0-372.19.1.el8_6.x86_64"},"linux kernel"))),(0,r.kt)("p",null,"If you want to build it yourself, we use Packer to build the OS image. To build the OS image:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Install Packer and QEMU."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:2},(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"packer-recipes/rocky8.6"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:3},(0,r.kt)("li",{parentName:"ol"},"Build the OS image using the ",(0,r.kt)("inlineCode",{parentName:"li"},"build.bare.sh")," script."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:4},(0,r.kt)("li",{parentName:"ol"},"Extract the kernel, initramfs and create the squashfs file using the ",(0,r.kt)("inlineCode",{parentName:"li"},"export.bare.sh")," script.")))),(0,r.kt)("h2",{id:"8-adding-the-os-image-to-grendel"},"8. Adding the OS Image to Grendel"),(0,r.kt)("p",null,"After deploying Grendel, a file server is exposed for you to copy the OS images."),(0,r.kt)("p",null,"You can access using this URL: ",(0,r.kt)("a",{parentName:"p",href:"http://grendel.example.com:8080"},"http://grendel.example.com:8080")),(0,r.kt)("p",null,"Drag & Drop the OS image, linux kernel and initramfs there."),(0,r.kt)("h2",{id:"9-bios-configuration"},"9. BIOS configuration"),(0,r.kt)("p",null,"Make sure your nodes are configured with network boot as the first boot option. Grendel supports:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"x86 Legacy"),(0,r.kt)("li",{parentName:"ul"},"x86 UEFI"),(0,r.kt)("li",{parentName:"ul"},"x86_64 UEFI"),(0,r.kt)("li",{parentName:"ul"},"ARM64 UEFI")),(0,r.kt)("h2",{id:"10-ipmi-commands-rebooting-and-provision"},"10. IPMI commands, rebooting and provision"),(0,r.kt)("p",null,"If you've deployed the IPMI API, you can run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"export IPMIUSER=<user>\nexport IPMIPASS=<password>\nexport IPMIADDRESS=https://ipmi.example.com\ncfctl ipmi <nodename> <on/off/cycle/status/soft/reset>\n")),(0,r.kt)("p",null,"Reboot the nodes with ",(0,r.kt)("inlineCode",{parentName:"p"},"cfctl ipmi cn1 reset"),"."),(0,r.kt)("p",null,"Read the logs of Grendel and the serial console of your node to see if the boot is successful."),(0,r.kt)("h2",{id:"congratulation"},"Congratulation!"),(0,r.kt)("p",null,"You've finished the guide. However, there is still a lot of application we didn't deploy. Continue on these guides if you are interested:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/slurm/deploy-slurm"},"Deploy SLURM, the bare-metal batch scheduler")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/provisioning/gitops-with-grendel"},"Configure the postscript to follow the GitOps practices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/maintenance/high-availability"},"About maintenance"))))}c.isMDXComponent=!0}}]);