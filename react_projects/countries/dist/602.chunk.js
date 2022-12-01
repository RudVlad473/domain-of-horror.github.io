/*! For license information please see 602.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[602],{162:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(294),o=r(4),a=r(586),i=["feature"];const c=function(t){var e=t.feature,r=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,i);return n.createElement("span",{style:{display:"block"}},n.createElement("span",{className:a.Z.attribute},(0,o.Z)(e),":"),n.createElement("span",null," ",r.children||"None"))}},4:(t,e,r)=>{function n(t){return t[0].toUpperCase()+t.slice(1)}r.d(e,{Z:()=>n})},533:(t,e,r)=>{function n(t){return function(t){for(var e=[],r=Math.pow(10,3);t/r>=1;t=t/r|0){var n=(t%r).toString();e.unshift(n+"0".repeat(3-n.length))}return e.unshift(t.toString()),e}(t).join(",")}r.d(e,{Z:()=>n})},407:(t,e,r)=>{r.d(e,{Z:()=>n});const n=function(t){return t.split(/\s/).join("-")}},602:(t,e,r)=>{r.r(e),r.d(e,{default:()=>w});var n=r(721),o=r(294),a=r(250),i=r(162),c=r(257);const u=function(t){return"https://restcountries.com/v2/name/".concat(t,"?fields=name,capital,region,population,flag,borders,topLevelDomain,nativeName,subregion,currencies,languages")},l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t.split(/(\s)|(-)/).at(e)};var s=r(407);var f=r(533);const h=function(t){var e,r=t.name,n=t.topLevelDomain,o=t.capital,a=t.subregion,i=t.region,c=t.population,u=t.borders,l=t.nativeName,s=t.currencies,h=t.languages,d=t.flag;return Object.freeze({name:r,topLevelDomain:(e=n,e instanceof Object?Object.values(e).join(", "):e),capital:o,subregion:a,region:i,population:(0,f.Z)(c),borders:u,nativeName:l,currencies:s.map((function(t){return t.name})).join(", "),languages:h.map((function(t){return t.name})).join(", "),flag:d})};var d=r(711),p=r(671);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function v(){v=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new N(o||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function h(){}function d(){}function p(){}var y={};u(y,a,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(Z([])));b&&b!==e&&r.call(b,a)&&(y=b);var _=p.prototype=h.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,a,i,c){var u=s(t[n],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==m(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return o("throw",t,i,c)}))}c(u.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function Z(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=p,n(_,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:d,configurable:!0}),d.displayName=u(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},w(x.prototype),u(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(_),u(_,c,"Generator"),u(_,a,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=Z,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:Z(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function y(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function g(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){y(a,n,o,i,c,"next",t)}function c(t){y(a,n,o,i,c,"throw",t)}i(void 0)}))}}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var _=o.lazy((function(){return r.e(86).then(r.bind(r,86))}));const w=function(t){var e,r,f,m=t.params,y=m.name,w=(r=(0,o.useState)(),f=2,function(t){if(Array.isArray(t))return t}(r)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(r,f)||function(t,e){if(t){if("string"==typeof t)return b(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(t,e):void 0}}(r,f)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),x=w[0],E=w[1],L=(0,o.useMemo)((function(){return void 0===x}),[x]),O=(0,a.s0)();function j(){return(j=g(v().mark((function t(){var e,r,o,a;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=u(l(y)),t.next=3,n.ZP.get(e);case 3:r=t.sent,o=r.data,a=o.length>1?o.find((function(t){return(0,s.Z)(t.name.toLowerCase())===y})):o[0],E(h(a));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,o.useEffect)((function(){!function(){j.apply(this,arguments)}()}),[m]),(0,o.useEffect)((function(){var t=setTimeout((function(){x||(alert("Oops! It seems like there aren't any details for that country"),O("/"))}),3e3);return function(){return clearTimeout(t)}})),L?o.createElement(c.Z,null):o.createElement("div",{className:"d-flex flex-column flex-sm-row align-items-center ".concat(d.Z.details)},o.createElement("div",{className:d.Z.details__header},o.createElement("img",{src:null==x?void 0:x.flag,alt:"Country flag",className:"shadow-lg ".concat(d.Z.details__header__img)})),o.createElement("div",{className:"d-flex flex-column justify-content-between ".concat(d.Z.details__body)},o.createElement("header",{className:d.Z.details__body__header},null==x?void 0:x.name),o.createElement("article",{className:"".concat(d.Z.details__body__content)},Object.keys(x).filter((function(t){return!t.match(/(flag)|(name)|(borders)/i)})).sort((function(t,e){var r,n;return(null===(r=x[e])||void 0===r?void 0:r.length)+e.length<(null===(n=x[t])||void 0===n?void 0:n.length)+t.length})).map((function(t){return o.createElement(i.Z,{key:t,feature:(e=t,e.replace(/([a-z])([A-Z])/g,"$1 $2"))},x[t]);var e}))),o.createElement("footer",{className:"d-flex flex-wrap align-items-center gap-2\n                    ".concat(d.Z.details__footer)},o.createElement("span",{className:"".concat(d.Z.details__footer__title)},"Border Countries: "),(null===(e=x.borders)||void 0===e?void 0:e.map((function(t){return o.createElement(o.Suspense,{fallback:o.createElement(p.Z,null)},o.createElement(_,{key:t,countryCode:t}))})))||"None")))}},671:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(294),o=r(711);const a=function(){return n.createElement("span",{className:"shadow-sm ".concat(o.Z.details__footer__item," \n            ").concat(o.Z.gradient)},"Lorem ipsum")}},586:(t,e,r)=>{r.d(e,{Z:()=>n});const n={card:"_mIESs6x4bmN8T_bV24N",active:"x2UMtOkO5Z23cyJYWIhY",img:"X6y3R94hsNQ6Sd9Jj75w",header:"jKPa9VCwA1LTwiv_RAei",attribute:"pZXbB86KrhhRNHmg5gCp",value:"zl8IYhRRl09_JwgB7lg7"}},711:(t,e,r)=>{r.d(e,{Z:()=>n});const n={details:"l1hkjxGozYpPDOquZTu5",details__header:"uHWZx0_N68PlhyFyniTJ",details__body:"J1AaLm9UupSYsBVQMKFe",details__header__img:"fdC9kqtrew_OtAJhHy2E",details__body__header:"ut1kaPqA25XpqnGpNx2C",details__body__content:"Kilpl5U1iXXsRapH_o2I",details__footer:"KMNecxmu210OftvbPF7z",details__footer__title:"ea5ixzkMI1eTkMC92VBb",details__footer__item:"IkDrnysIoUoJLT1gYhBV",gradient:"bpil0zatx32ix2qOoL4O",placeHolderShimmer:"YIGpzAVkefKduWEt2yxM"}}}]);
//# sourceMappingURL=602.chunk.js.map