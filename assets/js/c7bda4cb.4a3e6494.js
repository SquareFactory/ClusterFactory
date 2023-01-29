"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[3700],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(n),f=l,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var i=2;i<r;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var a=n(665),l=(n(9496),n(9613));const r={},o="cfctl",s={unversionedId:"reference/cfctl",id:"reference/cfctl",title:"cfctl",description:"cfctl is still in development. cfctl will simplify the setup and deployment of core applications.",source:"@site/docs/reference/cfctl.md",sourceDirName:"reference",slug:"/reference/cfctl",permalink:"/docs/reference/cfctl",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory/tree/main/web/docs/reference/cfctl.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Develop Applications to integrate into ClusterFactory",permalink:"/docs/guides/develop-apps"},next:{title:"cfctl.yaml",permalink:"/docs/reference/cfctl.yaml"}},c={},i=[{value:"apply",id:"apply",level:2},{value:"init",id:"init",level:2},{value:"backup",id:"backup",level:2},{value:"reset",id:"reset",level:2},{value:"kubeconfig",id:"kubeconfig",level:2},{value:"version",id:"version",level:2},{value:"config",id:"config",level:2},{value:"edit",id:"edit",level:3},{value:"status",id:"status",level:3},{value:"kubeseal",id:"kubeseal",level:2},{value:"completion",id:"completion",level:2},{value:"help",id:"help",level:2}],u={toc:i};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cfctl"},"cfctl"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"cfctl")," is still in development. ",(0,l.kt)("inlineCode",{parentName:"p"},"cfctl")," will simplify the setup and deployment of core applications.")),(0,l.kt)("p",null,"The command line bootstrap and management tool ",(0,l.kt)("inlineCode",{parentName:"p"},"cfctl")," is a fork of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/k0sproject/k0sctl"},(0,l.kt)("inlineCode",{parentName:"a"},"k0sctl")),". The main differences between ",(0,l.kt)("inlineCode",{parentName:"p"},"cfctl")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"k0sctl")," are additions for easy deployment of ClusterFactory."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cfctl")," will also be our tool to help bootstrap ClusterFactory."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"USAGE")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cfctl [global options] command [command options] [arguments...]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"GLOBAL OPTIONS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"   --debug, -d  Enable debug logging (default: false) [$DEBUG]\n   --trace      Enable trace logging (default: false) [$TRACE]\n   --no-redact  Do not hide sensitive information in the output (default: false)\n   --help, -h   show help (default: false)\n")),(0,l.kt)("h2",{id:"apply"},"apply"),(0,l.kt)("p",null,"Apply a cfctl configuration."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"USAGE")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cfctl apply [command options] [arguments...]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"OPTIONS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"   --config value, -c value  Path to cluster config yaml. Use '-' to read from stdin. (default: \"cfctl.yaml\")\n   --no-wait                 Do not wait for worker nodes to join (default: false)\n   --no-drain                Do not drain worker nodes when upgrading (default: false)\n   --restore-from value      Path to cluster backup archive to restore the state from\n   --debug, -d               Enable debug logging (default: false) [$DEBUG]\n   --trace                   Enable trace logging (default: false) [$TRACE]\n   --no-redact               Do not hide sensitive information in the output (default: false)\n   --disable-telemetry       Do not send anonymous telemetry (default: false) [$DISABLE_TELEMETRY]\n   --disable-upgrade-check   Do not check for a cfctl upgrade (default: false) [$DISABLE_UPGRADE_CHECK]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"EXAMPLES")),(0,l.kt)("p",null,"The main function of ",(0,l.kt)("inlineCode",{parentName:"p"},"cfctl")," is the ",(0,l.kt)("inlineCode",{parentName:"p"},"cfctl apply")," subcommand. ",(0,l.kt)("inlineCode",{parentName:"p"},"cfctl")," will connect via SSH to the hosts listed in the ",(0,l.kt)("inlineCode",{parentName:"p"},"cfctl.yaml")," configuration file. ",(0,l.kt)("inlineCode",{parentName:"p"},"cfctl")," will determine the current state of the hosts and configure them according to the configuration file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cfctl apply --config path/to/cfctl.yaml\n")),(0,l.kt)("p",null,"If the cluster version of the ",(0,l.kt)("inlineCode",{parentName:"p"},"spec.k0s.version")," configuration is higher than the version detected on the cluster, a cluster upgrade will be performed.\nIf the configuration lists hosts that are not part of the cluster, they will be configured to run k0s and will be joined to the cluster."),(0,l.kt)("h2",{id:"init"},"init"),(0,l.kt)("p",null,"Create a configuration template."),(0,l.kt)("p",null,"Outputs a new cfctl configuration. When a list of addresses are provided, hosts are generated into the configuration. The list of addresses can also be provided via stdin."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"USAGE")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cfctl init [command options] [[user@]address[:port] ...]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"OPTIONS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'   --k0s                               Include a skeleton k0s config section (default: false)\n   --cluster-name value, -n value      Cluster name (default: "k0s-cluster")\n   --controller-count value, -C value  The number of controllers to create when addresses are given (default: 1)\n   --user value, -u value              Host user when addresses given\n   --key-path value, -i value          Host key path when addresses given\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"EXAMPLES")),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"--k0s")," to include an example ",(0,l.kt)("inlineCode",{parentName:"p"},"spec.k0s.config")," k0s configuration block. You can also supply a list of host addresses via arguments or stdin."),(0,l.kt)("p",null,"Output a minimal configuration template:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cfctl init > cfctl.yaml\n")),(0,l.kt)("p",null,"Output an example configuration with a default k0s config:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cfctl init --k0s > cfctl.yaml\n")),(0,l.kt)("p",null,"Create a configuration from a list of host addresses and pipe it to ",(0,l.kt)("inlineCode",{parentName:"p"},"cfctl apply"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cfctl init 10.0.0.1 10.0.0.2 ubuntu@10.0.0.3:8022 | cfctl apply --config -\n")),(0,l.kt)("h2",{id:"backup"},"backup"),(0,l.kt)("p",null,"Take backup of existing clusters state."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"KNOWN LIMITATIONS")),(0,l.kt)("p",null,"When restoring, the control plane address (",(0,l.kt)("inlineCode",{parentName:"p"},"externalAddress"),") needs to remain the same between backup and restore. This is caused by the fact that all worker node components connect to this address and cannot currently be re-configured."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"USAGE")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cfctl backup [command options] [arguments...]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"OPTIONS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"   --config value, -c value  Path to cluster config yaml. Use '-' to read from stdin. (default: \"cfctl.yaml\")\n   --debug, -d               Enable debug logging (default: false) [$DEBUG]\n   --trace                   Enable trace logging (default: false) [$TRACE]\n   --no-redact               Do not hide sensitive information in the output (default: false)\n   --disable-telemetry       Do not send anonymous telemetry (default: false) [$DISABLE_TELEMETRY]\n   --disable-upgrade-check   Do not check for a cfctl upgrade (default: false) [$DISABLE_UPGRADE_CHECK]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"EXAMPLES")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cfctl backup\n")),(0,l.kt)("p",null,"The files are currently named with a running (unix epoch) timestamp, e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"k0s_backup_1623220591.tar.gz"),"."),(0,l.kt)("p",null,"Restoring a backup can be done as part of the ",(0,l.kt)("a",{parentName:"p",href:"#apply"},"cfctl apply")," command using ",(0,l.kt)("inlineCode",{parentName:"p"},"--restore-from k0s_backup_1623220591.tar.gz")," flag."),(0,l.kt)("p",null,"Restoring the cluster state is a full restoration of the cluster control plane state, including:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Etcd datastore content"),(0,l.kt)("li",{parentName:"ul"},"Certificates"),(0,l.kt)("li",{parentName:"ul"},"Keys")),(0,l.kt)("p",null,"In general restore is intended to be used as a disaster recovery mechanism and thus it expects that no k0s components actually exist on the controllers."),(0,l.kt)("h2",{id:"reset"},"reset"),(0,l.kt)("p",null,"Remove traces of k0s from all of the hosts."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"USAGE")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cfctl reset [command options] [arguments...]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"OPTIONS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"   --config value, -c value  Path to cluster config yaml. Use '-' to read from stdin. (default: \"cfctl.yaml\")\n   --debug, -d               Enable debug logging (default: false) [$DEBUG]\n   --trace                   Enable trace logging (default: false) [$TRACE]\n   --no-redact               Do not hide sensitive information in the output (default: false)\n   --disable-telemetry       Do not send anonymous telemetry (default: false) [$DISABLE_TELEMETRY]\n   --disable-upgrade-check   Do not check for a cfctl upgrade (default: false) [$DISABLE_UPGRADE_CHECK]\n   --force, -f               Don't ask for confirmation (default: false)\n")),(0,l.kt)("h2",{id:"kubeconfig"},"kubeconfig"),(0,l.kt)("p",null,"Output the admin kubeconfig of the cluster."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"USAGE")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cfctl kubeconfig [command options] [arguments...]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"OPTIONS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"   --address value           Set kubernetes API address (default: auto-detect)\n   --config value, -c value  Path to cluster config yaml. Use '-' to read from stdin. (default: \"cfctl.yaml\")\n   --debug, -d               Enable debug logging (default: false) [$DEBUG]\n   --trace                   Enable trace logging (default: false) [$TRACE]\n   --no-redact               Do not hide sensitive information in the output (default: false)\n   --disable-telemetry       Do not send anonymous telemetry (default: false) [$DISABLE_TELEMETRY]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"EXAMPLES")),(0,l.kt)("p",null,"Connects to the cluster and outputs a kubeconfig file that can be used with ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"kubeadm")," to manage the kubernetes cluster."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cfctl kubeconfig --config path/to/cfctl.yaml > k0s.config\n$ kubectl get node --kubeconfig k0s.config\nNAME      STATUS     ROLES    AGE   VERSION\nworker0   NotReady   <none>   10s   v1.20.2-k0s1\n")),(0,l.kt)("h2",{id:"version"},"version"),(0,l.kt)("p",null,"Output cfctl version."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"USAGE")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cfctl version [command options] [arguments...]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"OPTIONS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"   --k0s  Retrieve the latest k0s version number (default: false)\n   --pre  When used in conjunction with --k0s, a pre release is accepted as the latest version (default: false)\n")),(0,l.kt)("h2",{id:"config"},"config"),(0,l.kt)("p",null,"Configuration related sub-commands."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"USAGE")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cfctl config command [command options] [arguments...]\n")),(0,l.kt)("h3",{id:"edit"},"edit"),(0,l.kt)("p",null,"Edit k0s dynamic config in SHELL's default editor."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"USAGE")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cfctl config edit [command options] [arguments...]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"OPTIONS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"   --config value, -c value  Path to cluster config yaml. Use '-' to read from stdin. (default: \"cfctl.yaml\")\n   --debug, -d               Enable debug logging (default: false) [$DEBUG]\n   --trace                   Enable trace logging (default: false) [$TRACE]\n   --no-redact               Do not hide sensitive information in the output (default: false)\n   --disable-telemetry       Do not send anonymous telemetry (default: false) [$DISABLE_TELEMETRY]\n   --disable-upgrade-check   Do not check for a cfctl upgrade (default: false) [$DISABLE_UPGRADE_CHECK]\n")),(0,l.kt)("h3",{id:"status"},"status"),(0,l.kt)("p",null,"Show k0s dynamic config reconciliation events."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"USAGE")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cfctl config status [command options] [arguments...]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"OPTIONS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"   --config value, -c value  Path to cluster config yaml. Use '-' to read from stdin. (default: \"cfctl.yaml\")\n   --debug, -d               Enable debug logging (default: false) [$DEBUG]\n   --trace                   Enable trace logging (default: false) [$TRACE]\n   --no-redact               Do not hide sensitive information in the output (default: false)\n   --disable-telemetry       Do not send anonymous telemetry (default: false) [$DISABLE_TELEMETRY]\n   --disable-upgrade-check   Do not check for a cfctl upgrade (default: false) [$DISABLE_UPGRADE_CHECK]\n   --output value, -o value  kubectl output formatting\n")),(0,l.kt)("h2",{id:"kubeseal"},"kubeseal"),(0,l.kt)("p",null,"Kubeseal every '-secret.yaml.local' files recursively."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"USAGE")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cfctl kubeseal [command options] [arguments...]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"OPTIONS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'   --controller-namespace value  The namespace where the sealed secrets controller resides. (default: "sealed-secrets") [$SEALED_SECRETS_CONTROLLER_NAMESPACE]\n   --controller-name value       The name of the sealed secrets controller. (default: "sealed-secrets")\n')),(0,l.kt)("h2",{id:"completion"},"completion"),(0,l.kt)("p",null,"Generates a shell auto-completion script."),(0,l.kt)("p",null,"Typical locations for the generated output are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Bash: /etc/bash_completion.d/cfctl"),(0,l.kt)("li",{parentName:"ul"},"Zsh: /usr/local/share/zsh/site-functions/","_","cfctl"),(0,l.kt)("li",{parentName:"ul"},"Fish: ~/.config/fish/completions/cfctl.fish")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"USAGE")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cfctl completion [command options] [arguments...]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"OPTIONS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'   --shell value, -s value  Shell to generate the script for (default: "bash") [$SHELL]\n')),(0,l.kt)("h2",{id:"help"},"help"),(0,l.kt)("p",null,"Shows a list of commands or help for one command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cfctl help [command]\n")))}p.isMDXComponent=!0}}]);