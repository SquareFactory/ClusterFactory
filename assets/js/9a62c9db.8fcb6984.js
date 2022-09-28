"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[7672],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8345:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(9496),a=n(5924),l="tabItem_lGZ7";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},6755:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(665),a=n(9496),l=n(5924),o=n(2360),i=n(6410),s=n(5063),c=n(3275),u="tabList_PM_c",d="tabItem_Nx1m";function p(e){var t,n,o=e.lazy,p=e.block,h=e.defaultValue,m=e.values,f=e.groupId,k=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),E=N.tabGroupChoices,x=N.setTabGroupChoices,T=(0,a.useState)(y),O=T[0],C=T[1],w=[],S=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var A=E[f];null!=A&&A!==O&&v.some((function(e){return e.value===A}))&&C(A)}var P=function(e){var t=e.currentTarget,n=w.indexOf(t),r=v[n].value;r!==O&&(S(t),C(r),null!=f&&x(f,String(r)))},$=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=w.indexOf(e.currentTarget)+1;n=null!=(r=w[a])?r:w[0];break;case"ArrowLeft":var l,o=w.indexOf(e.currentTarget)-1;n=null!=(l=w[o])?l:w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},k)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return w.push(e)},onKeyDown:$,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function h(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},9077:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return h}});var r=n(665),a=n(151),l=(n(9496),n(9613)),o=n(6755),i=n(8345),s=["components"],c={},u="Creating a highly available cluster",d={unversionedId:"guides/maintenance/high-availability",id:"guides/maintenance/high-availability",title:"Creating a highly available cluster",description:"You can set up a HA cluster any time without destroying your old cluster.",source:"@site/docs/guides/30-maintenance/01-high-availability.md",sourceDirName:"guides/30-maintenance",slug:"/guides/maintenance/high-availability",permalink:"/docs/guides/maintenance/high-availability",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory-CE/tree/main/web/docs/guides/30-maintenance/01-high-availability.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"Setting up the Git repository for GitOps",permalink:"/docs/guides/setting-up-repository"},next:{title:"Updating the K0s Helm extensions",permalink:"/docs/guides/maintenance/updating-helm-extensions"}},p={},h=[{value:"The architecture of a High-Available Kubernetes cluster",id:"the-architecture-of-a-high-available-kubernetes-cluster",level:2},{value:"Setting up the HA cluster",id:"setting-up-the-ha-cluster",level:2},{value:"1. Setting up HAProxy",id:"1-setting-up-haproxy",level:3},{value:"2. Editing <code>cfctl.yaml</code> to set up the nodes",id:"2-editing-cfctlyaml-to-set-up-the-nodes",level:3},{value:"Verify everything is good",id:"verify-everything-is-good",level:3},{value:"Ejecting a controller",id:"ejecting-a-controller",level:2}],m={toc:h};function f(e){var t=e.components,c=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"creating-a-highly-available-cluster"},"Creating a highly available cluster"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"You can set up a HA cluster any time without destroying your old cluster.")),(0,l.kt)("p",null,"This guide is about setting up a highly available Kubernetes cluster with stacked control plane nodes. The etcd members and control plane nodes are co-located."),(0,l.kt)("p",null,"We use HAProxy for the Load Balancer of the control plane."),(0,l.kt)("h2",{id:"the-architecture-of-a-high-available-kubernetes-cluster"},"The architecture of a High-Available Kubernetes cluster"),(0,l.kt)("p",null,"To set up a highly available Kubernetes cluster, you need:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A load balancer (a cloud load balancer or HAProxy) which can route the traffic to the control plane nodes and to the following ports.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"6443 (for Kubernetes API)"),(0,l.kt)("li",{parentName:"ul"},"8132 (for Konnectivity)"),(0,l.kt)("li",{parentName:"ul"},"9443 (for controller join API)"))),(0,l.kt)("li",{parentName:"ul"},"3 or more machines, preferably one per failure zone. Having an odd number of control plane nodes can help with leader selection in the case of machine or zone failure.")),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"high-availability_overview",src:n(2746).Z+"#white-bg",width:"764",height:"767"}))),(0,l.kt)("p",null,"The kubectl will connect to the load-balancer."),(0,l.kt)("h2",{id:"setting-up-the-ha-cluster"},"Setting up the HA cluster"),(0,l.kt)("h3",{id:"1-setting-up-haproxy"},"1. Setting up HAProxy"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"On a machine able to route the traffic to all the control plane nodes, install HAProxy:")),(0,l.kt)(o.Z,{groupId:"os",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"dnf",label:"dnf",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="root@haproxy"',title:'"root@haproxy"'},"dnf install haproxy\n"))),(0,l.kt)(i.Z,{value:"apt",label:"apt",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="root@haproxy"',title:'"root@haproxy"'},"apt install haproxy\n")))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Edit ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/haproxy/haproxy.cfg"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties",metastring:'title="/etc/haproxy/haproxy.cfg"',title:'"/etc/haproxy/haproxy.cfg"'},"global\n    log         127.0.0.1 local2\n\n    chroot      /var/lib/haproxy\n    pidfile     /var/run/haproxy.pid\n    maxconn     4000\n    user        haproxy\n    group       haproxy\n    daemon\n\n    # turn on stats unix socket\n    stats socket /var/lib/haproxy/stats\n\n    # utilize system-wide crypto-policies\n    ssl-default-bind-ciphers PROFILE=SYSTEM\n    ssl-default-server-ciphers PROFILE=SYSTEM\n\ndefaults\n    mode                    http\n    log                     global\n    option                  httplog\n    option                  dontlognull\n    timeout connect         10s\n    timeout client          86400s\n    timeout server          86400s\n    timeout tunnel          86400s\n    maxconn                 3000\n\n# Fronends\nfrontend kubeAPI\n    bind :6443\n    mode tcp\n    default_backend kubeAPI_backend\nfrontend konnectivity\n    bind :8132\n    mode tcp\n    default_backend konnectivity_backend\nfrontend controllerJoinAPI\n    bind :9443\n    mode tcp\n    default_backend controllerJoinAPI_backend\n\n# Backends\nbackend kubeAPI_backend\n    mode tcp\n    balance leastconn\n    server k0s-ch-sion-1 10.10.0.2:6443 check check-ssl verify none\n    server k0s-at-vie-1 10.10.1.2:6443 check check-ssl verify none\n    server k0s-de-fra-1 10.10.2.2:6443 check check-ssl verify none\nbackend konnectivity_backend\n    mode tcp\n    balance leastconn\n    server k0s-ch-sion-1 10.10.0.2:8132 check check-ssl verify none\n    server k0s-at-vie-1 10.10.1.2:8132 check check-ssl verify none\n    server k0s-de-fra-1 10.10.2.2:8132 check check-ssl verify none\nbackend controllerJoinAPI_backend\n    mode tcp\n    balance leastconn\n    server k0s-ch-sion-1 10.10.0.2:9443 check check-ssl verify none\n    server k0s-at-vie-1 10.10.1.2:9443 check check-ssl verify none\n    server k0s-de-fra-1 10.10.2.2:9443 check check-ssl verify none\n\n# Listen\nlisten stats\n    bind *:9000\n    mode http\n    stats enable\n    stats uri /\n")),(0,l.kt)("h3",{id:"2-editing-cfctlyaml-to-set-up-the-nodes"},"2. Editing ",(0,l.kt)("inlineCode",{parentName:"h3"},"cfctl.yaml")," to set up the nodes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="cfctl.yaml"',title:'"cfctl.yaml"'},'apiVersion: cfctl.clusterfactory.io/v1beta1\nkind: Cluster\nmetadata:\n  name: k8s.example.com-cluster\nspec:\n  hosts:\n    - ssh:\n        address: 10.10.0.2\n        user: root\n        port: 22\n        keyPath: ~/.ssh/id_ed25519\n      role: controller+worker\n      noTaints: true\n      privateInterface: eth0\n      privateAddress: 10.10.0.2\n      installFlags:\n        - --debug\n        - --labels="topology.kubernetes.io/region=ch-sion,topology.kubernetes.io/zone=ch-sion-1"\n        - --disable-components coredns\n      hooks:\n        apply:\n          before:\n            # Set SELinux Permissive\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then sed -i s/^SELINUX=.*$/SELINUX=permissive/ /etc/selinux/config; fi\'\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then setenforce 0; fi\'\n\n    - ssh:\n        address: 10.10.1.2\n        user: root\n        port: 22\n        keyPath: ~/.ssh/id_ed25519\n      role: controller+worker\n      noTaints: true\n      privateInterface: eth0\n      privateAddress: 10.10.1.2\n      installFlags:\n        - --debug\n        - --labels="topology.kubernetes.io/region=at-vie,topology.kubernetes.io/zone=at-vie-1"\n        - --disable-components coredns\n      hooks:\n        apply:\n          before:\n            # Set SELinux Permissive\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then sed -i s/^SELINUX=.*$/SELINUX=permissive/ /etc/selinux/config; fi\'\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then setenforce 0; fi\'\n\n    - ssh:\n        address: 10.10.3.2\n        user: root\n        port: 22\n        keyPath: ~/.ssh/id_ed25519\n      role: controller+worker\n      noTaints: true\n      privateInterface: eth0\n      privateAddress: 10.10.3.2\n      installFlags:\n        - --debug\n        - --labels="topology.kubernetes.io/region=de-fra,topology.kubernetes.io/zone=de-fra-1"\n        - --disable-components coredns\n      hooks:\n        apply:\n          before:\n            # Set SELinux Permissive\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then sed -i s/^SELINUX=.*$/SELINUX=permissive/ /etc/selinux/config; fi\'\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then setenforce 0; fi\'\n\n  k0s:\n    ...\n\n    config:\n      ...\n\n      spec:\n        api:\n          k0sApiPort: 9443\n          port: 6443\n          externalAddress: 10.10.4.10 # LB address\n          sans:\n            - 10.10.4.10\n')),(0,l.kt)("p",null,"Apply the config and be patient:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cfctl apply --debug --config=cfctl.yaml\n")),(0,l.kt)("h3",{id:"verify-everything-is-good"},"Verify everything is good"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'cfctl kubeconfig --config ./cfctl.yaml >./kubeconfig\nchmod 600 ./kubeconfig\nexport KUBECONFIG="$(pwd)/kubeconfig"\nkubectl get nodes\n# NAME            STATUS   ROLES           AGE     VERSION\n# k0s-ch-sion-1   Ready    control-plane   61d     v1.23.6+k0s\n# k0s-at-vie-1    Ready    control-plane   3d22h   v1.23.6+k0s\n# k0s-de-fra-1    Ready    control-plane   4d      v1.23.6+k0s\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"On a controller node"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# Install etcdctl\nETCD_VER=v3.5.2\nOS=linux\nARCH=amd64\ncurl -fsSL https://github.com/etcd-io/etcd/releases/download/${ETCD_VER}/etcd-${ETCD_VER}-${OS}-${ARCH}.tar.gz | tar -xvzf - "etcd-${ETCD_VER}-${OS}-${ARCH}/etcdctl"\nmkdir -p /usr/local/bin/\nmv "etcd-${ETCD_VER}-${OS}-${ARCH}/etcdctl" /usr/local/bin/etcdctl\nrmdir "etcd-${ETCD_VER}-${OS}-${ARCH}"\n\n# Verify\netcdctl --endpoints=https://127.0.0.1:2379 --key=/var/lib/k0s/pki/etcd/server.key --cert=/var/lib/k0s/pki/etcd/server.crt --insecure-skip-tls-verify member list\n# abcdef1234567890, started, k0s-ch-sion-1, https://10.10.0.2:2380, https://127.0.0.1:2379, false\n# deadcafe12345678, started, k0s-at-vie-1, https://10.10.1.2:2380, https://127.0.0.1:2379, false\n# deaddead12345678, started, k0s-de-fra-1, https://10.10.2.2:2380, https://127.0.0.1:2379, false\n')),(0,l.kt)("h2",{id:"ejecting-a-controller"},"Ejecting a controller"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Cordon the node")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl cordon <node>\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Drain the node")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl drain <node>\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Delete the node")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete <node>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Remove the node from ",(0,l.kt)("inlineCode",{parentName:"strong"},"cfctl.yaml"),".")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Remove the controller from ETCD.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"On a controller node, install etcdctl"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="root@k0s-ch-sion-1"',title:'"root@k0s-ch-sion-1"'},'ETCD_VER=v3.5.2\nOS=linux\nARCH=amd64\ncurl -fsSL https://github.com/etcd-io/etcd/releases/download/${ETCD_VER}/etcd-${ETCD_VER}-${OS}-${ARCH}.tar.gz | tar -xvzf - "etcd-${ETCD_VER}-${OS}-${ARCH}/etcdctl"\nmkdir -p /usr/local/bin/\nmv "etcd-${ETCD_VER}-${OS}-${ARCH}/etcdctl" /usr/local/bin/etcdctl\nrmdir "etcd-${ETCD_VER}-${OS}-${ARCH}"\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Find the node to be removed"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="root@controller"',title:'"root@controller"'},"etcdctl --endpoints=https://127.0.0.1:2379 --key=/var/lib/k0s/pki/etcd/server.key --cert=/var/lib/k0s/pki/etcd/server.crt --insecure-skip-tls-verify member list\n# abcdef1234567890, started, controller, https://10.10.0.2:2380, https://127.0.0.1:2379, false\n# deadcafe12345678, started, controller-to-be-removed, https://10.10.1.2:2380, https://127.0.0.1:2379, false\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"And remove it"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="root@controller"',title:'"root@controller"'},"etcdctl --endpoints=https://127.0.0.1:2379 --key=/var/lib/k0s/pki/etcd/server.key --cert=/var/lib/k0s/pki/etcd/server.crt --insecure-skip-tls-verify member remove <id>\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"On the node to be removed, you can delete the ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/cni")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"/opt/cni")," directories.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="root@controller-to-be-removed"',title:'"root@controller-to-be-removed"'},"rm -rf /etc/cni /opt/cni\n")),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"On the node to be removed, you can uninstall k0s:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="root@controller-to-be-removed',title:'"root@controller-to-be-removed'},"systemctl stop k0scontroller.service\nk0s reset\n")))}f.isMDXComponent=!0},2746:function(e,t,n){t.Z=n.p+"assets/images/high-availability_overview-f20a13ff0ff3b84e5c0093aa23e97070.png"}}]);