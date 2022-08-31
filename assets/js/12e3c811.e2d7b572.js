"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[682],{9613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var o=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return t?o.createElement(g,s(s({ref:n},p),{},{components:t})):o.createElement(g,s({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8710:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var o=t(665),a=t(151),r=(t(9496),t(9613)),s=["components"],i={},l="7. xCAT Configuration",c={unversionedId:"getting-started/xcat-configuration",id:"getting-started/xcat-configuration",title:"7. xCAT Configuration",description:"This part of the documentation is mostly a draft.",source:"@site/docs/getting-started/07-xcat-configuration.md",sourceDirName:"getting-started",slug:"/getting-started/xcat-configuration",permalink:"/docs/getting-started/xcat-configuration",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory-CE/tree/main/web/docs/getting-started/07-xcat-configuration.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"docs",previous:{title:"6. xCAT Deployment",permalink:"/docs/getting-started/xcat-deployment"},next:{title:"K0s, the Kubernetes distribution for bare-metal",permalink:"/docs/main-concepts/k0s"}},p={},u=[{value:"Network configuration",id:"network-configuration",level:2},{value:"OS Image configuration",id:"os-image-configuration",level:2},{value:"Node configuration",id:"node-configuration",level:2},{value:"Deploy",id:"deploy",level:2}],m={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"7-xcat-configuration"},"7. xCAT Configuration"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This part of the documentation is mostly a draft."),(0,r.kt)("p",{parentName:"admonition"},"The best way to get started is to follow ",(0,r.kt)("a",{parentName:"p",href:"https://xcat-docs.readthedocs.io/en/stable/guides/get-started/quick_start.html"},"the xCAT official quick start"),".")),(0,r.kt)("p",null,"The configuration of xCAT doesn't follow the GitOps ways and certainly doesn't follow the declarative way since we need to SSH to the pod."),(0,r.kt)("p",null,"In the future, we plan to develop and integrate this feature. For now, let's just SSH to the container."),(0,r.kt)("p",null,'In this guide, we will try to get as close as possible to the "declarative" method. xCAT works with stanza files. The whole xCAT cluster can be configured with one big stanza file.'),(0,r.kt)("p",null,"It looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'compute01:\n      objtype=node\n      arch=x86_64\n      mgt=ipmi\n      cons=ipmi\n      bmc=10.1.0.12\n      nictypes.etn0=ethernet\n      nicips.eth0=11.10.1.3\n      nichostnamesuffixes.eth0=-eth0\n      nicnetworks.eth0=clstrnet1\n      nictypes.eth1=ethernet\n      nicips.eth1=60.0.0.7|70.0.0.7\n      nichostnamesuffixes.eth1=-eth1|-eth1-lab\n      nicnetworks.eth1=clstrnet2|clstrnet3\n      nicaliases.eth0="alias1 alias2"\n      nicaliases.eth1="alias3|alias4"\n')),(0,r.kt)("p",null,"A full cluster looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# <xCAT data object stanza file>\n\nmontbhandler.pm:\n    objtype=notification\n    tableops=a,u,d\n    tables=monsetting\n\n192_168_0_0-255_255_255_0:\n    objtype=network\n    domain=ch1.deepsquare.run\n    gateway=192.168.0.1\n    mask=255.255.255.0\n    mgtifname=ens18\n    mtu=1500\n    nameservers=192.168.1.100\n    net=192.168.0.0\n    tftpserver=<xcatmaster>\n\nib0ipv41:\n    objtype=network\n    mask=255.255.255.0\n    mgtifname=ib0\n    net=192.168.1.0\n\nrocky8.4-x86_64-netboot-compute:\n    objtype=osimage\n    exlist=/xcatdata/install/rocky8.4/x86_64/Packages/compute.rocky8.x86_64.exlist\n    imagetype=linux\n    kernelver=4.18.0-305.17.1.el8_4.x86_64\n    osarch=x86_64\n    osname=Linux\n    osvers=rocky8.4\n    permission=755\n    postbootscripts=git-configs-execute its-a-fake-password-dont-worry compute\n    profile=compute\n    provmethod=netboot\n    pkgdir=/tmp\n    pkglist=/dev/null\n    rootimgdir=/install/netboot/rocky8.4/x86_64/compute\n\ncn1:\n    objtype=node\n    addkcmdline=modprobe.blacklist=nouveau crashkernel=256M\n    arch=x86_64\n    bmc=10.10.3.51\n    bmcpassword=password\n    bmcusername=admin\n    cons=ipmi\n    consoleenabled=1\n    currstate=netboot rocky8.4-x86_64-compute\n    groups=compute,all\n    ip=192.168.0.51\n    mac=ab:cd:ef:12:34:56\n    mgt=ipmi\n    netboot=xnba\n    nicips.ib0=192.168.1.51\n    nicnetworks.ib0=ib0ipv41\n    nictypes.ib0=Infiniband\n    os=rocky8.4\n    postbootscripts=nvidia-xorg\n    profile=compute\n    provmethod=rocky8.4-x86_64-netboot-compute\n    serialport=1\n    serialspeed=115200\n    status=booted\n    statustime=05-03-2022 10:23:10\n    updatestatus=synced\n    updatestatustime=03-23-2022 10:27:05\n\n1:\n    objtype=policy\n    name=root\n    rule=allow\n\n1.2:\n    objtype=policy\n    name=xcatmn\n    rule=trusted\n\n2:\n    objtype=policy\n    commands=getbmcconfig\n    rule=allow\n\n2.1:\n    objtype=policy\n    commands=remoteimmsetup\n    rule=allow\n\n2.3:\n    objtype=policy\n    commands=lsxcatd\n    rule=allow\n\n3:\n    objtype=policy\n    commands=nextdestiny\n    rule=allow\n\n4:\n    objtype=policy\n    commands=getdestiny\n    rule=allow\n\n4.4:\n    objtype=policy\n    commands=getpostscript\n    rule=allow\n\n4.5:\n    objtype=policy\n    commands=getcredentials\n    rule=allow\n\n4.6:\n    objtype=policy\n    commands=syncfiles\n    rule=allow\n\n4.7:\n    objtype=policy\n    commands=litefile\n    rule=allow\n\n4.8:\n    objtype=policy\n    commands=litetree\n    rule=allow\n\n4.9:\n    objtype=policy\n    commands=getadapter\n    rule=allow\n\nall:\n    objtype=group\n    members=cn1\n\ncompute:\n    objtype=group\n    members=cn1\n\nclustersite:\n    objtype=site\n    SNsyncfiledir=/var/xcat/syncfiles\n    auditnosyslog=0\n    auditskipcmds=ALL\n    blademaxp=64\n    cleanupdiskfullxcatpost=no\n    cleanupxcatpost=no\n    consoleondemand=no\n    databaseloc=/var/lib\n    db2installloc=/mntdb2\n    dhcplease=43200\n    dnshandler=ddns\n    domain=xcat.provisioning.svc.cluster.local\n    enableASMI=no\n    forwarders=10.96.0.10\n    fsptimeout=0\n    installdir=/install\n    ipmimaxp=64\n    ipmiretries=3\n    ipmitimeout=2\n    master=192.168.0.3\n    maxssh=8\n    nameservers=192.168.0.3\n    nodesyncfiledir=/var/xcat/node/syncfiles\n    powerinterval=0\n    ppcmaxp=64\n    ppcretry=3\n    ppctimeout=0\n    sharedtftp=1\n    sshbetweennodes=ALLGROUPS\n    syspowerinterval=0\n    tftpdir=/tftpboot\n    timezone=Etc/UCT\n    useNmapfromMN=no\n    vsftp=n\n    xcatconfdir=/etc/xcat\n    xcatdport=3001\n    xcatiport=3002\n\nrocky8.4-x86_64:\n    objtype=osdistro\n    arch=x86_64\n    basename=rocky\n    dirpaths=/install/rocky8.4/x86_64\n    majorversion=8\n    minorversion=4\n    type=Linux\n")),(0,r.kt)("p",null,"Some fields are auto-generated. So let's just configure the network, the OS Image and the nodes."),(0,r.kt)("h2",{id:"network-configuration"},"Network configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="mystanzafile"',title:'"mystanzafile"'},"192_168_0_0-255_255_255_0:\n    objtype=network\n    domain=example.com\n    gateway=192.168.0.1\n    mask=255.255.255.0\n    mgtifname=ens18\n    mtu=1500\n    nameservers=192.168.1.100\n    net=192.168.0.0\n    tftpserver=<xcatmaster>\n")),(0,r.kt)("p",null,"Apply the stanza:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="ssh root@xcat"',title:'"ssh','root@xcat"':!0},"cat mystanzafile | mkdef -z\n")),(0,r.kt)("p",null,"And regenerate the DNS and DHCP configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="ssh root@xcat"',title:'"ssh','root@xcat"':!0},'echo "reconfiguring hosts..."\nmakehosts\necho "reconfiguring dns..."\nmakedns\necho "reconfiguring dhcpd config..."\nmakedhcp -n\necho "reconfiguring dhcpd leases..."\nmakedhcp -a\n')),(0,r.kt)("p",null,"More details ",(0,r.kt)("a",{parentName:"p",href:"https://xcat-docs.readthedocs.io/en/latest/guides/admin-guides/references/man5/networks.5.html"},"here"),"."),(0,r.kt)("p",null,"For Infiniband, follow ",(0,r.kt)("a",{parentName:"p",href:"https://xcat-docs.readthedocs.io/en/stable/advanced/networks/infiniband/network_configuration.html"},"this guide"),"."),(0,r.kt)("h2",{id:"os-image-configuration"},"OS Image configuration"),(0,r.kt)("p",null,"Use Packer to build OS images."),(0,r.kt)("p",null,"You can build the SquareFactory OS image using the recipes stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"packer-recipes"),". It runs RedHat Kickstart and installs all the dependencies."),(0,r.kt)("p",null,"You can then copy the root filesystem to xCAT using rsync. Follow the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/provisioning/packer-build"},'guide "Build an OS Image with Packer" for more details'),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="mystanzafile"',title:'"mystanzafile"'},"rocky8.4-x86_64-netboot-compute:\n    objtype=osimage\n    exlist=/install/rocky8.4/x86_64/Packages/compute.rocky8.x86_64.exlist\n    imagetype=linux\n    kernelver=4.18.0-305.17.1.el8_4.x86_64\n    osarch=x86_64\n    osname=Linux\n    osvers=rocky8.4\n    permission=755\n    postbootscripts=git-configs-execute its-a-fake-password-dont-worry compute\n    profile=compute\n    provmethod=netboot\n    pkgdir=/tmp\n    pkglist=/dev/null\n    rootimgdir=/install/netboot/rocky8.4/x86_64/compute\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Since we are doing GitOps, we do not need to use the xCAT provisioning system. Therefore, we set ",(0,r.kt)("inlineCode",{parentName:"p"},"pkgdir=/tmp")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pkglist=/dev/null"),".")),(0,r.kt)("p",null,"Our root filesystem is stored inside ",(0,r.kt)("inlineCode",{parentName:"p"},"/install/netboot/rocky8.4/x86_64/compute/rootimg"),"."),(0,r.kt)("p",null,"The file ",(0,r.kt)("inlineCode",{parentName:"p"},"/install/rocky8.4/x86_64/Packages/compute.rocky8.x86_64.exlist")," contains a list files/directories that are trimmed before packing the image."),(0,r.kt)("p",null,"Create the file and add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="/install/rocky8.4/x86_64/Packages/compute.rocky8.x86_64.exlist"',title:'"/install/rocky8.4/x86_64/Packages/compute.rocky8.x86_64.exlist"'},"./boot*\n./usr/include*\n./usr/lib/locale*\n./usr/lib64/perl5/Encode/CN*\n./usr/lib64/perl5/Encode/JP*\n./usr/lib64/perl5/Encode/TW*\n./usr/lib64/perl5/Encode/KR*\n./lib/kbd/keymaps/i386*\n./lib/kbd/keymaps/mac*\n./lib/kdb/keymaps/include*\n./usr/local/include*\n./usr/local/share/man*\n./usr/share/man*\n./usr/share/cracklib*\n./usr/share/doc*\n./usr/share/gnome*\n./usr/share/i18n*\n+./usr/share/i18n/en_US*\n./usr/share/info*\n./usr/share/locale/*\n+./usr/share/locale/en_US*\n+./usr/share/locale/C*\n+./usr/share/locale/locale.alias\n+./usr/lib/locale/locale-archive\n+./usr/lib/locale/en*\n./usr/share/man*\n./usr/share/omf*\n./usr/share/vim/site/doc*\n./usr/share/vim/vim74/doc*\n./usr/share/zoneinfo*\n./var/cache/man*\n./var/lib/yum*\n./tmp*\n")),(0,r.kt)("p",null,"Create one post-boot script inside ",(0,r.kt)("inlineCode",{parentName:"p"},"/install/postscripts")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"git-configs-execute"),", which ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone")," and executes scripts from a git repository."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="/install/postscripts/git-configs-execute"',title:'"/install/postscripts/git-configs-execute"'},'#!/bin/sh\n# Params:\n#  1: password for the ssh key\n#  2: node type (compute or private)\n\nset -x\n\nmkdir -p /configs\ncat << EOF > /key.enc\n# An encrypted private key using:\n# openssl enc -aes-256-cbc -a -salt -pbkdf2  -in id_ed25519_api -out id_ed25519_api.enc\nEOF\nchmod 600 /key.enc\necho "$1" | openssl aes-256-cbc -d -a -pbkdf2 -in /key.enc -out /key -pass stdin\nchmod 600 /key\nGIT_SSH_COMMAND=\'ssh -i /key -o IdentitiesOnly=yes\' git clone git@github.com:SquareFactory/compute-configs.git /configs\nif [ -f /configs/post.sh ] && [ -x /configs/post.sh ]; then\n  cd /configs || exit 1\n  ./post.sh "$2"\nfi\nrm -f /key /key.env\n\n# Security\nchmod -R g-rwx,o-rwx .\n')),(0,r.kt)("p",null,"This script clones ",(0,r.kt)("inlineCode",{parentName:"p"},"git@github.com:SquareFactory/compute-configs.git")," and executes ",(0,r.kt)("inlineCode",{parentName:"p"},"post.sh")," inside the git repository."),(0,r.kt)("p",null,"This script enables us to use Git as the source of truth instead of xCAT."),(0,r.kt)("p",null,"To apply the stanza:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="ssh root@xcat"',title:'"ssh','root@xcat"':!0},"cat mystanzafile | mkdef -z\n")),(0,r.kt)("p",null,"To generate the kernel and initrd for the netboot, call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="ssh root@xcat"',title:'"ssh','root@xcat"':!0},"geninitrd rocky8.4-x86_64-netboot-compute\n")),(0,r.kt)("p",null,"To pack the image as SquashFS, call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="ssh root@xcat"',title:'"ssh','root@xcat"':!0},"packimage -m squashfs -c pigz rocky8.4-x86_64-netboot-compute\n")),(0,r.kt)("p",null,"More details ",(0,r.kt)("a",{parentName:"p",href:"https://xcat-docs.readthedocs.io/en/stable/guides/admin-guides/references/man5/osimage.5.html"},"here"),"."),(0,r.kt)("h2",{id:"node-configuration"},"Node configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="mystanzafile"',title:'"mystanzafile"'},"cn1:\n    objtype=node\n    addkcmdline=modprobe.blacklist=nouveau crashkernel=256M\n    arch=x86_64\n    bmc=10.10.3.51\n    bmcpassword=password\n    bmcusername=admin\n    cons=ipmi\n    consoleenabled=1\n    currstate=netboot rocky8.4-x86_64-compute\n    groups=compute,all\n    ip=192.168.0.51\n    mac=ab:cd:ef:12:34:56\n    mgt=ipmi\n    netboot=xnba\n    os=rocky8.4\n    profile=compute\n    provmethod=rocky8.4-x86_64-netboot-compute\n    serialport=1\n    serialspeed=115200\n")),(0,r.kt)("p",null,"Apply the stanza:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="ssh root@xcat"',title:'"ssh','root@xcat"':!0},"cat mystanzafile | mkdef -z\n")),(0,r.kt)("p",null,"Regenerate the DNS and DHCP configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="ssh root@xcat"',title:'"ssh','root@xcat"':!0},'echo "reconfiguring hosts..."\nmakehosts\necho "reconfiguring dns..."\nmakedns\necho "reconfiguring dhcpd config..."\nmakedhcp -n\necho "reconfiguring dhcpd leases..."\nmakedhcp -a\n')),(0,r.kt)("p",null,"And regenerate the PXE boot configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="ssh root@xcat"',title:'"ssh','root@xcat"':!0},"nodeset <node/noderange> osimage=rocky8.4-x86_64-netboot-compute\n")),(0,r.kt)("p",null,"More details ",(0,r.kt)("a",{parentName:"p",href:"https://xcat-docs.readthedocs.io/en/stable/guides/admin-guides/references/man7/node.7.html"},"here"),"."),(0,r.kt)("h2",{id:"deploy"},"Deploy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="ssh root@xcat"',title:'"ssh','root@xcat"':!0},"rpower cn1 on # or rpower cn1 reset\n")),(0,r.kt)("p",null,"Congratulations, you've deployed a bare-metal server! xCAT is a heavy beast, but a complete bare metal provisioner. We recommend that you familiarize yourself with the software very quickly by reading the ",(0,r.kt)("a",{parentName:"p",href:"https://xcat-docs.readthedocs.io/en/stable/overview/index.html"},"xCAT documentation"),"."),(0,r.kt)("p",null,"The next steps should be to configure your compute nodes and install a job scheduler like Slurm so you can run parallel jobs!"))}d.isMDXComponent=!0}}]);