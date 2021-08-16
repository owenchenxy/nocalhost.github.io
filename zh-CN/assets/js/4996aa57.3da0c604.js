"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[7725],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var a=n(2263),r=n(3919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),r=n(9443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),c="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,u=39;var d=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,d=e.values,m=e.groupId,p=e.className,f=i(),v=f.tabGroupChoices,g=f.setTabGroupChoices,b=(0,a.useState)(r),k=b[0],h=b[1],N=a.Children.toArray(e.children),y=[];if(null!=m){var C=v[m];null!=C&&C!==k&&d.some((function(e){return e.value===C}))&&h(C)}var w=function(e){var t=e.currentTarget,n=y.indexOf(t),a=d[n].value;h(a),null!=m&&(g(m,a),setTimeout((function(){var e,n,a,r,i,o,c,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,c=o.innerHeight,s=o.innerWidth,n>=0&&i<=s&&r<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case s:var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},p)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",c,{"tabs__item--active":k===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:w,onClick:w},n)}))),t?(0,a.cloneElement)(N.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},3587:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return v}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=n(5064),c=n(8215),l=n(4996),s=["components"],u={},d="\u96c6\u7fa4\u7ba1\u7406",m={unversionedId:"guides/manage-cluster",id:"guides/manage-cluster",isDocsHomePage:!1,title:"\u96c6\u7fa4\u7ba1\u7406",description:"\u8fde\u63a5 Kubernetes \u96c6\u7fa4",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/manage-cluster.md",sourceDirName:"guides",slug:"/guides/manage-cluster",permalink:"/zh-CN/docs/guides/manage-cluster",editUrl:"https://github.com/neaped/nh-docs/docs/guides/manage-cluster.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1628880717,formattedLastUpdatedAt:"8/13/2021",frontMatter:{},sidebar:"docs",previous:{title:"\u5b89\u88c5 Nocalhost",permalink:"/zh-CN/docs/installation"},next:{title:"Deploy by IDE Plugin",permalink:"/zh-CN/docs/guides/deploy/deploy-by-ide"}},p=[{value:"\u8fde\u63a5 Kubernetes \u96c6\u7fa4",id:"\u8fde\u63a5-kubernetes-\u96c6\u7fa4",children:[]},{value:"\u79fb\u9664\u96c6\u7fa4",id:"\u79fb\u9664\u96c6\u7fa4",children:[]},{value:"\u67e5\u770b\u96c6\u7fa4 KubeConfig",id:"\u67e5\u770b\u96c6\u7fa4-kubeconfig",children:[]}],f={toc:p};function v(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u96c6\u7fa4\u7ba1\u7406"},"\u96c6\u7fa4\u7ba1\u7406"),(0,i.kt)("h2",{id:"\u8fde\u63a5-kubernetes-\u96c6\u7fa4"},"\u8fde\u63a5 Kubernetes \u96c6\u7fa4"),(0,i.kt)("p",null,"Nocalhost \u652f\u6301\u591a\u96c6\u7fa4\u7ba1\u7406\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4e24\u79cd\u65b9\u6cd5\u8fde\u63a5\u5230 Kubernetes \u96c6\u7fa4\uff1a"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u901a\u8fc7 KubeConfig \u8fde\u63a5")),(0,i.kt)("p",null,"\u4ece\u4efb\u4f55\u672c\u5730\u76ee\u5f55\u4e2d\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"p"},"KubeConfig")," \u6587\u4ef6\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u9ed8\u8ba4 KubeConfig")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cNocalhost \u63d2\u4ef6\u542f\u52a8\u65f6\u4f1a\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.kube/config")," \u8def\u5f84\u4e0b\u81ea\u52a8\u8bfb\u53d6\u60a8\u672c\u5730\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"KubeConfig"),"\u3002"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7c98\u8d34 KubeConfig \u6587\u672c")),(0,i.kt)("p",null,"\u7c98\u8d34 KubeConfig \u7684\u6587\u672c\u5185\u5bb9\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u83b7\u53d6 KubeConfig")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728 Kubernetes \u96c6\u7fa4\u6240\u5728\u7cfb\u7edf\u5185\u8fd0\u884c\u4e0b\u8ff0\u547d\u4ee4\u67e5\u770b ",(0,i.kt)("inlineCode",{parentName:"p"},"KubeConfig"),"\uff0c\u7136\u540e\u590d\u5236\u9ecf\u8d34\u5230\u63d2\u4ef6\u91cc\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl config view --minify --raw --flattern\n")))),(0,i.kt)(o.Z,{defaultValue:"vscode",values:[{label:"VS Code",value:"vscode"},{label:"JetBrains",value:"jet"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"vscode",mdxType:"TabItem"},(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,l.Z)("/img/opt/vscode-add-cluster.gif"),width:"250"}),(0,i.kt)("figcaption",null,"\u5728 VS Code \u4e2d\u8fde\u63a5\u96c6\u7fa4"))),(0,i.kt)(c.Z,{value:"jet",mdxType:"TabItem"},(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,l.Z)("/img/opt/idea-connect-cluster.gif"),width:"600"}),(0,i.kt)("figcaption",null,"\u5728 JetBrains IDE \u4e2d\u8fde\u63a5\u96c6\u7fa4")))),(0,i.kt)("h2",{id:"\u79fb\u9664\u96c6\u7fa4"},"\u79fb\u9664\u96c6\u7fa4"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0d\u4fee\u6539\u6e90 KubeConfig")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Nocalhost \u53ea\u4f1a\u4ece\u6811\u5217\u8868\u4e2d\u5220\u9664\u96c6\u7fa4\uff0c\u5b83\u4e0d\u4f1a\u4fee\u6539\u4f60\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"KubeConfig"),"\u3002"))),(0,i.kt)(o.Z,{defaultValue:"vscode",values:[{label:"VS Code",value:"vscode"},{label:"JetBrains",value:"jet"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"vscode",mdxType:"TabItem"},(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,l.Z)("/img/opt/vscode-remove-cluster.gif"),width:"290"}),(0,i.kt)("figcaption",null,"\u5728 VS Code \u4e2d\u79fb\u9664\u96c6\u7fa4"))),(0,i.kt)(c.Z,{value:"jet",mdxType:"TabItem"},(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,l.Z)("/img/opt/idea-remove-cluster.gif"),width:"600"}),(0,i.kt)("figcaption",null,"\u5728 JetBrains IDE \u4e2d\u79fb\u9664\u96c6\u7fa4")))),(0,i.kt)("h2",{id:"\u67e5\u770b\u96c6\u7fa4-kubeconfig"},"\u67e5\u770b\u96c6\u7fa4 KubeConfig"),(0,i.kt)("p",null,"\u53f3\u952e\u70b9\u51fb\u6307\u5b9a\u96c6\u7fa4\uff0c\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"p"},"View KubeConfig"),"\uff0cNocalhost \u63d2\u4ef6\u4f1a\u6253\u5f00\u8be5\u96c6\u7fa4\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"KubeConfig")),(0,i.kt)(o.Z,{defaultValue:"vscode",values:[{label:"VS Code",value:"vscode"},{label:"JetBrains",value:"jet"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"vscode",mdxType:"TabItem"},(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,l.Z)("/img/opt/idea-view-config.gif"),width:"600"}),(0,i.kt)("figcaption",null,"\u5728 VS Code \u4e2d\u67e5\u770b\u96c6\u7fa4 KubeConfig"))),(0,i.kt)(c.Z,{value:"jet",mdxType:"TabItem"},(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,l.Z)("/img/opt/vscode-view-config.gif"),width:"600"}),(0,i.kt)("figcaption",null,"\u5728 JetBrains IDE \u4e2d\u67e5\u770b\u96c6\u7fa4 KubeConfig")))))}v.isMDXComponent=!0}}]);