"use strict";(self.webpackChunkgmetri_help=self.webpackChunkgmetri_help||[]).push([[608,636],{2434:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(9496),a=n(7322),l=n(3962),c=n(7506);function o(e){var t=e.year,n=e.posts;return r.createElement(r.Fragment,null,r.createElement("h3",null,t),r.createElement("ul",null,n.map((function(e){return r.createElement("li",{key:e.metadata.date},r.createElement(l.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))}))))}function i(e){var t=e.years;return r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},t.map((function(e,t){return r.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},r.createElement(o,e))})))))}function s(e){var t,n,l=e.archive,o=(0,c.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),s=(0,c.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),u=(t=l.blogPosts,n=t.reduceRight((function(e,t){var n=t.metadata.date.split("-")[0],r=e.get(n)||[];return e.set(n,[t].concat(r))}),new Map),Array.from(n,(function(e){return{year:e[0],posts:e[1]}})));return r.createElement(a.Z,{title:o,description:s},r.createElement("header",{className:"hero hero--primary"},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},o),r.createElement("p",{className:"hero__subtitle"},s))),r.createElement("main",null,u.length>0&&r.createElement(i,{years:u})))}},4131:function(e,t,n){n.d(t,{Z:function(){return Z}});var r=n(98),a=n(6862),l=n(9496),c=n(7995),o=n(360),i=n(1571),s=n(6326),u=n(3962),m=n(5629),h=n(6609),d=n(8212),f=n(9671),g=n(1157),p=n(7506),v="searchBox_1ZXk",E=["contextualSearch"],b=null;function C(e){var t=e.hit,n=e.children;return l.createElement(u.Z,{to:t.url},n)}function k(e){var t=e.state,n=e.onClose,r=(0,h.Z)().generateSearchPageLink;return l.createElement(u.Z,{to:r(t.query),onClick:n},"See all ",t.context.nbHits," results")}function y(e){var t,u,h=e.contextualSearch,y=(0,a.Z)(e,E),Z=(0,o.Z)().siteMetadata,S=(0,g.Z)(),P=null!=(t=null==(u=y.searchParameters)?void 0:u.facetFilters)?t:[],N=h?[].concat(S,P):P,A=Object.assign({},y.searchParameters,{facetFilters:N}),w=((0,s.C)().withBaseUrl,(0,i.k6)()),I=(0,l.useRef)(null),R=(0,l.useRef)(null),_=(0,l.useState)(!1),F=_[0],O=_[1],x=(0,l.useState)(null),B=x[0],M=x[1],T=(0,l.useCallback)((function(){return b?Promise.resolve():Promise.all([n.e(652).then(n.bind(n,9652)),Promise.all([n.e(532),n.e(556)]).then(n.bind(n,5556)),Promise.all([n.e(532),n.e(317)]).then(n.bind(n,6317))]).then((function(e){var t=e[0].DocSearchModal;b=t}))}),[]),D=(0,l.useCallback)((function(){T().then((function(){I.current=document.createElement("div"),document.body.insertBefore(I.current,document.body.firstChild),O(!0)}))}),[T,O]),j=(0,l.useCallback)((function(){O(!1),I.current.remove()}),[O]),L=(0,l.useCallback)((function(e){T().then((function(){O(!0),M(e.key)}))}),[T,O,M]),U=(0,l.useRef)({navigate:function(e){var t=e.itemUrl;w.push(t)}}).current,V=(0,l.useRef)((function(e){return e.map((function(e){return document.createElement("a").href=e.url,console.log(e.url),Object.assign({},e)}))})).current,Y=(0,l.useMemo)((function(){return function(e){return l.createElement(k,(0,r.Z)({},e,{onClose:j}))}}),[j]),q=(0,l.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",Z.docusaurusVersion),e}),[Z.docusaurusVersion]);(0,d.D)({isOpen:F,onOpen:D,onClose:j,onInput:L,searchButtonRef:R});var H=(0,p.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return l.createElement(l.Fragment,null,l.createElement(m.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+y.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement("div",{className:v},l.createElement(f.a,{onTouchStart:T,onFocus:T,onMouseOver:T,onClick:D,ref:R,translations:{buttonText:H,buttonAriaLabel:H}})),F&&(0,c.createPortal)(l.createElement(b,(0,r.Z)({onClose:j,initialScrollY:window.scrollY,initialQuery:B,navigator:U,transformItems:V,hitComponent:C,resultsFooterComponent:Y,transformSearchClient:q},y,{searchParameters:A})),I.current))}var Z=function(){var e=(0,o.Z)().siteConfig;return l.createElement(y,e.themeConfig.algolia)}}}]);