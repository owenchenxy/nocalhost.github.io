"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[2831],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),o=n(9443);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_1uMI",c="tabItemActive_2DSg";var p=37,s=39;var u=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,u=e.values,m=e.groupId,f=e.className,d=a(),h=d.tabGroupChoices,v=d.setTabGroupChoices,y=(0,r.useState)(o),g=y[0],k=y[1],b=r.Children.toArray(e.children),w=[];if(null!=m){var O=h[m];null!=O&&O!==g&&u.some((function(e){return e.value===O}))&&k(O)}var N=function(e){var t=e.currentTarget,n=w.indexOf(t),r=u[n].value;k(r),null!=m&&(v(m,r),setTimeout((function(){var e,n,r,o,a,i,l,p;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,l=i.innerHeight,p=i.innerWidth,n>=0&&a<=p&&o<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case s:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case p:var o=w.indexOf(e.target)-1;n=w[o]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},f)},u.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:N,onClick:N},n)}))),t?(0,r.cloneElement)(b.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},6894:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=n(5064),l=n(8215),c=["components"],p={title:"helm"},s="Deploy Helm Charts",u={unversionedId:"config/config-deploy-helm",id:"config/config-deploy-helm",isDocsHomePage:!1,title:"helm",description:"To deploy Helm charts, you need to configure them within the application section of the .nocalhost/config.yaml.",source:"@site/docs/config/config-deploy-helm.md",sourceDirName:"config",slug:"/config/config-deploy-helm",permalink:"/docs/config/config-deploy-helm",editUrl:"https://github.com/neaped/nh-docs/docs/config/config-deploy-helm.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1628880717,formattedLastUpdatedAt:"8/13/2021",frontMatter:{title:"helm"},sidebar:"docs",previous:{title:"Basic",permalink:"/docs/config/config-deploy"},next:{title:"manifests",permalink:"/docs/config/config-deploy-manifest"}},m=[{value:"Example",id:"example",children:[{value:"Helm Version",id:"helm-version",children:[]},{value:"Overwrite Helm Values",id:"overwrite-helm-values",children:[]}]}],f={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-helm-charts"},"Deploy Helm Charts"),(0,a.kt)("p",null,"To deploy Helm charts, you need to configure them within the ",(0,a.kt)("inlineCode",{parentName:"p"},"application")," section of the ",(0,a.kt)("inlineCode",{parentName:"p"},".nocalhost/config.yaml"),"."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(i.Z,{defaultValue:"helmLocal",values:[{label:"From Local Directory",value:"helmLocal"},{label:"From Git Repo",value:"helmGit"},{label:"From Helm Repo",value:"helmRepo"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"helmGit",mdxType:"TabItem"},(0,a.kt)("p",null,"Deploy Helm chart from local directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'configProperties:                       # struct    | required | Specify config properties\n    version: v2 \n\napplication:\n  name: bookinfo                        # string    | required | Application name\n  manifestType: helmLocal               # string    | required | Application k8s manifest type\n  resourcePath: ["charts/bookinfo"]     # string[]  | required | Set the application resource path\n  helmValues: []                        # struct    | optional | Overwrite helm values.yaml\n'))),(0,a.kt)(l.Z,{value:"helmLocal",mdxType:"TabItem"},(0,a.kt)("p",null,"Deploy Helm chart from Git repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'configProperties:                       # struct    | required | Specify config properties\n    version: v2 \n\napplication:\n  name: bookinfo                        # string    | required | Application name                 \n  manifestType: helmGit                 # string    | required | Application k8s manifest type                           \n  resourcePath: ["charts/bookinfo"]     # string[]  | required | Set the application resource path\n  helmValues: []                        # struct    | optional | Overwrite helm values.yaml                          \n'))),(0,a.kt)(l.Z,{value:"helmRepo",mdxType:"TabItem"},(0,a.kt)("p",null,"Deploy from Helm repository. This deployment method only supports with ",(0,a.kt)("strong",{parentName:"p"},"Nocalhost Server"),", please refer to ",(0,a.kt)("a",{parentName:"p",href:"../server/manage-app"},"Manager applications with Nocalhost Server")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"configProperties:                       # struct    | required | Specify config properties\n    version: v2 \n\napplication:\n  name: bookinfo                        # string    | required | Application name\n  manifestType: helmRepo                # string    | required | Application k8s manifest type\n  helmValues: []                        # struct    | optional | Overwrite helm values.yaml\n  helmVersion:    0.0.1                 # string    | optional | Set default application version\n")))),(0,a.kt)("h3",{id:"helm-version"},"Helm Version"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"application[*].helmVersion")),(0,a.kt)("p",null,"Specify the application version in the Helm repository. This only corresponds to ",(0,a.kt)("inlineCode",{parentName:"p"},"manifestType: helmRepo")),(0,a.kt)("h4",{id:"example-setting-up-application-version"},"Example: Setting up application version"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"manifestType:   helmRepo\nhelmVersion:    0.0.1       \n")),(0,a.kt)("h3",{id:"overwrite-helm-values"},"Overwrite Helm Values"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"application[*].helmValues")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"helmValues")," option expects an object with values that should be overriding the default values of this Helm chart."),(0,a.kt)("h4",{id:"example-using-values"},"Example: Using values"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"helmValues:\n  - key: DOMAIN\n    value: ${DOMAIN:-www.coding.com}\n  - key: DEBUG\n    value: ${DEBUG:-true}\n")))}d.isMDXComponent=!0}}]);