"use strict";(self.webpackChunkgmetri_help=self.webpackChunkgmetri_help||[]).push([[817],{9613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3939:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return c},toc:function(){return m},default:function(){return d}});var n=r(98),a=r(6862),i=(r(9496),r(9613)),o=["components"],l={title:"October 2021 Update (Teaxr v0.5.1379)",authors:["amit"],tags:["releases"]},u=void 0,p={permalink:"/help/updates/2021/10/26/oct-update",editUrl:"https://github.com/gmetrixr/help/edit/main/gmetri-help/updates/updates/2021-10-26-oct-update.md",source:"@site/updates/2021-10-26-oct-update.md",title:"October 2021 Update (Teaxr v0.5.1379)",description:"Major Features",date:"2021-10-26T00:00:00.000Z",formattedDate:"October 26, 2021",tags:[{label:"releases",permalink:"/help/updates/tags/releases"}],readingTime:.79,truncated:!1,authors:[{name:"Amit Rajput",title:"Lead Fullstack Engineer @ GMetriXR",url:"https://github.com/amitrajput1992",imageURL:"https://github.com/amitrajput1992.png",key:"amit"}],nextItem:{title:"October 2021 Update (Teaxr v0.5.1362)",permalink:"/help/updates/2021/10/21/oct-update"}},c={authorsImageUrls:[void 0]},m=[{value:"\ud83d\ude80 Major Features",id:"-major-features",children:[]},{value:"\u23eb Minor Improvements",id:"-minor-improvements",children:[]},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",children:[]}],s={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"-major-features"},"\ud83d\ude80 Major Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Viewer ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"VR mode supports Point to action"),(0,i.kt)("li",{parentName:"ul"},"VR mode supports animations during scene transitions"),(0,i.kt)("li",{parentName:"ul"},"VR mode supports scene offset rotations")))),(0,i.kt)("h3",{id:"-minor-improvements"},"\u23eb Minor Improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Editor",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Deprecated: Height from text elements"),(0,i.kt)("li",{parentName:"ul"},"Deprecated: width/height/depth from cylinder"),(0,i.kt)("li",{parentName:"ul"},"Improved updates from number/decimal properties"))),(0,i.kt)("li",{parentName:"ul"},"Viewer ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Deprecated: Scene pitch correction. All scene pitch correction in scene gets converted into point to rules automatically. ")))),(0,i.kt)("h3",{id:"-bug-fixes"},"\ud83d\udc1b Bug Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Editor",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Gracefully handling all resource failures to remove any unwanted crashes"),(0,i.kt)("li",{parentName:"ul"},"Fixed errors while adding new text elements"),(0,i.kt)("li",{parentName:"ul"},"Updates to experience can be viewed correctly in the preview/view links. Experience data/cache gets updated correctly. "),(0,i.kt)("li",{parentName:"ul"},"Correct updates to deployment authentication"))),(0,i.kt)("li",{parentName:"ul"},"Viewer ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Disallow rotation using mouse scroll when gyro lock is enabled in a scene"),(0,i.kt)("li",{parentName:"ul"},"Fixed text input in comments to clear text on submit and prevent text clipping"))),(0,i.kt)("li",{parentName:"ul"},"Portal ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Fixed new project creation flow.")))))}d.isMDXComponent=!0}}]);