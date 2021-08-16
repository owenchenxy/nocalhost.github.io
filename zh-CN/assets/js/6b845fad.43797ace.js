"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[7898],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,g=f["".concat(c,".").concat(m)]||f[m]||d[m]||i;return r?n.createElement(g,a(a({ref:t},s),{},{components:r})):n.createElement(g,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},4996:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return a}});var n=r(2263),o=r(3919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,u=void 0!==a&&a,c=i.absolute,l=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(u)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+s:s}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},5064:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(7294),o=r(9443);var i=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=r(6010),u="tabItem_1uMI",c="tabItemActive_2DSg";var l=37,s=39;var d=function(e){var t=e.lazy,r=e.block,o=e.defaultValue,d=e.values,f=e.groupId,m=e.className,g=i(),p=g.tabGroupChoices,v=g.setTabGroupChoices,b=(0,n.useState)(o),h=b[0],y=b[1],w=n.Children.toArray(e.children),k=[];if(null!=f){var O=p[f];null!=O&&O!==h&&d.some((function(e){return e.value===O}))&&y(O)}var C=function(e){var t=e.currentTarget,r=k.indexOf(t),n=d[r].value;y(n),null!=f&&(v(f,n),setTimeout((function(){var e,r,n,o,i,a,u,l;(e=t.getBoundingClientRect(),r=e.top,n=e.left,o=e.bottom,i=e.right,a=window,u=a.innerHeight,l=a.innerWidth,r>=0&&i<=l&&o<=u&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},N=function(e){var t,r;switch(e.keyCode){case s:var n=k.indexOf(e.target)+1;r=k[n]||k[0];break;case l:var o=k.indexOf(e.target)-1;r=k[o]||k[k.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},m)},d.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,a.Z)("tabs__item",u,{"tabs__item--active":h===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:N,onFocus:C,onClick:C},r)}))),t?(0,n.cloneElement)(w.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,r){var n=(0,r(7294).createContext)(void 0);t.Z=n},2588:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return f},toc:function(){return m},default:function(){return p}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a=r(5064),u=r(8215),c=r(4996),l=["components"],s={title:"Log Viewer"},d="View Logs",f={unversionedId:"guides/debug/log-viewer",id:"guides/debug/log-viewer",isDocsHomePage:!1,title:"Log Viewer",description:"Nocalhost comes with a built-in log viewer, to helps you to monitor and debug issues with any Kubernetes containers right within your IDE.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/debug/log-viewer.md",sourceDirName:"guides/debug",slug:"/guides/debug/log-viewer",permalink:"/zh-CN/docs/guides/debug/log-viewer",editUrl:"https://github.com/neaped/nh-docs/docs/guides/debug/log-viewer.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1628880717,formattedLastUpdatedAt:"8/13/2021",frontMatter:{title:"Log Viewer"},sidebar:"docs",previous:{title:"Access Terminal",permalink:"/zh-CN/docs/guides/debug/access-terminal"},next:{title:"Debugging PHP",permalink:"/zh-CN/docs/guides/debug/php"}},m=[],g={toc:m};function p(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"view-logs"},"View Logs"),(0,i.kt)("p",null,"Nocalhost comes with a built-in log viewer, to helps you to monitor and debug issues with any Kubernetes containers right within your IDE."),(0,i.kt)(a.Z,{defaultValue:"vscode",values:[{label:"VS Code",value:"vscode"},{label:"JetBrains",value:"jb"}],mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"vscode",mdxType:"TabItem"},(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,c.Z)("/img/plugin/vs-log-viewer.gif")}),(0,i.kt)("figcaption",null,"VS Code open log viewer"))),(0,i.kt)(u.Z,{value:"jb",mdxType:"TabItem"},(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,c.Z)("/img/plugin/jb-log-viewer.gif")}),(0,i.kt)("figcaption",null,"VS Code open log viewer")))))}p.isMDXComponent=!0}}]);