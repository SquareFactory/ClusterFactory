"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[8038],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>p});var a=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),p=o,h=m["".concat(i,".").concat(p)]||m[p]||d[p]||r;return t?a.createElement(h,s(s({ref:n},c),{},{components:t})):a.createElement(h,s({ref:n},c))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var u=2;u<r;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8751:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(9496),o=t(5924);const r="tabItem_cuvL";function s(e){let{children:n,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:t},n)}},5632:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(665),o=t(9496),r=t(5924),s=t(2981),l=t(8291),i=t(9825),u=t(3772);const c="tabList_vL6X",d="tabItem_MPSI";function m(e){var n;const{lazy:t,block:s,defaultValue:m,values:p,groupId:h,className:f}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),_=p??g.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),y=(0,l.l)(_,((e,n)=>e.value===n.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===m?m:m??(null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)??g[0].props.value;if(null!==b&&!_.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${_.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:x}=(0,i.U)(),[k,D]=(0,o.useState)(b),O=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=h){const e=v[h];null!=e&&e!==k&&_.some((n=>n.value===e))&&D(e)}const E=e=>{const n=e.currentTarget,t=O.indexOf(n),a=_[t].value;a!==k&&(w(n),D(a),null!=h&&x(h,String(a)))},N=e=>{var n;let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]??O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]??O[O.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},f)},_.map((e=>{let{value:n,label:t,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,key:n,ref:e=>O.push(e),onKeyDown:N,onClick:E},s,{className:(0,r.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":k===n})}),t??n)}))),t?(0,o.cloneElement)(g.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==k})))))}function p(e){const n=(0,s.Z)();return o.createElement(m,(0,a.Z)({key:String(n)},e))}},4908:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=t(665),o=(t(9496),t(9613)),r=t(5632),s=t(8751);const l={},i="Deploy Open OnDemand",u={unversionedId:"guides/slurm/deploy-ondemand",id:"guides/slurm/deploy-ondemand",title:"Deploy Open OnDemand",description:"Open OnDemand, a dashboard for SLURM, can be deployed along with the SLURM controller.",source:"@site/docs/guides/60-slurm/03-deploy-ondemand.md",sourceDirName:"guides/60-slurm",slug:"/guides/slurm/deploy-ondemand",permalink:"/docs/guides/slurm/deploy-ondemand",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory/tree/main/web/docs/guides/60-slurm/03-deploy-ondemand.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"docs",previous:{title:"Deploying SLURM Cluster",permalink:"/docs/guides/slurm/deploy-slurm"},next:{title:"Mount CVMFS repositories on Kubernetes",permalink:"/docs/guides/cvmfs/mount-cvmfs"}},c={},d=[{value:"Helm and Docker resources",id:"helm-and-docker-resources",level:2},{value:"1. Secrets and Volumes",id:"1-secrets-and-volumes",level:2},{value:"SSH configuration and Home directory",id:"ssh-configuration-and-home-directory",level:3},{value:"Dex storage",id:"dex-storage",level:3},{value:"Open OnDemand secret configuration",id:"open-ondemand-secret-configuration",level:3},{value:"2. Values: Enable Open OnDemand",id:"2-values-enable-open-ondemand",level:2}],m={toc:d};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-open-ondemand"},"Deploy Open OnDemand"),(0,o.kt)("p",null,"Open OnDemand, a dashboard for SLURM, can be deployed along with the SLURM controller."),(0,o.kt)("h2",{id:"helm-and-docker-resources"},"Helm and Docker resources"),(0,o.kt)("p",null,"The Helm resources are stored on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/ClusterFactory/tree/main/helm/slurm-cluster"},"the ClusterFactory Git Repository"),"."),(0,o.kt)("p",null,"The Dockerfile is described in the git repository ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/open-ondemand-docker"},"SquareFactory/open-ondemand-docker"),"."),(0,o.kt)("p",null,"The Docker images can be pulled with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull ghcr.io/squarefactory/open-ondemand:latest-dex\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You should always verify the default Helm ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/ClusterFactory/blob/main/helm/slurm-cluster/values.yaml"},"values")," before editing the ",(0,o.kt)("inlineCode",{parentName:"p"},"values")," field of an Argo CD ",(0,o.kt)("inlineCode",{parentName:"p"},"Application"),".")),(0,o.kt)("p",null,"Deploying Open OnDemand is very similar to ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/slurm/deploy-slurm#6-slurm-login-deployment"},"deploying the Slurm Login node"),"."),(0,o.kt)("h2",{id:"1-secrets-and-volumes"},"1. Secrets and Volumes"),(0,o.kt)("h3",{id:"ssh-configuration-and-home-directory"},"SSH configuration and Home directory"),(0,o.kt)("p",null,"This is the same as the deployment of ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/slurm/deploy-slurm#ssh-server-configuration"},"the Slurm Login Nodes")," but with extra steps."),(0,o.kt)("h3",{id:"dex-storage"},"Dex storage"),(0,o.kt)("p",null,"We also need to store the state of Dex."),(0,o.kt)("p",null,"We will use NFS. Feel free to use another type of storage."),(0,o.kt)(r.Z,{groupId:"volume",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"storage-class",label:"StorageClass (dynamic)",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/slurm-cluster/volumes/dex-state-nfs.yaml"',title:'"argo/slurm-cluster/volumes/dex-state-nfs.yaml"'},"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: dex-state-nfs\n  namespace: slurm-cluster\n  labels:\n    app: open-ondemand\n    topology.kubernetes.io/region: <FILL ME> # <country code>-<city>\n    topology.kubernetes.io/zone: <FILL ME> # <country code>-<city>-<index>\nprovisioner: nfs.csi.k8s.io\nparameters:\n  server: <FILL ME> # IP or host\n  share: <FILL ME> # /srv/nfs/k8s/dex\n  mountPermissions: '0700'\nmountOptions:\n  - hard\n  - nfsvers=4.1\n  - noatime\n  - nodiratime\nvolumeBindingMode: Immediate\nreclaimPolicy: Retain\nallowedTopologies:\n  - matchLabelExpressions:\n      - key: topology.kubernetes.io/region\n        values:\n          - <FILL ME> # <country code>-<city>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/slurm-cluster/volumes/dex-state-nfs.yaml\n"))),(0,o.kt)(s.Z,{value:"persistent-volume",label:"PersistentVolume (static)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/slurm-cluster/volumes/dex-state-pv.yaml"',title:'"argo/slurm-cluster/volumes/dex-state-pv.yaml"'},"apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: dex-state-pv\n  namespace: slurm-cluster\n  labels:\n    app: open-ondemand\n    topology.kubernetes.io/region: <FILL ME> # <country code>-<city>\n    topology.kubernetes.io/zone: <FILL ME> # <country code>-<city>-<index>\nspec:\n  capacity:\n    storage: 10Gi\n  mountOptions:\n    - hard\n    - nfsvers=4.1\n    - noatime\n    - nodiratime\n  csi:\n    driver: nfs.csi.k8s.io\n    readOnly: false\n    volumeHandle: <unique id> # uuidgen\n    volumeAttributes:\n      server: <FILL ME> # IP or host\n      share: <FILL ME> # /srv/nfs/k8s/dex\n      mountPermissions: '0700'\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Retain\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/slurm-cluster/volumes/dex-state-pv.yaml\n")))),(0,o.kt)("h3",{id:"open-ondemand-secret-configuration"},"Open OnDemand secret configuration"),(0,o.kt)("p",null,"The configuration of Open OnDemand must be stored in a secret because it could leak the LDAP password:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"-secret.yaml.local")," file:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="argo/slurm-cluster/secrets/openondemand-portal-secret.yaml.local"',title:'"argo/slurm-cluster/secrets/openondemand-portal-secret.yaml.local"'},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: openondemand-portal-secret\n  namespace: slurm-cluster\ntype: Opaque\nstringData:\n  ood_portal.yaml: |\n    ---\n    #\n    # Portal configuration\n    #\n\n    # The address and port to listen for connections on\n    # Example:\n    #     listen_addr_port: 443\n    # Default: null (don't add any more listen directives)\n    #listen_addr_port: 8080\n\n    # The server name used for name-based Virtual Host\n    # Example:\n    #     servername: 'www.example.com'\n    # Default: null (don't use name-based Virtual Host)\n\n    servername: ondemand.example.com\n    #ssl:\n    # - 'SSLCertificateFile \"\"'\n    # - 'SSLCertificateKeyFile \"\"'\n\n    # The server name used for rewrites\n    # Example:\n    #     proxy_server: 'proxy.example.com'\n    # Default: The value of servername\n    #proxy_server: 'proxy.example.com'\n\n    # The port specification for the Virtual Host\n    # Example:\n    #     port: 8080\n    #Default: null (use default port 80 or 443 if SSL enabled)\n    #port: 8080\n\n    # List of SSL Apache directives\n    # Example:\n    # Default: null (no SSL support)\n    #ssl: null\n\n    # Root directory of log files (can be relative ServerRoot)\n    # Example:\n    #     logroot: '/path/to/my/logs'\n    # Default: 'logs' (this is relative to ServerRoot)\n    #logroot: 'logs'\n\n    # Error log filename\n    # Example:\n    #     errorlog: 'error.log'\n    # Default: 'error.log' (If 'servername' and 'ssl' options are defined\n    # the default value will be <servername>_error_ssl.log)\n    errorlog: 'error.log'\n\n    # Access log filename\n    # Example:\n    #     accesslog: 'access.log'\n    # Default: 'access.log' (If 'servername' and 'ssl' options are defined\n    # the default value will be <servername>_access_ssl.log)\n    accesslog: 'access.log'\n\n    # Apache access log format (Don't specify log nickname see: http://httpd.apache.org/docs/current/mod/mod_log_config.html#transferlog)\n    # Example:\n    #     logformat: '\"%v %h \\\"%r\\\" %>s %O \\\"%{Referer}i\\\" \\\"%{User-Agent}i\\\" %{SSL_PROTOCOL}x %T\"'\n    # Default: Apache combined format\n\n    # Should RewriteEngine be used\n    # Example:\n    #     use_rewrites: false\n    # Default: true\n    use_rewrites: false\n\n    # Should Maintenance Rewrite rules be added\n    # Example:\n    #   use_maintenance: false\n    # Default: true\n    #use_maintenance: true\n\n    # List of IPs to whitelist when maintenance is enabled\n    # Example:\n    #   maintenance_ip_whitelist:\n    #     - 192.168.0..*\n    #     - 192.168.1..*\n    # Default: [] (no IPs whitelisted)\n    #maintenance_ip_whitelist: []\n\n    # Set Header Content-Security-Policy frame-ancestors.\n    # Example:\n    #   security_csp_frame_ancestors: https://ondemand.osc.edu\n    # Example to disable setting:\n    #   security_csp_frame_ancestors: false\n    # Default: based on servername and ssl settings\n    #security_csp_frame_ancestors:\n\n    # Set Header Strict-Transport-Security to help enforce SSL\n    # Example:\n    #   security_strict_transport: false\n    # Default: true when ssl is enabled, false otherwise\n    #security_strict_transport: false\n\n    # Root directory of the Lua handler code\n    # Example:\n    #     lua_root: '/path/to/lua/handlers'\n    # Default : '/opt/ood/mod_ood_proxy/lib' (default install directory of mod_ood_proxy)\n    #lua_root: '/opt/ood/mod_ood_proxy/lib'\n\n    # Verbosity of the Lua module logging\n    # (see https://httpd.apache.org/docs/2.4/mod/core.html#loglevel)\n    # Example:\n    #     lua_log_level: 'warn'\n    # Default: 'info' (get verbose logs)\n    #lua_log_level: 'info'\n\n    # Lua regular expression used to map authenticated-user to system-user\n    # This configuration is ignored if user_map_cmd is defined\n    # Example:\n    #     user_map_match: '^([^@]+)@.*$'\n    # Default: '.*'\n    # user_map_match: '.*'\n\n    # System command used to map authenticated-user to system-user\n    # This option takes precedence over user_map_match\n    # Example:\n    #     user_map_cmd: '/usr/local/bin/ondemand-usermap'\n    # Default: null (use user_map_match)\n    #user_map_cmd: null\n\n    # Use an alternative CGI environment variable instead of REMOTE_USER for\n    # determining the authenticated-user fed to the mapping script\n    # Example:\n    #     user_env: 'OIDC_CLAIM_preferred_username'\n    # Default: null (use REMOTE_USER)\n    #user_env: null\n\n    # Redirect user to the following URI if fail to map there authenticated-user to\n    # a system-user\n    # Example:\n    #     map_fail_uri: '/register'\n    # Default: null (don't redirect, just display error message)\n    #map_fail_uri: null\n\n    # System command used to run the `nginx_stage` script with sudo privileges\n    # Example:\n    #     pun_stage_cmd: 'sudo /path/to/nginx_stage'\n    # Default: 'sudo /opt/ood/nginx_stage/sbin/nginx_stage' (don't forget sudo)\n    #pun_stage_cmd: 'sudo /opt/ood/nginx_stage/sbin/nginx_stage'\n\n    # List of Apache authentication directives\n    # NB: Be sure the appropriate Apache module is installed for this\n    # Default: (see below, uses OIDC auth with Dex)\n    auth:\n      - 'AuthType openid-connect'\n      - 'AuthPAMService ood'\n      - 'Require valid-user'\n\n    #user_map_cmd: \"/opt/ood/ood_auth_map/bin/ood_auth_map.regex\"\n\n    # Redirect user to the following URI when accessing root URI\n    # Example:\n    #     root_uri: '/my_uri'\n    #     # https://www.example.com/ => https://www.example.com/my_uri\n    # Default: '/pun/sys/dashboard' (default location of the OOD Dashboard app)\n    #root_uri: '/pun/sys/dashboard'\n\n    # Track server-side analytics with a Google Analytics account and property\n    # (see https://github.com/OSC/mod_ood_proxy/blob/master/lib/analytics.lua for\n    # information on how to setup the GA property)\n    # Example:\n    #     analytics:\n    #       url: 'http://www.google-analytics.com/collect'\n    #       id: 'UA-79331310-4'\n    # Default: null (do not track)\n    #analytics: null\n\n    #\n    # Publicly available assets\n    #\n\n    # Public sub-uri (available to public with no authentication)\n    # Example:\n    #     public_uri: '/assets'\n    # Default: '/public'\n    #public_uri: '/public'\n\n    # Root directory that serves the public sub-uri (be careful, everything under\n    # here is open to the public)\n    # Example:\n    #     public_root: '/path/to/public/assets'\n    # Default: '/var/www/ood/public'\n    #public_root: '/var/www/ood/public'\n\n    #\n    # Logout redirect helper\n    #\n\n    # Logout sub-uri\n    # Example\n    #     logout_uri: '/log_me_out'\n    # NB: If you change this, then modify the Dashboard app with the new sub-uri\n    # Default: '/logout' (the Dashboard app is by default going to expect this)\n    #logout_uri: '/logout'\n\n    # Redirect user to the following URI when accessing logout URI\n    # Example:\n    #     logout_redirect: '/oidc?logout=https%3A%2F%2Fwww.example.com'\n    # Default: '/pun/sys/dashboard/logout' (the Dashboard app provides a simple\n    # HTML page explaining logout to the user)\n    #logout_redirect: '/pun/sys/dashboard/logout'\n\n    #\n    # Reverse proxy to backend nodes\n    #\n\n    # Regular expression used for whitelisting allowed hostnames of nodes\n    # Example:\n    #     host_regex: '[\\w.-]+\\.example\\.com'\n    # Default: '[^/]+' (allow reverse proxying to all hosts, this allows external\n    # hosts as well)\n    #host_regex: '[^/]+'\n\n    # Sub-uri used to reverse proxy to backend web server running on node that\n    # knows the full URI path\n    # Example:\n    #     node_uri: '/node'\n    # Default: null (disable this feature)\n    #node_uri: null\n\n    # Sub-uri used to reverse proxy to backend web server running on node that\n    # ONLY uses *relative* URI paths\n    # Example:\n    #     rnode_uri: '/rnode'\n    # Default: null (disable this feature)\n    #rnode_uri: null\n\n    #\n    # Per-user NGINX Passenger apps\n    #\n\n    # Sub-uri used to control PUN processes\n    # Example:\n    #     nginx_uri: '/my_pun_controller'\n    # Default: '/nginx'\n    #nginx_uri: '/nginx'\n\n    # Sub-uri used to access the PUN processes\n    # Example:\n    #     pun_uri: '/my_pun_apps'\n    # Default: '/pun'\n    #pun_uri: '/pun'\n\n    # Root directory that contains the PUN Unix sockets that the proxy uses to\n    # connect to\n    # Example:\n    #     pun_socket_root: '/path/to/pun/sockets'\n    # Default: '/var/run/ondemand-nginx' (default location set in nginx_stage)\n    #pun_socket_root: '/var/run/ondemand-nginx'\n\n    # Number of times the proxy attempts to connect to the PUN Unix socket before\n    # giving up and displaying an error to the user\n    # Example:\n    #     pun_max_retries: 25\n    # Default: 5 (only try 5 times)\n    #pun_max_retries: 5\n\n    # The PUN pre hook command to execute as root\n    #\n    # Example:\n    #    pun_pre_hook_root_cmd: '/opt/hpc-site/ood_pun_prehook'\n    # Default: null (do not run any PUN pre hook as root)\n    #pun_pre_hook_root_cmd: null\n\n    # Comma separated list of environment variables to pass from the apache context\n    # into the PUN pre hook. Defaults to null so nothing is exported.\n    #\n    # Example:\n    #    pun_pre_hook_exports: 'OIDC_ACCESS_TOKEN,OIDC_CLAIM_EMAIL'\n    # Default: null (pass nothing)\n    #pun_pre_hook_exports: null\n\n    #\n    # Support for OpenID Connect\n    #\n\n    # Sub-uri used by mod_auth_openidc for authentication\n    # Example:\n    #     oidc_uri: '/oidc'\n    # Default: null (disable OpenID Connect support)\n    #oidc_uri: null\n\n    # Sub-uri user is redirected to if they are not authenticated. This is used to\n    # *discover* what ID provider the user will login through.\n    # Example:\n    #     oidc_discover_uri: '/discover'\n    # Default: null (disable support for discovering OpenID Connect IdP)\n    #oidc_discover_uri: null\n\n    # Root directory on the filesystem that serves the HTML code used to display\n    # the discovery page\n    # Example:\n    #     oidc_discover_root: '/var/www/ood/discover'\n    # Default: null (disable support for discovering OpenID Connect IdP)\n    #oidc_discover_root: null\n\n    #\n    # Support for registering unmapped users\n    #\n    # (Not necessary if using regular expressions for mapping users)\n    #\n\n    # Sub-uri user is redirected to if unable to map authenticated-user to\n    # system-user\n    # Example:\n    #     register_uri: '/register'\n    # Default: null (display error to user if mapping fails)\n    #register_uri: null\n\n    # Root directory on the filesystem that serves the HTML code used to register\n    # an unmapped user\n    # Example:\n    #     register_root: '/var/www/ood/register'\n    # Default: null (display error to user if mapping fails)\n    #register_root: null\n\n    # OIDC metadata URL\n    # Example:\n    #     oidc_provider_metadata_url: https://example.com:5554/.well-known/openid-configuration\n    # Default: null (value auto-generated if using Dex)\n    #oidc_provider_metadata_url: null\n\n    # OIDC client ID\n    # Example:\n    #     oidc_client_id: ondemand.example.com\n    # Default: null (value auto-generated if using Dex)\n    #oidc_client_id: null\n\n    # OIDC client secret\n    # Example:\n    #     oidc_client_secret: 334389048b872a533002b34d73f8c29fd09efc50\n    # Default: null (value auto-generated if using Dex)\n    #oidc_client_secret: null\n\n    # OIDC remote user claim. This is the claim that populates REMOTE_USER\n    # Example:\n    #     oidc_remote_user_claim: preferred_username\n    # Default: preferred_username\n    #oidc_remote_user_claim: preferred_username\n\n    # OIDC scopes\n    # Example:\n    #     oidc_scope: \"openid profile email groups\"\n    # Default: \"openid profile email\"\n    #oidc_scope: \"openid profile email\"\n\n    # OIDC session inactivity timeout\n    # Example:\n    #     oidc_session_inactivity_timeout: 28800\n    # Default: 28800\n    #oidc_session_inactivity_timeout: 28800\n\n    # OIDC session max duration\n    # Example:\n    #     oidc_session_max_duration: 28800\n    # Default: 28800\n    #oidc_session_max_duration: 28800\n\n    # OIDC max number of state cookies and if to automatically clean old cookies\n    # Example:\n    #     oidc_state_max_number_of_cookies: \"10 true\"\n    # Default: \"10 true\"\n    #oidc_state_max_number_of_cookies: \"10 true\"\n\n    # OIDC Enable SameSite cookie\n    # When ssl is defined this defaults to 'Off'\n    # When ssl is not defined this defaults to 'On'\n    # Example:\n    #     oidc_cookie_same_site: 'Off'\n    # Default: 'On'\n    #oidc_cookie_same_site: 'On'\n\n    # Additional OIDC settings as key-value pairs\n    # Example:\n    #     oidc_settings:\n    #       OIDCPassIDTokenAs: serialized\n    #       OIDCPassRefreshToken: On\n    # Default: {} (empty hash)\n\n    # Dex configurations, values inside the \"dex\" structure are directly used to configure Dex\n    # If the value for \"dex\" key is false or null, Dex support is disabled\n    # Dex support will auto-enable if ondemand-dex package is installed\n    dex:\n      # Default based on if ssl key for ood-portal-generator is defined\n      ssl: false\n      # Only used if SSL is disabled\n      http_port: '5556'\n      # Only used if SSL is enabled\n      https_port: '5554'\n      # tls_cert and tls_key take OnDemand configured values for ssl and copy keys to /etc/ood/dex maintaining file names\n      #  tls_cert: null\n      #  tls_key: null\n      #  storage_file: /etc/ood/dex/dex.db\n      #  grpc: null\n      #  expiry: null\n      # Client ID, defaults to servername or FQDN\n      #  client_id: null\n      #  client_name: OnDemand\n      # Client secret, value auto generated\n      # A value that is a filesystem path can be used to store secret in a file\n      #  client_secret: /etc/ood/dex/ondemand.secret\n      # The OnDemand redirectURI is auto-generated, this option allows adding additional URIs\n      client_redirect_uris: [\"https://ondemand.example.com/oidc\"]\n      # Additional Dex OIDC clients to configure\n      #  static_clients: []\n      # The following example is to configure OpenLDAP\n      # Docs: https://github.com/dexidp/dex/blob/master/Documentation/connectors/ldap.md\n      connectors:\n        - type: ldap\n          id: ldap\n          name: LDAP\n          config:\n            host: ldap.example.com:636\n            insecureSkipVerify: true\n            bindDN: cn=admin,dc=example,dc=com\n            bindPW: password\n            userSearch:\n              baseDN: ou=People,dc=example,dc=com\n              filter: '(objectClass=posixAccount)'\n              username: uid\n              idAttr: uid\n              emailAttr: mail\n              nameAttr: cn\n              preferredUsernameAttr: cn\n            groupSearch:\n              baseDN: ou=Group,dc=example,dc=org\n              filter: '(objectClass=posixGroup)'\n              userMatchers:\n                - userAttr: DN\n                  groupAttr: memberUid\n              nameAttr: cn\n    host_regex: 'cn\\d+'\n    node_uri: '/node'\n    rnode_uri: '/rnode'\n    #  frontend:\n    #    theme: ondemand\n    #    dir: /usr/share/ondemand-dex/web\n")),(0,o.kt)("p",null,"Edit the file accordingly. For more information, consult the ",(0,o.kt)("a",{parentName:"p",href:"https://osc.github.io/ood-documentation/latest/reference/files/ood-portal-yml.html"},"Open OnDemand documentation"),"."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Seal the secret:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"cfctl kubeseal\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Apply the SealedSecret:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"kubectl apply -f argo/slurm-cluster/secrets/openondemand-portal-sealed-secret.yaml\n")),(0,o.kt)("h2",{id:"2-values-enable-open-ondemand"},"2. Values: Enable Open OnDemand"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/slurm-cluster/values-<cluster name>.yaml"',title:'"helm/slurm-cluster/values-<cluster','name>.yaml"':!0},"ondemand:\n  enabled: true\n  image: ghcr.io/squarefactory/open-ondemand:2.0.28-slurm22.05-dex\n\n  command: ['sh', '-c', 'update-ca-trust && /init']\n\n  oodPortalSecretName: 'openondemand-portal-secret'\n\n  hostAliases:\n    - ip: '127.0.0.1'\n      hostnames:\n        - 'ondemand.example.com'\n\n  sshd:\n    secretName: login-sshd-secret\n\n  config:\n    nginxStage:\n      pun_custom_env:\n        OOD_DASHBOARD_TITLE: 'Open OnDemand'\n        #OOD_BRAND_BG_COLOR: \"#120641\"\n        #OOD_BRAND_LINK_ACTIVE_BG_COLOR: \"#6753ff\"\n        #OOD_DASHBOARD_LOGO: \"/public/logo.png\"\n    apps: {}\n    dev: {}\n    clusters:\n      my-cluster:\n        v2:\n          metadata:\n            title: 'Cluster'\n          login:\n            host: '127.0.0.1'\n          job:\n            adapter: 'slurm'\n            cluster: 'ReindeerPizza'\n            bin: '/usr/bin'\n            conf: '/etc/slurm/slurm.conf'\n            bin_overrides:\n              sbatch: '/usr/bin/sbatch'\n              squeue: '/usr/bin/squeue'\n              scontrol: '/usr/bin/scontrol'\n              scancel: '/usr/bin/scancel'\n          acls:\n            - adapter: 'group'\n              groups:\n                - 'cluster-users'\n                # - \"other_users_of_the_cluster\"\n              type: 'whitelist'\n          batch_connect:\n            basic:\n              script_wrapper: |\n                %s\n            vnc:\n              script_wrapper: |\n                export WEBSOCKIFY_CMD=\"python3 -m websockify\"\n                export PATH=\"/opt/TurboVNC/bin:${PATH}\"\n                %s\n\n  nodeSelector:\n    topology.kubernetes.io/region: <FILL ME> # <country code>-<city>\n    topology.kubernetes.io/zone: <FILL ME> # <country code>-<city>-<index>\n\n  volumeMounts:\n    - name: ldap-users-pvc\n      mountPath: /home/ldap-users\n    - name: ca-cert\n      mountPath: /etc/pki/ca-trust/source/anchors/example.com.ca.pem\n      subPath: example.com.ca.pem\n\n  volumes:\n    - name: ldap-users-pvc\n      persistentVolumeClaim:\n        claimName: ldap-users-<cluster name>-pvc\n    - name: ca-cert\n      secret:\n        secretName: local-ca-secret\n")),(0,o.kt)("p",null,"You might be also interested to mount extra configuration files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Sample argo/slurm-cluster/configs/ondemand-extra-configs.yaml"',title:'"Sample','argo/slurm-cluster/configs/ondemand-extra-configs.yaml"':!0},'kind: ConfigMap\napiVersion: v1\nmetadata:\n  name: ondemand-extra-configs\n  namespace: slurm-cluster\ndata:\n  bc_desktop_<cluster name>.yaml: |\n    title: "My Cluster"\n    cluster: "<cluster name>"\n    attributes:\n      desktop: "xfce"\n      bc_account: null\n  dashboard_env: |\n    MOTD_PATH="/etc/motd" # this supports both file and RSS feed URIs\n    MOTD_FORMAT="txt_erb" # markdown, txt, rss, markdown_erb, txt_erb\n    # don\'t show ssh link in batch connect card\n    OOD_BC_SSH_TO_COMPUTE_NODE=off\n  shell_env: |\n    OOD_SHELL_ORIGIN_CHECK=\'off\'\n    OOD_SSH_WRAPPER=\'/usr/local/sbin/ssh_insecure\'\n  motd: |\n    Welcome to DeepSquare for education!\n  ssh_insecure: |\n    #!/bin/sh\n\n    exec /usr/bin/ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null "$@"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/slurm-cluster/values-<cluster name>.yaml"',title:'"helm/slurm-cluster/values-<cluster','name>.yaml"':!0},"ondemand:\n  # ...\n\n  nodeSelector:\n    topology.kubernetes.io/region: <FILL ME> # <country code>-<city>\n    topology.kubernetes.io/zone: <FILL ME> # <country code>-<city>-<index>\n\n  volumeMounts:\n    - name: ldap-users-pvc\n      mountPath: /home/ldap-users\n    - name: ca-cert\n      mountPath: /etc/pki/ca-trust/source/anchors/example.com.ca.pem\n      subPath: example.com.ca.pem\n    - name: ondemand-extra-configs\n      mountPath: /etc/ood/config/apps/bc_desktop/<cluster name>.yaml\n      subPath: bc_desktop_<cluster name>.yaml\n    - name: ondemand-extra-configs\n      mountPath: /etc/ood/config/apps/dashboard/env\n      subPath: dashboard_env\n    - name: ondemand-extra-configs\n      mountPath: /etc/ood/config/apps/shell/env\n      subPath: shell_env\n    - name: ondemand-extra-configs\n      mountPath: /etc/motd\n      subPath: motd\n    - name: ondemand-extra-configs\n      mountPath: /usr/local/sbin/ssh_insecure\n      subPath: ssh_insecure\n\n  volumes:\n    - name: ldap-users-pvc\n      persistentVolumeClaim:\n        claimName: ldap-users-<cluster name>-pvc\n    - name: ca-cert\n      secret:\n        secretName: local-ca-secret\n    - name: ondemand-extra-configs\n      configMap:\n        name: ondemand-extra-configs\n        defaultMode: 493\n")),(0,o.kt)("p",null,"You should also configure the Ingress:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/slurm-cluster/values-<cluster name>.yaml"',title:'"helm/slurm-cluster/values-<cluster','name>.yaml"':!0},"ondemand:\n  # ...\n  httpIngress:\n    enabled: true\n    annotations:\n      traefik.ingress.kubernetes.io/router.entrypoints: web\n    ingressClass: 'traefik'\n\n    hosts:\n      - ondemand.example.com\n\n    tls: {}\n\n  oidcIngress:\n    enabled: true\n    annotations:\n      traefik.ingress.kubernetes.io/router.entrypoints: oidc\n    ingressClass: 'traefik'\n\n    hosts:\n      - ondemand.example.com\n\n    tls: {}\n")),(0,o.kt)("p",null,"The entry point ",(0,o.kt)("inlineCode",{parentName:"p"},"oidc")," (",(0,o.kt)("inlineCode",{parentName:"p"},"5556/tcp"),") must be opened on Traefik. If you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"tls"),", you should open the post ",(0,o.kt)("inlineCode",{parentName:"p"},"oidcs")," (",(0,o.kt)("inlineCode",{parentName:"p"},"5554/tcp"),") and apply this Ingress instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="helm/slurm-cluster/values-<cluster name>.yaml"',title:'"helm/slurm-cluster/values-<cluster','name>.yaml"':!0},"ondemand:\n  # ...\n  httpIngress:\n    enabled: true\n    annotations:\n      cert-manager.io/cluster-issuer: selfsigned-cluster-issuer\n      traefik.ingress.kubernetes.io/router.entrypoints: websecure\n      traefik.ingress.kubernetes.io/router.tls: 'true'\n    ingressClass: 'traefik'\n\n    hosts:\n      - ondemand.example.com\n\n    tls:\n      - secretName: ondemand.example.com-secret\n        hosts:\n          - ondemand.example.com\n\n  oidcIngress:\n    enabled: true\n    annotations:\n      cert-manager.io/cluster-issuer: selfsigned-cluster-issuer\n      traefik.ingress.kubernetes.io/router.entrypoints: oidcs\n      traefik.ingress.kubernetes.io/router.tls: 'true'\n    ingressClass: 'traefik'\n\n    hosts:\n      - ondemand.example.com\n\n    tls:\n      - secretName: ondemand.example.com-secret\n        hosts:\n          - ondemand.example.com\n")),(0,o.kt)("p",null,"You should also handle the redirection from ",(0,o.kt)("inlineCode",{parentName:"p"},"oidc")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"oidcs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"http")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"https"),", by using either a ",(0,o.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/middlewares/http/redirectscheme/"},"middleware"),", or using an ",(0,o.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/routing/entrypoints/#redirection"},"entry point redirection")," (use the CLI configuration)."),(0,o.kt)("p",null,"Deploy the application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'git add .\ngit commit -m "Added SLURM OnDemand values"\ngit push\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"# This is optional if the application is already deployed.\nkubectl apply -f argo/slurm-cluster/apps/slurm-cluster-<cluster name>-app.yaml\n")),(0,o.kt)("p",null,"You should be able to connect to the website by using the configured URL."))}p.isMDXComponent=!0}}]);