(self.webpackChunkgmetri_help=self.webpackChunkgmetri_help||[]).push([[85],{6019:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return le}});var r=n(9496),o=n(1626),a=n(5953),l=n(9613),c=n(98),i=n(6862),s=n(5629),u=n(3962),p={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},d={Prism:n(3973).default,theme:p};function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}var y=/\r\n|\r|\n/,f=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},g=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},v=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=h({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=h({},n,{backgroundColor:null}),o};function b(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var k=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),m(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?v(e.theme,e.language):void 0;return t.themeDict=n})),m(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=h({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==o&&(a.style=void 0!==a.style?h({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),m(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(c))}})),m(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,l=h({},b(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?h({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),m(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,l=0,c=[],i=[c];l>-1;){for(;(a=r[l]++)<o[l];){var s=void 0,u=t[l],p=n[l][a];if("string"==typeof p?(u=l>0?u:["plain"],s=p):(u=g(u,p.type),p.alias&&(u=g(u,p.alias)),s=p.content),"string"==typeof s){var d=s.split(y),m=d.length;c.push({types:u,content:d[0]});for(var h=1;h<m;h++)f(c),i.push(c=[]),c.push({types:u,content:d[h]})}else l++,t.push(u),n.push(s),r.push(0),o.push(s.length)}l--,t.pop(),n.pop(),r.pop(),o.pop()}return f(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),E=k;var N=n(7226),_=n.n(N),j={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},C=n(4217),T=n(3443),x=function(){var e=(0,T.LU)().prism,t=(0,C.Z)().isDarkTheme,n=e.theme||j,r=e.darkTheme||n;return t?r:n},L=n(7506),O="codeBlockContainer_3g5W",Z="codeBlockContent_4L8v",S="codeBlockTitle_3LYG",P="codeBlock_3X1-",w="copyButton_hNwO",B="codeBlockLines_P5uq",A=/{([\d,-]+)}/,D=["js","jsBlock","jsx","python","html"],R={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},I=["highlight-next-line","highlight-start","highlight-end"],z=function(e){void 0===e&&(e=D);var t=e.map((function(e){var t=R[e],n=t.start,r=t.end;return"(?:"+n+"\\s*("+I.join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")};function U(e){var t=e.children,n=e.className,a=e.metastring,l=e.title,i=(0,T.LU)().prism,s=(0,r.useState)(!1),u=s[0],p=s[1],m=(0,r.useState)(!1),h=m[0],y=m[1];(0,r.useEffect)((function(){y(!0)}),[]);var f=(0,T.bc)(a)||l,g=(0,r.useRef)(null),v=[],b=x(),k=Array.isArray(t)?t.join(""):t;if(a&&A.test(a)){var N=a.match(A)[1];v=_()(N).filter((function(e){return e>0}))}var j=null==n?void 0:n.replace(/language-/,"");!j&&i.defaultLanguage&&(j=i.defaultLanguage);var C=k.replace(/\n$/,"");if(0===v.length&&void 0!==j){for(var D,R="",I=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return z(["js","jsBlock"]);case"jsx":case"tsx":return z(["js","jsBlock","jsx"]);case"html":return z(["js","jsBlock","html"]);case"python":case"py":return z(["python"]);default:return z()}}(j),U=k.replace(/\n$/,"").split("\n"),W=0;W<U.length;){var $=W+1,F=U[W].match(I);if(null!==F){switch(F.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":R+=$+",";break;case"highlight-start":D=$;break;case"highlight-end":R+=D+"-"+($-1)+","}U.splice(W,1)}else W+=1}v=_()(R),C=U.join("\n")}var H=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}o.remove(),c&&(l.removeAllRanges(),l.addRange(c)),a&&a.focus()}(C),p(!0),setTimeout((function(){return p(!1)}),2e3)};return r.createElement(E,(0,c.Z)({},d,{key:String(h),theme:b,code:C,language:j}),(function(e){var t=e.className,n=e.style,a=e.tokens,l=e.getLineProps,i=e.getTokenProps;return r.createElement("div",{className:O},f&&r.createElement("div",{style:n,className:S},f),r.createElement("div",{className:(0,o.Z)(Z,j)},r.createElement("pre",{tabIndex:0,className:(0,o.Z)(t,P,"thin-scrollbar"),style:n},r.createElement("code",{className:B},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return v.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,c.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,c.Z)({key:t},i({token:e,key:t})))})))})))),r.createElement("button",{ref:g,type:"button","aria-label":(0,L.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,o.Z)(w,"clean-btn"),onClick:H},u?r.createElement(L.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(L.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var W="anchorWithStickyNavbar_3YcA",$="anchorWithHideOnScrollNavbar_1dDk",F=["id"],H=function(e){var t=Object.assign({},e);return r.createElement("header",null,r.createElement("h1",(0,c.Z)({},t,{id:void 0}),t.children))},M=function(e){return"h1"===e?H:(t=e,function(e){var n,a=e.id,l=(0,i.Z)(e,F),c=(0,T.LU)().navbar.hideOnScroll;return a?r.createElement(t,l,r.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,o.Z)("anchor","anchor__"+t,(n={},n[$]=c,n[W]=!c,n)),id:a}),l.children,r.createElement("a",{className:"hash-link",href:"#"+a,title:(0,L.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.createElement(t,l)});var t},V="details_3RE9";function q(e){var t=Object.assign({},e);return r.createElement(T.PO,(0,c.Z)({},t,{className:(0,o.Z)("alert alert--info",V,t.className)}))}var Y=["mdxType","originalType"];var G={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var o=e.props,a=(o.mdxType,o.originalType,(0,i.Z)(o,Y));return r.createElement(e.props.originalType,a)}return e}(e)}));return r.createElement(s.Z,e,t)},code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(U,e):r.createElement("code",e)},a:function(e){return r.createElement(u.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(n)&&(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:r.createElement(U,(0,r.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),o=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(q,(0,c.Z)({},e,{summary:n}),o)},h1:M("h1"),h2:M("h2"),h3:M("h3"),h4:M("h4"),h5:M("h5"),h6:M("h6")};function J(e){var t=e.getBoundingClientRect();return t.top===t.bottom?J(e.parentNode):t}function X(e){var t,n=e.anchorTopOffset,r=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),o=r.find((function(e){return J(e).top>=n}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(J(o))?o:null!=(t=r[r.indexOf(o)-1])?t:null:r[r.length-1]}function K(){var e=(0,r.useRef)(0),t=(0,T.LU)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var Q=function(e){var t=(0,r.useRef)(void 0),n=K();(0,r.useEffect)((function(){var r=e.linkClassName,o=e.linkActiveClassName;function a(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),a=X({anchorTopOffset:n.current}),l=e.find((function(e){return a&&a.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(o)),e.classList.add(o),t.current=e}else e.classList.remove(o)}(e,e===l)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,n])},ee="tableOfContents_788J",te="table-of-contents__link",ne={linkClassName:te,linkActiveClassName:"table-of-contents__link--active"};function re(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:te,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(re,{isChild:!0,toc:e.children}))}))):null}var oe=function(e){var t=e.toc;return Q(ne),r.createElement("div",{className:(0,o.Z)(ee,"thin-scrollbar")},r.createElement(re,{toc:t}))},ae="mdxPageWrapper_Ryd_";var le=function(e){var t=e.content,n=t.frontMatter,c=t.metadata,i=n.title,s=n.description,u=n.wrapperClassName,p=n.hide_table_of_contents,d=c.permalink;return r.createElement(a.Z,{title:i,description:s,permalink:d,wrapperClassName:null!=u?u:T.kM.wrapper.mdxPages,pageClassName:T.kM.page.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,o.Z)("row",ae)},r.createElement("div",{className:(0,o.Z)("col",!p&&"col--8")},r.createElement(l.Zo,{components:G},r.createElement(t,null))),!p&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(oe,{toc:t.toc})))))}},7226:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);