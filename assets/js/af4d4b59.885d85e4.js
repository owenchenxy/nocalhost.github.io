"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[2492],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13919:function(e,t,n){function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return r}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return a}});var o=n(52263),r=n(13919);function i(){var e=(0,o.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var i=void 0===o?{}:o,a=i.forcePrependBaseUrl,l=void 0!==a&&a,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+d:d}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},58215:function(e,t,n){var o=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},41395:function(e,t,n){n.d(t,{Z:function(){return d}});var o=n(67294),r=n(80944),i=n(86010),a="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,s=39;var d=function(e){var t=e.lazy,n=e.block,d=e.defaultValue,u=e.values,p=e.groupId,h=e.className,m=(0,r.Z)(),f=m.tabGroupChoices,v=m.setTabGroupChoices,b=(0,o.useState)(d),g=b[0],k=b[1],w=o.Children.toArray(e.children),y=[];if(null!=p){var D=f[p];null!=D&&D!==g&&u.some((function(e){return e.value===D}))&&k(D)}var N=function(e){var t=e.currentTarget,n=y.indexOf(t),o=u[n].value;k(o),null!=p&&(v(p,o),setTimeout((function(){var e,n,o,r,i,a,c,s;(e=t.getBoundingClientRect(),n=e.top,o=e.left,r=e.bottom,i=e.right,a=window,c=a.innerHeight,s=a.innerWidth,n>=0&&i<=s&&r<=c&&o>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case s:var o=y.indexOf(e.target)+1;n=y[o]||y[0];break;case c:var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},h)},u.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",a,{"tabs__item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:C,onFocus:N,onClick:N},n)}))),t?(0,o.cloneElement)(w.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,n){var o=(0,n(67294).createContext)(void 0);t.Z=o},80944:function(e,t,n){var o=n(67294),r=n(79443);t.Z=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},23987:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var o=n(22122),r=n(19756),i=(n(67294),n(3905)),a=(n(41395),n(58215),n(44996),["components"]),l={title:"DevMode(Duplicate)"},c={unversionedId:"guides/develop-service-dup-en",id:"guides/develop-service-dup-en",isDocsHomePage:!1,title:"DevMode(Duplicate)",description:"Why Duplicate DevMode",source:"@site/docs/guides/develop-service-dup-en.md",sourceDirName:"guides",slug:"/guides/develop-service-dup-en",permalink:"/docs/guides/develop-service-dup-en",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/guides/develop-service-dup-en.md",version:"current",lastUpdatedBy:"Tank Xu",lastUpdatedAt:1658114478,formattedLastUpdatedAt:"7/18/2022",frontMatter:{title:"DevMode(Duplicate)"},sidebar:"docs",previous:{title:"DevMode(Replace)",permalink:"/docs/guides/develop-service-replace-en"},next:{title:"CustomResources",permalink:"/docs/guides/develop-service-crd-en"}},s=[{value:"<strong>Why Duplicate DevMode</strong>",id:"why-duplicate-devmode",children:[]},{value:"How it works",id:"how-it-works",children:[]},{value:"How to use",id:"how-to-use",children:[]},{value:"FAQ",id:"faq",children:[]}],d={toc:s};function u(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"why-duplicate-devmode"},(0,i.kt)("strong",{parentName:"h3"},"Why Duplicate DevMode")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Replace DevMode")," is the default development mode of Nocalhost. When developing a workload, the container image of the original workload will be replaced with the development image. As shown below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(22724).Z})),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"Replace DevMode")," can well maintain the original call relations between services and transfer the traffic of other services in the cluster to the service being developed. However, there are also some shortcomings:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1.")," It may destroy the original environment. The problems in the service being developed may cause problems to the whole environment.",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"2.")," It may affect the normal use of the environment by other team members. Other members may only want to access the normal environment rather than the development environment.",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"3.")," Multiple team members cannot develop the same service in the same K8s cluster at the same time."),(0,i.kt)("p",null,"To solve these problems, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"Duplicate DevMode"),"."),(0,i.kt)("h3",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"Duplicate DevMode"),", instead of modifying the original workload, Nocalhost creates a duplicate of the original workload and further develops on it.  ",(0,i.kt)("inlineCode",{parentName:"p"},"Duplicate DevMode")," can be run on different devices to create the duplicate of the workload for development at the same time. Nocalhost will mark the device ID on the duplicate to identify which device is developing which duplicate. (Note that the device ID is automatically generated by Nocalhost and invisible to all users. Different devices will not have the same ID). Moreover, the duplicates will not affect each other. As shown below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(48601).Z})),(0,i.kt)("p",null,"The duplicate and the pod managed by it will use different labels from the original workload, so it will not receive any traffic that wants to access the original workload. The reason for doing so is that ",(0,i.kt)("inlineCode",{parentName:"p"},"Duplicate DevMode")," enables you to enter the development mode on many devices, which is different from  ",(0,i.kt)("inlineCode",{parentName:"p"},"Replace DevMode"),", so if both the duplicate and the original workload can receive the online traffic, we cannot know which duplicate is being used and the result of accessing the environment will be unpredictable."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If the microservice application uses a third-party service discovery component (such as NACOS) instead of K8s Service, it is still possible that other services in the cluster access the duplicates created by ",(0,i.kt)("inlineCode",{parentName:"p"},"Duplicate Mode"),".  That also makes the result of accessing the environment unpredictable. In this case, you need to decide whether to register the service in the duplicate to the registration center.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Duplicate Mode")," and  ",(0,i.kt)("inlineCode",{parentName:"p"},"Replace Mode")," can be run in different devices in the same time, but you can only choose one for development on one device."),(0,i.kt)("p",null,"When we need to access the service being developed in the duplicate, we can forward the local port to the target port of the remote service by the port forwarding function of Nocalhost. Then  the service can be accessed locally through ",(0,i.kt)("inlineCode",{parentName:"p"},"lcoalhost:[local port]"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The created duplicate is invisible to users, so it will not be displayed in the workload list of VS Code and Jetbrains")),(0,i.kt)("h3",{id:"how-to-use"},"How to use"),(0,i.kt)("p",null,"Right-click ",(0,i.kt)("inlineCode",{parentName:"p"},"Start DevMode(duplicate)")," on the Jetbrains and VS Code extension to enter  ",(0,i.kt)("inlineCode",{parentName:"p"},"Duplicate DevMode"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(98932).Z})),(0,i.kt)("p",null,"Enter  ",(0,i.kt)("inlineCode",{parentName:"p"},"Duplicate DevMode")," and you will see the corresponding icon of the workload, indicating that the workload is in ",(0,i.kt)("inlineCode",{parentName:"p"},"Duplicate DevMode"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(34110).Z})),(0,i.kt)("p",null,"Other operations in ",(0,i.kt)("inlineCode",{parentName:"p"},"Duplicate DevMode")," are the same as the default development mode."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Just like in the default development mode, if you need to access the service being developed through the local port, right-click  ",(0,i.kt)("inlineCode",{parentName:"p"},"Port Forward"),"  to use the port forwarding function of Nocalhost.")),(0,i.kt)("h3",{id:"faq"},"FAQ"),(0,i.kt)("h4",{id:""}),(0,i.kt)("h4",{id:"since-the-traffic-from-other-services-will-not-be-received-in-duplicate-mode--whats-the-difference-between-it-and-running-and-developing-the-program-locally"},"Since the traffic from other services will not be received in ",(0,i.kt)("inlineCode",{parentName:"h4"},"Duplicate Mode")," , what's the difference between it and running and developing the program locally?"),(0,i.kt)("p",null,"Running the program locally might need to import many environment variables. Especially if the workload needs other K8s resources in the cluster, such as (configmap / secrets), it will be more complicated to deal with."),(0,i.kt)("p",null,"Because the local programs is in a different network from the cluster, some specific configurations are required to access other services in the cluster (such as mysql, redis, etc.). Although the duplicate created by  ",(0,i.kt)("inlineCode",{parentName:"p"},"Duplicate Mode")," cannot be accessed by other services, it can directly access other services in the cluster."),(0,i.kt)("p",null,"In addition, developing the program in the container can maintain good consistency with the production environment."),(0,i.kt)("h4",{id:"is-there-a-limitation-on-the-number-of-duplicates"},"Is there a limitation on the number of duplicates?"),(0,i.kt)("p",null,"There is no limitation on the number of duplicates in Nocalhost. Theoretically, ",(0,i.kt)("inlineCode",{parentName:"p"},"Duplicate Mode"),"  can be run on any number of devices to create their own duplicates for development. However, it may be limited by cluster resources in real scenarios."))}u.isMDXComponent=!0},86010:function(e,t,n){function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},34110:function(e,t,n){t.Z=n.p+"assets/images/duplicate-devmode-status-b75668d7e5f150495ae70998cbdbd8d5.png"},48601:function(e,t,n){t.Z=n.p+"assets/images/duplicate-devmode-492a6c1b5e0eda3fbe63ecfad4d58046.jpg"},22724:function(e,t,n){t.Z=n.p+"assets/images/replace-devmode-1c42cdf49b3be92992c5ea0114e9dc9b.jpg"},98932:function(e,t,n){t.Z=n.p+"assets/images/start-duplicate-devmode-c9c4ebc2bca8495f7f9b3560ac363b12.png"}}]);