(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>h});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),d=t.n(c),l=new URL(t(181),t.b),s=new URL(t(895),t.b),p=i()(o()),u=d()(l),f=d()(s);p.push([n.id,`html {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n}\n\n/* NAV BAR */\n\n.navbar {\n    background-color: rgb(14, 13, 13);\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.nav-title {\n    color: rgb(255, 183, 0);\n    font-size: 25px;\n}\n\nul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    display: flex;\n    justify-content: flex-end;\n}\n\nli {\n    display: list-item;\n}\n\nli a {\n    font-size: 12px;\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 30px 30px;\n}\n\nli a:hover {\n    background-color: #111;\n    cursor: pointer;\n    border-top: 3px solid white;\n}\n\n/* HOME PAGE */\n\n.hero {\n    width: 100%;\n    height: 900px;\n    background-image: url(${u});\n    background-size: cover;\n    display: flex;\n    justify-content: center;\n    opacity: 85%;\n    flex-direction: column;\n    align-items: center;\n}\n\n.hero-text {\n    font-weight: bolder;\n    color: rgb(215, 215, 215);\n    text-align: center;\n    font-size: 75px;\n    padding: 0;\n    margin: 0;\n    opacity: 90%;\n}\n\n.hero-subtext {\n    font-weight: bold;\n    color: rgb(215, 215, 215);\n    text-align: center;\n    font-size: 25px;\n    padding: 0;\n    opacity: 100%;\n}\n\n.explore-button {\n    background-color: rgb(255, 183, 0);\n    color: black;\n    padding: 10px;\n    border-radius: 25px;\n    border: 1px solid  rgb(255, 183, 0);\n    width: 200px;\n    font-weight: bolder;\n}\n\n.explore-button:hover {\n    background-color: rgb(210, 154, 12);\n    color: black;\n    padding: 10px;\n    border-radius: 25px;\n    border: 1px solid  rgb(255, 183, 0);\n    width: 200px;\n    font-weight: bolder;\n    cursor: pointer;\n}\n\n.location-div {\n    background-color: rgb(255, 183, 0);\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.locHeading {\n    font-size: 40px;\n    font-weight: bold;\n}\n\n.locations {\n    display: flex;\n    gap: 100px;\n}\n\n.location-card {\n    text-align: center;\n    padding: 20px;\n}\n\n.location-card > p {\n    padding: 0;\n}\n\n/* CONTACT PAGE */\n\n.contact-body {\n    display: flex;\n    flex-direction: row;\n}\n\n.side {\n    width: 50%;\n    height: 900px;\n    background-image: url(${f});\n    background-size: cover;\n    opacity: 90%;\n}\n\n.form-div {\n    width: 50%;\n    height: 900px;\n    background-color: rgb(24, 22, 22);\n}\n\n.form-header {\n    color: white;\n    font-weight: bold;\n    padding: 50px 70px;\n}\n`,""]);const h=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],l=r.base?d[0]+r.base:d[0],s=a[l]||0,p="".concat(l," ").concat(s);a[l]=s+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=r(n,o),l=0;l<a.length;l++){var s=t(a[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},895:(n,e,t)=>{n.exports=t.p+"74457af87c8ff5cde5bb.jpeg"},181:(n,e,t)=>{n.exports=t.p+"43eddde75c5024dec890.jpeg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),d=t.n(c),l=t(216),s=t.n(l),p=t(589),u=t.n(p),f=t(426),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=s(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,(()=>{const n=document.querySelector("#content"),e=document.createElement("header"),t=document.createElement("nav"),r=document.createElement("ul"),o=document.createElement("li"),a=document.createElement("li"),i=document.createElement("li"),c=document.createElement("a"),d=document.createElement("a"),l=document.createElement("a"),s=document.createElement("h2");c.textContent="HOME",d.textContent="MENU",l.textContent="CONTACT",s.textContent="Chicko's",o.appendChild(c),a.appendChild(d),i.appendChild(l),o.classList.add("home"),a.classList.add("menu"),i.classList.add("contact"),s.classList.add("nav-title"),r.appendChild(o),r.appendChild(a),r.appendChild(i),t.appendChild(s),t.appendChild(r),t.classList.add("navbar"),e.appendChild(t),n.appendChild(e)})();var m=t(895);(()=>{const n=document.querySelector("#content"),e=document.createElement("div"),t=new Image;e.classList.add("contact-body"),t.src=m;const r=document.createElement("div");r.classList.add("side");const o=document.createElement("div");o.classList.add("form-div");const a=document.createElement("h2");a.classList.add("form-header"),a.textContent="Get in touch with us",o.appendChild(a),e.appendChild(r),e.appendChild(o),n.appendChild(e)})()()})()})();