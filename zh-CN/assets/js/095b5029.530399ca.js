"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[9229],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return i}})},4996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return r}});var o=n(2263),i=n(3919);function a(){var e=(0,o.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var a=void 0===o?{}:o,r=a.forcePrependBaseUrl,l=void 0!==r&&r,c=a.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(a,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},3999:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var o=n(2122),i=n(9756),a=(n(7294),n(3905)),r=n(4996),l=["components"],c={title:"Redefine Cloud Native Dev Environment",author:"Wang Wei",author_title:"Nocalhost Core Team",author_url:"https://github.com/lyzhang1999",author_image_url:"https://avatars.githubusercontent.com/u/8142348?v=4",tags:["Kubernetes","Cloud-Native"]},s="Nocalhost - Redefine Cloud Native Dev Environment",u={permalink:"/zh-CN/blog/2021/01/01/",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2021-01-01.md",title:"Redefine Cloud Native Dev Environment",description:"Preface",date:"2021-01-01T00:00:00.000Z",formattedDate:"January 1, 2021",tags:[{label:"Kubernetes",permalink:"/zh-CN/blog/tags/kubernetes"},{label:"Cloud-Native",permalink:"/zh-CN/blog/tags/cloud-native"}],readingTime:5.61,truncated:!1,prevItem:{title:"How to debug microservices in Kubernetes with proxy, sidecar or service mesh?",permalink:"/zh-CN/blog/2021/07/05/jimmy"}},p=[{value:"Preface",id:"preface",children:[]},{value:"Localhost era",id:"localhost-era",children:[]},{value:"Cloud Native liberates deployment and operation, What about development?",id:"cloud-native-liberates-deployment-and-operation-what-about-development",children:[]},{value:"Redefine Cloud Native Dev Environment",id:"redefine-cloud-native-dev-environment",children:[]},{value:"Quick Start",id:"quick-start",children:[]},{value:"Landing case",id:"landing-case",children:[]},{value:"Open source and community co-construction",id:"open-source-and-community-co-construction",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"preface"},"Preface"),(0,a.kt)("p",null,'With the rapid development of business, the organizational structure of the technical department has been continuously expanded and adjusted horizontally and vertically. At the same time, the enterprise\'s production materials: application systems, have also become larger and larger. In order to adapt the application system to the adjustment of the enterprise organizational structure and sort out the boundaries of the organizational structure for application rights and responsibilities, most organizations will choose to use the "microservice" architecture to split the application system horizontally, so that the maintenance boundary of the application system is adapted The power and responsibility boundary of the organizational structure.'),(0,a.kt)("p",null,'Generally speaking, the larger the organizational structure, the more detailed the application system will be, and the number of "microservices" will also increase. In the practice of splitting "microservices", it is easy to mark the authority and responsibility boundaries of the organizational structure into the splitting granularity of "microservices", which may lead to too fine granularity of "microservices". The problem of further sharp increase in number. In the end, the calling relationship between "microservices" is like cross-departmental collaboration, and it has become more and more complex. The problem is particularly prominent when you want to add new requirements.'),(0,a.kt)("p",null,'While "microservices" bring convenience, it also brings additional challenges for developers: how to quickly start a complete development environment? The development requirements depend on how other colleagues can coordinate and debug? How to quickly debug these microservices?'),(0,a.kt)("p",null,"For managers, it also brings a series of challenges: how to manage the development environment of developers? How to let new colleagues quickly develop?"),(0,a.kt)("p",null,'Imagine what difficulties would you encounter when developing a cloud-native application consisting of 200 "microservices"?'),(0,a.kt)("h2",{id:"localhost-era"},"Localhost era"),(0,a.kt)("p",null,"In the era of monolithic applications, it is extremely friendly to developers. Developers use the local machine to run the application, modify the code to take effect in real time, and visit Localhost through a browser to view the code effect in real time."),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,r.Z)("/img/blog/2021-01-01/local.png")})),(0,a.kt)("p",null,'Monolithic applications are different from "microservices" applications. Monolithic applications are organized as "ALL-IN-ONE". All calling relationships are limited to their own classes and functions, and the hardware requirements of applications are generally not too high.'),(0,a.kt)("p",null,'The development of "microservice" applications is quite different. Due to the mutual dependence, when a certain function or microservice needs to be developed, all dependent services have to be activated. With the increase in the number of microservices, more and more local resources are needed to develop applications, which ultimately leads to the local inability to meet the configuration requirements of development.'),(0,a.kt)("h2",{id:"cloud-native-liberates-deployment-and-operation-what-about-development"},"Cloud Native liberates deployment and operation, What about development?"),(0,a.kt)("p",null,'The popularity of cloud native and Kubernetes further shields the complexity of "microservice" applications, which is mainly reflected in the deployment and operation and maintenance stages.'),(0,a.kt)("p",null,"In order to solve the problem of environmental consistency in the development, testing, and production stages of microservice applications, modern microservice application development will package each component into a Docker image and deploy it in the form of workload. Using continuous integration and continuous deployment in the DevOps pipeline, combined with Kubernetes probes, HPA, and application self-healing capabilities, completely liberated the deployment and operation and maintenance of microservice applications."),(0,a.kt)("p",null,"But we overlooked a key node: the development phase."),(0,a.kt)("p",null,"After microservice applications are packaged with Kubernetes workloads, the problem of rapid application startup in the development process is solved. Developers only need to install a single-node Kubernetes cluster locally, such as Minikube, Kind, etc., to quickly start microservice applications."),(0,a.kt)("p",null,"But for developers, the original monolithic application development experience no longer exists. Since the application is difficult to run outside of the Docker container, each code modification needs to go through the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Execute docker build to build the image"),(0,a.kt)("li",{parentName:"ul"},"Execute docker tag to tag the image"),(0,a.kt)("li",{parentName:"ul"},"Execute docker push to push the image to the warehouse"),(0,a.kt)("li",{parentName:"ul"},"Modify the image version of the Kubernetes workload"),(0,a.kt)("li",{parentName:"ul"},"Wait for the mirror pull to end"),(0,a.kt)("li",{parentName:"ul"},"Wait for the Pod to rebuild"),(0,a.kt)("li",{parentName:"ul"},"View the modified code effect")),(0,a.kt)("p",null,"This directly slows down the cyclic feedback process of development, and each modification requires several minutes or even ten minutes of waiting time."),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,r.Z)("/img/blog/2021-01-01/circle-en.png")})),(0,a.kt)("h2",{id:"redefine-cloud-native-dev-environment"},"Redefine Cloud Native Dev Environment"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Nocalhost is a Cloud Native development environment, hoping to make developing cloud-native applications as primitive and simple as developing a single application.")),(0,a.kt)("p",null,"Nocalhost reorganized the roles and resources involved in the development process:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Team manager"),(0,a.kt)("li",{parentName:"ul"},"Developer"),(0,a.kt)("li",{parentName:"ul"},"Application"),(0,a.kt)("li",{parentName:"ul"},"Cluster"),(0,a.kt)("li",{parentName:"ul"},"Development Space")),(0,a.kt)("p",null,"Through the reintegration of these roles and resources, Nocalhost redefines the cloud-native development environment and brings a new cloud-native development experience."),(0,a.kt)("p",null,"In order to quickly understand the cloud-native development environment redefined by Nocalhost, let us first stand in different roles and see what Nocalhost can bring to them."),(0,a.kt)("p",null,"Developer:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Get rid of the need to rebuild a new image for each modification and long-term loop feedback, and the modified code will take effect immediately."),(0,a.kt)("li",{parentName:"ul"},"One-click deployment of the development environment, get rid of the limitations of local environment construction and insufficient resources."),(0,a.kt)("li",{parentName:"ul"},"Link between local IDE editor and development environment, support remote debugging."),(0,a.kt)("li",{parentName:"ul"},"Graphical IDE plug-in, no need to be familiar with kubectl commands to complete development in cloud native environment.")),(0,a.kt)("p",null,"Manager:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unified management of microservice application packages, reducing application maintenance costs."),(0,a.kt)("li",{parentName:"ul"},"Unified management of the development environment and cluster, improve the utilization of cluster resources, and have isolation characteristics."),(0,a.kt)("li",{parentName:"ul"},"Quickly allocate development environment for new employees, and application development can be carried out immediately after the allocation of the environment."),(0,a.kt)("li",{parentName:"ul"},"Flexible development environment resources can be destroyed when used up, reducing development costs.")),(0,a.kt)("h2",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/quick-start"},"Try to use Nocalhost for the easier and faster cloud-native application development")),(0,a.kt)("p",null,"Taking Nocalhost's built-in Demo: Bookinfo as an example, the development of Productpage microservices has become the following simple steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Connect to remote Kubernetes cluster by click"),(0,a.kt)("li",{parentName:"ol"},"Select the workload that need to develop, enter development mode"),(0,a.kt)("li",{parentName:"ol"},"Nocalhost IDE plugin will automatically sync the source code to remote ",(0,a.kt)("inlineCode",{parentName:"li"},"DevContainer")),(0,a.kt)("li",{parentName:"ol"},"Change the code and see the change under seconds without rebuild image or restart remote POD. ",(0,a.kt)("iframe",{width:"100%",height:"430",src:"https://www.youtube.com/embed/M7i-SR531is",title:"Nocalhost Quick Demo",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,mark:"crwd-mark"}))),(0,a.kt)("h2",{id:"landing-case"},"Landing case"),(0,a.kt)("p",null,"Currently, Tencent Cloud ",(0,a.kt)("a",{parentName:"p",href:"http://coding.net/"},"CODING DevOps")," (nearly 200 microservices) is using Nocalhost for development. Practice has verified that Nocalhost can greatly improve development efficiency and shorten feedback loops."),(0,a.kt)("h2",{id:"open-source-and-community-co-construction"},"Open source and community co-construction"),(0,a.kt)("p",null,"Nocalhost is currently fully open source and has entered CNCF Landscape: ",(0,a.kt)("a",{parentName:"p",href:"https://landscape.cncf.io/"},"https://landscape.cncf.io/")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nocalhost/nocalhost"},"Our Github Repo"),"."),(0,a.kt)("p",null,"We are using Apache-2.0 open source agreement, can use unlimited free."),(0,a.kt)("p",null,"For more information about Nocalhost, please visit our ",(0,a.kt)("a",{parentName:"p",href:"/docs/introduction"},"documentations"),"."))}m.isMDXComponent=!0}}]);