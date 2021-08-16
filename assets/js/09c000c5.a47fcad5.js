"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[9382],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),s=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(t),d=o,v=f["".concat(a,".").concat(d)]||f[d]||p[d]||c;return t?r.createElement(v,i(i({ref:n},u),{},{components:t})):r.createElement(v,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=f;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<c;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5887:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=t(2122),o=t(9756),c=(t(7294),t(3905)),i=["components"],l={title:"nhctl convert"},a=void 0,s={unversionedId:"cli/cli-convert",id:"cli/cli-convert",isDocsHomePage:!1,title:"nhctl convert",description:"Convert config file between different versions",source:"@site/docs/cli/cli-convert.md",sourceDirName:"cli",slug:"/cli/cli-convert",permalink:"/docs/cli/cli-convert",editUrl:"https://github.com/neaped/nh-docs/docs/cli/cli-convert.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1628880717,formattedLastUpdatedAt:"8/13/2021",frontMatter:{title:"nhctl convert"},sidebar:"docs",previous:{title:"nhctl config",permalink:"/docs/cli/cli-config"},next:{title:"nhctl daemon",permalink:"/docs/cli/cli-daemon"}},u=[{value:"Usage",id:"usage",children:[]},{value:"Flags",id:"flags",children:[]}],p={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Convert config file between different versions"),(0,c.kt)("h2",{id:"usage"},"Usage"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"nhctl convert [flags]\n")),(0,c.kt)("h2",{id:"flags"},"Flags"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"Flags:\n  -d, --destFile string       File saves converted config\n      --from-version string   From which version\n  -h, --help                  help for convert\n  -f, --srcFile string        File needs to get converted\n      --to-version string     Convert to which version\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")))}f.isMDXComponent=!0}}]);