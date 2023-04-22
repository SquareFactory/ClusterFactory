"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[8723],{9613:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(9496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),m=l,h=c["".concat(i,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9754:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(9496),l=a(5924);const r="tabItem_pxx2";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,s),hidden:a},t)}},6789:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(665),l=a(9496),r=a(5924),s=a(5734),o=a(732),i=a(3478),d=a(573);function p(e){return function(e){var t;return(null==(t=l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function u(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=u(e),[s,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[i,p]=m({queryString:a,groupId:n}),[h,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,d.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),k=(()=>{const e=i??h;return c({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),g(e)}),[p,g,r]),tabValues:r}}var g=a(1676),k=a(3321);const f="tabList_f5DR",b="tabItem_f81j";function v(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,g.o5)(),u=e=>{const t=e.currentTarget,a=d.indexOf(t),n=i[a].value;n!==s&&(p(t),o(n))},c=e=>{var t;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}null==(t=a)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:c,onClick:u},o,{className:(0,r.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=h(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",f)},l.createElement(v,(0,n.Z)({},e,t)),l.createElement(y,(0,n.Z)({},e,t)))}function C(e){const t=(0,k.Z)();return l.createElement(N,(0,n.Z)({key:String(t)},e))}},478:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(665),l=(a(9496),a(9613));a(6789),a(9754);const r={},s="Deploy a LDAP server",o={unversionedId:"guides/deploy-ldap",id:"guides/deploy-ldap",title:"Deploy a LDAP server",description:"Helm and Docker resources",source:"@site/docs/guides/800-deploy-ldap.md",sourceDirName:"guides",slug:"/guides/deploy-ldap",permalink:"/docs/guides/deploy-ldap",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory/tree/main/web/docs/guides/800-deploy-ldap.md",tags:[],version:"current",sidebarPosition:800,frontMatter:{},sidebar:"docs",previous:{title:"Deploy a VM with KubeVirt",permalink:"/docs/guides/kubevirt/deploy-vm"},next:{title:"cfctl",permalink:"/docs/reference/cfctl"}},i={},d=[{value:"Helm and Docker resources",id:"helm-and-docker-resources",level:2},{value:"1. Deploy Namespace and AppProject",id:"1-deploy-namespace-and-appproject",level:2},{value:"2. Secrets and Ingresses",id:"2-secrets-and-ingresses",level:2},{value:"2.a. Editing the environment variables with secrets",id:"2a-editing-the-environment-variables-with-secrets",level:3},{value:"2.b. Creating an <code>IngressRouteTCP</code> to expose the LDAP server",id:"2b-creating-an-ingressroutetcp-to-expose-the-ldap-server",level:3},{value:"2.d. Creating a <code>Certificate</code> for LDAPS (TLS)",id:"2d-creating-a-certificate-for-ldaps-tls",level:3},{value:"3. Editing <code>389ds-app.yaml</code> to use the fork",id:"3-editing-389ds-appyaml-to-use-the-fork",level:2},{value:"4. Adding custom values to the chart",id:"4-adding-custom-values-to-the-chart",level:2},{value:"4.a. Create the values file",id:"4a-create-the-values-file",level:3},{value:"4.b. Configure the 389ds",id:"4b-configure-the-389ds",level:3},{value:"4.c. Mount the volume",id:"4c-mount-the-volume",level:3},{value:"4. Deploy the app",id:"4-deploy-the-app",level:2},{value:"5. Post deployment settings",id:"5-post-deployment-settings",level:2},{value:"Snippets",id:"snippets",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"deploy-a-ldap-server"},"Deploy a LDAP server"),(0,l.kt)("h2",{id:"helm-and-docker-resources"},"Helm and Docker resources"),(0,l.kt)("p",null,"The Helm resources are stored on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/ClusterFactory/tree/main/helm/389ds"},"ClusterFactory Git Repository"),"."),(0,l.kt)("p",null,"The Dockerfile is described in the git repository ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/389ds/389-ds-base"},"389ds/dirsrv"),"."),(0,l.kt)("p",null,"An Docker image can be pulled with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull docker.io/389ds/dirsrv:latest\n")),(0,l.kt)("h2",{id:"1-deploy-namespace-and-appproject"},"1. Deploy Namespace and AppProject"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/ldap/\n")),(0,l.kt)("h2",{id:"2-secrets-and-ingresses"},"2. Secrets and Ingresses"),(0,l.kt)("h3",{id:"2a-editing-the-environment-variables-with-secrets"},"2.a. Editing the environment variables with secrets"),(0,l.kt)("p",null,"Take a look at the README of ",(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/389ds/dirsrv"},"389ds/dirsrv"),"."),(0,l.kt)("p",null,"Some of the environment variables are sensitive:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DS_DM_PASSWORD"),": The password of the ",(0,l.kt)("inlineCode",{parentName:"li"},"cn=Directory Manager")," user.")),(0,l.kt)("p",null,"We must store these value inside a secret."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a ",(0,l.kt)("inlineCode",{parentName:"li"},"-secret.yaml.local")," file:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/ldap/secrets/389ds-secret.yaml.local"',title:'"argo/ldap/secrets/389ds-secret.yaml.local"'},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: 389ds-secret\n  namespace: ldap\nstringData:\n  dm-password: <a password>\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Seal the secret:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"cfctl kubeseal\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Apply the SealedSecret:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/ldap/secrets/389ds-sealed-secret.yaml\n")),(0,l.kt)("p",null,"You can track ",(0,l.kt)("inlineCode",{parentName:"p"},"389ds-env-sealed-secret.yaml")," in Git, but not the ",(0,l.kt)("inlineCode",{parentName:"p"},"-secret.yaml.local")," file."),(0,l.kt)("h3",{id:"2b-creating-an-ingressroutetcp-to-expose-the-ldap-server"},"2.b. Creating an ",(0,l.kt)("inlineCode",{parentName:"h3"},"IngressRouteTCP")," to expose the LDAP server"),(0,l.kt)("p",null,"You can expose the LDAP using Traefik ",(0,l.kt)("inlineCode",{parentName:"p"},"IngressRouteTCP"),"."),(0,l.kt)("p",null,"Create a ",(0,l.kt)("inlineCode",{parentName:"p"},"argo/ldap/ingresses/ingress-route-tcp.yaml")," file and add:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/ldap/ingresses/ingress-routes-tcp.yaml"',title:'"argo/ldap/ingresses/ingress-routes-tcp.yaml"'},"apiVersion: traefik.containo.us/v1alpha1\nkind: IngressRouteTCP\nmetadata:\n  name: ldap-ingress-tcp\n  namespace: ldap\n  labels:\n    app.kubernetes.io/name: ldap\n    app.kubernetes.io/component: ingress-route-tcp\nspec:\n  entryPoints:\n    - ldap\n  routes:\n    - match: HostSNI(`*`)\n      services:\n        - name: dirsrv-389ds\n          port: 3389\n---\napiVersion: traefik.containo.us/v1alpha1\nkind: IngressRouteTCP\nmetadata:\n  name: ldaps\n  namespace: ldap\n  labels:\n    app.kubernetes.io/name: ldaps\n    app.kubernetes.io/component: ingress-route-tcp\n\nspec:\n  entryPoints:\n    - ldaps\n  routes:\n    - match: HostSNI(`*`)\n      services:\n        - name: dirsrv-389ds\n          namespace: ldap\n          port: 3636\n  tls:\n    passthrough: true\n")),(0,l.kt)("p",null,"You must open ports 636 and 389 on the load balancer of Traefik by configuring the Traefik ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="core/traefik/values.yaml"',title:'"core/traefik/values.yaml"'},"ports:\n  ldap:\n    port: 1389\n    expose: yes\n    exposedPort: 389\n    protocol: TCP\n  ldaps:\n    port: 1636\n    expose: yes\n    exposedPort: 636\n    protocol: TCP\n")),(0,l.kt)("p",null,"Apply:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"./scripts/deploy-core\nkubectl apply -f argo/ldap/ingresses/ingress-routes-tcp.yaml\n")),(0,l.kt)("h3",{id:"2d-creating-a-certificate-for-ldaps-tls"},"2.d. Creating a ",(0,l.kt)("inlineCode",{parentName:"h3"},"Certificate")," for LDAPS (TLS)"),(0,l.kt)("p",null,"Create a ",(0,l.kt)("inlineCode",{parentName:"p"},"argo/ldap/certificates/ldap.example.com-cert.yaml")," file and add:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/ldap/certificates/ldap.example.com-cert.yaml"',title:'"argo/ldap/certificates/ldap.example.com-cert.yaml"'},"apiVersion: cert-manager.io/v1\nkind: Certificate\nmetadata:\n  name: ldap.example.com-cert\n  namespace: ldap\nspec:\n  secretName: ldap.example.com-secret\n  issuerRef:\n    name: private-cluster-issuer\n    kind: ClusterIssuer\n  commonName: ldap.example.com\n  subject:\n    countries: [CH]\n    localities: [Lonay]\n    organizationalUnits: []\n    organizations: [Example Org]\n    postalCodes: ['1027']\n    provinces: [Laud]\n    streetAddresses: [Chemin des Mouettes 1]\n  duration: 8760h\n  dnsNames:\n    - ldap.example.com\n    - dirsrv-389ds.ldap.svc.cluster.local\n  privateKey:\n    size: 4096\n    algorithm: RSA\n")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Do not use ",(0,l.kt)("inlineCode",{parentName:"p"},"selfsigned-cluster-issuer")," as self signed certificates are not accepted by 389ds.")),(0,l.kt)("p",null,"You want your LDAP server to be secure inside and outside the cluster. Therefore, you need to add 2 DNS names:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ldap.example.com")," which is used to access to the Ingress Controller which will forward to the LDAP service."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dirsrv-389ds.ldap.svc.cluster.local")," which is used to access to the LDAP service.")),(0,l.kt)("p",null,"You should edit all of the fields of the certificate, especially the ",(0,l.kt)("inlineCode",{parentName:"p"},"subject")," field."),(0,l.kt)("p",null,"Apply it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"./scripts/deploy-core\nkubectl apply -f argo/ldap/certificates/ldap.example.com-cert.yaml\n")),(0,l.kt)("h2",{id:"3-editing-389ds-appyaml-to-use-the-fork"},"3. Editing ",(0,l.kt)("inlineCode",{parentName:"h2"},"389ds-app.yaml")," to use the fork"),(0,l.kt)("p",null,"Change the ",(0,l.kt)("inlineCode",{parentName:"p"},"repoURL")," to the URL used to pull the fork. Also add the ",(0,l.kt)("inlineCode",{parentName:"p"},"values-production.yaml")," file to customize the values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo.example/ldap/apps/389ds-app.yaml > spec > source"',title:'"argo.example/ldap/apps/389ds-app.yaml',">":!0,spec:!0,'source"':!0},"source:\n  # You should have forked this repo. Change the URL to your fork.\n  repoURL: git@github.com:<your account>/ClusterFactory.git\n  # You should use your branch too.\n  targetRevision: HEAD\n  path: helm/389ds\n  helm:\n    releaseName: 389ds\n\n    # Create a values file inside your fork and change the values.\n    valueFiles:\n      - values-production.yaml\n")),(0,l.kt)("h2",{id:"4-adding-custom-values-to-the-chart"},"4. Adding custom values to the chart"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Read the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/ClusterFactory/blob/main/helm/389ds/values.yaml"},(0,l.kt)("inlineCode",{parentName:"a"},"values.yaml"))," to see all the default values.")),(0,l.kt)("h3",{id:"4a-create-the-values-file"},"4.a. Create the values file"),(0,l.kt)("p",null,"Create the values file ",(0,l.kt)("inlineCode",{parentName:"p"},"values-production.yaml")," inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"helm/389ds/")," directory."),(0,l.kt)("h3",{id:"4b-configure-the-389ds"},"4.b. Configure the 389ds"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/389ds/values-production.yaml"',title:'"helm/389ds/values-production.yaml"'},"tls:\n  secretName: ldap.example.com-secret\n\nconfig:\n  dmPassword:\n    secretName: '389ds-secret'\n    key: 'dm-password'\n  suffixName: 'dc=example,dc=com'\n\ninitChownData:\n  enabled: true\n")),(0,l.kt)("p",null,"Edit the ",(0,l.kt)("inlineCode",{parentName:"p"},"suffixName")," according to your need. This is the path in LDAP where the organizational units will be stored. For example: ",(0,l.kt)("inlineCode",{parentName:"p"},"ou=people,dc=example,dc=com"),"."),(0,l.kt)("h3",{id:"4c-mount-the-volume"},"4.c. Mount the volume"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/389ds/values-production.yaml"',title:'"helm/389ds/values-production.yaml"'},"# ...\npersistence:\n  storageClassName: 'dynamic-nfs'\n")),(0,l.kt)("h2",{id:"4-deploy-the-app"},"4. Deploy the app"),(0,l.kt)("p",null,"Commit and push:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},'git add .\ngit commit -m "Added 389ds service"\ngit push\n')),(0,l.kt)("p",null,"And deploy the Argo CD application:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/ldap/apps/389ds-app.yaml\n")),(0,l.kt)("p",null,"If the Ingress is configured, the LDAP server should be available on the IP specified by MetalLB."),(0,l.kt)("p",null,"The deployment of 389ds might be slow. Watch the logs and look for ",(0,l.kt)("inlineCode",{parentName:"p"},"INFO: 389-ds-container started.")," which indicates a successful deployment."),(0,l.kt)("p",null,"If the server is crashing, it may be caused by the permissions inside the NFS. Check the content inside NFS, the owner should be ",(0,l.kt)("inlineCode",{parentName:"p"},"499:499"),"."),(0,l.kt)("h2",{id:"5-post-deployment-settings"},"5. Post deployment settings"),(0,l.kt)("p",null,"After deploying the LDAP server, the database is empty."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kubectl exec")," inside the container:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},'kubectl exec -i -t -n ldap dirsrv-389ds-0 -c dirsrv-389ds -- sh -c "clear; (bash || ash || sh)"\n')),(0,l.kt)("p",null,"You can also use Lens to open a shell inside the container."),(0,l.kt)("p",null,"To initialize the database, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="pod: dirsrv-389ds-0 (namespace: ldap)"',title:'"pod:',"dirsrv-389ds-0":!0,"(namespace:":!0,'ldap)"':!0},"dsconf localhost backend create --suffix dc=example,dc=com --be-name example_backend\ndsidm localhost initialise\n")),(0,l.kt)("p",null,"Adapt the suffix based on the ",(0,l.kt)("inlineCode",{parentName:"p"},"suffixName")," in the values file. You can also change the backend name ",(0,l.kt)("inlineCode",{parentName:"p"},"example_backend"),"."),(0,l.kt)("p",null,"Based on what you want, you can add ",(0,l.kt)("inlineCode",{parentName:"p"},"uniqueness")," attributes to some fields:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="pod: dirsrv-389ds-0 (namespace: ldap)"',title:'"pod:',"dirsrv-389ds-0":!0,"(namespace:":!0,'ldap)"':!0},'# Unique mail\ndsconf localhost plugin attr-uniq add "mail attribute uniqueness" --attr-name mail --subtree "opu=people,dc=example,dc=com"\n# Unique uid\ndsconf localhost plugin attr-uniq add "uid attribute uniqueness" --attr-name uid --subtree "ou=people,dc=example,dc=com"\n# Unique uid number\ndsconf localhost plugin attr-uniq add "uidNumber attribute uniqueness" --attr-name uidNumber --subtree "dc=example,dc=com"\n# Unique gid number\ndsconf localhost plugin attr-uniq add "gidNumber attribute uniqueness" --attr-name gidNumber --subtree "ou=groups,dc=example,dc=com"\n\n# Enable the plugins\ndsconf localhost plugin attr-uniq enable "mail attribute uniqueness"\ndsconf localhost plugin attr-uniq enable "uid attribute uniqueness"\ndsconf localhost plugin attr-uniq enable "uidNumber attribute uniqueness"\ndsconf localhost plugin attr-uniq enable "gidNumber attribute uniqueness"\n')),(0,l.kt)("p",null,"You may also want uid/gid number auto assignment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="pod: dirsrv-389ds-0 (namespace: ldap)"',title:'"pod:',"dirsrv-389ds-0":!0,"(namespace:":!0,'ldap)"':!0},'dsconf localhost plugin dna config "UID and GID numbers" add \\\n  --type gidNumber uidNumber \\\n  --filter "(|(objectclass=posixAccount)(objectclass=posixGroup))" \\\n  --scope dc=example,dc=run\\\n  --next-value 1601 \\\n  --magic-regen -1\ndsconf localhost plugin dna enable\n')),(0,l.kt)("p",null,"Change ",(0,l.kt)("inlineCode",{parentName:"p"},"next-value")," to the wishing starting uid/gid number. Select a magic value which will indicates to use a new value for the user."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="pod: dirsrv-389ds-0 (namespace: ldap)"',title:'"pod:',"dirsrv-389ds-0":!0,"(namespace:":!0,'ldap)"':!0},'dsidm -b "dc=example,dc=com" localhost user create \\\n  --uid example-user \\\n  --cn example-user \\\n  --displayName example-user \\\n  --homeDirectory "/dev/shm" \\\n  --uidNumber -1 \\\n  --gidNumber 1600\n')),(0,l.kt)("p",null,"The created user will have 1601 as UID and 1600 as GID."),(0,l.kt)("p",null,"If you want to have a seperate DNA plugin for ",(0,l.kt)("inlineCode",{parentName:"p"},"gidNumber")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"uidNumber"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="pod: dirsrv-389ds-0 (namespace: ldap)"',title:'"pod:',"dirsrv-389ds-0":!0,"(namespace:":!0,'ldap)"':!0},'dsconf localhost plugin dna config "UID numbers" add \\\n  --type uidNumber \\\n  --filter "(objectclass=posixAccount)" \\\n  --scope ou=people,dc=example,dc=run\\\n  --next-value 1601 \\\n  --magic-regen -1\ndsconf localhost plugin dna config "GID numbers" add \\\n  --type gidNumber \\\n  --filter "(objectclass=posixGroup)" \\\n  --scope ou=groups,dc=example,dc=run\\\n  --next-value 1601 \\\n  --magic-regen -1\ndsconf localhost plugin dna enable\n')),(0,l.kt)("p",null,"Full documentation about distributed numeric assignment ",(0,l.kt)("a",{parentName:"p",href:"https://directory.fedoraproject.org/docs/389ds/design/dna-plugin.html"},"here"),"."),(0,l.kt)("p",null,"Restart the server after the changes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl delete pod -n ldap dirsrv-389ds-0\n")),(0,l.kt)("p",null,"The database may have been destroyed because of the plugin, ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl exec")," in the container and run again:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="pod: dirsrv-389ds-0 (namespace: ldap)"',title:'"pod:',"dirsrv-389ds-0":!0,"(namespace:":!0,'ldap)"':!0},"dsconf localhost backend create --suffix dc=example,dc=com --be-name example_backend\ndsidm localhost initialise\n")),(0,l.kt)("h2",{id:"snippets"},"Snippets"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Add user:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="pod: dirsrv-389ds-0 (namespace: ldap)"',title:'"pod:',"dirsrv-389ds-0":!0,"(namespace:":!0,'ldap)"':!0},'dsidm -b "dc=example,dc=com" localhost user create \\\n  --uid example-user \\\n  --cn example-user \\\n  --displayName example-user \\\n  --homeDirectory "/dev/shm" \\\n  --uidNumber -1 \\\n  --gidNumber 1600\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Create group:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="pod: dirsrv-389ds-0 (namespace: ldap)"',title:'"pod:',"dirsrv-389ds-0":!0,"(namespace:":!0,'ldap)"':!0},'dsidm -b "dc=example,dc=com" localhost group create \\\n  --cn cluster-users\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Add posixGroup property and gidNumber")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="pod: dirsrv-389ds-0 (namespace: ldap)"',title:'"pod:',"dirsrv-389ds-0":!0,"(namespace:":!0,'ldap)"':!0},'dsidm -b "dc=example,dc=com" localhost group modify cluster-users \\\n "add:objectClass:posixGroup" \\\n "add:gidNumber:1600"\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Add user to the group")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="pod: dirsrv-389ds-0 (namespace: ldap)"',title:'"pod:',"dirsrv-389ds-0":!0,"(namespace:":!0,'ldap)"':!0},'dsidm -b "dc=example,dc=com" localhost group add_member \\\n  cluster-users \\\n  uid=example-user,ou=people,dc=example,dc=com\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Add a public ssh key to a user")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="pod: dirsrv-389ds-0 (namespace: ldap)"',title:'"pod:',"dirsrv-389ds-0":!0,"(namespace:":!0,'ldap)"':!0},'dsidm -b "dc=example,dc=com" localhost user modify \\\n  example-user add:nsSshPublicKey:"...."\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Set user password")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="pod: dirsrv-389ds-0 (namespace: ldap)"',title:'"pod:',"dirsrv-389ds-0":!0,"(namespace:":!0,'ldap)"':!0},'dsidm -b "dc=example,dc=com" localhost user modify \\\n  example-user add:userPassword:"...."\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Adding indexes")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="pod: dirsrv-389ds-0 (namespace: ldap)"',title:'"pod:',"dirsrv-389ds-0":!0,"(namespace:":!0,'ldap)"':!0},"dsconf localhost backend index add --index-type eq --attr uidNumber example_backend\ndsconf localhost backend index add --index-type eq --attr gidNumber example_backend\ndsconf localhost backend index add --index-type eq --attr nsSshPublicKey example_backend\ndsconf localhost backend index reindex example_backend\n")))}u.isMDXComponent=!0}}]);