"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[4879],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return u}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=a.createContext({}),c=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(m.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=c(t),u=o,v=p["".concat(m,".").concat(u)]||p[u]||s[u]||i;return t?a.createElement(v,r(r({ref:n},l),{},{components:t})):a.createElement(v,r({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=p;var d={};for(var m in n)hasOwnProperty.call(n,m)&&(d[m]=n[m]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9014:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var a=t(2122),o=t(9756),i=(t(7294),t(3905)),r=["components"],d={title:"command"},m="Configure Commands in DevMode",c={unversionedId:"config/config-dev-command",id:"config/config-dev-command",isDocsHomePage:!1,title:"command",description:"You can preset the commands to be automatically run in DevContainer corresponding to different working modes. After entering the DevMode and specific working mode, Nocalhost will automatically trigger the preset command.",source:"@site/docs/config/config-dev-command.md",sourceDirName:"config",slug:"/config/config-dev-command",permalink:"/docs/config/config-dev-command",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/config/config-dev-command.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629802032,formattedLastUpdatedAt:"8/24/2021",frontMatter:{title:"command"},sidebar:"docs",previous:{title:"workloads",permalink:"/docs/config/config-dev-workload"},next:{title:"sync",permalink:"/docs/config/config-dev-sync"}},l=[{value:"<code>dev[*].command[*].build</code>",id:"devcommandbuild",children:[]},{value:"<code>dev[*].command[*].run</code>",id:"devcommandrun",children:[]},{value:"<code>dev[*].command[*].debug</code>",id:"devcommanddebug",children:[]},{value:"<code>dev[*].command[*].hotReloadRun</code>",id:"devcommandhotreloadrun",children:[]},{value:"<code>dev[*].command[*].hotReloadDebug</code>",id:"devcommandhotreloaddebug",children:[]}],s={toc:l};function p(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-commands-in-devmode"},"Configure Commands in DevMode"),(0,i.kt)("p",null,"You can preset the commands to be automatically run in ",(0,i.kt)("inlineCode",{parentName:"p"},"DevContainer")," corresponding to different working modes. After entering the ",(0,i.kt)("inlineCode",{parentName:"p"},"DevMode")," and specific working mode, Nocalhost will automatically trigger the preset command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'\ncontainers:\n  - name: container-01\n    dev:\n      ...\n      command:\n        build: [""]               # string  | optional  | Build command of the workload\n        run:  [""]                # string  | optional  | Run command of the workload\n        debug:  [""]              # string  | optional  | Debug command of the workload\n        hotReloadRun: [""]        # string  | optional  | Hot-reload run command of the workload\n        hotReloadDebug: [""]      # string  | optional  | Hot-reload debug command of the workload\n\n      ...\n')),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Working Mode")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"These working modes currently only correspond to the specified features in IDE plugin."))),(0,i.kt)("h2",{id:"devcommandbuild"},(0,i.kt)("inlineCode",{parentName:"h2"},"dev[*].command[*].build")),(0,i.kt)("p",null,"When building in ",(0,i.kt)("inlineCode",{parentName:"p"},"DevContainer"),", it will run specified commands automatically."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'\ncontainers:\n    - name: container-01\n      dev:\n        ...\n        command:\n            build: ["./gradlew", "package"]\n\n')),(0,i.kt)("h2",{id:"devcommandrun"},(0,i.kt)("inlineCode",{parentName:"h2"},"dev[*].command[*].run")),(0,i.kt)("p",null,"When running the workload in ",(0,i.kt)("inlineCode",{parentName:"p"},"DevContainer"),", it will run specified commands automatically."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'\ncontainers:\n    - name: container-01\n      dev:\n        ...\n        command:\n            run: ["./gradlew", "bootRun"]\n\n')),(0,i.kt)("h2",{id:"devcommanddebug"},(0,i.kt)("inlineCode",{parentName:"h2"},"dev[*].command[*].debug")),(0,i.kt)("p",null,"When doing remote debugging, ",(0,i.kt)("inlineCode",{parentName:"p"},"DevContainer")," will run specified commands automatically."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'\ncontainers:\n    - name: container-01\n      dev:\n        ...\n        command:\n            debug: ["./gradlew", "bootRun", "--debug-jvm"]\n\n')),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Debugging")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When debugging, Nocalhost will overwrite the startup command of ",(0,i.kt)("inlineCode",{parentName:"p"},"DevContainer")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"/bin/sh -c tail -f /dev/null")," to ensure that ",(0,i.kt)("inlineCode",{parentName:"p"},"DevContainer")," will not exit unexpectedly."))),(0,i.kt)("h2",{id:"devcommandhotreloadrun"},(0,i.kt)("inlineCode",{parentName:"h2"},"dev[*].command[*].hotReloadRun")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"coming soon")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This feature is currently not implemented."))),(0,i.kt)("h2",{id:"devcommandhotreloaddebug"},(0,i.kt)("inlineCode",{parentName:"h2"},"dev[*].command[*].hotReloadDebug")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"coming soon")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This feature is currently not implemented."))))}p.isMDXComponent=!0}}]);