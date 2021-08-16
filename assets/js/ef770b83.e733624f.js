"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[8907],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return h}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},i=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=d(t),h=r,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||l;return t?a.createElement(m,o(o({ref:n},i),{},{components:t})):a.createElement(m,o({ref:n},i))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<l;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3520:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return i},default:function(){return p}});var a=t(2122),r=t(9756),l=(t(7294),t(3905)),o=["components"],c={title:"nhctl daemon"},s=void 0,d={unversionedId:"cli/cli-daemon",id:"cli/cli-daemon",isDocsHomePage:!1,title:"nhctl daemon",description:"nhctl daemon",source:"@site/docs/cli/cli-daemon.md",sourceDirName:"cli",slug:"/cli/cli-daemon",permalink:"/docs/cli/cli-daemon",editUrl:"https://github.com/neaped/nh-docs/docs/cli/cli-daemon.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1628880717,formattedLastUpdatedAt:"8/13/2021",frontMatter:{title:"nhctl daemon"},sidebar:"docs",previous:{title:"nhctl convert",permalink:"/docs/cli/cli-convert"},next:{title:"nhctl db",permalink:"/docs/cli/cli-db"}},i=[{value:"nhctl daemon info",id:"nhctl-daemon-info",children:[{value:"Usage",id:"usage",children:[]},{value:"Flags",id:"flags",children:[]}]},{value:"nhctl daemon restart",id:"nhctl-daemon-restart",children:[{value:"Usage",id:"usage-1",children:[]},{value:"Flags",id:"flags-1",children:[]}]},{value:"nhctl daemon start",id:"nhctl-daemon-start",children:[{value:"Usage",id:"usage-2",children:[]},{value:"Flags",id:"flags-2",children:[]}]},{value:"nhctl daemon status",id:"nhctl-daemon-status",children:[{value:"Usage",id:"usage-3",children:[]},{value:"Flags",id:"flags-3",children:[]}]},{value:"nhctl daemon stop",id:"nhctl-daemon-stop",children:[{value:"Usage",id:"usage-4",children:[]},{value:"Flags",id:"flags-4",children:[]}]}],u={toc:i};function p(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"nhctl daemon"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Usage:\nnhctl daemon [command]\n\nAvailable Commands:\n  info        Get nhctl daemon info\n  restart     Restart nhctl daemon\n  start       Start nhctl daemon\n  status      Get nhctl daemon status\n  stop        Stop nhctl daemon\n")),(0,l.kt)("h2",{id:"nhctl-daemon-info"},"nhctl daemon info"),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nhctl daemon info\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Example:\n\n> nhctl daemon info\n\n> {"Version":"v0.4.12","CommitId":"0f02d7f90335076b502bca3f40ff42bd37ee55e6","NhctlPath":".nh/bin/nhctl","Upgrading":false}\n')),(0,l.kt)("h3",{id:"flags"},"Flags"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Flags:\n  -h, --help   help for restart\n      --sudo   Is run as sudo\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")),(0,l.kt)("h2",{id:"nhctl-daemon-restart"},"nhctl daemon restart"),(0,l.kt)("p",null,"\u91cd\u542f nhctl daemon"),(0,l.kt)("h3",{id:"usage-1"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nhctl daemon restart\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Example:\n\n> nhctl daemon restart\n> RestartDaemonServerCommand has been sent\n")),(0,l.kt)("h3",{id:"flags-1"},"Flags"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Flags:\n  -h, --help   help for restart\n      --sudo   Is run as sudo\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")),(0,l.kt)("h2",{id:"nhctl-daemon-start"},"nhctl daemon start"),(0,l.kt)("p",null,"Manually start nhctl daemon"),(0,l.kt)("h3",{id:"usage-2"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nhctl daemon start [flags]\n")),(0,l.kt)("h3",{id:"flags-2"},"Flags"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Flags:\n  -d, --daemon   Is run as daemon(background)\n  -h, --help     help for start\n      --sudo     Is run as sudo\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")),(0,l.kt)("h2",{id:"nhctl-daemon-status"},"nhctl daemon status"),(0,l.kt)("p",null,"View nhctl daemon status"),(0,l.kt)("h3",{id:"usage-3"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nhctl daemon status\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Example:\n\n> nhctl daemon status\n> {"portForwardList":[]}\n')),(0,l.kt)("h3",{id:"flags-3"},"Flags"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Flags:\n  -h, --help   help for status\n      --sudo   Is run as sudo\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")),(0,l.kt)("h2",{id:"nhctl-daemon-stop"},"nhctl daemon stop"),(0,l.kt)("p",null,"Manually stop nhctl daemon"),(0,l.kt)("h3",{id:"usage-4"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nhctl daemon stop\n")),(0,l.kt)("h3",{id:"flags-4"},"Flags"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Flags:\n  -h, --help   help for stop\n      --sudo   Is run as sudo\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")))}p.isMDXComponent=!0}}]);