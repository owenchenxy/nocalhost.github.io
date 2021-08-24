"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[7441],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),h=r,m=f["".concat(l,".").concat(h)]||f[h]||p[h]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8870:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],s={},l="Hooks",c={unversionedId:"config/config-hooks",id:"config/config-hooks",isDocsHomePage:!1,title:"Hooks",description:"Hooks works like a regular templates, but they have special annotations that cause Nocalhost to utilize them differently. In this section, we cover the basic usage pattern for hooks.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/config/config-hooks.md",sourceDirName:"config",slug:"/config/config-hooks",permalink:"/zh-CN/docs/config/config-hooks",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Config services",permalink:"/zh-CN/docs/config/config-services"},next:{title:"Basic",permalink:"/zh-CN/docs/config/config-deploy"}},u=[{value:"The Available Hooks",id:"the-available-hooks",children:[{value:"Example: Hook configurations",id:"example-hook-configurations",children:[]}]}],p={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hooks"},"Hooks"),(0,a.kt)("p",null,"Hooks works like a regular templates, but they have special annotations that cause Nocalhost to utilize them differently. In this section, we cover the basic usage pattern for hooks."),(0,a.kt)("h2",{id:"the-available-hooks"},"The Available Hooks"),(0,a.kt)("p",null,"The following hooks are defined:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onPreInstall")," Executes after templates are rendered, but before any resources are created in Kubernetes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onPostInstall")," Executes after all resources are loaded into Kubernetes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onPreDelete")," Executes on a deletion request before any resources are deleted from Kubernetes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onPostDelete")," Executes on a deletion request after all of the release's resources have been deleted"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onPreUpgrade")," Executes on an upgrade request after templates are rendered, but before any resources are updated"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onPostDelete")," Executes on an upgrade request after all resources have been upgraded")),(0,a.kt)("p",null,"When many resources are declared in a hook, the resources are executed serially. If they have hook weights (see example below), they are executed in weighted order. Hook resources with same weight are deployed in the same order as normal non-hook resources. Otherwise, ordering is not guaranteed. It is considered good practice to add a hook weight, and set it to ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," if weight is not important."),(0,a.kt)("h3",{id:"example-hook-configurations"},"Example: Hook configurations"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'\napplication:\n    name: configure-hooks\n    ...\n    # Application Hooks\n    onPreInstall:\n        - path: manifest/templates/pre-install/print-num-job-01.yaml\n        weight: "0"\n        - path: manifest/templates/hook/pre-install.yaml\n        weight: "1"\n    onPostInstall:\n        - path: manifest/templates/hook/post-install.yaml\n        weight: "1"\n    onPreUpgrade:\n        - path: manifest/templates/hook/pre-upgrade.yaml\n        weight: "1"\n    onPostUpgrade:\n        - path: manifest/templates/hook/post-upgrade.yaml\n        weight: "1"\n    onPreDelete:\n        - path: manifest/templates/hook/pre-delete.yaml\n        weight: "1"\n    onPostDelete:\n        - path: manifest/templates/hook/post-delete.yaml\n        weight: "1"\n')))}f.isMDXComponent=!0}}]);