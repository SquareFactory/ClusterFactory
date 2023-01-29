"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[5575],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1352:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(9496),o=n(5924);const s="tabItem_OVN3";function a(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(s,a),hidden:n},t)}},2893:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(665),o=n(9496),s=n(5924),a=n(3226),i=n(9755),l=n(6642),c=n(6075);function u(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,o.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=p(e),[a,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[l,u]=m({queryString:n,groupId:r}),[g,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),f=(()=>{const e=l??g;return d({value:e,tabValues:s})?e:null})();(0,o.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,s]),tabValues:s}}var h=n(5208),f=n(5584);const y="tabList_AkOH",k="tabItem_N_ej";function b(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,h.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=l[n].value;r!==a&&(u(t),i(r))},d=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:p},i,{className:(0,s.Z)("tabs__item",k,null==i?void 0:i.className,{"tabs__item--active":a===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=g(e);return o.createElement("div",{className:(0,s.Z)("tabs-container",y)},o.createElement(b,(0,r.Z)({},e,t)),o.createElement(v,(0,r.Z)({},e,t)))}function x(e){const t=(0,f.Z)();return o.createElement(w,(0,r.Z)({key:String(t)},e))}},60:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(665),o=(n(9496),n(9613)),s=n(2893),a=n(1352);const i={},l="GitOps with xCAT",c={unversionedId:"guides/provisioning/gitops-with-xcat",id:"guides/provisioning/gitops-with-xcat",title:"GitOps with xCAT",description:"In the next version of ClusterFactory, xCAT will be a Kubernetes operator.",source:"@site/docs/guides/50-provisioning/04-gitops-with-xcat.mdx",sourceDirName:"guides/50-provisioning",slug:"/guides/provisioning/gitops-with-xcat",permalink:"/docs/guides/provisioning/gitops-with-xcat",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory/tree/main/web/docs/guides/50-provisioning/04-gitops-with-xcat.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"docs",previous:{title:"Configure xCAT to provision the nodes",permalink:"/docs/guides/provisioning/configure-xcat"},next:{title:"Deploying SLURM Cluster",permalink:"/docs/guides/slurm/deploy-slurm"}},u={},p=[{value:"Stanza files as source of truth",id:"stanza-files-as-source-of-truth",level:2},{value:"Creating and using a postbootscript/cloud-init file to allow GitOps",id:"creating-and-using-a-postbootscriptcloud-init-file-to-allow-gitops",level:2},{value:"Step 1: Setup the Git repository",id:"step-1-setup-the-git-repository",level:3},{value:"Step 2: Add a SSH deploy key to the GitHub repository",id:"step-2-add-a-ssh-deploy-key-to-the-github-repository",level:3},{value:"Step 3: Encrypt the SSH deploy private key",id:"step-3-encrypt-the-ssh-deploy-private-key",level:3},{value:"Step 4: Creating the post-boot script/cloud-init file",id:"step-4-creating-the-post-boot-scriptcloud-init-file",level:3}],d={toc:p};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gitops-with-xcat"},"GitOps with xCAT"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In the next version of ClusterFactory, xCAT will be a Kubernetes operator."),(0,o.kt)("p",{parentName:"admonition"},"This means that the stanza file for the definition of the cluster can be written in YAML, and there will be no need to SSH to xCAT.")),(0,o.kt)("h2",{id:"stanza-files-as-source-of-truth"},"Stanza files as source of truth"),(0,o.kt)("p",null,"You can dump the database by using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="root@xcat"',title:'"root@xcat"'},"lsdef -a -l -z > mydbstanzafile\n# -a: all\n# -l: long\n# -z: stanza\n")),(0,o.kt)("p",null,"You can apply a stanza by using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="root@xcat"',title:'"root@xcat"'},"cat mydbstanzafile | mkdef -z\n")),(0,o.kt)("h2",{id:"creating-and-using-a-postbootscriptcloud-init-file-to-allow-gitops"},"Creating and using a postbootscript/cloud-init file to allow GitOps"),(0,o.kt)("p",null,"A post-boot script/cloud-init file is executed after the boot of the OS, thanks to SystemD."),(0,o.kt)("p",null,"The strategy is the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The postscripts/cloud-init file will accept one parameter: a private key. This key shouldn't be checked in Git."),(0,o.kt)("li",{parentName:"ol"},"The secret key will decrypt the SSH deploy key, which is stored inside the script."),(0,o.kt)("li",{parentName:"ol"},"With the SSH deploy key, the script will ",(0,o.kt)("inlineCode",{parentName:"li"},"git clone")," the Git repository containing the configuration files"),(0,o.kt)("li",{parentName:"ol"},"If the script ",(0,o.kt)("inlineCode",{parentName:"li"},"post.sh")," exists in the repository, then we execute this file."),(0,o.kt)("li",{parentName:"ol"},"This file will copy files and executes other post-boot scripts.")),(0,o.kt)("h3",{id:"step-1-setup-the-git-repository"},"Step 1: Setup the Git repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/"',title:'"user@local:/"'},"mkdir compute-configs\ncd compute-configs\ngit init\n")),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"post.sh")," file. This is the entry point. You can do anything you want inside (copy or run other scripts)."),(0,o.kt)("p",null,"Here is an example of our script that we use daily for ",(0,o.kt)("a",{parentName:"p",href:"https://deepsquare.io"},"DeepSquare"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local"',title:'"user@local"'},'#!/bin/sh\n\n# RUN wraps the command to log into journalctl\nRUN() {\n  logger -t postscripts "Running $*..."\n  "$@"\n  code=$?\n  if [ $code -eq 1 ]; then\n    logger -t postscripts "$* failed with error code $code"\n  elif [ $code -ne 0 ]; then\n    logger -t postscripts "$* exited with error code $code"\n  fi\n  logger -t postscripts "$* exited with code $code"\n}\n\nCOPY() {\n  mkdir -p "$(dirname "$2")"\n  rsync -av "$1" "$2"\n}\n\nSCRIPTPATH=$(dirname "$(realpath "$0")")\n\n# -- SYNCLIST\ncd "${SCRIPTPATH}/files" || (echo "cd failed" && exit 1)\nCOPY ./sssd/sssd.rocky.conf /etc/sssd/sssd.conf\n\nCOPY ./munge/munge.key /etc/munge/munge.key\n\n# Slurm configless\nCOPY ./slurm/slurmd_defaults /etc/default/slurmd\n\n# Slurm\nCOPY ./systemd/slurmd.service /etc/systemd/system/slurmd.service\nCOPY ./enroot/00-default.conf /etc/enroot/enroot.conf.d/00-default.conf\nCOPY ./slurm/prolog.d/ /etc/slurm/prolog.d/\nCOPY ./slurm/epilog.d/ /etc/slurm/epilog.d/\nCOPY ./slurm/plugstack.rocky.conf.d/ /etc/slurm/plugstack.conf.d/\n\n# CA\nCOPY ./certs/csquare.gcloud.pem /etc/pki/ca-trust/source/anchors/csquare.gcloud.pem\nupdate-ca-trust\nsystemctl restart sssd\n\n# -- APPEND\ncat ./slurmctl/keys/id_rsa.pub >>/root/.ssh/authorized_keys\n\n# Restore context\ncd "${SCRIPTPATH}" || (echo "cd failed" && exit 1)\n\n# -- EXECUTE (use RUN to log your postscripts)\nPATH="${SCRIPTPATH}/postscripts:$PATH"\n\nRUN ldap\nRUN fs_mount\nRUN slurm\nRUN set-motd\n')),(0,o.kt)("p",null,"The copied files are stored inside a ",(0,o.kt)("inlineCode",{parentName:"p"},"files/")," directory and other scripts are stored inside a ",(0,o.kt)("inlineCode",{parentName:"p"},"postscripts/")," directory."),(0,o.kt)("p",null,"Like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},".\n\u251c\u2500\u2500 files\n\u2502\xa0\xa0 \u251c\u2500\u2500 certs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 csquare.gcloud.pem\n\u2502\xa0\xa0 \u251c\u2500\u2500 enroot\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 00-default.conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 munge\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 munge.key\n\u2502\xa0\xa0 \u251c\u2500\u2500 slurm\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 epilog.d\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 none.sh\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 plugstack.rocky.conf.d\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 spank.conf\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 prolog.d\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 50-all-enroot-dirs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 slurmd_defaults\n\u2502\xa0\xa0 \u251c\u2500\u2500 slurmctl\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 keys\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 id_rsa\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 id_rsa.pub\n\u2502\xa0\xa0 \u251c\u2500\u2500 sssd\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 sssd.rocky.conf\n\u2502\xa0\xa0 \u2514\u2500\u2500 systemd\n\u2502\xa0\xa0     \u2514\u2500\u2500 slurmd.service\n\u251c\u2500\u2500 git-configs-execute.xcat-postbootscript.example\n\u251c\u2500\u2500 postscripts\n\u2502\xa0\xa0 \u251c\u2500\u2500 fs_mount\n\u2502\xa0\xa0 \u251c\u2500\u2500 ldap\n\u2502\xa0\xa0 \u251c\u2500\u2500 set-motd\n\u2502\xa0\xa0 \u2514\u2500\u2500 slurm\n\u2514\u2500\u2500 post.sh\n")),(0,o.kt)("p",null,"Commit and put it on GitHub as a private (or public if you feel safe) repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:'language-title="user@local:/compute-configs"'},'git add .\ngit commit -m "feat: initial commit"\ngit remote add origin https://github.com/user/repo.git\ngit branch -M main\ngit push -u origin main\n')),(0,o.kt)("h3",{id:"step-2-add-a-ssh-deploy-key-to-the-github-repository"},"Step 2: Add a SSH deploy key to the GitHub repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local"',title:'"user@local"'},"ssh-keygen -t ed25519 -f key\n")),(0,o.kt)("p",null,"Put the ",(0,o.kt)("inlineCode",{parentName:"p"},"key.pub")," on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/developers/overview/managing-deploy-keys#setup-2"},"GitHub as a deploy key"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Deploy Key page",src:n(5496).Z,width:"2154",height:"1194"})),(0,o.kt)("h3",{id:"step-3-encrypt-the-ssh-deploy-private-key"},"Step 3: Encrypt the SSH deploy private key"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local"',title:'"user@local"'},"openssl enc -aes-256-cbc -a -salt -pbkdf2 -in key -out key.enc\n")),(0,o.kt)("p",null,"Save the password for the next step."),(0,o.kt)("h3",{id:"step-4-creating-the-post-boot-scriptcloud-init-file"},"Step 4: Creating the post-boot script/cloud-init file"),(0,o.kt)(s.Z,{groupId:"provisioning",mdxType:"Tabs"},(0,o.kt)(a.Z,{value:"xcat",label:"xCAT",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="git-config-execute.sh <password>"',title:'"git-config-execute.sh','<password>"':!0},"#!/bin/sh\n# Params:\n#  1: password for the ssh key\n\nset -x\n\nmkdir -p /configs\n\n# Encrypt\ncat << EOF > /key.enc\n<FILL ME: encrypted SSH deploy key>\nEOF\nchmod 600 /key.enc\necho \"$1\" | openssl aes-256-cbc -d -a -pbkdf2 -in /key.enc -out /key -pass stdin\nchmod 600 /key\nGIT_SSH_COMMAND='ssh -i /key -o IdentitiesOnly=yes' git clone <FILL ME: your git repository> /configs\nif [ -f /configs/post.sh ] && [ -x /configs/post.sh ]; then\n  cd /configs || exit 1\n  ./post.sh\nfi\nrm -f /key /key.env\n\n# Security\nchmod -R g-rwx,o-rwx .\n")),(0,o.kt)("p",null,"On xCAT, you should add the post-boot script inside an ",(0,o.kt)("inlineCode",{parentName:"p"},"osimage")," stanza:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="stanzafile"',title:'"stanzafile"'},"rocky8.6-x86_64-netboot-compute:\n    objtype=osimage\n    exlist=/xcatdata/install/rocky8.6/x86_64/Packages/compute.rocky8.x86_64.exlist\n    imagetype=linux\n    kernelver=4.18.0-305.17.1.el8_4.x86_64\n    osarch=x86_64\n    osname=Linux\n    osvers=rocky8.6\n    permission=755\n    postbootscripts=git-config-execute.sh <FILL ME: password>\n    profile=compute\n    provmethod=netboot\n    pkgdir=/tmp\n    pkglist=/dev/null\n    rootimgdir=/install/netboot/rocky8.6/x86_64/compute\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Since we are doing GitOps, we do not need to use the xCAT provisioning system. Therefore, we set ",(0,o.kt)("inlineCode",{parentName:"p"},"pkgdir=/tmp")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"pkglist=/dev/null"),".")),(0,o.kt)("p",null,"Since the stanza contains a secret, you should store it in a Secret management system like HashiCorp Vault or a Sealed Secrets.")),(0,o.kt)(a.Z,{value:"cloud-init",label:"cloud-init",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"#cloud-config\nwrite_files:\n  - content: |\n      <FILL ME: encrypted SSH deploy key>\n    path: /key.enc\n    permissions: '0600'\n\nruncmd:\n  - [\n      sh,\n      -c,\n      \"echo '<FILL ME: password>' | openssl aes-256-cbc -d -a -pbkdf2 -in /key.enc -out /key -pass stdin\",\n    ]\n  - [chmod, '600', /key]\n  - [\n      sh,\n      -c,\n      \"mkdir -p /configs && GIT_SSH_COMMAND='ssh -i /key -o IdentitiesOnly=yes' git clone <FILL ME: your git repository> /configs\",\n    ]\n  - [\n      sh,\n      -c,\n      'if [ -f /configs/post.sh ] && [ -x /configs/post.sh ]; then cd /configs && ./post.sh compute; fi',\n    ]\n  - [rm, -f, /key, /key.enc]\n  - [chmod, -R, 'g-rwx,o-rwx', '.']\n")),(0,o.kt)("p",null,"Since the ",(0,o.kt)("inlineCode",{parentName:"p"},"cloud-init")," contains a secret, you should store it in a Secret management system like HashiCorp Vault or a Sealed Secrets."))))}m.isMDXComponent=!0},5496:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/deploy-key-eff7e8504e92d7759d4e2111b20b0824.png"}}]);