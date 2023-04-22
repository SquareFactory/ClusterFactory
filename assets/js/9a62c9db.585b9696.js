"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[7672],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,f=p["".concat(i,".").concat(h)]||p[h]||d[h]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9754:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(9496),a=n(5924);const l="tabItem_pxx2";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},6789:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(665),a=n(9496),l=n(5924),o=n(5734),s=n(732),i=n(3478),c=n(573);function u(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,u]=h({queryString:n,groupId:r}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),b=(()=>{const e=i??f;return p({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var m=n(1676),b=n(3321);const g="tabList_f5DR",v="tabItem_f81j";function k(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,m.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=i[n].value;r!==o&&(u(t),s(r))},p=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:d},s,{className:(0,l.Z)("tabs__item",v,null==s?void 0:s.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function E(e){const t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function x(e){const t=(0,b.Z)();return a.createElement(E,(0,r.Z)({key:String(t)},e))}},2531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(665),a=(n(9496),n(9613)),l=n(6789),o=n(9754);const s={},i="Creating a highly available cluster",c={unversionedId:"guides/maintenance/high-availability",id:"guides/maintenance/high-availability",title:"Creating a highly available cluster",description:"You can set up a HA cluster any time without destroying your old cluster.",source:"@site/docs/guides/30-maintenance/01-high-availability.md",sourceDirName:"guides/30-maintenance",slug:"/guides/maintenance/high-availability",permalink:"/docs/guides/maintenance/high-availability",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory/tree/main/web/docs/guides/30-maintenance/01-high-availability.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"Exposing your Kubernetes Workload",permalink:"/docs/guides/exposing-k8s-workloads"},next:{title:"Updating the K0s cluster",permalink:"/docs/guides/maintenance/updating-k0s-cluster"}},u={},d=[{value:"The architecture of a High-Available Kubernetes cluster",id:"the-architecture-of-a-high-available-kubernetes-cluster",level:2},{value:"Setting up the HA cluster",id:"setting-up-the-ha-cluster",level:2},{value:"1. Setting up HAProxy",id:"1-setting-up-haproxy",level:3},{value:"2. Editing <code>cfctl.yaml</code> to set up the nodes",id:"2-editing-cfctlyaml-to-set-up-the-nodes",level:3},{value:"Verify everything is good",id:"verify-everything-is-good",level:3}],p={toc:d};function h(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-a-highly-available-cluster"},"Creating a highly available cluster"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can set up a HA cluster any time without destroying your old cluster.")),(0,a.kt)("p",null,"This guide is about setting up a highly available Kubernetes cluster with stacked control plane nodes. The etcd members and control plane nodes are co-located."),(0,a.kt)("p",null,"We use HAProxy for the Load Balancer of the control plane."),(0,a.kt)("h2",{id:"the-architecture-of-a-high-available-kubernetes-cluster"},"The architecture of a High-Available Kubernetes cluster"),(0,a.kt)("p",null,"To set up a highly available Kubernetes cluster, you need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A load balancer (a cloud load balancer or HAProxy) which can route the traffic to the control plane nodes and to the following ports.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"6443 (for Kubernetes API)"),(0,a.kt)("li",{parentName:"ul"},"8132 (for Konnectivity)"),(0,a.kt)("li",{parentName:"ul"},"9443 (for controller join API)"))),(0,a.kt)("li",{parentName:"ul"},"3 or more machines, preferably one per failure zone. Having an odd number of control plane nodes can help with leader selection in the case of machine or zone failure.")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"high-availability_overview",src:n(407).Z+"#white-bg",width:"764",height:"767"}))),(0,a.kt)("p",null,"The kubectl will connect to the load-balancer."),(0,a.kt)("h2",{id:"setting-up-the-ha-cluster"},"Setting up the HA cluster"),(0,a.kt)("h3",{id:"1-setting-up-haproxy"},"1. Setting up HAProxy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"On a machine able to route the traffic to all the control plane nodes, install HAProxy:")),(0,a.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"dnf",label:"dnf",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="root@haproxy"',title:'"root@haproxy"'},"dnf install haproxy\n"))),(0,a.kt)(o.Z,{value:"apt",label:"apt",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="root@haproxy"',title:'"root@haproxy"'},"apt install haproxy\n")))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Edit ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/haproxy/haproxy.cfg"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties",metastring:'title="/etc/haproxy/haproxy.cfg"',title:'"/etc/haproxy/haproxy.cfg"'},"global\n    log         127.0.0.1 local2\n\n    chroot      /var/lib/haproxy\n    pidfile     /var/run/haproxy.pid\n    maxconn     4000\n    user        haproxy\n    group       haproxy\n    daemon\n\n    # turn on stats unix socket\n    stats socket /var/lib/haproxy/stats\n\n    # utilize system-wide crypto-policies\n    ssl-default-bind-ciphers PROFILE=SYSTEM\n    ssl-default-server-ciphers PROFILE=SYSTEM\n\ndefaults\n    mode                    http\n    log                     global\n    option                  httplog\n    option                  dontlognull\n    timeout connect         10s\n    timeout client          86400s\n    timeout server          86400s\n    timeout tunnel          86400s\n    maxconn                 3000\n\n# Fronends\nfrontend kubeAPI\n    bind :6443\n    mode tcp\n    default_backend kubeAPI_backend\nfrontend konnectivity\n    bind :8132\n    mode tcp\n    default_backend konnectivity_backend\nfrontend controllerJoinAPI\n    bind :9443\n    mode tcp\n    default_backend controllerJoinAPI_backend\n\n# Backends\nbackend kubeAPI_backend\n    mode tcp\n    balance leastconn\n    server k0s-ch-sion-1 10.10.0.2:6443 check check-ssl verify none\n    server k0s-at-vie-1 10.10.1.2:6443 check check-ssl verify none\n    server k0s-de-fra-1 10.10.2.2:6443 check check-ssl verify none\nbackend konnectivity_backend\n    mode tcp\n    balance leastconn\n    server k0s-ch-sion-1 10.10.0.2:8132 check check-ssl verify none\n    server k0s-at-vie-1 10.10.1.2:8132 check check-ssl verify none\n    server k0s-de-fra-1 10.10.2.2:8132 check check-ssl verify none\nbackend controllerJoinAPI_backend\n    mode tcp\n    balance leastconn\n    server k0s-ch-sion-1 10.10.0.2:9443 check check-ssl verify none\n    server k0s-at-vie-1 10.10.1.2:9443 check check-ssl verify none\n    server k0s-de-fra-1 10.10.2.2:9443 check check-ssl verify none\n\n# Listen\nlisten stats\n    bind *:9000\n    mode http\n    stats enable\n    stats uri /\n")),(0,a.kt)("h3",{id:"2-editing-cfctlyaml-to-set-up-the-nodes"},"2. Editing ",(0,a.kt)("inlineCode",{parentName:"h3"},"cfctl.yaml")," to set up the nodes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="cfctl.yaml"',title:'"cfctl.yaml"'},'apiVersion: cfctl.clusterfactory.io/v1beta1\nkind: Cluster\nmetadata:\n  name: k8s.example.com-cluster\nspec:\n  hosts:\n    - ssh:\n        address: 10.10.0.2\n        user: root\n        port: 22\n        keyPath: ~/.ssh/id_ed25519\n      role: controller+worker\n      noTaints: true\n      privateInterface: eth0\n      privateAddress: 10.10.0.2\n      installFlags:\n        - --debug\n        - --labels="topology.kubernetes.io/region=ch-sion,topology.kubernetes.io/zone=ch-sion-1"\n        - --disable-components coredns\n      hooks:\n        apply:\n          before:\n            # Set SELinux Permissive\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then sed -i s/^SELINUX=.*$/SELINUX=permissive/ /etc/selinux/config; fi\'\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then setenforce 0; fi\'\n\n    - ssh:\n        address: 10.10.1.2\n        user: root\n        port: 22\n        keyPath: ~/.ssh/id_ed25519\n      role: controller+worker\n      noTaints: true\n      privateInterface: eth0\n      privateAddress: 10.10.1.2\n      installFlags:\n        - --debug\n        - --labels="topology.kubernetes.io/region=at-vie,topology.kubernetes.io/zone=at-vie-1"\n        - --disable-components coredns\n      hooks:\n        apply:\n          before:\n            # Set SELinux Permissive\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then sed -i s/^SELINUX=.*$/SELINUX=permissive/ /etc/selinux/config; fi\'\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then setenforce 0; fi\'\n\n    - ssh:\n        address: 10.10.3.2\n        user: root\n        port: 22\n        keyPath: ~/.ssh/id_ed25519\n      role: controller+worker\n      noTaints: true\n      privateInterface: eth0\n      privateAddress: 10.10.3.2\n      installFlags:\n        - --debug\n        - --labels="topology.kubernetes.io/region=de-fra,topology.kubernetes.io/zone=de-fra-1"\n        - --disable-components coredns\n      hooks:\n        apply:\n          before:\n            # Set SELinux Permissive\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then sed -i s/^SELINUX=.*$/SELINUX=permissive/ /etc/selinux/config; fi\'\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then setenforce 0; fi\'\n\n  k0s:\n    ...\n\n    config:\n      ...\n\n      spec:\n        api:\n          k0sApiPort: 9443\n          port: 6443\n          externalAddress: 10.10.4.10 # LB address\n          sans:\n            - 10.10.4.10\n')),(0,a.kt)("p",null,"Apply the config and be patient:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cfctl apply --debug --config=cfctl.yaml\n")),(0,a.kt)("h3",{id:"verify-everything-is-good"},"Verify everything is good"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'cfctl kubeconfig --config ./cfctl.yaml >./kubeconfig\nchmod 600 ./kubeconfig\nexport KUBECONFIG="$(pwd)/kubeconfig"\nkubectl get nodes\n# NAME            STATUS   ROLES           AGE     VERSION\n# k0s-ch-sion-1   Ready    control-plane   61d     v1.23.6+k0s\n# k0s-at-vie-1    Ready    control-plane   3d22h   v1.23.6+k0s\n# k0s-de-fra-1    Ready    control-plane   4d      v1.23.6+k0s\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"On a controller node"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# Install etcdctl\nETCD_VER=v3.5.2\nOS=linux\nARCH=amd64\ncurl -fsSL https://github.com/etcd-io/etcd/releases/download/${ETCD_VER}/etcd-${ETCD_VER}-${OS}-${ARCH}.tar.gz | tar -xvzf - "etcd-${ETCD_VER}-${OS}-${ARCH}/etcdctl"\nmkdir -p /usr/local/bin/\nmv "etcd-${ETCD_VER}-${OS}-${ARCH}/etcdctl" /usr/local/bin/etcdctl\nrmdir "etcd-${ETCD_VER}-${OS}-${ARCH}"\n\n# Verify\netcdctl --endpoints=https://127.0.0.1:2379 --key=/var/lib/k0s/pki/etcd/server.key --cert=/var/lib/k0s/pki/etcd/server.crt --insecure-skip-tls-verify member list\n# abcdef1234567890, started, k0s-ch-sion-1, https://10.10.0.2:2380, https://127.0.0.1:2379, false\n# deadcafe12345678, started, k0s-at-vie-1, https://10.10.1.2:2380, https://127.0.0.1:2379, false\n# deaddead12345678, started, k0s-de-fra-1, https://10.10.2.2:2380, https://127.0.0.1:2379, false\n')))}h.isMDXComponent=!0},407:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/high-availability_overview-f20a13ff0ff3b84e5c0093aa23e97070.png"}}]);