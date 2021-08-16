"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[9722],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=c(n),p=o,m=s["".concat(d,".").concat(p)]||s[p]||g[p]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(2263),o=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,u=void 0!==a&&a,d=i.absolute,c=void 0!==d&&d;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+l:l}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8012:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return g},default:function(){return p}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=n(4996),u=["components"],d={title:"Debugging Python"},c="Remote Debugging of Python Workload",l={unversionedId:"guides/debug/python",id:"guides/debug/python",isDocsHomePage:!1,title:"Debugging Python",description:"Gold :  Use Nocalhost to debugging Python application",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/debug/python.md",sourceDirName:"guides/debug",slug:"/guides/debug/python",permalink:"/zh-CN/docs/guides/debug/python",editUrl:"https://github.com/neaped/nh-docs/docs/guides/debug/python.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1628880717,formattedLastUpdatedAt:"8/13/2021",frontMatter:{title:"Debugging Python"},sidebar:"docs",previous:{title:"Debugging Go",permalink:"/zh-CN/docs/guides/debug/go"},next:{title:"Clear PVC",permalink:"/zh-CN/docs/guides/clear-pvc"}},g=[{value:"1. Config Remote Debug Command and Port",id:"1-config-remote-debug-command-and-port",children:[]},{value:"2. Enter Development Mode",id:"2-enter-development-mode",children:[]},{value:"3. Add Configuration",id:"3-add-configuration",children:[]},{value:"4. Set Break Point and Debug",id:"4-set-break-point-and-debug",children:[]},{value:"How it Works?",id:"how-it-works",children:[]}],s={toc:g};function p(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"remote-debugging-of-python-workload"},"Remote Debugging of Python Workload"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"About this guide")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Gold :"),"  Use Nocalhost to debugging Python application ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Estimate time :")," 3 minutes",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Requirements :")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"PyCharm installed"),(0,i.kt)("li",{parentName:"ul"},"Nocalhost IDE plugin installed")))),(0,i.kt)("h2",{id:"1-config-remote-debug-command-and-port"},"1. Config Remote Debug Command and Port"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open PyCharm and Nocalhost plugin"),(0,i.kt)("li",{parentName:"ol"},"Select the workload you want to debug, right click and select ",(0,i.kt)("inlineCode",{parentName:"li"},"Config")),(0,i.kt)("li",{parentName:"ol"},"Configure the remote debug command and port")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{5-8}","{5-8}":!0},"service:\n  containers:\n    dev:\n    command:\n      debug:\n       - ./debug.sh\n    debug:\n      remoteDebugPort: 9004\n...\n")),(0,i.kt)("h2",{id:"2-enter-development-mode"},"2. Enter Development Mode"),(0,i.kt)("p",null,"Start the development mode"),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,a.Z)("/img/debug/python-devmode.gif")}),(0,i.kt)("figcaption",null,"Enter development mode")),(0,i.kt)("h2",{id:"3-add-configuration"},"3. Add Configuration"),(0,i.kt)("p",null,"Add Nocalhost debug configuration, enter the same port number with your ",(0,i.kt)("inlineCode",{parentName:"p"},"remoteDebugPort")," above."),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,a.Z)("/img/debug/python-add-config.gif")}),(0,i.kt)("figcaption",null,"Add debug configuration")),(0,i.kt)("h2",{id:"4-set-break-point-and-debug"},"4. Set Break Point and Debug"),(0,i.kt)("p",null,"Set the break point and start debugging "),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,a.Z)("/img/debug/python-break-debug.gif")}),(0,i.kt)("figcaption",null,"Add break point and start debugging")),(0,i.kt)("h2",{id:"how-it-works"},"How it Works?"),(0,i.kt)("p",null,"Nocalhost using pydevd to debug Python application."),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,a.Z)("/img/debug/python-debug.jpg")}),(0,i.kt)("figcaption",null,"Principle of Remote Python Debugging")))}p.isMDXComponent=!0}}]);