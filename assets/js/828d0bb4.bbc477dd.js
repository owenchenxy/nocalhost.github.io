"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[4384],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),h=o,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||a;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7806:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],l={title:"Develop KubeSphere with Nocalhost",id:"kubesphere"},p=void 0,s={unversionedId:"practice/kubesphere",id:"practice/kubesphere",isDocsHomePage:!1,title:"Develop KubeSphere with Nocalhost",description:"1. Preparation",source:"@site/docs/practice/kubesphere.md",sourceDirName:"practice",slug:"/practice/kubesphere",permalink:"/docs/practice/kubesphere",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/practice/kubesphere.md",tags:[],version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1631093254,formattedLastUpdatedAt:"9/8/2021",frontMatter:{title:"Develop KubeSphere with Nocalhost",id:"kubesphere"}},c=[{value:"1. Preparation",id:"1-preparation",children:[]},{value:"2. Installation",id:"2-installation",children:[]},{value:"3. Development",id:"3-development",children:[]}],u={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-preparation"},"1. Preparation"),(0,a.kt)("p",null,"Since KubeSphere must deploy on the specific Kubernetes namespaces, a standalone Kubernetes cluster is required. You can KubeSphere on a private cluster, like Docker Desktop, minikube, and so on. Kubernetes cluster hosting on public cloud platform (GKE, AWS EKS, AKS ...) would be fine as well."),(0,a.kt)("h3",{id:"2-installation"},"2. Installation"),(0,a.kt)("p",null,"Run the following commands on a Kubernetes cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f https://github.com/kubesphere/ks-installer/releases/download/v3.1.1/kubesphere-installer.yaml\nkubectl apply -f https://github.com/kubesphere/ks-installer/releases/download/v3.1.1/cluster-configuration.yaml\n")),(0,a.kt)("p",null,"After installation, access ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:30880")," with browser, and you will see KubeSphere Dashboard. Log in with ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," as username, and ",(0,a.kt)("inlineCode",{parentName:"p"},"P@88w0rd")," as password."),(0,a.kt)("h3",{id:"3-development"},"3. Development"),(0,a.kt)("p",null,"There are several services deployed in namespace ",(0,a.kt)("inlineCode",{parentName:"p"},"kubesphere-system"),". I will take service ",(0,a.kt)("inlineCode",{parentName:"p"},"ks-apiserver")," as an example to demonstrate how to develop KubeSphere service with Nocalhost."),(0,a.kt)("p",null,"First of all, install Goland with Nocalhost plugin. Then, add Kubernetes cluster with KubeSphere installed by Nocalhost plugin. Next, find deployment ",(0,a.kt)("inlineCode",{parentName:"p"},"ks-apiserver")," from the tree of Nocalhost plugin. Right click it, and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Dev Config")," on menu. Copy and paste the following configure to the file opened just now."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'name: ks-apiserver\nserviceType: deployment\ncontainers:\n  - name: ks-apiserver\n    dev:\n        gitUrl: https://github.com/kubesphere/kubesphere.git\n        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/golang:1.16\n        shell: ""\n        workDir: /home/nocalhost-dev\n        storageClass: ""\n        resources: null\n        persistentVolumeDirs: []\n        command:\n            build: []\n            run:\n              - go\n              - run\n              - /home/nocalhost-dev/cmd/ks-apiserver/apiserver.go\n            debug:\n              - dlv\n              - --headless\n              - --log\n              - --listen\n              - :2345\n              - --api-version\n              - "2"\n              - --accept-multiclient\n              - debug\n              - /home/nocalhost-dev/cmd/ks-apiserver/apiserver.go\n            hotReloadRun: []\n            hotReloadDebug: []\n        debug:\n            remoteDebugPort: 2345\n        useDevContainer: false\n        sync: null\n        env: []\n        envFrom: null\n        portForward: []\n')),(0,a.kt)("p",null,"For more details about the configure file, see ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/config/config-ref"},"Config Reference"),"."),(0,a.kt)("p",null,"Save the file. Finally, right click deployment ",(0,a.kt)("inlineCode",{parentName:"p"},"ks-apiserver")," and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Start DevMode")," on menu."),(0,a.kt)("p",null,"After DevMode started, you can just start run or debug by clicking Run/Debug on Goland project."),(0,a.kt)("p",null,"Enjoy your development of KubeSphere services."))}d.isMDXComponent=!0}}]);