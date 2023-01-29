"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[5970],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(665),a=(r(9496),r(9613));const o={},i="K0s, the Kubernetes distribution for bare-metal",s={unversionedId:"main-concepts/k0s",id:"main-concepts/k0s",title:"K0s, the Kubernetes distribution for bare-metal",description:"Further information can be found on their website: k0sproject.io.",source:"@site/docs/main-concepts/01-k0s.md",sourceDirName:"main-concepts",slug:"/main-concepts/k0s",permalink:"/docs/main-concepts/k0s",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory/tree/main/web/docs/main-concepts/01-k0s.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"7. xCAT Configuration",permalink:"/docs/getting-started/xcat-configuration"},next:{title:"MetalLB, the bare-metal Load Balancer",permalink:"/docs/main-concepts/core-network/metallb"}},c={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"k0s-the-kubernetes-distribution-for-bare-metal"},"K0s, the Kubernetes distribution for bare-metal"),(0,a.kt)("p",null,"Further information can be found on their website: ",(0,a.kt)("a",{parentName:"p",href:"https://k0sproject.io"},"k0sproject.io"),"."),(0,a.kt)("p",null,"The reasons we are using k0s instead of kubeadm, k3s, ...:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It's ",(0,a.kt)("strong",{parentName:"li"},"light and customizable")," via a single YAML file, in a declarative way, therefore we can store the configuration of the whole cluster inside a git repository."),(0,a.kt)("li",{parentName:"ul"},"It allows ",(0,a.kt)("strong",{parentName:"li"},"HA, multi-node and single node deployment"),"."),(0,a.kt)("li",{parentName:"ul"},"It runs with a single binary, ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/k0sproject/k0s"},"k0s"),"."),(0,a.kt)("li",{parentName:"ul"},"It's open-source, including cfctl."),(0,a.kt)("li",{parentName:"ul"},"It's a vanilla Kubernetes meaning it gets updated fast."),(0,a.kt)("li",{parentName:"ul"},"It allows ",(0,a.kt)("strong",{parentName:"li"},"easy upgrade, backup and restores"),".")),(0,a.kt)("p",null,"ClusterFactory aims to be an orchestrator for many various workloads, including bare-metal and cloud workloads. Maintainability, ease of use, and declarative configuration are the keys to good long-term development. And that's exactly what k0s brings us."))}p.isMDXComponent=!0}}]);