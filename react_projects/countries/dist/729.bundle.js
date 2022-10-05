(self.webpackChunk=self.webpackChunk||[]).push([[729],{7729:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>K});var s=r(7294);const a={};var n=s.lazy((function(){return r.e(775).then(r.t.bind(r,775,23))}));const o=(0,s.memo)((function(e){var t=e.setFilter;return s.createElement("div",{className:"input-group \n            light-background \n            shadow-sm w-25 ms-0 d-flex \n            align-items-center px-2\n            rounded ".concat(a["search-bar"])},s.createElement("div",{className:"input-group-prepend"},s.createElement("span",{className:"input-group-text p-0 m-0 bg-white border-0",id:"basic-addon1"},s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-search"},s.createElement("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})))),s.createElement(s.Suspense,null,s.createElement(n,{minLength:1,debounceTimeout:300,onChange:function(e){return t({fieldName:"name",searchQuery:e.target.value})},type:"text",className:"form-control border-0 py-2",placeholder:"Search for a country...","aria-describedby":"basic-addon1"})))}));var l=r(682),i=r(4184),c=r.n(i),d=r(5697),f=r.n(d),m=r(5893);const u={type:f().string,tooltip:f().bool,as:f().elementType},p=s.forwardRef((({as:e="div",className:t,type:r="valid",tooltip:s=!1,...a},n)=>(0,m.jsx)(e,{...a,ref:n,className:c()(t,`${r}-${s?"tooltip":"feedback"}`)})));p.displayName="Feedback",p.propTypes=u;const y=p,b=s.createContext({});var h=r(6792);const v=s.forwardRef((({id:e,bsPrefix:t,className:r,type:a="checkbox",isValid:n=!1,isInvalid:o=!1,as:l="input",...i},d)=>{const{controlId:f}=(0,s.useContext)(b);return t=(0,h.vE)(t,"form-check-input"),(0,m.jsx)(l,{...i,ref:d,type:a,id:e||f,className:c()(r,t,n&&"is-valid",o&&"is-invalid")})}));v.displayName="FormCheckInput";const x=v,N=s.forwardRef((({bsPrefix:e,className:t,htmlFor:r,...a},n)=>{const{controlId:o}=(0,s.useContext)(b);return e=(0,h.vE)(e,"form-check-label"),(0,m.jsx)("label",{...a,ref:n,htmlFor:r||o,className:c()(t,e)})}));N.displayName="FormCheckLabel";const g=N,w=s.forwardRef((({id:e,bsPrefix:t,bsSwitchPrefix:r,inline:a=!1,reverse:n=!1,disabled:o=!1,isValid:l=!1,isInvalid:i=!1,feedbackTooltip:d=!1,feedback:f,feedbackType:u,className:p,style:v,title:N="",type:w="checkbox",label:j,children:E,as:F="input",...k},C)=>{t=(0,h.vE)(t,"form-check"),r=(0,h.vE)(r,"form-switch");const{controlId:P}=(0,s.useContext)(b),I=(0,s.useMemo)((()=>({controlId:e||P})),[P,e]),O=!E&&null!=j&&!1!==j||function(e,t){return s.Children.toArray(e).some((e=>s.isValidElement(e)&&e.type===t))}(E,g),R=(0,m.jsx)(x,{...k,type:"switch"===w?"checkbox":w,ref:C,isValid:l,isInvalid:i,disabled:o,as:F});return(0,m.jsx)(b.Provider,{value:I,children:(0,m.jsx)("div",{style:v,className:c()(p,O&&t,a&&`${t}-inline`,n&&`${t}-reverse`,"switch"===w&&r),children:E||(0,m.jsxs)(m.Fragment,{children:[R,O&&(0,m.jsx)(g,{title:N,children:j}),f&&(0,m.jsx)(y,{type:u,tooltip:d,children:f})]})})})}));w.displayName="FormCheck";const j=Object.assign(w,{Input:x,Label:g});r(2473);const E=s.forwardRef((({bsPrefix:e,type:t,size:r,htmlSize:a,id:n,className:o,isValid:l=!1,isInvalid:i=!1,plaintext:d,readOnly:f,as:u="input",...p},y)=>{const{controlId:v}=(0,s.useContext)(b);let x;return e=(0,h.vE)(e,"form-control"),x=d?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${r}`]:r},(0,m.jsx)(u,{...p,type:t,size:a,ref:y,readOnly:f,id:n||v,className:c()(o,x,l&&"is-valid",i&&"is-invalid","color"===t&&`${e}-color`)})}));E.displayName="FormControl";const F=Object.assign(E,{Feedback:y}),k=(0,r(4680).Z)("form-floating"),C=s.forwardRef((({controlId:e,as:t="div",...r},a)=>{const n=(0,s.useMemo)((()=>({controlId:e})),[e]);return(0,m.jsx)(b.Provider,{value:n,children:(0,m.jsx)(t,{...r,ref:a})})}));C.displayName="FormGroup";const P=C,I=s.forwardRef(((e,t)=>{const[{className:r,...s},{as:a="div",bsPrefix:n,spans:o}]=function({as:e,bsPrefix:t,className:r,...s}){t=(0,h.vE)(t,"col");const a=(0,h.pi)(),n=(0,h.zG)(),o=[],l=[];return a.forEach((e=>{const r=s[e];let a,i,c;delete s[e],"object"==typeof r&&null!=r?({span:a,offset:i,order:c}=r):a=r;const d=e!==n?`-${e}`:"";a&&o.push(!0===a?`${t}${d}`:`${t}${d}-${a}`),null!=c&&l.push(`order${d}-${c}`),null!=i&&l.push(`offset${d}-${i}`)})),[{...s,className:c()(r,...o,...l)},{as:e,bsPrefix:t,spans:o}]}(e);return(0,m.jsx)(a,{...s,ref:t,className:c()(r,!o.length&&n)})}));I.displayName="Col";const O=I,R=s.forwardRef((({as:e="label",bsPrefix:t,column:r,visuallyHidden:a,className:n,htmlFor:o,...l},i)=>{const{controlId:d}=(0,s.useContext)(b);t=(0,h.vE)(t,"form-label");let f="col-form-label";"string"==typeof r&&(f=`${f} ${f}-${r}`);const u=c()(n,t,a&&"visually-hidden",r&&f);return o=o||d,r?(0,m.jsx)(O,{ref:i,as:"label",className:u,htmlFor:o,...l}):(0,m.jsx)(e,{ref:i,className:u,htmlFor:o,...l})}));R.displayName="FormLabel",R.defaultProps={column:!1,visuallyHidden:!1};const $=R,T=s.forwardRef((({bsPrefix:e,className:t,id:r,...a},n)=>{const{controlId:o}=(0,s.useContext)(b);return e=(0,h.vE)(e,"form-range"),(0,m.jsx)("input",{...a,type:"range",ref:n,className:c()(t,e),id:r||o})}));T.displayName="FormRange";const S=T,L=s.forwardRef((({bsPrefix:e,size:t,htmlSize:r,className:a,isValid:n=!1,isInvalid:o=!1,id:l,...i},d)=>{const{controlId:f}=(0,s.useContext)(b);return e=(0,h.vE)(e,"form-select"),(0,m.jsx)("select",{...i,size:r,ref:d,className:c()(a,e,t&&`${e}-${t}`,n&&"is-valid",o&&"is-invalid"),id:l||f})}));L.displayName="FormSelect";const z=L,_=s.forwardRef((({bsPrefix:e,className:t,as:r="small",muted:s,...a},n)=>(e=(0,h.vE)(e,"form-text"),(0,m.jsx)(r,{...a,ref:n,className:c()(t,e,s&&"text-muted")}))));_.displayName="FormText";const V=_,M=s.forwardRef(((e,t)=>(0,m.jsx)(j,{...e,ref:t,type:"switch"})));M.displayName="Switch";const B=Object.assign(M,{Input:j.Input,Label:j.Label}),U=s.forwardRef((({bsPrefix:e,className:t,children:r,controlId:s,label:a,...n},o)=>(e=(0,h.vE)(e,"form-floating"),(0,m.jsxs)(P,{ref:o,className:c()(t,e),controlId:s,...n,children:[r,(0,m.jsx)("label",{htmlFor:s,children:a})]}))));U.displayName="FloatingLabel";const A=U,G={_ref:f().any,validated:f().bool,as:f().elementType},H=s.forwardRef((({className:e,validated:t,as:r="form",...s},a)=>(0,m.jsx)(r,{...s,ref:a,className:c()(e,t&&"was-validated")})));H.displayName="Form",H.propTypes=G;const W=Object.assign(H,{Group:P,Control:F,Floating:k,Check:j,Switch:B,Label:$,Text:V,Range:S,Select:z,FloatingLabel:A}),Z={};var D=["purpose"];const Q=function(e){var t=e.purpose,r=function(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,D);return s.createElement(W.Select,{className:Z.select},s.createElement("option",{selected:!0,disabled:!0},t),r.children)},q=(0,s.memo)((function(e){var t=e.setFilter,r=e.regions;return s.createElement(Q,{purpose:"Filter by Region"},r.map((function(e){return s.createElement("option",{key:e,value:e,onClick:function(){t({searchQuery:e,fieldName:"region"})}},e)})))})),Y=(0,s.memo)((function(e){var t=e.setFieldToSortBy,r=e.fields;return s.createElement(Q,{purpose:"Sort By Feature"},r.map((function(e){return s.createElement("option",{key:e,value:e,onClick:function(){t(e)}},e)})))})),J=function(e){return Array.from(new Set(e))},K=function(e){var t=e.countries,r=e.setFilter,a=e.setFieldToSortBy,n=(0,s.useMemo)((function(){return J(t.map((function(e){return e.region})))}),[t]),i=(0,s.useMemo)((function(){var e;return J(null===(e=Object.keys(t[0]||[]))||void 0===e?void 0:e.filter((function(e){return!e.match(/flag|indep/i)})).map((function(e){return(t=e)[0].toUpperCase()+t.slice(1);var t})))}),[t]);return s.createElement(l.Z,{fluid:!0,className:"px-3 px-md-5 py-5 w-100 d-flex justify-content-start justify-content-md-between  align-items-center gap-4"},s.createElement(o,{setFilter:r}),s.createElement(Y,{setFieldToSortBy:a,fields:i}),s.createElement(q,{setFilter:r,regions:n}))}},2703:(e,t,r)=>{"use strict";var s=r(414);function a(){}function n(){}n.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,n,o){if(o!==s){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:a};return r.PropTypes=r,r}},5697:(e,t,r)=>{e.exports=r(2703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4680:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var s=r(4184),a=r.n(s),n=/-(.)/g,o=r(7294),l=r(6792),i=r(5893);const c=e=>{return e[0].toUpperCase()+(t=e,t.replace(n,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e,{displayName:t=c(e),Component:r,defaultProps:s}={}){const n=o.forwardRef((({className:t,bsPrefix:s,as:n=r||"div",...o},c)=>{const d=(0,l.vE)(s,e);return(0,i.jsx)(n,{ref:c,className:a()(t,d),...o})}));return n.defaultProps=s,n.displayName=t,n}},2473:e=>{"use strict";e.exports=function(){}}}]);
//# sourceMappingURL=729.bundle.js.map