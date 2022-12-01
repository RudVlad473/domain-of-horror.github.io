(self.webpackChunk=self.webpackChunk||[]).push([[666],{666:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>B});var n=r(294),o=r(533),i=r(184),a=r.n(i),c=r(792),s=r(680),l=r(893);const u=e=>n.forwardRef(((t,r)=>(0,l.jsx)("div",{...t,ref:r,className:a()(t.className,e)}))),f=n.forwardRef((({bsPrefix:e,className:t,variant:r,as:n="img",...o},i)=>{const s=(0,c.vE)(e,"card-img");return(0,l.jsx)(n,{ref:i,className:a()(r?`${s}-${r}`:s,t),...o})}));f.displayName="CardImg";const p=f,y=n.createContext(null);y.displayName="CardHeaderContext";const d=y,b=n.forwardRef((({bsPrefix:e,className:t,as:r="div",...o},i)=>{const s=(0,c.vE)(e,"card-header"),u=(0,n.useMemo)((()=>({cardHeaderBsPrefix:s})),[s]);return(0,l.jsx)(d.Provider,{value:u,children:(0,l.jsx)(r,{ref:i,...o,className:a()(t,s)})})}));b.displayName="CardHeader";const h=b,v=u("h5"),m=u("h6"),O=(0,s.Z)("card-body"),g=(0,s.Z)("card-title",{Component:v}),w=(0,s.Z)("card-subtitle",{Component:m}),P=(0,s.Z)("card-link",{Component:"a"}),j=(0,s.Z)("card-text",{Component:"p"}),T=(0,s.Z)("card-footer"),S=(0,s.Z)("card-img-overlay"),E=n.forwardRef((({bsPrefix:e,className:t,bg:r,text:n,border:o,body:i,children:s,as:u="div",...f},p)=>{const y=(0,c.vE)(e,"card");return(0,l.jsx)(u,{ref:p,...f,className:a()(t,y,r&&`bg-${r}`,n&&`text-${n}`,o&&`border-${o}`),children:i?(0,l.jsx)(O,{children:s}):s})}));E.displayName="Card",E.defaultProps={body:!1};const x=Object.assign(E,{Img:p,Title:g,Subtitle:w,Body:O,Link:P,Text:j,Header:h,Footer:T,ImgOverlay:S});var I=r(679),k=r(250),L=r(407),N=r(586),R=r(162),_=["name","population","region","capital","flagUrl","cardObserver"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},C.apply(this,arguments)}const D=(0,n.memo)((function(e){var t=e.name,r=e.population,o=e.region,i=e.capital,a=e.flagUrl,c=e.cardObserver,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,_),l=(0,n.useRef)(null);(0,n.useEffect)((function(){null==c||c.observe(l.current)}),[]);var u=(0,k.s0)();return n.createElement(x,C({ref:l,style:{maxWidth:"18rem",marginInline:"auto"},className:"shadow hover-card ".concat(N.Z.card)},s),n.createElement(I.LazyLoadImage,{alt:"Country flag",src:a,style:{aspectRatio:"16 / 10",width:251.51},className:N.Z.img,onClick:function(){u("/".concat((0,L.Z)(t.toLowerCase())))}}),n.createElement(x.Body,{className:"pb-4"},n.createElement(x.Title,{className:"pt-2 ".concat(N.Z.header)},t),n.createElement(x.Text,{className:"pb-2"},n.createElement(R.Z,{feature:"Population"},r),n.createElement(R.Z,{feature:"Region"},o),n.createElement(R.Z,{feature:"Capital"},i))))})),B=function(e){var t=e.cookedCountries,r=e.cardObserver;return n.createElement(n.Fragment,null,t.map((function(e){var t=e.name,i=e.population,a=e.capital,c=e.region,s=e.flag;return n.createElement(D,{key:t,name:t,population:(0,o.Z)(i),region:c,capital:a,flagUrl:s.replace(/flagcdn.com\/(\w+).svg/,"flagcdn.com/w320/$1.jpg"),cardObserver:r.current})})))}},162:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(294),o=r(4),i=r(586),a=["feature"];const c=function(e){var t=e.feature,r=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,a);return n.createElement("span",{style:{display:"block"}},n.createElement("span",{className:i.Z.attribute},(0,o.Z)(t),":"),n.createElement("span",null," ",r.children||"None"))}},4:(e,t,r)=>{"use strict";function n(e){return e[0].toUpperCase()+e.slice(1)}r.d(t,{Z:()=>n})},533:(e,t,r)=>{"use strict";function n(e){return function(e){for(var t=[],r=Math.pow(10,3);e/r>=1;e=e/r|0){var n=(e%r).toString();t.unshift(n+"0".repeat(3-n.length))}return t.unshift(e.toString()),t}(e).join(",")}r.d(t,{Z:()=>n})},407:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=function(e){return e.split(/\s/).join("-")}},680:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(184),o=r.n(n),i=/-(.)/g,a=r(294),c=r(792),s=r(893);const l=e=>{return e[0].toUpperCase()+(t=e,t.replace(i,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function u(e,{displayName:t=l(e),Component:r,defaultProps:n}={}){const i=a.forwardRef((({className:t,bsPrefix:n,as:i=r||"div",...a},l)=>{const u=(0,c.vE)(n,e);return(0,s.jsx)(i,{ref:l,className:o()(t,u),...a})}));return i.defaultProps=n,i.displayName=t,i}},679:(e,t,r)=>{(()=>{var t={296:(e,t,r)=>{var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,l="object"==typeof self&&self&&self.Object===Object&&self,u=s||l||Function("return this")(),f=Object.prototype.toString,p=Math.max,y=Math.min,d=function(){return u.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var r=i.test(e);return r||a.test(e)?c(e.slice(2),r?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,r){var n,o,i,a,c,s,l=0,u=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var r=n,i=o;return n=o=void 0,l=t,a=e.apply(i,r)}function O(e){return l=e,c=setTimeout(w,t),u?m(e):a}function g(e){var r=e-s;return void 0===s||r>=t||r<0||f&&e-l>=i}function w(){var e=d();if(g(e))return P(e);c=setTimeout(w,function(e){var r=t-(e-s);return f?y(r,i-(e-l)):r}(e))}function P(e){return c=void 0,v&&n?m(e):(n=o=void 0,a)}function j(){var e=d(),r=g(e);if(n=arguments,o=this,s=e,r){if(void 0===c)return O(s);if(f)return c=setTimeout(w,t),m(s)}return void 0===c&&(c=setTimeout(w,t)),a}return t=h(t)||0,b(r)&&(u=!!r.leading,i=(f="maxWait"in r)?p(h(r.maxWait)||0,t):i,v="trailing"in r?!!r.trailing:v),j.cancel=function(){void 0!==c&&clearTimeout(c),l=0,n=s=o=c=void 0},j.flush=function(){return void 0===c?a:P(d())},j}},96:(e,t,r)=>{var n="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,l="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,u="object"==typeof self&&self&&self.Object===Object&&self,f=l||u||Function("return this")(),p=Object.prototype.toString,y=Math.max,d=Math.min,b=function(){return f.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=a.test(e);return r||c.test(e)?s(e.slice(2),r?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,r){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(n);return h(r)&&(o="leading"in r?!!r.leading:o,i="trailing"in r?!!r.trailing:i),function(e,t,r){var o,i,a,c,s,l,u=0,f=!1,p=!1,m=!0;if("function"!=typeof e)throw new TypeError(n);function O(t){var r=o,n=i;return o=i=void 0,u=t,c=e.apply(n,r)}function g(e){return u=e,s=setTimeout(P,t),f?O(e):c}function w(e){var r=e-l;return void 0===l||r>=t||r<0||p&&e-u>=a}function P(){var e=b();if(w(e))return j(e);s=setTimeout(P,function(e){var r=t-(e-l);return p?d(r,a-(e-u)):r}(e))}function j(e){return s=void 0,m&&o?O(e):(o=i=void 0,c)}function T(){var e=b(),r=w(e);if(o=arguments,i=this,l=e,r){if(void 0===s)return g(l);if(p)return s=setTimeout(P,t),O(l)}return void 0===s&&(s=setTimeout(P,t)),c}return t=v(t)||0,h(r)&&(f=!!r.leading,a=(p="maxWait"in r)?y(v(r.maxWait)||0,t):a,m="trailing"in r?!!r.trailing:m),T.cancel=function(){void 0!==s&&clearTimeout(s),u=0,o=l=i=s=void 0},T.flush=function(){return void 0===s?c:j(b())},T}(e,t,{leading:o,maxWait:t,trailing:i})}},703:(e,t,r)=>{"use strict";var n=r(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},697:(e,t,r)=>{e.exports=r(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{"use strict";o.r(i),o.d(i,{LazyLoadComponent:()=>Y,LazyLoadImage:()=>oe,trackWindowScroll:()=>C});const e=r(294);var t=o.n(e),n=o(697);const a=r(935);var c=o.n(a);function s(){return"undefined"!=typeof window&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){e.forEach((function(e){e.isIntersecting&&e.target.onVisible()}))},h={},v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(a,e);var r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(n);if(o){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return y(this,e)});function a(e){var t;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).supportsObserver=!e.scrollPosition&&e.useIntersectionObserver&&s(),t.supportsObserver){var r=e.threshold;t.observer=function(e){return h[e]=h[e]||new IntersectionObserver(b,{rootMargin:e+"px"}),h[e]}(r)}return t}return(r=[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.placeholder&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.scrollPosition,t=this.placeholder.getBoundingClientRect(),r=c().findDOMNode(this.placeholder).style,n={left:parseInt(r.getPropertyValue("margin-left"),10)||0,top:parseInt(r.getPropertyValue("margin-top"),10)||0};return{bottom:e.y+t.bottom+n.top,left:e.x+t.left+n.left,right:e.x+t.right+n.left,top:e.y+t.top+n.top}}},{key:"isPlaceholderInViewport",value:function(){if("undefined"==typeof window||!this.placeholder)return!1;var e=this.props,t=e.scrollPosition,r=e.threshold,n=this.getPlaceholderBoundingBox(t),o=t.y+window.innerHeight,i=t.x,a=t.x+window.innerWidth,c=t.y;return Boolean(c-r<=n.bottom&&o+r>=n.top&&i-r<=n.right&&a+r>=n.left)}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var e=this,r=this.props,n=r.className,o=r.height,i=r.placeholder,a=r.style,c=r.width;if(i&&"function"!=typeof i.type)return t().cloneElement(i,{ref:function(t){return e.placeholder=t}});var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({display:"inline-block"},a);return void 0!==c&&(s.width=c),void 0!==o&&(s.height=o),t().createElement("span",{className:n,ref:function(t){return e.placeholder=t},style:s},i)}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(a.prototype,r),a}(t().Component);v.propTypes={onVisible:n.PropTypes.func.isRequired,className:n.PropTypes.string,height:n.PropTypes.oneOfType([n.PropTypes.number,n.PropTypes.string]),placeholder:n.PropTypes.element,threshold:n.PropTypes.number,useIntersectionObserver:n.PropTypes.bool,scrollPosition:n.PropTypes.shape({x:n.PropTypes.number.isRequired,y:n.PropTypes.number.isRequired}),width:n.PropTypes.oneOfType([n.PropTypes.number,n.PropTypes.string])},v.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0};const m=v;var O=o(296),g=o.n(O),w=o(96),P=o.n(w),j=function(e){var t=getComputedStyle(e,null);return t.getPropertyValue("overflow")+t.getPropertyValue("overflow-y")+t.getPropertyValue("overflow-x")};const T=function(e){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t instanceof HTMLElement;){if(/(scroll|auto)/.test(j(t)))return t;t=t.parentNode}return window};function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var E=["delayMethod","delayTime"];function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return L(e)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var R=function(){return"undefined"==typeof window?0:window.scrollX||window.pageXOffset},_=function(){return"undefined"==typeof window?0:window.scrollY||window.pageYOffset};const C=function(e){var r=function(r){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(l,r);var n,o,i,a=(o=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(o);if(i){var r=N(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return k(this,e)});function l(e){var r;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(r=a.call(this,e)).useIntersectionObserver=e.useIntersectionObserver&&s(),r.useIntersectionObserver)return k(r);var n=r.onChangeScroll.bind(L(r));return"debounce"===e.delayMethod?r.delayedScroll=g()(n,e.delayTime):"throttle"===e.delayMethod&&(r.delayedScroll=P()(n,e.delayTime)),r.state={scrollPosition:{x:R(),y:_()}},r.baseComponentRef=t().createRef(),r}return(n=[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){"undefined"==typeof window||this.useIntersectionObserver||T(c().findDOMNode(this.baseComponentRef.current))!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){"undefined"==typeof window||this.useIntersectionObserver||(this.scrollElement=T(c().findDOMNode(this.baseComponentRef.current)),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){"undefined"==typeof window||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:R(),y:_()}})}},{key:"render",value:function(){var r=this.props,n=(r.delayMethod,r.delayTime,function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(r,E)),o=this.useIntersectionObserver?null:this.state.scrollPosition;return t().createElement(e,x({forwardRef:this.baseComponentRef,scrollPosition:o},n))}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(l.prototype,n),l}(t().Component);return r.propTypes={delayMethod:n.PropTypes.oneOf(["debounce","throttle"]),delayTime:n.PropTypes.number,useIntersectionObserver:n.PropTypes.bool},r.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},r};function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(a,e);var r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(n);if(o){var r=V(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return M(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return(r=[{key:"render",value:function(){return t().createElement(m,this.props)}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(a.prototype,r),a}(t().Component);const W=C(Z);function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e,t){if(t&&("object"===$(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return F(e)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(a,e);var r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(n);if(o){var r=H(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return z(this,e)});function a(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),t=i.call(this,e);var r=e.afterLoad,n=e.beforeLoad,o=e.scrollPosition,c=e.visibleByDefault;return t.state={visible:c},c&&(n(),r()),t.onVisible=t.onVisible.bind(F(t)),t.isScrollTracked=Boolean(o&&Number.isFinite(o.x)&&o.x>=0&&Number.isFinite(o.y)&&o.y>=0),t}return(r=[{key:"componentDidUpdate",value:function(e,t){t.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var e=this.props,r=e.className,n=e.delayMethod,o=e.delayTime,i=e.height,a=e.placeholder,c=e.scrollPosition,l=e.style,u=e.threshold,f=e.useIntersectionObserver,p=e.width;return this.isScrollTracked||f&&s()?t().createElement(m,{className:r,height:i,onVisible:this.onVisible,placeholder:a,scrollPosition:c,style:l,threshold:u,useIntersectionObserver:f,width:p}):t().createElement(W,{className:r,delayMethod:n,delayTime:o,height:i,onVisible:this.onVisible,placeholder:a,style:l,threshold:u,width:p})}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(a.prototype,r),a}(t().Component);q.propTypes={afterLoad:n.PropTypes.func,beforeLoad:n.PropTypes.func,useIntersectionObserver:n.PropTypes.bool,visibleByDefault:n.PropTypes.bool},q.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1};const Y=q;function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var A=["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"];function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){K(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function K(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function te(e,t){if(t&&("object"===X(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function re(e){return(re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ne=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ee(e,t)}(a,e);var r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=re(n);if(o){var r=re(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return te(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).state={loaded:!1},t}return(r=[{key:"onImageLoad",value:function(){var e=this;return this.state.loaded?null:function(){e.props.afterLoad(),e.setState({loaded:!0})}}},{key:"getImg",value:function(){var e=this.props,r=(e.afterLoad,e.beforeLoad,e.delayMethod,e.delayTime,e.effect,e.placeholder,e.placeholderSrc,e.scrollPosition,e.threshold,e.useIntersectionObserver,e.visibleByDefault,e.wrapperClassName,e.wrapperProps,function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,A));return t().createElement("img",Q({onLoad:this.onImageLoad()},r))}},{key:"getLazyLoadImage",value:function(){var e=this.props,r=e.beforeLoad,n=e.className,o=e.delayMethod,i=e.delayTime,a=e.height,c=e.placeholder,s=e.scrollPosition,l=e.style,u=e.threshold,f=e.useIntersectionObserver,p=e.visibleByDefault,y=e.width;return t().createElement(Y,{beforeLoad:r,className:n,delayMethod:o,delayTime:i,height:a,placeholder:c,scrollPosition:s,style:l,threshold:u,useIntersectionObserver:f,visibleByDefault:p,width:y},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(e){var r=this.props,n=r.effect,o=r.height,i=r.placeholderSrc,a=r.width,c=r.wrapperClassName,s=r.wrapperProps,l=this.state.loaded,u=l?" lazy-load-image-loaded":"",f=l||!i?{}:{backgroundImage:"url(".concat(i,")"),backgroundSize:"100% 100%"};return t().createElement("span",Q({className:c+" lazy-load-image-background "+n+u,style:J(J({},f),{},{color:"transparent",display:"inline-block",height:o,width:a})},s),e)}},{key:"render",value:function(){var e=this.props,t=e.effect,r=e.placeholderSrc,n=e.visibleByDefault,o=e.wrapperClassName,i=e.wrapperProps,a=this.getLazyLoadImage();return(t||r)&&!n||o||i?this.getWrappedLazyLoadImage(a):a}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(a.prototype,r),a}(t().Component);ne.propTypes={afterLoad:n.PropTypes.func,beforeLoad:n.PropTypes.func,delayMethod:n.PropTypes.string,delayTime:n.PropTypes.number,effect:n.PropTypes.string,placeholderSrc:n.PropTypes.string,threshold:n.PropTypes.number,useIntersectionObserver:n.PropTypes.bool,visibleByDefault:n.PropTypes.bool,wrapperClassName:n.PropTypes.string,wrapperProps:n.PropTypes.object},ne.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""};const oe=ne})(),e.exports=i})()}}]);
//# sourceMappingURL=666.chunk.js.map