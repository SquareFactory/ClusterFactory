"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[518],{7942:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(959);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2455:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(665),o=(r(959),r(7942));const i={},a="Argo CD",c={unversionedId:"main-concepts/gitops/argocd",id:"main-concepts/gitops/argocd",title:"Argo CD",description:"Argo CD is a GitOps continuous delivery solution for Kubernetes. It clones, retrieves",source:"@site/docs/main-concepts/03-gitops/03-argocd.md",sourceDirName:"main-concepts/03-gitops",slug:"/main-concepts/gitops/argocd",permalink:"/docs/main-concepts/gitops/argocd",draft:!1,editUrl:"https://github.com/deepsquare-io/ClusterFactory/tree/main/web/docs/main-concepts/03-gitops/03-argocd.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"docs",previous:{title:"Multus CNI, the Swiss army knife of networking",permalink:"/docs/main-concepts/core-network/multus-cni"},next:{title:"cert-manager",permalink:"/docs/main-concepts/gitops/cert-manager"}},s={},l=[],p={toc:l};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"argo-cd"},"Argo CD"),(0,o.kt)("p",null,"Argo CD is a GitOps continuous delivery solution for Kubernetes. It clones, retrieves\nall changes from a Git repository and deploys the application based on the declarative\ndefinition files."),(0,o.kt)("p",null,"In this way, we can set up a zero-trust infrastructure where all we need\nto do is modify the YAML files in the Git repository, and Argo CD will deploy\nautomatically."),(0,o.kt)("p",null,"Everything is stored in the Git repository like volumes, Argo CD applications,\n... The Git repository becomes the source of truth and everyone can access it safely."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20220504165709859",src:r(3936).Z,width:"1525",height:"692"})),(0,o.kt)("p",null,"Argo CD has also a dashboard, which permits a great visualization of the cluster, for administrators and operators."),(0,o.kt)("p",null,"Argo CD can be replaced with ",(0,o.kt)("a",{parentName:"p",href:"https://fluxcd.io"},"Flux CD"),"."))}u.isMDXComponent=!0},3936:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20220504165709859-16d64c47471410717d61e902a493d90e.png"}}]);