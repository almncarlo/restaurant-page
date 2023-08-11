(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>f});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),d=t.n(c),l=new URL(t(181),t.b),p=new URL(t(895),t.b),s=i()(r()),u=d()(l),m=d()(p);s.push([n.id,`html {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n}\n\n/* NAV BAR */\n\n.navbar {\n    background-color: rgb(14, 13, 13);\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.nav-title {\n    color: rgb(255, 183, 0);\n    font-size: 25px;\n}\n\nul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    display: flex;\n    justify-content: flex-end;\n}\n\nli {\n    display: list-item;\n}\n\nli a {\n    font-size: 12px;\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 30px 30px;\n}\n\nli a:hover {\n    background-color: #111;\n    cursor: pointer;\n    border-top: 3px solid white;\n}\n\n/* HOME PAGE */\n\n.hero {\n    width: 100%;\n    height: 900px;\n    background-image: url(${u});\n    background-size: cover;\n    display: flex;\n    justify-content: center;\n    opacity: 85%;\n    flex-direction: column;\n    align-items: center;\n}\n\n.hero-text {\n    font-weight: bolder;\n    color: rgb(215, 215, 215);\n    text-align: center;\n    font-size: 75px;\n    padding: 0;\n    margin: 0;\n    opacity: 90%;\n}\n\n.hero-subtext {\n    font-weight: bold;\n    color: rgb(215, 215, 215);\n    text-align: center;\n    font-size: 25px;\n    padding: 0;\n    opacity: 100%;\n}\n\n.explore-button {\n    background-color: rgb(255, 183, 0);\n    color: black;\n    padding: 10px;\n    border-radius: 25px;\n    border: 1px solid  rgb(255, 183, 0);\n    width: 200px;\n    font-weight: bolder;\n}\n\n.explore-button:hover {\n    background-color: rgb(210, 154, 12);\n    color: black;\n    padding: 10px;\n    border-radius: 25px;\n    border: 1px solid  rgb(255, 183, 0);\n    width: 200px;\n    font-weight: bolder;\n    cursor: pointer;\n}\n\n.location-div {\n    background-color: rgb(255, 183, 0);\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.locHeading {\n    font-size: 40px;\n    font-weight: bold;\n}\n\n.locations {\n    display: flex;\n    gap: 100px;\n}\n\n.location-card {\n    text-align: center;\n    padding: 20px;\n}\n\n.location-card > p {\n    padding: 0;\n}\n\n/* CONTACT PAGE */\n\n.contact-body {\n    display: flex;\n    flex-direction: row;\n}\n\n.side {\n    width: 50%;\n    height: 900px;\n    background-image: url(${m});\n    background-size: cover;\n    opacity: 90%;\n}\n\n.form-div {\n    width: 50%;\n    height: 900px;\n    background-color: rgb(24, 22, 22);\n}\n\n.form-header {\n    color: white;\n    font-weight: bold;\n    font-size: 30px;\n    padding: 50px 70px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    padding: 0px 70px;\n    gap: 20px;\n    color: white;\n}\n\nform > input {\n    background-color: rgb(24, 22, 22);\n    color: white;\n    outline: 0;\n    border-width: 0 0 1px;\n    border-color: white;\n    padding: 10px 0px;\n    font-size: 18px;\n}\n\nform > label {\n    padding-top: 20px;\n    font-size: 22px;\n}\n\nform > button {\n    padding: 20px 5px;\n    font-size: 22px;\n    background-color: white;\n    color: black;\n    border-width: 1px solid white;\n    border-radius: 40px;\n    outline: 0;\n    width: 300px;\n    margin-top: 40px;\n}\n`,""]);const f=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);o&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],l=o.base?d[0]+o.base:d[0],p=a[l]||0,s="".concat(l," ").concat(p);a[l]=p+1;var u=t(s),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:s,updater:f,references:1})}i.push(s)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=o(n,r),l=0;l<a.length;l++){var p=t(a[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},895:(n,e,t)=>{n.exports=t.p+"74457af87c8ff5cde5bb.jpeg"},181:(n,e,t)=>{n.exports=t.p+"43eddde75c5024dec890.jpeg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),d=t.n(c),l=t(216),p=t.n(l),s=t(589),u=t.n(s),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=p(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,(()=>{const n=document.querySelector("#content"),e=document.createElement("header"),t=document.createElement("nav"),o=document.createElement("ul"),r=document.createElement("li"),a=document.createElement("li"),i=document.createElement("li"),c=document.createElement("a"),d=document.createElement("a"),l=document.createElement("a"),p=document.createElement("h2");c.textContent="HOME",d.textContent="MENU",l.textContent="CONTACT",p.textContent="Chicko's",r.appendChild(c),a.appendChild(d),i.appendChild(l),r.classList.add("home"),a.classList.add("menu"),i.classList.add("contact"),p.classList.add("nav-title"),o.appendChild(r),o.appendChild(a),o.appendChild(i),t.appendChild(p),t.appendChild(o),t.classList.add("navbar"),e.appendChild(t),n.appendChild(e)})();var h=t(895);(()=>{const n=document.querySelector("#content"),e=document.createElement("div"),t=new Image;e.classList.add("contact-body"),t.src=h;const o=document.createElement("div");o.classList.add("side");const r=document.createElement("div");r.classList.add("form-div");const a=document.createElement("h2");a.classList.add("form-header"),a.textContent="Get in touch with us",r.appendChild(a);const i=document.createElement("form"),c=document.createElement("input"),d=document.createElement("label"),l=document.createElement("input"),p=document.createElement("label"),s=document.createElement("input"),u=document.createElement("label"),m=document.createElement("input"),f=document.createElement("label"),g=document.createElement("button");c.id="fname",d.htmlFor="fname",d.textContent="First Name",l.id="lname",p.htmlFor="lname",p.textContent="Last Name",s.id="email",u.htmlFor="email",u.textContent="Email Address",m.id="msg",f.htmlFor="msg",f.textContent="What would you like to tell us?",g.type="submit",g.textContent="Send message",i.appendChild(d),i.appendChild(c),i.appendChild(p),i.appendChild(l),i.appendChild(u),i.appendChild(s),i.appendChild(f),i.appendChild(m),i.appendChild(g),r.appendChild(i),e.appendChild(o),e.appendChild(r),n.appendChild(e)})()()})()})();