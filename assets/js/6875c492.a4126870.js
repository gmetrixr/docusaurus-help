"use strict";(self.webpackChunkgmetri_help=self.webpackChunkgmetri_help||[]).push([[8610,8636],{9055:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(6862),r=a(9496),l=a(1626),o=a(7633),s=a(3962),c="sidebar_3JuB",i="sidebarItemTitle_3YjX",m="sidebarItemList_17xI",u="sidebarItem_2J7W",d="sidebarItemLink_3VB1",g="sidebarItemLinkActive_1KsO",h=a(7506);function f(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(i,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var p=a(5686),v=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,s=e.children,c=(0,n.Z)(e,v),i=t&&t.items.length>0;return r.createElement(o.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},i&&r.createElement("aside",{className:"col col--3"},r.createElement(f,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&r.createElement("div",{className:"col col--2"},r.createElement(p.Z,{toc:a})))))}},7637:function(e,t,a){a.d(t,{Z:function(){return Z}});var n=a(9496),r=a(1626),l=a(9613),o=a(7506),s=a(3962),c=a(6326),i=a(3443),m=a(2634),u=a(4486),d="blogPostTitle_2mKm",g="blogPostData_2k81",h="blogPostDetailsFull_37lq",f=a(3585),p="image_361I";var v=function(e){var t=e.author,a=t.name,r=t.title,l=t.url,o=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},o&&n.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:p,src:o,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(s.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},E="authorCol_14Tq";function b(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,r.Z)("col col--6",E),key:t},n.createElement(v,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var Z=function(e){var t,a,p,v,E=(p=(0,i.c2)().selectMessage,function(e){var t=Math.ceil(e);return p(t,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),Z=(0,c.C)().withBaseUrl,N=e.children,_=e.frontMatter,k=e.assets,P=e.metadata,C=e.truncated,T=e.isBlogPostPage,y=void 0!==T&&T,w=P.date,L=P.formattedDate,I=P.permalink,S=P.tags,M=P.readingTime,R=P.title,x=P.editUrl,B=P.authors,O=null!=(t=k.image)?t:_.image;return n.createElement("article",{className:y?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(v=y?"h1":"h2",n.createElement("header",null,n.createElement(v,{className:d,itemProp:"headline"},y?R:n.createElement(s.Z,{itemProp:"url",to:I},R)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:w,itemProp:"datePublished"},L),void 0!==M&&n.createElement(n.Fragment,null," \xb7 ",E(M))),n.createElement(b,{authors:B,assets:k}))),O&&n.createElement("meta",{itemProp:"image",content:Z(O,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:m.Z},N)),(S.length>0||C)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[h]=y,a))},S.length>0&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":!y})},n.createElement(f.Z,{tags:S})),y&&x&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:x})),!y&&C&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(s.Z,{to:P.permalink,"aria-label":"Read more about "+R},n.createElement("b",null,n.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},2451:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var n=a(9496),r=a(3962),l=a(9055),o=a(7637),s=a(7506),c=a(3443);function i(e){var t,a=e.metadata,i=e.items,m=e.sidebar,u=a.allTagsPath,d=a.name,g=a.count,h=(t=(0,c.c2)().selectMessage,function(e){return t(e,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),f=(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:h(g),tagName:d});return n.createElement(l.Z,{title:f,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:m},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,f),n.createElement(r.Z,{href:u},n.createElement(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),i.map((function(e){var t=e.content;return n.createElement(o.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},n.createElement(t,null))})))}},4486:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(9496),r=a(7506),l=a(98),o=a(6862),s=a(1626),c="iconEdit_3ZDl",i=["className"],m=function(e){var t=e.className,a=(0,o.Z)(e,i);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(3443);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},5686:function(e,t,a){a.d(t,{r:function(){return g},Z:function(){return h}});var n=a(9496),r=a(1626),l=a(3443);function o(e){var t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function s(e){var t,a=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((function(e){return o(e).top>=a}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(r))?r:null!=(t=n[n.indexOf(r)-1])?t:null:n[n.length-1]}function c(){var e=(0,n.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var i=function(e){var t=(0,n.useRef)(void 0),a=c();(0,n.useEffect)((function(){var n=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=s({anchorTopOffset:a.current}),o=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===o)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_788J",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function g(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(g,{isChild:!0,toc:e.children}))}))):null}var h=function(e){var t=e.toc;return i(d),n.createElement("div",{className:(0,r.Z)(m,"thin-scrollbar")},n.createElement(g,{toc:t}))}},7423:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(9496),r=a(1626),l=a(3962),o="tag_3MYd",s="tagRegular_3PzX",c="tagWithCount_39-t";var i=function(e){var t,a=e.permalink,i=e.name,m=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(o,(t={},t[s]=!m,t[c]=m,t))},i,m&&n.createElement("span",null,m))}},3585:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(9496),r=a(1626),l=a(7506),o=a(7423),s="tags_2oxJ",c="tag_1yCn";function i(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:c},n.createElement(o.Z,{name:t,permalink:a}))}))))}},4131:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(98),r=a(6862),l=a(9496),o=a(7995),s=a(360),c=a(1571),i=a(6326),m=a(3962),u=a(5629),d=a(6609),g=a(8212),h=a(9671),f=a(1157),p=a(7506),v="searchBox_1ZXk",E=["contextualSearch"],b=null;function Z(e){var t=e.hit,a=e.children;return l.createElement(m.Z,{to:t.url},a)}function N(e){var t=e.state,a=e.onClose,n=(0,d.Z)().generateSearchPageLink;return l.createElement(m.Z,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function _(e){var t,m,d=e.contextualSearch,_=(0,r.Z)(e,E),k=(0,s.Z)().siteMetadata,P=(0,f.Z)(),C=null!=(t=null==(m=_.searchParameters)?void 0:m.facetFilters)?t:[],T=d?[].concat(P,C):C,y=Object.assign({},_.searchParameters,{facetFilters:T}),w=((0,i.C)().withBaseUrl,(0,c.k6)()),L=(0,l.useRef)(null),I=(0,l.useRef)(null),S=(0,l.useState)(!1),M=S[0],R=S[1],x=(0,l.useState)(null),B=x[0],O=x[1],A=(0,l.useCallback)((function(){return b?Promise.resolve():Promise.all([a.e(9652).then(a.bind(a,9652)),Promise.all([a.e(532),a.e(5556)]).then(a.bind(a,5556)),Promise.all([a.e(532),a.e(6317)]).then(a.bind(a,6317))]).then((function(e){var t=e[0].DocSearchModal;b=t}))}),[]),U=(0,l.useCallback)((function(){A().then((function(){L.current=document.createElement("div"),document.body.insertBefore(L.current,document.body.firstChild),R(!0)}))}),[A,R]),F=(0,l.useCallback)((function(){R(!1),L.current.remove()}),[R]),q=(0,l.useCallback)((function(e){A().then((function(){R(!0),O(e.key)}))}),[A,R,O]),z=(0,l.useRef)({navigate:function(e){var t=e.itemUrl;w.push(t)}}).current,D=(0,l.useRef)((function(e){return e.map((function(e){return document.createElement("a").href=e.url,console.log(e.url),Object.assign({},e)}))})).current,j=(0,l.useMemo)((function(){return function(e){return l.createElement(N,(0,n.Z)({},e,{onClose:F}))}}),[F]),H=(0,l.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",k.docusaurusVersion),e}),[k.docusaurusVersion]);(0,g.D)({isOpen:M,onOpen:U,onClose:F,onInput:q,searchButtonRef:I});var J=(0,p.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return l.createElement(l.Fragment,null,l.createElement(u.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+_.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement("div",{className:v},l.createElement(h.a,{onTouchStart:A,onFocus:A,onMouseOver:A,onClick:U,ref:I,translations:{buttonText:J,buttonAriaLabel:J}})),M&&(0,o.createPortal)(l.createElement(b,(0,n.Z)({onClose:F,initialScrollY:window.scrollY,initialQuery:B,navigator:z,transformItems:D,hitComponent:Z,resultsFooterComponent:j,transformSearchClient:H},_,{searchParameters:y})),L.current))}var k=function(){var e=(0,s.Z)().siteConfig;return l.createElement(_,e.themeConfig.algolia)}}}]);