"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[5512],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9893:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],c={title:"nhctl upgrade"},l=void 0,s={unversionedId:"cli/cli-upgrade",id:"cli/cli-upgrade",isDocsHomePage:!1,title:"nhctl upgrade",description:"Upgrade k8s application",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/cli/cli-upgrade.md",sourceDirName:"cli",slug:"/cli/cli-upgrade",permalink:"/zh-CN/docs/cli/cli-upgrade",editUrl:"https://github.com/neaped/nh-docs/docs/cli/cli-upgrade.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1628880717,formattedLastUpdatedAt:"8/13/2021",frontMatter:{title:"nhctl upgrade"},sidebar:"docs",previous:{title:"nhctl uninstall",permalink:"/zh-CN/docs/cli/cli-uninstall"},next:{title:"nhctl version",permalink:"/zh-CN/docs/cli/cli-version"}},u=[{value:"Usage",id:"usage",children:[]},{value:"Flags",id:"flags",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Upgrade k8s application"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nhctl upgrade [NAME] [flags]\n")),(0,o.kt)("h2",{id:"flags"},"Flags"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Flags:\n      --config string              specify a config relative to .nocalhost dir\n  -r, --git-ref string             resources git ref\n  -u, --git-url string             resources git url\n      --helm-chart-name string     chart name\n      --helm-repo-name string      chart repository name\n      --helm-repo-url string       chart repository url where to locate the requested chart\n      --helm-repo-version string   chart repository version\n  -f, --helm-values string         helm's Value.yaml\n  -h, --help                       help for upgrade\n      --local-path string          local path for application\n  -c, --outer-config string        specify a config.yaml in local path\n      --resource-path strings      resources path\n      --set strings                set values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)\n")))}d.isMDXComponent=!0}}]);