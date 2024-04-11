"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[3976],{4716:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=a(1527),t=a(2471),s=a(7743),o=a(4934);const l={},i="Exposing your Kubernetes Workload",c={id:"guides/exposing-k8s-workloads",title:"Exposing your Kubernetes Workload",description:"This guide repeats the same instructions as the Getting Started, but with slighly more descriptions.",source:"@site/docs/guides/02-exposing-k8s-workloads.mdx",sourceDirName:"guides",slug:"/guides/exposing-k8s-workloads",permalink:"/docs/guides/exposing-k8s-workloads",draft:!1,unlisted:!1,editUrl:"https://github.com/deepsquare-io/ClusterFactory/tree/main/web/docs/guides/02-exposing-k8s-workloads.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"CernVM-FS, A Scalable, Distributed Read-Only File-System",permalink:"/docs/main-concepts/apps/cvmfs"},next:{title:"Creating a highly available cluster",permalink:"/docs/guides/maintenance/high-availability"}},d={},u=[{value:"The different entrypoints",id:"the-different-entrypoints",level:2},{value:"The official way: LoadBalancer/NodePort Service",id:"the-official-way-loadbalancernodeport-service",level:3},{value:"The <code>hostPort</code> way",id:"the-hostport-way",level:3},{value:"The <code>ipvlan</code> way",id:"the-ipvlan-way",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"exposing-your-kubernetes-workload",children:"Exposing your Kubernetes Workload"}),"\n","\n",(0,r.jsxs)(n.p,{children:["This guide repeats the same instructions as the ",(0,r.jsx)(n.a,{href:"/docs/getting-started/core-apps-deployment#coredns-configuration",children:"Getting Started"}),", but with slighly more descriptions."]}),"\n",(0,r.jsx)(n.h2,{id:"the-different-entrypoints",children:"The different entrypoints"}),"\n",(0,r.jsx)(n.p,{children:"To avoid mixing IP, this is a small reminder."}),"\n",(0,r.jsx)(n.p,{children:"If MetalLB and Multus CNI have been successfully deployed, you now have several types of entry points to access a Kubernetes service."}),"\n",(0,r.jsx)(n.h3,{id:"the-official-way-loadbalancernodeport-service",children:"The official way: LoadBalancer/NodePort Service"}),"\n",(0,r.jsx)(n.p,{children:"Traefik has been configured to be the main Load Balancer. Its IP can be configured and exposed via MetalLB. Like so:"}),"\n",(0,r.jsxs)(s.Z,{groupId:"metallb-config",children:[(0,r.jsxs)(o.Z,{value:"l2",label:"L2/ARP",default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="core/metallb/address-pools.yaml"',children:"apiVersion: metallb.io/v1beta1\nkind: IPAddressPool\nmetadata:\n  name: main-pool\n  namespace: metallb\nspec:\n  addresses:\n    - 192.168.1.100/32\n"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="core/metallb/advertisements.yaml"',children:"apiVersion: metallb.io/v1beta1\nkind: L2Advertisement\nmetadata:\n  name: l2-advertisement\n  namespace: metallb\nspec:\n  ipAddressPools:\n    - main-pool\n"})})]}),(0,r.jsxs)(o.Z,{value:"bgp",label:"BGP",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="core/metallb/address-pools.yaml"',children:"apiVersion: metallb.io/v1beta1\nkind: IPAddressPool\nmetadata:\n  name: main-pool\n  namespace: metallb\nspec:\n  addresses:\n    - 192.168.1.100/32\n"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="core/metallb/peers.yaml"',children:"apiVersion: metallb.io/v1beta2\nkind: BGPPeer\nmetadata:\n  name: main-router\n  namespace: metallb\nspec:\n  myASN: 65001 # MetalLB Speaker ASN (Autonomous System Number)\n  peerASN: 65000 # The router ASN\n  peerAddress: 192.168.0.1 # The router address\n"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="core/metallb/advertisements.yaml"',children:"apiVersion: metallb.io/v1beta1\nkind: BGPAdvertisement\nmetadata:\n  name: bgp-advertisement\n  namespace: metallb\nspec:\n  ipAddressPools:\n    - main-pool\n"})})]})]}),"\n",(0,r.jsx)(n.p,{children:"The router will see this address and can forward external traffic to this IP."}),"\n",(0,r.jsxs)(n.p,{children:["To expose a Kubernetes pod, you will need to create a ",(0,r.jsx)(n.code,{children:"Service"})," and an ",(0,r.jsx)(n.code,{children:"Ingress"}),"/",(0,r.jsx)(n.code,{children:"IngressRoute"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Service"})," will expose the pod to the other pods. The ",(0,r.jsx)(n.code,{children:"Ingress"}),"/",(0,r.jsx)(n.code,{children:"IngressRoute"})," will forward the traffic based on rules."]}),"\n",(0,r.jsx)(n.p,{children:"The rules are often based on the domain name, therefore, you have to configure your DNS (or CoreDNS)."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Scenario 1: I want to expose my Kubernetes pod to the world wide web."})}),"\n",(0,r.jsx)(n.p,{children:"Then, you need to configure the DNS from a domain name registrar (like Google Domains, for example)."}),"\n",(0,r.jsxs)(n.p,{children:["The A record (or AAAA record) that you have to add is ",(0,r.jsx)(n.code,{children:"my-app.example.com -> <router public ip>"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"If your kubernetes is multi-site and have multiple routers/IPs to the world wide web, you can create 2 DNS records for maximum Load Balancing:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"A record (GEO) lb.example.com.  --\x3e <router 1 public ip>\n                                --\x3e <router 2 public ip>\nCNAME record my-app.example.com --\x3e lb.example.com\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Scenario 2: I want to expose my Kubenetes pod to the local network."})}),"\n",(0,r.jsx)(n.p,{children:"Then, you can use a self-hosted DNS. Luckily, Kubernetes comes with a DNS integrated called CoreDNS."}),"\n",(0,r.jsx)(n.p,{children:"By default, CoreDNS is exposed to the local network through:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"hostPort"}),"s: Kubernetes nodes will have ports 53/udp and 53/tcp open."]}),"\n",(0,r.jsx)(n.li,{children:"The Load Balancer: Traefik will have ports 53/udp and 53/tcp open."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"You can configure your nodes to have a DNS config like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-config",metastring:'title="/etc/resolv.conf"',children:"nameserver <load balancer IP>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Or like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-config",metastring:'title="/etc/resolv.conf"',children:"nameserver <kubernetes node IP>\n"})}),"\n",(0,r.jsx)(n.p,{children:"To add DNS records, you will need to direcly edit the CoreDNS configuration file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="core/coredns/overlays/prod/configmap.yaml"',children:"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: coredns\n  namespace: kube-system\n  labels:\n    k0s.k0sproject.io/stack: coredns\ndata:\n  Corefile: |\n    .:53 {\n      errors\n      health {\n        lameduck 5s\n      }\n      ready\n      kubernetes cluster.local in-addr.arpa ip6.arpa {\n        pods insecure\n        fallthrough in-addr.arpa ip6.arpa\n        ttl 30\n      }\n      prometheus :9153\n      forward . 8.8.8.8\n      cache 30\n      loop\n      reload\n      loadbalance\n      }\n      internal:53 {\n        log\n        errors\n        ready\n        hosts /etc/coredns/internal.db\n        reload\n      }\n\n  internal.db: |\n    <load balancer IP> my-app.internal\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",metastring:'title="core/coredns/overlays/prod/deployment.yaml > spec > template > spec > volumes"',children:"        volumes:\n          - name: config-volume\n            configMap:\n              name: coredns\n              items:\n                - key: Corefile\n                  path: Corefile\n+               - key: internal.db\n+                 path: internal.db\n              defaultMode: 420\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can test your configuration by using ",(0,r.jsx)(n.code,{children:"dig"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# Use host DNS configuration\ndig my-app.internal\n# Explicit DNS server\ndig @<DNS IP> my-app.internal\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"the-hostport-way",children:["The ",(0,r.jsx)(n.code,{children:"hostPort"})," way"]}),"\n",(0,r.jsxs)(n.p,{children:["Containers can be exposed to the local network by using ",(0,r.jsx)(n.code,{children:"hostPort"}),". ",(0,r.jsx)(n.code,{children:"hostPort"})," will use the Kubernetes host to expose the port."]}),"\n",(0,r.jsxs)(n.p,{children:["It is efficient to use ",(0,r.jsx)(n.code,{children:"hostPort"}),' when using a DaemonSet. However, when using a Deployment, you will need to "stick" the pod to the node using a ',(0,r.jsx)(n.code,{children:"nodeSelector"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Scenario 3: I want to expose my Kubenetes pod stuck on the controller node to the local network."})}),"\n",(0,r.jsx)(n.p,{children:"To add DNS records, you will need to direcly edit the CoreDNS configuration file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="core/coredns/overlays/prod/configmap.yaml"',children:"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: coredns\n  namespace: kube-system\n  labels:\n    k0s.k0sproject.io/stack: coredns\ndata:\n  Corefile: |\n    .:53 {\n      errors\n      health {\n        lameduck 5s\n      }\n      ready\n      kubernetes cluster.local in-addr.arpa ip6.arpa {\n        pods insecure\n        fallthrough in-addr.arpa ip6.arpa\n        ttl 30\n      }\n      prometheus :9153\n      forward . 8.8.8.8\n      cache 30\n      loop\n      reload\n      loadbalance\n      }\n      internal:53 {\n        log\n        errors\n        ready\n        hosts /etc/coredns/internal.db\n        reload\n      }\n\n  internal.db: |\n    <kubernetes node IP> my-app.internal\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",metastring:'title="core/coredns/overlays/prod/deployment.yaml > spec > template > spec > volumes"',children:"        volumes:\n          - name: config-volume\n            configMap:\n              name: coredns\n              items:\n                - key: Corefile\n                  path: Corefile\n+               - key: internal.db\n+                 path: internal.db\n              defaultMode: 420\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can test your configuration by using ",(0,r.jsx)(n.code,{children:"dig"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# Use host DNS configuration\ndig my-app.internal\n# Explicit DNS server\ndig @<DNS IP> my-app.internal\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"the-ipvlan-way",children:["The ",(0,r.jsx)(n.code,{children:"ipvlan"})," way"]}),"\n",(0,r.jsx)(n.p,{children:"Using Multus, it is possible to attach an additional network interface to a pod. By using ipvlan like so:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="network-attachment-definition.yaml"',children:'apiVersion: \'k8s.cni.cncf.io/v1\'\nkind: NetworkAttachmentDefinition\nmetadata:\n  name: my-net\n  namespace: namespace\nspec:\n  config: |\n    {\n      "cniVersion": "0.4.0",\n      "type": "ipvlan",\n      "master": "eth0",\n      "mode": "l2",\n      "ipam": {\n        "type": "static",\n        "addresses": [\n          "<address CIDR: 192.168.0.3/24>"\n        ]\n      }\n    }\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="pod.yaml"',children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: myapp\n  labels:\n    name: myapp\n  annotations:\n    k8s.v1.cni.cncf.io/networks: 'namespace/my-net'\nspec:\n  containers:\n    - name: myapp\n      image: <Image>\n      resources:\n        limits:\n          memory: '128Mi'\n          cpu: '500m'\n      ports:\n        - containerPort: 80\n"})}),"\n",(0,r.jsxs)(n.p,{children:["the pod is exposed using the attachment and has the IP 192.168.0.3. Pay attention to the routing! Currently the ",(0,r.jsx)(n.code,{children:"192.168.0.0/24"})," will go through the network interface, but everything else will go to the default Kubernetes network interface."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Scenario 4: I want to expose my Kubenetes pod to the local network without attaching to a specific node."})}),"\n",(0,r.jsx)(n.p,{children:"To add DNS records, you will need to direcly edit the CoreDNS configuration file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="core/coredns/overlays/prod/configmap.yaml"',children:"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: coredns\n  namespace: kube-system\n  labels:\n    k0s.k0sproject.io/stack: coredns\ndata:\n  Corefile: |\n    .:53 {\n      errors\n      health {\n        lameduck 5s\n      }\n      ready\n      kubernetes cluster.local in-addr.arpa ip6.arpa {\n        pods insecure\n        fallthrough in-addr.arpa ip6.arpa\n        ttl 30\n      }\n      prometheus :9153\n      forward . 8.8.8.8\n      cache 30\n      loop\n      reload\n      loadbalance\n      }\n      internal:53 {\n        log\n        errors\n        ready\n        hosts /etc/coredns/internal.db\n        reload\n      }\n\n  internal.db: |\n    <network attachment IP> my-app.internal\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",metastring:'title="core/coredns/overlays/prod/deployment.yaml > spec > template > spec > volumes"',children:"        volumes:\n          - name: config-volume\n            configMap:\n              name: coredns\n              items:\n                - key: Corefile\n                  path: Corefile\n+               - key: internal.db\n+                 path: internal.db\n              defaultMode: 420\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can test your configuration by using ",(0,r.jsx)(n.code,{children:"dig"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# Use host DNS configuration\ndig my-app.internal\n# Explicit DNS server\ndig @<DNS IP> my-app.internal\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},4934:(e,n,a)=>{a.d(n,{Z:()=>o});a(959);var r=a(6259);const t={tabItem:"tabItem_oz2N"};var s=a(1527);function o(e){let{children:n,hidden:a,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(t.tabItem,o),hidden:a,children:n})}},7743:(e,n,a)=>{a.d(n,{Z:()=>k});var r=a(959),t=a(6259),s=a(3297),o=a(8903),l=a(4486),i=a(4959),c=a(8136),d=a(4625);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:r,default:t}}=e;return{value:n,label:a,attributes:r,default:t}}))}(a);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const t=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function g(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,s=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:a,groupId:t}),[g,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,d.Nk)(a);return[t,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:t}),b=(()=>{const e=c??g;return h({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=a(943);const b={tabList:"tabList_wWmL",tabItem:"tabItem_jKVL"};var y=a(1527);function x(e){let{className:n,block:a,selectedValue:r,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,a=i.indexOf(n),t=l[a].value;t!==r&&(c(n),o(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=i[a]??i[i.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...s,className:(0,t.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:a??n},n)}))})}function v(e){let{lazy:n,children:a,selectedValue:t}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function j(e){const n=g(e);return(0,y.jsxs)("div",{className:(0,t.Z)("tabs-container",b.tabList),children:[(0,y.jsx)(x,{...e,...n}),(0,y.jsx)(v,{...e,...n})]})}function k(e){const n=(0,f.Z)();return(0,y.jsx)(j,{...e,children:u(e.children)},String(n))}},2471:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>o});var r=a(959);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);