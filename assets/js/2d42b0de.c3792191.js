"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[865],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2394:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(665),i=(r(9496),r(9613));const a={},l="Installing the utilities",o={unversionedId:"guides/installing-the-utilities",id:"guides/installing-the-utilities",title:"Installing the utilities",description:"You need 4 command line tools to be able to manage your Kubernetes cluster:",source:"@site/docs/guides/00-installing-the-utilities.md",sourceDirName:"guides",slug:"/guides/installing-the-utilities",permalink:"/docs/guides/installing-the-utilities",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory/tree/main/web/docs/guides/00-installing-the-utilities.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"docs",previous:{title:"CernVM-FS, A Scalable, Distributed Read-Only File-System",permalink:"/docs/main-concepts/apps/cvmfs"},next:{title:"Setting up the Git repository for GitOps",permalink:"/docs/guides/setting-up-repository"}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installing-the-utilities"},"Installing the utilities"),(0,i.kt)("p",null,"You need 4 command line tools to be able to manage your Kubernetes cluster:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SquareFactory/cfctl/releases"},(0,i.kt)("inlineCode",{parentName:"a"},"cfctl")),", for deployment, backup, and upgrading of the Kubernetes cluster."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},(0,i.kt)("inlineCode",{parentName:"a"},"kubectl")),", for managing your Kubernetes cluster."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bitnami-labs/sealed-secrets/releases/"},(0,i.kt)("inlineCode",{parentName:"a"},"kubeseal")),", for encrypting the secrets."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/helm/helm/releases/"},(0,i.kt)("inlineCode",{parentName:"a"},"helm")),", for Helm chart template.")),(0,i.kt)("p",null,"We have a script inside the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/ClusterFactory/tree/main/scripts"},(0,i.kt)("inlineCode",{parentName:"a"},"scripts"))," directory to install and set up a working environment."),(0,i.kt)("p",null,"Just run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},". ./scripts/setup-env\n")),(0,i.kt)("p",null,"The binaries is stored inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," directory and the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," is automatically set."))}p.isMDXComponent=!0}}]);