"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[2357],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=i,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return t?a.createElement(h,r(r({ref:n},c),{},{components:t})):a.createElement(h,r({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(7294),i=t(9443);var o=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=t(6010),l="tabItem_1uMI",p="tabItemActive_2DSg";var s=37,c=39;var m=function(e){var n=e.lazy,t=e.block,i=e.defaultValue,m=e.values,d=e.groupId,u=e.className,h=o(),f=h.tabGroupChoices,k=h.setTabGroupChoices,v=(0,a.useState)(i),g=v[0],N=v[1],y=a.Children.toArray(e.children),w=[];if(null!=d){var b=f[d];null!=b&&b!==g&&m.some((function(e){return e.value===b}))&&N(b)}var C=function(e){var n=e.currentTarget,t=w.indexOf(n),a=m[t].value;N(a),null!=d&&(k(d,a),setTimeout((function(){var e,t,a,i,o,r,l,s;(e=n.getBoundingClientRect(),t=e.top,a=e.left,i=e.bottom,o=e.right,r=window,l=r.innerHeight,s=r.innerWidth,t>=0&&o<=s&&i<=l&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(p),setTimeout((function(){return n.classList.remove(p)}),2e3))}),150))},x=function(e){var n,t;switch(e.keyCode){case c:var a=w.indexOf(e.target)+1;t=w[a]||w[0];break;case s:var i=w.indexOf(e.target)-1;t=w[i]||w[w.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},u)},m.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:g===n?0:-1,"aria-selected":g===n,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":g===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:C,onClick:C},t)}))),n?(0,a.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==g})}))))}},9443:function(e,n,t){var a=(0,t(7294).createContext)(void 0);n.Z=a},278:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return h}});var a=t(2122),i=t(9756),o=(t(7294),t(3905)),r=t(5064),l=t(8215),p=["components"],s={title:"\u57fa\u7840\u914d\u7f6e"},c="\u914d\u7f6e\u5e94\u7528\u90e8\u7f72",m={unversionedId:"config/config-deploy",id:"config/config-deploy",isDocsHomePage:!1,title:"\u57fa\u7840\u914d\u7f6e",description:"\u60a8\u53ef\u4ee5\u914d\u7f6e\u5339\u914d\u7c7b\u578b\u7684\u90e8\u7f72\u65b9\u5f0f\uff0c\u7136\u540e\u4f7f\u7528 Nocalhost IDE \u63d2\u4ef6\u5728 Kubernetes \u4e2d\u90e8\u7f72\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u3002 Nocalhost \u652f\u6301\u4f7f\u7528\u4ee5\u4e0b\u7c7b\u578b\u6765\u5b89\u88c5\u5e94\u7528\u7a0b\u5e8f\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/config/config-deploy.md",sourceDirName:"config",slug:"/config/config-deploy",permalink:"/zh-CN/docs/config/config-deploy",editUrl:"https://github.com/neaped/nh-docs/docs/config/config-deploy.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1628880717,formattedLastUpdatedAt:"8/13/2021",frontMatter:{title:"\u57fa\u7840\u914d\u7f6e"},sidebar:"docs",previous:{title:"\u914d\u7f6e\u53c2\u8003",permalink:"/zh-CN/docs/config/config-ref"},next:{title:"helm",permalink:"/zh-CN/docs/config/config-deploy-helm"}},d=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u5fc5\u8981\u914d\u7f6e\u9879",id:"\u5fc5\u8981\u914d\u7f6e\u9879",children:[{value:"\u5e94\u7528\u540d\u79f0",id:"\u5e94\u7528\u540d\u79f0",children:[]},{value:"Manifest Type",id:"manifest-type",children:[]},{value:"Resource Path",id:"resource-path",children:[]},{value:"Example: Configure resource path for the corresponding type",id:"example-configure-resource-path-for-the-corresponding-type",children:[]}]},{value:"Advanced Configurations",id:"advanced-configurations",children:[{value:"Ignored Path",id:"ignored-path",children:[]},{value:"Inject Environment Variable to Workloads",id:"inject-environment-variable-to-workloads",children:[]},{value:"Run Jobs Before Installing the Application",id:"run-jobs-before-installing-the-application",children:[]}]},{value:"Configure Workload Deployments",id:"configure-workload-deployments",children:[{value:"Example",id:"example",children:[]},{value:"Workload Name",id:"workload-name",children:[]},{value:"Service Type",id:"service-type",children:[]},{value:"Manage Start Dependency",id:"manage-start-dependency",children:[]}]},{value:"Configure Container Deployments",id:"configure-container-deployments",children:[{value:"Example",id:"example-1",children:[]},{value:"Container name",id:"container-name",children:[]},{value:"Inject Environment Variable to Containers",id:"inject-environment-variable-to-containers",children:[]},{value:"Setting up Port-Forwarding for Container",id:"setting-up-port-forwarding-for-container",children:[]}]}],u={toc:d};function h(e){var n=e.components,t=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u914d\u7f6e\u5e94\u7528\u90e8\u7f72"},"\u914d\u7f6e\u5e94\u7528\u90e8\u7f72"),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u914d\u7f6e\u5339\u914d\u7c7b\u578b\u7684\u90e8\u7f72\u65b9\u5f0f\uff0c\u7136\u540e\u4f7f\u7528 Nocalhost IDE \u63d2\u4ef6\u5728 Kubernetes \u4e2d\u90e8\u7f72\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u3002 Nocalhost \u652f\u6301\u4f7f\u7528\u4ee5\u4e0b\u7c7b\u578b\u6765\u5b89\u88c5\u5e94\u7528\u7a0b\u5e8f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Manifest"),(0,o.kt)("li",{parentName:"ul"},"Helm"),(0,o.kt)("li",{parentName:"ul"},"Kustomize")),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,"\u5e94\u7528\u7a0b\u5e8f\u90e8\u7f72\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"application")," \u90e8\u5206\u914d\u7f6e\u3002"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Config.yaml")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cNocalhost ",(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u4f1a")," \u4e3a\u60a8\u521b\u5efa\u8fd9\u4e2a yaml \u6587\u4ef6\u3002 \u60a8\u9700\u8981\u5728\u5e94\u7528\u7684\u6839\u76ee\u5f55\u4e0b\u6dfb\u52a0\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},".nocalhost")," \u6587\u4ef6\u5939\uff0c\u5e76\u5728\u8be5\u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u6587\u4ef6\u3002"))),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)(r.Z,{defaultValue:"helm",values:[{label:"Helm Chart",value:"helm"},{label:"Manifest",value:"manifest"},{label:"Kustomizations",value:"kustom"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"helm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'configProperties:                       # struct    | required | Specify config properties\n    version: v2 \n\napplication:\n  name: bookinfo                        # string    | required | Application name\n  manifestType: helmGit                 # string    | required | Application k8s manifest type\n  resourcePath: ["charts/bookinfo"]     # string[]  | required | Set the application resource path\n  env:                                  # struct    | optional | Inject environment variable for all workload when installed\n    - name: DEBUG\n      value: ${DEBUG:-false}\n    - name: DOMAIN\n      value: ${DOMAIN:-coding.net}\n  services: ...                         # struct    | optional | Applications\' services configurations\n'))),(0,o.kt)(l.Z,{value:"manifest",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'configProperties:                       # struct    | required | Specify config properties\n    version: v2 \n\napplication:\n  name: bookinfo                        # string    | required | Application name                 \n  manifestType: rawManifestGit          # string    | required | Application k8s manifest type                           \n  resourcePath: ["manifest/templates"]  # string[]  | required | Set the application resource path                          \n  env:                                  # struct    | optional | Inject environment variable for all workload when installed                            \n    - name: DEBUG\n      value: ${DEBUG:-false}\n    - name: DOMAIN\n      value: ${DOMAIN:-coding.net}\n  services: ...                         # struct    | optional | Applications\' services configurations\n'))),(0,o.kt)(l.Z,{value:"kustom",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'configProperties:                       # struct    | required | Specify config properties\n    version: v2 \n\napplication:\n  name: bookinfo                        # string    | required | Application name\n  manifestType: kustomizeGit            # string    | required | Application k8s manifest type\n  resourcePath: ["kustomize/base"]      # string[]  | required | Set the application resource path\n  env:                                  # struct    | optional | Inject environment variable for all workload when installed                            \n    - name: DEBUG\n      value: ${DEBUG:-false}\n    - name: DOMAIN\n      value: ${DOMAIN:-coding.net}\n  services: ...                         # struct    | optional | Applications\' services configurations\n')))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u914d\u7f6e\u793a\u4f8bs")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u793a\u4f8b\u5e94\u7528\uff0c\u60a8\u53ef\u4ee5\u5728\u6211\u4eec\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nocalhost/bookinfo/tree/main/.nocalhost"},"Github Repo")," \u4e2d\u67e5\u770b\u6e90\u4ee3\u7801\u4e86\u89e3\u5b8c\u6574\u7684\u5e94\u7528\u914d\u7f6e\u3002 "))),(0,o.kt)("h2",{id:"\u5fc5\u8981\u914d\u7f6e\u9879"},"\u5fc5\u8981\u914d\u7f6e\u9879"),(0,o.kt)("h3",{id:"\u5e94\u7528\u540d\u79f0"},"\u5e94\u7528\u540d\u79f0"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"application[*].name # required")),(0,o.kt)("p",null,"Nocalhost \u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"\u552f\u4e00\u7684"),"\u5e94\u7528\u540d\u6807\u8bc6\u6765\u533a\u5206\u4e0d\u540c\u7684\u5e94\u7528\u7a0b\u5e8f\u3002 \u56e0\u6b64\uff0c\u60a8",(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u80fd"),"\u5728\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u4e2d\u90e8\u7f72\u4e24\u4e2a\u5177\u6709\u76f8\u540c\u540d\u79f0\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"application:\n  name: app-name\n")),(0,o.kt)("h3",{id:"manifest-type"},"Manifest Type"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"application[*].manifestType # required")),(0,o.kt)("p",null,"Nocalhost will chooses different deployment methods according to different ",(0,o.kt)("inlineCode",{parentName:"p"},"manifestType"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Supports Types:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"helmGit")," - Helm application in Git repository"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"helmRepo")," - Helm application in Helm repository"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"helmLocal")," - Helm application in local directory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rawManifestGit")," - Application with manifest yaml config in Git repository"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rawManifestLocal")," - Application with manifest yaml config in local directory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kustomizeGit")," - Application with manifest yaml config in Git repository"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kustomizeLocal")," - Application with manifest yaml config in local directory")),(0,o.kt)("h3",{id:"resource-path"},"Resource Path"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"application[*].resourcePath # required")),(0,o.kt)("p",null,"Set application source path, all files in this path will be sync to remote container in development mode. This config must correspond to ",(0,o.kt)("a",{parentName:"p",href:"#manifest-type"},(0,o.kt)("inlineCode",{parentName:"a"},"mainifestType")),", otherwise, this config will not take effect."),(0,o.kt)("h3",{id:"example-configure-resource-path-for-the-corresponding-type"},"Example: Configure resource path for the corresponding type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Corresponding Configs"',title:'"Corresponding','Configs"':!0},'// highlight-next-line\nmanifestType:   helmGit\nresourcePath:   ["<chart path: relative path of git repo root>"]\n\n// highlight-next-line\nmanifestType:   helmLocal\nresourcePath:   ["<chart path: relative path of local helm chart path>"]\n\n// highlight-next-line\nmanifestType:   rawManifestGit\nresourcePath:   ["<manifest files path: multi relative paths of git repo root>"]\n\n// highlight-next-line\nmanifestType:   rawManifestLocal\nresourcePath:   ["<manifest files path: multi relative paths of local application path>"]\n\n// highlight-next-line\nmanifestType:   kustomizeGit\nresourcePath:   ["<kustomize file path: relative path of git repo>"]\n\n// highlight-next-line\nmanifestType:   kustomizeLocal\nresourcePath:   ["<kustomize file path: multi relative paths of local application path>"]\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is the source path configuration at application level"))),(0,o.kt)("h2",{id:"advanced-configurations"},"Advanced Configurations"),(0,o.kt)("p",null,"Nocalhost provides some enhancements to application deployment. "),(0,o.kt)("h3",{id:"ignored-path"},"Ignored Path"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"application[*].ignoredPath # optional")),(0,o.kt)("p",null,"Nocalhost will ignore the files under this path during file synchronization. This config must correspond to ",(0,o.kt)("a",{parentName:"p",href:"#manifest-type"},(0,o.kt)("inlineCode",{parentName:"a"},"mainifestType")),", otherwise, this config will not take effect."),(0,o.kt)("h4",{id:"example-configure-ignored-path-for-the-corresponding-type"},"Example: Configure ignored path for the corresponding type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Corresponding Configs"',title:'"Corresponding','Configs"':!0},'// highlight-next-line\nmanifestType:   rawManifestGit\nresourcePath:   ["<ignored manifest files path: multi relative paths of git repo root>"]\n\n// highlight-next-line\nmanifestType:   rawManifestLocal\nresourcePath:   ["<ignored manifest files path: multi relative paths of local application path>"]\n\n// highlight-next-line\nmanifestType:   kustomizeGit\nresourcePath:   ["<ignored kustomize file path: relative path of git repo>"]\n\n// highlight-next-line\nmanifestType:   kustomizeLocal\nresourcePath:   ["<ignored kustomize file path: multi relative paths of local application path>"]\n')),(0,o.kt)("h3",{id:"inject-environment-variable-to-workloads"},"Inject Environment Variable to Workloads"),(0,o.kt)("p",null,"Nocalhost supports injecting the preset environment variables to all workloads when deploying an application. You can inject these variables by input the values or import the file."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"nocalhost-dep Needed")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You need to have ",(0,o.kt)("inlineCode",{parentName:"p"},"nocalhost-dep")," to install for this configuration to take effect. Please refer to ",(0,o.kt)("a",{parentName:"p",href:"../server/nh-dep"},"Nocalhost Dep")," for more details."))),(0,o.kt)("h4",{id:"example-setting-up-inject-environment-variable"},"Example: Setting up inject environment variable"),(0,o.kt)(r.Z,{defaultValue:"value",values:[{label:"Inject By Values",value:"value"},{label:"Inject By Files",value:"file"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"value",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"application[*].env # optional")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'application:\n  env: \n    - name: DEBUG\n      value: ${DEBUG:-true}\n    - name: DOMAIN\n      value: "www.coding.com"\n'))),(0,o.kt)(l.Z,{value:"file",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"application[*].envFrom # optional")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"application:\n  envFrom: \n    envFile: \n      - path: dev.env\n      - path: dev.env\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Explanation:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"These variables will be injected to all workloads when deploying"),(0,o.kt)("li",{parentName:"ul"},"These variables will take effect after the deployments occurs")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Duplicate Configs")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If both ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"envFrom")," configure at the same time, Nocalhost will merge the configurations, and the duplicate parts are subject to ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," configs."))),(0,o.kt)("h3",{id:"run-jobs-before-installing-the-application"},"Run Jobs Before Installing the Application"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"application[*].onPreInstall")),(0,o.kt)("p",null,"Nocalhost allows users to perform some additional operations before installing and deploying applications. "),(0,o.kt)("h4",{id:"example-setting-up-the-pre-install-jobs"},"Example: Setting up the pre-install Jobs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'onPreInstall:\n  - path: job-01.yaml       # string    | required | Job yaml file, the relative path of the repo root\n    weight: "1"             # integer   | optional | Order of execution of job, tThe smaller the value, the first to execute.\n  - path: job-02.yaml\n    weight: "-5"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Explanation:")),(0,o.kt)("p",null,"Nocalhost will wait for the completion of ",(0,o.kt)("inlineCode",{parentName:"p"},"job-01")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"job-02")," execution before deploying the application."),(0,o.kt)("h2",{id:"configure-workload-deployments"},"Configure Workload Deployments"),(0,o.kt)("p",null,"In addition to application deployment configuration, Nocalhost also can configure the workloads deployments."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"application:\n  ....\n\n  services:\n    - name: foo-workload-01                 # string    |  required  | Name of workload\n      serviceType: deployment               # string    |  required  | The Kubernetes Workloads type corresponding to this service\n      dependLabelSelector:                  # struct    |  optional  | Dependent label selector\n      containers: ...                       # struct    |  optional  | Container configurations\n\n    - name: foo-workload-02                \n      .....\n")),(0,o.kt)("h4",{id:"explanation"},"Explanation"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"services")," section in ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml")," is a map with keys representing the name of the workload and values representing the workload definition including ",(0,o.kt)("a",{parentName:"p",href:"#service-type"},(0,o.kt)("inlineCode",{parentName:"a"},"serviceType")),", ",(0,o.kt)("a",{parentName:"p",href:"#configure-container-deployments"},(0,o.kt)("inlineCode",{parentName:"a"},"container"))," etc. "),(0,o.kt)("h3",{id:"workload-name"},"Workload Name"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"services[*].name # required")),(0,o.kt)("p",null,"Same with the ",(0,o.kt)("a",{parentName:"p",href:"#application-name"},"application name"),", this is a ",(0,o.kt)("strong",{parentName:"p"},"unique")," name to differentiate different workloads."),(0,o.kt)("p",null,"You can configure multi workloads within the ",(0,o.kt)("inlineCode",{parentName:"p"},"services")," section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{2,4}","{2,4}":!0},"services:\n  - name: foo-workload-01\n  ...\n  - name: foo-workload-02\n  ...\n")),(0,o.kt)("h3",{id:"service-type"},"Service Type"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"services[*].serviceType # required")),(0,o.kt)("p",null,"Kubernetes workload type, Nocalhost currently supports all Kubernetes workloads types. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{3}","{3}":!0},"services:\n  - name: foo-workload-01\n    serviceType: deployment\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/"},"Read more to learn what is Kubernetes workload")),(0,o.kt)("h3",{id:"manage-start-dependency"},"Manage Start Dependency"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"services[*].dependLabelSelector # optional")),(0,o.kt)("p",null,"Nocalhost can control the startup sequence of multiple workloads within an application, supports both 'Job' and 'Pod' types."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"nocalhost-dep Needed")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You need to have ",(0,o.kt)("inlineCode",{parentName:"p"},"nocalhost-dep")," to install for this configuration to take effect. Please refer to ",(0,o.kt)("a",{parentName:"p",href:"../server/nh-dep"},"Nocalhost Dep")," for more details."))),(0,o.kt)("h4",{id:"example-setting-up-start-dependencies"},"Example: Setting up start dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:"{4}","{4}":!0},'services:\n  - name: foo-app                   # string    | required | Name of workload\n    serviceType: deployment         # string    | required | The Kubernetes workloads type\n    dependLabelSelector:\n      pods:                         # string[]  | optional | Dependent Pods label selector\n        - A-Pod\n        - B-Pod\n      jobs:                         # string[]  | optional | Dependent Jobs label selector\n        - "name=foo-db"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Explanation:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nocalhost will continuously monitor the status of the ",(0,o.kt)("inlineCode",{parentName:"li"},"A-Pod"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"B-Pod")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"foo-db")," "),(0,o.kt)("li",{parentName:"ul"},"Once these pods and job become available, Nocalhost will start the deployment ",(0,o.kt)("inlineCode",{parentName:"li"},"foo-app"))),(0,o.kt)("h2",{id:"configure-container-deployments"},"Configure Container Deployments"),(0,o.kt)("p",null,"Similar to workloads, you can also configure each container's deployment within the workload. Container deployments are configured within the ",(0,o.kt)("inlineCode",{parentName:"p"},"services[*].container")," section."),(0,o.kt)("h3",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  - name:\n    ...\n    containers:\n      - name: container-01          # string  | required | Container name\n        install: ...                # struct  | optional | Installation parameters\n        dev: ...                    # struct  | optional | Development parameters\n\n      - name: container-02          \n        ...                    \n")),(0,o.kt)("h3",{id:"container-name"},"Container name"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"container[*].name # required")),(0,o.kt)("p",null,"A unique name to differentiate different containers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{2,4}","{2,4}":!0},"containers:\n  - name: container-01\n    ...\n  - name: container-02\n    ...\n")),(0,o.kt)("h3",{id:"inject-environment-variable-to-containers"},"Inject Environment Variable to Containers"),(0,o.kt)("p",null,"Nocalhost supports injecting the preset environment variables to the container when deploying the workload. You can inject these variables by input the values or import the file."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"nocalhost-dep Needed")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You need to have ",(0,o.kt)("inlineCode",{parentName:"p"},"nocalhost-dep")," to install for this configuration to take effect. Please refer to ",(0,o.kt)("a",{parentName:"p",href:"../server/nh-dep"},"Nocalhost Dep")," for more details."))),(0,o.kt)("h4",{id:"example-setting-up-inject-environment-variable-1"},"Example: Setting up inject environment variable"),(0,o.kt)(r.Z,{defaultValue:"c-value",values:[{label:"Inject By Values",value:"c-value"},{label:"Inject By Files",value:"c-file"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"c-value",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"container[*].install.env # optional")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'containers:\n  - name: container-01\n    ...\n    install:\n      env: \n        - name: DEBUG\n          value: ${DEBUG:-true}\n        - name: DOMAIN\n          value: "www.coding.com"\n'))),(0,o.kt)(l.Z,{value:"c-file",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"container[*].install.envFrom # optional")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"containers:\n  - name: container-01\n    ...\n    install:\n      envFrom: \n        envFile: \n          - path: dev.env\n          - path: dev.env\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Explanation:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"These variables will be injected to container when deploying"),(0,o.kt)("li",{parentName:"ul"},"These variables will take effect after the deployments occurs")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Duplicate Configs")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If both ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"envFrom")," configure at the same time, Nocalhost will merge the configurations, and the duplicate parts are subject to ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," configs."))),(0,o.kt)("h3",{id:"setting-up-port-forwarding-for-container"},"Setting up Port-Forwarding for Container"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"container[*].install.portForward")),(0,o.kt)("p",null,"Port-forwarding allows you to access your container on ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:[PORT]")," by forwarding the network traffic from a localhost port to a specified port of a container."),(0,o.kt)("p",null,"When container deployed, Nocalhost starts port-forwarding as configured in the ",(0,o.kt)("inlineCode",{parentName:"p"},"install.port")," section."),(0,o.kt)("h4",{id:"example-2"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"containers:\n  - name: container-01\n    ...\n    install:\n      portForward: \n        - 9883:3306       # string[]  |  optional  | Ports to be forwarded to local when container has been deployed\n        - 9884:3307\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("inlineCode",{parentName:"li"},"Local Port : Remote Port")," format"),(0,o.kt)("li",{parentName:"ul"},"Can setup multi port-forward")))}h.isMDXComponent=!0}}]);