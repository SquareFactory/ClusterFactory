"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[7388],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=i(r),d=n,v=p["".concat(c,".").concat(d)]||p[d]||m[d]||s;return r?a.createElement(v,l(l({ref:t},u),{},{components:r})):a.createElement(v,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var i=2;i<s;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9654:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var a=r(665),n=(r(9496),r(9613));const s={},l="Mount CVMFS repositories on Kubernetes",o={unversionedId:"guides/cvmfs/mount-cvmfs",id:"guides/cvmfs/mount-cvmfs",title:"Mount CVMFS repositories on Kubernetes",description:"image-20220509154116581",source:"@site/docs/guides/70-cvmfs/01-mount-cvmfs.md",sourceDirName:"guides/70-cvmfs",slug:"/guides/cvmfs/mount-cvmfs",permalink:"/docs/guides/cvmfs/mount-cvmfs",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory/tree/main/web/docs/guides/70-cvmfs/01-mount-cvmfs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"Deploy Open OnDemand",permalink:"/docs/guides/slurm/deploy-ondemand"},next:{title:"Deploy a CVMFS Stratum 1",permalink:"/docs/guides/cvmfs/deploy-cvmfs"}},c={},i=[{value:"Helm and Docker resources",id:"helm-and-docker-resources",level:2},{value:"1. AppProject",id:"1-appproject",level:2},{value:"2. Secrets",id:"2-secrets",level:2},{value:"3. Editing <code>cvmfs-service-app.yml</code> to use the fork",id:"3-editing-cvmfs-service-appyml-to-use-the-fork",level:2},{value:"4. Adding custom values to the chart",id:"4-adding-custom-values-to-the-chart",level:2},{value:"4.a. Create the values file",id:"4a-create-the-values-file",level:3},{value:"4.b. Select the CVMFS repositories",id:"4b-select-the-cvmfs-repositories",level:3},{value:"4.c. Configure the CVMFS client",id:"4c-configure-the-cvmfs-client",level:3},{value:"4.d. Configure the keys",id:"4d-configure-the-keys",level:3},{value:"5. Deploy the CVMFS service",id:"5-deploy-the-cvmfs-service",level:2},{value:"6. Mount the repositories to a container",id:"6-mount-the-repositories-to-a-container",level:2}],u={toc:i};function m(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mount-cvmfs-repositories-on-kubernetes"},"Mount CVMFS repositories on Kubernetes"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image-20220509154116581",src:r(3742).Z,width:"1009",height:"369"})),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"The CVMFS CSI Plugin isn't stable yet, so we have to do it the old way: using ",(0,n.kt)("inlineCode",{parentName:"p"},"hostPath"),".")),(0,n.kt)("h2",{id:"helm-and-docker-resources"},"Helm and Docker resources"),(0,n.kt)("p",null,"The Helm resources are stored on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/ClusterFactory/tree/main/helm/cvmfs-service"},"ClusterFactory Git Repository"),"."),(0,n.kt)("p",null,"The Dockerfile is described in the git repository ",(0,n.kt)("a",{parentName:"p",href:"https://github.dev/cvmfs/cvmfs/blob/devel/packaging/container/Dockerfile"},"cvmfs/cvmfs"),"."),(0,n.kt)("p",null,"A Docker image can be pulled with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull docker.io/cvmfs/cvmfs:latest\n")),(0,n.kt)("h2",{id:"1-appproject"},"1. AppProject"),(0,n.kt)("p",null,"Apply the AppProject:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/cvmfs/app-project.yml\n")),(0,n.kt)("h2",{id:"2-secrets"},"2. Secrets"),(0,n.kt)("p",null,"Create a SealedSecret which contains the keys of the repositories:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a ",(0,n.kt)("inlineCode",{parentName:"li"},"-secret.yml.local")," file:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/cvmfs/secrets/cvmfs-keys-secret.yml.local"',title:'"argo/cvmfs/secrets/cvmfs-keys-secret.yml.local"'},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: cvmfs-keys-secret\n  namespace: cvmfs\ntype: Opaque\nstringData:\n  software.sion.csquare.run.pub: |\n    -----BEGIN PUBLIC KEY-----\n    ...\n    -----END PUBLIC KEY-----\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Seal the secret:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"cfctl kubeseal\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Apply the SealedSecret:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/cvmfs/secrets/cvmfs-keys-sealed-secret.yml\n")),(0,n.kt)("h2",{id:"3-editing-cvmfs-service-appyml-to-use-the-fork"},"3. Editing ",(0,n.kt)("inlineCode",{parentName:"h2"},"cvmfs-service-app.yml")," to use the fork"),(0,n.kt)("p",null,"Change the ",(0,n.kt)("inlineCode",{parentName:"p"},"repoURL")," to the URL used to pull the fork. Also add the ",(0,n.kt)("inlineCode",{parentName:"p"},"values-production.yaml")," file to customize the values."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/provisioning/apps/cvmfs-service-app.yml > spec > source"',title:'"argo/provisioning/apps/cvmfs-service-app.yml',">":!0,spec:!0,'source"':!0},"source:\n  # You should have forked this repo. Change the URL to your fork.\n  repoURL: git@github.com:<your account>/ClusterFactory.git\n  targetRevision: HEAD\n  path: helm/cvmfs-service\n  helm:\n    releaseName: cvmfs-service\n\n    # Create a values file inside your fork and change the values.\n    valueFiles:\n      - values-production.yaml\n")),(0,n.kt)("h2",{id:"4-adding-custom-values-to-the-chart"},"4. Adding custom values to the chart"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Read the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/ClusterFactory/blob/main/helm/cvmfs-service/values.yaml"},(0,n.kt)("inlineCode",{parentName:"a"},"values.yaml"))," to see all the default values.")),(0,n.kt)("h3",{id:"4a-create-the-values-file"},"4.a. Create the values file"),(0,n.kt)("p",null,"Create the values file ",(0,n.kt)("inlineCode",{parentName:"p"},"values-production.yaml")," inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"helm/cvmfs-service/")," directory."),(0,n.kt)("h3",{id:"4b-select-the-cvmfs-repositories"},"4.b. Select the CVMFS repositories"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/cvmfs-service/values-production.yaml"',title:'"helm/cvmfs-service/values-production.yaml"'},"repositories:\n  - name: software-sion-csquare-run\n    repository: software.sion.csquare.run\n")),(0,n.kt)("h3",{id:"4c-configure-the-cvmfs-client"},"4.c. Configure the CVMFS client"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/cvmfs-service/values-production.yaml"',title:'"helm/cvmfs-service/values-production.yaml"'},'# ...\nconfigs:\n  default.local:\n    mountPath: default.local\n    contents: |\n      CVMFS_QUOTA_LIMIT=-1\n      CVMFS_USE_GEOAPI=no\n      CVMFS_HTTP_PROXY="DIRECT"\n      CVMFS_KEYS_DIR="/etc/cvmfs/keys"\n      CVMFS_SERVER_URL="http://cvmfs.ch1.deepsquare.run/cvmfs/@fqrn@"\n      CVMFS_USER=root\n')),(0,n.kt)("h3",{id:"4d-configure-the-keys"},"4.d. Configure the keys"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/cvmfs-service/values-production.yaml"',title:'"helm/cvmfs-service/values-production.yaml"'},"# ...\nkeys:\n  secretName: 'cvmfs-keys-secret'\n")),(0,n.kt)("p",null,"The keys will be mounted on the ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/cvmfs/keys")," directory. If you wish to change the path of each key:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/cvmfs-service/values-production.yaml"',title:'"helm/cvmfs-service/values-production.yaml"'},"#...\nkeys:\n  secretName: 'cvmfs-keys-secret'\n  items:\n    - key: software.sion.csquare.run.pub\n      path: sion.csquare.run/software.sion.csquare.run.pub\n")),(0,n.kt)("p",null,"The key will be moved to the path ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/cvmfs/keys/sion.csquare.run/software.sion.csquare.run.pub"),"."),(0,n.kt)("h2",{id:"5-deploy-the-cvmfs-service"},"5. Deploy the CVMFS service"),(0,n.kt)("p",null,"Commit and push:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},'git add .\ngit commit -m "Added CVMFS service"\ngit push\n')),(0,n.kt)("p",null,"And deploy the Argo CD application:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/provisioning/apps/cvmfs-service-app.yml\n")),(0,n.kt)("h2",{id:"6-mount-the-repositories-to-a-container"},"6. Mount the repositories to a container"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="job.yaml"',title:'"job.yaml"'},"apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: list-cvmfs\nspec:\n  template:\n    spec:\n      containers:\n        - name: list-cvmfs\n          image: busybox\n          command: ['ls', '/cvmfs/software.sion.csquare.run']\n          volumeMounts:\n            - mountPath: /cvmfs/software.sion.csquare.run\n              name: software-sion-csquare-run\n              readOnly: true\n      restartPolicy: Never\n      volumes:\n        - name: software-sion-csquare-run\n          hostPath:\n            path: /cvmfs/cvmfs-k8s/mounts/software.sion.csquare.run\n            type: Directory\n  backoffLimit: 0\n")))}m.isMDXComponent=!0},3742:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/image-20220509154116581-980a4a608d5e4e2012e25cd601aa9dd7.png"}}]);