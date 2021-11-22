"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[6932],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(t),u=o,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12512:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=t(74034),o=t(79973),r=(t(67294),t(3905)),i=["components"],c={title:"Spec"},l=void 0,s={unversionedId:"config/config-spec-en",id:"config/config-spec-en",isDocsHomePage:!1,title:"Spec",description:"Overview / Spec",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/config/config-spec-en.md",sourceDirName:"config",slug:"/config/config-spec-en",permalink:"/zh-CN/docs/config/config-spec-en",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",tags:[],version:"current",frontMatter:{title:"Spec"},sidebar:"docs",previous:{title:"What is Nocalhost Config?",permalink:"/zh-CN/docs/config/config-overview-en"},next:{title:"Dev Container configuration",permalink:"/zh-CN/docs/config/config-dev-container-en"}},p=[{value:"\u5f00\u53d1\u5bb9\u5668\u914d\u7f6e",id:"\u5f00\u53d1\u5bb9\u5668\u914d\u7f6e",children:[]},{value:"\u589e\u5f3a\u914d\u7f6e",id:"\u589e\u5f3a\u914d\u7f6e",children:[]},{value:"\u4e00\u952e\u8fd0\u884c\u7684 Run/Debug \u548c HotReload",id:"\u4e00\u952e\u8fd0\u884c\u7684-rundebug-\u548c-hotreload",children:[]}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/config/config-en"},"Overview")," / ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/config/config-spec-en"},"Spec")),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"nocalhost-\u63d0\u4f9b\u4e86\u54ea\u4e9b\u914d\u7f6e\uff1f"},"Nocalhost \u63d0\u4f9b\u4e86\u54ea\u4e9b\u914d\u7f6e\uff1f"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"PRE-REQUIRE")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5728\u5f00\u59cb\u672c\u8282\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u60a8\u5df2\u7ecf\u77e5\u9053\u5982\u4f55\u914d\u7f6eNocalhost\u3002 If not, please read ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/config/config-overview-en"},"Nocalhost Overview")," first."))),(0,r.kt)("p",null,"Nocalhost \u7684\u914d\u7f6e\u53ef\u5f52\u4e3a\u4e09\u7c7b\u3002"),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u5f00\u53d1\u5bb9\u5668\u914d\u7f6e"},(0,r.kt)("a",{parentName:"h2",href:"/zh-CN/docs/config/config-dev-container"},"\u5f00\u53d1\u5bb9\u5668\u914d\u7f6e")),(0,r.kt)("p",null,"\u7b2c\u4e00\u90e8\u5206\u662f\u5f00\u53d1\u5bb9\u5668\u914d\u7f6e\uff0c\u5305\u62ec\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," ","\xa0"," \u2022 ")," The development image"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," ","\xa0"," \u2022 ")," The remote directory for file synchronization"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," ","\xa0"," \u2022 ")," The default shell of development container"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," ","\xa0"," \u2022 ")," The persistence of development container (Volume)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," ","\xa0"," \u2022 ")," Requests and limits of development container resources"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," ","\xa0"," \u2022 ")," Sidecar image customization"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Quickview")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'name: nocalhost-api\nserviceType: deployment\ncontainers:\n  - name: nocalhost-api\n    dev:\n\n      image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh\n      workDir: /home/nocalhost-dev\n      sidecarImage: nocalhost-docker.pkg.coding.net/nocalhost/public/nocalhost-sidecar:sshversion\n      shell: /bin/zsh\n      persistentVolumeDirs:\n        - path: /the/path/you/want/to/persistent/in/container\n          capacity: 10Gi\n        - path: /other\n          capacity: 10Gi\n      storageClass: cbs\n      resources:\n        limits:\n          memory: 4Gi\n          cpu: "1"\n        requests:\n          memory: 2Gi\n          cpu: "0.5"\n')))),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u589e\u5f3a\u914d\u7f6e"},(0,r.kt)("a",{parentName:"h2",href:"/zh-CN/docs/config/config-enhance"},"\u589e\u5f3a\u914d\u7f6e")),(0,r.kt)("p",null,"The second part is enhance configuration, which is independent of the development container, including:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," ","\xa0"," \u2022 ")," The source code directory for git"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," ","\xa0"," \u2022 ")," Whether to automatically turn on the port forwarding after entering ",(0,r.kt)("inlineCode",{parentName:"p"},"DevMode")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," ","\xa0"," \u2022 ")," File synchronization configuration, including the synchronizing pattern and the ignoring pattern"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Quickview")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'name: nocalhost-api\nserviceType: deployment\ncontainers:\n  - name: nocalhost-api\n    dev:\n\n      gitUrl: git@github.com:nocalhost/nocalhost.git\n      portForward:\n        - 8080:80\n        - 3306:3306\n      sync:\n        type: send\n        mode: pattern\n        filePattern:\n          - .\n        ignoreFilePattern:\n          - ".git"\n          - ".github"\n          - ".vscode"\n          - "node_modules"\n')))),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u4e00\u952e\u8fd0\u884c\u7684-rundebug-\u548c-hotreload"},(0,r.kt)("a",{parentName:"h2",href:"/zh-CN/docs/config/config-develop"},"\u4e00\u952e\u8fd0\u884c\u7684 Run/Debug \u548c HotReload")),(0,r.kt)("p",null,"The third part is the configuration for development process, including:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," ","\xa0"," \u2022 ")," One-click running"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," ","\xa0"," \u2022 ")," One-click debugging"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," ","\xa0"," \u2022 ")," HotReload"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Quickview")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'name: example\nserviceType: deployment\ncontainers:\n  - name: you-container\n    dev:\n\n      command:\n        run: [ "./gradlew", "bootRun" ]\n        debug: [ "./gradlew", "bootRun", "--debug-jvm" ]\n      debug:\n        remoteDebugPort: 5005\n      hotReload: true\n')))))}m.isMDXComponent=!0}}]);