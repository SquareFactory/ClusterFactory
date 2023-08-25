"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[6028],{7942:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(959);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1222:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=r(665),i=(r(959),r(7942));const o={},a="Deploy a VM with KubeVirt",u={unversionedId:"guides/kubevirt/deploy-vm",id:"guides/kubevirt/deploy-vm",title:"Deploy a VM with KubeVirt",description:"This guide is still a draft.",source:"@site/docs/guides/80-kubevirt/01-deploy-vm.md",sourceDirName:"guides/80-kubevirt",slug:"/guides/kubevirt/deploy-vm",permalink:"/docs/guides/kubevirt/deploy-vm",draft:!1,editUrl:"https://github.com/deepsquare-io/ClusterFactory/tree/main/web/docs/guides/80-kubevirt/01-deploy-vm.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"Deploy a CVMFS Stratum 1",permalink:"/docs/guides/cvmfs/deploy-cvmfs"},next:{title:"Overview",permalink:"/docs/guides/storage/overview"}},c={},l=[],p={toc:l};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploy-a-vm-with-kubevirt"},"Deploy a VM with KubeVirt"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This guide is still a draft.")),(0,i.kt)("p",null,"The best guide is on the official documentation of ",(0,i.kt)("a",{parentName:"p",href:"https://kubevirt.io/user-guide/virtual_machines/virtual_machine_instances/"},"KubeVirt"),", including the ",(0,i.kt)("a",{parentName:"p",href:"https://kubevirt.io/2018/attaching-to-multiple-networks.html"},"guide about Multus"),"."),(0,i.kt)("p",null,"You cannot use ",(0,i.kt)("inlineCode",{parentName:"p"},"macvlan")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"ipvlan"),". Our recommendation is to use ",(0,i.kt)("inlineCode",{parentName:"p"},"openvswitch"),"."))}s.isMDXComponent=!0}}]);