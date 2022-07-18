"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[6050,7078],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,p=c["".concat(u,".").concat(m)]||c[m]||g[m]||o;return n?a.createElement(p,i(i({ref:t},d),{},{components:n})):a.createElement(p,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},13919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},44996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var a=n(52263),r=n(13919);function o(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,l=void 0!==i&&i,u=o.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+d:d}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},41395:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(67294),r=n(80944),o=n(86010),i="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,s=39;var d=function(e){var t=e.lazy,n=e.block,d=e.defaultValue,g=e.values,c=e.groupId,m=e.className,p=(0,r.Z)(),b=p.tabGroupChoices,f=p.setTabGroupChoices,k=(0,a.useState)(d),h=k[0],v=k[1],y=a.Children.toArray(e.children),N=[];if(null!=c){var w=b[c];null!=w&&w!==h&&g.some((function(e){return e.value===w}))&&v(w)}var D=function(e){var t=e.currentTarget,n=N.indexOf(t),a=g[n].value;v(a),null!=c&&(f(c,a),setTimeout((function(){var e,n,a,r,o,i,u,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,u=i.innerHeight,s=i.innerWidth,n>=0&&o<=s&&r<=u&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case s:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case u:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},g.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:C,onFocus:D,onClick:D},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},80944:function(e,t,n){var a=n(67294),r=n(79443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},26400:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},metadata:function(){return g},toc:function(){return c},default:function(){return p}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=n(41395),l=n(58215),u=n(44996),s=["components"],d={},g={unversionedId:"guides/debug/_debug-configuration",id:"guides/debug/_debug-configuration",isDocsHomePage:!1,title:"_debug-configuration",description:"Configuration",source:"@site/docs/guides/debug/_debug-configuration.md",sourceDirName:"guides/debug",slug:"/guides/debug/_debug-configuration",permalink:"/docs/guides/debug/_debug-configuration",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/guides/debug/_debug-configuration.md",version:"current",lastUpdatedBy:"Tank Xu",lastUpdatedAt:1658114478,formattedLastUpdatedAt:"7/18/2022",frontMatter:{}},c=[{value:"Configuration",id:"configuration",children:[{value:"Sample Configuration",id:"sample-configuration",children:[]}]}],m={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The development environment is different between developers. You should configure remote debug configurations according to the actual situation."),(0,o.kt)("h3",{id:"sample-configuration"},"Sample Configuration"),(0,o.kt)(i.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Go",value:"go"},{label:"PHP",value:"php"},{label:"Node.js",value:"node"},{label:"Ruby",value:"ruby"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{8,11} title="Nocalhost Configs"',"{8,11}":!0,title:'"Nocalhost','Configs"':!0},'name: java-remote-debugging\nserviceType: deployment\ncontainers:\n  - name: ""\n    dev:\n        ...\n        command:\n          debug:\n            - ./debug.sh\n        debug:\n          remoteDebugPort: 5005\n        ...\n')),(0,o.kt)("h4",{id:"maven-example"},"Maven Example"),(0,o.kt)("p",null,"The shell command for ",(0,o.kt)("strong",{parentName:"p"},"Maven")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="jdk >= 1.8 and springBoot >=2.2.1.RELEASE"',title:'"jdk',">":'2.2.1.RELEASE"',1.8:!0,and:!0,springBoot:!0},' mvn spring-boot:run -Dspring-boot.run.jvmArguments="-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=y,address=5005"\n')),(0,o.kt)("p",null,"For jdk <=1.7 you should replace ",(0,o.kt)("inlineCode",{parentName:"p"},"-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=y,address=5005")),(0,o.kt)("p",null,"For lower version of the springBoot you should replace ",(0,o.kt)("inlineCode",{parentName:"p"},"-Drun.jvmArguments")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"-Dspring-boot.run.jvmArguments")),(0,o.kt)("h4",{id:"gradle-example"},"Gradle Example"),(0,o.kt)("p",null,"The startup command for ",(0,o.kt)("strong",{parentName:"p"},"Gradle")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Gradle\'s debug.sh"',title:"\"Gradle's",'debug.sh"':!0},"./gradlew bootRun --debug-jvm --no-daemon\n"))),(0,o.kt)(l.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{8,11} title="Nocalhost Configs"',"{8,11}":!0,title:'"Nocalhost','Configs"':!0},'name: python-remote-debugging\nserviceType: deployment\ncontainers:\n  - name: ""\n    dev:\n        ...\n        command:\n          debug:\n            - ./debug.sh\n        debug:\n          remoteDebugPort: 9009\n        ...\n')),(0,o.kt)(i.Z,{defaultValue:n.name,values:[{label:"VSCode",value:"vscode"},{label:"Jetbrains",value:"jetbrains"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"jetbrains",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="debug.sh"',title:'"debug.sh"'},"#! /bin/sh\n\npip3 install --no-cache-dir -r ./requirements.txt\n\nexport DEBUG_DEV=0\nexport FLASK_DEBUG=0\nexport FLASK_ENV=development\n\nflask run --host=0.0.0.0 --port=9999\n"))),(0,o.kt)(l.Z,{value:"vscode",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="debug.sh"',title:'"debug.sh"'},"#! /bin/sh\n\npip3 install --no-cache-dir -r ./requirements.txt\n\npython -m debugpy --listen 9009 --wait-for-client productpage.py 9080\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How does it Works?")),(0,o.kt)("p",null,"Nocalhost using pydevd to debug Python application."),(0,o.kt)("figure",{className:"img-frame"},(0,o.kt)("img",{className:"gif-img",src:(0,u.Z)("/img/debug/python-debug.jpg")}),(0,o.kt)("figcaption",null,"Principle of Remote Python Debugging"))),(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{8,11} title="Nocalhost Configs"',"{8,11}":!0,title:'"Nocalhost','Configs"':!0},'name: go-remote-debugging\nserviceType: deployment\ncontainers:\n  - name: ""\n    dev:\n        ...\n        command:\n          debug:\n            - ./debug.sh\n        debug:\n          remoteDebugPort: 9009\n        ...\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="debug.sh"',title:'"debug.sh"'},"#! /bin/sh\n\nexport GOPROXY=https://goproxy.cn\ndlv --headless --log --listen :9009 --api-version 2 --accept-multiclient debug app.go\n"))),(0,o.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{8,11} title="Nocalhost Configs"',"{8,11}":!0,title:'"Nocalhost','Configs"':!0},'name: php-remote-debugging\nserviceType: deployment\ncontainers:\n  - name: ""\n    dev:\n        ...\n        command:\n          debug:\n            - ./debug.sh\n        debug:\n          remoteDebugPort: 9003\n        ...\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="debug.sh"',title:'"debug.sh"'},"#\uff01/bin/sh\n\nphp -t ./ -S 0.0.0.0:9999;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How does it works?")),(0,o.kt)("p",null,"Nocalhost using Xdebug to debug PHP applications."),(0,o.kt)("figure",{className:"img-frame"},(0,o.kt)("img",{className:"gif-img",src:(0,u.Z)("/img/debug/php-debug.jpg")}),(0,o.kt)("figcaption",null,"Principle of Remote PHP Debugging"))),(0,o.kt)(l.Z,{value:"node",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{8,11} title="Nocalhost Configs"',"{8,11}":!0,title:'"Nocalhost','Configs"':!0},'name: nodejs-remote-debugging\nserviceType: deployment\ncontainers:\n  - name: ""\n    dev:\n        ...\n        command:\n          debug:\n            - ./debug.sh\n        debug:\n          remoteDebugPort: 9229\n        ...\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="debug.sh"',title:'"debug.sh"'},"#\uff01/bin/sh\n\nnpm install\nnode --inspect=0.0.0.0:9229 ./index.js\n"))),(0,o.kt)(l.Z,{value:"ruby",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{8,11} title="Nocalhost Configs"',"{8,11}":!0,title:'"Nocalhost','Configs"':!0},'name: nodejs-remote-debugging\nserviceType: deployment\ncontainers:\n  - name: ""\n    dev:\n        ...\n        command:\n          debug:\n            - ./debug.sh\n        debug:\n          remoteDebugPort: 9001\n        ...\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="debug.sh"',title:'"debug.sh"'},"#\uff01/bin/sh\n\nrdebug-ide -h 0.0.0.0 -p 9001 -- details.rb 9080\n")))))}p.isMDXComponent=!0},20803:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return g},default:function(){return m}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=(n(41395),n(58215),n(44996)),l=n(26400),u=["components"],s={title:"Jetbrains"},d={unversionedId:"guides/debug/jetbrains-debug",id:"guides/debug/jetbrains-debug",isDocsHomePage:!1,title:"Jetbrains Remote Debugging",description:"Supported IDEs",source:"@site/docs/guides/debug/jetbrains-debug.mdx",sourceDirName:"guides/debug",slug:"/guides/debug/jetbrains-debug",permalink:"/docs/guides/debug/jetbrains-debug",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/guides/debug/jetbrains-debug.mdx",version:"current",lastUpdatedBy:"Tank Xu",lastUpdatedAt:1658114478,formattedLastUpdatedAt:"7/18/2022",frontMatter:{title:"Jetbrains"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/guides/debug/overview"},next:{title:"VSCode Remote Debugging",permalink:"/docs/guides/debug/vscode-debug"}},g=[{value:"Supported IDEs",id:"supported-ides",children:[]},{value:"Debugging Process",id:"debugging-process",children:[{value:"Debugging Configurations in IDE",id:"debugging-configurations-in-ide",children:[]}]}],c={toc:g};function m(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"supported-ides"},"Supported IDEs"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Language"),(0,o.kt)("th",null,"IDE"),(0,o.kt)("th",null,"Edition"),(0,o.kt)("th",null,"Required Plugin")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Java"),(0,o.kt)("td",null,"IntelliJ IDEA"),(0,o.kt)("td",null,"Ultimate"),(0,o.kt)("td",null,"N/A")),(0,o.kt)("tr",null,(0,o.kt)("td",{rowSpan:"2"},"Go"),(0,o.kt)("td",null,"IntelliJ IDEA"),(0,o.kt)("td",null,"Ultimate"),(0,o.kt)("td",null,"Go plugin")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"GoLand"),(0,o.kt)("td",null,"Professional"),(0,o.kt)("td",null,"N/A")),(0,o.kt)("tr",null,(0,o.kt)("td",{rowSpan:"2"},"Python"),(0,o.kt)("td",null,"IntelliJ IDEA"),(0,o.kt)("td",null,"Ultimate"),(0,o.kt)("td",null,"Python plugin")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"PyCharm"),(0,o.kt)("td",null,"Professional"),(0,o.kt)("td",null,"N/A")),(0,o.kt)("tr",null,(0,o.kt)("td",{rowSpan:"2"},"PHP"),(0,o.kt)("td",null,"IntelliJ IDEA"),(0,o.kt)("td",null,"Ultimate"),(0,o.kt)("td",null,"PHP plugin")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"PHPStorm"),(0,o.kt)("td",null,"Professional"),(0,o.kt)("td",null,"N/A")),(0,o.kt)("tr",null,(0,o.kt)("td",{rowSpan:"2"},"Node.js"),(0,o.kt)("td",null,"IntelliJ IDEA"),(0,o.kt)("td",null,"Ultimate"),(0,o.kt)("td",null,"Node.js plugin")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"WebStrom"),(0,o.kt)("td",null,"Professional"),(0,o.kt)("td",null,"N/A")))),(0,o.kt)("h2",{id:"debugging-process"},"Debugging Process"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the workload that you want to debug"),(0,o.kt)("li",{parentName:"ol"},"Right-click the workload and select ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Dev Config")),", ",(0,o.kt)("a",{parentName:"li",href:"#configuration"},"configure your debugging configuration")),(0,o.kt)("li",{parentName:"ol"},"Then right-click this workload again and select ",(0,o.kt)("strong",{parentName:"li"},"Remote Debug")),(0,o.kt)("li",{parentName:"ol"},"Nocalhost will automatically enter the ",(0,o.kt)("inlineCode",{parentName:"li"},"DevMode")," and start remote debugging")),(0,o.kt)("iframe",{width:"100%",height:"600",src:"//player.bilibili.com/player.html?aid=378208000&bvid=BV12f4y1w7EX&cid=415232277&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," "),(0,o.kt)("h3",{id:"debugging-configurations-in-ide"},"Debugging Configurations in IDE"),(0,o.kt)("p",null,"Before entering debug mode, if you do not have a Nocalhost IDE debug configuration under an existing workload, Nocalhost will create a new IDE debug configuration according to your ",(0,o.kt)("a",{parentName:"p",href:"#configuration"},"Nocalhost configuration"),". Different IDE has different configuration names and templates."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Multi Configs")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you already have a Nocalhost IDE debug configuration under the existing workload, Nocalhost will use the first one to start debugging. You can change the order in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Run/Debug Configurations")," window within IDE."),(0,o.kt)("figure",{className:"img-frame"},(0,o.kt)("img",{className:"gif-img",src:(0,i.Z)("/img/debug/debug-configs.png")}),(0,o.kt)("figcaption",null,"Nocalhost debugging configurations in IDE")))),(0,o.kt)(l.default,{name:"jetbrains",mdxType:"Configuration"}))}m.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);