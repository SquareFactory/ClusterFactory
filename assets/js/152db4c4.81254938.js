"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[6652],{317:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"getting-started/adding-repository-argocd","title":"5. Adding the Git repository to ArgoCD","description":"Argo CD can retrieve your repository from your Git hosting server, synchronize changes and deploy your Kubernetes manifests.","source":"@site/docs/getting-started/05-adding-repository-argocd.md","sourceDirName":"getting-started","slug":"/getting-started/adding-repository-argocd","permalink":"/docs/getting-started/adding-repository-argocd","draft":false,"unlisted":false,"editUrl":"https://github.com/deepsquare-io/ClusterFactory/tree/main/web/docs/getting-started/05-adding-repository-argocd.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"docs","previous":{"title":"4. Core Apps Deployment","permalink":"/docs/getting-started/core-apps-deployment"},"next":{"title":"6. Grendel Deployment","permalink":"/docs/getting-started/grendel-deployment"}}');var o=r(6070),s=r(4306);const i={},a="5. Adding the Git repository to ArgoCD",c={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"5-adding-the-git-repository-to-argocd",children:"5. Adding the Git repository to ArgoCD"})}),"\n",(0,o.jsx)(t.p,{children:"Argo CD can retrieve your repository from your Git hosting server, synchronize changes and deploy your Kubernetes manifests."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Create a local secret containing ",(0,o.jsx)(t.a,{href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys#set-up-deploy-keys",children:"an SSH deploy key"})," and the git URL:"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",metastring:'title="argo/default/secrets/my-repository-secret.yaml.local"',children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: my-repository-secret\n  namespace: argocd\n  labels:\n    argocd.argoproj.io/secret-type: repository\ntype: Opaque\nstringData:\n  sshPrivateKey: |\n    -----BEGIN RSA PRIVATE KEY-----\n    -----END RSA PRIVATE KEY-----\n  type: git\n  url: git@github.com:<your account>/<your repo>.git\n"})}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsx)(t.li,{children:"Seal it and apply it:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"cfctl kubeseal\nkubectl apply -f argo/default/secrets/my-repository-sealed-secret.yaml\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},4306:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var n=r(758);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);