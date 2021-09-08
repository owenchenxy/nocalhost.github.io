"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[3489],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return i}});var r=n(2263),o=n(3919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,l=void 0!==i&&i,c=a.absolute,d=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return d?e+s:s}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7294),o=n(9443);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_1uMI",c="tabItemActive_2DSg";var d=function(e){var t,n=e.lazy,o=e.block,d=e.defaultValue,s=e.values,p=e.groupId,u=e.className,f=r.Children.toArray(e.children),m=null!=s?s:f.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=d?d:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value,v=a(),h=v.tabGroupChoices,w=v.setTabGroupChoices,k=(0,r.useState)(g),y=k[0],N=k[1],b=[];if(null!=p){var C=h[p];null!=C&&C!==y&&m.some((function(e){return e.value===C}))&&N(C)}var O=function(e){var t=e.currentTarget,n=b.indexOf(t),r=m[n].value;N(r),null!=p&&(w(p,r),setTimeout((function(){var e,n,r,o,a,i,l,d;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,l=i.innerHeight,d=i.innerWidth,n>=0&&a<=d&&o<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=b.indexOf(e.target)+1;n=b[r]||b[0];break;case"ArrowLeft":var o=b.indexOf(e.target)-1;n=b[o]||b[b.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},u)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:P,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,r.cloneElement)(f.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},1789:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return f},default:function(){return g}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=n(5064),l=n(8215),c=n(4996),d=["components"],s={title:"port-forwarding"},p="Configure Port-Forwarding",u={unversionedId:"config/config-dev-portforward",id:"config/config-dev-portforward",isDocsHomePage:!1,title:"port-forwarding",description:"Port-forwarding allows you to access your application on localhost:[PORT] by forwarding the network traffic from a localhost port to a specified port of a container.",source:"@site/docs/config/config-dev-portforward.md",sourceDirName:"config",slug:"/config/config-dev-portforward",permalink:"/docs/config/config-dev-portforward",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/config/config-dev-portforward.md",tags:[],version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1630390667,formattedLastUpdatedAt:"8/31/2021",frontMatter:{title:"port-forwarding"},sidebar:"docs",previous:{title:"workloads",permalink:"/docs/config/config-dev-workload"},next:{title:"sync",permalink:"/docs/config/config-dev-sync"}},f=[{value:"Modifying the Configuration",id:"modifying-the-configuration",children:[{value:"1. Open Nocalhost development configuration",id:"1-open-nocalhost-development-configuration",children:[]},{value:"2. Modify <code>containers[*].dev.portForward</code> section",id:"2-modify-containersdevportforward-section",children:[]}]},{value:"Using IDE Plugin",id:"using-ide-plugin",children:[]}],m={toc:f};function g(e){var t=e.components,n=(0,o.Z)(e,d);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configure-port-forwarding"},"Configure Port-Forwarding"),(0,a.kt)("p",null,"Port-forwarding allows you to access your application on ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:[PORT]")," by forwarding the network traffic from a localhost port to a specified port of a container."),(0,a.kt)("p",null,"There are two ways to configure your port-forwarding for development mode. You can either configure it by ",(0,a.kt)("a",{parentName:"p",href:"#modifying-the-configuration"},"modifying the configuration")," or ",(0,a.kt)("a",{parentName:"p",href:"#using-ide-plugin"},"using the IDE plugin"),"."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"effect")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you change the configuration ",(0,a.kt)("strong",{parentName:"p"},"after")," entering development mode. The new configuration will only take effect next time you entering development mode. "))),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"listening")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Nocalhost will listen to the ",(0,a.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," in the local machine and apply the port-forwarding, not the ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),". "))),(0,a.kt)("h2",{id:"modifying-the-configuration"},"Modifying the Configuration"),(0,a.kt)("h3",{id:"1-open-nocalhost-development-configuration"},"1. Open Nocalhost development configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"JetBrains:")," right-click the workload and select the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Dev Config"))," to open the configuration"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"VS Code:")," select the workload and click the ",(0,a.kt)("img",{src:(0,c.Z)("/img/icons/setting-normal.svg"),width:"20"})," icon to open the configuration")),(0,a.kt)("h3",{id:"2-modify-containersdevportforward-section"},"2. Modify ",(0,a.kt)("inlineCode",{parentName:"h3"},"containers[*].dev.portForward")," section"),(0,a.kt)("p",null,"Type the ports you want to forward by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Local Port>:<Remote Port>")," format."),(0,a.kt)("p",null,"When entering the development mode, Nocalhost iterates over every item the ",(0,a.kt)("inlineCode",{parentName:"p"},".dev[*].portForward")," array defined in the configuration and starts port-forwarding for each of the entries and the port mappings they configured in the ",(0,a.kt)("inlineCode",{parentName:"p"},"portForward")," section."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{10-12}","{10-12}":!0},'name: productpage\nserviceType: deployment\ncontainers:\n  - name: ""\n    dev:\n      gitUrl: ""\n      image: ""\n      shell: ""\n      workDir: /home/nocalhost-dev\n      portForward: \n        - 39080:9080 \n        - 39580:9090\n')),(0,a.kt)("h2",{id:"using-ide-plugin"},"Using IDE Plugin"),(0,a.kt)("p",null,"You can easily configure the port-forwarding for a specific container within the Nocalhost IDE plugin."),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Working Mode")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Port-forwarding set in different modes only corresponds to the current mode only."),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Set port-forwarding before entering development mode")," - Nocalhost will apply the port-forwarding to the existing running container."),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Set port-forwarding after entering development mode")," - Nocalhost will apply the port-forwarding to the  development container"))),(0,a.kt)(i.Z,{defaultValue:"vs-port",values:[{label:"Configure Port-Forwarding in VS Code",value:"vs-port"},{label:"Configure Port-Forwarding in JetBrains",value:"jb-port"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"vs-port",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Start Port-Forwarding")),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,c.Z)("/img/develop/vs-port-forward.gif")}),(0,a.kt)("figcaption",null,"Start port-forwarding in VS Code")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Stop Port-Forwarding")),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,c.Z)("/img/develop/vs-stop-port-forward.gif")}),(0,a.kt)("figcaption",null,"Start port-forwarding in VS Code"))),(0,a.kt)(l.Z,{value:"jb-port",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Start Port-Forwarding")),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,c.Z)("/img/develop/jb-port-forward.gif")}),(0,a.kt)("figcaption",null,"Start port-forwarding in JetBrains")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Stop Port-Forwarding")),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,c.Z)("/img/develop/jb-stop-port-forward.gif")}),(0,a.kt)("figcaption",null,"Start port-forwarding in JetBrains")))))}g.isMDXComponent=!0}}]);