"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[5968],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4964:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),l=["components"],i={},p="Deploy from Terminal",s={unversionedId:"guides/deploy/deploy-from-terminal",id:"guides/deploy/deploy-from-terminal",isDocsHomePage:!1,title:"Deploy from Terminal",description:"Nocalhost supports to use the following types to install application:",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/deploy/deploy-from-terminal.md",sourceDirName:"guides/deploy",slug:"/guides/deploy/deploy-from-terminal",permalink:"/zh-CN/docs/guides/deploy/deploy-from-terminal",editUrl:"https://github.com/neaped/nh-docs/docs/guides/deploy/deploy-from-terminal.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1628880717,formattedLastUpdatedAt:"8/13/2021",frontMatter:{},sidebar:"docs",previous:{title:"Deploy from Helm",permalink:"/zh-CN/docs/guides/deploy/deploy-from-helm"},next:{title:"Deploy Demo Application",permalink:"/zh-CN/docs/guides/deploy/deploy-demo"}},c=[{value:"Deploy by Minifest Yaml",id:"deploy-by-minifest-yaml",children:[]},{value:"Deploy by Helm",id:"deploy-by-helm",children:[{value:"Deploy from Remote Repo",id:"deploy-from-remote-repo",children:[]},{value:"Use Owned Helm Repo",id:"use-owned-helm-repo",children:[]}]},{value:"Deploy by Kustomize",id:"deploy-by-kustomize",children:[]}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-from-terminal"},"Deploy from Terminal"),(0,r.kt)("p",null,"Nocalhost supports to use the following types to install application:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Manifest"),(0,r.kt)("li",{parentName:"ul"},"Helm"),(0,r.kt)("li",{parentName:"ul"},"Kustomize")),(0,r.kt)("p",null,"You can select the deployment method of matching type to deploy your application in Kubernetes in your terminal by using ",(0,r.kt)("inlineCode",{parentName:"p"},"nhctl"),"."),(0,r.kt)("h2",{id:"deploy-by-minifest-yaml"},"Deploy by Minifest Yaml"),(0,r.kt)("p",null,"For example, you have a git repo with address ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<Repo URL>/foo/bar/hellowrold.git"),", it has many Kubernetes manifest yaml files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"README.MD\nsomething.java\n\u2026\nfoo/bar/k8s/manifests/\n                 foo.yaml\n                 pre-install-cm.yaml\n                \u2026\n                 what/ever/\n                               inner.yaml\n                               \u2026\n                support/all/dir/inside/\n                                            bar.yaml\n                                            \u2026\n")),(0,r.kt)("p",null,"You only want to apply the files in the relative root directory ",(0,r.kt)("inlineCode",{parentName:"p"},"what/ever/")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"support/all/dir/inside/"),", then use the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5,6}","{5,6}":!0},"nhctl install applicationNameFooBar \\\n  -u https://[gihub, Gitlab, etc... whateverRepo]/foo/bar/hellowrold.git \\\n  -t manifest \\\n  -n k8sFooNamespace \\\n  --resource-path what/ever/ \\\n  --resource-path support/all/dir/inside/ \\\n  --kubeconfig ~/.kube/barconfig\n")),(0,r.kt)("p",null,"If you want to apply all files, you can use the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5}","{5}":!0},"nhctl install applicationNameFooBar \\\n  -u https://[gihub, Gitlab, etc... whateverRepo]/foo/bar/hellowrold.git \\\n  -t manifest \\\n  -n k8sFooNamespace \\\n  --resource-path. \\\n  --kubeconfig ~/.kube/barconfig\n")),(0,r.kt)("h2",{id:"deploy-by-helm"},"Deploy by Helm"),(0,r.kt)("p",null,"You can using existing ",(0,r.kt)("inlineCode",{parentName:"p"},"Helm Chart")," to deploy application."),(0,r.kt)("h3",{id:"deploy-from-remote-repo"},"Deploy from Remote Repo"),(0,r.kt)("p",null,"If you have a Helm application that store in the remote repo and have access privilege, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{7}","{7}":!0},"https://[gihub, Gitlab, etc... whateverRepo]/foo/bar/hellowrold.git\n\nSomefile.py\nAClass.java\nREADME.MD\n...\nmychart/example/\n   Chart.yaml\n   values.yaml\n   charts/\n   templates/\n   ...\n")),(0,r.kt)("p",null,"For this repo, we placed under ",(0,r.kt)("inlineCode",{parentName:"p"},"mychart/example/")," directory that relative to the ",(0,r.kt)("inlineCode",{parentName:"p"},"root directory"),", then we can execute the following command to deploy the application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nhctl install helloworld \\\n   -u https://[gihub, Gitlab, etc... whateverRepo]/foo/bar/hellowrold.git \\\n   -t helmGit \\\n   -n k8sFooNamespace \\\n   --resource-path charts/example \\\n   --kubeconfig ~/.kube/barconfig\n")),(0,r.kt)("h3",{id:"use-owned-helm-repo"},"Use Owned Helm Repo"),(0,r.kt)("p",null,"If you have own Helm repo, you can use the following ",(0,r.kt)("inlineCode",{parentName:"p"},"nhctl")," command to deploy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nhctl install helloworld \\\n   --helm-chart-name mychart \\\n   --helm-repo-url http://mychart/charts/ \\\n   -n fooNamespace \\\n   --kubeconfig ~/.kube/barconfig\n")),(0,r.kt)("h2",{id:"deploy-by-kustomize"},"Deploy by Kustomize"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Coming Soon")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We will update the docs soon."))))}u.isMDXComponent=!0}}]);