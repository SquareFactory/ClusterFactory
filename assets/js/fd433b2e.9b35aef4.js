"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[9997],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),g=o,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||n;return r?a.createElement(d,l(l({ref:t},p),{},{components:r})):a.createElement(d,l({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<n;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4347:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=r(665),o=(r(9496),r(9613));const n={},l="2. Setting up your repository for GitOps",i={unversionedId:"getting-started/setting-up-repository",id:"getting-started/setting-up-repository",title:"2. Setting up your repository for GitOps",description:"To enable GitOps and be able to follow the updates of the ClusterFactory repository, you should fork the ClusterFactory repository or create a private copy, so you could use Argo CD on your own repository.",source:"@site/docs/getting-started/02-setting-up-repository.md",sourceDirName:"getting-started",slug:"/getting-started/setting-up-repository",permalink:"/docs/getting-started/setting-up-repository",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory/tree/main/web/docs/getting-started/02-setting-up-repository.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"1. Requirements and recommendations",permalink:"/docs/getting-started/requirements-recommendations"},next:{title:"3. K0s Configuration",permalink:"/docs/getting-started/k0s-configuration"}},s={},c=[{value:"1. Fork the repository",id:"1-fork-the-repository",level:2},{value:"Method 1: Create a public fork",id:"method-1-create-a-public-fork",level:3},{value:"Method 2: Create a private fork",id:"method-2-create-a-private-fork",level:3},{value:"2. Setup the upstream remote for git",id:"2-setup-the-upstream-remote-for-git",level:2},{value:"3. Checkout to a stable version and create a new branch",id:"3-checkout-to-a-stable-version-and-create-a-new-branch",level:2},{value:"4. Rename the examples and commit",id:"4-rename-the-examples-and-commit",level:2},{value:"5. Use <code>git fetch</code> and <code>git merge</code> to merge the upstream main into the local branch",id:"5-use-git-fetch-and-git-merge-to-merge-the-upstream-main-into-the-local-branch",level:2},{value:"Why fork and use GitOps ?",id:"why-fork-and-use-gitops-",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2-setting-up-your-repository-for-gitops"},"2. Setting up your repository for GitOps"),(0,o.kt)("p",null,"To enable GitOps and be able to follow the updates of the ClusterFactory repository, you should ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo"},"fork")," the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/ClusterFactory"},"ClusterFactory repository")," or create a private copy, so you could use Argo CD on your own repository."),(0,o.kt)("h2",{id:"1-fork-the-repository"},"1. Fork the repository"),(0,o.kt)("h3",{id:"method-1-create-a-public-fork"},"Method 1: Create a public fork"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Use the "Fork" button on Github and create the fork on your favorite account.')),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Fork button",src:r(405).Z,width:"1724",height:"240"}))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After setting up the fork, ",(0,o.kt)("inlineCode",{parentName:"p"},"git clone")," the fork. Example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/"',title:'"user@local:/"'},"# SSH\ngit clone git@github.com:<your account>/ClusterFactory.git\n")))),(0,o.kt)("h3",{id:"method-2-create-a-private-fork"},"Method 2: Create a private fork"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a bare clone of the repository."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/"',title:'"user@local:/"'},"git clone --bare https://github.com/SquareFactory/ClusterFactory.git\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository"},"a new private repository on your favorite Git hosting website")," and name it ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterFactory"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Mirror-push your bare clone to your new ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterFactory")," repository."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/"',title:'"user@local:/"'},"cd ClusterFactory.git\n# SSH\ngit push --mirror git@github.com:<your account>/ClusterFactory.git\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Remove the bare clone."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory.git"',title:'"user@local:/ClusterFactory.git"'},"cd ..\nrm -rf ./ClusterFactory.git\n\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can now clone your ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterFactory")," repository on your machine."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/"',title:'"user@local:/"'},"# SSH\ngit clone git@github.com:<your account>/ClusterFactory.git\n")))),(0,o.kt)("h2",{id:"2-setup-the-upstream-remote-for-git"},"2. Setup the upstream remote for git"),(0,o.kt)("p",null,"Git is capable of managing multiple remote repositories. By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"origin")," is linked to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<your account>/ClusterFactory")," repository. To be able to fetch updates from the upstream ",(0,o.kt)("inlineCode",{parentName:"p"},"SquareFactory/ClusterFactory")," repository, we need to add a remote repository that we call ",(0,o.kt)("inlineCode",{parentName:"p"},"upstream"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the upstream and disable push on the remote ",(0,o.kt)("inlineCode",{parentName:"p"},"upstream"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"git remote add upstream https://github.com/SquareFactory/ClusterFactory.git\ngit remote set-url --push upstream DISABLE\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can list all your remotes with ",(0,o.kt)("inlineCode",{parentName:"p"},"git remote -v"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"git remote -v\n# origin    git@github.com:<your account>/ClusterFactory.git (fetch)\n# origin    git@github.com:<your account>/ClusterFactory.git (push)\n# upstream  https://github.com/SquareFactory/ClusterFactory.git (fetch)\n# upstream  DISABLE (push)\n")))),(0,o.kt)("h2",{id:"3-checkout-to-a-stable-version-and-create-a-new-branch"},"3. Checkout to a stable version and create a new branch"),(0,o.kt)("p",null,"You can checkout to a stable version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"git checkout -b v0.7.0 configs\n# You can delete the local main branch\ngit branch -D main\n")),(0,o.kt)("h2",{id:"4-rename-the-examples-and-commit"},"4. Rename the examples and commit"),(0,o.kt)("p",null,"Copy ",(0,o.kt)("inlineCode",{parentName:"p"},"argo.example"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"core.example"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"cfctl.yaml.example"),", and remove the ",(0,o.kt)("inlineCode",{parentName:"p"},".example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"cp -R argo.example/ argo/\ncp -R core.example/ core/\ncp cfctl.yaml.example cfctl.yaml\n")),(0,o.kt)("p",null,"You can track these files on Git:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},'git add .\ngit commit -m "Initialized my config"\ngit push -u origin configs\n# You can also delete the remote main branch\n')),(0,o.kt)("h2",{id:"5-use-git-fetch-and-git-merge-to-merge-the-upstream-main-into-the-local-branch"},"5. Use ",(0,o.kt)("inlineCode",{parentName:"h2"},"git fetch")," and ",(0,o.kt)("inlineCode",{parentName:"h2"},"git merge")," to merge the upstream main into the local branch"),(0,o.kt)("p",null,"Because ClusterFactory will be updated regularly, you can fetch the updates with git fetch:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"git fetch --tags upstream\n")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"git-fetch",src:r(5216).Z,width:"1046",height:"358"}))),(0,o.kt)("p",null,"To merge the upstream changes, either rebase or create a merge commit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"git merge v0.8.0\n")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"git-merge",src:r(7684).Z,width:"1234",height:"417"}))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"git push\n")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"git-push",src:r(1116).Z,width:"1212",height:"406"}))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"If you wish to follow the upstream main branch:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="user@local:/ClusterFactory"',title:'"user@local:/ClusterFactory"'},"git merge upstream/main\ngit push\n")),(0,o.kt)("h2",{id:"why-fork-and-use-gitops-"},"Why fork and use GitOps ?"),(0,o.kt)("p",null,"Now that you have a fork, you can push your own changes into your repository. For example, if you want to deploy your applications, you should write your manifests and commit these files to your repository, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"./\n\u251c\u2500\u2500 argo/\n\u251c\u2500\u2500 bin/\n\u251c\u2500\u2500 core/\n\u251c\u2500\u2500 helm/\n\u2502   \u251c\u2500\u2500 csi-driver-cvmfs/\n\u2502   \u251c\u2500\u2500 cvmfs-server/\n\u2502   \u251c\u2500\u2500 cvmfs-service/\n\u2502   \u251c\u2500\u2500 ipmi-exporter/\n\u2502   \u251c\u2500\u2500 openldap/\n\u2502   \u251c\u2500\u2500 slurm-cluster/\n\u2502   \u2514\u2500\u2500 xcat/\n\u251c\u2500\u2500 manifests/                <-----\n\u2502   \u2514\u2500\u2500 my-application/       <-----\n\u2502       \u2514\u2500\u2500 statefulset.yaml  <-----\n\u2514\u2500\u2500 ...\n")),(0,o.kt)("p",null,"Since ClusterFactory uses Argo CD, it is able to retrieve your repository from your Git hosting server, synchronize changes and deploy your Kubernetes manifests."),(0,o.kt)("p",null,"For now, let's just deploy K0s!"))}u.isMDXComponent=!0},405:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/fork_button-0eaa0bb958f213c929f690b73fa13c2e.png"},5216:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/image-20220624193812004-950c566d63078e19f0c95f8e387e6609.png"},7684:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/image-20220624194957531-dd9e755a4799530a9c7ac66eac7b636c.png"},1116:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/image-20220624195047988-d41b28d875b7257a18fdf37cf28359ea.png"}}]);