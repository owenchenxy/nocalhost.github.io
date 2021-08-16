"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[2098],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9283:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return y}});var r=n(2122),o=n(9756),i=n(7294),a=n(3905),l=n(6010),c="tableOfContentsInline_3fWc";function s(e){var t=e.toc,n=e.isChild;return t.length?i.createElement("ul",{className:n?"":"table-of-contents"},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(s,{isChild:!0,toc:e.children}))}))):null}var u=function(e){var t=e.toc;return i.createElement("div",{className:(0,l.Z)(c)},i.createElement(s,{toc:t}))},f=["components"],p={},d="FAQ",m={unversionedId:"faq/faq",id:"faq/faq",isDocsHomePage:!1,title:"FAQ",description:"Installation",source:"@site/docs/faq/faq.md",sourceDirName:"faq",slug:"/faq/faq",permalink:"/docs/faq/faq",editUrl:"https://github.com/neaped/nh-docs/docs/faq/faq.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1628880717,formattedLastUpdatedAt:"8/13/2021",frontMatter:{},sidebar:"docs",previous:{title:"nhctl yaml",permalink:"/docs/cli/cli-yaml"},next:{title:"0.4.x",permalink:"/docs/changelogs/0.4.x"}},y=[{value:"Installation",id:"installation",children:[]},{value:"Issues",id:"issues",children:[{value:"File sync is too slow in Linux",id:"file-sync-is-too-slow-in-linux",children:[]}]},{value:"Operating",id:"operating",children:[]}],h={toc:y};function g(e){var t=e.components,n=(0,o.Z)(e,f);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)(u,{toc:y,mdxType:"TOCInline"}),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"issues"},"Issues"),(0,a.kt)("h3",{id:"file-sync-is-too-slow-in-linux"},"File sync is too slow in Linux"),(0,a.kt)("p",null,"If your file synchronization is too slow in linux, it is most likely due to inotify limit."),(0,a.kt)("h4",{id:"how-do-i-increase-the-inotify-limit-to-get-my-filesystem-watcher-to-work"},"How do I increase the inotify limit to get my filesystem watcher to work?"),(0,a.kt)("p",null,"Linux typically restricts the amount of watches per user (usually 8192). When you have more directories you need to adjust that number."),(0,a.kt)("p",null,"On many Linux distributions you can run the following to fix it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo "fs.inotify.max_user_watches=204800" | sudo tee -a /etc/sysctl.conf\n')),(0,a.kt)("p",null,"On Arch Linux and potentially others it is preferred to write this line into a separate file, i.e. you should run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo "fs.inotify.max_user_watches=204800" | sudo tee -a /etc/sysctl.d/90-override.conf\n')),(0,a.kt)("p",null,"This only takes effect after a reboot. To adjust the limit immediately, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo sh -c 'echo 204800 > /proc/sys/fs/inotify/max_user_watches'\n")),(0,a.kt)("h2",{id:"operating"},"Operating"))}g.isMDXComponent=!0}}]);