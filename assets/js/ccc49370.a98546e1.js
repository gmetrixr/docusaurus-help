"use strict";(self.webpackChunkgmetri_help=self.webpackChunkgmetri_help||[]).push([[103,636],{9055:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(6862),r=a(9496),l=a(1626),i=a(7322),o=a(3962),s="sidebar_3JuB",c="sidebarItemTitle_3YjX",m="sidebarItemList_17xI",u="sidebarItem_2J7W",d="sidebarItemLink_3VB1",g="sidebarItemLinkActive_1KsO",p=a(7506);function h(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var v=a(5686),b=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,n.Z)(e,b),c=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},c&&r.createElement("aside",{className:"col col--3"},r.createElement(h,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&r.createElement("div",{className:"col col--2"},r.createElement(v.Z,{toc:a})))))}},1925:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(9496),r=a(1626),l=a(9613),i=a(7506),o=a(3962),s=a(6326),c=a(3443),m=a(5486),u=a(98),d=a(6862),g="iconEdit_3ZDl",p=["className"],h=function(e){var t=e.className,a=(0,d.Z)(e,p);return n.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(g,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function v(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.kM.common.editThisPage},n.createElement(h,null),n.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var b="blogPostTitle_2mKm",E="blogPostData_2k81",f="blogPostDetailsFull_37lq",_=a(7423),Z="tags_2oxJ",N="tag_1yCn";function k(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(Z,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:N},n.createElement(_.Z,{name:t,permalink:a}))}))))}var P="image_361I";var C=function(e){var t=e.author,a=t.name,r=t.title,l=t.url,i=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:P,src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(o.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},T="authorCol_14Tq";function I(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,r.Z)("col col--6",T),key:t},n.createElement(C,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var y=function(e){var t,a,u,d,g=(u=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return u(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=(0,s.C)().withBaseUrl,h=e.children,_=e.frontMatter,Z=e.assets,N=e.metadata,P=e.truncated,C=e.isBlogPostPage,T=void 0!==C&&C,y=N.date,w=N.formattedDate,x=N.permalink,B=N.tags,M=N.readingTime,S=N.title,R=N.editUrl,L=N.authors,A=null!=(t=Z.image)?t:_.image;return n.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(d=T?"h1":"h2",n.createElement("header",null,n.createElement(d,{className:b,itemProp:"headline"},T?S:n.createElement(o.Z,{itemProp:"url",to:x},S)),n.createElement("div",{className:(0,r.Z)(E,"margin-vert--md")},n.createElement("time",{dateTime:y,itemProp:"datePublished"},w),void 0!==M&&n.createElement(n.Fragment,null," \xb7 ",g(M))),n.createElement(I,{authors:L,assets:Z}))),A&&n.createElement("meta",{itemProp:"image",content:p(A,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:m.Z},h)),(B.length>0||P)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[f]=T,a))},B.length>0&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":!T})},n.createElement(k,{tags:B})),T&&R&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(v,{editUrl:R})),!T&&P&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(o.Z,{to:N.permalink,"aria-label":"Read more about "+S},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},8019:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(9496),r=a(3890),l=a(9055),i=a(1925),o=a(7506),s=a(3962);var c=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(3443);var u=function(e){var t,a=e.content,o=e.sidebar,s=a.frontMatter,u=a.assets,d=a.metadata,g=d.title,p=d.description,h=d.nextItem,v=d.prevItem,b=d.date,E=d.tags,f=d.authors,_=s.hide_table_of_contents,Z=s.keywords,N=null!=(t=u.image)?t:s.image;return n.createElement(l.Z,{wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogPostPage,sidebar:o,toc:!_&&a.toc?a.toc:void 0},n.createElement(r.Z,{title:g,description:p,keywords:Z,image:N},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:b}),f.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:f.map((function(e){return e.url})).filter(Boolean).join(",")}),E.length>0&&n.createElement("meta",{property:"article:tag",content:E.map((function(e){return e.label})).join(",")})),n.createElement(i.Z,{frontMatter:s,assets:u,metadata:d,isBlogPostPage:!0},n.createElement(a,null)),(h||v)&&n.createElement(c,{nextItem:h,prevItem:v}))}},7423:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(9496),r=a(1626),l=a(3962),i="tag_3MYd",o="tagRegular_3PzX",s="tagWithCount_39-t";var c=function(e){var t,a=e.permalink,c=e.name,m=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(i,(t={},t[o]=!m,t[s]=m,t))},c,m&&n.createElement("span",null,m))}},4131:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(98),r=a(6862),l=a(9496),i=a(7995),o=a(360),s=a(1571),c=a(6326),m=a(3962),u=a(5629),d=a(6609),g=a(8212),p=a(9671),h=a(1157),v=a(7506),b="searchBox_1ZXk",E=["contextualSearch"],f=null;function _(e){var t=e.hit,a=e.children;return l.createElement(m.Z,{to:t.url},a)}function Z(e){var t=e.state,a=e.onClose,n=(0,d.Z)().generateSearchPageLink;return l.createElement(m.Z,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function N(e){var t,m,d=e.contextualSearch,N=(0,r.Z)(e,E),k=(0,o.Z)().siteMetadata,P=(0,h.Z)(),C=null!=(t=null==(m=N.searchParameters)?void 0:m.facetFilters)?t:[],T=d?[].concat(P,C):C,I=Object.assign({},N.searchParameters,{facetFilters:T}),y=((0,c.C)().withBaseUrl,(0,s.k6)()),w=(0,l.useRef)(null),x=(0,l.useRef)(null),B=(0,l.useState)(!1),M=B[0],S=B[1],R=(0,l.useState)(null),L=R[0],A=R[1],U=(0,l.useCallback)((function(){return f?Promise.resolve():Promise.all([a.e(652).then(a.bind(a,9652)),Promise.all([a.e(532),a.e(556)]).then(a.bind(a,5556)),Promise.all([a.e(532),a.e(317)]).then(a.bind(a,6317))]).then((function(e){var t=e[0].DocSearchModal;f=t}))}),[]),O=(0,l.useCallback)((function(){U().then((function(){w.current=document.createElement("div"),document.body.insertBefore(w.current,document.body.firstChild),S(!0)}))}),[U,S]),F=(0,l.useCallback)((function(){S(!1),w.current.remove()}),[S]),j=(0,l.useCallback)((function(e){U().then((function(){S(!0),A(e.key)}))}),[U,S,A]),D=(0,l.useRef)({navigate:function(e){var t=e.itemUrl;y.push(t)}}).current,q=(0,l.useRef)((function(e){return e.map((function(e){return document.createElement("a").href=e.url,console.log(e.url),Object.assign({},e)}))})).current,z=(0,l.useMemo)((function(){return function(e){return l.createElement(Z,(0,n.Z)({},e,{onClose:F}))}}),[F]),Y=(0,l.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",k.docusaurusVersion),e}),[k.docusaurusVersion]);(0,g.D)({isOpen:M,onOpen:O,onClose:F,onInput:j,searchButtonRef:x});var J=(0,v.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return l.createElement(l.Fragment,null,l.createElement(u.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+N.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement("div",{className:b},l.createElement(p.a,{onTouchStart:U,onFocus:U,onMouseOver:U,onClick:O,ref:x,translations:{buttonText:J,buttonAriaLabel:J}})),M&&(0,i.createPortal)(l.createElement(f,(0,n.Z)({onClose:F,initialScrollY:window.scrollY,initialQuery:L,navigator:D,transformItems:q,hitComponent:_,resultsFooterComponent:z,transformSearchClient:Y},N,{searchParameters:I})),w.current))}var k=function(){var e=(0,o.Z)().siteConfig;return l.createElement(N,e.themeConfig.algolia)}}}]);