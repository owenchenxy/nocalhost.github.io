"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[9971],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),d=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=d(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return t?o.createElement(f,a(a({ref:n},s),{},{components:t})):o.createElement(f,a({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<i;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3919:function(e,n,t){function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}t.d(n,{b:function(){return o},Z:function(){return r}})},4996:function(e,n,t){t.d(n,{C:function(){return i},Z:function(){return a}});var o=t(2263),r=t(3919);function i(){var e=(0,o.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,o){var i=void 0===o?{}:o,a=i.forcePrependBaseUrl,l=void 0!==a&&a,c=i.absolute,d=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,r.b)(t))return t;if(l)return n+t;var s=t.startsWith(n)?t:n+t.replace(/^\//,"");return d?e+s:s}(i,t,e,n)}}}function a(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},8215:function(e,n,t){var o=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(7294),r=t(9443);var i=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=t(6010),l="tabItem_1uMI",c="tabItemActive_2DSg";var d=function(e){var n,t=e.lazy,r=e.block,d=e.defaultValue,s=e.values,u=e.groupId,p=e.className,m=o.Children.toArray(e.children),f=null!=s?s:m.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=d?d:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value,h=i(),g=h.tabGroupChoices,k=h.setTabGroupChoices,b=(0,o.useState)(v),y=b[0],N=b[1],w=[];if(null!=u){var C=g[u];null!=C&&C!==y&&f.some((function(e){return e.value===C}))&&N(C)}var P=function(e){var n=e.currentTarget,t=w.indexOf(n),o=f[t].value;N(o),null!=u&&(k(u,o),setTimeout((function(){var e,t,o,r,i,a,l,d;(e=n.getBoundingClientRect(),t=e.top,o=e.left,r=e.bottom,i=e.right,a=window,l=a.innerHeight,d=a.innerWidth,t>=0&&i<=d&&r<=l&&o>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(c),setTimeout((function(){return n.classList.remove(c)}),2e3))}),150))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var o=w.indexOf(e.target)+1;t=w[o]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.target)-1;t=w[r]||w[w.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},p)},f.map((function(e){var n=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,a.Z)("tabs__item",l,{"tabs__item--active":y===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:D,onFocus:P,onClick:P},null!=t?t:n)}))),t?(0,o.cloneElement)(m.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},m.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},9443:function(e,n,t){var o=(0,t(7294).createContext)(void 0);n.Z=o},4694:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var o=t(2122),r=t(9756),i=(t(7294),t(3905)),a=(t(5064),t(8215),t(4996)),l=["components"],c={title:"Replace Pod"},d="Replacing Pods for Development",s={unversionedId:"config/config-dev-devcontainer",id:"config/config-dev-devcontainer",isDocsHomePage:!1,title:"Replace Pod",description:"When entering the DevMode (development mode), Nocalhost will exchange an already running or just deployed Pod with a modified version. When entering DevMode, Nocalhost will do the following before all other services such as port-forwarding and file sync.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/config/config-dev-devcontainer.md",sourceDirName:"config",slug:"/config/config-dev-devcontainer",permalink:"/zh-CN/docs/config/config-dev-devcontainer",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",tags:[],version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629806685,formattedLastUpdatedAt:"2021/8/24",frontMatter:{title:"Replace Pod"},sidebar:"docs",previous:{title:"sync",permalink:"/zh-CN/docs/config/config-dev-sync"},next:{title:"Kubernetes Compatibility",permalink:"/zh-CN/docs/practice/cloud/k8s-compatible"}},u=[{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Advices for Making DevImage",id:"advices-for-making-devimage",children:[]}],p={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"replacing-pods-for-development"},"Replacing Pods for Development"),(0,i.kt)("p",null,"When entering the DevMode (development mode), Nocalhost will exchange an already running or just deployed Pod with a modified version. When entering DevMode, Nocalhost will do the following before all other services such as port-forwarding and file sync."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Replace the target container's image with the development image according to ",(0,i.kt)("a",{parentName:"li",href:"./config-dev#devimage"},(0,i.kt)("inlineCode",{parentName:"a"},"dev.image"))," section."),(0,i.kt)("li",{parentName:"ol"},"Change this container's name to ",(0,i.kt)("inlineCode",{parentName:"li"},"nocalhost-dev"),". This container is called ",(0,i.kt)("inlineCode",{parentName:"li"},"Development Container\uff08DevContainer\uff09")),(0,i.kt)("li",{parentName:"ol"},"Replace the existing Pod to new Pod by ",(0,i.kt)("inlineCode",{parentName:"li"},"DevContainer"))),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,a.Z)("/img/develop/replace-pod-eng.gif"),width:"600"}),(0,i.kt)("figcaption",null,"Replace pods for development")),(0,i.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("p",null,"Each entry that you specify under ",(0,i.kt)("inlineCode",{parentName:"p"},"containers[*]")," will tell Nocalhost to search for containers within the specified Pod that should be replace with the given configuration. If Nocalhost finds a container to replace, it does ",(0,i.kt)("a",{parentName:"p",href:"./config-dev-workload"},"theses process")," according to workload type."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"This is an example configuration of our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nocalhost/bookinfo"},"bookinfo application")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: productpage\n  serviceType: deployment\n  dependLabelSelector: \n    jobs:\n      - "dep-job"\n  containers:\n    - name: productpage\n      install: \n        portForward:   \n          - 39080:9080\n      dev:\n        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-productpage.git\n        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.7.7-slim-productpage\n        shell: bash\n        workDir: /home/nocalhost-dev\n        command:\n          run:\n            - ./run.sh\n          debug:\n            - ./debug.sh\n        debug:\n          remoteDebugPort: 9009\n        sync: \n          type: send\n          filePattern: \n            - ./\n          ignoreFilePattern:\n            - ".git"\n            - ".github"\n            - ".idea"\n        portForward:\n        - 39080:9080\n')),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Multi Containers")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"ou can define multi containers in one configuration, according to the container's name. But you can only develop one at once."))),(0,i.kt)("h2",{id:"advices-for-making-devimage"},"Advices for Making DevImage"),(0,i.kt)("p",null,"You can use any Docker image to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"DevImage"),", as long as it containers the basic ",(0,i.kt)("inlineCode",{parentName:"p"},"shell (bin/sh)"),"."),(0,i.kt)("p",null,"However, it is strongly recommended to provide a dedicated DevImage of a specific technology stack. A good ",(0,i.kt)("inlineCode",{parentName:"p"},"DevImage")," should:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provide easy-to-use shells, such as: ",(0,i.kt)("inlineCode",{parentName:"li"},"bash"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"zsh"),", etc."),(0,i.kt)("li",{parentName:"ul"},"Provide the basic SDK needed to build source code, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"JDK")),(0,i.kt)("li",{parentName:"ul"},"Provide tool chains needed to build source code, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"git"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"maven"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"make"),", etc."),(0,i.kt)("li",{parentName:"ul"},"Provide third-party dependency packages or automatic download configuration required to build source code, such as Maven mirror source"),(0,i.kt)("li",{parentName:"ul"},"Provide other debugging tools needed in the development process, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"gdb"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"curl"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"tcpdump"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql-client"),", etc."),(0,i.kt)("li",{parentName:"ul"},"Do not include the source code of the service (the source code should be checked out locally through the source code management system and synchronized to the DevContainer.)")))}m.isMDXComponent=!0}}]);