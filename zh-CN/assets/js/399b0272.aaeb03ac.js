"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[303],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),p=l,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function l(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return l}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return r}});var a=n(52263),l=n(13919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,r=i.forcePrependBaseUrl,o=void 0!==r&&r,s=i.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,l.b)(n))return n;if(o)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(i,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},41395:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),l=n(80944),i=n(86010),r="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,c=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,d=e.values,m=e.groupId,p=e.className,h=(0,l.Z)(),k=h.tabGroupChoices,f=h.setTabGroupChoices,v=(0,a.useState)(u),g=v[0],b=v[1],N=a.Children.toArray(e.children),y=[];if(null!=m){var w=k[m];null!=w&&w!==g&&d.some((function(e){return e.value===w}))&&b(w)}var C=function(e){var t=e.currentTarget,n=y.indexOf(t),a=d[n].value;b(a),null!=m&&(f(m,a),setTimeout((function(){var e,n,a,l,i,r,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,l=e.bottom,i=e.right,r=window,s=r.innerHeight,c=r.innerWidth,n>=0&&i<=c&&l<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case c:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case s:var l=y.indexOf(e.target)-1;n=y[l]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},p)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",r,{"tabs__item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(N.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},80944:function(e,t,n){var a=n(67294),l=n(79443);t.Z=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},48989:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return h}});var a=n(22122),l=n(19756),i=(n(67294),n(3905)),r=n(41395),o=n(58215),s=n(44996),c=["components"],u={},d={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"\u5b89\u88c5 Nocalhost",description:"\u5f53\u5b89\u88c5 Nocalhost \u63d2\u4ef6\u65f6\uff0c\u4f1a\u81ea\u52a8\u5e2e\u4f60\u5b89\u88c5 nhctl",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/zh-CN/docs/installation",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629806685,formattedLastUpdatedAt:"2021/8/24",frontMatter:{},sidebar:"docs",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh-CN/docs/quick-start"},next:{title:"\u96c6\u7fa4\u7ba1\u7406",permalink:"/zh-CN/docs/guides/manage-cluster"}},m=[{value:"\u517c\u5bb9\u6027",id:"\u517c\u5bb9\u6027",children:[]},{value:"\u5b89\u88c5 VS Code \u63d2\u4ef6",id:"\u5b89\u88c5-vs-code-\u63d2\u4ef6",children:[]},{value:"\u5b89\u88c5 JetBrains \u63d2\u4ef6",id:"\u5b89\u88c5-jetbrains-\u63d2\u4ef6",children:[]},{value:"\u5347\u7ea7\u63d2\u4ef6",id:"\u5347\u7ea7\u63d2\u4ef6",children:[]},{value:"\u5378\u8f7d",id:"\u5378\u8f7d",children:[{value:"\u5378\u8f7d\u63d2\u4ef6",id:"\u5378\u8f7d\u63d2\u4ef6",children:[]},{value:"\u5378\u8f7d <code>nhctl</code>",id:"\u5378\u8f7d-nhctl",children:[]}]}],p={toc:m};function h(e){var t=e.components,n=(0,l.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"nhctl")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5f53\u5b89\u88c5 Nocalhost \u63d2\u4ef6\u65f6\uff0c\u4f1a\u81ea\u52a8\u5e2e\u4f60\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"nhctl")))),(0,i.kt)("h2",{id:"\u517c\u5bb9\u6027"},"\u517c\u5bb9\u6027"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"IDE"),(0,i.kt)("th",null,"\u7248\u672c"),(0,i.kt)("th",null,"\u6d4b\u8bd5\u7ed3\u679c"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"VS Code "),(0,i.kt)("td",null,"1.58.2 (Universal)"),(0,i.kt)("td",null,(0,i.kt)("strong",{className:"pass-tag"},"\u901a\u8fc7"))),(0,i.kt)("tr",null,(0,i.kt)("td",{rowspan:"3"},"JetBrains"),(0,i.kt)("td",null,"2021.2 - Intel and Apple Silicon"),(0,i.kt)("td",null,(0,i.kt)("strong",{className:"pass-tag"},"\u901a\u8fc7"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"2021.1 - Intel and Apple Silicon"),(0,i.kt)("td",null,(0,i.kt)("strong",{className:"pass-tag"},"\u901a\u8fc7"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"2020.3 - Intel and Apple Silicon"),(0,i.kt)("td",null,(0,i.kt)("strong",{className:"pass-tag"},"\u901a\u8fc7"))))),(0,i.kt)("h2",{id:"\u5b89\u88c5-vs-code-\u63d2\u4ef6"},"\u5b89\u88c5 VS Code \u63d2\u4ef6"),(0,i.kt)(r.Z,{defaultValue:"market",values:[{label:"Install from Extension Market",value:"market"},{label:"Manual Installation",value:"manual"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"market",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6253\u5f00 VS Code\uff0c\u70b9\u51fb\u5de6\u4fa7\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"Extension")," \u6309\u94ae ",(0,i.kt)("img",{src:(0,s.Z)("/img/icons/vs-code-icon.jpg"),width:"20"})," \u56fe\u6807"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u641c\u7d22\u6846\u4e2d\u8f93\u5165 ",(0,i.kt)("inlineCode",{parentName:"li"},"Nocalhost")," \u56fe\u6807"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u641c\u7d22\u6846\u4e2d\u8f93\u5165 ",(0,i.kt)("inlineCode",{parentName:"li"},"Nocalhost")," \u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"li"},"Nocalhost \u63d2\u4ef6"),"\uff0c\u5e76\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Install")," \u6309\u94ae")),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/installation/vscode-market.png")}),(0,i.kt)("figcaption",null,"\u4ece VS Code \u5e94\u7528\u5e02\u573a\u5b89\u88c5"))),(0,i.kt)(o.Z,{value:"manual",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4ece\u6211\u4eec\u7684 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nocalhost/nocalhost-vscode-plugin/releases/latest"},"GitHub \u4ed3\u5e93")," \u4e2d\u4e0b\u8f7d\u6700\u65b0\u7684\u7248\u672c"),(0,i.kt)("li",{parentName:"ol"},"\u6253\u5f00 Vs Code\uff0c\u70b9\u51fb\u5de6\u4fa7\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"Extension")," \u6253\u5f00 VS Code\uff0c\u70b9\u51fb\u5de6\u4fa7\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"Extension")," ",(0,i.kt)("img",{src:(0,s.Z)("/img/icons/vs-code-icon.jpg"),width:"20"})," \u6309\u94ae"),(0,i.kt)("li",{parentName:"ol"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"Extension")," \u53f3\u4e0a\u89d2\u70b9\u51fb ",(0,i.kt)("img",{src:(0,s.Z)("/img/icons/cluster-action-icon.jpg"),width:"20"})," on the top right of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Extension")," list, select ",(0,i.kt)("inlineCode",{parentName:"li"},"Install from VSIX..."),", select the ",(0,i.kt)("inlineCode",{parentName:"li"},"VSIX")," downloaded above"),(0,i.kt)("li",{parentName:"ol"},"Download the latest nhctl from out ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nocalhost/nocalhost/releases"},"Github Repo"),", and put it under ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.nh/bin/")," then named nhctl, you need to give this binary execution permission (chmod +x ./nhctl). (the path is %homepath%/.nh/bin/ in windows, and the binary named 'nhctl.exe', no need to grant additional execution permissions under windows)")),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/installation/vs-manual.jpg")}),(0,i.kt)("figcaption",null,"\u624b\u52a8\u5b89\u88c5")))),(0,i.kt)("h2",{id:"\u5b89\u88c5-jetbrains-\u63d2\u4ef6"},"\u5b89\u88c5 JetBrains \u63d2\u4ef6"),(0,i.kt)(r.Z,{defaultValue:"market",values:[{label:"Install from Extension Market",value:"market"},{label:"Manual Installation",value:"manual"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"market",mdxType:"TabItem"},(0,i.kt)("h4",{id:"windows"},"Windows"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'File > Settings > Plugins > Browse repositories... > Search for "Nocalhost" > Install Plugin')),(0,i.kt)("h4",{id:"macos"},"MacOS"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'Preferences > Settings > Plugins > Browse repositories... > Search for "Nocalhost" > Install Plugin')),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/installation/jb-market.png")}),(0,i.kt)("figcaption",null,"\u4ece JetBrains \u63d2\u4ef6\u5e02\u573a\u5b89\u88c5"))),(0,i.kt)(o.Z,{value:"manual",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4ece\u6211\u4eec\u7684 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nocalhost/nocalhost-intellij-plugin/releases/latest"},"GitHub \u4ed3\u5e93")," \u4e2d\u4e0b\u8f7d\u6700\u65b0\u7684\u7248\u672c"),(0,i.kt)("li",{parentName:"ol"},"Install plugin: ",(0,i.kt)("kbd",null,"Preferences")," > ",(0,i.kt)("kbd",null,"Plugins")," > ",(0,i.kt)("kbd",null,"Install from disk... ")),(0,i.kt)("li",{parentName:"ol"},"Download the latest nhctl from out ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nocalhost/nocalhost/releases"},"Github Repo"),", and put it under ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.nh/bin/")," then named nhctl, you need to give this binary execution permission (chmod +x ./nhctl). (the path is %homepath%/.nh/bin/ in windows, and the binary named 'nhctl.exe', no need to grant additional execution permissions under windows)")),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/installation/jb-manual.jpg")}),(0,i.kt)("figcaption",null,"\u624b\u52a8\u5b89\u88c5")))),(0,i.kt)("h2",{id:"\u5347\u7ea7\u63d2\u4ef6"},"\u5347\u7ea7\u63d2\u4ef6"),(0,i.kt)("p",null,"Nocalhost \u4f1a\u5728 IDE \u6bcf\u6b21\u542f\u52a8\u7684\u65f6\u5019\u81ea\u52a8\u66f4\u65b0\u63d2\u4ef6\u3002"),(0,i.kt)("h2",{id:"\u5378\u8f7d"},"\u5378\u8f7d"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e0b\u8ff0\u6b65\u9aa4\u5378\u8f7d Nocalhost"),(0,i.kt)("h3",{id:"\u5378\u8f7d\u63d2\u4ef6"},"\u5378\u8f7d\u63d2\u4ef6"),(0,i.kt)("p",null,"\u5728\u4f60\u7684 IDE \u4e2d\u5378\u8f7d\u63d2\u4ef6"),(0,i.kt)("h3",{id:"\u5378\u8f7d-nhctl"},"\u5378\u8f7d ",(0,i.kt)("inlineCode",{parentName:"h3"},"nhctl")),(0,i.kt)("p",null,"\u4ece\u4f60\u7684\u6839\u76ee\u5f55\u4e0b\u5220\u9664 ",(0,i.kt)("inlineCode",{parentName:"p"},".nh")," \u6587\u4ef6\u5939"),(0,i.kt)(r.Z,{defaultValue:"mac",values:[{label:"Mac & Linux",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".nh")," \u6587\u4ef6\u5939\u5728\u4f60\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"~/")," \u76ee\u5f55\u4e0b\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e0b\u8ff0\u547d\u4ee4\u5220\u9664\u5b83"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf .nh\n"))),(0,i.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".nh")," \u6587\u4ef6\u5939\u5728\u4f60\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"<ROOT PATH>/User/username")," \u6587\u4ef6\u5939\u4e0b\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u5220\u9664\u5b83"))))}h.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}function l(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}n.d(t,{Z:function(){return l}})}}]);