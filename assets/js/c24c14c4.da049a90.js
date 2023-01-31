"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[9723],{9613:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(a),c=r,d=k["".concat(s,".").concat(c)]||k[c]||u[c]||l;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},624:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(665),r=(a(9496),a(9613));const l={},i="cfctl.yaml",o={unversionedId:"reference/cfctl.yaml",id:"reference/cfctl.yaml",title:"cfctl.yaml",description:"apiVersion: cfctl.clusterfactory.io/v1beta1",source:"@site/docs/reference/cfctl.yaml.md",sourceDirName:"reference",slug:"/reference/cfctl.yaml",permalink:"/docs/reference/cfctl.yaml",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory/tree/main/web/docs/reference/cfctl.yaml.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"cfctl",permalink:"/docs/reference/cfctl"},next:{title:"Contributing",permalink:"/docs/see-also/contributing"}},s={},p=[{value:"Cluster",id:"cluster",level:2},{value:"ClusterMetadata",id:"clustermetadata",level:2},{value:"Spec",id:"spec",level:2},{value:"Host",id:"host",level:2},{value:"UploadFile",id:"uploadfile",level:2},{value:"SSH",id:"ssh",level:2},{value:"K0s",id:"k0s",level:2}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cfctlyaml"},"cfctl.yaml"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"apiVersion: cfctl.clusterfactory.io/v1beta1")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: cfctl.clusterfactory.io/v1beta1\nkind: Cluster\nmetadata:\n  name: k8s.example.com-cluster\nspec:\n  hosts:\n    - ssh:\n        address: 192.168.0.2\n        user: root\n        port: 22\n        keyPath: ~/.ssh/id_ed25519\n      role: controller+worker\n      noTaints: true\n      privateInterface: eno1\n      privateAddress: 192.168.0.2\n      installFlags:\n        - --debug\n        - --labels="topology.kubernetes.io/region=ch-sion,topology.kubernetes.io/zone=ch-sion-1"\n        - --disable-components coredns\n      hooks:\n        apply:\n          before:\n            # Set SELinux Permissive\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then sed -i s/^SELINUX=.*$/SELINUX=permissive/ /etc/selinux/config; fi\'\n            - sh -c \'if [ "$(getenforce)" != "Permissive" ] && [ "$(getenforce)" != "Disabled" ]; then setenforce 0; fi\'\n\n  k0s:\n    version: \'1.26.0+k0s.0\'\n    dynamicConfig: false\n    config:\n      apiVersion: k0s.k0sproject.io/v1beta1\n      kind: Cluster\n      metadata:\n        name: k8s.example.com\n      spec:\n        api:\n          k0sApiPort: 9443\n          port: 6443\n        installConfig:\n          users:\n            etcdUser: etcd\n            kineUser: kube-apiserver\n            konnectivityUser: konnectivity-server\n            kubeAPIserverUser: kube-apiserver\n            kubeSchedulerUser: kube-scheduler\n        konnectivity:\n          adminPort: 8133\n          agentPort: 8132\n        network:\n          calico:\n            mode: \'vxlan\'\n            overlay: Always\n            mtu: 0\n            wireguard: false\n          kubeProxy:\n            disabled: false\n            mode: iptables\n          kuberouter:\n            autoMTU: true\n            mtu: 0\n            peerRouterASNs: \'\'\n            peerRouterIPs: \'\'\n          podCIDR: 10.244.0.0/16\n          provider: calico\n          serviceCIDR: 10.96.0.0/12\n        podSecurityPolicy:\n          defaultPolicy: 00-k0s-privileged\n        storage:\n          type: etcd\n        telemetry:\n          enabled: false\n'))),(0,r.kt)("h2",{id:"cluster"},"Cluster"),(0,r.kt)("p",null,"Cluster is the configuration for a k0s cluster. It configures k0s on the listed hosts."),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"apiVersion"),": cfctl.clusterfactory.io/v1beta1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"kind"),": Cluster"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"metadata"),": (",(0,r.kt)("a",{parentName:"li",href:"#clustermetadata"},"ClusterMetadata"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"spec")," (",(0,r.kt)("a",{parentName:"li",href:"#spec"},"Spec"),")")),(0,r.kt)("h2",{id:"clustermetadata"},"ClusterMetadata"),(0,r.kt)("p",null,"ClusterMetadata is the metadata of the cluster."),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"name"),": (string)"),(0,r.kt)("p",{parentName:"li"},"Name of the cluster configuration."))),(0,r.kt)("h2",{id:"spec"},"Spec"),(0,r.kt)("p",null,"Spec is a description of a cluster configuration."),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"hosts"),": (","[][host]","(#host)), required"),(0,r.kt)("p",{parentName:"li"},"List of hosts belonging to the cluster. There must be at least on host in a Cluster. Host requirements:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Currently only linux targets are supported"),(0,r.kt)("li",{parentName:"ul"},"The user must either be root or have passwordless ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo")," access."),(0,r.kt)("li",{parentName:"ul"},"The host must fulfill the k0s system requirements"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"k0s"),": (",(0,r.kt)("a",{parentName:"p",href:"#k0s"},"K0s"),"), optional"),(0,r.kt)("p",{parentName:"li"},"K0s configuration for the hosts."))),(0,r.kt)("h2",{id:"host"},"Host"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"role"),": (string)"),(0,r.kt)("p",{parentName:"li"},"One of:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"controller")," - a controller host"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"controller+worker")," - a controller host that will also run workloads"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"single")," - a single-node cluster host, the configuration can only contain one host"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"worker")," - a worker host"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"privateInterface"),": (string), optional, default: ",(0,r.kt)("inlineCode",{parentName:"p"}," ")),(0,r.kt)("p",{parentName:"li"},"Override private network interface selected by host fact gathering.\nUseful in case fact gathering picks the wrong private network interface."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- role: worker\n  os: debian\n  privateInterface: eth1\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"privateAddress"),": (string), optional, default: ",(0,r.kt)("inlineCode",{parentName:"p"}," ")),(0,r.kt)("p",{parentName:"li"},"Override private IP address selected by host fact gathering.\nUseful in case fact gathering picks the wrong IPAddress."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- role: worker\n  os: debian\n  privateAddress: 10.0.0.2\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"environment"),": (map","[","string","]","string), optional"),(0,r.kt)("p",{parentName:"li"},"List of key-value pairs to set to the target host's environment variables."),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"environment:\n  HTTP_PROXY: 10.0.0.1:443\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"uploadBinary"),": (boolean), optional, default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"li"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the k0s binaries for target host will be downloaded and cached on the local host and uploaded to the target.\nWhen ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the k0s binary downloading is performed on the target host itself")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"k0sBinaryPath"),": (string), optional"),(0,r.kt)("p",{parentName:"li"},"A path to a file on the local host that contains a k0s binary to be uploaded to the host. Can be used to test drive a custom development build of k0s.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"installFlags"),": (","[","]","string), optional"),(0,r.kt)("p",{parentName:"li"},"Extra flags passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"k0s install")," command on the target host. See ",(0,r.kt)("inlineCode",{parentName:"p"},"k0s install --help")," for a list of options.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"files"),": (","[","]",(0,r.kt)("a",{parentName:"p",href:"#uploadfile"},"Uploadfile"),"), optional"),(0,r.kt)("p",{parentName:"li"},"List of files to be uploaded to the host."),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: image-bundle\n  src: airgap-images.tgz\n  dstDir: /var/lib/k0s/images/\n  perm: 0600\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),': name of the file "bundle", used only for logging purposes (optional)'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src"),": File path, an URL or ",(0,r.kt)("a",{parentName:"li",href:"https://golang.org/pkg/path/filepath/#Match"},"Glob pattern")," to match files to be uploaded. URL sources will be directly downloaded using the target host (required)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dstDir"),": Destination directory for the file(s). ",(0,r.kt)("inlineCode",{parentName:"li"},"k0sctl")," will create full directory structure if it does not already exist on the host (default: user home)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dst"),": Destination filename for the file. Only usable for single file uploads (default: basename of file)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"perm"),": File permission mode for uploaded file(s) (default: same as local)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dirPerm"),": Directory permission mode for created directories (default: 0755)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user"),": User name of file/directory owner, must exist on the host (optional)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"group"),": Group name of file/directory owner, must exist on the host (optional)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"os"),": (string), optional, default: ",(0,r.kt)("inlineCode",{parentName:"p"}," ")),(0,r.kt)("p",{parentName:"li"},"Override OS distribution auto-detection. By default ",(0,r.kt)("inlineCode",{parentName:"p"},"k0sctl")," detects the OS by reading ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/os-release")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/os-release")," files. In case your system is based on e.g. Debian but the OS release info has something else configured you can override ",(0,r.kt)("inlineCode",{parentName:"p"},"k0sctl")," to use Debian based functionality for the node with:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- role: worker\n  os: debian\n  ssh:\n    address: 10.0.0.2\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"hostname"),": (string), optional"),(0,r.kt)("p",{parentName:"li"},"Override host's hostname. When not set, the hostname reported by the operating system is used.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"noTaints"),": (boolean), optional, default: ` false"),(0,r.kt)("p",{parentName:"li"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and used in conjuction with the ",(0,r.kt)("inlineCode",{parentName:"p"},"controller+worker")," role, the default taints are disabled making regular workloads schedulable on the node. By default, k0s sets a node-role.kubernetes.io/master:NoSchedule taint on controller+worker nodes and only workloads with toleration for it will be scheduled.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"hooks"),": (Hooks, which is a map","[string]","map","[string][]","string, such as hooks",'["apply"]["before"]'," = ",'["ls -al", "rm foo.txt"]',"), optional"),(0,r.kt)("p",{parentName:"li"},"Run a set of commands on the remote host during k0sctl operations."),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'hooks:\n  apply:\n    before:\n      - date >> k0sctl-apply.log\n    after:\n      - echo "apply success" >> k0sctl-apply.log\n')),(0,r.kt)("p",{parentName:"li"},'The currently available "hook points" are:'),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apply"),": Runs during ",(0,r.kt)("inlineCode",{parentName:"li"},"k0sctl apply"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"before"),": Runs after configuration and host validation, right before configuring k0s on the host"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"after"),": Runs before disconnecting from the host after a successful apply operation"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"backup"),": Runs during ",(0,r.kt)("inlineCode",{parentName:"li"},"k0s backup"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"before"),": Runs before k0sctl runs the ",(0,r.kt)("inlineCode",{parentName:"li"},"k0s backup")," command"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"after"),": Runs before disconnecting from the host after successfully taking a backup"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reset"),": Runs during ",(0,r.kt)("inlineCode",{parentName:"li"},"k0sctl reset"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"before"),": Runs after gathering information about the cluster, right before starting to remove the k0s installation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"after"),": Runs before disconnecting from the host after a successful reset operation"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ssh"),": (",(0,r.kt)("a",{parentName:"p",href:"#ssh"},"SSH"),"), optional"),(0,r.kt)("p",{parentName:"li"},"SSH connection options."),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  hosts:\n    - role: controller\n      ssh:\n        address: 10.0.0.2\n        user: ubuntu\n        keyPath: ~/.ssh/id_rsa\n")),(0,r.kt)("p",{parentName:"li"},"It's also possible to tunnel connections through a bastion host. The bastion configuration has all the same fields as any SSH connection:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  hosts:\n    - role: controller\n      ssh:\n        address: 10.0.0.2\n        user: ubuntu\n        keyPath: ~/.ssh/id_rsa\n        bastion:\n          address: 10.0.0.1\n          user: root\n          keyPath: ~/.ssh/id_rsa2\n")),(0,r.kt)("p",{parentName:"li"},"SSH agent and auth forwarding are also supported, a host without a keyfile:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  hosts:\n    - role: controller\n      ssh:\n        address: 10.0.0.2\n        user: ubuntu\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ssh-add ~/.ssh/aws.pem\n$ ssh -A user@jumphost\nuser@jumphost ~ $ k0sctl apply\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"localhost"),": (Localhost), optional"),(0,r.kt)("p",{parentName:"li"},"Localhost connection options. Can be used to use the local host running k0sctl as a node in the cluster."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"enabled")," (boolean), optional, default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"))),(0,r.kt)("p",{parentName:"li"},"This must be set ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to enable the localhost connection."))),(0,r.kt)("h2",{id:"uploadfile"},"UploadFile"),(0,r.kt)("p",null,"UploadFile describes a file to be uploaded for the host"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"name"),": (string), optional"),(0,r.kt)("p",{parentName:"li"},'Name of the file "bundle", used only for logging purposes.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"src"),": (string)"),(0,r.kt)("p",{parentName:"li"},"File path, an URL or ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/pkg/path/filepath/#Match"},"Glob pattern")," to match files to be uploaded. URL sources will be directly\ndownloaded using the target host.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"dstDir"),": (string), default: user home"),(0,r.kt)("p",{parentName:"li"},"Destination directory for the file(s). ",(0,r.kt)("inlineCode",{parentName:"p"},"k0sctl")," will create full directory structure if it does not already exist on the host.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"dst"),": (string), default: basename of file"),(0,r.kt)("p",{parentName:"li"},"Destination filename for the file. Only usable for single file uploads.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"perm"),": (octal string), default: same as local"),(0,r.kt)("p",{parentName:"li"},"File permission mode for uploaded file(s).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"dirPerm"),": (octal string), default: ",(0,r.kt)("inlineCode",{parentName:"p"},"0755")),(0,r.kt)("p",{parentName:"li"},"Directory permission mode for created directories.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"user"),": (string), optional"),(0,r.kt)("p",{parentName:"li"},"User name of file/directory owner, must exist on the host.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"group"),": (string)"),(0,r.kt)("p",{parentName:"li"},"Group name of file/directory owner, must exist on the host."))),(0,r.kt)("h2",{id:"ssh"},"SSH"),(0,r.kt)("p",null,"SSH describe an SSH connection."),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"address"),": (string)"),(0,r.kt)("p",{parentName:"li"},"Address of the the remote SSH Host.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"user"),": (string), default: ",(0,r.kt)("inlineCode",{parentName:"p"},"root")),(0,r.kt)("p",{parentName:"li"},"User used to authenticate during the SSH connection.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"port"),": (integer), optional, default: ",(0,r.kt)("inlineCode",{parentName:"p"},"22")),(0,r.kt)("p",{parentName:"li"},"Port opened on the host which is accepting SSH connection.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"keyPath"),": (string), optional, default: ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ssh/id_rsa")),(0,r.kt)("p",{parentName:"li"},"Path of the SSH Key used to authenticate during the SSH connection.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"hostKey"),": (string), optional"),(0,r.kt)("p",{parentName:"li"},"Key of the remote of for SSH host key verification.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"bastion"),": (",(0,r.kt)("a",{parentName:"p",href:"#ssh"},"SSH"),"), optional"),(0,r.kt)("p",{parentName:"li"},"Bastion is used to configured SSH connection over an SSH bastion."))),(0,r.kt)("h2",{id:"k0s"},"K0s"),(0,r.kt)("p",null,"K0s holds configuration for bootstraping a k0s cluster."),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"version"),": (string), optional, default: auto-discovery"),(0,r.kt)("p",{parentName:"li"},"The version of k0s to deploy. When left out, k0sctl will default to using the latest released version of k0s or the version already running on the cluster.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"dynamicConfig"),": (boolean), optional, default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Any controller node has ",(0,r.kt)("inlineCode",{parentName:"li"},"--enable-dynamic-config")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"installFlags")),(0,r.kt)("li",{parentName:"ul"},"Any existing controller node has ",(0,r.kt)("inlineCode",{parentName:"li"},"--enable-dynamic-config")," in run arguments (",(0,r.kt)("inlineCode",{parentName:"li"},"k0s status -o json"),")")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note:")," When running k0s in dynamic config mode, k0sctl will ONLY configure the cluster-wide configuration during the first time initialization, after that the configuration has to be managed via ",(0,r.kt)("inlineCode",{parentName:"p"},"k0s config edit")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"k0sctl config edit"),". The node specific configuration will be updated on each apply."),(0,r.kt)("p",{parentName:"li"},"See also:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.k0sproject.io/main/dynamic-configuration/"},"k0s Dynamic Configuration")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"config"),": (",(0,r.kt)("a",{parentName:"p",href:"https://docs.k0sproject.io/head/configuration/"},"K0sConfig"),"), optional, default: auto-generated"),(0,r.kt)("p",{parentName:"li"},"Embedded k0s cluster configuration. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.k0sproject.io/main/configuration/"},"k0s configuration documentation")," for details."),(0,r.kt)("p",{parentName:"li"},"When left out, the output of ",(0,r.kt)("inlineCode",{parentName:"p"},"k0s config create")," will be used."))))}u.isMDXComponent=!0}}]);