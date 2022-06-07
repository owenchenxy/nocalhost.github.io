"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[8334],{3905:function(t,n,e){e.d(n,{Zo:function(){return s},kt:function(){return h}});var a=e(67294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function r(t,n){if(null==t)return{};var e,a,o=function(t,n){if(null==t)return{};var e,a,o={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var p=a.createContext({}),c=function(t){var n=a.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},s=function(t){var n=c(t.components);return a.createElement(p.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(t,n){var e=t.components,o=t.mdxType,l=t.originalType,p=t.parentName,s=r(t,["components","mdxType","originalType","parentName"]),d=c(e),h=o,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||l;return e?a.createElement(m,i(i({ref:n},s),{},{components:e})):a.createElement(m,i({ref:n},s))}));function h(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var l=e.length,i=new Array(l);i[0]=d;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=t,r.mdxType="string"==typeof t?t:o,i[1]=r;for(var c=2;c<l;c++)i[c]=e[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}d.displayName="MDXCreateElement"},13919:function(t,n,e){function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!a(t)}e.d(n,{b:function(){return a},Z:function(){return o}})},44996:function(t,n,e){e.d(n,{C:function(){return l},Z:function(){return i}});var a=e(52263),o=e(13919);function l(){var t=(0,a.Z)().siteConfig,n=(t=void 0===t?{}:t).baseUrl,e=void 0===n?"/":n,l=t.url;return{withBaseUrl:function(t,n){return function(t,n,e,a){var l=void 0===a?{}:a,i=l.forcePrependBaseUrl,r=void 0!==i&&i,p=l.absolute,c=void 0!==p&&p;if(!e)return e;if(e.startsWith("#"))return e;if((0,o.b)(e))return e;if(r)return n+e;var s=e.startsWith(n)?e:n+e.replace(/^\//,"");return c?t+s:s}(l,e,t,n)}}}function i(t,n){return void 0===n&&(n={}),(0,l().withBaseUrl)(t,n)}},83234:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return r},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=e(22122),o=e(19756),l=(e(67294),e(3905)),i=(e(44996),["components"]),r={title:"\u4f7f\u7528 Nocalhost \u5f00\u53d1 Rainbond \u4e0a\u7684\u5fae\u670d\u52a1\u5e94\u7528",author:"Qi Zhang",author_title:"Cloud Native Enthusiasts",author_url:"https://github.com/zzzhangqi",author_image_url:"https://avatars.githubusercontent.com/u/39754275",tags:["Rainbond"]},p={permalink:"/blog/rainbond-dev",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/blog/rainbond-dev.md",source:"@site/blog/rainbond-dev.md",title:"\u4f7f\u7528 Nocalhost \u5f00\u53d1 Rainbond \u4e0a\u7684\u5fae\u670d\u52a1\u5e94\u7528",description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Nocalhost \u5feb\u901f\u5f00\u53d1 Rainbond \u4e0a\u7684\u5fae\u670d\u52a1\u5e94\u7528\u7684\u5f00\u53d1\u6d41\u7a0b\u4ee5\u53ca\u5b9e\u8df5\u64cd\u4f5c\u6b65\u9aa4\u3002",date:"2022-06-07T08:08:14.150Z",formattedDate:"June 7, 2022",tags:[{label:"Rainbond",permalink:"/blog/tags/rainbond"}],readingTime:1.975,truncated:!1,prevItem:{title:"\u66f4\u7f8e\u7684\u5f00\u53d1\u73af\u5883\u53d1\u5c55\u5386\u7a0b\u4e0eNocalhost\u843d\u5730\u5b9e\u8df5",permalink:"/blog/gm-cd"},nextItem:{title:"How to debug microservices in Kubernetes with proxy, sidecar or service mesh?",permalink:"/blog/2021/07/05/jimmy"}},c=[{value:"\u4e00. \u7b80\u4ecb",id:"\u4e00-\u7b80\u4ecb",children:[]},{value:"\u4e8c. \u672c\u5730 + Rainbond \u5f00\u53d1\u5fae\u670d\u52a1",id:"\u4e8c-\u672c\u5730--rainbond-\u5f00\u53d1\u5fae\u670d\u52a1",children:[]},{value:"\u4e09. \u4f7f\u7528 Nocalhost + Rainbond \u5f00\u53d1\u5fae\u670d\u52a1",id:"\u4e09-\u4f7f\u7528-nocalhost--rainbond-\u5f00\u53d1\u5fae\u670d\u52a1",children:[]},{value:"\u56db. \u5b9e\u8df5\u64cd\u4f5c\u6b65\u9aa4",id:"\u56db-\u5b9e\u8df5\u64cd\u4f5c\u6b65\u9aa4",children:[{value:"4.1 \u5b89\u88c5 Nocalhost \u63d2\u4ef6",id:"41-\u5b89\u88c5-nocalhost-\u63d2\u4ef6",children:[]},{value:"4.2 \u5b89\u88c5 Rainbond",id:"42-\u5b89\u88c5-rainbond",children:[]},{value:"4.3 Nocalhost \u5bf9\u63a5 Rainbond \u96c6\u7fa4",id:"43-nocalhost-\u5bf9\u63a5-rainbond-\u96c6\u7fa4",children:[]},{value:"4.4 \u5728 Rainbond \u4e0a\u90e8\u7f72 Spring Cloud \u5e94\u7528",id:"44-\u5728-rainbond-\u4e0a\u90e8\u7f72-spring-cloud-\u5e94\u7528",children:[]},{value:"4.5 \u8fdb\u5165 Nocalhost \u5f00\u53d1\u6a21\u5f0f",id:"45-\u8fdb\u5165-nocalhost-\u5f00\u53d1\u6a21\u5f0f",children:[]}]},{value:"\u5199\u5728\u6700\u540e",id:"\u5199\u5728\u6700\u540e",children:[]}],s={toc:c};function u(t){var n=t.components,e=(0,o.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Nocalhost \u5feb\u901f\u5f00\u53d1 Rainbond \u4e0a\u7684\u5fae\u670d\u52a1\u5e94\u7528\u7684\u5f00\u53d1\u6d41\u7a0b\u4ee5\u53ca\u5b9e\u8df5\u64cd\u4f5c\u6b65\u9aa4\u3002"),(0,l.kt)("p",null,"Nocalhost \u53ef\u4ee5\u76f4\u63a5\u5728 Kubernetes \u4e2d\u5f00\u53d1\u5e94\u7528\uff0cRainbond \u53ef\u4ee5\u5feb\u901f\u90e8\u7f72\u5fae\u670d\u52a1\u9879\u76ee\uff0c\u65e0\u9700\u7f16\u5199Yaml\uff0cNocalhost \u7ed3\u5408 Rainbond \u52a0\u901f\u6211\u4eec\u7684\u5fae\u670d\u52a1\u5f00\u53d1\u6548\u7387\u3002"),(0,l.kt)("h2",{id:"\u4e00-\u7b80\u4ecb"},"\u4e00. \u7b80\u4ecb"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://nocalhost.dev",title:"Nocalhost"},"Nocalhost")," \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u57fa\u4e8e IDE \u7684\u4e91\u539f\u751f\u5e94\u7528\u5f00\u53d1\u5de5\u5177\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u6784\u5efa\u3001\u6d4b\u8bd5\u548c\u8c03\u8bd5\u5e94\u7528\u7a0b\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u6613\u4e8e\u4f7f\u7528\u7684 IDE \u63d2\u4ef6\uff08\u652f\u6301 VS Code \u548c JetBrains\uff09\uff0c\u5373\u4f7f\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u8fdb\u884c\u5f00\u53d1\u548c\u8c03\u8bd5\uff0c\u4f7f\u7528 Nocalhost \u4e4b\u540e\u4e5f\u80fd\u591f\u83b7\u5f97\u548c\u672c\u5730\u5f00\u53d1\u4e00\u6837\u7684\u5f00\u53d1\u4f53\u9a8c"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5373\u65f6\u6587\u4ef6\u540c\u6b65\u8fdb\u884c\u5f00\u53d1\uff1a \u5373\u65f6\u5c06\u60a8\u7684\u4ee3\u7801\u66f4\u6539\u540c\u6b65\u5230\u8fdc\u7aef\u5bb9\u5668\uff0c\u800c\u65e0\u9700\u91cd\u5efa\u955c\u50cf\u6216\u91cd\u65b0\u542f\u52a8\u5bb9\u5668\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://www.rainbond.com/docs",title:"Rainbond"},"Rainbond")," \u662f\u4e00\u6b3e\u4e91\u539f\u751f\u5e94\u7528\u7ba1\u7406\u5e73\u53f0\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7b80\u5355\uff0c\u4e0d\u9700\u8981\u61c2\u5bb9\u5668\u3001Kubernetes\u548c\u5e95\u5c42\u590d\u6742\u6280\u672f\uff0c\u652f\u6301\u7ba1\u7406\u591a\u4e2aKubernetes\u96c6\u7fa4\uff0c\u548c\u7ba1\u7406\u4f01\u4e1a\u5e94\u7528\u5168\u751f\u547d\u5468\u671f\u3002\u4e3b\u8981\u529f\u80fd\u5305\u62ec\u5e94\u7528\u5f00\u53d1\u73af\u5883\u3001\u5e94\u7528\u5e02\u573a\u3001\u5fae\u670d\u52a1\u67b6\u6784\u3001\u5e94\u7528\u4ea4\u4ed8\u3001\u5e94\u7528\u8fd0\u7ef4\u3001\u5e94\u7528\u7ea7\u591a\u4e91\u7ba1\u7406\u7b49\u3002")),(0,l.kt)("h2",{id:"\u4e8c-\u672c\u5730--rainbond-\u5f00\u53d1\u5fae\u670d\u52a1"},"\u4e8c. \u672c\u5730 + Rainbond \u5f00\u53d1\u5fae\u670d\u52a1"),(0,l.kt)("p",null,"\u5728\u4ee5\u5f80\u7684\u5f00\u53d1\u6a21\u5f0f\u4e2d\uff0c\u6211\u4eec\u5728\u672c\u5730 + Rainbond \u5f00\u53d1\u5fae\u670d\u52a1\u65f6\uff0c\u8981\u5f00\u53d1\u7684\u6a21\u5757\u6211\u4eec\u8fd0\u884c\u5728\u672c\u5730\uff0c\u5176\u4ed6\u6a21\u5757\u8fd0\u884c\u5728 Rainbond \u4e0a\uff0c\u6211\u4eec\u901a\u8fc7 Rainbond \u7684\u7f51\u5173\u4e0e\u672c\u5730\u8fdb\u884c\u901a\u4fe1\u3001\u8054\u8c03\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nocalhost/19.png",alt:null})),(0,l.kt)("p",null,"\u8fd9\u79cd\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u6709\u4ee5\u4e0b\u95ee\u9898\u6025\u9700\u89e3\u51b3\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u591a\u4eba\u534f\u4f5c\u5f00\u53d1\u8054\u8c03\u56f0\u96be"),(0,l.kt)("li",{parentName:"ul"},"\u672c\u5730\u73af\u5883\u5dee\u5f02\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u901a\u8fc7\u6ce8\u518c\u4e2d\u5fc3(Nacos)\u8c03\u7528\u5176\u4ed6\u5fae\u670d\u52a1"),(0,l.kt)("li",{parentName:"ul"},"\u8fdc\u7a0bDebug\u8f83\u96be"),(0,l.kt)("li",{parentName:"ul"},"\u53d7\u9650\u4e8e\u672c\u5730\u8d44\u6e90")),(0,l.kt)("h2",{id:"\u4e09-\u4f7f\u7528-nocalhost--rainbond-\u5f00\u53d1\u5fae\u670d\u52a1"},"\u4e09. \u4f7f\u7528 Nocalhost + Rainbond \u5f00\u53d1\u5fae\u670d\u52a1"),(0,l.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u901a\u8fc7 Nocalhost + Rainbond \u5f00\u53d1\u5fae\u670d\u52a1\u65f6\uff0c\u6240\u6709\u670d\u52a1\u90fd\u8fd0\u884c\u5728 Rainbond \u4e0a\uff0c\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u4f7f\u7528 VSCode \u63d2\u4ef6 Nocalhost \u8fde\u63a5\u8fdb\u5165\u5230 Rainbond \u7ec4\u4ef6\u4e2d\uff0c\u5e76\u5c06\u672c\u5730\u4ee3\u7801\u5b9e\u65f6\u540c\u6b65\u5230 Rainbond \u7ec4\u4ef6\u4e2d\u3002\u591a\u4eba\u5f00\u53d1\u8054\u8c03\u65f6\uff0c\u53ef\u901a\u8fc7 Rainbond \u5185\u7f6e\u7684 Service Mesh \u8fdb\u884c\u670d\u52a1\u4e4b\u95f4\u8c03\u7528\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nocalhost/18.png",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528 Nocalhost \u5f00\u53d1\uff0c\u53ef\u4ee5\u89e3\u51b3\u672c\u5730\u5f00\u53d1\u65f6\u9047\u5230\u7684\u95ee\u9898\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u591a\u4eba\u8054\u8c03\u5f00\u53d1\u66f4\u4fbf\u6377"),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u90fd\u8fd0\u884c\u5728 Rainbond \u4e0a\uff0c\u4e0d\u518d\u53d7\u9650\u4e8e\u672c\u5730"),(0,l.kt)("li",{parentName:"ul"},"\u4e0e\u751f\u4ea7\u73af\u5883\u66f4\u63a5\u8fd1"),(0,l.kt)("li",{parentName:"ul"},"\u8fdc\u7a0bDebug"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6ce8\u518c\u4e2d\u5fc3(Nacos)\u8c03\u7528\u5176\u4ed6\u5fae\u670d\u52a1\u7ec4\u4ef6")),(0,l.kt)("h2",{id:"\u56db-\u5b9e\u8df5\u64cd\u4f5c\u6b65\u9aa4"},"\u56db. \u5b9e\u8df5\u64cd\u4f5c\u6b65\u9aa4"),(0,l.kt)("p",null,"Nocalhost \u76ee\u524d\u652f\u6301\u4e24\u79cd\u5f00\u53d1\u6a21\u5f0f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Replace DevMode "),(0,l.kt)("li",{parentName:"ul"},"Duplicate DevMode ")),(0,l.kt)("p",null,"\u672c\u7bc7\u5c06\u4e3b\u8981\u4ecb\u7ecd Replace DevMode\uff0c\u5f53\u8fdb\u5165 Replace DevMode \u65f6\uff0cNocalhost \u4f1a\u5bf9 \u7ec4\u4ef6 \u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c06\u526f\u672c\u6570\u7f29\u51cf\u4e3a 1"),(0,l.kt)("li",{parentName:"ol"},"\u66ff\u6362\u5bb9\u5668\u7684\u955c\u50cf\u4e3a\u5f00\u53d1\u955c\u50cf"),(0,l.kt)("li",{parentName:"ol"},"\u589e\u52a0\u4e00\u4e2a sidecar \u5bb9\u5668\u3002 "),(0,l.kt)("li",{parentName:"ol"},"\u8f6c\u53d1\u4e00\u4e2a\u672c\u5730\u7aef\u53e3\u5230\u6587\u4ef6\u540c\u6b65\u670d\u52a1\u5668\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u542f\u52a8\u672c\u5730\u6587\u4ef6\u540c\u6b65\u5ba2\u6237\u7aef\u3002 "),(0,l.kt)("li",{parentName:"ol"},"\u6253\u5f00\u8fdc\u7a0b\u7ec8\u7aef\u3002")),(0,l.kt)("h3",{id:"41-\u5b89\u88c5-nocalhost-\u63d2\u4ef6"},"4.1 \u5b89\u88c5 Nocalhost \u63d2\u4ef6"),(0,l.kt)("p",null,"Nocalhost IDE \u63d2\u4ef6\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"VSCode")," ",(0,l.kt)("inlineCode",{parentName:"p"},"JetBrains "),"\uff0c\u8fd9\u91cc\u6211\u4eec\u4e3b\u8981\u4ecb\u7ecd ",(0,l.kt)("a",{parentName:"p",href:"https://nocalhost.dev/docs/installation",title:"VSCode \u63d2\u4ef6\u5b89\u88c5"},"VSCode \u63d2\u4ef6\u5b89\u88c5"),"\u53c2\u8003\u5b98\u7f51\u6587\u6863\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6253\u5f00 VSCode\uff0c\u70b9\u51fb\u5de6\u4fa7\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"Extension")," \u6309\u94ae ",(0,l.kt)("img",{parentName:"li",src:"https://nocalhost.dev/zh-CN/img/icons/vs-code-icon.jpg",alt:"img"})," \u56fe\u6807"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u641c\u7d22\u6846\u4e2d\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"li"},"Nocalhost")," \u9009\u62e9 ",(0,l.kt)("inlineCode",{parentName:"li"},"Nocalhost \u63d2\u4ef6"),"\uff0c\u5e76\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"Install")," \u6309\u94ae")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nocalhost/3.png",alt:null})),(0,l.kt)("h3",{id:"42-\u5b89\u88c5-rainbond"},"4.2 \u5b89\u88c5 Rainbond"),(0,l.kt)("p",null,"\u6211\u4eec\u9009\u62e9 ",(0,l.kt)("a",{parentName:"p",href:"https://www.rainbond.com/docs/installation/install-with-ui/host-install-with-ui",title:"\u57fa\u4e8e\u4e3b\u673a\u5b89\u88c5 Rainbond"},"\u57fa\u4e8e\u4e3b\u673a\u5b89\u88c5 Rainbond")," "),(0,l.kt)("h3",{id:"43-nocalhost-\u5bf9\u63a5-rainbond-\u96c6\u7fa4"},"4.3 Nocalhost \u5bf9\u63a5 Rainbond \u96c6\u7fa4"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"li"},"kubeconfig")," \u6587\u4ef6\uff0c\u8fdb\u5165 Rainbond \u96c6\u7fa4\u89c6\u56fe -> \u70b9\u51fb\u8282\u70b9\u914d\u7f6e -> kubeconfig")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nocalhost/4.png",alt:null})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6211\u4eec\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\u590d\u5236\u5230\u672c\u5730\u5e76\u4fdd\u5b58\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"yaml")," \u6587\u4ef6\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6253\u5f00 VSCode\uff0c\u70b9\u51fb\u6309\u94ae ",(0,l.kt)("img",{src:"https://nocalhost.dev/zh-CN/img/icons/logo-light.svg",width:"3%"}),"\uff0c\u6253\u5f00 Nocalhost \u63d2\u4ef6\uff0c\u9009\u62e9 Connect to Cluster\uff0c\u9009\u62e9\u6211\u4eec ",(0,l.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\u7684\u8def\u5f84\uff0c\u70b9\u51fb Add Cluster\uff0c\u6dfb\u52a0\u96c6\u7fa4\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u5b8c\u6210\u540e\uff0c\u5982\u4e0b\u56fe\uff1a"))),(0,l.kt)("img",{src:"https://static.goodrain.com/wechat/nocalhost/6.png",width:"30%"}),(0,l.kt)("h3",{id:"44-\u5728-rainbond-\u4e0a\u90e8\u7f72-spring-cloud-\u5e94\u7528"},"4.4 \u5728 Rainbond \u4e0a\u90e8\u7f72 Spring Cloud \u5e94\u7528"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8fd9\u91cc\u9009\u62e9\u4ece\u5f00\u6e90\u5e94\u7528\u5546\u5e97\u5b89\u88c5 Spring Cloud Pig \u5fae\u670d\u52a1\u7ec4\u4ef6\uff0c\u5728\u5e94\u7528\u5546\u5e97\u4e2d\u641c\u7d22 Pig \u8fdb\u884c\u5b89\u88c5\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u6548\u679c\u5982\u4e0b\uff1a"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nocalhost/8.png",alt:null})),(0,l.kt)("h3",{id:"45-\u8fdb\u5165-nocalhost-\u5f00\u53d1\u6a21\u5f0f"},"4.5 \u8fdb\u5165 Nocalhost \u5f00\u53d1\u6a21\u5f0f"),(0,l.kt)("p",null,"\u4e0a\u9762\u6211\u4eec\u5df2\u7ecf\u5728\u672c\u5730 VSCode \u4e2d\u5bf9\u63a5\u597d\u4e86\u96c6\u7fa4\uff0c\u5e76\u4e14\u4e5f\u5df2\u7ecf\u5728 Rainbond \u4e2d\u5b89\u88c5\u4e86 Spring Cloud Pig \u5fae\u670d\u52a1\uff0c\u90a3\u4e48\u63a5\u4e0b\u6765\u6211\u4eec\u5728\u672c\u5730 VSCode \u4e2d\u9009\u62e9\u5176\u4e2d\u4e00\u4e2a\u7ec4\u4ef6\u8fdb\u884c\u5f00\u53d1\uff0c\u8fd9\u91cc\u4e3a\u4e86\u6548\u679c\u66f4\u660e\u663e\uff0c\u9009\u62e9\u5f00\u53d1 ",(0,l.kt)("inlineCode",{parentName:"p"},"pig-ui")," \u7ec4\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://gitee.com/zhangbigqi/pig",title:"Spring Cloud Pig \u540e\u7aef"},"Spring Cloud Pig \u540e\u7aef")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://gitee.com/zhangbigqi/pig-ui",title:"Spring Cloud Pig \u524d\u7aef"},"Spring Cloud Pig \u524d\u7aef")),(0,l.kt)("h4",{id:"451-\u514b\u9686-pig-ui-\u4ee3\u7801\u5230\u672c\u5730"},"4.5.1 \u514b\u9686 Pig-ui \u4ee3\u7801\u5230\u672c\u5730"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://gitee.com/zhangbigqi/pig-ui\n")),(0,l.kt)("h4",{id:"452-\u542f\u52a8\u672c\u5730\u5f00\u53d1"},"4.5.2 \u542f\u52a8\u672c\u5730\u5f00\u53d1"),(0,l.kt)("p",null,"\u6253\u5f00 VSCode\uff0c\u70b9\u51fb\u6309\u94ae ",(0,l.kt)("img",{src:"https://nocalhost.dev/zh-CN/img/icons/logo-light.svg",width:"3%"}),"\uff0c\u627e\u5230\u6211\u4eec\u7684 Pig-ui \u7ec4\u4ef6\uff0c\u7531\u4e8e\u8be5\u5e94\u7528\u662f\u4ece\u5f00\u6e90\u5e94\u7528\u5546\u5e97\u4e2d\u5b89\u88c5\uff0cDeployment\u540d\u79f0\u662f\u81ea\u52a8\u751f\u6210\u7684\u5b57\u7b26\u4e32\uff0c\u6211\u4eec\u9700\u8981\u5728\u7ec4\u4ef6\u4e2d\u67e5\u8be2\u4e0b\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nocalhost/9.png",alt:null})),(0,l.kt)("img",{src:"https://static.goodrain.com/wechat/nocalhost/10.png",width:"30%"}),(0,l.kt)("p",null,"\u6211\u4eec\u70b9\u51fb\u65c1\u8fb9\u7684\ud83d\udd28\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\uff0c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u63d0\u793a\u9009\u62e9\u5bb9\u5668\uff0c\u6211\u4eec\u9009\u62e9 ",(0,l.kt)("inlineCode",{parentName:"li"},"gred5f1c")," \u8fd9\u4e2a\u5bb9\u5668\u3002",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u53e6\u5916\u4e00\u4e2a\u5bb9\u5668\u662f Rainbond \u9ed8\u8ba4\u6ce8\u5165\u7684 sidecar \u5bb9\u5668\uff0c\u7528\u4e8e\u7ec4\u4ef6\u4e4b\u95f4\u7684\u5185\u90e8\u901a\u4fe1\u3002"))),(0,l.kt)("li",{parentName:"ol"},"\u63d0\u793a\u6307\u5b9a\u6e90\u4ee3\u7801\u76ee\u5f55\uff0c\u9009\u62e9\u6211\u4eec\u521a\u521a\u514b\u9686\u4e0b\u6765\u7684\u4ee3\u7801\u76ee\u5f55\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u7b49\u5f85\u7247\u523b\u540e\uff0c\u4f1a\u9ed8\u8ba4\u6253\u5f00\u8fdc\u7aef\u5bb9\u5668\u7684\u7ec8\u7aef\u754c\u9762\u5e76\u4e14\u5c06\u672c\u5730\u9879\u76ee\u7684\u6587\u4ef6\u540c\u6b65\u81f3\u5bb9\u5668\u5185\uff0c\u5982\u4e0b\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nocalhost/11.png",alt:null})),(0,l.kt)("h4",{id:"453-\u542f\u52a8\u9879\u76ee"},"4.5.3 \u542f\u52a8\u9879\u76ee"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u9879\u76ee\u4f9d\u8d56\uff0c\u6267\u884c ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u9879\u76ee")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm run dev\n")),(0,l.kt)("p",null,"\u542f\u52a8\u540e\u6548\u679c\u5982\u4e0b\uff0c\u5bb9\u5668\u5185\u7aef\u53e3\u4e3a 80"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nocalhost/13.png",alt:null})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u5f00\u542f\u7aef\u53e3\u8f6c\u53d1\uff0c\u70b9\u51fb\u6309\u94ae ",(0,l.kt)("img",{src:"https://nocalhost.dev/zh-CN/img/icons/logo-light.svg",width:"3%"}),"\uff0c\u627e\u5230\u6211\u4eec\u7684 Deployment\uff0c\u53f3\u952e\u9009\u62e9 Port Forward\uff0cAdd Port Forward\uff0c\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"li"},"38000:80")," \u5c06\u5bb9\u5668\u768480\u7aef\u53e3\u8f6c\u53d1\u5230\u672c\u5730\u768438000\u7aef\u53e3\u3002")),(0,l.kt)("img",{src:"https://static.goodrain.com/wechat/nocalhost/14.png",width:"30%"}),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"http://localhost:38000")," \u53ef\u4ee5\u8bbf\u95ee\u5230\u9875\u9762\uff0c\u5e76\u4e14\u4e5f\u53ef\u4ee5\u6b63\u5e38\u767b\u5f55\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nocalhost/15.png",alt:null})),(0,l.kt)("h4",{id:"454-\u4fee\u6539\u4ee3\u7801\u67e5\u770b\u6548\u679c"},"4.5.4 \u4fee\u6539\u4ee3\u7801\u67e5\u770b\u6548\u679c"),(0,l.kt)("p",null,"\u4e0a\u9762\u5df2\u7ecf\u6f14\u793a\u4e86\u5982\u679c\u901a\u8fc7\u672c\u5730\u8bbf\u95ee\u5230\u8fdc\u7aef\u5bb9\u5668\u5185\u7684\u670d\u52a1\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u4fee\u6539\u4ee3\u7801\u770b\u4e0b\u6548\u679c\u3002"),(0,l.kt)("p",null,"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"src/page/wel.vue"),"\uff0c\u65b0\u589e\u4e00\u6bb5\u4ee3\u7801\uff0c\u4fdd\u5b58\u3002\u53ef\u4ee5\u53d1\u73b0\uff0c\u5f53\u6211\u4eec\u4fdd\u5b58\u7684\u65f6\u5019\uff0c\u7ec8\u7aef\u4e2d\u5c31\u81ea\u52a8\u91cd\u542f\u4e86\uff0c\u4e0e\u672c\u5730\u5f00\u53d1\u6548\u679c\u4e00\u81f4\u3002"),(0,l.kt)("p",null,"\u6587\u4ef6\u7684\u4fee\u6539\u4f1a\u5b9e\u65f6\u540c\u6b65\u5230\u5bb9\u5668\u4e2d\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nocalhost/16.png",alt:null})),(0,l.kt)("p",null,"\u5237\u65b0\u9875\u9762",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:38000"),"\uff0c\u53ef\u4ee5\u770b\u5230\u4fee\u6539\u7684\u5185\u5bb9\u5df2\u751f\u6548\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://static.goodrain.com/wechat/nocalhost/17.png",alt:null})),(0,l.kt)("h2",{id:"\u5199\u5728\u6700\u540e"},"\u5199\u5728\u6700\u540e"),(0,l.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u7684\u5b9e\u8df5\u6b65\u9aa4\uff0c\u6211\u4eec\u5df2\u7ecf\u53ef\u4ee5\u901a\u8fc7 Nocalhost \u5f00\u53d1 Rainbond \u4e0a\u7684\u5fae\u670d\u52a1\u5e94\u7528\uff0c\u8fdb\u5165\u4e91\u539f\u751f\u5feb\u901f\u5f00\u53d1\uff0c\u63d0\u5347\u6211\u4eec\u7684\u5f00\u53d1\u6548\u7387\u3002"),(0,l.kt)("p",null,"\u672c\u6587\u4ec5\u4ecb\u7ecd\u4e86\u57fa\u672c\u7684\u5f00\u53d1\uff0c\u8fd8\u53ef\u4ee5\u4e3a\u9879\u76ee\u914d\u7f6e ",(0,l.kt)("a",{parentName:"p",href:"https://nocalhost.dev/docs/config/config-overview-en",title:"Nocalhost\u5f00\u53d1\u914d\u7f6e"},"Nocalhost\u5f00\u53d1\u914d\u7f6e")," \u7b49\u7b49\uff0c\u5c0f\u4f19\u4f34\u4eec\u53ef\u4ee5\u81ea\u884c\u63a2\u7d22\u3002"))}u.isMDXComponent=!0}}]);