"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[4859],{7942:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(959);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),y=l(r),g=o,u=y["".concat(c,".").concat(g)]||y[g]||d[g]||a;return r?n.createElement(u,i(i({ref:t},p),{},{components:r})):n.createElement(u,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},2664:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(665),o=(r(959),r(7942));const a={},i="5. Adding the Git repository to ArgoCD",s={unversionedId:"getting-started/adding-repository-argocd",id:"getting-started/adding-repository-argocd",title:"5. Adding the Git repository to ArgoCD",description:"Argo CD can retrieve your repository from your Git hosting server, synchronize changes and deploy your Kubernetes manifests.",source:"@site/docs/getting-started/05-adding-repository-argocd.md",sourceDirName:"getting-started",slug:"/getting-started/adding-repository-argocd",permalink:"/docs/getting-started/adding-repository-argocd",draft:!1,editUrl:"https://github.com/deepsquare-io/ClusterFactory/tree/main/web/docs/getting-started/05-adding-repository-argocd.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"docs",previous:{title:"4. Core Apps Deployment",permalink:"/docs/getting-started/core-apps-deployment"},next:{title:"6. Grendel Deployment",permalink:"/docs/getting-started/grendel-deployment"}},c={},l=[],p={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"5-adding-the-git-repository-to-argocd"},"5. Adding the Git repository to ArgoCD"),(0,o.kt)("p",null,"Argo CD can retrieve your repository from your Git hosting server, synchronize changes and deploy your Kubernetes manifests."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a local secret containing ",(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys#set-up-deploy-keys"},"an SSH deploy key")," and the git URL:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/default/secrets/my-repository-secret.yaml.local"',title:'"argo/default/secrets/my-repository-secret.yaml.local"'},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: my-repository-secret\n  namespace: argocd\n  labels:\n    argocd.argoproj.io/secret-type: repository\ntype: Opaque\nstringData:\n  sshPrivateKey: |\n    -----BEGIN RSA PRIVATE KEY-----\n    -----END RSA PRIVATE KEY-----\n  type: git\n  url: git@github.com:<your account>/<your repo>.git\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Seal it and apply it:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cfctl kubeseal\nkubectl apply -f argo/default/secrets/my-repository-sealed-secret.yaml\n")))}d.isMDXComponent=!0}}]);