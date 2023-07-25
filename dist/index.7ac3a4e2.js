function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=n.parcelRequire7d1d;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},n.parcelRequire7d1d=s),s.register("cjuLU",(function(t,n){
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,o;e(t.exports,"Fragment",(()=>r),(e=>r=e)),e(t.exports,"jsx",(()=>i),(e=>i=e)),e(t.exports,"jsxs",(()=>o),(e=>o=e));var a=s("fYo6y"),l=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,h=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,n){var r,i={},s=null,o=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(o=t.ref),t)u.call(t,r)&&!d.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:l,type:e,key:s,ref:o,props:i,_owner:h.current}}r=c,i=f,o=f})),s.register("fYo6y",(function(e,t){e.exports=s("ha5xJ")})),s.register("ha5xJ",(function(t,n){
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,s,o,a,l,c,u,h,d,f,p,m,g,y,v,b,w,x,k,_,E,I,S,T,C,N,R,P,j,A,D,O,M,L;e(t.exports,"Children",(()=>r),(e=>r=e)),e(t.exports,"Component",(()=>i),(e=>i=e)),e(t.exports,"Fragment",(()=>s),(e=>s=e)),e(t.exports,"Profiler",(()=>o),(e=>o=e)),e(t.exports,"PureComponent",(()=>a),(e=>a=e)),e(t.exports,"StrictMode",(()=>l),(e=>l=e)),e(t.exports,"Suspense",(()=>c),(e=>c=e)),e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(()=>u),(e=>u=e)),e(t.exports,"cloneElement",(()=>h),(e=>h=e)),e(t.exports,"createContext",(()=>d),(e=>d=e)),e(t.exports,"createElement",(()=>f),(e=>f=e)),e(t.exports,"createFactory",(()=>p),(e=>p=e)),e(t.exports,"createRef",(()=>m),(e=>m=e)),e(t.exports,"forwardRef",(()=>g),(e=>g=e)),e(t.exports,"isValidElement",(()=>y),(e=>y=e)),e(t.exports,"lazy",(()=>v),(e=>v=e)),e(t.exports,"memo",(()=>b),(e=>b=e)),e(t.exports,"startTransition",(()=>w),(e=>w=e)),e(t.exports,"unstable_act",(()=>x),(e=>x=e)),e(t.exports,"useCallback",(()=>k),(e=>k=e)),e(t.exports,"useContext",(()=>_),(e=>_=e)),e(t.exports,"useDebugValue",(()=>E),(e=>E=e)),e(t.exports,"useDeferredValue",(()=>I),(e=>I=e)),e(t.exports,"useEffect",(()=>S),(e=>S=e)),e(t.exports,"useId",(()=>T),(e=>T=e)),e(t.exports,"useImperativeHandle",(()=>C),(e=>C=e)),e(t.exports,"useInsertionEffect",(()=>N),(e=>N=e)),e(t.exports,"useLayoutEffect",(()=>R),(e=>R=e)),e(t.exports,"useMemo",(()=>P),(e=>P=e)),e(t.exports,"useReducer",(()=>j),(e=>j=e)),e(t.exports,"useRef",(()=>A),(e=>A=e)),e(t.exports,"useState",(()=>D),(e=>D=e)),e(t.exports,"useSyncExternalStore",(()=>O),(e=>O=e)),e(t.exports,"useTransition",(()=>M),(e=>M=e)),e(t.exports,"version",(()=>L),(e=>L=e));var U=Symbol.for("react.element"),F=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),q=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),W=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),Q=Symbol.iterator;var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,J={};function Z(e,t,n){this.props=e,this.context=t,this.refs=J,this.updater=n||Y}function ee(){}function te(e,t,n){this.props=e,this.context=t,this.refs=J,this.updater=n||Y}Z.prototype.isReactComponent={},Z.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},Z.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=Z.prototype;var ne=te.prototype=new ee;ne.constructor=te,X(ne,Z.prototype),ne.isPureReactComponent=!0;var re=Array.isArray,ie=Object.prototype.hasOwnProperty,se={current:null},oe={key:!0,ref:!0,__self:!0,__source:!0};function ae(e,t,n){var r,i={},s=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)ie.call(t,r)&&!oe.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return{$$typeof:U,type:e,key:s,ref:o,props:i,_owner:se.current}}function le(e){return"object"==typeof e&&null!==e&&e.$$typeof===U}var ce=/\/+/g;function ue(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function he(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var o=!1;if(null===e)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case U:case F:o=!0}}if(o)return i=i(o=e),e=""===r?"."+ue(o,0):r,re(i)?(n="",null!=e&&(n=e.replace(ce,"$&/")+"/"),he(i,t,n,"",(function(e){return e}))):null!=i&&(le(i)&&(i=function(e,t){return{$$typeof:U,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ce,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=""===r?".":r+":",re(e))for(var a=0;a<e.length;a++){var l=r+ue(s=e[a],a);o+=he(s,t,n,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Q&&e[Q]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(s=e.next()).done;)o+=he(s=s.value,t,n,l=r+ue(s,a++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function de(e,t,n){if(null==e)return e;var r=[],i=0;return he(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function fe(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var pe={current:null},me={transition:null};r={map:de,forEach:function(e,t,n){de(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return de(e,(function(){t++})),t},toArray:function(e){return de(e,(function(e){return e}))||[]},only:function(e){if(!le(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},i=Z,s=$,o=V,a=te,l=z,c=K,u={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:me,ReactCurrentOwner:se},h=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=X({},e.props),i=e.key,s=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,o=se.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)ie.call(t,l)&&!oe.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==a?a[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:U,type:e.type,key:i,ref:s,props:r,_owner:o}},d=function(e){return(e={$$typeof:q,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:B,_context:e},e.Consumer=e},f=ae,p=function(e){var t=ae.bind(null,e);return t.type=e,t},m=function(){return{current:null}},g=function(e){return{$$typeof:H,render:e}},y=le,v=function(e){return{$$typeof:G,_payload:{_status:-1,_result:e},_init:fe}},b=function(e,t){return{$$typeof:W,type:e,compare:void 0===t?null:t}},w=function(e){var t=me.transition;me.transition={};try{e()}finally{me.transition=t}},x=function(){throw Error("act(...) is not supported in production builds of React.")},k=function(e,t){return pe.current.useCallback(e,t)},_=function(e){return pe.current.useContext(e)},E=function(){},I=function(e){return pe.current.useDeferredValue(e)},S=function(e,t){return pe.current.useEffect(e,t)},T=function(){return pe.current.useId()},C=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)},N=function(e,t){return pe.current.useInsertionEffect(e,t)},R=function(e,t){return pe.current.useLayoutEffect(e,t)},P=function(e,t){return pe.current.useMemo(e,t)},j=function(e,t,n){return pe.current.useReducer(e,t,n)},A=function(e){return pe.current.useRef(e)},D=function(e){return pe.current.useState(e)},O=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)},M=function(){return pe.current.useTransition()},L="18.2.0"})),s.register("gAtBI",(function(t,n){
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,o,a,l,c,u,h,d,f,p,m;e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(()=>r),(e=>r=e)),e(t.exports,"createPortal",(()=>i),(e=>i=e)),e(t.exports,"createRoot",(()=>o),(e=>o=e)),e(t.exports,"findDOMNode",(()=>a),(e=>a=e)),e(t.exports,"flushSync",(()=>l),(e=>l=e)),e(t.exports,"hydrate",(()=>c),(e=>c=e)),e(t.exports,"hydrateRoot",(()=>u),(e=>u=e)),e(t.exports,"render",(()=>h),(e=>h=e)),e(t.exports,"unmountComponentAtNode",(()=>d),(e=>d=e)),e(t.exports,"unstable_batchedUpdates",(()=>f),(e=>f=e)),e(t.exports,"unstable_renderSubtreeIntoContainer",(()=>p),(e=>p=e)),e(t.exports,"version",(()=>m),(e=>m=e));var g=s("fYo6y"),y=s("6qr1r");function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b=new Set,w={};function x(e,t){k(e,t),k(e+"Capture",t)}function k(e,t){for(w[e]=t,e=0;e<t.length;e++)b.add(t[e])}var _=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),E=Object.prototype.hasOwnProperty,I=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S={},T={};function C(e,t,n,r,i,s,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){N[e]=new C(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];N[t]=new C(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){N[e]=new C(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){N[e]=new C(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){N[e]=new C(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){N[e]=new C(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){N[e]=new C(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){N[e]=new C(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){N[e]=new C(e,5,!1,e.toLowerCase(),null,!1,!1)}));var R=/[\-:]([a-z])/g;function P(e){return e[1].toUpperCase()}function j(e,t,n,r){var i=N.hasOwnProperty(t)?N[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!E.call(T,e)||!E.call(S,e)&&(I.test(e)?T[e]=!0:(S[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(R,P);N[t]=new C(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(R,P);N[t]=new C(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(R,P);N[t]=new C(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){N[e]=new C(e,1,!1,e.toLowerCase(),null,!1,!1)})),N.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){N[e]=new C(e,1,!1,e.toLowerCase(),null,!0,!0)}));var A=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),O=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),$=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),H=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var K=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var W=Symbol.iterator;function G(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=W&&e[W]||e["@@iterator"])?e:null}var Q,Y=Object.assign;function X(e){if(void 0===Q)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Q=t&&t[1]||""}return"\n"+Q+e}var J=!1;function Z(e,t){if(!e||J)return"";J=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),s=r.stack.split("\n"),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(1!==o||1!==a)do{if(o--,0>--a||i[o]!==s[a]){var l="\n"+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=a);break}}}finally{J=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?X(e):""}function ee(e){switch(e.tag){case 5:return X(e.type);case 16:return X("Lazy");case 13:return X("Suspense");case 19:return X("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1);case 11:return e=Z(e.type.render,!1);case 1:return e=Z(e.type,!0);default:return""}}function te(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case M:return"Fragment";case O:return"Portal";case U:return"Profiler";case L:return"StrictMode";case V:return"Suspense";case B:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case $:return(e.displayName||"Context")+".Consumer";case F:return(e._context.displayName||"Context")+".Provider";case z:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case q:return null!==(t=e.displayName||null)?t:te(e.type)||"Memo";case H:t=e._payload,e=e._init;try{return te(e(t))}catch(e){}}return null}function ne(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(t);case 8:return t===L?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ie(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function se(e){e._valueTracker||(e._valueTracker=function(e){var t=ie(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,s.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function oe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ie(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ae(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function le(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ce(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=re(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ue(e,t){null!=(t=t.checked)&&j(e,"checked",t,!1)}function he(e,t){ue(e,t);var n=re(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?fe(e,t.type,n):t.hasOwnProperty("defaultValue")&&fe(e,t.type,re(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function de(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function fe(e,t,n){"number"===t&&ae(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pe=Array.isArray;function me(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+re(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function ge(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(v(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ye(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(v(92));if(pe(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:re(n)}}function ve(e,t){var n=re(t.value),r=re(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function be(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function we(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xe(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?we(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ke,_e,Ee=(_e=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ke=ke||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ke.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return _e(e,t)}))}:_e);function Ie(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Te=["Webkit","ms","Moz","O"];function Ce(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Se.hasOwnProperty(e)&&Se[e]?(""+t).trim():t+"px"}function Ne(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=Ce(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(Se).forEach((function(e){Te.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Se[t]=Se[e]}))}));var Re=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pe(e,t){if(t){if(Re[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(v(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(v(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(v(62))}}function je(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ae=null;function De(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Oe=null,Me=null,Le=null;function Ue(e){if(e=ji(e)){if("function"!=typeof Oe)throw Error(v(280));var t=e.stateNode;t&&(t=Di(t),Oe(e.stateNode,e.type,t))}}function Fe(e){Me?Le?Le.push(e):Le=[e]:Me=e}function $e(){if(Me){var e=Me,t=Le;if(Le=Me=null,Ue(e),t)for(e=0;e<t.length;e++)Ue(t[e])}}function ze(e,t){return e(t)}function Ve(){}var Be=!1;function qe(e,t,n){if(Be)return e(t,n);Be=!0;try{return ze(e,t,n)}finally{Be=!1,(null!==Me||null!==Le)&&(Ve(),$e())}}function He(e,t){var n=e.stateNode;if(null===n)return null;var r=Di(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(v(231,t,typeof n));return n}var Ke=!1;if(_)try{var We={};Object.defineProperty(We,"passive",{get:function(){Ke=!0}}),window.addEventListener("test",We,We),window.removeEventListener("test",We,We)}catch(_e){Ke=!1}function Ge(e,t,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(e){this.onError(e)}}var Qe=!1,Ye=null,Xe=!1,Je=null,Ze={onError:function(e){Qe=!0,Ye=e}};function et(e,t,n,r,i,s,o,a,l){Qe=!1,Ye=null,Ge.apply(Ze,arguments)}function tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function nt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function rt(e){if(tt(e)!==e)throw Error(v(188))}function it(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=tt(e)))throw Error(v(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var s=i.alternate;if(null===s){if(null!==(r=i.return)){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return rt(i),e;if(s===r)return rt(i),t;s=s.sibling}throw Error(v(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(3!==n.tag)throw Error(v(188));return n.stateNode.current===n?e:t}(e))?st(e):null}function st(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=st(e);if(null!==t)return t;e=e.sibling}return null}var ot=y.unstable_scheduleCallback,at=y.unstable_cancelCallback,lt=y.unstable_shouldYield,ct=y.unstable_requestPaint,ut=y.unstable_now,ht=y.unstable_getCurrentPriorityLevel,dt=y.unstable_ImmediatePriority,ft=y.unstable_UserBlockingPriority,pt=y.unstable_NormalPriority,mt=y.unstable_LowPriority,gt=y.unstable_IdlePriority,yt=null,vt=null;var bt=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(wt(e)/xt|0)|0},wt=Math.log,xt=Math.LN2;var kt=64,_t=4194304;function Et(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function It(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=268435455&n;if(0!==o){var a=o&~i;0!==a?r=Et(a):0!==(s&=o)&&(r=Et(s))}else 0!==(o=n&~i)?r=Et(o):0!==s&&(r=Et(s));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&i)&&((i=r&-r)>=(s=t&-t)||16===i&&0!=(4194240&s)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-bt(t)),r|=e[n],t&=~i;return r}function St(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Tt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function Ct(){var e=kt;return 0==(4194240&(kt<<=1))&&(kt=64),e}function Nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Rt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-bt(t)]=n}function Pt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var jt=0;function At(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var Dt,Ot,Mt,Lt,Ut,Ft=!1,$t=[],zt=null,Vt=null,Bt=null,qt=new Map,Ht=new Map,Kt=[],Wt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gt(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":qt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ht.delete(t.pointerId)}}function Qt(e,t,n,r,i,s){return null===e||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},null!==t&&(null!==(t=ji(t))&&Ot(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Yt(e){var t=Pi(e.target);if(null!==t){var n=tt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=nt(n)))return e.blockedOn=t,void Ut(e.priority,(function(){Mt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Xt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=cn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ji(n))&&Ot(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Ae=r,n.target.dispatchEvent(r),Ae=null,t.shift()}return!0}function Jt(e,t,n){Xt(e)&&n.delete(t)}function Zt(){Ft=!1,null!==zt&&Xt(zt)&&(zt=null),null!==Vt&&Xt(Vt)&&(Vt=null),null!==Bt&&Xt(Bt)&&(Bt=null),qt.forEach(Jt),Ht.forEach(Jt)}function en(e,t){e.blockedOn===t&&(e.blockedOn=null,Ft||(Ft=!0,y.unstable_scheduleCallback(y.unstable_NormalPriority,Zt)))}function tn(e){function t(t){return en(t,e)}if(0<$t.length){en($t[0],e);for(var n=1;n<$t.length;n++){var r=$t[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==zt&&en(zt,e),null!==Vt&&en(Vt,e),null!==Bt&&en(Bt,e),qt.forEach(t),Ht.forEach(t),n=0;n<Kt.length;n++)(r=Kt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&null===(n=Kt[0]).blockedOn;)Yt(n),null===n.blockedOn&&Kt.shift()}var nn=A.ReactCurrentBatchConfig,rn=!0;function sn(e,t,n,r){var i=jt,s=nn.transition;nn.transition=null;try{jt=1,an(e,t,n,r)}finally{jt=i,nn.transition=s}}function on(e,t,n,r){var i=jt,s=nn.transition;nn.transition=null;try{jt=4,an(e,t,n,r)}finally{jt=i,nn.transition=s}}function an(e,t,n,r){if(rn){var i=cn(e,t,n,r);if(null===i)ri(e,t,r,ln,n),Gt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return zt=Qt(zt,e,t,n,r,i),!0;case"dragenter":return Vt=Qt(Vt,e,t,n,r,i),!0;case"mouseover":return Bt=Qt(Bt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return qt.set(s,Qt(qt.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ht.set(s,Qt(Ht.get(s)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Gt(e,r),4&t&&-1<Wt.indexOf(e)){for(;null!==i;){var s=ji(i);if(null!==s&&Dt(s),null===(s=cn(e,t,n,r))&&ri(e,t,r,ln,n),s===i)break;i=s}null!==i&&r.stopPropagation()}else ri(e,t,r,null,n)}}var ln=null;function cn(e,t,n,r){if(ln=null,null!==(e=Pi(e=De(r))))if(null===(t=tt(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=nt(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ln=e,null}function un(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ht()){case dt:return 1;case ft:return 4;case pt:case mt:return 16;case gt:return 536870912;default:return 16}default:return 16}}var hn=null,dn=null,fn=null;function pn(){if(fn)return fn;var e,t,n=dn,r=n.length,i="value"in hn?hn.value:hn.textContent,s=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[s-t];t++);return fn=i.slice(e,1<t?1-t:void 0)}function mn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function gn(){return!0}function yn(){return!1}function vn(e){function t(t,n,r,i,s){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?gn:yn,this.isPropagationStopped=yn,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=gn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=gn)},persist:function(){},isPersistent:gn}),t}var bn,wn,xn,kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_n=vn(kn),En=Y({},kn,{view:0,detail:0}),In=vn(En),Sn=Y({},En,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Un,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xn&&(xn&&"mousemove"===e.type?(bn=e.screenX-xn.screenX,wn=e.screenY-xn.screenY):wn=bn=0,xn=e),bn)},movementY:function(e){return"movementY"in e?e.movementY:wn}}),Tn=vn(Sn),Cn=vn(Y({},Sn,{dataTransfer:0})),Nn=vn(Y({},En,{relatedTarget:0})),Rn=vn(Y({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Pn=Y({},kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jn=vn(Pn),An=vn(Y({},kn,{data:0})),Dn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},On={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ln(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Mn[e])&&!!t[e]}function Un(){return Ln}var Fn=Y({},En,{key:function(e){if(e.key){var t=Dn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=mn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?On[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Un,charCode:function(e){return"keypress"===e.type?mn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?mn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),$n=vn(Fn),zn=vn(Y({},Sn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Vn=vn(Y({},En,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Un})),Bn=vn(Y({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),qn=Y({},Sn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hn=vn(qn),Kn=[9,13,27,32],Wn=_&&"CompositionEvent"in window,Gn=null;_&&"documentMode"in document&&(Gn=document.documentMode);var Qn=_&&"TextEvent"in window&&!Gn,Yn=_&&(!Wn||Gn&&8<Gn&&11>=Gn),Xn=String.fromCharCode(32),Jn=!1;function Zn(e,t){switch(e){case"keyup":return-1!==Kn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function er(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var tr=!1;var nr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nr[e.type]:"textarea"===t}function ir(e,t,n,r){Fe(r),0<(t=si(t,"onChange")).length&&(n=new _n("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var sr=null,or=null;function ar(e){Xr(e,0)}function lr(e){if(oe(Ai(e)))return e}function cr(e,t){if("change"===e)return t}var ur=!1;if(_){var hr;if(_){var dr="oninput"in document;if(!dr){var fr=document.createElement("div");fr.setAttribute("oninput","return;"),dr="function"==typeof fr.oninput}hr=dr}else hr=!1;ur=hr&&(!document.documentMode||9<document.documentMode)}function pr(){sr&&(sr.detachEvent("onpropertychange",mr),or=sr=null)}function mr(e){if("value"===e.propertyName&&lr(or)){var t=[];ir(t,or,e,De(e)),qe(ar,t)}}function gr(e,t,n){"focusin"===e?(pr(),or=n,(sr=t).attachEvent("onpropertychange",mr)):"focusout"===e&&pr()}function yr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return lr(or)}function vr(e,t){if("click"===e)return lr(t)}function br(e,t){if("input"===e||"change"===e)return lr(t)}var wr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function xr(e,t){if(wr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!E.call(t,i)||!wr(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _r(e,t){var n,r=kr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=kr(r)}}function Er(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Er(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Ir(){for(var e=window,t=ae();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=ae((e=t.contentWindow).document)}return t}function Sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function Tr(e){var t=Ir(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Er(n.ownerDocument.documentElement,n)){if(null!==r&&Sr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=void 0===r.end?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=_r(n,s);var o=_r(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cr=_&&"documentMode"in document&&11>=document.documentMode,Nr=null,Rr=null,Pr=null,jr=!1;function Ar(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;jr||null==Nr||Nr!==ae(r)||("selectionStart"in(r=Nr)&&Sr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},Pr&&xr(Pr,r)||(Pr=r,0<(r=si(Rr,"onSelect")).length&&(t=new _n("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nr)))}function Dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Or={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionend:Dr("Transition","TransitionEnd")},Mr={},Lr={};function Ur(e){if(Mr[e])return Mr[e];if(!Or[e])return e;var t,n=Or[e];for(t in n)if(n.hasOwnProperty(t)&&t in Lr)return Mr[e]=n[t];return e}_&&(Lr=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);var Fr=Ur("animationend"),$r=Ur("animationiteration"),zr=Ur("animationstart"),Vr=Ur("transitionend"),Br=new Map,qr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(e,t){Br.set(e,t),x(t,[e])}for(var Kr=0;Kr<qr.length;Kr++){var Wr=qr[Kr];Hr(Wr.toLowerCase(),"on"+(Wr[0].toUpperCase()+Wr.slice(1)))}Hr(Fr,"onAnimationEnd"),Hr($r,"onAnimationIteration"),Hr(zr,"onAnimationStart"),Hr("dblclick","onDoubleClick"),Hr("focusin","onFocus"),Hr("focusout","onBlur"),Hr(Vr,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),x("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),x("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),x("onBeforeInput",["compositionend","keypress","textInput","paste"]),x("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));function Yr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,s,o,a,l){if(et.apply(this,arguments),Qe){if(!Qe)throw Error(v(198));var c=Ye;Qe=!1,Ye=null,Xe||(Xe=!0,Je=c)}}(r,t,void 0,e),e.currentTarget=null}function Xr(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Yr(i,a,c),s=l}else for(o=0;o<r.length;o++){if(l=(a=r[o]).instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Yr(i,a,c),s=l}}}if(Xe)throw e=Je,Xe=!1,Je=null,e}function Jr(e,t){var n=t[Ci];void 0===n&&(n=t[Ci]=new Set);var r=e+"__bubble";n.has(r)||(ni(t,e,2,!1),n.add(r))}function Zr(e,t,n){var r=0;t&&(r|=4),ni(n,e,r,t)}var ei="_reactListening"+Math.random().toString(36).slice(2);function ti(e){if(!e[ei]){e[ei]=!0,b.forEach((function(t){"selectionchange"!==t&&(Qr.has(t)||Zr(t,!1,e),Zr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[ei]||(t[ei]=!0,Zr("selectionchange",!1,t))}}function ni(e,t,n,r){switch(un(t)){case 1:var i=sn;break;case 4:i=on;break;default:i=an}n=i.bind(null,t,n,e),i=void 0,!Ke||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ri(e,t,n,r,i){var s=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var a=r.stateNode.containerInfo;if(a===i||8===a.nodeType&&a.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==a;){if(null===(o=Pi(a)))return;if(5===(l=o.tag)||6===l){r=s=o;continue e}a=a.parentNode}}r=r.return}qe((function(){var r=s,i=De(n),o=[];e:{var a=Br.get(e);if(void 0!==a){var l=_n,c=e;switch(e){case"keypress":if(0===mn(n))break e;case"keydown":case"keyup":l=$n;break;case"focusin":c="focus",l=Nn;break;case"focusout":c="blur",l=Nn;break;case"beforeblur":case"afterblur":l=Nn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=Tn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=Cn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Vn;break;case Fr:case $r:case zr:l=Rn;break;case Vr:l=Bn;break;case"scroll":l=In;break;case"wheel":l=Hn;break;case"copy":case"cut":case"paste":l=jn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=zn}var u=0!=(4&t),h=!u&&"scroll"===e,d=u?null!==a?a+"Capture":null:a;u=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==d&&(null!=(m=He(p,d))&&u.push(ii(p,m,f)))),h)break;p=p.return}0<u.length&&(a=new l(a,c,null,n,i),o.push({event:a,listeners:u}))}}if(0==(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(a="mouseover"===e||"pointerover"===e)||n===Ae||!(c=n.relatedTarget||n.fromElement)||!Pi(c)&&!c[Ti])&&(l||a)&&(a=i.window===i?i:(a=i.ownerDocument)?a.defaultView||a.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?Pi(c):null)&&(c!==(h=tt(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=Tn,m="onMouseLeave",d="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(u=zn,m="onPointerLeave",d="onPointerEnter",p="pointer"),h=null==l?a:Ai(l),f=null==c?a:Ai(c),(a=new u(m,p+"leave",l,n,i)).target=h,a.relatedTarget=f,m=null,Pi(i)===r&&((u=new u(d,p+"enter",c,n,i)).target=f,u.relatedTarget=h,m=u),h=m,l&&c)e:{for(d=c,p=0,f=u=l;f;f=oi(f))p++;for(f=0,m=d;m;m=oi(m))f++;for(;0<p-f;)u=oi(u),p--;for(;0<f-p;)d=oi(d),f--;for(;p--;){if(u===d||null!==d&&u===d.alternate)break e;u=oi(u),d=oi(d)}u=null}else u=null;null!==l&&ai(o,a,l,u,!1),null!==c&&null!==h&&ai(o,h,c,u,!0)}if("select"===(l=(a=r?Ai(r):window).nodeName&&a.nodeName.toLowerCase())||"input"===l&&"file"===a.type)var g=cr;else if(rr(a))if(ur)g=br;else{g=yr;var y=gr}else(l=a.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===a.type||"radio"===a.type)&&(g=vr);switch(g&&(g=g(e,r))?ir(o,g,n,i):(y&&y(e,a,r),"focusout"===e&&(y=a._wrapperState)&&y.controlled&&"number"===a.type&&fe(a,"number",a.value)),y=r?Ai(r):window,e){case"focusin":(rr(y)||"true"===y.contentEditable)&&(Nr=y,Rr=r,Pr=null);break;case"focusout":Pr=Rr=Nr=null;break;case"mousedown":jr=!0;break;case"contextmenu":case"mouseup":case"dragend":jr=!1,Ar(o,n,i);break;case"selectionchange":if(Cr)break;case"keydown":case"keyup":Ar(o,n,i)}var v;if(Wn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else tr?Zn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Yn&&"ko"!==n.locale&&(tr||"onCompositionStart"!==b?"onCompositionEnd"===b&&tr&&(v=pn()):(dn="value"in(hn=i)?hn.value:hn.textContent,tr=!0)),0<(y=si(r,b)).length&&(b=new An(b,e,null,n,i),o.push({event:b,listeners:y}),v?b.data=v:null!==(v=er(n))&&(b.data=v))),(v=Qn?function(e,t){switch(e){case"compositionend":return er(t);case"keypress":return 32!==t.which?null:(Jn=!0,Xn);case"textInput":return(e=t.data)===Xn&&Jn?null:e;default:return null}}(e,n):function(e,t){if(tr)return"compositionend"===e||!Wn&&Zn(e,t)?(e=pn(),fn=dn=hn=null,tr=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=si(r,"onBeforeInput")).length&&(i=new An("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=v))}Xr(o,t)}))}function ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function si(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,s=i.stateNode;5===i.tag&&null!==s&&(i=s,null!=(s=He(e,n))&&r.unshift(ii(e,s,i)),null!=(s=He(e,t))&&r.push(ii(e,s,i))),e=e.return}return r}function oi(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function ai(e,t,n,r,i){for(var s=t._reactName,o=[];null!==n&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(null!==l&&l===r)break;5===a.tag&&null!==c&&(a=c,i?null!=(l=He(n,s))&&o.unshift(ii(n,l,a)):i||null!=(l=He(n,s))&&o.push(ii(n,l,a))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var li=/\r\n?/g,ci=/\u0000|\uFFFD/g;function ui(e){return("string"==typeof e?e:""+e).replace(li,"\n").replace(ci,"")}function hi(e,t,n){if(t=ui(t),ui(e)!==t&&n)throw Error(v(425))}function di(){}var fi=null,pi=null;function mi(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var gi="function"==typeof setTimeout?setTimeout:void 0,yi="function"==typeof clearTimeout?clearTimeout:void 0,vi="function"==typeof Promise?Promise:void 0,bi="function"==typeof queueMicrotask?queueMicrotask:void 0!==vi?function(e){return vi.resolve(null).then(e).catch(wi)}:gi;function wi(e){setTimeout((function(){throw e}))}function xi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void tn(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);tn(t)}function ki(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function _i(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var Ei=Math.random().toString(36).slice(2),Ii="__reactFiber$"+Ei,Si="__reactProps$"+Ei,Ti="__reactContainer$"+Ei,Ci="__reactEvents$"+Ei,Ni="__reactListeners$"+Ei,Ri="__reactHandles$"+Ei;function Pi(e){var t=e[Ii];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ti]||n[Ii]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=_i(e);null!==e;){if(n=e[Ii])return n;e=_i(e)}return t}n=(e=n).parentNode}return null}function ji(e){return!(e=e[Ii]||e[Ti])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Ai(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(v(33))}function Di(e){return e[Si]||null}var Oi=[],Mi=-1;function Li(e){return{current:e}}function Ui(e){0>Mi||(e.current=Oi[Mi],Oi[Mi]=null,Mi--)}function Fi(e,t){Mi++,Oi[Mi]=e.current,e.current=t}var $i={},zi=Li($i),Vi=Li(!1),Bi=$i;function qi(e,t){var n=e.type.contextTypes;if(!n)return $i;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,s={};for(i in n)s[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Hi(e){return null!=(e=e.childContextTypes)}function Ki(){Ui(Vi),Ui(zi)}function Wi(e,t,n){if(zi.current!==$i)throw Error(v(168));Fi(zi,t),Fi(Vi,n)}function Gi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(v(108,ne(e)||"Unknown",i));return Y({},n,r)}function Qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$i,Bi=zi.current,Fi(zi,e),Fi(Vi,Vi.current),!0}function Yi(e,t,n){var r=e.stateNode;if(!r)throw Error(v(169));n?(e=Gi(e,t,Bi),r.__reactInternalMemoizedMergedChildContext=e,Ui(Vi),Ui(zi),Fi(zi,e)):Ui(Vi),Fi(Vi,n)}var Xi=null,Ji=!1,Zi=!1;function es(e){null===Xi?Xi=[e]:Xi.push(e)}function ts(){if(!Zi&&null!==Xi){Zi=!0;var e=0,t=jt;try{var n=Xi;for(jt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Xi=null,Ji=!1}catch(t){throw null!==Xi&&(Xi=Xi.slice(e+1)),ot(dt,ts),t}finally{jt=t,Zi=!1}}return null}var ns=[],rs=0,is=null,ss=0,os=[],as=0,ls=null,cs=1,us="";function hs(e,t){ns[rs++]=ss,ns[rs++]=is,is=e,ss=t}function ds(e,t,n){os[as++]=cs,os[as++]=us,os[as++]=ls,ls=e;var r=cs;e=us;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var s=32-bt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,cs=1<<32-bt(t)+i|n<<i|r,us=s+e}else cs=1<<s|n<<i|r,us=e}function fs(e){null!==e.return&&(hs(e,1),ds(e,1,0))}function ps(e){for(;e===is;)is=ns[--rs],ns[rs]=null,ss=ns[--rs],ns[rs]=null;for(;e===ls;)ls=os[--as],os[as]=null,us=os[--as],os[as]=null,cs=os[--as],os[as]=null}var ms=null,gs=null,ys=!1,vs=null;function bs(e,t){var n=Hc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function ws(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ms=e,gs=ki(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ms=e,gs=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==ls?{id:cs,overflow:us}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Hc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ms=e,gs=null,!0);default:return!1}}function xs(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function ks(e){if(ys){var t=gs;if(t){var n=t;if(!ws(e,t)){if(xs(e))throw Error(v(418));t=ki(n.nextSibling);var r=ms;t&&ws(e,t)?bs(r,n):(e.flags=-4097&e.flags|2,ys=!1,ms=e)}}else{if(xs(e))throw Error(v(418));e.flags=-4097&e.flags|2,ys=!1,ms=e}}}function _s(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ms=e}function Es(e){if(e!==ms)return!1;if(!ys)return _s(e),ys=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!mi(e.type,e.memoizedProps)),t&&(t=gs)){if(xs(e))throw Is(),Error(v(418));for(;t;)bs(e,t),t=ki(t.nextSibling)}if(_s(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){gs=ki(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}gs=null}}else gs=ms?ki(e.stateNode.nextSibling):null;return!0}function Is(){for(var e=gs;e;)e=ki(e.nextSibling)}function Ss(){gs=ms=null,ys=!1}function Ts(e){null===vs?vs=[e]:vs.push(e)}var Cs=A.ReactCurrentBatchConfig;function Ns(e,t){if(e&&e.defaultProps){for(var n in t=Y({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var Rs=Li(null),Ps=null,js=null,As=null;function Ds(){As=js=Ps=null}function Os(e){var t=Rs.current;Ui(Rs),e._currentValue=t}function Ms(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ls(e,t){Ps=e,As=js=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(Aa=!0),e.firstContext=null)}function Us(e){var t=e._currentValue;if(As!==e)if(e={context:e,memoizedValue:t,next:null},null===js){if(null===Ps)throw Error(v(308));js=e,Ps.dependencies={lanes:0,firstContext:e}}else js=js.next=e;return t}var Fs=null;function $s(e){null===Fs?Fs=[e]:Fs.push(e)}function zs(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,$s(t)):(n.next=i.next,i.next=n),t.interleaved=n,Vs(e,r)}function Vs(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Bs=!1;function qs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ks(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ws(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&Vl)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Vs(e,n)}return null===(i=r.interleaved)?(t.next=t,$s(r)):(t.next=i.next,i.next=t),r.interleaved=t,Vs(e,n)}function Gs(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Pt(e,n)}}function Qs(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,s=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===s?i=s=o:s=s.next=o,n=n.next}while(null!==n);null===s?i=s=t:s=s.next=t}else i=s=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ys(e,t,n,r){var i=e.updateQueue;Bs=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(null!==a){i.shared.pending=null;var l=a,c=l.next;l.next=null,null===o?s=c:o.next=c,o=l;var u=e.alternate;null!==u&&((a=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===a?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(null!==s){var h=i.baseState;for(o=0,u=c=l=null,a=s;;){var d=a.lane,f=a.eventTime;if((r&d)===d){null!==u&&(u=u.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=e,m=a;switch(d=t,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){h=p.call(f,h,d);break e}h=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(d="function"==typeof(p=m.payload)?p.call(f,h,d):p))break e;h=Y({},h,d);break e;case 2:Bs=!0}}null!==a.callback&&0!==a.lane&&(e.flags|=64,null===(d=i.effects)?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},null===u?(c=u=f,l=h):u=u.next=f,o|=d;if(null===(a=a.next)){if(null===(a=i.shared.pending))break;a=(d=a).next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}if(null===u&&(l=h),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===s&&(i.shared.lanes=0);Yl|=o,e.lanes=o,e.memoizedState=h}}function Xs(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(v(191,i));i.call(r)}}}var Js=(new g.Component).refs;function Zs(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:Y({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var eo={isMounted:function(e){return!!(e=e._reactInternals)&&tt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pc(),i=mc(e),s=Ks(r,i);s.payload=t,null!=n&&(s.callback=n),null!==(t=Ws(e,s,i))&&(gc(t,e,i,r),Gs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pc(),i=mc(e),s=Ks(r,i);s.tag=1,s.payload=t,null!=n&&(s.callback=n),null!==(t=Ws(e,s,i))&&(gc(t,e,i,r),Gs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pc(),r=mc(e),i=Ks(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=Ws(e,i,r))&&(gc(t,e,r,n),Gs(t,e,r))}};function to(e,t,n,r,i,s,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,s,o):!t.prototype||!t.prototype.isPureReactComponent||(!xr(n,r)||!xr(i,s))}function no(e,t,n){var r=!1,i=$i,s=t.contextType;return"object"==typeof s&&null!==s?s=Us(s):(i=Hi(t)?Bi:zi.current,s=(r=null!=(r=t.contextTypes))?qi(e,i):$i),t=new t(n,s),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=eo,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ro(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&eo.enqueueReplaceState(t,t.state,null)}function io(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Js,qs(e);var s=t.contextType;"object"==typeof s&&null!==s?i.context=Us(s):(s=Hi(t)?Bi:zi.current,i.context=qi(e,s)),i.state=e.memoizedState,"function"==typeof(s=t.getDerivedStateFromProps)&&(Zs(e,t,s,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&eo.enqueueReplaceState(i,i.state,null),Ys(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function so(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,e));var i=r,s=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===s?t.ref:(t=function(e){var t=i.refs;t===Js&&(t=i.refs={}),null===e?delete t[s]:t[s]=e},t._stringRef=s,t)}if("string"!=typeof e)throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function oo(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ao(e){return(0,e._init)(e._payload)}function lo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Wc(e,t)).index=0,e.sibling=null,e}function s(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function o(t){return e&&null===t.alternate&&(t.flags|=2),t}function a(e,t,n,r){return null===t||6!==t.tag?((t=Xc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){var s=n.type;return s===M?u(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===s||"object"==typeof s&&null!==s&&s.$$typeof===H&&ao(s)===t.type)?((r=i(t,n.props)).ref=so(e,t,n),r.return=e,r):((r=Gc(n.type,n.key,n.props,null,e.mode,r)).ref=so(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Jc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function u(e,t,n,r,s){return null===t||7!==t.tag?((t=Qc(n,e.mode,r,s)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Xc(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case D:return(n=Gc(t.type,t.key,t.props,null,e.mode,n)).ref=so(e,null,t),n.return=e,n;case O:return(t=Jc(t,e.mode,n)).return=e,t;case H:return h(e,(0,t._init)(t._payload),n)}if(pe(t)||G(t))return(t=Qc(t,e.mode,n,null)).return=e,t;oo(e,t)}return null}function d(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:a(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case D:return n.key===i?l(e,t,n,r):null;case O:return n.key===i?c(e,t,n,r):null;case H:return d(e,t,(i=n._init)(n._payload),r)}if(pe(n)||G(n))return null!==i?null:u(e,t,n,r,null);oo(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return a(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case D:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case O:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case H:return f(e,t,n,(0,r._init)(r._payload),i)}if(pe(r)||G(r))return u(t,e=e.get(n)||null,r,i,null);oo(t,r)}return null}function p(i,o,a,l){for(var c=null,u=null,p=o,m=o=0,g=null;null!==p&&m<a.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var y=d(i,p,a[m],l);if(null===y){null===p&&(p=g);break}e&&p&&null===y.alternate&&t(i,p),o=s(y,o,m),null===u?c=y:u.sibling=y,u=y,p=g}if(m===a.length)return n(i,p),ys&&hs(i,m),c;if(null===p){for(;m<a.length;m++)null!==(p=h(i,a[m],l))&&(o=s(p,o,m),null===u?c=p:u.sibling=p,u=p);return ys&&hs(i,m),c}for(p=r(i,p);m<a.length;m++)null!==(g=f(p,i,m,a[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),o=s(g,o,m),null===u?c=g:u.sibling=g,u=g);return e&&p.forEach((function(e){return t(i,e)})),ys&&hs(i,m),c}function m(i,o,a,l){var c=G(a);if("function"!=typeof c)throw Error(v(150));if(null==(a=c.call(a)))throw Error(v(151));for(var u=c=null,p=o,m=o=0,g=null,y=a.next();null!==p&&!y.done;m++,y=a.next()){p.index>m?(g=p,p=null):g=p.sibling;var b=d(i,p,y.value,l);if(null===b){null===p&&(p=g);break}e&&p&&null===b.alternate&&t(i,p),o=s(b,o,m),null===u?c=b:u.sibling=b,u=b,p=g}if(y.done)return n(i,p),ys&&hs(i,m),c;if(null===p){for(;!y.done;m++,y=a.next())null!==(y=h(i,y.value,l))&&(o=s(y,o,m),null===u?c=y:u.sibling=y,u=y);return ys&&hs(i,m),c}for(p=r(i,p);!y.done;m++,y=a.next())null!==(y=f(p,i,m,y.value,l))&&(e&&null!==y.alternate&&p.delete(null===y.key?m:y.key),o=s(y,o,m),null===u?c=y:u.sibling=y,u=y);return e&&p.forEach((function(e){return t(i,e)})),ys&&hs(i,m),c}return function e(r,s,a,l){if("object"==typeof a&&null!==a&&a.type===M&&null===a.key&&(a=a.props.children),"object"==typeof a&&null!==a){switch(a.$$typeof){case D:e:{for(var c=a.key,u=s;null!==u;){if(u.key===c){if((c=a.type)===M){if(7===u.tag){n(r,u.sibling),(s=i(u,a.props.children)).return=r,r=s;break e}}else if(u.elementType===c||"object"==typeof c&&null!==c&&c.$$typeof===H&&ao(c)===u.type){n(r,u.sibling),(s=i(u,a.props)).ref=so(r,u,a),s.return=r,r=s;break e}n(r,u);break}t(r,u),u=u.sibling}a.type===M?((s=Qc(a.props.children,r.mode,l,a.key)).return=r,r=s):((l=Gc(a.type,a.key,a.props,null,r.mode,l)).ref=so(r,s,a),l.return=r,r=l)}return o(r);case O:e:{for(u=a.key;null!==s;){if(s.key===u){if(4===s.tag&&s.stateNode.containerInfo===a.containerInfo&&s.stateNode.implementation===a.implementation){n(r,s.sibling),(s=i(s,a.children||[])).return=r,r=s;break e}n(r,s);break}t(r,s),s=s.sibling}(s=Jc(a,r.mode,l)).return=r,r=s}return o(r);case H:return e(r,s,(u=a._init)(a._payload),l)}if(pe(a))return p(r,s,a,l);if(G(a))return m(r,s,a,l);oo(r,a)}return"string"==typeof a&&""!==a||"number"==typeof a?(a=""+a,null!==s&&6===s.tag?(n(r,s.sibling),(s=i(s,a)).return=r,r=s):(n(r,s),(s=Xc(a,r.mode,l)).return=r,r=s),o(r)):n(r,s)}}var co=lo(!0),uo=lo(!1),ho={},fo=Li(ho),po=Li(ho),mo=Li(ho);function go(e){if(e===ho)throw Error(v(174));return e}function yo(e,t){switch(Fi(mo,t),Fi(po,e),Fi(fo,ho),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xe(null,"");break;default:t=xe(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ui(fo),Fi(fo,t)}function vo(){Ui(fo),Ui(po),Ui(mo)}function bo(e){go(mo.current);var t=go(fo.current),n=xe(t,e.type);t!==n&&(Fi(po,e),Fi(fo,n))}function wo(e){po.current===e&&(Ui(fo),Ui(po))}var xo=Li(0);function ko(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=[];function Eo(){for(var e=0;e<_o.length;e++)_o[e]._workInProgressVersionPrimary=null;_o.length=0}var Io=A.ReactCurrentDispatcher,So=A.ReactCurrentBatchConfig,To=0,Co=null,No=null,Ro=null,Po=!1,jo=!1,Ao=0,Do=0;function Oo(){throw Error(v(321))}function Mo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wr(e[n],t[n]))return!1;return!0}function Lo(e,t,n,r,i,s){if(To=s,Co=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Io.current=null===e||null===e.memoizedState?wa:xa,e=n(r,i),jo){s=0;do{if(jo=!1,Ao=0,25<=s)throw Error(v(301));s+=1,Ro=No=null,t.updateQueue=null,Io.current=ka,e=n(r,i)}while(jo)}if(Io.current=ba,t=null!==No&&null!==No.next,To=0,Ro=No=Co=null,Po=!1,t)throw Error(v(300));return e}function Uo(){var e=0!==Ao;return Ao=0,e}function Fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Ro?Co.memoizedState=Ro=e:Ro=Ro.next=e,Ro}function $o(){if(null===No){var e=Co.alternate;e=null!==e?e.memoizedState:null}else e=No.next;var t=null===Ro?Co.memoizedState:Ro.next;if(null!==t)Ro=t,No=e;else{if(null===e)throw Error(v(310));e={memoizedState:(No=e).memoizedState,baseState:No.baseState,baseQueue:No.baseQueue,queue:No.queue,next:null},null===Ro?Co.memoizedState=Ro=e:Ro=Ro.next=e}return Ro}function zo(e,t){return"function"==typeof t?t(e):t}function Vo(e){var t=$o(),n=t.queue;if(null===n)throw Error(v(311));n.lastRenderedReducer=e;var r=No,i=r.baseQueue,s=n.pending;if(null!==s){if(null!==i){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(null!==i){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((To&u)===u)null!==l&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===l?(a=l=h,o=r):l=l.next=h,Co.lanes|=u,Yl|=u}c=c.next}while(null!==c&&c!==s);null===l?o=r:l.next=a,wr(r,t.memoizedState)||(Aa=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{s=i.lane,Co.lanes|=s,Yl|=s,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bo(e){var t=$o(),n=t.queue;if(null===n)throw Error(v(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(null!==i){n.pending=null;var o=i=i.next;do{s=e(s,o.action),o=o.next}while(o!==i);wr(s,t.memoizedState)||(Aa=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function qo(){}function Ho(e,t){var n=Co,r=$o(),i=t(),s=!wr(r.memoizedState,i);if(s&&(r.memoizedState=i,Aa=!0),r=r.queue,ra(Go.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||null!==Ro&&1&Ro.memoizedState.tag){if(n.flags|=2048,Jo(9,Wo.bind(null,n,r,i,t),void 0,null),null===Bl)throw Error(v(349));0!=(30&To)||Ko(n,t,i)}return i}function Ko(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Co.updateQueue)?(t={lastEffect:null,stores:null},Co.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Qo(t)&&Yo(e)}function Go(e,t,n){return n((function(){Qo(t)&&Yo(e)}))}function Qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wr(e,n)}catch(e){return!0}}function Yo(e){var t=Vs(e,1);null!==t&&gc(t,e,1,-1)}function Xo(e){var t=Fo();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t.queue=e,e=e.dispatch=ma.bind(null,Co,e),[t.memoizedState,e]}function Jo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=Co.updateQueue)?(t={lastEffect:null,stores:null},Co.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Zo(){return $o().memoizedState}function ea(e,t,n,r){var i=Fo();Co.flags|=e,i.memoizedState=Jo(1|t,n,void 0,void 0===r?null:r)}function ta(e,t,n,r){var i=$o();r=void 0===r?null:r;var s=void 0;if(null!==No){var o=No.memoizedState;if(s=o.destroy,null!==r&&Mo(r,o.deps))return void(i.memoizedState=Jo(t,n,s,r))}Co.flags|=e,i.memoizedState=Jo(1|t,n,s,r)}function na(e,t){return ea(8390656,8,e,t)}function ra(e,t){return ta(2048,8,e,t)}function ia(e,t){return ta(4,2,e,t)}function sa(e,t){return ta(4,4,e,t)}function oa(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function aa(e,t,n){return n=null!=n?n.concat([e]):null,ta(4,4,oa.bind(null,t,e),n)}function la(){}function ca(e,t){var n=$o();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ua(e,t){var n=$o();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ha(e,t,n){return 0==(21&To)?(e.baseState&&(e.baseState=!1,Aa=!0),e.memoizedState=n):(wr(n,t)||(n=Ct(),Co.lanes|=n,Yl|=n,e.baseState=!0),t)}function da(e,t){var n=jt;jt=0!==n&&4>n?n:4,e(!0);var r=So.transition;So.transition={};try{e(!1),t()}finally{jt=n,So.transition=r}}function fa(){return $o().memoizedState}function pa(e,t,n){var r=mc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ga(e))ya(t,n);else if(null!==(n=zs(e,t,n,r))){gc(n,e,r,pc()),va(n,t,r)}}function ma(e,t,n){var r=mc(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ga(e))ya(t,i);else{var s=e.alternate;if(0===e.lanes&&(null===s||0===s.lanes)&&null!==(s=t.lastRenderedReducer))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,wr(a,o)){var l=t.interleaved;return null===l?(i.next=i,$s(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(e){}null!==(n=zs(e,t,i,r))&&(gc(n,e,r,i=pc()),va(n,t,r))}}function ga(e){var t=e.alternate;return e===Co||null!==t&&t===Co}function ya(e,t){jo=Po=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function va(e,t,n){if(0!=(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Pt(e,n)}}var ba={readContext:Us,useCallback:Oo,useContext:Oo,useEffect:Oo,useImperativeHandle:Oo,useInsertionEffect:Oo,useLayoutEffect:Oo,useMemo:Oo,useReducer:Oo,useRef:Oo,useState:Oo,useDebugValue:Oo,useDeferredValue:Oo,useTransition:Oo,useMutableSource:Oo,useSyncExternalStore:Oo,useId:Oo,unstable_isNewReconciler:!1},wa={readContext:Us,useCallback:function(e,t){return Fo().memoizedState=[e,void 0===t?null:t],e},useContext:Us,useEffect:na,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,ea(4194308,4,oa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ea(4194308,4,e,t)},useInsertionEffect:function(e,t){return ea(4,2,e,t)},useMemo:function(e,t){var n=Fo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=pa.bind(null,Co,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Fo().memoizedState=e},useState:Xo,useDebugValue:la,useDeferredValue:function(e){return Fo().memoizedState=e},useTransition:function(){var e=Xo(!1),t=e[0];return e=da.bind(null,e[1]),Fo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Co,i=Fo();if(ys){if(void 0===n)throw Error(v(407));n=n()}else{if(n=t(),null===Bl)throw Error(v(349));0!=(30&To)||Ko(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,na(Go.bind(null,r,s,e),[e]),r.flags|=2048,Jo(9,Wo.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Fo(),t=Bl.identifierPrefix;if(ys){var n=us;t=":"+t+"R"+(n=(cs&~(1<<32-bt(cs)-1)).toString(32)+n),0<(n=Ao++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=Do++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xa={readContext:Us,useCallback:ca,useContext:Us,useEffect:ra,useImperativeHandle:aa,useInsertionEffect:ia,useLayoutEffect:sa,useMemo:ua,useReducer:Vo,useRef:Zo,useState:function(){return Vo(zo)},useDebugValue:la,useDeferredValue:function(e){return ha($o(),No.memoizedState,e)},useTransition:function(){return[Vo(zo)[0],$o().memoizedState]},useMutableSource:qo,useSyncExternalStore:Ho,useId:fa,unstable_isNewReconciler:!1},ka={readContext:Us,useCallback:ca,useContext:Us,useEffect:ra,useImperativeHandle:aa,useInsertionEffect:ia,useLayoutEffect:sa,useMemo:ua,useReducer:Bo,useRef:Zo,useState:function(){return Bo(zo)},useDebugValue:la,useDeferredValue:function(e){var t=$o();return null===No?t.memoizedState=e:ha(t,No.memoizedState,e)},useTransition:function(){return[Bo(zo)[0],$o().memoizedState]},useMutableSource:qo,useSyncExternalStore:Ho,useId:fa,unstable_isNewReconciler:!1};function _a(e,t){try{var n="",r=t;do{n+=ee(r),r=r.return}while(r);var i=n}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i,digest:null}}function Ea(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function Ia(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}var Sa="function"==typeof WeakMap?WeakMap:Map;function Ta(e,t,n){(n=Ks(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ic||(ic=!0,sc=r),Ia(0,t)},n}function Ca(e,t,n){(n=Ks(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ia(0,t)}}var s=e.stateNode;return null!==s&&"function"==typeof s.componentDidCatch&&(n.callback=function(){Ia(0,t),"function"!=typeof r&&(null===oc?oc=new Set([this]):oc.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function Na(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new Sa;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Fc.bind(null,e,t,n),t.then(e,e))}function Ra(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function Pa(e,t,n,r,i){return 0==(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ks(-1,1)).tag=2,Ws(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ja=A.ReactCurrentOwner,Aa=!1;function Da(e,t,n,r){t.child=null===e?uo(t,null,n,r):co(t,e.child,n,r)}function Oa(e,t,n,r,i){n=n.render;var s=t.ref;return Ls(t,i),r=Lo(e,t,n,r,s,i),n=Uo(),null===e||Aa?(ys&&n&&fs(t),t.flags|=1,Da(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,il(e,t,i))}function Ma(e,t,n,r,i){if(null===e){var s=n.type;return"function"!=typeof s||Kc(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Gc(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,La(e,t,s,r,i))}if(s=e.child,0==(e.lanes&i)){var o=s.memoizedProps;if((n=null!==(n=n.compare)?n:xr)(o,r)&&e.ref===t.ref)return il(e,t,i)}return t.flags|=1,(e=Wc(s,r)).ref=t.ref,e.return=t,t.child=e}function La(e,t,n,r,i){if(null!==e){var s=e.memoizedProps;if(xr(s,r)&&e.ref===t.ref){if(Aa=!1,t.pendingProps=r=s,0==(e.lanes&i))return t.lanes=e.lanes,il(e,t,i);0!=(131072&e.flags)&&(Aa=!0)}}return $a(e,t,n,r,i)}function Ua(e,t,n){var r=t.pendingProps,i=r.children,s=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Fi(Wl,Kl),Kl|=n;else{if(0==(1073741824&n))return e=null!==s?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Fi(Wl,Kl),Kl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==s?s.baseLanes:n,Fi(Wl,Kl),Kl|=r}else null!==s?(r=s.baseLanes|n,t.memoizedState=null):r=n,Fi(Wl,Kl),Kl|=r;return Da(e,t,i,n),t.child}function Fa(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $a(e,t,n,r,i){var s=Hi(n)?Bi:zi.current;return s=qi(t,s),Ls(t,i),n=Lo(e,t,n,r,s,i),r=Uo(),null===e||Aa?(ys&&r&&fs(t),t.flags|=1,Da(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,il(e,t,i))}function za(e,t,n,r,i){if(Hi(n)){var s=!0;Qi(t)}else s=!1;if(Ls(t,i),null===t.stateNode)rl(e,t),no(t,n,r),io(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,c=n.contextType;"object"==typeof c&&null!==c?c=Us(c):c=qi(t,c=Hi(n)?Bi:zi.current);var u=n.getDerivedStateFromProps,h="function"==typeof u||"function"==typeof o.getSnapshotBeforeUpdate;h||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(a!==r||l!==c)&&ro(t,o,r,c),Bs=!1;var d=t.memoizedState;o.state=d,Ys(t,r,o,i),l=t.memoizedState,a!==r||d!==l||Vi.current||Bs?("function"==typeof u&&(Zs(t,n,u,r),l=t.memoizedState),(a=Bs||to(t,n,a,r,d,l,c))?(h||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Hs(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ns(t.type,a),o.props=c,h=t.pendingProps,d=o.context,"object"==typeof(l=n.contextType)&&null!==l?l=Us(l):l=qi(t,l=Hi(n)?Bi:zi.current);var f=n.getDerivedStateFromProps;(u="function"==typeof f||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(a!==h||d!==l)&&ro(t,o,r,l),Bs=!1,d=t.memoizedState,o.state=d,Ys(t,r,o,i);var p=t.memoizedState;a!==h||d!==p||Vi.current||Bs?("function"==typeof f&&(Zs(t,n,f,r),p=t.memoizedState),(c=Bs||to(t,n,c,r,d,p,l)||!1)?(u||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,l),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=l,r=c):("function"!=typeof o.componentDidUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Va(e,t,n,r,s,i)}function Va(e,t,n,r,i,s){Fa(e,t);var o=0!=(128&t.flags);if(!r&&!o)return i&&Yi(t,n,!1),il(e,t,s);r=t.stateNode,ja.current=t;var a=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=co(t,e.child,null,s),t.child=co(t,null,a,s)):Da(e,t,a,s),t.memoizedState=r.state,i&&Yi(t,n,!0),t.child}function Ba(e){var t=e.stateNode;t.pendingContext?Wi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Wi(0,t.context,!1),yo(e,t.containerInfo)}function qa(e,t,n,r,i){return Ss(),Ts(i),t.flags|=256,Da(e,t,n,r),t.child}var Ha,Ka,Wa,Ga,Qa={dehydrated:null,treeContext:null,retryLane:0};function Ya(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xa(e,t,n){var r,i=t.pendingProps,s=xo.current,o=!1,a=0!=(128&t.flags);if((r=a)||(r=(null===e||null!==e.memoizedState)&&0!=(2&s)),r?(o=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(s|=1),Fi(xo,1&s),null===e)return ks(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(a=i.children,e=i.fallback,o?(i=t.mode,o=t.child,a={mode:"hidden",children:a},0==(1&i)&&null!==o?(o.childLanes=0,o.pendingProps=a):o=Yc(a,i,0,null),e=Qc(e,i,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ya(n),t.memoizedState=Qa,e):Ja(t,a));if(null!==(s=e.memoizedState)&&null!==(r=s.dehydrated))return function(e,t,n,r,i,s,o){if(n)return 256&t.flags?(t.flags&=-257,Za(e,t,o,r=Ea(Error(v(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Yc({mode:"visible",children:r.children},i,0,null),(s=Qc(s,i,o,null)).flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,0!=(1&t.mode)&&co(t,e.child,null,o),t.child.memoizedState=Ya(o),t.memoizedState=Qa,s);if(0==(1&t.mode))return Za(e,t,o,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var a=r.dgst;return r=a,Za(e,t,o,r=Ea(s=Error(v(419)),r,void 0))}if(a=0!=(o&e.childLanes),Aa||a){if(null!==(r=Bl)){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!=(i&(r.suspendedLanes|o))?0:i)&&i!==s.retryLane&&(s.retryLane=i,Vs(e,i),gc(r,e,i,-1))}return Nc(),Za(e,t,o,r=Ea(Error(v(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=zc.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,gs=ki(i.nextSibling),ms=t,ys=!0,vs=null,null!==e&&(os[as++]=cs,os[as++]=us,os[as++]=ls,cs=e.id,us=e.overflow,ls=t),t=Ja(t,r.children),t.flags|=4096,t)}(e,t,a,i,r,s,n);if(o){o=i.fallback,a=t.mode,r=(s=e.child).sibling;var l={mode:"hidden",children:i.children};return 0==(1&a)&&t.child!==s?((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null):(i=Wc(s,l)).subtreeFlags=14680064&s.subtreeFlags,null!==r?o=Wc(r,o):(o=Qc(o,a,n,null)).flags|=2,o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,a=null===(a=e.child.memoizedState)?Ya(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Qa,i}return e=(o=e.child).sibling,i=Wc(o,{mode:"visible",children:i.children}),0==(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ja(e,t){return(t=Yc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Za(e,t,n,r){return null!==r&&Ts(r),co(t,e.child,null,n),(e=Ja(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function el(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ms(e.return,t,n)}function tl(e,t,n,r,i){var s=e.memoizedState;null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function nl(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Da(e,t,r.children,n),0!=(2&(r=xo.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&el(e,n,t);else if(19===e.tag)el(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Fi(xo,r),0==(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ko(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),tl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ko(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}tl(t,!0,n,null,s);break;case"together":tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function rl(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function il(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Yl|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(v(153));if(null!==t.child){for(n=Wc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Wc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function sl(e,t){if(!ys)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ol(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function al(e,t,n){var r=t.pendingProps;switch(ps(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ol(t),null;case 1:case 17:return Hi(t.type)&&Ki(),ol(t),null;case 3:return r=t.stateNode,vo(),Ui(Vi),Ui(zi),Eo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(Es(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==vs&&(wc(vs),vs=null))),Ka(e,t),ol(t),null;case 5:wo(t);var i=go(mo.current);if(n=t.type,null!==e&&null!=t.stateNode)Wa(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(v(166));return ol(t),null}if(e=go(fo.current),Es(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Ii]=t,r[Si]=s,e=0!=(1&t.mode),n){case"dialog":Jr("cancel",r),Jr("close",r);break;case"iframe":case"object":case"embed":Jr("load",r);break;case"video":case"audio":for(i=0;i<Gr.length;i++)Jr(Gr[i],r);break;case"source":Jr("error",r);break;case"img":case"image":case"link":Jr("error",r),Jr("load",r);break;case"details":Jr("toggle",r);break;case"input":ce(r,s),Jr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Jr("invalid",r);break;case"textarea":ye(r,s),Jr("invalid",r)}for(var o in Pe(n,s),i=null,s)if(s.hasOwnProperty(o)){var a=s[o];"children"===o?"string"==typeof a?r.textContent!==a&&(!0!==s.suppressHydrationWarning&&hi(r.textContent,a,e),i=["children",a]):"number"==typeof a&&r.textContent!==""+a&&(!0!==s.suppressHydrationWarning&&hi(r.textContent,a,e),i=["children",""+a]):w.hasOwnProperty(o)&&null!=a&&"onScroll"===o&&Jr("scroll",r)}switch(n){case"input":se(r),de(r,s,!0);break;case"textarea":se(r),be(r);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(r.onclick=di)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{o=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=we(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),"select"===n&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ii]=t,e[Si]=r,Ha(e,t,!1,!1),t.stateNode=e;e:{switch(o=je(n,r),n){case"dialog":Jr("cancel",e),Jr("close",e),i=r;break;case"iframe":case"object":case"embed":Jr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Gr.length;i++)Jr(Gr[i],e);i=r;break;case"source":Jr("error",e),i=r;break;case"img":case"image":case"link":Jr("error",e),Jr("load",e),i=r;break;case"details":Jr("toggle",e),i=r;break;case"input":ce(e,r),i=le(e,r),Jr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Y({},r,{value:void 0}),Jr("invalid",e);break;case"textarea":ye(e,r),i=ge(e,r),Jr("invalid",e)}for(s in Pe(n,i),a=i)if(a.hasOwnProperty(s)){var l=a[s];"style"===s?Ne(e,l):"dangerouslySetInnerHTML"===s?null!=(l=l?l.__html:void 0)&&Ee(e,l):"children"===s?"string"==typeof l?("textarea"!==n||""!==l)&&Ie(e,l):"number"==typeof l&&Ie(e,""+l):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(w.hasOwnProperty(s)?null!=l&&"onScroll"===s&&Jr("scroll",e):null!=l&&j(e,s,l,o))}switch(n){case"input":se(e),de(e,r,!1);break;case"textarea":se(e),be(e);break;case"option":null!=r.value&&e.setAttribute("value",""+re(r.value));break;case"select":e.multiple=!!r.multiple,null!=(s=r.value)?me(e,!!r.multiple,s,!1):null!=r.defaultValue&&me(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=di)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return ol(t),null;case 6:if(e&&null!=t.stateNode)Ga(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(v(166));if(n=go(mo.current),go(fo.current),Es(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ii]=t,(s=r.nodeValue!==n)&&null!==(e=ms))switch(e.tag){case 3:hi(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&hi(r.nodeValue,n,0!=(1&e.mode))}s&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[Ii]=t,t.stateNode=r}return ol(t),null;case 13:if(Ui(xo),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ys&&null!==gs&&0!=(1&t.mode)&&0==(128&t.flags))Is(),Ss(),t.flags|=98560,s=!1;else if(s=Es(t),null!==r&&null!==r.dehydrated){if(null===e){if(!s)throw Error(v(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(v(317));s[Ii]=t}else Ss(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ol(t),s=!1}else null!==vs&&(wc(vs),vs=null),s=!0;if(!s)return 65536&t.flags?t:null}return 0!=(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&xo.current)?0===Gl&&(Gl=3):Nc())),null!==t.updateQueue&&(t.flags|=4),ol(t),null);case 4:return vo(),Ka(e,t),null===e&&ti(t.stateNode.containerInfo),ol(t),null;case 10:return Os(t.type._context),ol(t),null;case 19:if(Ui(xo),null===(s=t.memoizedState))return ol(t),null;if(r=0!=(128&t.flags),null===(o=s.rendering))if(r)sl(s,!1);else{if(0!==Gl||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=ko(e))){for(t.flags|=128,sl(s,!1),null!==(r=o.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(s=n).flags&=14680066,null===(o=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Fi(xo,1&xo.current|2),t.child}e=e.sibling}null!==s.tail&&ut()>nc&&(t.flags|=128,r=!0,sl(s,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ko(o))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),sl(s,!0),null===s.tail&&"hidden"===s.tailMode&&!o.alternate&&!ys)return ol(t),null}else 2*ut()-s.renderingStartTime>nc&&1073741824!==n&&(t.flags|=128,r=!0,sl(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(null!==(n=s.last)?n.sibling=o:t.child=o,s.last=o)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ut(),t.sibling=null,n=xo.current,Fi(xo,r?1&n|2:1&n),t):(ol(t),null);case 22:case 23:return Ic(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&Kl)&&(ol(t),6&t.subtreeFlags&&(t.flags|=8192)):ol(t),null;case 24:case 25:return null}throw Error(v(156,t.tag))}function ll(e,t){switch(ps(t),t.tag){case 1:return Hi(t.type)&&Ki(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return vo(),Ui(Vi),Ui(zi),Eo(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return wo(t),null;case 13:if(Ui(xo),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(v(340));Ss()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ui(xo),null;case 4:return vo(),null;case 10:return Os(t.type._context),null;case 22:case 23:return Ic(),null;default:return null}}Ha=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ka=function(){},Wa=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,go(fo.current);var s,o=null;switch(n){case"input":i=le(e,i),r=le(e,r),o=[];break;case"select":i=Y({},i,{value:void 0}),r=Y({},r,{value:void 0}),o=[];break;case"textarea":i=ge(e,i),r=ge(e,r),o=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=di)}for(c in Pe(n,r),n=null,i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&null!=i[c])if("style"===c){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(w.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=null!=i?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(null!=l||null!=a))if("style"===c)if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,a=a?a.__html:void 0,null!=l&&a!==l&&(o=o||[]).push(c,l)):"children"===c?"string"!=typeof l&&"number"!=typeof l||(o=o||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(w.hasOwnProperty(c)?(null!=l&&"onScroll"===c&&Jr("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}},Ga=function(e,t,n,r){n!==r&&(t.flags|=4)};var cl=!1,ul=!1,hl="function"==typeof WeakSet?WeakSet:Set,dl=null;function fl(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(n){Uc(e,t,n)}else n.current=null}function pl(e,t,n){try{n()}catch(n){Uc(e,t,n)}}var ml=!1;function gl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,void 0!==s&&pl(t,n,s)}i=i.next}while(i!==r)}}function yl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vl(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function bl(e){var t=e.alternate;null!==t&&(e.alternate=null,bl(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[Ii],delete t[Si],delete t[Ci],delete t[Ni],delete t[Ri])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wl(e){return 5===e.tag||3===e.tag||4===e.tag}function xl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||wl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function kl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=di));else if(4!==r&&null!==(e=e.child))for(kl(e,t,n),e=e.sibling;null!==e;)kl(e,t,n),e=e.sibling}function _l(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(_l(e,t,n),e=e.sibling;null!==e;)_l(e,t,n),e=e.sibling}var El=null,Il=!1;function Sl(e,t,n){for(n=n.child;null!==n;)Tl(e,t,n),n=n.sibling}function Tl(e,t,n){if(vt&&"function"==typeof vt.onCommitFiberUnmount)try{vt.onCommitFiberUnmount(yt,n)}catch(e){}switch(n.tag){case 5:ul||fl(n,t);case 6:var r=El,i=Il;El=null,Sl(e,t,n),Il=i,null!==(El=r)&&(Il?(e=El,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):El.removeChild(n.stateNode));break;case 18:null!==El&&(Il?(e=El,n=n.stateNode,8===e.nodeType?xi(e.parentNode,n):1===e.nodeType&&xi(e,n),tn(e)):xi(El,n.stateNode));break;case 4:r=El,i=Il,El=n.stateNode.containerInfo,Il=!0,Sl(e,t,n),El=r,Il=i;break;case 0:case 11:case 14:case 15:if(!ul&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,void 0!==o&&(0!=(2&s)||0!=(4&s))&&pl(n,t,o),i=i.next}while(i!==r)}Sl(e,t,n);break;case 1:if(!ul&&(fl(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Uc(n,t,e)}Sl(e,t,n);break;case 21:Sl(e,t,n);break;case 22:1&n.mode?(ul=(r=ul)||null!==n.memoizedState,Sl(e,t,n),ul=r):Sl(e,t,n);break;default:Sl(e,t,n)}}function Cl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new hl),t.forEach((function(t){var r=Vc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function Nl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;null!==a;){switch(a.tag){case 5:El=a.stateNode,Il=!1;break e;case 3:case 4:El=a.stateNode.containerInfo,Il=!0;break e}a=a.return}if(null===El)throw Error(v(160));Tl(s,o,i),El=null,Il=!1;var l=i.alternate;null!==l&&(l.return=null),i.return=null}catch(e){Uc(i,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)Rl(t,e),t=t.sibling}function Rl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nl(t,e),Pl(e),4&r){try{gl(3,e,e.return),yl(3,e)}catch(t){Uc(e,e.return,t)}try{gl(5,e,e.return)}catch(t){Uc(e,e.return,t)}}break;case 1:Nl(t,e),Pl(e),512&r&&null!==n&&fl(n,n.return);break;case 5:if(Nl(t,e),Pl(e),512&r&&null!==n&&fl(n,n.return),32&e.flags){var i=e.stateNode;try{Ie(i,"")}catch(t){Uc(e,e.return,t)}}if(4&r&&null!=(i=e.stateNode)){var s=e.memoizedProps,o=null!==n?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===a&&"radio"===s.type&&null!=s.name&&ue(i,s),je(a,o);var c=je(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];"style"===u?Ne(i,h):"dangerouslySetInnerHTML"===u?Ee(i,h):"children"===u?Ie(i,h):j(i,u,h,c)}switch(a){case"input":he(i,s);break;case"textarea":ve(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;null!=f?me(i,!!s.multiple,f,!1):d!==!!s.multiple&&(null!=s.defaultValue?me(i,!!s.multiple,s.defaultValue,!0):me(i,!!s.multiple,s.multiple?[]:"",!1))}i[Si]=s}catch(t){Uc(e,e.return,t)}}break;case 6:if(Nl(t,e),Pl(e),4&r){if(null===e.stateNode)throw Error(v(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(t){Uc(e,e.return,t)}}break;case 3:if(Nl(t,e),Pl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{tn(t.containerInfo)}catch(t){Uc(e,e.return,t)}break;case 4:default:Nl(t,e),Pl(e);break;case 13:Nl(t,e),Pl(e),8192&(i=e.child).flags&&(s=null!==i.memoizedState,i.stateNode.isHidden=s,!s||null!==i.alternate&&null!==i.alternate.memoizedState||(tc=ut())),4&r&&Cl(e);break;case 22:if(u=null!==n&&null!==n.memoizedState,1&e.mode?(ul=(c=ul)||u,Nl(t,e),ul=c):Nl(t,e),Pl(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!u&&0!=(1&e.mode))for(dl=e,u=e.child;null!==u;){for(h=dl=u;null!==dl;){switch(f=(d=dl).child,d.tag){case 0:case 11:case 14:case 15:gl(4,d,d.return);break;case 1:fl(d,d.return);var p=d.stateNode;if("function"==typeof p.componentWillUnmount){r=d,n=d.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(e){Uc(r,n,e)}}break;case 5:fl(d,d.return);break;case 22:if(null!==d.memoizedState){Ol(h);continue}}null!==f?(f.return=d,dl=f):Ol(h)}u=u.sibling}e:for(u=null,h=e;;){if(5===h.tag){if(null===u){u=h;try{i=h.stateNode,c?"function"==typeof(s=i.style).setProperty?s.setProperty("display","none","important"):s.display="none":(a=h.stateNode,o=null!=(l=h.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ce("display",o))}catch(t){Uc(e,e.return,t)}}}else if(6===h.tag){if(null===u)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(t){Uc(e,e.return,t)}}else if((22!==h.tag&&23!==h.tag||null===h.memoizedState||h===e)&&null!==h.child){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;null===h.sibling;){if(null===h.return||h.return===e)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Nl(t,e),Pl(e),4&r&&Cl(e);case 21:}}function Pl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(wl(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(Ie(i,""),r.flags&=-33),_l(e,xl(e),i);break;case 3:case 4:var s=r.stateNode.containerInfo;kl(e,xl(e),s);break;default:throw Error(v(161))}}catch(t){Uc(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function jl(e,t,n){dl=e,Al(e,t,n)}function Al(e,t,n){for(var r=0!=(1&e.mode);null!==dl;){var i=dl,s=i.child;if(22===i.tag&&r){var o=null!==i.memoizedState||cl;if(!o){var a=i.alternate,l=null!==a&&null!==a.memoizedState||ul;a=cl;var c=ul;if(cl=o,(ul=l)&&!c)for(dl=i;null!==dl;)l=(o=dl).child,22===o.tag&&null!==o.memoizedState?Ml(i):null!==l?(l.return=o,dl=l):Ml(i);for(;null!==s;)dl=s,Al(s,t,n),s=s.sibling;dl=i,cl=a,ul=c}Dl(e)}else 0!=(8772&i.subtreeFlags)&&null!==s?(s.return=i,dl=s):Dl(e)}}function Dl(e){for(;null!==dl;){var t=dl;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:ul||yl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!ul)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ns(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;null!==s&&Xs(t,s,r);break;case 3:var o=t.updateQueue;if(null!==o){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Xs(t,o,n)}break;case 5:var a=t.stateNode;if(null===n&&4&t.flags){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var u=c.memoizedState;if(null!==u){var h=u.dehydrated;null!==h&&tn(h)}}}break;default:throw Error(v(163))}ul||512&t.flags&&vl(t)}catch(e){Uc(t,t.return,e)}}if(t===e){dl=null;break}if(null!==(n=t.sibling)){n.return=t.return,dl=n;break}dl=t.return}}function Ol(e){for(;null!==dl;){var t=dl;if(t===e){dl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,dl=n;break}dl=t.return}}function Ml(e){for(;null!==dl;){var t=dl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yl(4,t)}catch(e){Uc(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(e){Uc(t,i,e)}}var s=t.return;try{vl(t)}catch(e){Uc(t,s,e)}break;case 5:var o=t.return;try{vl(t)}catch(e){Uc(t,o,e)}}}catch(e){Uc(t,t.return,e)}if(t===e){dl=null;break}var a=t.sibling;if(null!==a){a.return=t.return,dl=a;break}dl=t.return}}var Ll,Ul=Math.ceil,Fl=A.ReactCurrentDispatcher,$l=A.ReactCurrentOwner,zl=A.ReactCurrentBatchConfig,Vl=0,Bl=null,ql=null,Hl=0,Kl=0,Wl=Li(0),Gl=0,Ql=null,Yl=0,Xl=0,Jl=0,Zl=null,ec=null,tc=0,nc=1/0,rc=null,ic=!1,sc=null,oc=null,ac=!1,lc=null,cc=0,uc=0,hc=null,dc=-1,fc=0;function pc(){return 0!=(6&Vl)?ut():-1!==dc?dc:dc=ut()}function mc(e){return 0==(1&e.mode)?1:0!=(2&Vl)&&0!==Hl?Hl&-Hl:null!==Cs.transition?(0===fc&&(fc=Ct()),fc):0!==(e=jt)?e:e=void 0===(e=window.event)?16:un(e.type)}function gc(e,t,n,r){if(50<uc)throw uc=0,hc=null,Error(v(185));Rt(e,n,r),0!=(2&Vl)&&e===Bl||(e===Bl&&(0==(2&Vl)&&(Xl|=n),4===Gl&&xc(e,Hl)),yc(e,r),1===n&&0===Vl&&0==(1&t.mode)&&(nc=ut()+500,Ji&&ts()))}function yc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-bt(s),a=1<<o,l=i[o];-1===l?0!=(a&n)&&0==(a&r)||(i[o]=St(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}(e,t);var r=It(e,e===Bl?Hl:0);if(0===r)null!==n&&at(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&at(n),1===t)0===e.tag?function(e){Ji=!0,es(e)}(kc.bind(null,e)):es(kc.bind(null,e)),bi((function(){0==(6&Vl)&&ts()})),n=null;else{switch(At(r)){case 1:n=dt;break;case 4:n=ft;break;case 16:default:n=pt;break;case 536870912:n=gt}n=Bc(n,vc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vc(e,t){if(dc=-1,fc=0,0!=(6&Vl))throw Error(v(327));var n=e.callbackNode;if(Mc()&&e.callbackNode!==n)return null;var r=It(e,e===Bl?Hl:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=Rc(e,r);else{t=r;var i=Vl;Vl|=2;var s=Cc();for(Bl===e&&Hl===t||(rc=null,nc=ut()+500,Sc(e,t));;)try{jc();break}catch(t){Tc(e,t)}Ds(),Fl.current=s,Vl=i,null!==ql?t=0:(Bl=null,Hl=0,t=Gl)}if(0!==t){if(2===t&&(0!==(i=Tt(e))&&(r=i,t=bc(e,i))),1===t)throw n=Ql,Sc(e,0),xc(e,r),yc(e,ut()),n;if(6===t)xc(e,r);else{if(i=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!wr(s(),i))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=Rc(e,r))&&(0!==(s=Tt(e))&&(r=s,t=bc(e,s))),1===t))throw n=Ql,Sc(e,0),xc(e,r),yc(e,ut()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(v(345));case 2:case 5:Oc(e,ec,rc);break;case 3:if(xc(e,r),(130023424&r)===r&&10<(t=tc+500-ut())){if(0!==It(e,0))break;if(((i=e.suspendedLanes)&r)!==r){pc(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=gi(Oc.bind(null,e,ec,rc),t);break}Oc(e,ec,rc);break;case 4:if(xc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-bt(r);s=1<<o,(o=t[o])>i&&(i=o),r&=~s}if(r=i,10<(r=(120>(r=ut()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ul(r/1960))-r)){e.timeoutHandle=gi(Oc.bind(null,e,ec,rc),r);break}Oc(e,ec,rc);break;default:throw Error(v(329))}}}return yc(e,ut()),e.callbackNode===n?vc.bind(null,e):null}function bc(e,t){var n=Zl;return e.current.memoizedState.isDehydrated&&(Sc(e,t).flags|=256),2!==(e=Rc(e,t))&&(t=ec,ec=n,null!==t&&wc(t)),e}function wc(e){null===ec?ec=e:ec.push.apply(ec,e)}function xc(e,t){for(t&=~Jl,t&=~Xl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function kc(e){if(0!=(6&Vl))throw Error(v(327));Mc();var t=It(e,0);if(0==(1&t))return yc(e,ut()),null;var n=Rc(e,t);if(0!==e.tag&&2===n){var r=Tt(e);0!==r&&(t=r,n=bc(e,r))}if(1===n)throw n=Ql,Sc(e,0),xc(e,t),yc(e,ut()),n;if(6===n)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Oc(e,ec,rc),yc(e,ut()),null}function _c(e,t){var n=Vl;Vl|=1;try{return e(t)}finally{0===(Vl=n)&&(nc=ut()+500,Ji&&ts())}}function Ec(e){null!==lc&&0===lc.tag&&0==(6&Vl)&&Mc();var t=Vl;Vl|=1;var n=zl.transition,r=jt;try{if(zl.transition=null,jt=1,e)return e()}finally{jt=r,zl.transition=n,0==(6&(Vl=t))&&ts()}}function Ic(){Kl=Wl.current,Ui(Wl)}function Sc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,yi(n)),null!==ql)for(n=ql.return;null!==n;){var r=n;switch(ps(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Ki();break;case 3:vo(),Ui(Vi),Ui(zi),Eo();break;case 5:wo(r);break;case 4:vo();break;case 13:case 19:Ui(xo);break;case 10:Os(r.type._context);break;case 22:case 23:Ic()}n=n.return}if(Bl=e,ql=e=Wc(e.current,null),Hl=Kl=t,Gl=0,Ql=null,Jl=Xl=Yl=0,ec=Zl=null,null!==Fs){for(t=0;t<Fs.length;t++)if(null!==(r=(n=Fs[t]).interleaved)){n.interleaved=null;var i=r.next,s=n.pending;if(null!==s){var o=s.next;s.next=i,r.next=o}n.pending=r}Fs=null}return e}function Tc(e,t){for(;;){var n=ql;try{if(Ds(),Io.current=ba,Po){for(var r=Co.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}Po=!1}if(To=0,Ro=No=Co=null,jo=!1,Ao=0,$l.current=null,null===n||null===n.return){Gl=1,Ql=t,ql=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Hl,a.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var c=l,u=a,h=u.tag;if(0==(1&u.mode)&&(0===h||11===h||15===h)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var f=Ra(o);if(null!==f){f.flags&=-257,Pa(f,o,a,0,t),1&f.mode&&Na(s,c,t),l=c;var p=(t=f).updateQueue;if(null===p){var m=new Set;m.add(l),t.updateQueue=m}else p.add(l);break e}if(0==(1&t)){Na(s,c,t),Nc();break e}l=Error(v(426))}else if(ys&&1&a.mode){var g=Ra(o);if(null!==g){0==(65536&g.flags)&&(g.flags|=256),Pa(g,o,a,0,t),Ts(_a(l,a));break e}}s=l=_a(l,a),4!==Gl&&(Gl=2),null===Zl?Zl=[s]:Zl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t,Qs(s,Ta(0,l,t));break e;case 1:a=l;var y=s.type,b=s.stateNode;if(0==(128&s.flags)&&("function"==typeof y.getDerivedStateFromError||null!==b&&"function"==typeof b.componentDidCatch&&(null===oc||!oc.has(b)))){s.flags|=65536,t&=-t,s.lanes|=t,Qs(s,Ca(s,a,t));break e}}s=s.return}while(null!==s)}Dc(n)}catch(e){t=e,ql===n&&null!==n&&(ql=n=n.return);continue}break}}function Cc(){var e=Fl.current;return Fl.current=ba,null===e?ba:e}function Nc(){0!==Gl&&3!==Gl&&2!==Gl||(Gl=4),null===Bl||0==(268435455&Yl)&&0==(268435455&Xl)||xc(Bl,Hl)}function Rc(e,t){var n=Vl;Vl|=2;var r=Cc();for(Bl===e&&Hl===t||(rc=null,Sc(e,t));;)try{Pc();break}catch(t){Tc(e,t)}if(Ds(),Vl=n,Fl.current=r,null!==ql)throw Error(v(261));return Bl=null,Hl=0,Gl}function Pc(){for(;null!==ql;)Ac(ql)}function jc(){for(;null!==ql&&!lt();)Ac(ql)}function Ac(e){var t=Ll(e.alternate,e,Kl);e.memoizedProps=e.pendingProps,null===t?Dc(e):ql=t,$l.current=null}function Dc(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=al(n,t,Kl)))return void(ql=n)}else{if(null!==(n=ll(n,t)))return n.flags&=32767,void(ql=n);if(null===e)return Gl=6,void(ql=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(ql=t);ql=t=e}while(null!==t);0===Gl&&(Gl=5)}function Oc(e,t,n){var r=jt,i=zl.transition;try{zl.transition=null,jt=1,function(e,t,n,r){do{Mc()}while(null!==lc);if(0!=(6&Vl))throw Error(v(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-bt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}(e,s),e===Bl&&(ql=Bl=null,Hl=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||ac||(ac=!0,Bc(pt,(function(){return Mc(),null}))),s=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||s){s=zl.transition,zl.transition=null;var o=jt;jt=1;var a=Vl;Vl|=4,$l.current=null,function(e,t){if(fi=rn,Sr(e=Ir())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch(e){n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=e,d=null;t:for(;;){for(var f;h!==n||0!==i&&3!==h.nodeType||(a=o+i),h!==s||0!==r&&3!==h.nodeType||(l=o+r),3===h.nodeType&&(o+=h.nodeValue.length),null!==(f=h.firstChild);)d=h,h=f;for(;;){if(h===e)break t;if(d===n&&++c===i&&(a=o),d===s&&++u===r&&(l=o),null!==(f=h.nextSibling))break;d=(h=d).parentNode}h=f}n=-1===a||-1===l?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pi={focusedElem:e,selectionRange:n},rn=!1,dl=t;null!==dl;)if(e=(t=dl).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,dl=e;else for(;null!==dl;){t=dl;try{var p=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==p){var m=p.memoizedProps,g=p.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?m:Ns(t.type,m),g);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(v(163))}}catch(e){Uc(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,dl=e;break}dl=t.return}p=ml,ml=!1}(e,n),Rl(n,e),Tr(pi),rn=!!fi,pi=fi=null,e.current=n,jl(n,e,i),ct(),Vl=a,jt=o,zl.transition=s}else e.current=n;if(ac&&(ac=!1,lc=e,cc=i),s=e.pendingLanes,0===s&&(oc=null),function(e){if(vt&&"function"==typeof vt.onCommitFiberRoot)try{vt.onCommitFiberRoot(yt,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode),yc(e,ut()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ic)throw ic=!1,e=sc,sc=null,e;0!=(1&cc)&&0!==e.tag&&Mc(),s=e.pendingLanes,0!=(1&s)?e===hc?uc++:(uc=0,hc=e):uc=0,ts()}(e,t,n,r)}finally{zl.transition=i,jt=r}return null}function Mc(){if(null!==lc){var e=At(cc),t=zl.transition,n=jt;try{if(zl.transition=null,jt=16>e?16:e,null===lc)var r=!1;else{if(e=lc,lc=null,cc=0,0!=(6&Vl))throw Error(v(331));var i=Vl;for(Vl|=4,dl=e.current;null!==dl;){var s=dl,o=s.child;if(0!=(16&dl.flags)){var a=s.deletions;if(null!==a){for(var l=0;l<a.length;l++){var c=a[l];for(dl=c;null!==dl;){var u=dl;switch(u.tag){case 0:case 11:case 15:gl(8,u,s)}var h=u.child;if(null!==h)h.return=u,dl=h;else for(;null!==dl;){var d=(u=dl).sibling,f=u.return;if(bl(u),u===c){dl=null;break}if(null!==d){d.return=f,dl=d;break}dl=f}}}var p=s.alternate;if(null!==p){var m=p.child;if(null!==m){p.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}dl=s}}if(0!=(2064&s.subtreeFlags)&&null!==o)o.return=s,dl=o;else e:for(;null!==dl;){if(0!=(2048&(s=dl).flags))switch(s.tag){case 0:case 11:case 15:gl(9,s,s.return)}var y=s.sibling;if(null!==y){y.return=s.return,dl=y;break e}dl=s.return}}var b=e.current;for(dl=b;null!==dl;){var w=(o=dl).child;if(0!=(2064&o.subtreeFlags)&&null!==w)w.return=o,dl=w;else e:for(o=b;null!==dl;){if(0!=(2048&(a=dl).flags))try{switch(a.tag){case 0:case 11:case 15:yl(9,a)}}catch(e){Uc(a,a.return,e)}if(a===o){dl=null;break e}var x=a.sibling;if(null!==x){x.return=a.return,dl=x;break e}dl=a.return}}if(Vl=i,ts(),vt&&"function"==typeof vt.onPostCommitFiberRoot)try{vt.onPostCommitFiberRoot(yt,e)}catch(e){}r=!0}return r}finally{jt=n,zl.transition=t}}return!1}function Lc(e,t,n){e=Ws(e,t=Ta(0,t=_a(n,t),1),1),t=pc(),null!==e&&(Rt(e,1,t),yc(e,t))}function Uc(e,t,n){if(3===e.tag)Lc(e,e,n);else for(;null!==t;){if(3===t.tag){Lc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===oc||!oc.has(r))){t=Ws(t,e=Ca(t,e=_a(n,e),1),1),e=pc(),null!==t&&(Rt(t,1,e),yc(t,e));break}}t=t.return}}function Fc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=pc(),e.pingedLanes|=e.suspendedLanes&n,Bl===e&&(Hl&n)===n&&(4===Gl||3===Gl&&(130023424&Hl)===Hl&&500>ut()-tc?Sc(e,0):Jl|=n),yc(e,t)}function $c(e,t){0===t&&(0==(1&e.mode)?t=1:(t=_t,0==(130023424&(_t<<=1))&&(_t=4194304)));var n=pc();null!==(e=Vs(e,t))&&(Rt(e,t,n),yc(e,n))}function zc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),$c(e,n)}function Vc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}null!==r&&r.delete(t),$c(e,n)}function Bc(e,t){return ot(e,t)}function qc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hc(e,t,n,r){return new qc(e,t,n,r)}function Kc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Wc(e,t){var n=e.alternate;return null===n?((n=Hc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gc(e,t,n,r,i,s){var o=2;if(r=e,"function"==typeof e)Kc(e)&&(o=1);else if("string"==typeof e)o=5;else e:switch(e){case M:return Qc(n.children,i,s,t);case L:o=8,i|=8;break;case U:return(e=Hc(12,n,t,2|i)).elementType=U,e.lanes=s,e;case V:return(e=Hc(13,n,t,i)).elementType=V,e.lanes=s,e;case B:return(e=Hc(19,n,t,i)).elementType=B,e.lanes=s,e;case K:return Yc(n,i,s,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case F:o=10;break e;case $:o=9;break e;case z:o=11;break e;case q:o=14;break e;case H:o=16,r=null;break e}throw Error(v(130,null==e?e:typeof e,""))}return(t=Hc(o,n,t,i)).elementType=e,t.type=r,t.lanes=s,t}function Qc(e,t,n,r){return(e=Hc(7,e,r,t)).lanes=n,e}function Yc(e,t,n,r){return(e=Hc(22,e,r,t)).elementType=K,e.lanes=n,e.stateNode={isHidden:!1},e}function Xc(e,t,n){return(e=Hc(6,e,null,t)).lanes=n,e}function Jc(e,t,n){return(t=Hc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nt(0),this.expirationTimes=Nt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function eu(e,t,n,r,i,s,o,a,l){return e=new Zc(e,t,n,a,l),1===t?(t=1,!0===s&&(t|=8)):t=0,s=Hc(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qs(s),e}function tu(e){if(!e)return $i;e:{if(tt(e=e._reactInternals)!==e||1!==e.tag)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Hi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(v(171))}if(1===e.tag){var n=e.type;if(Hi(n))return Gi(e,n,t)}return t}function nu(e,t,n,r,i,s,o,a,l){return(e=eu(n,r,!0,e,0,s,0,a,l)).context=tu(null),n=e.current,(s=Ks(r=pc(),i=mc(n))).callback=null!=t?t:null,Ws(n,s,i),e.current.lanes=i,Rt(e,i,r),yc(e,r),e}function ru(e,t,n,r){var i=t.current,s=pc(),o=mc(i);return n=tu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ks(s,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Ws(i,t,o))&&(gc(e,i,o,s),Gs(e,i,o)),o}function iu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function su(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function ou(e,t){su(e,t),(e=e.alternate)&&su(e,t)}Ll=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Vi.current)Aa=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return Aa=!1,function(e,t,n){switch(t.tag){case 3:Ba(t),Ss();break;case 5:bo(t);break;case 1:Hi(t.type)&&Qi(t);break;case 4:yo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Fi(Rs,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Fi(xo,1&xo.current),t.flags|=128,null):0!=(n&t.child.childLanes)?Xa(e,t,n):(Fi(xo,1&xo.current),null!==(e=il(e,t,n))?e.sibling:null);Fi(xo,1&xo.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return nl(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Fi(xo,xo.current),r)break;return null;case 22:case 23:return t.lanes=0,Ua(e,t,n)}return il(e,t,n)}(e,t,n);Aa=0!=(131072&e.flags)}else Aa=!1,ys&&0!=(1048576&t.flags)&&ds(t,ss,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;rl(e,t),e=t.pendingProps;var i=qi(t,zi.current);Ls(t,n),i=Lo(null,t,r,e,i,n);var s=Uo();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Hi(r)?(s=!0,Qi(t)):s=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,qs(t),i.updater=eo,t.stateNode=i,i._reactInternals=t,io(t,r,e,n),t=Va(null,t,r,!0,s,n)):(t.tag=0,ys&&s&&fs(t),Da(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(rl(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return Kc(e)?1:0;if(null!=e){if((e=e.$$typeof)===z)return 11;if(e===q)return 14}return 2}(r),e=Ns(r,e),i){case 0:t=$a(null,t,r,e,n);break e;case 1:t=za(null,t,r,e,n);break e;case 11:t=Oa(null,t,r,e,n);break e;case 14:t=Ma(null,t,r,Ns(r.type,e),n);break e}throw Error(v(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,$a(e,t,r,i=t.elementType===r?i:Ns(r,i),n);case 1:return r=t.type,i=t.pendingProps,za(e,t,r,i=t.elementType===r?i:Ns(r,i),n);case 3:e:{if(Ba(t),null===e)throw Error(v(387));r=t.pendingProps,i=(s=t.memoizedState).element,Hs(e,t),Ys(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated){if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,256&t.flags){t=qa(e,t,r,n,i=_a(Error(v(423)),t));break e}if(r!==i){t=qa(e,t,r,n,i=_a(Error(v(424)),t));break e}for(gs=ki(t.stateNode.containerInfo.firstChild),ms=t,ys=!0,vs=null,n=uo(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(Ss(),r===i){t=il(e,t,n);break e}Da(e,t,r,n)}t=t.child}return t;case 5:return bo(t),null===e&&ks(t),r=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,o=i.children,mi(r,i)?o=null:null!==s&&mi(r,s)&&(t.flags|=32),Fa(e,t),Da(e,t,o,n),t.child;case 6:return null===e&&ks(t),null;case 13:return Xa(e,t,n);case 4:return yo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=co(t,null,r,n):Da(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,Oa(e,t,r,i=t.elementType===r?i:Ns(r,i),n);case 7:return Da(e,t,t.pendingProps,n),t.child;case 8:case 12:return Da(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,Fi(Rs,r._currentValue),r._currentValue=o,null!==s)if(wr(s.value,o)){if(s.children===i.children&&!Vi.current){t=il(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var a=s.dependencies;if(null!==a){o=s.child;for(var l=a.firstContext;null!==l;){if(l.context===r){if(1===s.tag){(l=Ks(-1,n&-n)).tag=2;var c=s.updateQueue;if(null!==c){var u=(c=c.shared).pending;null===u?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Ms(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(10===s.tag)o=s.type===t.type?null:s.child;else if(18===s.tag){if(null===(o=s.return))throw Error(v(341));o.lanes|=n,null!==(a=o.alternate)&&(a.lanes|=n),Ms(o,n,t),o=s.sibling}else o=s.child;if(null!==o)o.return=s;else for(o=s;null!==o;){if(o===t){o=null;break}if(null!==(s=o.sibling)){s.return=o.return,o=s;break}o=o.return}s=o}Da(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ls(t,n),r=r(i=Us(i)),t.flags|=1,Da(e,t,r,n),t.child;case 14:return i=Ns(r=t.type,t.pendingProps),Ma(e,t,r,i=Ns(r.type,i),n);case 15:return La(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ns(r,i),rl(e,t),t.tag=1,Hi(r)?(e=!0,Qi(t)):e=!1,Ls(t,n),no(t,r,i),io(t,r,i,n),Va(null,t,r,!0,e,n);case 19:return nl(e,t,n);case 22:return Ua(e,t,n)}throw Error(v(156,t.tag))};var au="function"==typeof reportError?reportError:function(e){console.error(e)};function lu(e){this._internalRoot=e}function cu(e){this._internalRoot=e}function uu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function hu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function du(){}function fu(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if("function"==typeof i){var a=i;i=function(){var e=iu(o);a.call(e)}}ru(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"==typeof r){var s=r;r=function(){var e=iu(o);s.call(e)}}var o=nu(t,r,e,0,null,!1,0,"",du);return e._reactRootContainer=o,e[Ti]=o.current,ti(8===e.nodeType?e.parentNode:e),Ec(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var a=r;r=function(){var e=iu(l);a.call(e)}}var l=eu(e,0,!1,null,0,!1,0,"",du);return e._reactRootContainer=l,e[Ti]=l.current,ti(8===e.nodeType?e.parentNode:e),Ec((function(){ru(t,l,n,r)})),l}(n,t,e,i,r);return iu(o)}cu.prototype.render=lu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(v(409));ru(e,t,null,null)},cu.prototype.unmount=lu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Ec((function(){ru(null,e,null,null)})),t[Ti]=null}},cu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&0!==t&&t<Kt[n].priority;n++);Kt.splice(n,0,e),0===n&&Yt(e)}},Dt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Et(t.pendingLanes);0!==n&&(Pt(t,1|n),yc(t,ut()),0==(6&Vl)&&(nc=ut()+500,ts()))}break;case 13:Ec((function(){var t=Vs(e,1);if(null!==t){var n=pc();gc(t,e,1,n)}})),ou(e,1)}},Ot=function(e){if(13===e.tag){var t=Vs(e,134217728);if(null!==t)gc(t,e,134217728,pc());ou(e,134217728)}},Mt=function(e){if(13===e.tag){var t=mc(e),n=Vs(e,t);if(null!==n)gc(n,e,t,pc());ou(e,t)}},Lt=function(){return jt},Ut=function(e,t){var n=jt;try{return jt=e,t()}finally{jt=n}},Oe=function(e,t,n){switch(t){case"input":if(he(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Di(r);if(!i)throw Error(v(90));oe(r),he(r,i)}}}break;case"textarea":ve(e,n);break;case"select":null!=(t=n.value)&&me(e,!!n.multiple,t,!1)}},ze=_c,Ve=Ec;var pu={usingClientEntryPoint:!1,Events:[ji,Ai,Di,Fe,$e,_c]},mu={findFiberByHostInstance:Pi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gu={bundleType:mu.bundleType,version:mu.version,rendererPackageName:mu.rendererPackageName,rendererConfig:mu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=it(e))?null:e.stateNode},findFiberByHostInstance:mu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yu.isDisabled&&yu.supportsFiber)try{yt=yu.inject(gu),vt=yu}catch(_e){}}r=pu,i=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!uu(t))throw Error(v(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:O,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},o=function(e,t){if(!uu(e))throw Error(v(299));var n=!1,r="",i=au;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=eu(e,1,!1,null,0,n,0,r,i),e[Ti]=t.current,ti(8===e.nodeType?e.parentNode:e),new lu(t)},a=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(v(188));throw e=Object.keys(e).join(","),Error(v(268,e))}return e=null===(e=it(t))?null:e.stateNode},l=function(e){return Ec(e)},c=function(e,t,n){if(!hu(t))throw Error(v(200));return fu(null,e,t,!0,n)},u=function(e,t,n){if(!uu(e))throw Error(v(405));var r=null!=n&&n.hydratedSources||null,i=!1,s="",o=au;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(s=n.identifierPrefix),void 0!==n.onRecoverableError&&(o=n.onRecoverableError)),t=nu(t,null,e,1,null!=n?n:null,i,0,s,o),e[Ti]=t.current,ti(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new cu(t)},h=function(e,t,n){if(!hu(t))throw Error(v(200));return fu(null,e,t,!1,n)},d=function(e){if(!hu(e))throw Error(v(40));return!!e._reactRootContainer&&(Ec((function(){fu(null,null,e,!1,(function(){e._reactRootContainer=null,e[Ti]=null}))})),!0)},f=_c,p=function(e,t,n,r){if(!hu(n))throw Error(v(200));if(null==e||void 0===e._reactInternals)throw Error(v(38));return fu(e,t,n,!1,r)},m="18.2.0-next-9e3b772b8-20220608"})),s.register("6qr1r",(function(e,t){e.exports=s("7vgeW")})),s.register("7vgeW",(function(t,n){
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,s,o,a,l,c,u,h,d,f,p,m,g,y,v,b,w,x;function k(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<I(i,t)))break e;e[r]=t,e[n]=i,n=r}}function _(e){return 0===e.length?null:e[0]}function E(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,s=i>>>1;r<s;){var o=2*(r+1)-1,a=e[o],l=o+1,c=e[l];if(0>I(a,n))l<i&&0>I(c,a)?(e[r]=c,e[l]=n,r=l):(e[r]=a,e[o]=n,r=o);else{if(!(l<i&&0>I(c,n)))break e;e[r]=c,e[l]=n,r=l}}}return t}function I(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(e(t.exports,"unstable_now",(()=>r),(e=>r=e)),e(t.exports,"unstable_IdlePriority",(()=>i),(e=>i=e)),e(t.exports,"unstable_ImmediatePriority",(()=>s),(e=>s=e)),e(t.exports,"unstable_LowPriority",(()=>o),(e=>o=e)),e(t.exports,"unstable_NormalPriority",(()=>a),(e=>a=e)),e(t.exports,"unstable_Profiling",(()=>l),(e=>l=e)),e(t.exports,"unstable_UserBlockingPriority",(()=>c),(e=>c=e)),e(t.exports,"unstable_cancelCallback",(()=>u),(e=>u=e)),e(t.exports,"unstable_continueExecution",(()=>h),(e=>h=e)),e(t.exports,"unstable_forceFrameRate",(()=>d),(e=>d=e)),e(t.exports,"unstable_getCurrentPriorityLevel",(()=>f),(e=>f=e)),e(t.exports,"unstable_getFirstCallbackNode",(()=>p),(e=>p=e)),e(t.exports,"unstable_next",(()=>m),(e=>m=e)),e(t.exports,"unstable_pauseExecution",(()=>g),(e=>g=e)),e(t.exports,"unstable_requestPaint",(()=>y),(e=>y=e)),e(t.exports,"unstable_runWithPriority",(()=>v),(e=>v=e)),e(t.exports,"unstable_scheduleCallback",(()=>b),(e=>b=e)),e(t.exports,"unstable_shouldYield",(()=>w),(e=>w=e)),e(t.exports,"unstable_wrapCallback",(()=>x),(e=>x=e)),"object"==typeof performance&&"function"==typeof performance.now){var S=performance;r=function(){return S.now()}}else{var T=Date,C=T.now();r=function(){return T.now()-C}}var N=[],R=[],P=1,j=null,A=3,D=!1,O=!1,M=!1,L="function"==typeof setTimeout?setTimeout:null,U="function"==typeof clearTimeout?clearTimeout:null,F="undefined"!=typeof setImmediate?setImmediate:null;function $(e){for(var t=_(R);null!==t;){if(null===t.callback)E(R);else{if(!(t.startTime<=e))break;E(R),t.sortIndex=t.expirationTime,k(N,t)}t=_(R)}}function z(e){if(M=!1,$(e),!O)if(null!==_(N))O=!0,Z(V);else{var t=_(R);null!==t&&ee(z,t.startTime-e)}}function V(e,t){O=!1,M&&(M=!1,U(K),K=-1),D=!0;var n=A;try{for($(t),j=_(N);null!==j&&(!(j.expirationTime>t)||e&&!Q());){var i=j.callback;if("function"==typeof i){j.callback=null,A=j.priorityLevel;var s=i(j.expirationTime<=t);t=r(),"function"==typeof s?j.callback=s:j===_(N)&&E(N),$(t)}else E(N);j=_(N)}if(null!==j)var o=!0;else{var a=_(R);null!==a&&ee(z,a.startTime-t),o=!1}return o}finally{j=null,A=n,D=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var B,q=!1,H=null,K=-1,W=5,G=-1;function Q(){return!(r()-G<W)}function Y(){if(null!==H){var e=r();G=e;var t=!0;try{t=H(!0,e)}finally{t?B():(q=!1,H=null)}}else q=!1}if("function"==typeof F)B=function(){F(Y)};else if("undefined"!=typeof MessageChannel){var X=new MessageChannel,J=X.port2;X.port1.onmessage=Y,B=function(){J.postMessage(null)}}else B=function(){L(Y,0)};function Z(e){H=e,q||(q=!0,B())}function ee(e,t){K=L((function(){e(r())}),t)}i=5,s=1,o=4,a=3,l=null,c=2,u=function(e){e.callback=null},h=function(){O||D||(O=!0,Z(V))},d=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<e?Math.floor(1e3/e):5},f=function(){return A},p=function(){return _(N)},m=function(e){switch(A){case 1:case 2:case 3:var t=3;break;default:t=A}var n=A;A=t;try{return e()}finally{A=n}},g=function(){},y=function(){},v=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=A;A=e;try{return t()}finally{A=n}},b=function(e,t,n){var i=r();switch("object"==typeof n&&null!==n?n="number"==typeof(n=n.delay)&&0<n?i+n:i:n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:P++,callback:t,priorityLevel:e,startTime:n,expirationTime:s=n+s,sortIndex:-1},n>i?(e.sortIndex=n,k(R,e),null===_(N)&&e===_(R)&&(M?(U(K),K=-1):M=!0,ee(z,n-i))):(e.sortIndex=s,k(N,e),O||D||(O=!0,Z(V))),e},w=Q,x=function(e){var t=A;return function(){var n=A;A=t;try{return e.apply(this,arguments)}finally{A=n}}}}));var o={};o=s("cjuLU");
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var a,l,c,u=a={};function h(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}function f(e){if(l===setTimeout)return setTimeout(e,0);if((l===h||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}!function(){try{l="function"==typeof setTimeout?setTimeout:h}catch(e){l=h}try{c="function"==typeof clearTimeout?clearTimeout:d}catch(e){c=d}}();var p,m,g=[],y=!1,v=-1;function b(){y&&p&&(y=!1,p.length?g=p.concat(g):v=-1,g.length&&w())}function w(){if(!y){var e=f(b);y=!0;for(var t=g.length;t;){for(p=g,g=[];++v<t;)p&&p[v].run();v=-1,t=g.length}p=null,y=!1,function(e){if(c===clearTimeout)return clearTimeout(e);if((c===d||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{return c(e)}catch(t){try{return c.call(null,e)}catch(t){return c.call(this,e)}}}(e)}}function x(e,t){this.fun=e,this.array=t}function k(){}u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];g.push(new x(e,t)),1!==g.length||y||f(w)},x.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=k,u.addListener=k,u.once=k,u.off=k,u.removeListener=k,u.removeAllListeners=k,u.emit=k,u.prependListener=k,u.prependOnceListener=k,u.listeners=function(e){return[]},u.binding=function(e){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(e){throw new Error("process.chdir is not supported")},u.umask=function(){return 0},function(e){!function(t){var r="object"==typeof n?n:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),i=s(e);function s(e,t){return function(n,r){"function"!=typeof e[n]&&Object.defineProperty(e,n,{configurable:!0,writable:!0,value:r}),t&&t(n,r)}}void 0===r.Reflect?r.Reflect=e:i=s(r.Reflect,i),function(e){var t=Object.prototype.hasOwnProperty,n="function"==typeof Symbol,r=n&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",i=n&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",s="function"==typeof Object.create,o={__proto__:[]}instanceof Array,l=!s&&!o,c={create:s?function(){return ie(Object.create(null))}:o?function(){return ie({__proto__:null})}:function(){return ie({})},has:l?function(e,n){return t.call(e,n)}:function(e,t){return t in e},get:l?function(e,n){return t.call(e,n)?e[n]:void 0}:function(e,t){return e[t]}},u=Object.getPrototypeOf(Function),h="object"==typeof a&&a.env&&!1,d=h||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?te():Map,f=h||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?ne():Set,p=new(h||"function"!=typeof WeakMap?re():WeakMap);function m(e,t,n,r){if(M(n)){if(!H(e))throw new TypeError;if(!W(t))throw new TypeError;return I(e,t)}if(!H(e))throw new TypeError;if(!F(t))throw new TypeError;if(!F(r)&&!M(r)&&!L(r))throw new TypeError;return L(r)&&(r=void 0),S(e,t,n=q(n),r)}function g(e,t){function n(n,r){if(!F(n))throw new TypeError;if(!M(r)&&!G(r))throw new TypeError;j(e,t,n,r)}return n}function y(e,t,n,r){if(!F(n))throw new TypeError;return M(r)||(r=q(r)),j(e,t,n,r)}function v(e,t,n){if(!F(t))throw new TypeError;return M(n)||(n=q(n)),C(e,t,n)}function b(e,t,n){if(!F(t))throw new TypeError;return M(n)||(n=q(n)),N(e,t,n)}function w(e,t,n){if(!F(t))throw new TypeError;return M(n)||(n=q(n)),R(e,t,n)}function x(e,t,n){if(!F(t))throw new TypeError;return M(n)||(n=q(n)),P(e,t,n)}function k(e,t){if(!F(e))throw new TypeError;return M(t)||(t=q(t)),A(e,t)}function _(e,t){if(!F(e))throw new TypeError;return M(t)||(t=q(t)),D(e,t)}function E(e,t,n){if(!F(t))throw new TypeError;M(n)||(n=q(n));var r=T(t,n,!1);if(M(r))return!1;if(!r.delete(e))return!1;if(r.size>0)return!0;var i=p.get(t);return i.delete(n),i.size>0||p.delete(t),!0}function I(e,t){for(var n=e.length-1;n>=0;--n){var r=(0,e[n])(t);if(!M(r)&&!L(r)){if(!W(r))throw new TypeError;t=r}}return t}function S(e,t,n,r){for(var i=e.length-1;i>=0;--i){var s=(0,e[i])(t,n,r);if(!M(s)&&!L(s)){if(!F(s))throw new TypeError;r=s}}return r}function T(e,t,n){var r=p.get(e);if(M(r)){if(!n)return;r=new d,p.set(e,r)}var i=r.get(t);if(M(i)){if(!n)return;i=new d,r.set(t,i)}return i}function C(e,t,n){if(N(e,t,n))return!0;var r=ee(t);return!L(r)&&C(e,r,n)}function N(e,t,n){var r=T(t,n,!1);return!M(r)&&V(r.has(e))}function R(e,t,n){if(N(e,t,n))return P(e,t,n);var r=ee(t);return L(r)?void 0:R(e,r,n)}function P(e,t,n){var r=T(t,n,!1);if(!M(r))return r.get(e)}function j(e,t,n,r){T(n,r,!0).set(e,t)}function A(e,t){var n=D(e,t),r=ee(e);if(null===r)return n;var i=A(r,t);if(i.length<=0)return n;if(n.length<=0)return i;for(var s=new f,o=[],a=0,l=n;a<l.length;a++){var c=l[a];s.has(c)||(s.add(c),o.push(c))}for(var u=0,h=i;u<h.length;u++){c=h[u];s.has(c)||(s.add(c),o.push(c))}return o}function D(e,t){var n=[],r=T(e,t,!1);if(M(r))return n;for(var i=Y(r.keys()),s=0;;){var o=J(i);if(!o)return n.length=s,n;var a=X(o);try{n[s]=a}catch(e){try{Z(i)}finally{throw e}}s++}}function O(e){if(null===e)return 1;switch(typeof e){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===e?1:6;default:return 6}}function M(e){return void 0===e}function L(e){return null===e}function U(e){return"symbol"==typeof e}function F(e){return"object"==typeof e?null!==e:"function"==typeof e}function $(e,t){switch(O(e)){case 0:case 1:case 2:case 3:case 4:case 5:return e}var n=3===t?"string":5===t?"number":"default",i=Q(e,r);if(void 0!==i){var s=i.call(e,n);if(F(s))throw new TypeError;return s}return z(e,"default"===n?"number":n)}function z(e,t){if("string"===t){var n=e.toString;if(K(n))if(!F(i=n.call(e)))return i;if(K(r=e.valueOf))if(!F(i=r.call(e)))return i}else{var r;if(K(r=e.valueOf))if(!F(i=r.call(e)))return i;var i,s=e.toString;if(K(s))if(!F(i=s.call(e)))return i}throw new TypeError}function V(e){return!!e}function B(e){return""+e}function q(e){var t=$(e,3);return U(t)?t:B(t)}function H(e){return Array.isArray?Array.isArray(e):e instanceof Object?e instanceof Array:"[object Array]"===Object.prototype.toString.call(e)}function K(e){return"function"==typeof e}function W(e){return"function"==typeof e}function G(e){switch(O(e)){case 3:case 4:return!0;default:return!1}}function Q(e,t){var n=e[t];if(null!=n){if(!K(n))throw new TypeError;return n}}function Y(e){var t=Q(e,i);if(!K(t))throw new TypeError;var n=t.call(e);if(!F(n))throw new TypeError;return n}function X(e){return e.value}function J(e){var t=e.next();return!t.done&&t}function Z(e){var t=e.return;t&&t.call(e)}function ee(e){var t=Object.getPrototypeOf(e);if("function"!=typeof e||e===u)return t;if(t!==u)return t;var n=e.prototype,r=n&&Object.getPrototypeOf(n);if(null==r||r===Object.prototype)return t;var i=r.constructor;return"function"!=typeof i||i===e?t:i}function te(){var e={},t=[],n=function(){function e(e,t,n){this._index=0,this._keys=e,this._values=t,this._selector=n}return e.prototype["@@iterator"]=function(){return this},e.prototype[i]=function(){return this},e.prototype.next=function(){var e=this._index;if(e>=0&&e<this._keys.length){var n=this._selector(this._keys[e],this._values[e]);return e+1>=this._keys.length?(this._index=-1,this._keys=t,this._values=t):this._index++,{value:n,done:!1}}return{value:void 0,done:!0}},e.prototype.throw=function(e){throw this._index>=0&&(this._index=-1,this._keys=t,this._values=t),e},e.prototype.return=function(e){return this._index>=0&&(this._index=-1,this._keys=t,this._values=t),{value:e,done:!0}},e}();return function(){function t(){this._keys=[],this._values=[],this._cacheKey=e,this._cacheIndex=-2}return Object.defineProperty(t.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),t.prototype.has=function(e){return this._find(e,!1)>=0},t.prototype.get=function(e){var t=this._find(e,!1);return t>=0?this._values[t]:void 0},t.prototype.set=function(e,t){var n=this._find(e,!0);return this._values[n]=t,this},t.prototype.delete=function(t){var n=this._find(t,!1);if(n>=0){for(var r=this._keys.length,i=n+1;i<r;i++)this._keys[i-1]=this._keys[i],this._values[i-1]=this._values[i];return this._keys.length--,this._values.length--,t===this._cacheKey&&(this._cacheKey=e,this._cacheIndex=-2),!0}return!1},t.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=e,this._cacheIndex=-2},t.prototype.keys=function(){return new n(this._keys,this._values,r)},t.prototype.values=function(){return new n(this._keys,this._values,s)},t.prototype.entries=function(){return new n(this._keys,this._values,o)},t.prototype["@@iterator"]=function(){return this.entries()},t.prototype[i]=function(){return this.entries()},t.prototype._find=function(e,t){return this._cacheKey!==e&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=e)),this._cacheIndex<0&&t&&(this._cacheIndex=this._keys.length,this._keys.push(e),this._values.push(void 0)),this._cacheIndex},t}();function r(e,t){return e}function s(e,t){return t}function o(e,t){return[e,t]}}function ne(){return function(){function e(){this._map=new d}return Object.defineProperty(e.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),e.prototype.has=function(e){return this._map.has(e)},e.prototype.add=function(e){return this._map.set(e,e),this},e.prototype.delete=function(e){return this._map.delete(e)},e.prototype.clear=function(){this._map.clear()},e.prototype.keys=function(){return this._map.keys()},e.prototype.values=function(){return this._map.values()},e.prototype.entries=function(){return this._map.entries()},e.prototype["@@iterator"]=function(){return this.keys()},e.prototype[i]=function(){return this.keys()},e}()}function re(){var e=16,n=c.create(),r=i();return function(){function e(){this._key=i()}return e.prototype.has=function(e){var t=s(e,!1);return void 0!==t&&c.has(t,this._key)},e.prototype.get=function(e){var t=s(e,!1);return void 0!==t?c.get(t,this._key):void 0},e.prototype.set=function(e,t){return s(e,!0)[this._key]=t,this},e.prototype.delete=function(e){var t=s(e,!1);return void 0!==t&&delete t[this._key]},e.prototype.clear=function(){this._key=i()},e}();function i(){var e;do{e="@@WeakMap@@"+l()}while(c.has(n,e));return n[e]=!0,e}function s(e,n){if(!t.call(e,r)){if(!n)return;Object.defineProperty(e,r,{value:c.create()})}return e[r]}function o(e,t){for(var n=0;n<t;++n)e[n]=255*Math.random()|0;return e}function a(e){return"function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(e)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(e)):o(new Uint8Array(e),e):o(new Array(e),e)}function l(){var t=a(e);t[6]=79&t[6]|64,t[8]=191&t[8]|128;for(var n="",r=0;r<e;++r){var i=t[r];4!==r&&6!==r&&8!==r||(n+="-"),i<16&&(n+="0"),n+=i.toString(16).toLowerCase()}return n}}function ie(e){return e.__=void 0,delete e.__,e}e("decorate",m),e("metadata",g),e("defineMetadata",y),e("hasMetadata",v),e("hasOwnMetadata",b),e("getMetadata",w),e("getOwnMetadata",x),e("getMetadataKeys",k),e("getOwnMetadataKeys",_),e("deleteMetadata",E)}(i)}()}(m||(m={}));var _,E,I={};e(I,"createRoot",(()=>_),(e=>_=e)),e(I,"hydrateRoot",(()=>E),(e=>E=e));var S;!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),S=s("gAtBI"),_=S.createRoot,E=S.hydrateRoot;
/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var T,C,N=s("fYo6y");
/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R.apply(this,arguments)}(C=T||(T={})).Pop="POP",C.Push="PUSH",C.Replace="REPLACE";const P="popstate";function j(e){return void 0===e&&(e={}),F((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return M("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:L(t)}),null,e)}function A(e,t){if(!1===e||null==e)throw new Error(t)}function D(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function O(e,t){return{usr:e.state,key:e.key,idx:t}}function M(e,t,n,r){return void 0===n&&(n=null),R({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?U(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function L(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function U(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function F(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=T.Pop,l=null,c=u();function u(){return(o.state||{idx:null}).idx}function h(){a=T.Pop;let e=u(),t=null==e?null:e-c;c=e,l&&l({action:a,location:f.location,delta:t})}function d(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"==typeof e?e:L(e);return A(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==c&&(c=0,o.replaceState(R({},o.state,{idx:c}),""));let f={get action(){return a},get location(){return e(i,o)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(P,h),l=e,()=>{i.removeEventListener(P,h),l=null}},createHref:e=>t(i,e),createURL:d,encodeLocation(e){let t=d(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){a=T.Push;let r=M(f.location,e,t);n&&n(r,e),c=u()+1;let h=O(r,c),d=f.createHref(r);try{o.pushState(h,"",d)}catch(e){i.location.assign(d)}s&&l&&l({action:a,location:f.location,delta:1})},replace:function(e,t){a=T.Replace;let r=M(f.location,e,t);n&&n(r,e),c=u();let i=O(r,c),h=f.createHref(r);o.replaceState(i,"",h),s&&l&&l({action:a,location:f.location,delta:0})},go:e=>o.go(e)};return f}var $,z;(z=$||($={})).data="data",z.deferred="deferred",z.redirect="redirect",z.error="error";const V=new Set(["lazy","caseSensitive","path","id","index","children"]);function B(e,t,n,r){return void 0===n&&(n=[]),void 0===r&&(r={}),e.map(((e,i)=>{let s=[...n,i],o="string"==typeof e.id?e.id:s.join("-");if(A(!0!==e.index||!e.children,"Cannot specify children on an index route"),A(!r[o],'Found a route id collision on id "'+o+"\".  Route id's must be globally unique within Data Router usages"),function(e){return!0===e.index}(e)){let n=R({},e,t(e),{id:o});return r[o]=n,n}{let n=R({},e,t(e),{id:o,children:void 0});return r[o]=n,e.children&&(n.children=B(e.children,t,s,r)),n}}))}function q(e,t,n){void 0===n&&(n="/");let r=ie(("string"==typeof t?U(t):t).pathname||"/",n);if(null==r)return null;let i=H(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let s=null;for(let e=0;null==s&&e<i.length;++e)s=te(i[e],re(r));return s}function H(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,s)=>{let o={relativePath:void 0===s?e.path||"":s,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};o.relativePath.startsWith("/")&&(A(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(r.length));let a=le([r,o.relativePath]),l=n.concat(o);e.children&&e.children.length>0&&(A(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+a+'".'),H(e.children,t,l,a)),(null!=e.path||e.index)&&t.push({path:a,score:ee(a,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of K(e.path))i(e,t,n);else i(e,t)})),t}function K(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(0===r.length)return i?[s,""]:[s];let o=K(r.join("/")),a=[];return a.push(...o.map((e=>""===e?s:[s,e].join("/")))),i&&a.push(...o),a.map((t=>e.startsWith("/")&&""===t?"/":t))}const W=/^:\w+$/,G=3,Q=2,Y=1,X=10,J=-2,Z=e=>"*"===e;function ee(e,t){let n=e.split("/"),r=n.length;return n.some(Z)&&(r+=J),t&&(r+=Q),n.filter((e=>!Z(e))).reduce(((e,t)=>e+(W.test(t)?G:""===t?Y:X)),r)}function te(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let e=0;e<n.length;++e){let o=n[e],a=e===n.length-1,l="/"===i?t:t.slice(i.length)||"/",c=ne({path:o.relativePath,caseSensitive:o.caseSensitive,end:a},l);if(!c)return null;Object.assign(r,c.params);let u=o.route;s.push({params:r,pathname:le([i,c.pathname]),pathnameBase:ce(le([i,c.pathnameBase])),route:u}),"/"!==c.pathnameBase&&(i=le([i,c.pathnameBase]))}return s}function ne(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);D("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,t)=>(r.push(t),"/([^\\/]+)")));e.endsWith("*")?(r.push("*"),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let s=new RegExp(i,t?void 0:"i");return[s,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce(((e,t,n)=>{if("*"===t){let e=a[n]||"";o=s.slice(0,s.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return D(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(a[n]||"",t),e}),{}),pathname:s,pathnameBase:o,pattern:e}}function re(e){try{return decodeURI(e)}catch(t){return D(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function ie(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function se(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function oe(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function ae(e,t,n,r){let i;void 0===r&&(r=!1),"string"==typeof e?i=U(e):(i=R({},e),A(!i.pathname||!i.pathname.includes("?"),se("?","pathname","search",i)),A(!i.pathname||!i.pathname.includes("#"),se("#","pathname","hash",i)),A(!i.search||!i.search.includes("#"),se("#","search","hash",i)));let s,o=""===e||""===i.pathname,a=o?"/":i.pathname;if(r||null==a)s=n;else{let e=t.length-1;if(a.startsWith("..")){let t=a.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}s=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"==typeof e?U(e):e,s=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:s,search:ue(r),hash:he(i)}}(i,s),c=a&&"/"!==a&&a.endsWith("/"),u=(o||"."===a)&&n.endsWith("/");return l.pathname.endsWith("/")||!c&&!u||(l.pathname+="/"),l}const le=e=>e.join("/").replace(/\/\/+/g,"/"),ce=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ue=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",he=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class de extends Error{}class fe{constructor(e,t,n,r){void 0===r&&(r=!1),this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function pe(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const me=["post","put","patch","delete"],ge=new Set(me),ye=["get",...me],ve=new Set(ye),be=new Set([301,302,303,307,308]),we=new Set([307,308]),xe={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ke={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},_e={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Ee=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ie="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,Se=!Ie,Te=e=>({hasErrorBoundary:Boolean(e.hasErrorBoundary)});function Ce(e){let t;if(A(e.routes.length>0,"You must provide a non-empty routes array to createRouter"),e.mapRouteProperties)t=e.mapRouteProperties;else if(e.detectErrorBoundary){let n=e.detectErrorBoundary;t=e=>({hasErrorBoundary:n(e)})}else t=Te;let n,r={},i=B(e.routes,t,void 0,r),s=e.basename||"/",o=R({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),a=null,l=new Set,c=null,u=null,h=null,d=null!=e.hydrationData,f=q(i,e.history.location,s),p=null;if(null==f){let t=qe(404,{pathname:e.history.location.pathname}),{matches:n,route:r}=Be(i);f=n,p={[r.id]:t}}let m,g,y=!(f.some((e=>e.route.lazy))||f.some((e=>e.route.loader))&&null==e.hydrationData),v={historyAction:e.history.action,location:e.history.location,matches:f,initialized:y,navigation:xe,restoreScrollPosition:null==e.hydrationData&&null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||p,fetchers:new Map,blockers:new Map},b=T.Pop,w=!1,x=!1,k=!1,_=[],E=[],I=new Map,S=0,C=-1,N=new Map,P=new Set,j=new Map,O=new Map,L=new Map,U=!1;function F(e){v=R({},v,e),l.forEach((e=>e(v)))}function z(t,r){var s,o;let a,l=null!=v.actionData&&null!=v.navigation.formMethod&&Je(v.navigation.formMethod)&&"loading"===v.navigation.state&&!0!==(null==(s=t.state)?void 0:s._isRedirect);a=r.actionData?Object.keys(r.actionData).length>0?r.actionData:null:l?v.actionData:null;let c=r.loaderData?ze(v.loaderData,r.loaderData,r.matches||[],r.errors):v.loaderData;for(let[e]of L)te(e);let u=!0===w||null!=v.navigation.formMethod&&Je(v.navigation.formMethod)&&!0!==(null==(o=t.state)?void 0:o._isRedirect);n&&(i=n,n=void 0),F(R({},r,{actionData:a,loaderData:c,historyAction:b,location:t,initialized:!0,navigation:xe,revalidation:"idle",restoreScrollPosition:oe(t,r.matches||v.matches),preventScrollReset:u,blockers:new Map(v.blockers)})),x||b===T.Pop||(b===T.Push?e.history.push(t,t.state):b===T.Replace&&e.history.replace(t,t.state)),b=T.Pop,w=!1,x=!1,k=!1,_=[],E=[]}async function V(o,a,l){g&&g.abort(),g=null,b=o,x=!0===(l&&l.startUninterruptedRevalidation),function(e,t){if(c&&u&&h){let n=t.map((e=>nt(e,v.loaderData))),r=u(e,n)||e.key;c[r]=h()}}(v.location,v.matches),w=!0===(l&&l.preventScrollReset);let d=n||i,f=l&&l.overrideNavigation,p=q(d,a,s);if(!p){let e=qe(404,{pathname:a.pathname}),{matches:t,route:n}=Be(d);return se(),void z(a,{matches:t,loaderData:{},errors:{[n.id]:e}})}if(v.initialized&&function(e,t){if(e.pathname!==t.pathname||e.search!==t.search)return!1;if(""===e.hash)return""!==t.hash;if(e.hash===t.hash)return!0;if(""!==t.hash)return!0;return!1}(v.location,a)&&!(l&&l.submission&&Je(l.submission.formMethod)))return void z(a,{matches:p});g=new AbortController;let m,y,N=Le(e.history,a,g.signal,l&&l.submission);if(l&&l.pendingError)y={[Ve(p).route.id]:l.pendingError};else if(l&&l.submission&&Je(l.submission.formMethod)){let e=await async function(e,n,i,o,a){G();let l,c=R({state:"submitting",location:n},i);F({navigation:c});let u=rt(o,n);if(u.route.action||u.route.lazy){if(l=await Me("action",e,u,o,r,t,s),e.signal.aborted)return{shortCircuited:!0}}else l={type:$.error,error:qe(405,{method:e.method,pathname:n.pathname,routeId:u.route.id})};if(Qe(l)){let e;return e=a&&null!=a.replace?a.replace:l.location===v.location.pathname+v.location.search,await K(v,l,{submission:i,replace:e}),{shortCircuited:!0}}if(Ge(l)){let e=Ve(o,u.route.id);return!0!==(a&&a.replace)&&(b=T.Push),{pendingActionData:{},pendingActionError:{[e.route.id]:l.error}}}if(We(l))throw qe(400,{type:"defer-action"});return{pendingActionData:{[u.route.id]:l.data}}}(N,a,l.submission,p,{replace:l.replace});if(e.shortCircuited)return;m=e.pendingActionData,y=e.pendingActionError,f=R({state:"loading",location:a},l.submission),N=new Request(N.url,{signal:N.signal})}let{shortCircuited:P,loaderData:A,errors:D}=await async function(t,r,o,a,l,c,u,h,d){let f=a;if(!f){f=R({state:"loading",location:r,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},l)}let p=l||c?l||c:f.formMethod&&f.formAction&&f.formData&&f.formEncType?{formMethod:f.formMethod,formAction:f.formAction,formData:f.formData,formEncType:f.formEncType}:void 0,m=n||i,[y,b]=je(e.history,v,o,p,r,k,_,E,j,m,s,h,d);if(se((e=>!(o&&o.some((t=>t.route.id===e)))||y&&y.some((t=>t.route.id===e)))),0===y.length&&0===b.length){let e=Z();return z(r,R({matches:o,loaderData:{},errors:d||null},h?{actionData:h}:{},e?{fetchers:new Map(v.fetchers)}:{})),{shortCircuited:!0}}if(!x){b.forEach((e=>{let t=v.fetchers.get(e.key),n={state:"loading",data:t&&t.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(e.key,n)}));let e=h||v.actionData;F(R({navigation:f},e?0===Object.keys(e).length?{actionData:null}:{actionData:e}:{},b.length>0?{fetchers:new Map(v.fetchers)}:{}))}C=++S,b.forEach((e=>{e.controller&&I.set(e.key,e.controller)}));let w=()=>b.forEach((e=>X(e.key)));g&&g.signal.addEventListener("abort",w);let{results:T,loaderResults:N,fetcherResults:P}=await W(v.matches,o,y,b,t);if(t.signal.aborted)return{shortCircuited:!0};g&&g.signal.removeEventListener("abort",w);b.forEach((e=>I.delete(e.key)));let A=He(T);if(A)return await K(v,A,{replace:u}),{shortCircuited:!0};let{loaderData:D,errors:M}=$e(v,o,y,N,d,b,P,O);O.forEach(((e,t)=>{e.subscribe((n=>{(n||e.done)&&O.delete(t)}))}));let L=Z(),U=ee(C),$=L||U||b.length>0;return R({loaderData:D,errors:M},$?{fetchers:new Map(v.fetchers)}:{})}(N,a,p,f,l&&l.submission,l&&l.fetcherSubmission,l&&l.replace,m,y);P||(g=null,z(a,R({matches:p},m?{actionData:m}:{},{loaderData:A,errors:D})))}function H(e){return v.fetchers.get(e)||ke}async function K(t,n,r){var i;let{submission:o,replace:a,isFetchActionRedirect:l}=void 0===r?{}:r;n.revalidate&&(k=!0);let c=M(t.location,n.location,R({_isRedirect:!0},l?{_isFetchActionRedirect:!0}:{}));if(A(c,"Expected a location on the redirect navigation"),Ee.test(n.location)&&Ie&&void 0!==(null==(i=window)?void 0:i.location)){let t=e.history.createURL(n.location),r=null==ie(t.pathname,s);if(window.location.origin!==t.origin||r)return void(a?window.location.replace(n.location):window.location.assign(n.location))}g=null;let u=!0===a?T.Replace:T.Push,{formMethod:h,formAction:d,formEncType:f,formData:p}=t.navigation;!o&&h&&d&&p&&f&&(o={formMethod:h,formAction:d,formEncType:f,formData:p}),we.has(n.status)&&o&&Je(o.formMethod)?await V(u,c,{submission:R({},o,{formAction:n.location}),preventScrollReset:w}):l?await V(u,c,{overrideNavigation:{state:"loading",location:c,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:o,preventScrollReset:w}):await V(u,c,{overrideNavigation:{state:"loading",location:c,formMethod:o?o.formMethod:void 0,formAction:o?o.formAction:void 0,formEncType:o?o.formEncType:void 0,formData:o?o.formData:void 0},preventScrollReset:w})}async function W(n,i,o,a,l){let c=await Promise.all([...o.map((e=>Me("loader",l,e,i,r,t,s))),...a.map((n=>{if(n.matches&&n.match&&n.controller)return Me("loader",Le(e.history,n.path,n.controller.signal),n.match,n.matches,r,t,s);return{type:$.error,error:qe(404,{pathname:n.path})}}))]),u=c.slice(0,o.length),h=c.slice(o.length);return await Promise.all([Ze(n,o,u,u.map((()=>l.signal)),!1,v.loaderData),Ze(n,a.map((e=>e.match)),h,a.map((e=>e.controller?e.controller.signal:null)),!0)]),{results:c,loaderResults:u,fetcherResults:h}}function G(){k=!0,_.push(...se()),j.forEach(((e,t)=>{I.has(t)&&(E.push(t),X(t))}))}function Q(e,t,n){let r=Ve(v.matches,t);Y(e),F({errors:{[r.route.id]:n},fetchers:new Map(v.fetchers)})}function Y(e){I.has(e)&&X(e),j.delete(e),N.delete(e),P.delete(e),v.fetchers.delete(e)}function X(e){let t=I.get(e);A(t,"Expected fetch controller: "+e),t.abort(),I.delete(e)}function J(e){for(let t of e){let e={state:"idle",data:H(t).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(t,e)}}function Z(){let e=[],t=!1;for(let n of P){let r=v.fetchers.get(n);A(r,"Expected fetcher: "+n),"loading"===r.state&&(P.delete(n),e.push(n),t=!0)}return J(e),t}function ee(e){let t=[];for(let[n,r]of N)if(r<e){let e=v.fetchers.get(n);A(e,"Expected fetcher: "+n),"loading"===e.state&&(X(n),N.delete(n),t.push(n))}return J(t),t.length>0}function te(e){v.blockers.delete(e),L.delete(e)}function ne(e,t){let n=v.blockers.get(e)||_e;A("unblocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"proceeding"===t.state||"blocked"===n.state&&"unblocked"===t.state||"proceeding"===n.state&&"unblocked"===t.state,"Invalid blocker state transition: "+n.state+" -> "+t.state),v.blockers.set(e,t),F({blockers:new Map(v.blockers)})}function re(e){let{currentLocation:t,nextLocation:n,historyAction:r}=e;if(0===L.size)return;L.size>1&&D(!1,"A router only supports one blocker at a time");let i=Array.from(L.entries()),[s,o]=i[i.length-1],a=v.blockers.get(s);return a&&"proceeding"===a.state?void 0:o({currentLocation:t,nextLocation:n,historyAction:r})?s:void 0}function se(e){let t=[];return O.forEach(((n,r)=>{e&&!e(r)||(n.cancel(),t.push(r),O.delete(r))})),t}function oe(e,t){if(c&&u&&h){let n=t.map((e=>nt(e,v.loaderData))),r=u(e,n)||e.key,i=c[r];if("number"==typeof i)return i}return null}return m={get basename(){return s},get state(){return v},get routes(){return i},initialize:function(){return a=e.history.listen((t=>{let{action:n,location:r,delta:i}=t;if(U)return void(U=!1);D(0===L.size||null!=i,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let s=re({currentLocation:v.location,nextLocation:r,historyAction:n});return s&&null!=i?(U=!0,e.history.go(-1*i),void ne(s,{state:"blocked",location:r,proceed(){ne(s,{state:"proceeding",proceed:void 0,reset:void 0,location:r}),e.history.go(i)},reset(){te(s),F({blockers:new Map(m.state.blockers)})}})):V(n,r)})),v.initialized||V(T.Pop,v.location),m},subscribe:function(e){return l.add(e),()=>l.delete(e)},enableScrollRestoration:function(e,t,n){if(c=e,h=t,u=n||(e=>e.key),!d&&v.navigation===xe){d=!0;let e=oe(v.location,v.matches);null!=e&&F({restoreScrollPosition:e})}return()=>{c=null,h=null,u=null}},navigate:async function t(n,r){if("number"==typeof n)return void e.history.go(n);let i=Ne(v.location,v.matches,s,o.v7_prependBasename,n,null==r?void 0:r.fromRouteId,null==r?void 0:r.relative),{path:a,submission:l,error:c}=Re(o.v7_normalizeFormMethod,!1,i,r),u=v.location,h=M(v.location,a,r&&r.state);h=R({},h,e.history.encodeLocation(h));let d=r&&null!=r.replace?r.replace:void 0,f=T.Push;!0===d?f=T.Replace:!1===d||null!=l&&Je(l.formMethod)&&l.formAction===v.location.pathname+v.location.search&&(f=T.Replace);let p=r&&"preventScrollReset"in r?!0===r.preventScrollReset:void 0,m=re({currentLocation:u,nextLocation:h,historyAction:f});if(!m)return await V(f,h,{submission:l,pendingError:c,preventScrollReset:p,replace:r&&r.replace});ne(m,{state:"blocked",location:h,proceed(){ne(m,{state:"proceeding",proceed:void 0,reset:void 0,location:h}),t(n,r)},reset(){te(m),F({blockers:new Map(v.blockers)})}})},fetch:function(a,l,c,u){if(Se)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");I.has(a)&&X(a);let h=n||i,d=Ne(v.location,v.matches,s,o.v7_prependBasename,c,l,null==u?void 0:u.relative),f=q(h,d,s);if(!f)return void Q(a,l,qe(404,{pathname:d}));let{path:p,submission:m}=Re(o.v7_normalizeFormMethod,!0,d,u),y=rt(f,p);w=!0===(u&&u.preventScrollReset),m&&Je(m.formMethod)?async function(o,a,l,c,u,h){if(G(),j.delete(o),!c.route.action&&!c.route.lazy){let e=qe(405,{method:h.formMethod,pathname:l,routeId:a});return void Q(o,a,e)}let d=v.fetchers.get(o),f=R({state:"submitting"},h,{data:d&&d.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(o,f),F({fetchers:new Map(v.fetchers)});let p=new AbortController,m=Le(e.history,l,p.signal,h);I.set(o,p);let y=await Me("action",m,c,u,r,t,s);if(m.signal.aborted)return void(I.get(o)===p&&I.delete(o));if(Qe(y)){I.delete(o),P.add(o);let e=R({state:"loading"},h,{data:void 0," _hasFetcherDoneAnything ":!0});return v.fetchers.set(o,e),F({fetchers:new Map(v.fetchers)}),K(v,y,{submission:h,isFetchActionRedirect:!0})}if(Ge(y))return void Q(o,a,y.error);if(We(y))throw qe(400,{type:"defer-action"});let w=v.navigation.location||v.location,x=Le(e.history,w,p.signal),T=n||i,D="idle"!==v.navigation.state?q(T,v.navigation.location,s):v.matches;A(D,"Didn't find any matches after fetcher action");let M=++S;N.set(o,M);let L=R({state:"loading",data:y.data},h,{" _hasFetcherDoneAnything ":!0});v.fetchers.set(o,L);let[U,$]=je(e.history,v,D,h,w,k,_,E,j,T,s,{[c.route.id]:y.data},void 0);$.filter((e=>e.key!==o)).forEach((e=>{let t=e.key,n=v.fetchers.get(t),r={state:"loading",data:n&&n.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(t,r),e.controller&&I.set(t,e.controller)})),F({fetchers:new Map(v.fetchers)});let V=()=>$.forEach((e=>X(e.key)));p.signal.addEventListener("abort",V);let{results:B,loaderResults:H,fetcherResults:Y}=await W(v.matches,D,U,$,x);if(p.signal.aborted)return;p.signal.removeEventListener("abort",V),N.delete(o),I.delete(o),$.forEach((e=>I.delete(e.key)));let J=He(B);if(J)return K(v,J);let{loaderData:Z,errors:te}=$e(v,v.matches,U,H,void 0,$,Y,O),ne={state:"idle",data:y.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(o,ne);let re=ee(M);"loading"===v.navigation.state&&M>C?(A(b,"Expected pending action"),g&&g.abort(),z(v.navigation.location,{matches:D,loaderData:Z,errors:te,fetchers:new Map(v.fetchers)})):(F(R({errors:te,loaderData:ze(v.loaderData,Z,D,te)},re?{fetchers:new Map(v.fetchers)}:{})),k=!1)}(a,l,p,y,f,m):(j.set(a,{routeId:l,path:p}),async function(n,i,o,a,l,c){let u=v.fetchers.get(n),h=R({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},c,{data:u&&u.data," _hasFetcherDoneAnything ":!0});v.fetchers.set(n,h),F({fetchers:new Map(v.fetchers)});let d=new AbortController,f=Le(e.history,o,d.signal);I.set(n,d);let p=await Me("loader",f,a,l,r,t,s);We(p)&&(p=await et(p,f.signal,!0)||p);I.get(n)===d&&I.delete(n);if(f.signal.aborted)return;if(Qe(p))return P.add(n),void await K(v,p);if(Ge(p)){let e=Ve(v.matches,i);return v.fetchers.delete(n),void F({fetchers:new Map(v.fetchers),errors:{[e.route.id]:p.error}})}A(!We(p),"Unhandled fetcher deferred data");let m={state:"idle",data:p.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};v.fetchers.set(n,m),F({fetchers:new Map(v.fetchers)})}(a,l,p,y,f,m))},revalidate:function(){G(),F({revalidation:"loading"}),"submitting"!==v.navigation.state&&("idle"!==v.navigation.state?V(b||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation}):V(v.historyAction,v.location,{startUninterruptedRevalidation:!0}))},createHref:t=>e.history.createHref(t),encodeLocation:t=>e.history.encodeLocation(t),getFetcher:H,deleteFetcher:Y,dispose:function(){a&&a(),l.clear(),g&&g.abort(),v.fetchers.forEach(((e,t)=>Y(t))),v.blockers.forEach(((e,t)=>te(t)))},getBlocker:function(e,t){let n=v.blockers.get(e)||_e;return L.get(e)!==t&&L.set(e,t),n},deleteBlocker:te,_internalFetchControllers:I,_internalActiveDeferreds:O,_internalSetRoutes:function(e){r={},n=B(e,t,void 0,r)}},m}Symbol("deferred");function Ne(e,t,n,r,i,s,o){let a,l;if(null!=s&&"path"!==o){a=[];for(let e of t)if(a.push(e),e.route.id===s){l=e;break}}else a=t,l=t[t.length-1];let c=ae(i||".",oe(a).map((e=>e.pathnameBase)),ie(e.pathname,n)||e.pathname,"path"===o);return null==i&&(c.search=e.search,c.hash=e.hash),null!=i&&""!==i&&"."!==i||!l||!l.route.index||tt(c.search)||(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&"/"!==n&&(c.pathname="/"===c.pathname?n:le([n,c.pathname])),L(c)}function Re(e,t,n,r){if(!r||!function(e){return null!=e&&"formData"in e}(r))return{path:n};if(r.formMethod&&!Xe(r.formMethod))return{path:n,error:qe(405,{method:r.formMethod})};let i;if(r.formData){let t=r.formMethod||"get";if(i={formMethod:e?t.toUpperCase():t.toLowerCase(),formAction:Ke(n),formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:r.formData},Je(i.formMethod))return{path:n,submission:i}}let s=U(n),o=Ue(r.formData);return t&&s.search&&tt(s.search)&&o.append("index",""),s.search="?"+o,{path:L(s),submission:i}}function Pe(e,t){let n=e;if(t){let r=e.findIndex((e=>e.route.id===t));r>=0&&(n=e.slice(0,r))}return n}function je(e,t,n,r,i,s,o,a,l,c,u,h,d){let f=d?Object.values(d)[0]:h?Object.values(h)[0]:void 0,p=e.createURL(t.location),m=e.createURL(i),g=d?Object.keys(d)[0]:void 0,y=Pe(n,g).filter(((e,n)=>{if(e.route.lazy)return!0;if(null==e.route.loader)return!1;if(function(e,t,n){let r=!t||n.route.id!==t.route.id,i=void 0===e[n.route.id];return r||i}(t.loaderData,t.matches[n],e)||o.some((t=>t===e.route.id)))return!0;let i=t.matches[n],a=e;return De(e,R({currentUrl:p,currentParams:i.params,nextUrl:m,nextParams:a.params},r,{actionResult:f,defaultShouldRevalidate:s||p.pathname+p.search===m.pathname+m.search||p.search!==m.search||Ae(i,a)}))})),v=[];return l.forEach(((e,i)=>{if(!n.some((t=>t.route.id===e.routeId)))return;let o=q(c,e.path,u);if(!o)return void v.push({key:i,routeId:e.routeId,path:e.path,matches:null,match:null,controller:null});let l=rt(o,e.path);(a.includes(i)||De(l,R({currentUrl:p,currentParams:t.matches[t.matches.length-1].params,nextUrl:m,nextParams:n[n.length-1].params},r,{actionResult:f,defaultShouldRevalidate:s})))&&v.push({key:i,routeId:e.routeId,path:e.path,matches:o,match:l,controller:new AbortController})})),[y,v]}function Ae(e,t){let n=e.route.path;return e.pathname!==t.pathname||null!=n&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function De(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if("boolean"==typeof n)return n}return t.defaultShouldRevalidate}async function Oe(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];A(i,"No route found in manifest");let s={};for(let e in r){let t=void 0!==i[e]&&"hasErrorBoundary"!==e;D(!t,'Route "'+i.id+'" has a static property "'+e+'" defined but its lazy function is also returning a value for this property. The lazy route property "'+e+'" will be ignored.'),t||V.has(e)||(s[e]=r[e])}Object.assign(i,s),Object.assign(i,R({},t(i),{lazy:void 0}))}async function Me(e,t,n,r,i,s,o,a,l,c){let u,h,d;void 0===a&&(a=!1),void 0===l&&(l=!1);let f=e=>{let r,i=new Promise(((e,t)=>r=t));return d=()=>r(),t.signal.addEventListener("abort",d),Promise.race([e({request:t,params:n.params,context:c}),i])};try{let r=n.route[e];if(n.route.lazy)if(r){h=(await Promise.all([f(r),Oe(n.route,s,i)]))[0]}else{if(await Oe(n.route,s,i),r=n.route[e],!r){if("action"===e){let e=new URL(t.url),r=e.pathname+e.search;throw qe(405,{method:t.method,pathname:r,routeId:n.route.id})}return{type:$.data,data:void 0}}h=await f(r)}else{if(!r){let e=new URL(t.url);throw qe(404,{pathname:e.pathname+e.search})}h=await f(r)}A(void 0!==h,"You defined "+("action"===e?"an action":"a loader")+' for route "'+n.route.id+"\" but didn't return anything from your `"+e+"` function. Please return a value or `null`.")}catch(e){u=$.error,h=e}finally{d&&t.signal.removeEventListener("abort",d)}if(Ye(h)){let e,i=h.status;if(be.has(i)){let e=h.headers.get("Location");if(A(e,"Redirects returned/thrown from loaders/actions must have a Location header"),Ee.test(e)){if(!a){let n=new URL(t.url),r=e.startsWith("//")?new URL(n.protocol+e):new URL(e),i=null!=ie(r.pathname,o);r.origin===n.origin&&i&&(e=r.pathname+r.search+r.hash)}}else e=Ne(new URL(t.url),r.slice(0,r.indexOf(n)+1),o,!0,e);if(a)throw h.headers.set("Location",e),h;return{type:$.redirect,status:i,location:e,revalidate:null!==h.headers.get("X-Remix-Revalidate")}}if(l)throw{type:u||$.data,response:h};let s=h.headers.get("Content-Type");return e=s&&/\bapplication\/json\b/.test(s)?await h.json():await h.text(),u===$.error?{type:u,error:new fe(i,h.statusText,e),headers:h.headers}:{type:$.data,data:e,statusCode:h.status,headers:h.headers}}return u===$.error?{type:u,error:h}:function(e){let t=e;return t&&"object"==typeof t&&"object"==typeof t.data&&"function"==typeof t.subscribe&&"function"==typeof t.cancel&&"function"==typeof t.resolveData}(h)?{type:$.deferred,deferredData:h,statusCode:null==(p=h.init)?void 0:p.status,headers:(null==(m=h.init)?void 0:m.headers)&&new Headers(h.init.headers)}:{type:$.data,data:h};var p,m}function Le(e,t,n,r){let i=e.createURL(Ke(t)).toString(),s={signal:n};if(r&&Je(r.formMethod)){let{formMethod:e,formEncType:t,formData:n}=r;s.method=e.toUpperCase(),s.body="application/x-www-form-urlencoded"===t?Ue(n):n}return new Request(i,s)}function Ue(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function Fe(e,t,n,r,i){let s,o={},a=null,l=!1,c={};return n.forEach(((n,u)=>{let h=t[u].route.id;if(A(!Qe(n),"Cannot handle redirect results in processLoaderData"),Ge(n)){let t=Ve(e,h),i=n.error;r&&(i=Object.values(r)[0],r=void 0),a=a||{},null==a[t.route.id]&&(a[t.route.id]=i),o[h]=void 0,l||(l=!0,s=pe(n.error)?n.error.status:500),n.headers&&(c[h]=n.headers)}else We(n)?(i.set(h,n.deferredData),o[h]=n.deferredData.data):o[h]=n.data,null==n.statusCode||200===n.statusCode||l||(s=n.statusCode),n.headers&&(c[h]=n.headers)})),r&&(a=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:a,statusCode:s||200,loaderHeaders:c}}function $e(e,t,n,r,i,s,o,a){let{loaderData:l,errors:c}=Fe(t,n,r,i,a);for(let t=0;t<s.length;t++){let{key:n,match:r,controller:i}=s[t];A(void 0!==o&&void 0!==o[t],"Did not find corresponding fetcher result");let a=o[t];if(!i||!i.signal.aborted)if(Ge(a)){let t=Ve(e.matches,null==r?void 0:r.route.id);c&&c[t.route.id]||(c=R({},c,{[t.route.id]:a.error})),e.fetchers.delete(n)}else if(Qe(a))A(!1,"Unhandled fetcher revalidation redirect");else if(We(a))A(!1,"Unhandled fetcher deferred data");else{let t={state:"idle",data:a.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(n,t)}}return{loaderData:l,errors:c}}function ze(e,t,n,r){let i=R({},t);for(let s of n){let n=s.route.id;if(t.hasOwnProperty(n)?void 0!==t[n]&&(i[n]=t[n]):void 0!==e[n]&&s.route.loader&&(i[n]=e[n]),r&&r.hasOwnProperty(n))break}return i}function Ve(e,t){return(t?e.slice(0,e.findIndex((e=>e.route.id===t))+1):[...e]).reverse().find((e=>!0===e.route.hasErrorBoundary))||e[0]}function Be(e){let t=e.find((e=>e.index||!e.path||"/"===e.path))||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function qe(e,t){let{pathname:n,routeId:r,method:i,type:s}=void 0===t?{}:t,o="Unknown Server Error",a="Unknown @remix-run/router error";return 400===e?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but did not provide a `loader` for route "'+r+'", so there is no way to handle the request.':"defer-action"===s&&(a="defer() is not supported in actions")):403===e?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):404===e?(o="Not Found",a='No route matches URL "'+n+'"'):405===e&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but did not provide an `action` for route "'+r+'", so there is no way to handle the request.':i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new fe(e||500,o,new Error(a),!0)}function He(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Qe(n))return n}}function Ke(e){return L(R({},"string"==typeof e?U(e):e,{hash:""}))}function We(e){return e.type===$.deferred}function Ge(e){return e.type===$.error}function Qe(e){return(e&&e.type)===$.redirect}function Ye(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"object"==typeof e.headers&&void 0!==e.body}function Xe(e){return ve.has(e.toLowerCase())}function Je(e){return ge.has(e.toLowerCase())}async function Ze(e,t,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=t[o];if(!l)continue;let c=e.find((e=>e.route.id===l.route.id)),u=null!=c&&!Ae(c,l)&&void 0!==(s&&s[l.route.id]);if(We(a)&&(i||u)){let e=r[o];A(e,"Expected an AbortSignal for revalidating fetcher deferred result"),await et(a,e,i).then((e=>{e&&(n[o]=e||n[o])}))}}}async function et(e,t,n){if(void 0===n&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:$.data,data:e.deferredData.unwrappedData}}catch(e){return{type:$.error,error:e}}return{type:$.data,data:e.deferredData.data}}}function tt(e){return new URLSearchParams(e).getAll("index").some((e=>""===e))}function nt(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function rt(e,t){let n="string"==typeof t?U(t).search:t.search;if(e[e.length-1].route.index&&tt(n||""))return e[e.length-1];let r=oe(e);return r[r.length-1]}
/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function it(){return it=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},it.apply(this,arguments)}const st=(N=s("fYo6y")).createContext(null),ot=N.createContext(null),at=N.createContext(null),lt=N.createContext(null),ct=N.createContext({outlet:null,matches:[],isDataRoute:!1}),ut=N.createContext(null);function ht(e,t){let{relative:n}=void 0===t?{}:t;!dt()&&A(!1);let{basename:r,navigator:i}=N.useContext(at),{hash:s,pathname:o,search:a}=vt(e,{relative:n}),l=o;return"/"!==r&&(l="/"===o?r:le([r,o])),i.createHref({pathname:l,search:a,hash:s})}function dt(){return null!=N.useContext(lt)}function ft(){return!dt()&&A(!1),N.useContext(lt).location}function pt(e){N.useContext(at).static||N.useLayoutEffect(e)}function mt(){let{isDataRoute:e}=N.useContext(ct);return e?function(){let{router:e}=Nt(It.UseNavigateStable),t=Pt(Tt.UseNavigateStable),n=N.useRef(!1);return pt((()=>{n.current=!0})),N.useCallback((function(r,i){void 0===i&&(i={}),n.current&&("number"==typeof r?e.navigate(r):e.navigate(r,it({fromRouteId:t},i)))}),[e,t])}():function(){!dt()&&A(!1);let e=N.useContext(st),{basename:t,navigator:n}=N.useContext(at),{matches:r}=N.useContext(ct),{pathname:i}=ft(),s=JSON.stringify(oe(r).map((e=>e.pathnameBase))),o=N.useRef(!1);return pt((()=>{o.current=!0})),N.useCallback((function(r,a){if(void 0===a&&(a={}),!o.current)return;if("number"==typeof r)return void n.go(r);let l=ae(r,JSON.parse(s),i,"path"===a.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:le([t,l.pathname])),(a.replace?n.replace:n.push)(l,a.state,a)}),[t,n,s,i,e])}()}const gt=N.createContext(null);function yt(){let{matches:e}=N.useContext(ct),t=e[e.length-1];return t?t.params:{}}function vt(e,t){let{relative:n}=void 0===t?{}:t,{matches:r}=N.useContext(ct),{pathname:i}=ft(),s=JSON.stringify(oe(r).map((e=>e.pathnameBase)));return N.useMemo((()=>ae(e,JSON.parse(s),i,"path"===n)),[e,s,i,n])}function bt(e,t,n){!dt()&&A(!1);let r,{navigator:i}=N.useContext(at),{matches:s}=N.useContext(ct),o=s[s.length-1],a=o?o.params:{},l=(o&&o.pathname,o?o.pathnameBase:"/"),c=(o&&o.route,ft());if(t){var u;let e="string"==typeof t?U(t):t;"/"!==l&&!(null==(u=e.pathname)?void 0:u.startsWith(l))&&A(!1),r=e}else r=c;let h=r.pathname||"/",d=q(e,{pathname:"/"===l?h:h.slice(l.length)||"/"}),f=Et(d&&d.map((e=>Object.assign({},e,{params:Object.assign({},a,e.params),pathname:le([l,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?l:le([l,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,n);return t&&f?N.createElement(lt.Provider,{value:{location:it({pathname:"/",search:"",hash:"",state:null,key:"default"},r),navigationType:T.Pop}},f):f}function wt(){let e=function(){var e;let t=N.useContext(ut),n=Rt(Tt.UseRouteError),r=Pt(Tt.UseRouteError);return t||(null==(e=n.errors)?void 0:e[r])}(),t=pe(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),n?N.createElement("pre",{style:i},n):null,null)}const xt=N.createElement(wt,null);class kt extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?N.createElement(ct.Provider,{value:this.props.routeContext},N.createElement(ut.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _t(e){let{routeContext:t,match:n,children:r}=e,i=N.useContext(st);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(ct.Provider,{value:t},r)}function Et(e,t,n){var r;if(void 0===t&&(t=[]),void 0===n&&(n=null),null==e){var i;if(null==(i=n)||!i.errors)return null;e=n.matches}let s=e,o=null==(r=n)?void 0:r.errors;if(null!=o){let e=s.findIndex((e=>e.route.id&&(null==o?void 0:o[e.route.id])));!(e>=0)&&A(!1),s=s.slice(0,Math.min(s.length,e+1))}return s.reduceRight(((e,r,i)=>{let a=r.route.id?null==o?void 0:o[r.route.id]:null,l=null;n&&(l=r.route.errorElement||xt);let c=t.concat(s.slice(0,i+1)),u=()=>{let t;return t=a?l:r.route.Component?N.createElement(r.route.Component,null):r.route.element?r.route.element:e,N.createElement(_t,{match:r,routeContext:{outlet:e,matches:c,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===i)?N.createElement(kt,{location:n.location,revalidation:n.revalidation,component:l,error:a,children:u(),routeContext:{outlet:null,matches:c,isDataRoute:!0}}):u()}),null)}var It,St,Tt,Ct;function Nt(e){let t=N.useContext(st);return!t&&A(!1),t}function Rt(e){let t=N.useContext(ot);return!t&&A(!1),t}function Pt(e){let t=function(e){let t=N.useContext(ct);return!t&&A(!1),t}(),n=t.matches[t.matches.length-1];return!n.route.id&&A(!1),n.route.id}(St=It||(It={})).UseBlocker="useBlocker",St.UseRevalidator="useRevalidator",St.UseNavigateStable="useNavigate",(Ct=Tt||(Tt={})).UseBlocker="useBlocker",Ct.UseLoaderData="useLoaderData",Ct.UseActionData="useActionData",Ct.UseRouteError="useRouteError",Ct.UseNavigation="useNavigation",Ct.UseRouteLoaderData="useRouteLoaderData",Ct.UseMatches="useMatches",Ct.UseRevalidator="useRevalidator",Ct.UseNavigateStable="useNavigate",Ct.UseRouteId="useRouteId";function jt(e){let{fallbackElement:t,router:n}=e,[r,i]=N.useState(n.state);N.useLayoutEffect((()=>n.subscribe(i)),[n,i]);let s=N.useMemo((()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:e=>n.navigate(e),push:(e,t,r)=>n.navigate(e,{state:t,preventScrollReset:null==r?void 0:r.preventScrollReset}),replace:(e,t,r)=>n.navigate(e,{replace:!0,state:t,preventScrollReset:null==r?void 0:r.preventScrollReset})})),[n]),o=n.basename||"/",a=N.useMemo((()=>({router:n,navigator:s,static:!1,basename:o})),[n,s,o]);return N.createElement(N.Fragment,null,N.createElement(st.Provider,{value:a},N.createElement(ot.Provider,{value:r},N.createElement(Ot,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:s},n.state.initialized?N.createElement(At,{routes:n.routes,state:r}):t))),null)}function At(e){let{routes:t,state:n}=e;return bt(t,void 0,n)}function Dt(e){return function(e){let t=N.useContext(ct).outlet;return t?N.createElement(gt.Provider,{value:e},t):t}(e.context)}function Ot(e){let{basename:t="/",children:n=null,location:r,navigationType:i=T.Pop,navigator:s,static:o=!1}=e;dt()&&A(!1);let a=t.replace(/^\/*/,"/"),l=N.useMemo((()=>({basename:a,navigator:s,static:o})),[a,s,o]);"string"==typeof r&&(r=U(r));let{pathname:c="/",search:u="",hash:h="",state:d=null,key:f="default"}=r,p=N.useMemo((()=>{let e=ie(c,a);return null==e?null:{location:{pathname:e,search:u,hash:h,state:d,key:f},navigationType:i}}),[a,c,u,h,d,f,i]);return null==p?null:N.createElement(at.Provider,{value:l},N.createElement(lt.Provider,{children:n,value:p}))}var Mt,Lt;(Lt=Mt||(Mt={}))[Lt.pending=0]="pending",Lt[Lt.success=1]="success",Lt[Lt.error=2]="error";new Promise((()=>{}));class Ut extends N.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:n}=this.props,r=null,i=Mt.pending;if(n instanceof Promise)if(this.state.error){Mt.error;let e=this.state.error;Promise.reject().catch((()=>{})),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_error",{get:()=>e})}else n._tracked?(n,void 0!==r._error?Mt.error:void 0!==r._data?Mt.success:Mt.pending):(Mt.pending,Object.defineProperty(n,"_tracked",{get:()=>!0}),n.then((e=>Object.defineProperty(n,"_data",{get:()=>e})),(e=>Object.defineProperty(n,"_error",{get:()=>e}))));else Mt.success,Promise.resolve(),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_data",{get:()=>n});if(i===Mt.error&&r._error instanceof de)throw $ce84e892ed7f5f2c$var$neverSettledPromise;if(i===Mt.error&&!t)throw r._error;if(i===Mt.error)return N.createElement($ce84e892ed7f5f2c$var$AwaitContext.Provider,{value:r,children:t});if(i===Mt.success)return N.createElement($ce84e892ed7f5f2c$var$AwaitContext.Provider,{value:r,children:e});throw r}}function Ft(e){let t={hasErrorBoundary:null!=e.ErrorBoundary||null!=e.errorElement};return e.Component&&Object.assign(t,{element:N.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:N.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}function $t(){return $t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$t.apply(this,arguments)}function zt(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function Vt(e){return void 0===e&&(e=""),new URLSearchParams("string"==typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce(((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map((e=>[n,e])):[[n,r]])}),[]))}const Bt=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function qt(){var e;let t=null==(e=window)?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=$t({},t,{errors:Ht(t.errors)})),t}function Ht(e){if(!e)return null;let t=Object.entries(e),n={};for(let[e,r]of t)if(r&&"RouteErrorResponse"===r.__type)n[e]=new fe(r.status,r.statusText,r.data,!0===r.internal);else if(r&&"Error"===r.__type){let t=new Error(r.message);t.stack="",n[e]=t}else n[e]=r;return n}const Kt="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,Wt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gt=N.forwardRef((function(e,t){let n,{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u}=e,h=zt(e,Bt),{basename:d}=N.useContext(at),f=!1;if("string"==typeof c&&Wt.test(c)&&(n=c,Kt))try{let e=new URL(window.location.href),t=c.startsWith("//")?new URL(e.protocol+c):new URL(c),n=ie(t.pathname,d);t.origin===e.origin&&null!=n?c=n+t.search+t.hash:f=!0}catch(e){}let p=ht(c,{relative:i}),m=function(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=void 0===t?{}:t,a=mt(),l=ft(),c=vt(e,{relative:o});return N.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:L(l)===L(c);a(e,{replace:n,state:i,preventScrollReset:s,relative:o})}}),[l,a,c,r,i,n,e,s,o])}(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:i});return N.createElement("a",$t({},h,{href:n||p,onClick:f||s?r:function(e){r&&r(e),e.defaultPrevented||m(e)},ref:t,target:l}))}));var Qt,Yt;function Xt(e){let t=N.useRef(Vt(e)),n=N.useRef(!1),r=ft(),i=N.useMemo((()=>function(e,t){let n=Vt(e);if(t)for(let e of t.keys())n.has(e)||t.getAll(e).forEach((t=>{n.append(e,t)}));return n}(r.search,n.current?null:t.current)),[r.search]),s=mt(),o=N.useCallback(((e,t)=>{const r=Vt("function"==typeof e?e(i):e);n.current=!0,s("?"+r,t)}),[s,i]);return[i,o]}!function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"}(Qt||(Qt={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Yt||(Yt={}));var Jt=function(){return Jt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Jt.apply(this,arguments)};function Zt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function en(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o}Object.create;function tn(e,t,n){if(n||2===arguments.length)for(var r,i=0,s=t.length;i<s;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;N=s("fYo6y");var nn={};nn=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var s=Object.keys(e),o=Object.keys(t);if(s.length!==o.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),l=0;l<s.length;l++){var c=s[l];if(!a(c))return!1;var u=e[c],h=t[c];if(!1===(i=n?n.call(r,u,h,c):void 0)||void 0===i&&u!==h)return!1}return!0};var rn="-ms-",sn="-moz-",on="-webkit-",an="comm",ln="rule",cn="decl",un="@import",hn="@keyframes",dn="@layer",fn=Math.abs,pn=String.fromCharCode,mn=Object.assign;function gn(e){return e.trim()}function yn(e,t){return(e=t.exec(e))?e[0]:e}function vn(e,t,n){return e.replace(t,n)}function bn(e,t){return e.indexOf(t)}function wn(e,t){return 0|e.charCodeAt(t)}function xn(e,t,n){return e.slice(t,n)}function kn(e){return e.length}function _n(e){return e.length}function En(e,t){return t.push(e),e}function In(e,t){return e.map(t).join("")}var Sn=1,Tn=1,Cn=0,Nn=0,Rn=0,Pn="";function jn(e,t,n,r,i,s,o){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Sn,column:Tn,length:o,return:""}}function An(e,t){return mn(jn("",null,null,"",null,null,0),e,{length:-e.length},t)}function Dn(){return Rn=Nn<Cn?wn(Pn,Nn++):0,Tn++,10===Rn&&(Tn=1,Sn++),Rn}function On(){return wn(Pn,Nn)}function Mn(){return Nn}function Ln(e,t){return xn(Pn,e,t)}function Un(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fn(e){return Sn=Tn=1,Cn=kn(Pn=e),Nn=0,[]}function $n(e){return Pn="",e}function zn(e){return gn(Ln(Nn-1,qn(91===e?e+2:40===e?e+1:e)))}function Vn(e){for(;(Rn=On())&&Rn<33;)Dn();return Un(e)>2||Un(Rn)>3?"":" "}function Bn(e,t){for(;--t&&Dn()&&!(Rn<48||Rn>102||Rn>57&&Rn<65||Rn>70&&Rn<97););return Ln(e,Mn()+(t<6&&32==On()&&32==Dn()))}function qn(e){for(;Dn();)switch(Rn){case e:return Nn;case 34:case 39:34!==e&&39!==e&&qn(Rn);break;case 40:41===e&&qn(e);break;case 92:Dn()}return Nn}function Hn(e,t){for(;Dn()&&e+Rn!==57&&(e+Rn!==84||47!==On()););return"/*"+Ln(t,Nn-1)+"*"+pn(47===e?e:Dn())}function Kn(e){for(;!Un(On());)Dn();return Ln(e,Nn)}function Wn(e){return $n(Gn("",null,null,null,[""],e=Fn(e),0,[0],e))}function Gn(e,t,n,r,i,s,o,a,l){for(var c=0,u=0,h=o,d=0,f=0,p=0,m=1,g=1,y=1,v=0,b="",w=i,x=s,k=r,_=b;g;)switch(p=v,v=Dn()){case 40:if(108!=p&&58==wn(_,h-1)){-1!=bn(_+=vn(zn(v),"&","&\f"),"&\f")&&(y=-1);break}case 34:case 39:case 91:_+=zn(v);break;case 9:case 10:case 13:case 32:_+=Vn(p);break;case 92:_+=Bn(Mn()-1,7);continue;case 47:switch(On()){case 42:case 47:En(Yn(Hn(Dn(),Mn()),t,n),l);break;default:_+="/"}break;case 123*m:a[c++]=kn(_)*y;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:-1==y&&(_=vn(_,/\f/g,"")),f>0&&kn(_)-h&&En(f>32?Xn(_+";",r,n,h-1):Xn(vn(_," ","")+";",r,n,h-2),l);break;case 59:_+=";";default:if(En(k=Qn(_,t,n,c,u,i,a,b,w=[],x=[],h),s),123===v)if(0===u)Gn(_,t,k,k,w,s,h,a,x);else switch(99===d&&110===wn(_,3)?100:d){case 100:case 108:case 109:case 115:Gn(e,k,k,r&&En(Qn(e,k,k,0,0,i,a,b,i,w=[],h),x),i,x,h,a,r?w:x);break;default:Gn(_,k,k,k,[""],x,0,a,x)}}c=u=f=0,m=y=1,b=_="",h=o;break;case 58:h=1+kn(_),f=p;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==(Rn=Nn>0?wn(Pn,--Nn):0,Tn--,10===Rn&&(Tn=1,Sn--),Rn))continue;switch(_+=pn(v),v*m){case 38:y=u>0?1:(_+="\f",-1);break;case 44:a[c++]=(kn(_)-1)*y,y=1;break;case 64:45===On()&&(_+=zn(Dn())),d=On(),u=h=kn(b=_+=Kn(Mn())),v++;break;case 45:45===p&&2==kn(_)&&(m=0)}}return s}function Qn(e,t,n,r,i,s,o,a,l,c,u){for(var h=i-1,d=0===i?s:[""],f=_n(d),p=0,m=0,g=0;p<r;++p)for(var y=0,v=xn(e,h+1,h=fn(m=o[p])),b=e;y<f;++y)(b=gn(m>0?d[y]+" "+v:vn(v,/&\f/g,d[y])))&&(l[g++]=b);return jn(e,t,n,0===i?ln:a,l,c,u)}function Yn(e,t,n){return jn(e,t,n,an,pn(Rn),xn(e,2,-2),0)}function Xn(e,t,n,r){return jn(e,t,n,cn,xn(e,0,r),xn(e,r+1,-1),r)}function Jn(e,t,n){switch(i=t,45^wn(r=e,0)?(((i<<2^wn(r,0))<<2^wn(r,1))<<2^wn(r,2))<<2^wn(r,3):0){case 5103:return on+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return on+e+e;case 4789:return sn+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return on+e+sn+e+rn+e+e;case 5936:switch(wn(e,t+11)){case 114:return on+e+rn+vn(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return on+e+rn+vn(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return on+e+rn+vn(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return on+e+rn+e+e;case 6165:return on+e+rn+"flex-"+e+e;case 5187:return on+e+vn(e,/(\w+).+(:[^]+)/,on+"box-$1$2"+rn+"flex-$1$2")+e;case 5443:return on+e+rn+"flex-item-"+vn(e,/flex-|-self/g,"")+(yn(e,/flex-|baseline/)?"":rn+"grid-row-"+vn(e,/flex-|-self/g,""))+e;case 4675:return on+e+rn+"flex-line-pack"+vn(e,/align-content|flex-|-self/g,"")+e;case 5548:return on+e+rn+vn(e,"shrink","negative")+e;case 5292:return on+e+rn+vn(e,"basis","preferred-size")+e;case 6060:return on+"box-"+vn(e,"-grow","")+on+e+rn+vn(e,"grow","positive")+e;case 4554:return on+vn(e,/([^-])(transform)/g,"$1"+on+"$2")+e;case 6187:return vn(vn(vn(e,/(zoom-|grab)/,on+"$1"),/(image-set)/,on+"$1"),e,"")+e;case 5495:case 3959:return vn(e,/(image-set\([^]*)/,on+"$1$`$1");case 4968:return vn(vn(e,/(.+:)(flex-)?(.*)/,on+"box-pack:$3"+rn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+on+e+e;case 4200:if(!yn(e,/flex-|baseline/))return rn+"grid-column-align"+xn(e,t)+e;break;case 2592:case 3360:return rn+vn(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,yn(e.props,/grid-\w+-end/)}))?~bn(e+(n=n[t].value),"span")?e:rn+vn(e,"-start","")+e+rn+"grid-row-span:"+(~bn(n,"span")?yn(n,/\d+/):+yn(n,/\d+/)-+yn(e,/\d+/))+";":rn+vn(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return yn(e.props,/grid-\w+-start/)}))?e:rn+vn(vn(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return vn(e,/(.+)-inline(.+)/,on+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kn(e)-1-t>6)switch(wn(e,t+1)){case 109:if(45!==wn(e,t+4))break;case 102:return vn(e,/(.+:)(.+)-([^]+)/,"$1"+on+"$2-$3$1"+sn+(108==wn(e,t+3)?"$3":"$2-$3"))+e;case 115:return~bn(e,"stretch")?Jn(vn(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return vn(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,i,s,o,a){return rn+n+":"+r+a+(i?rn+n+"-span:"+(s?o:+o-+r)+a:"")+e}));case 4949:if(121===wn(e,t+6))return vn(e,":",":"+on)+e;break;case 6444:switch(wn(e,45===wn(e,14)?18:11)){case 120:return vn(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+on+(45===wn(e,14)?"inline-":"")+"box$3$1"+on+"$2$3$1"+rn+"$2box$3")+e;case 100:return vn(e,":",":"+rn)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return vn(e,"scroll-","scroll-snap-")+e}var r,i;return e}function Zn(e,t){for(var n="",r=_n(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function er(e,t,n,r){switch(e.type){case dn:if(e.children.length)break;case un:case cn:return e.return=e.return||e.value;case an:return"";case hn:return e.return=e.value+"{"+Zn(e.children,r)+"}";case ln:e.value=e.props.join(",")}return kn(n=Zn(e.children,r))?e.return=e.value+"{"+n+"}":""}function tr(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case cn:return void(e.return=Jn(e.value,e.length,n));case hn:return Zn([An(e,{value:vn(e.value,"@","@"+on)})],r);case ln:if(e.length)return In(e.props,(function(t){switch(yn(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Zn([An(e,{props:[vn(t,/:(read-\w+)/,":"+sn+"$1")]})],r);case"::placeholder":return Zn([An(e,{props:[vn(t,/:(plac\w+)/,":"+on+"input-$1")]}),An(e,{props:[vn(t,/:(plac\w+)/,":"+sn+"$1")]}),An(e,{props:[vn(t,/:(plac\w+)/,rn+"input-$1")]})],r)}return""}))}}var nr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},rr="data-styled",ir="undefined"!=typeof window&&"HTMLElement"in window,sr=Boolean("boolean"==typeof SC_DISABLE_SPEEDY&&SC_DISABLE_SPEEDY),or={},ar=(new Set,Object.freeze([])),lr=Object.freeze({});function cr(e,t,n){return void 0===n&&(n=lr),e.theme!==n.theme&&e.theme||t||n.theme}var ur=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,dr=/(^-|-$)/g;function fr(e){return e.replace(hr,"-").replace(dr,"")}var pr=/(a)(d)/gi,mr=function(e){return String.fromCharCode(e+(e>25?39:97))};function gr(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=mr(t%52)+n;return(mr(t%52)+n).replace(pr,"$1-$2")}var yr,vr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},br=function(e){return vr(5381,e)};function wr(e){return gr(br(e)>>>0)}function xr(e){return e.displayName||e.name||"Component"}function kr(e){return"string"==typeof e&&!0}var _r="function"==typeof Symbol&&Symbol.for,Er=_r?Symbol.for("react.memo"):60115,Ir=_r?Symbol.for("react.forward_ref"):60112,Sr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Tr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Cr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Nr=((yr={})[Ir]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yr[Er]=Cr,yr);function Rr(e){var t;return("type"in(t=e)&&t.type.$$typeof)===Er?Cr:"$$typeof"in e?Nr[e.$$typeof]:Sr}var Pr=Object.defineProperty,jr=Object.getOwnPropertyNames,Ar=Object.getOwnPropertySymbols,Dr=Object.getOwnPropertyDescriptor,Or=Object.getPrototypeOf,Mr=Object.prototype;function Lr(e,t,n){if("string"!=typeof t){if(Mr){var r=Or(t);r&&r!==Mr&&Lr(e,r,n)}var i=jr(t);Ar&&(i=i.concat(Ar(t)));for(var s=Rr(e),o=Rr(t),a=0;a<i.length;++a){var l=i[a];if(!(l in Tr||n&&n[l]||o&&l in o||s&&l in s)){var c=Dr(t,l);try{Pr(e,l,c)}catch(e){}}}}return e}function Ur(e){return"function"==typeof e}function Fr(e){return"object"==typeof e&&"styledComponentId"in e}function $r(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function zr(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Vr(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Br(e,t,n){if(void 0===n&&(n=!1),!n&&!Vr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Br(e[r],t[r]);else if(Vr(t))for(var r in t)e[r]=Br(e[r],t[r]);return e}function qr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Hr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw qr(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var s=r;s<i;s++)this.groupSizes[s]=0}for(var o=this.indexOfGroup(e+1),a=(s=0,t.length);s<a;s++)this.tag.insertRule(o,t[s])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,s=r;s<i;s++)t+="".concat(this.tag.getRule(s)).concat("/*!sc*/\n");return t},e}(),Kr=new Map,Wr=new Map,Gr=1,Qr=function(e){if(Kr.has(e))return Kr.get(e);for(;Wr.has(Gr);)Gr++;var t=Gr++;return Kr.set(e,t),Wr.set(t,e),t},Yr=function(e,t){Kr.set(e,t),Wr.set(t,e)},Xr="style[".concat(rr,"][").concat("data-styled-version",'="').concat("6.0.0-rc.3",'"]'),Jr=new RegExp("^".concat(rr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Zr=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},ei=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split("/*!sc*/\n"),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(Jr);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(Yr(u,c),Zr(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};function ti(){return"undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null}var ni=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(rr))return r}}(n),s=void 0!==i?i.nextSibling:null;r.setAttribute(rr,"active"),r.setAttribute("data-styled-version","6.0.0-rc.3");var o=ti();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},ri=function(){function e(e){this.element=ni(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw qr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),ii=function(){function e(e){this.element=ni(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),si=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),oi=ir,ai={isServer:!ir,useCSSOMInjection:!sr},li=function(){function e(e,t,n){void 0===e&&(e=lr),void 0===t&&(t={}),this.options=Jt(Jt({},ai),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&ir&&oi&&(oi=!1,function(e){for(var t=document.querySelectorAll(Xr),n=0,r=t.length;n<r;n++){var i=t[n];i&&"active"!==i.getAttribute(rr)&&(ei(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}return e.registerId=function(e){return Qr(e)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Jt(Jt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){var e;return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new si(n):t?new ri(n):new ii(n)}(this.options),new Hr(e)))},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Qr(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Qr(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Qr(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e.prototype.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return Wr.get(e)}(n);if(void 0===i)return"continue";var s=e.names.get(i),o=t.getGroup(n);if(void 0===s||0===o.length)return"continue";var a="".concat(rr,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==s&&s.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(o).concat(a,'{content:"').concat(l,'"}').concat("/*!sc*/\n")},s=0;s<n;s++)i(s);return r}(this)},e}(),ci=/&/g,ui=/^\s*\/\/.*$/gm;function hi(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=hi(e.children,t)),e}))}function di(e){var t,n,r,i=void 0===e?lr:e,s=i.options,o=void 0===s?lr:s,a=i.plugins,l=void 0===a?ar:a,c=function(e,r,i){return i===n||i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push((function(e){e.type===ln&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(ci,n).replace(r,c))})),o.prefix&&u.push(tr),u.push(er);var h=function(e,i,s,a){void 0===i&&(i=""),void 0===s&&(s=""),void 0===a&&(a="&"),t=a,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(ui,""),c=Wn(s||i?"".concat(s," ").concat(i," { ").concat(l," }"):l);o.namespace&&(c=hi(c,o.namespace));var h=[];return Zn(c,function(e){var t=_n(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}(u.concat(function(e){return function(t){t.root||(t=t.return)&&e(t)}}((function(e){return h.push(e)}))))),h};return h.hash=l.length?l.reduce((function(e,t){return t.name||qr(15),vr(e,t.name)}),5381).toString():"",h}var fi=new li,pi=di(),mi=t(N).createContext({shouldForwardProp:void 0,styleSheet:fi,stylis:pi}),gi=(mi.Consumer,t(N).createContext(void 0));function yi(){return(0,N.useContext)(mi)}function vi(e){var n=(0,N.useState)(e.stylisPlugins),r=n[0],i=n[1],s=yi().styleSheet,o=(0,N.useMemo)((function(){var t=s;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,s]),a=(0,N.useMemo)((function(){return di({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);return(0,N.useEffect)((function(){t(nn)(r,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]),t(N).createElement(mi.Provider,{value:{shouldForwardProp:e.shouldForwardProp,styleSheet:o,stylis:a}},t(N).createElement(gi.Provider,{value:a},e.children))}var bi=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pi);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){throw qr(12,String(n.name))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=pi),this.name+e.hash},e}(),wi=function(e){return e>="A"&&e<="Z"};function xi(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;wi(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var ki=function(e){return null==e||!1===e||""===e},_i=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!ki(s)&&(Array.isArray(s)&&s.isCss||Ur(s)?r.push("".concat(xi(i),":"),s,";"):Vr(s)?r.push.apply(r,tn(tn(["".concat(i," {")],_i(s),!1),["}"],!1)):r.push("".concat(xi(i),": ").concat((t=i,null==(n=s)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in nr||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ei(e,t,n,r){return ki(e)?[]:Fr(e)?[".".concat(e.styledComponentId)]:Ur(e)?!Ur(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:Ei(e(t),t,n,r):e instanceof bi?n?(e.inject(n,r),[e.getName(r)]):[e]:Vr(e)?_i(e):Array.isArray(e)?e.flatMap((function(e){return Ei(e,t,n,r)})):[e.toString()];var i}function Ii(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ur(n)&&!Fr(n))return!1}return!0}var Si=br("6.0.0-rc.3"),Ti=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Ii(e),this.componentId=t,this.baseHash=vr(Si,t),this.baseStyle=n,li.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=$r(r,this.staticRulesId);else{var i=zr(Ei(this.rules,e,t,n)),s=gr(vr(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,s)){var o=n(i,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,o)}r=$r(r,s),this.staticRulesId=s}else{for(var a=vr(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var h=zr(Ei(u,e,t,n));a=vr(a,h),l+=h}}if(l){var d=gr(a>>>0);t.hasNameForId(this.componentId,d)||t.insertRules(this.componentId,d,n(l,".".concat(d),void 0,this.componentId)),r=$r(r,d)}}return r},e}(),Ci=t(N).createContext(void 0);Ci.Consumer;function Ni(){return(0,N.useContext)(Ci)}function Ri(e){var n=Ni(),r=(0,N.useMemo)((function(){return function(e,t){if(!e)throw qr(14);if(Ur(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw qr(8);return t?Jt(Jt({},t),e):e}(e.theme,n)}),[e.theme,n]);return e.children?t(N).createElement(Ci.Provider,{value:r},e.children):null}var Pi={};function ji(e,n,r){var i,s=Fr(e),o=e,a=!kr(e),l=n.componentId,c=void 0===l?function(e,t){var n="string"!=typeof e?"sc":fr(e);Pi[n]=(Pi[n]||0)+1;var r="".concat(n,"-").concat(wr("6.0.0-rc.3"+n+Pi[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):l,u=n.displayName,h=void 0===u?function(e){return kr(e)?"styled.".concat(e):"Styled(".concat(xr(e),")")}(e):u,d=null!==(i=n.attrs)&&void 0!==i?i:[],f=n.displayName&&n.componentId?"".concat(fr(n.displayName),"-").concat(n.componentId):n.componentId||c,p=s&&o.attrs?o.attrs.concat(d).filter(Boolean):d,m=n.shouldForwardProp;if(s&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var y=n.shouldForwardProp;m=function(e,t){return g(e,t)&&y(e,t)}}else m=g}var v=new Ti(r,f,s?o.componentStyle:void 0),b=v.isStatic&&0===d.length;function w(e,t){return function(e,t,n,r){var i=e.attrs,s=e.componentStyle,o=e.defaultProps,a=e.foldedComponentIds,l=e.styledComponentId,c=e.target,u=Ni(),h=yi(),d=e.shouldForwardProp||h.shouldForwardProp,f=function(e,t,n){for(var r,i=Jt(Jt({},t),{className:void 0,theme:n}),s=0;s<e.length;s+=1){var o=Ur(r=e[s])?r(i):r;for(var a in o)i[a]="className"===a?$r(i[a],o[a]):"style"===a?Jt(Jt({},i[a]),o[a]):o[a]}return t.className&&(i.className=$r(i.className,t.className)),i}(i,t,cr(t,u,o)||lr),p=f.as||c,m={};for(var g in f)void 0===f[g]||"$"===g[0]||"as"===g||"theme"===g||("forwardedAs"===g?m.as=f.forwardedAs:d&&!d(g,p)||(m[g]=f[g]));var y=function(e,t,n){var r=yi();return e.generateAndInjectStyles(t?lr:n,r.styleSheet,r.stylis)}(s,r,f),v=$r(a,l);return y&&(v+=" "+y),f.className&&(v+=" "+f.className),m[kr(p)&&!ur.has(p)?"class":"className"]=v,m.ref=n,(0,N.createElement)(p,m)}(x,e,t,b)}w.displayName=h;var x=t(N).forwardRef(w);return x.attrs=p,x.componentStyle=v,x.displayName=h,x.shouldForwardProp=m,x.foldedComponentIds=s?$r(o.foldedComponentIds,o.styledComponentId):"",x.styledComponentId=f,x.target=s?o.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=s?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)Br(e,i[r],!0);return e}({},o.defaultProps,e):e}}),Object.defineProperty(x,"toString",{value:function(){return".".concat(x.styledComponentId)}}),a&&Lr(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Ai(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Di=function(e){return Object.assign(e,{isCss:!0})};function Oi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ur(e)||Vr(e))return Di(Ei(Ai(ar,tn([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Ei(r):Di(Ei(Ai(r,t)))}function Mi(e,t,n){if(void 0===n&&(n=lr),!t)throw qr(1,t);var r=function(r){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,Oi.apply(void 0,tn([r],i,!1)))};return r.attrs=function(r){return Mi(e,t,Jt(Jt({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Mi(e,t,Jt(Jt({},n),r))},r}function Li(e){return Mi(ji,e)}var Ui=Li;ur.forEach((function(e){Ui[e]=Li(e)}));var Fi=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ii(e),li.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(zr(Ei(this.rules,t,n,r)),""),s=this.componentId+e;n.insertRules(s,s,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&li.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function $i(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=Oi.apply(void 0,tn([e],n,!1)),s="sc-global-".concat(wr(JSON.stringify(i))),o=new Fi(i,s),a=function(e){var n=yi(),r=Ni(),i=t(N).useRef(n.styleSheet.allocateGSInstance(s)).current;return n.styleSheet.server&&l(i,e,n.styleSheet,r,n.stylis),(t(N).useInsertionEffect||t(N).useLayoutEffect)((function(){if(!n.styleSheet.server)return l(i,e,n.styleSheet,r,n.stylis),function(){return o.removeStyles(i,n.styleSheet)}}),[i,e,n.styleSheet,r,n.stylis]),null};function l(e,t,n,r,i){if(o.isStatic)o.renderStyles(e,or,n,i);else{var s=Jt(Jt({},t),{theme:cr(t,r,a.defaultProps)});o.renderStyles(e,s,n,i)}}return t(N).memo(a)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=ti(),r=zr([n&&'nonce="'.concat(n,'"'),"".concat(rr,'="true"'),"".concat("data-styled-version",'="').concat("6.0.0-rc.3",'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw qr(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw qr(2);var r=((n={})[rr]="",n["data-styled-version"]="6.0.0-rc.3",n.dangerouslySetInnerHTML={__html:e.instance.toString()},n),i=ti();return i&&(r.nonce=i),[t(N).createElement("style",Jt({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new li({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw qr(2);return t(N).createElement(vi,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw qr(3)}})(),"__sc-".concat(rr,"__");var zi={};e(zi,"Reset",(()=>Ki),(e=>Ki=e));var Vi,Bi,qi=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Hi=Oi(Vi||(Vi=qi(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"]))),Ki=$i(Bi||(Bi=qi(["",""],["",""])),Hi);N=s("fYo6y");N=s("fYo6y");N=s("fYo6y");N=s("fYo6y");const Wi="(prefers-color-scheme: dark)";var Gi=function(e){var t;const n=ts(Wi),[r,i]=es("usehooks-ts-dark-mode",null!==(t=null!=e?e:n)&&void 0!==t&&t);return ns((()=>{i(n)}),[n]),{isDarkMode:r,toggle:()=>i((e=>!e)),enable:()=>i(!0),disable:()=>i(!1)}};N=s("fYo6y");N=s("fYo6y");var Qi=function(e){(0,N.useEffect)(e,[])};N=s("fYo6y");N=s("fYo6y");function Yi(e){const t=(0,N.useRef)((()=>{throw new Error("Cannot call an event handler while rendering.")}));return Zi((()=>{t.current=e}),[e]),(0,N.useCallback)(((...e)=>t.current(...e)),[t])}N=s("fYo6y");var Xi=function(e,t,n,r){const i=(0,N.useRef)(t);Zi((()=>{i.current=t}),[t]),(0,N.useEffect)((()=>{var t;const s=null!==(t=null==n?void 0:n.current)&&void 0!==t?t:window;if(!s||!s.addEventListener)return;const o=e=>i.current(e);return s.addEventListener(e,o,r),()=>{s.removeEventListener(e,o,r)}}),[e,n,r])};N=s("fYo6y");N=s("fYo6y");N=s("fYo6y");N=s("fYo6y");N=s("fYo6y");N=s("fYo6y");N=s("fYo6y");var Ji=function(){const e=(0,N.useRef)(!0);return e.current?(e.current=!1,!0):e.current};N=s("fYo6y");N=s("fYo6y");var Zi="undefined"!=typeof window?N.useLayoutEffect:N.useEffect;N=s("fYo6y");var es=function(e,t){const n=(0,N.useCallback)((()=>{if("undefined"==typeof window)return t;try{const n=window.localStorage.getItem(e);return n?function(e){try{return"undefined"===e?void 0:JSON.parse(null!=e?e:"")}catch(t){return void console.log("parsing error on",{value:e})}}(n):t}catch(n){return console.warn(`Error reading localStorage key “${e}”:`,n),t}}),[t,e]),[r,i]=(0,N.useState)(n),s=Yi((t=>{"undefined"==typeof window&&console.warn(`Tried setting localStorage key “${e}” even though environment is not a client`);try{const n=t instanceof Function?t(r):t;window.localStorage.setItem(e,JSON.stringify(n)),i(n),window.dispatchEvent(new Event("local-storage"))}catch(t){console.warn(`Error setting localStorage key “${e}”:`,t)}}));(0,N.useEffect)((()=>{i(n())}),[]);const o=(0,N.useCallback)((t=>{(null==t?void 0:t.key)&&t.key!==e||i(n())}),[e,n]);return Xi("storage",o),Xi("local-storage",o),[r,s]};N=s("fYo6y");N=s("fYo6y");N=s("fYo6y");var ts=function(e){const t=e=>"undefined"!=typeof window&&window.matchMedia(e).matches,[n,r]=(0,N.useState)(t(e));function i(){r(t(e))}return(0,N.useEffect)((()=>{const t=window.matchMedia(e);return i(),t.addListener?t.addListener(i):t.addEventListener("change",i),()=>{t.removeListener?t.removeListener(i):t.removeEventListener("change",i)}}),[e]),n};N=s("fYo6y");N=s("fYo6y");N=s("fYo6y");N=s("fYo6y");N=s("fYo6y");N=s("fYo6y");N=s("fYo6y");N=s("fYo6y");N=s("fYo6y");var ns=function(e,t){const n=Ji();(0,N.useEffect)((()=>{if(!n)return e()}),t)};N=s("fYo6y");var rs,is;N=s("fYo6y");(is=rs||(rs={}))[is.Transient=0]="Transient",is[is.Singleton=1]="Singleton",is[is.ResolutionScoped=2]="ResolutionScoped",is[is.ContainerScoped=3]="ContainerScoped";var ss=rs,os=function(e,t){return os=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},os(e,t)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function as(e,t){function n(){this.constructor=e}os(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function ls(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((r=r.apply(e,t||[])).next())}))}function cs(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function us(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function hs(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function ds(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(hs(arguments[t]));return e}var fs="injectionTokens";function ps(e){var t=Reflect.getMetadata("design:paramtypes",e)||[],n=Reflect.getOwnMetadata(fs,e)||{};return Object.keys(n).forEach((function(e){t[+e]=n[e]})),t}function ms(e){return!!e.useClass}function gs(e){return!!e.useFactory}var ys=function(){function e(e){this.wrap=e,this.reflectMethods=["get","getPrototypeOf","setPrototypeOf","getOwnPropertyDescriptor","defineProperty","has","set","deleteProperty","apply","construct","ownKeys"]}return e.prototype.createProxy=function(e){var t,n=this,r=!1;return new Proxy({},this.createHandler((function(){return r||(t=e(n.wrap()),r=!0),t})))},e.prototype.createHandler=function(e){var t={};return this.reflectMethods.forEach((function(n){t[n]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return t[0]=e(),Reflect[n].apply(void 0,ds(t))}})),t},e}();function vs(e){return"string"==typeof e||"symbol"==typeof e}function bs(e){return"object"==typeof e&&"token"in e&&"multiple"in e}function ws(e){return"object"==typeof e&&"token"in e&&"transform"in e}function xs(e){return"function"==typeof e||e instanceof ys}function ks(e){return!!e.useToken}function _s(e){return null!=e.useValue}function Es(e){return ms(e)||_s(e)||ks(e)||gs(e)}var Is=function(){function e(){this._registryMap=new Map}return e.prototype.entries=function(){return this._registryMap.entries()},e.prototype.getAll=function(e){return this.ensure(e),this._registryMap.get(e)},e.prototype.get=function(e){this.ensure(e);var t=this._registryMap.get(e);return t[t.length-1]||null},e.prototype.set=function(e,t){this.ensure(e),this._registryMap.get(e).push(t)},e.prototype.setAll=function(e,t){this._registryMap.set(e,t)},e.prototype.has=function(e){return this.ensure(e),this._registryMap.get(e).length>0},e.prototype.clear=function(){this._registryMap.clear()},e.prototype.ensure=function(e){this._registryMap.has(e)||this._registryMap.set(e,[])},e}(),Ss=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return as(t,e),t}(Is),Ts=function(){this.scopedResolutions=new Map};function Cs(e,t,n){var r,i,s=hs(e.toString().match(/constructor\(([\w, ]+)\)/)||[],2)[1],o=function(e,t){return null===e?"at position #"+t:'"'+e.split(",")[t].trim()+'" at position #'+t}(void 0===s?null:s,t);return r="Cannot inject the dependency "+o+' of "'+e.name+'" constructor. Reason:',void 0===i&&(i="    "),ds([r],n.message.split("\n").map((function(e){return i+e}))).join("\n")}var Ns=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return as(t,e),t}(Is),Rs=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return as(t,e),t}(Is),Ps=function(){this.preResolution=new Ns,this.postResolution=new Rs},js=new Map,As=function(){function e(e){this.parent=e,this._registry=new Ss,this.interceptors=new Ps,this.disposed=!1,this.disposables=new Set}return e.prototype.register=function(e,t,n){var r;if(void 0===n&&(n={lifecycle:ss.Transient}),this.ensureNotDisposed(),ks(r=Es(t)?t:{useClass:t}))for(var i=[e],s=r;null!=s;){var o=s.useToken;if(i.includes(o))throw new Error("Token registration cycle detected! "+ds(i,[o]).join(" -> "));i.push(o);var a=this._registry.get(o);s=a&&ks(a.provider)?a.provider:null}if((n.lifecycle===ss.Singleton||n.lifecycle==ss.ContainerScoped||n.lifecycle==ss.ResolutionScoped)&&(_s(r)||gs(r)))throw new Error('Cannot use lifecycle "'+ss[n.lifecycle]+'" with ValueProviders or FactoryProviders');return this._registry.set(e,{provider:r,options:n}),this},e.prototype.registerType=function(e,t){return this.ensureNotDisposed(),vs(t)?this.register(e,{useToken:t}):this.register(e,{useClass:t})},e.prototype.registerInstance=function(e,t){return this.ensureNotDisposed(),this.register(e,{useValue:t})},e.prototype.registerSingleton=function(e,t){if(this.ensureNotDisposed(),vs(e)){if(vs(t))return this.register(e,{useToken:t},{lifecycle:ss.Singleton});if(t)return this.register(e,{useClass:t},{lifecycle:ss.Singleton});throw new Error('Cannot register a type name as a singleton without a "to" token')}var n=e;return t&&!vs(t)&&(n=t),this.register(e,{useClass:n},{lifecycle:ss.Singleton})},e.prototype.resolve=function(e,t){void 0===t&&(t=new Ts),this.ensureNotDisposed();var n=this.getRegistration(e);if(!n&&vs(e))throw new Error('Attempted to resolve unregistered dependency token: "'+e.toString()+'"');if(this.executePreResolutionInterceptor(e,"Single"),n){var r=this.resolveRegistration(n,t);return this.executePostResolutionInterceptor(e,r,"Single"),r}if(xs(e)){r=this.construct(e,t);return this.executePostResolutionInterceptor(e,r,"Single"),r}throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.")},e.prototype.executePreResolutionInterceptor=function(e,t){var n,r;if(this.interceptors.preResolution.has(e)){var i=[];try{for(var s=us(this.interceptors.preResolution.getAll(e)),o=s.next();!o.done;o=s.next()){var a=o.value;"Once"!=a.options.frequency&&i.push(a),a.callback(e,t)}}catch(e){n={error:e}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}this.interceptors.preResolution.setAll(e,i)}},e.prototype.executePostResolutionInterceptor=function(e,t,n){var r,i;if(this.interceptors.postResolution.has(e)){var s=[];try{for(var o=us(this.interceptors.postResolution.getAll(e)),a=o.next();!a.done;a=o.next()){var l=a.value;"Once"!=l.options.frequency&&s.push(l),l.callback(e,t,n)}}catch(e){r={error:e}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}this.interceptors.postResolution.setAll(e,s)}},e.prototype.resolveRegistration=function(e,t){if(this.ensureNotDisposed(),e.options.lifecycle===ss.ResolutionScoped&&t.scopedResolutions.has(e))return t.scopedResolutions.get(e);var n,r=e.options.lifecycle===ss.Singleton,i=e.options.lifecycle===ss.ContainerScoped,s=r||i;return n=_s(e.provider)?e.provider.useValue:ks(e.provider)?s?e.instance||(e.instance=this.resolve(e.provider.useToken,t)):this.resolve(e.provider.useToken,t):ms(e.provider)?s?e.instance||(e.instance=this.construct(e.provider.useClass,t)):this.construct(e.provider.useClass,t):gs(e.provider)?e.provider.useFactory(this):this.construct(e.provider,t),e.options.lifecycle===ss.ResolutionScoped&&t.scopedResolutions.set(e,n),n},e.prototype.resolveAll=function(e,t){var n=this;void 0===t&&(t=new Ts),this.ensureNotDisposed();var r=this.getAllRegistrations(e);if(!r&&vs(e))throw new Error('Attempted to resolve unregistered dependency token: "'+e.toString()+'"');if(this.executePreResolutionInterceptor(e,"All"),r){var i=r.map((function(e){return n.resolveRegistration(e,t)}));return this.executePostResolutionInterceptor(e,i,"All"),i}var s=[this.construct(e,t)];return this.executePostResolutionInterceptor(e,s,"All"),s},e.prototype.isRegistered=function(e,t){return void 0===t&&(t=!1),this.ensureNotDisposed(),this._registry.has(e)||t&&(this.parent||!1)&&this.parent.isRegistered(e,!0)},e.prototype.reset=function(){this.ensureNotDisposed(),this._registry.clear(),this.interceptors.preResolution.clear(),this.interceptors.postResolution.clear()},e.prototype.clearInstances=function(){var e,t;this.ensureNotDisposed();try{for(var n=us(this._registry.entries()),r=n.next();!r.done;r=n.next()){var i=hs(r.value,2),s=i[0],o=i[1];this._registry.setAll(s,o.filter((function(e){return!_s(e.provider)})).map((function(e){return e.instance=void 0,e})))}}catch(t){e={error:t}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}},e.prototype.createChildContainer=function(){var t,n;this.ensureNotDisposed();var r=new e(this);try{for(var i=us(this._registry.entries()),s=i.next();!s.done;s=i.next()){var o=hs(s.value,2),a=o[0],l=o[1];l.some((function(e){return e.options.lifecycle===ss.ContainerScoped}))&&r._registry.setAll(a,l.map((function(e){return e.options.lifecycle===ss.ContainerScoped?{provider:e.provider,options:e.options}:e})))}}catch(e){t={error:e}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r},e.prototype.beforeResolution=function(e,t,n){void 0===n&&(n={frequency:"Always"}),this.interceptors.preResolution.set(e,{callback:t,options:n})},e.prototype.afterResolution=function(e,t,n){void 0===n&&(n={frequency:"Always"}),this.interceptors.postResolution.set(e,{callback:t,options:n})},e.prototype.dispose=function(){return ls(this,void 0,void 0,(function(){var e;return cs(this,(function(t){switch(t.label){case 0:return this.disposed=!0,e=[],this.disposables.forEach((function(t){var n=t.dispose();n&&e.push(n)})),[4,Promise.all(e)];case 1:return t.sent(),[2]}}))}))},e.prototype.getRegistration=function(e){return this.isRegistered(e)?this._registry.get(e):this.parent?this.parent.getRegistration(e):null},e.prototype.getAllRegistrations=function(e){return this.isRegistered(e)?this._registry.getAll(e):this.parent?this.parent.getAllRegistrations(e):null},e.prototype.construct=function(e,t){var n=this;if(e instanceof ys)return e.createProxy((function(e){return n.resolve(e,t)}));var r,i=function(){var r=js.get(e);if(!r||0===r.length){if(0===e.length)return new e;throw new Error('TypeInfo not known for "'+e.name+'"')}var i=r.map(n.resolveParams(t,e));return new(e.bind.apply(e,ds([void 0],i)))}();return"function"!=typeof(r=i).dispose||r.dispose.length>0||this.disposables.add(i),i},e.prototype.resolveParams=function(e,t){var n=this;return function(r,i){var s,o,a;try{return bs(r)?ws(r)?r.multiple?(s=n.resolve(r.transform)).transform.apply(s,ds([n.resolveAll(r.token)],r.transformArgs)):(o=n.resolve(r.transform)).transform.apply(o,ds([n.resolve(r.token,e)],r.transformArgs)):r.multiple?n.resolveAll(r.token):n.resolve(r.token,e):ws(r)?(a=n.resolve(r.transform,e)).transform.apply(a,ds([n.resolve(r.token,e)],r.transformArgs)):n.resolve(r,e)}catch(e){throw new Error(Cs(t,i,e))}}},e.prototype.ensureNotDisposed=function(){if(this.disposed)throw new Error("This container has been disposed, you cannot interact with a disposed container")},e}(),Ds=new As;var Os=function(){return function(e){js.set(e,ps(e))}};var Ms=function(){return function(e){Os()(e),Ds.registerSingleton(e)}};if("undefined"==typeof Reflect||!Reflect.getMetadata)throw new Error("tsyringe requires a reflect polyfill. Please add 'import \"reflect-metadata\"' to the top of your entry point.");const Ls="##store",Us="##cache";function Fs(e,t){const n=Reflect.ownKeys(e);return n.length===Reflect.ownKeys(t).length&&n.every((n=>Reflect.get(e,n)===Reflect.get(t,n)))}function $s(e){const t=Reflect.getPrototypeOf(e);if(!t)throw new Error("Cannot find prototype");return t}function zs(e){const t=e=>Reflect.ownKeys(e).filter((e=>!String(e).startsWith("_"))).filter((t=>{const n=Reflect.getOwnPropertyDescriptor(e,t);return n?.get}));return[...t($s(e)),...t($s($s(e)))]}function Vs(e,t){const n=t.filter((e=>!String(e).startsWith("#"))).reduce(((t,n)=>({...t,[String(n)]:Reflect.get(e,n)})),{});return Reflect.setPrototypeOf(n,{}),n}function Bs(e,{obj:t,keys:n}){const r=$s(t),i=$s(e);Reflect.defineProperty(i,Us,{value:{}}),n.forEach((e=>{const t=function(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);if(!n)throw new Error(`Property Not Found: ${String(t)}`);return n}(r,e);Reflect.defineProperty(i,e,{get(){const n=this[Us];return e in n||(n[e]=t.get?.apply(this)),n[e]}})}))}class qs{propertyKeys;getterKeys;listeners=new Set;snapshot={};constructor(e){var t;this.propertyKeys=(t=e,Reflect.ownKeys(t)),this.getterKeys=zs(e)}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}getSnapshot(){return this.snapshot}update(e){const t=Vs(e,this.propertyKeys);Fs(t,this.snapshot)||(this.getterKeys.length&&Bs(t,{obj:$s(e),keys:this.getterKeys}),this.snapshot=t,this.listeners.forEach((e=>e())))}}function Hs(){return function(e){return class extends e{constructor(...e){super(...e);const t=new qs(this);Reflect.set(this,Ls,t),t.update(this)}}}}function Ks(){return(e,t,n)=>{const r=n.value;n.value=function(...e){const t=r.apply(this,e);return Reflect.get(this,Ls).update(this),t}}}N=s("fYo6y");function Ws(e){const t=Reflect.get(e,Ls);if(!t)throw new Error("Cannot find store glue");return[(0,N.useSyncExternalStore)(t.subscribe.bind(t),t.getSnapshot.bind(t)),e]}const Gs=window.innerWidth,Qs=[],Ys=[],Xs=[],Js=[],Zs=["react","vue","angler","javascript","typescript","svelte","next"],eo=["diango","docker","express","java","mongodb","mysql","nest","nodejs","postgresql","spring"],to=["github","aws"],no=["react","vue","angler","javascript","typescript","svelte","next","diango","docker","express","java","mongodb","mysql","nest","nodejs","postgresql","spring","github","aws"];let ro=class{width=Gs;setWidth(e){this.width=e}};function io(){const e=Ds.resolve(ro);return{setResize:()=>{window.addEventListener("resize",(()=>{e.setWidth(window.innerWidth)}))},delResize:()=>{window.removeEventListener("resize",(()=>{e.setWidth(window.innerWidth)}))}}}en([Ks()],ro.prototype,"setWidth",null),ro=en([Ms(),Hs()],ro);const so=Ui.button`
cursor: pointer;
padding: 1rem;
font-weight: bold;
background-color: ${e=>e.theme.colors.backgroundMain};
border: 1px solid ${e=>e.theme.colors.textMain};
color: ${e=>e.theme.colors.textMain};
border-radius: .4rem;
white-space: nowrap;
  &:hover{
    background-color: ${e=>e.theme.colors.textMain};
    color: ${e=>e.theme.colors.backgroundMain};
  }
`;function oo(){const{toggle:e}=Gi();return(0,o.jsx)(so,{className:"darkMode",type:"button",onClick:async()=>{e()},children:"다크모드"})}const ao=Ui.div`
padding-block: 3rem;
width: 100%;
background-color: ${e=>e.theme.colors.backgroundMain};
color : ${e=>e.theme.colors.textMain};
border-top: 1px solid ${e=>e.theme.colors.textMain};;
div{
  max-width: 820px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  div{
    margin: 0;
    li{
      margin-block: 0.8rem;
      font-weight: 100;
      font-size: 1.2rem;
      line-height: 1.4;
      a{
        text-decoration: none;
        color : ${e=>e.theme.colors.textMain};
      }
    }
    h1{
      margin-bottom: 2rem;
      font-size: 2rem;
      font-family: 'Noto Sans CJK KR';
      font-style: normal;
      font-weight: 500;
    }
  }
  .footerIntro{
    width: 40%;
  }
  .footerMid{
    width: 25%;
  }
  .footerEnd{
    width: 25%;
  }
}
@media (max-width: 720px){
  .footerBox{
    display: block;
    padding: 3rem;
    h1{
      font-family: 'Noto Sans CJK KR';
      font-style: normal;
      font-weight: 500;
    }
    .footerIntro{
      width: 100%;
      margin-bottom: 3rem;
    }
    .footerMid{
      vertical-align: top;
      display: inline-block;
      width: 45%;
    }
    .footerEnd{
      vertical-align: top;
      display: inline-block;
      width: 45%;
    }
  }
}
`;function lo(){return(0,o.jsx)(ao,{children:(0,o.jsxs)("div",{className:"footerBox",children:[(0,o.jsx)("div",{className:"footerIntro",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("h1",{children:"About"}),(0,o.jsx)("li",{children:(0,o.jsx)(Gt,{to:"/",children:"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."})}),(0,o.jsx)("li",{children:(0,o.jsx)(Gt,{to:"/",children:"Lorem ipsum dolor sit amet."})}),(0,o.jsx)("li",{children:(0,o.jsx)(Gt,{to:"/",children:"Lorem ipsum dolor sit amet."})})]})}),(0,o.jsx)("div",{className:"footerMid",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("h1",{children:"Service"}),(0,o.jsx)("li",{children:(0,o.jsx)(Gt,{to:"/",children:"서비스 이용약관"})}),(0,o.jsx)("li",{children:(0,o.jsx)(Gt,{to:"/",children:"개인정보 처리방침"})}),(0,o.jsx)("li",{children:(0,o.jsx)(Gt,{to:"/",children:"FAQ"})})]})}),(0,o.jsx)("div",{className:"footerEnd",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("h1",{children:"Support"}),(0,o.jsx)("li",{children:"Copyright©2023 MingooJo.All rights reserved."}),(0,o.jsx)("li",{children:(0,o.jsx)(oo,{})})]})})]})})}N=s("fYo6y");const co=Ui.ul`
height: 40px;
margin-block: 1rem;
display: flex;
justify-content: space-between;
align-items: center;

  .headerLogo{
    height: 2rem;
    margin-right: 3rem;
  }
  .headerSide{
    height: 22px;
    width: 30px;
    display: flex;
    align-items: center;
    label{
      color: ${e=>e.theme.colors.textMain};
      display: block;
      font-size: 3rem;
      cursor: pointer;
      -webkit-user-select:none;
      -moz-user-select:none;
      -ms-user-select:none;
      user-select:none;
    }
    input{
      display: none;
    }
  }
`;function uo({toggle:e,setToggle:t}){const{isDarkMode:n}=Gi(),r=()=>{t(!e)};return(0,o.jsxs)(co,{children:[(0,o.jsx)("li",{children:n?(0,o.jsx)("img",{className:"headerLogo",src:"/images/logoB.png",alt:"Logo"}):(0,o.jsx)("img",{className:"headerLogo",src:"/images/logoW.png",alt:"Logo"})}),(0,o.jsx)("li",{className:"headerSide",onChange:r,children:(0,o.jsx)("div",{children:(0,o.jsxs)("label",{children:["☰",(0,o.jsx)("input",{type:"checkbox",checked:e,onChange:r})]})})})]})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},fo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=i>>2,u=(3&i)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),r.push(n[c],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ho(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new po;const l=i<<2|s>>4;if(r.push(l),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mo=function(e){return function(e){const t=ho(e);return fo.encodeByteArray(t,!0)}(e).replace(/\./g,"")},go=function(e){try{return fo.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yo=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,vo=()=>{try{return yo()||(()=>{if(void 0===a||void 0===a.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&go(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},bo=e=>{var t,n;return null===(n=null===(t=vo())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},wo=e=>{const t=bo(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},xo=()=>{var e;return null===(e=vo())||void 0===e?void 0:e.config},ko=e=>{var t;return null===(t=vo())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _o{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[mo(JSON.stringify({alg:"none",type:"JWT"})),mo(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function So(){var e;const t=null===(e=vo())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.process)}catch(e){return!1}}function To(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Co(){const e=Io();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function No(){try{return"object"==typeof indexedDB}catch(e){return!1}}function Ro(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function Po(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,jo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ao.prototype.create)}}class Ao{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Do,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new jo(r,o,n)}}const Do=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Mo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(Lo(n)&&Lo(s)){if(!Mo(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function Lo(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Uo(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Fo(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function $o(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(e,t){const n=new Vo(e,t);return n.subscribe.bind(n)}class Vo{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Bo),void 0===r.error&&(r.error=Bo),void 0===r.complete&&(r.complete=Bo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Bo(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qo=1e3,Ho=2,Ko=144e5,Wo=.5;function Go(e,t=qo,n=Ho){const r=t*Math.pow(n,e),i=Math.round(Wo*r*(Math.random()-.5)*2);return Math.min(Ko,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qo(e){return e&&e._delegate?e._delegate:e}class Yo{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new _o;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:Xo})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=Xo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=Xo){return this.instances.has(e)}getOptions(e=Xo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===Xo?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=Xo){return this.component?this.component.multipleInstances?e:Xo:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Zo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Jo(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=[];var ta,na;(na=ta||(ta={}))[na.DEBUG=0]="DEBUG",na[na.VERBOSE=1]="VERBOSE",na[na.INFO=2]="INFO",na[na.WARN=3]="WARN",na[na.ERROR=4]="ERROR",na[na.SILENT=5]="SILENT";const ra={debug:ta.DEBUG,verbose:ta.VERBOSE,info:ta.INFO,warn:ta.WARN,error:ta.ERROR,silent:ta.SILENT},ia=ta.INFO,sa={[ta.DEBUG]:"log",[ta.VERBOSE]:"log",[ta.INFO]:"info",[ta.WARN]:"warn",[ta.ERROR]:"error"},oa=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=sa[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class aa{constructor(e){this.name=e,this._logLevel=ia,this._logHandler=oa,this._userLogHandler=null,ea.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ta))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ra[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ta.DEBUG,...e),this._logHandler(this,ta.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ta.VERBOSE,...e),this._logHandler(this,ta.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ta.INFO,...e),this._logHandler(this,ta.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ta.WARN,...e),this._logHandler(this,ta.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ta.ERROR,...e),this._logHandler(this,ta.ERROR,...e)}}const la=(e,t)=>t.some((t=>e instanceof t));let ca,ua;const ha=new WeakMap,da=new WeakMap,fa=new WeakMap,pa=new WeakMap,ma=new WeakMap;let ga={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return da.get(e);if("objectStoreNames"===t)return e.objectStoreNames||fa.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ba(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ya(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ua||(ua=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(wa(this),t),ba(ha.get(this))}:function(...t){return ba(e.apply(wa(this),t))}:function(t,...n){const r=e.call(wa(this),t,...n);return fa.set(r,t.sort?t.sort():[t]),ba(r)}}function va(e){return"function"==typeof e?ya(e):(e instanceof IDBTransaction&&function(e){if(da.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));da.set(e,t)}(e),la(e,ca||(ca=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,ga):e)}function ba(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(ba(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&ha.set(t,e)})).catch((()=>{})),ma.set(t,e),t}(e);if(pa.has(e))return pa.get(e);const t=va(e);return t!==e&&(pa.set(e,t),ma.set(t,e)),t}const wa=e=>ma.get(e);function xa(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=ba(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(ba(o.result),e.oldVersion,e.newVersion,ba(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const ka=["get","getKey","getAll","getAllKeys","count"],_a=["put","add","delete","clear"],Ea=new Map;function Ia(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ea.get(t))return Ea.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=_a.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!ka.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return Ea.set(t,s),s}ga=(e=>({...e,get:(t,n,r)=>Ia(t,n)||e.get(t,n,r),has:(t,n)=>!!Ia(t,n)||e.has(t,n)}))(ga);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Ta="@firebase/app",Ca="0.9.11",Na=new aa("@firebase/app"),Ra="[DEFAULT]",Pa={[Ta]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ja=new Map,Aa=new Map;function Da(e,t){try{e.container.addComponent(t)}catch(n){Na.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Oa(e){const t=e.name;if(Aa.has(t))return Na.debug(`There were multiple attempts to register component ${t}.`),!1;Aa.set(t,e);for(const t of ja.values())Da(t,e);return!0}function Ma(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const La=new Ao("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ua{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Yo("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw La.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="9.22.1";function $a(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Ra,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw La.create("bad-app-name",{appName:String(i)});if(n||(n=xo()),!n)throw La.create("no-options");const s=ja.get(i);if(s){if(Mo(n,s.options)&&Mo(r,s.config))return s;throw La.create("duplicate-app",{appName:i})}const o=new Zo(i);for(const e of Aa.values())o.addComponent(e);const a=new Ua(n,r,o);return ja.set(i,a),a}function za(e=Ra){const t=ja.get(e);if(!t&&e===Ra&&xo())return $a();if(!t)throw La.create("no-app",{appName:e});return t}function Va(e,t,n){var r;let i=null!==(r=Pa[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Na.warn(e.join(" "))}Oa(new Yo(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ba="firebase-heartbeat-database",qa=1,Ha="firebase-heartbeat-store";let Ka=null;function Wa(){return Ka||(Ka=xa(Ba,qa,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Ha)}}).catch((e=>{throw La.create("idb-open",{originalErrorMessage:e.message})}))),Ka}async function Ga(e,t){try{const n=(await Wa()).transaction(Ha,"readwrite"),r=n.objectStore(Ha);await r.put(t,Qa(e)),await n.done}catch(e){if(e instanceof jo)Na.warn(e.message);else{const t=La.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Na.warn(t.message)}}}function Qa(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=1024;class Xa{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Za(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Ja();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ja(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=Ya){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),el(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),el(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=mo(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ja(){return(new Date).toISOString().substring(0,10)}class Za{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!No()&&Ro().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await Wa();return await t.transaction(Ha).objectStore(Ha).get(Qa(e))}catch(e){if(e instanceof jo)Na.warn(e.message);else{const t=La.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Na.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ga(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ga(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function el(e){return mo(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tl;tl="",Oa(new Yo("platform-logger",(e=>new Sa(e)),"PRIVATE")),Oa(new Yo("heartbeat",(e=>new Xa(e)),"PRIVATE")),Va(Ta,Ca,tl),Va(Ta,Ca,"esm2017"),Va("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Va("firebase","9.22.1","app");const nl=(e,t)=>t.some((t=>e instanceof t));let rl,il;const sl=new WeakMap,ol=new WeakMap,al=new WeakMap,ll=new WeakMap,cl=new WeakMap;let ul={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ol.get(e);if("objectStoreNames"===t)return e.objectStoreNames||al.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fl(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function hl(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(il||(il=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(pl(this),t),fl(sl.get(this))}:function(...t){return fl(e.apply(pl(this),t))}:function(t,...n){const r=e.call(pl(this),t,...n);return al.set(r,t.sort?t.sort():[t]),fl(r)}}function dl(e){return"function"==typeof e?hl(e):(e instanceof IDBTransaction&&function(e){if(ol.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));ol.set(e,t)}(e),nl(e,rl||(rl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,ul):e)}function fl(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(fl(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&sl.set(t,e)})).catch((()=>{})),cl.set(t,e),t}(e);if(ll.has(e))return ll.get(e);const t=dl(e);return t!==e&&(ll.set(e,t),cl.set(t,e)),t}const pl=e=>cl.get(e);function ml(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=fl(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(fl(o.result),e.oldVersion,e.newVersion,fl(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const gl=["get","getKey","getAll","getAllKeys","count"],yl=["put","add","delete","clear"],vl=new Map;function bl(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(vl.get(t))return vl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=yl.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!gl.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return vl.set(t,s),s}!function(e){ul=e(ul)}((e=>({...e,get:(t,n,r)=>bl(t,n)||e.get(t,n,r),has:(t,n)=>!!bl(t,n)||e.has(t,n)})));const wl="@firebase/installations",xl="0.6.4",kl=1e4,_l=`w:${xl}`,El="FIS_v2",Il="https://firebaseinstallations.googleapis.com/v1",Sl=36e5,Tl=new Ao("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Cl(e){return e instanceof jo&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl({projectId:e}){return`${Il}/projects/${e}/installations`}function Rl(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function Pl(e,t){const n=(await t.json()).error;return Tl.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function jl({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Al(e,{refreshToken:t}){const n=jl(e);return n.append("Authorization",function(e){return`${El} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),n}async function Dl(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ml=/^[cdef][\w-]{21}$/,Ll="";function Ul(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return Ml.test(t)?t:Ll}catch(e){return Ll}}function Fl(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=new Map;function zl(e,t){const n=Fl(e);Vl(n,t),function(e,t){const n=ql();n&&n.postMessage({key:e,fid:t});Hl()}(n,t)}function Vl(e,t){const n=$l.get(e);if(n)for(const e of n)e(t)}let Bl=null;function ql(){return!Bl&&"BroadcastChannel"in self&&(Bl=new BroadcastChannel("[Firebase] FID Change"),Bl.onmessage=e=>{Vl(e.data.key,e.data.fid)}),Bl}function Hl(){0===$l.size&&Bl&&(Bl.close(),Bl=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl="firebase-installations-database",Wl=1,Gl="firebase-installations-store";let Ql=null;function Yl(){return Ql||(Ql=ml(Kl,Wl,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Gl)}})),Ql}async function Xl(e,t){const n=Fl(e),r=(await Yl()).transaction(Gl,"readwrite"),i=r.objectStore(Gl),s=await i.get(n);return await i.put(t,n),await r.done,s&&s.fid===t.fid||zl(e,t.fid),t}async function Jl(e){const t=Fl(e),n=(await Yl()).transaction(Gl,"readwrite");await n.objectStore(Gl).delete(t),await n.done}async function Zl(e,t){const n=Fl(e),r=(await Yl()).transaction(Gl,"readwrite"),i=r.objectStore(Gl),s=await i.get(n),o=t(s);return void 0===o?await i.delete(n):await i.put(o,n),await r.done,!o||s&&s.fid===o.fid||zl(e,o.fid),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(e){let t;const n=await Zl(e.appConfig,(n=>{const r=function(e){const t=e||{fid:Ul(),registrationStatus:0};return rc(t)}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(Tl.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Nl(e),i=jl(e),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={fid:n,authVersion:El,appId:e.appId,sdkVersion:_l},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Dl((()=>fetch(r,a)));if(l.ok){const e=await l.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:Rl(e.authToken)}}throw await Pl("Create Installation",l)}(e,t);return Xl(e.appConfig,n)}catch(n){throw Cl(n)&&409===n.customData.serverCode?await Jl(e.appConfig):await Xl(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:tc(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return n.fid===Ll?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function tc(e){let t=await nc(e.appConfig);for(;1===t.registrationStatus;)await Ol(100),t=await nc(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await ec(e);return n||t}return t}function nc(e){return Zl(e,(e=>{if(!e)throw Tl.create("installation-not-found");return rc(e)}))}function rc(e){return 1===(t=e).registrationStatus&&t.registrationTime+kl<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function ic({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${Nl(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),i=Al(e,n),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={installation:{sdkVersion:_l,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Dl((()=>fetch(r,a)));if(l.ok){return Rl(await l.json())}throw await Pl("Generate Auth Token",l)}async function sc(e,t=!1){let n;const r=await Zl(e.appConfig,(r=>{if(!ac(r))throw Tl.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Sl}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await oc(e.appConfig);for(;1===n.authToken.requestStatus;)await Ol(100),n=await oc(e.appConfig);const r=n.authToken;return 0===r.requestStatus?sc(e,t):r}(e,t),r;{if(!navigator.onLine)throw Tl.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await ic(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Xl(e.appConfig,r),n}catch(n){if(!Cl(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Xl(e.appConfig,n)}else await Jl(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function oc(e){return Zl(e,(e=>{if(!ac(e))throw Tl.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+kl<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}function ac(e){return void 0!==e&&2===e.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function lc(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await ec(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);return(await sc(n,t)).token}function cc(e){return Tl.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="installations",hc="installations-internal",dc=e=>{const t=Ma(e.getProvider("app").getImmediate(),uc).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await ec(t);return r?r.catch(console.error):sc(t).catch(console.error),n.fid}(t),getToken:e=>lc(t,e)}};Oa(new Yo(uc,(e=>{const t=e.getProvider("app").getImmediate(),n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw cc("App Configuration");if(!e.name)throw cc("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw cc(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Ma(t,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),Oa(new Yo(hc,dc,"PRIVATE")),Va(wl,xl),Va(wl,xl,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fc="analytics",pc="firebase_id",mc="origin",gc=6e4,yc="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",vc="https://www.googletagmanager.com/gtag/js",bc=new aa("@firebase/analytics"),wc=new Ao("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xc(e){if(!e.startsWith(vc)){const t=wc.create("invalid-gtag-resource",{gtagURL:e});return bc.warn(t.message),""}return e}function kc(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function _c(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:xc}),r=document.createElement("script"),i=`${vc}?l=${e}&id=${t}`;r.src=n?null==n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Ec(e,t,n,r){return async function(i,...s){try{if("event"===i){const[r,i]=s;await async function(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await kc(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(e){bc.error(e)}}(e,t,n,r,i)}else if("config"===i){const[i,o]=s;await async function(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const e=(await kc(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(e){bc.error(e)}e("config",i,s)}(e,t,n,r,i,o)}else if("consent"===i){const[t]=s;e("consent","update",t)}else if("get"===i){const[t,n,r]=s;e("get",t,n,r)}else if("set"===i){const[t]=s;e("set",t)}else e(i,...s)}catch(e){bc.error(e)}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ic=30;const Sc=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function Tc(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Cc(e,t=Sc,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw wc.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw wc.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Rc;return setTimeout((async()=>{a.abort()}),void 0!==n?n:gc),Nc({appId:r,apiKey:i,measurementId:s},o,a,t)}async function Nc(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Sc){var s;const{appId:o,measurementId:a}=e;try{await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(s),r(wc.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(e){if(a)return bc.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:o,measurementId:a};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Tc(r)},s=yc.replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw wc.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return i.deleteThrottleMetadata(o),t}catch(t){const l=t;if(!function(e){if(!(e instanceof jo&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(l)){if(i.deleteThrottleMetadata(o),a)return bc.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==l?void 0:l.message}]`),{appId:o,measurementId:a};throw t}const c=503===Number(null===(s=null==l?void 0:l.customData)||void 0===s?void 0:s.httpStatus)?Go(n,i.intervalMillis,Ic):Go(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,u),bc.debug(`Calling attemptFetch again in ${c} millis`),Nc(e,u,r,i)}}class Rc{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pc,jc;function Ac(e){jc=e}function Dc(e){Pc=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oc(e,t,n,r,i,s,o){var a;const l=Cc(e);l.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&bc.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>bc.error(e))),t.push(l);const c=async function(){if(!No())return bc.warn(wc.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await Ro()}catch(e){return bc.warn(wc.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}().then((e=>e?r.getId():void 0)),[u,h]=await Promise.all([l,c]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(vc)&&n.src.includes(e))return n;return null})(s)||_c(s,u.measurementId),jc&&(i("consent","default",jc),Ac(void 0)),i("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d[mc]="firebase",d.update=!0,null!=h&&(d[pc]=h),i("config",u.measurementId,d),Pc&&(i("set",Pc),Dc(void 0)),u.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){this.app=e}_delete(){return delete Lc[this.app.options.appId],Promise.resolve()}}let Lc={},Uc=[];const Fc={};let $c,zc,Vc="dataLayer",Bc="gtag",qc=!1;function Hc(e,t,n){!function(){const e=[];if(To()&&e.push("This is a browser extension environment."),Po()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=wc.create("invalid-analytics-context",{errorInfo:t});bc.warn(n.message)}}();const r=e.options.appId;if(!r)throw wc.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw wc.create("no-api-key");bc.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Lc[r])throw wc.create("already-exists",{id:r});if(!qc){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Vc);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let s=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=Ec(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}(Lc,Uc,Fc,Vc,Bc);zc=e,$c=t,qc=!0}Lc[r]=Oc(e,Uc,Fc,t,$c,Vc,n);return new Mc(e)}function Kc(e,t,n,r){e=Qo(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(zc,Lc[e.app.options.appId],t,n,r).catch((e=>bc.error(e)))}const Wc="@firebase/analytics",Gc="0.10.0";Oa(new Yo(fc,((e,{options:t})=>Hc(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),Oa(new Yo("analytics-internal",(function(e){try{const t=e.getProvider(fc).getImmediate();return{logEvent:(e,n,r)=>Kc(t,e,n,r)}}catch(e){throw wc.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Va(Wc,Gc),Va(Wc,Gc,"esm2017");function Qc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yc=Qc,Xc=new Ao("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Jc=new aa("@firebase/auth");function Zc(e,...t){Jc.logLevel<=ta.ERROR&&Jc.error(`Auth (${Fa}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(e,...t){throw ru(e,...t)}function tu(e,...t){return ru(e,...t)}function nu(e,t,n){const r=Object.assign(Object.assign({},Yc()),{[t]:n});return new Ao("auth","Firebase",r).create(t,{appName:e.name})}function ru(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Xc.create(e,...t)}function iu(e,t,...n){if(!e)throw ru(t,...n)}function su(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Zc(t),new Error(t)}function ou(e,t){e||su(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function lu(){return"http:"===cu()||"https:"===cu()}function cu(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uu{constructor(e,t){this.shortDelay=e,this.longDelay=t,ou(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Io())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(lu()||To()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(e,t){ou(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void su("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void su("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void su("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},pu=new uu(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function gu(e,t,n,r,i={}){return yu(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Uo(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),du.fetch()(bu(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function yu(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},fu),t);try{const t=new wu(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw xu(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw xu(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw xu(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw xu(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw nu(e,a,o);eu(e,a)}}catch(t){if(t instanceof jo)throw t;eu(e,"network-request-failed",{message:String(t)})}}async function vu(e,t,n,r,i={}){const s=await gu(e,t,n,r,i);return"mfaPendingCredential"in s&&eu(e,"multi-factor-auth-required",{_serverResponse:s}),s}function bu(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?hu(e.config,i):`${e.config.apiScheme}://${i}`}class wu{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(tu(this.auth,"network-request-failed"))),pu.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function xu(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=tu(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ku(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(e){return 1e3*Number(e)}function Eu(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Zc("JWT malformed, contained fewer than 3 sections"),null;try{const e=go(n);return e?JSON.parse(e):(Zc("Failed to decode base64 JWT payload"),null)}catch(e){return Zc("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Iu(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof jo&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Su{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ku(this.lastLoginAt),this.creationTime=ku(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cu(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Iu(e,async function(e,t){return gu(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));iu(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Zt(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Tu(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){iu(e.idToken,"internal-error"),iu(void 0!==e.idToken,"internal-error"),iu(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Eu(e);return iu(t,"internal-error"),iu(void 0!==t.exp,"internal-error"),iu(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return iu(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await yu(e,{},(async()=>{const n=Uo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=bu(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",du.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Nu;return n&&(iu("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(iu("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(iu("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nu,this.toJSON())}_performRefresh(){return su("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(e,t){iu("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Pu{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Zt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Su(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Tu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Iu(this,this.stsTokenManager.getToken(this.auth,e));return iu(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Qo(e),r=await n.getIdToken(t),i=Eu(r);iu(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ku(_u(i.auth_time)),issuedAtTime:ku(_u(i.iat)),expirationTime:ku(_u(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Qo(e);await Cu(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(iu(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pu(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){iu(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Cu(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Iu(this,async function(e,t){return gu(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:x,stsTokenManager:k}=t;iu(v&&k,e,"internal-error");const _=Nu.fromJSON(this.name,k);iu("string"==typeof v,e,"internal-error"),Ru(u,e.name),Ru(h,e.name),iu("boolean"==typeof b,e,"internal-error"),iu("boolean"==typeof w,e,"internal-error"),Ru(d,e.name),Ru(f,e.name),Ru(p,e.name),Ru(m,e.name),Ru(g,e.name),Ru(y,e.name);const E=new Pu({uid:v,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:_,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(E.providerData=x.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new Nu;r.updateFromServerResponse(t);const i=new Pu({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Cu(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new Map;function Au(e){ou(e instanceof Function,"Expected a class definition");let t=ju.get(e);return t?(ou(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ju.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Du.type="NONE";const Ou=Du;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(e,t,n){return`firebase:${e}:${t}:${n}`}class Lu{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Mu(this.userKey,r.apiKey,i),this.fullPersistenceKey=Mu("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pu._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Lu(Au(Ou),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Au(Ou);const s=Mu(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=Pu._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Lu(i,e,n)):new Lu(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Vu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Fu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(qu(t))return"Blackberry";if(Hu(t))return"Webos";if($u(t))return"Safari";if((t.includes("chrome/")||zu(t))&&!t.includes("edge/"))return"Chrome";if(Bu(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Fu(e=Io()){return/firefox\//i.test(e)}function $u(e=Io()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function zu(e=Io()){return/crios\//i.test(e)}function Vu(e=Io()){return/iemobile/i.test(e)}function Bu(e=Io()){return/android/i.test(e)}function qu(e=Io()){return/blackberry/i.test(e)}function Hu(e=Io()){return/webos/i.test(e)}function Ku(e=Io()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Wu(){return Co()&&10===document.documentMode}function Gu(e=Io()){return Ku(e)||Bu(e)||Hu(e)||qu(e)||/windows phone/i.test(e)||Vu(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qu(e,t=[]){let n;switch(e){case"Browser":n=Uu(Io());break;case"Worker":n=`${Uu(Io())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fa}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yu(e,t){return gu(e,"GET","/v2/recaptchaConfig",mu(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(e){return void 0!==e&&void 0!==e.enterprise}class Ju{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=tu("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function eh(e){return`__${e}${Math.floor(1e6*Math.random())}`}const th="NO_RECAPTCHA";class nh{constructor(e){this.type="recaptcha-enterprise",this.auth=oh(e)}async verify(e="verify",t=!1){function n(t,n,r){const i=window.grecaptcha;Xu(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(th)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Yu(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Ju(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((i=>{if(!t&&Xu(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));Zu("https://www.google.com/recaptcha/enterprise.js?render="+i).then((()=>{n(i,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function rh(e,t,n,r=!1){const i=new nh(e);let s;try{s=await i.verify(n)}catch(e){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ah(this),this.idTokenSubscription=new ah(this),this.beforeStateQueue=new ih(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Au(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Lu.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return iu(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Cu(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Qo(e):null;return t&&iu(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&iu(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Au(e))}))}async initializeRecaptchaConfig(){const e=await Yu(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Ju(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new nh(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ao("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Au(e)||this._popupRedirectResolver;iu(t,this,"argument-error"),this.redirectPersistenceManager=await Lu.create(this,[Au(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return iu(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return iu(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Jc.logLevel<=ta.WARN&&Jc.warn(`Auth (${Fa}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function oh(e){return Qo(e)}class ah{constructor(e){this.auth=e,this.observer=null,this.addObserver=zo((e=>this.observer=e))}get next(){return iu(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(e,t,n){const r=oh(e);iu(r._canInitEmulator,r,"emulator-config-failed"),iu(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=ch(t),{host:o,port:a}=function(e){const t=ch(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:uh(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:uh(t)}}}(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function ch(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function uh(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class hh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return su("not implemented")}_getIdTokenResponse(e){return su("not implemented")}_linkToIdToken(e,t){return su("not implemented")}_getReauthenticationResolver(e){return su("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dh(e,t){return gu(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function fh(e,t){return vu(e,"POST","/v1/accounts:signInWithPassword",mu(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ph extends hh{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ph(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ph(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await rh(e,n,"signInWithPassword");return fh(e,t)}return fh(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await rh(e,n,"signInWithPassword");return fh(e,t)}return Promise.reject(t)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return vu(e,"POST","/v1/accounts:signInWithEmailLink",mu(e,t))}(e,{email:this._email,oobCode:this._password});default:eu(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return dh(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return vu(e,"POST","/v1/accounts:signInWithEmailLink",mu(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:eu(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mh(e,t){return vu(e,"POST","/v1/accounts:signInWithIdp",mu(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh extends hh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gh(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):eu("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Zt(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new gh(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return mh(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,mh(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mh(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Uo(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vh extends hh{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new vh({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new vh({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return vu(e,"POST","/v1/accounts:signInWithPhoneNumber",mu(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await vu(e,"POST","/v1/accounts:signInWithPhoneNumber",mu(e,t));if(n.temporaryProof)throw xu(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return vu(e,"POST","/v1/accounts:signInWithPhoneNumber",mu(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),yh)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new vh({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e){var t,n,r,i,s,o;const a=Fo($o(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);iu(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=Fo($o(e)).link,n=t?Fo($o(t)).deep_link_id:null,r=Fo($o(e)).deep_link_id;return(r?Fo($o(r)).link:null)||r||n||t||e}(e);try{return new bh(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wh{constructor(){this.providerId=wh.PROVIDER_ID}static credential(e,t){return ph._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=bh.parseLink(t);return iu(n,"argument-error"),ph._fromEmailAndCode(e,n.code,n.tenantId)}}wh.PROVIDER_ID="password",wh.EMAIL_PASSWORD_SIGN_IN_METHOD="password",wh.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh extends xh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _h extends kh{constructor(){super("facebook.com")}static credential(e){return gh._fromParams({providerId:_h.PROVIDER_ID,signInMethod:_h.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _h.credentialFromTaggedObject(e)}static credentialFromError(e){return _h.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return _h.credential(e.oauthAccessToken)}catch(e){return null}}}_h.FACEBOOK_SIGN_IN_METHOD="facebook.com",_h.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eh extends kh{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gh._fromParams({providerId:Eh.PROVIDER_ID,signInMethod:Eh.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Eh.credentialFromTaggedObject(e)}static credentialFromError(e){return Eh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Eh.credential(t,n)}catch(e){return null}}}Eh.GOOGLE_SIGN_IN_METHOD="google.com",Eh.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ih extends kh{constructor(){super("github.com")}static credential(e){return gh._fromParams({providerId:Ih.PROVIDER_ID,signInMethod:Ih.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ih.credentialFromTaggedObject(e)}static credentialFromError(e){return Ih.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ih.credential(e.oauthAccessToken)}catch(e){return null}}}Ih.GITHUB_SIGN_IN_METHOD="github.com",Ih.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sh extends kh{constructor(){super("twitter.com")}static credential(e,t){return gh._fromParams({providerId:Sh.PROVIDER_ID,signInMethod:Sh.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Sh.credentialFromTaggedObject(e)}static credentialFromError(e){return Sh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Sh.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Th(e,t){return vu(e,"POST","/v1/accounts:signUp",mu(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sh.TWITTER_SIGN_IN_METHOD="twitter.com",Sh.PROVIDER_ID="twitter.com";class Ch{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Pu._fromIdTokenResponse(e,n,r),s=Nh(n);return new Ch({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Nh(n);return new Ch({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Nh(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rh extends jo{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Rh.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Rh(e,t,n,r)}}function Ph(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Rh._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jh(e,t,n=!1){const r=await Iu(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ch._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ah(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Iu(e,Ph(r,i,t,e),n);iu(s.idToken,r,"internal-error");const o=Eu(s.idToken);iu(o,r,"internal-error");const{sub:a}=o;return iu(e.uid===a,r,"user-mismatch"),Ch._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&eu(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dh(e,t,n=!1){const r="signIn",i=await Ph(e,r,t),s=await Ch._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Oh(e,t){return Dh(oh(e),t)}async function Mh(e,t,n){var r;const i=oh(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await rh(i,s,"signUpPassword");o=Th(i,e)}else o=Th(i,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await rh(i,s,"signUpPassword");return Th(i,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),l=await Ch._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function Lh(e,t,n){return Oh(Qo(e),wh.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Uh(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=Qo(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await Iu(r,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return gu(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const o=r.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}new WeakMap;const Fh="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Fh,"1"),this.storage.removeItem(Fh),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh extends $h{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Io();return $u(e)||Ku(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Gu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Wu()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zh.type="LOCAL";const Vh=zh;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh extends $h{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Bh.type="SESSION";const qh=Bh;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Hh(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kh(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hh.receivers=[];class Wh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=Kh("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qh(){return void 0!==Gh().WorkerGlobalScope&&"function"==typeof Gh().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yh="firebaseLocalStorageDb",Xh=1,Jh="firebaseLocalStorage",Zh="fbase_key";class ed{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function td(e,t){return e.transaction([Jh],t?"readwrite":"readonly").objectStore(Jh)}function nd(){const e=indexedDB.open(Yh,Xh);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Jh,{keyPath:Zh})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Jh)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Yh);return new ed(e).toPromise()}(),t(await nd()))}))}))}async function rd(e,t,n){const r=td(e,!0).put({[Zh]:t,value:n});return new ed(r).toPromise()}function id(e,t){const n=td(e,!0).delete(t);return new ed(n).toPromise()}class sd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await nd()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hh._getInstance(Qh()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Wh(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nd();return await rd(e,Fh,"1"),await id(e,Fh),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>rd(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=td(e,!1).get(t),r=await new ed(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>id(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=td(e,!1).getAll();return new ed(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}sd.type="LOCAL";const od=sd;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
eh("rcb"),new uu(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ad="recaptcha";async function ld(e,t,n){var r;const i=await n.verify();try{let s;if(iu("string"==typeof i,e,"argument-error"),iu(n.type===ad,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){iu("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return gu(e,"POST","/v2/accounts/mfaEnrollment:start",mu(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{iu("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;iu(n,e,"missing-multi-factor-info");const o=await function(e,t){return gu(e,"POST","/v2/accounts/mfaSignIn:start",mu(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return gu(e,"POST","/v1/accounts:sendVerificationCode",mu(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cd{constructor(e){this.providerId=cd.PROVIDER_ID,this.auth=oh(e)}verifyPhoneNumber(e,t){return ld(this.auth,e,Qo(t))}static credential(e,t){return vh._fromVerification(e,t)}static credentialFromResult(e){const t=e;return cd.credentialFromTaggedObject(t)}static credentialFromError(e){return cd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?vh._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ud(e,t){return t?Au(t):(iu(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cd.PROVIDER_ID="phone",cd.PHONE_SIGN_IN_METHOD="phone";class hd extends hh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mh(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mh(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mh(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function dd(e){return Dh(e.auth,new hd(e),e.bypassAuthState)}function fd(e){const{auth:t,user:n}=e;return iu(n,t,"internal-error"),Ah(n,new hd(e),e.bypassAuthState)}async function pd(e){const{auth:t,user:n}=e;return iu(n,t,"internal-error"),jh(n,new hd(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dd;case"linkViaPopup":case"linkViaRedirect":return pd;case"reauthViaPopup":case"reauthViaRedirect":return fd;default:eu(this.auth,"internal-error")}}resolve(e){ou(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ou(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd=new uu(2e3,1e4);class yd extends md{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,yd.currentPopupAction&&yd.currentPopupAction.cancel(),yd.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return iu(e,this.auth,"internal-error"),e}async onExecution(){ou(1===this.filter.length,"Popup operations only handle one event");const e=Kh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(tu(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(tu(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yd.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(tu(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,gd.get())};e()}}yd.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vd="pendingRedirect",bd=new Map;class wd extends md{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=bd.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=_d(t),r=kd(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}bd.set(this.auth._key(),e)}return this.bypassAuthState||bd.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function xd(e,t){bd.set(e._key(),t)}function kd(e){return Au(e._redirectPersistence)}function _d(e){return Mu(vd,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ed(e,t,n=!1){const r=oh(e),i=ud(r,t),s=new wd(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Id{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Td(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Td(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(tu(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sd(e))}saveEventToCache(e){this.cachedEventUids.add(Sd(e)),this.lastProcessedEventTime=Date.now()}}function Sd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Td({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cd=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nd=/^https?/;async function Rd(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return gu(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Pd(e))return}catch(e){}eu(e,"unauthorized-domain")}function Pd(e){const t=au(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Nd.test(n))return!1;if(Cd.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=new uu(3e4,6e4);function Ad(){const e=Gh().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Dd=null;function Od(e){return Dd=Dd||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){Ad(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ad(),n(tu(e,"network-request-failed"))},timeout:jd.get()})}if(null===(i=null===(r=Gh().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Gh().gapi)||void 0===s?void 0:s.load)){const t=eh("iframefcb");return Gh()[t]=()=>{gapi.load?o():n(tu(e,"network-request-failed"))},Zu(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Dd=null,e}))}(e),Dd}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md=new uu(5e3,15e3),Ld="__/auth/iframe",Ud="emulator/auth/iframe",Fd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$d=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zd(e){const t=e.config;iu(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?hu(t,Ud):`https://${e.config.authDomain}/${Ld}`,r={apiKey:t.apiKey,appName:e.name,v:Fa},i=$d.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Uo(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bd=500,qd=600,Hd="_blank",Kd="http://localhost";class Wd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Gd(e,t,n,r=Bd,i=qd){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Vd),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Io().toLowerCase();n&&(a=zu(c)?Hd:n),Fu(c)&&(t=t||Kd,l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Io()){var t;return Ku(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Wd(null);const h=window.open(t||"",a,u);iu(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Wd(h)}const Qd="__/auth/handler",Yd="emulator/auth/handler",Xd=encodeURIComponent("fac");async function Jd(e,t,n,r,i,s){iu(e.config.authDomain,e,"auth-domain-config-required"),iu(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Fa,eventId:i};if(t instanceof xh){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Oo(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof kh){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const l=await e._getAppCheckToken(),c=l?`#${Xd}=${encodeURIComponent(l)}`:"";return`${function({config:e}){return e.emulator?hu(e,Yd):`https://${e.authDomain}/${Qd}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Uo(a).slice(1)}${c}`}const Zd="webStorageSupport";const ef=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qh,this._completeRedirectFn=Ed,this._overrideRedirectResult=xd}async _openPopup(e,t,n,r){var i;ou(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Gd(e,await Jd(e,t,n,au(),r),Kh())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){Gh().location.href=e}(await Jd(e,t,n,au(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(ou(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Od(e),n=Gh().gapi;return iu(n,e,"internal-error"),t.open({where:document.body,url:zd(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fd,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=tu(e,"network-request-failed"),s=Gh().setTimeout((()=>{r(i)}),Md.get());function o(){Gh().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new Id(e);return t.register("authEvent",(t=>{iu(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zd,{type:Zd},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[Zd];void 0!==i&&t(!!i),eu(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Rd(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Gu()||$u()||Ku()}};var tf="@firebase/auth",nf="0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){iu(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sf=ko("authIdTokenMaxAge")||300;let of=null;const af=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>sf)return;const i=null==n?void 0:n.token;of!==i&&(of=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};var lf;lf="Browser",Oa(new Yo("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;iu(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:lf,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qu(lf)},l=new sh(n,r,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Au);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Oa(new Yo("auth-internal",(e=>(e=>new rf(e))(oh(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Va(tf,nf,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(lf)),Va(tf,nf,"esm2017");var cf,uf="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},hf={},df=df||{},ff=uf||self;function pf(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function mf(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var gf="closure_uid_"+(1e9*Math.random()>>>0),yf=0;function vf(e,t,n){return e.call.apply(e.bind,arguments)}function bf(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function wf(e,t,n){return(wf=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?vf:bf).apply(null,arguments)}function xf(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function kf(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function _f(){this.s=this.s,this.o=this.o}_f.prototype.s=!1,_f.prototype.sa=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,gf)&&e[gf]||(e[gf]=++yf))},_f.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ef=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function If(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Sf(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(pf(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function Tf(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Tf.prototype.h=function(){this.defaultPrevented=!0};var Cf=function(){if(!ff.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{ff.addEventListener("test",(()=>{}),t),ff.removeEventListener("test",(()=>{}),t)}catch(e){}return e}();function Nf(e){return/^[\s\xa0]*$/.test(e)}function Rf(){var e=ff.navigator;return e&&(e=e.userAgent)?e:""}function Pf(e){return-1!=Rf().indexOf(e)}function jf(e){return jf[" "](e),e}jf[" "]=function(){};var Af,Df,Of,Mf=Pf("Opera"),Lf=Pf("Trident")||Pf("MSIE"),Uf=Pf("Edge"),Ff=Uf||Lf,$f=Pf("Gecko")&&!(-1!=Rf().toLowerCase().indexOf("webkit")&&!Pf("Edge"))&&!(Pf("Trident")||Pf("MSIE"))&&!Pf("Edge"),zf=-1!=Rf().toLowerCase().indexOf("webkit")&&!Pf("Edge");function Vf(){var e=ff.document;return e?e.documentMode:void 0}e:{var Bf="",qf=(Df=Rf(),$f?/rv:([^\);]+)(\)|;)/.exec(Df):Uf?/Edge\/([\d\.]+)/.exec(Df):Lf?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Df):zf?/WebKit\/(\S+)/.exec(Df):Mf?/(?:Version)[ \/]?(\S+)/.exec(Df):void 0);if(qf&&(Bf=qf?qf[1]:""),Lf){var Hf=Vf();if(null!=Hf&&Hf>parseFloat(Bf)){Af=String(Hf);break e}}Af=Bf}if(ff.document&&Lf){var Kf=Vf();Of=Kf||(parseInt(Af,10)||void 0)}else Of=void 0;var Wf=Of;function Gf(e,t){if(Tf.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if($f){e:{try{jf(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Qf[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Gf.$.h.call(this)}}kf(Gf,Tf);var Qf={2:"touch",3:"pen",4:"mouse"};Gf.prototype.h=function(){Gf.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Yf="closure_listenable_"+(1e6*Math.random()|0),Xf=0;function Jf(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Xf,this.fa=this.ia=!1}function Zf(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ep(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function tp(e){const t={};for(const n in e)t[n]=e[n];return t}const np="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rp(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<np.length;t++)n=np[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ip(e){this.src=e,this.g={},this.h=0}function sp(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Ef(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Zf(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function op(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}ip.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=op(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new Jf(t,this.src,s,!!r,i)).ia=n,e.push(t)),t};var ap="closure_lm_"+(1e6*Math.random()|0),lp={};function cp(e,t,n,r,i){if(r&&r.once)return hp(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)cp(e,t[s],n,r,i);return null}return n=vp(n),e&&e[Yf]?e.O(t,n,mf(r)?!!r.capture:!!r,i):up(e,t,n,!1,r,i)}function up(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=mf(i)?!!i.capture:!!i,a=gp(e);if(a||(e[ap]=a=new ip(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=mp;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Cf||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(pp(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function hp(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)hp(e,t[s],n,r,i);return null}return n=vp(n),e&&e[Yf]?e.P(t,n,mf(r)?!!r.capture:!!r,i):up(e,t,n,!0,r,i)}function dp(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)dp(e,t[s],n,r,i);else r=mf(r)?!!r.capture:!!r,n=vp(n),e&&e[Yf]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=op(s=e.g[t],n,r,i))&&(Zf(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=gp(e))&&(t=e.g[t.toString()],e=-1,t&&(e=op(t,n,r,i)),(n=-1<e?t[e]:null)&&fp(n))}function fp(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Yf])sp(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(pp(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=gp(t))?(sp(n,e),0==n.h&&(n.src=null,t[ap]=null)):Zf(e)}}}function pp(e){return e in lp?lp[e]:lp[e]="on"+e}function mp(e,t){if(e.fa)e=!0;else{t=new Gf(t,this);var n=e.listener,r=e.la||e.src;e.ia&&fp(e),e=n.call(r,t)}return e}function gp(e){return(e=e[ap])instanceof ip?e:null}var yp="__closure_events_fn_"+(1e9*Math.random()>>>0);function vp(e){return"function"==typeof e?e:(e[yp]||(e[yp]=function(t){return e.handleEvent(t)}),e[yp])}function bp(){_f.call(this),this.i=new ip(this),this.S=this,this.J=null}function wp(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"==typeof t)t=new Tf(t,e);else if(t instanceof Tf)t.target=t.target||e;else{var i=t;rp(t=new Tf(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=xp(o,r,!0,t)&&i}if(i=xp(o=t.g=e,r,!0,t)&&i,i=xp(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=xp(o=t.g=n[s],r,!1,t)&&i}function xp(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&sp(e.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}kf(bp,_f),bp.prototype[Yf]=!0,bp.prototype.removeEventListener=function(e,t,n,r){dp(this,e,t,n,r)},bp.prototype.N=function(){if(bp.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Zf(n[r]);delete t.g[e],t.h--}}this.J=null},bp.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},bp.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var kp=ff.JSON.stringify;function _p(){var e=Rp;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Ep=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Ip),(e=>e.reset()));class Ip{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Sp(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Tp(e){ff.setTimeout((()=>{throw e}),0)}let Cp,Np=!1,Rp=new class{constructor(){this.h=this.g=null}add(e,t){const n=Ep.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},Pp=()=>{const e=ff.Promise.resolve(void 0);Cp=()=>{e.then(jp)}};var jp=()=>{for(var e;e=_p();){try{e.h.call(e.g)}catch(e){Tp(e)}var t=Ep;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Np=!1};function Ap(e,t){bp.call(this),this.h=e||1,this.g=t||ff,this.j=wf(this.qb,this),this.l=Date.now()}function Dp(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Op(e,t,n){if("function"==typeof e)n&&(e=wf(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=wf(e.handleEvent,e)}return 2147483647<Number(t)?-1:ff.setTimeout(e,t||0)}function Mp(e){e.g=Op((()=>{e.g=null,e.i&&(e.i=!1,Mp(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}kf(Ap,bp),(cf=Ap.prototype).ga=!1,cf.T=null,cf.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),wp(this,"tick"),this.ga&&(Dp(this),this.start()))}},cf.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},cf.N=function(){Ap.$.N.call(this),Dp(this),delete this.g};class Lp extends _f{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Mp(this)}N(){super.N(),this.g&&(ff.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Up(e){_f.call(this),this.h=e,this.g={}}kf(Up,_f);var Fp=[];function $p(e,t,n,r){Array.isArray(n)||(n&&(Fp[0]=n.toString()),n=Fp);for(var i=0;i<n.length;i++){var s=cp(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function zp(e){ep(e.g,(function(e,t){this.g.hasOwnProperty(t)&&fp(e)}),e),e.g={}}function Vp(){this.g=!0}function Bp(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return kp(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Up.prototype.N=function(){Up.$.N.call(this),zp(this)},Up.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Vp.prototype.Ea=function(){this.g=!1},Vp.prototype.info=function(){};var qp={},Hp=null;function Kp(){return Hp=Hp||new bp}function Wp(e){Tf.call(this,qp.Ta,e)}function Gp(e){const t=Kp();wp(t,new Wp(t))}function Qp(e,t){Tf.call(this,qp.STAT_EVENT,e),this.stat=t}function Yp(e){const t=Kp();wp(t,new Qp(t,e))}function Xp(e,t){Tf.call(this,qp.Ua,e),this.size=t}function Jp(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return ff.setTimeout((function(){e()}),t)}qp.Ta="serverreachability",kf(Wp,Tf),qp.STAT_EVENT="statevent",kf(Qp,Tf),qp.Ua="timingevent",kf(Xp,Tf);var Zp={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},em={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function tm(){}function nm(e){return e.h||(e.h=e.i())}function rm(){}tm.prototype.h=null;var im,sm={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function om(){Tf.call(this,"d")}function am(){Tf.call(this,"c")}function lm(){}function cm(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Up(this),this.P=hm,e=Ff?125:void 0,this.V=new Ap(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new um}function um(){this.i=null,this.g="",this.h=!1}kf(om,Tf),kf(am,Tf),kf(lm,tm),lm.prototype.g=function(){return new XMLHttpRequest},lm.prototype.i=function(){return{}},im=new lm;var hm=45e3,dm={},fm={};function pm(e,t,n){e.L=1,e.v=Am(Cm(t)),e.s=n,e.S=!0,mm(e,null)}function mm(e,t){e.G=Date.now(),bm(e),e.A=Cm(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Km(n.i,"t",r),e.C=0,n=e.l.J,e.h=new um,e.g=Hg(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Lp(wf(e.Pa,e,e.g),e.O)),$p(e.U,e.g,"readystatechange",e.nb),t=e.I?tp(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Gp(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.W,e.s)}function gm(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function ym(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=vm(e,n),r==fm){4==t&&(e.o=4,Yp(14),i=!1),Bp(e.j,e.m,null,"[Incomplete Response]");break}if(r==dm){e.o=4,Yp(15),Bp(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Bp(e.j,e.m,r,null),Em(e,r)}gm(e)&&r!=fm&&r!=dm&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Yp(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Lg(t),t.M=!0,Yp(11))):(Bp(e.j,e.m,n,"[Invalid Chunked Response]"),_m(e),km(e))}function vm(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?fm:(n=Number(t.substring(n,r)),isNaN(n)?dm:(r+=1)+n>t.length?fm:(t=t.slice(r,r+n),e.C=r+n,t))}function bm(e){e.Y=Date.now()+e.P,wm(e,e.P)}function wm(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Jp(wf(e.lb,e),t)}function xm(e){e.B&&(ff.clearTimeout(e.B),e.B=null)}function km(e){0==e.l.H||e.J||$g(e.l,e)}function _m(e){xm(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Dp(e.V),zp(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Em(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||Jm(n.i,e)))if(!e.K&&Jm(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;Fg(n),Ng(n)}Mg(n),Yp(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=Jp(wf(n.ib,n),6e3));if(1>=Xm(n.i)&&n.oa){try{n.oa()}catch(e){}n.oa=void 0}}else Vg(n,11)}else if((e.K||n.g==e)&&Fg(n),!Nf(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.K=c[1],n.pa=c[2];const t=c[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=c[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Zm(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,jm(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=e;if((r=n).wa=qg(r,r.J?r.pa:null,r.Y),o.K){eg(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(xm(a),bm(a)),r.g=o}else Og(r);0<n.j.length&&Pg(n)}else"stop"!=c[0]&&"close"!=c[0]||Vg(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Vg(n,7):Cg(n):"noop"!=c[0]&&n.h&&n.h.Aa(c),n.A=0)}Gp()}catch(e){}}function Im(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(pf(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(pf(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(pf(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(cf=cm.prototype).setTimeout=function(e){this.P=e},cf.nb=function(e){e=e.target;const t=this.M;t&&3==kg(e)?t.l():this.Pa(e)},cf.Pa=function(e){try{if(e==this.g)e:{const u=kg(this.g);var t=this.g.Ia();this.g.da();if(!(3>u)&&(3!=u||Ff||this.g&&(this.h.h||this.g.ja()||_g(this.g)))){this.J||4!=u||7==t||Gp(),xm(this);var n=this.g.da();this.ca=n;t:if(gm(this)){var r=_g(this.g);e="";var i=r.length,s=4==kg(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){_m(this),km(this);var o="";break t}this.h.i=new ff.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Nf(a)){var c=a;break t}}c=null}if(!(n=c)){this.i=!1,this.o=3,Yp(12),_m(this),km(this);break e}Bp(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Em(this,n)}this.S?(ym(this,u,o),Ff&&this.i&&3==u&&($p(this.U,this.V,"tick",this.mb),this.V.start())):(Bp(this.j,this.m,o,null),Em(this,o)),4==u&&_m(this),this.i&&!this.J&&(4==u?$g(this.l,this):(this.i=!1,bm(this)))}else(function(e){const t={};e=(e.g&&2<=kg(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(Nf(e[r]))continue;var n=Sp(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Yp(12)):(this.o=0,Yp(13)),_m(this),km(this)}}}catch(e){}},cf.mb=function(){if(this.g){var e=kg(this.g),t=this.g.ja();this.C<t.length&&(xm(this),ym(this,e,t),this.i&&4!=e&&bm(this))}},cf.cancel=function(){this.J=!0,_m(this)},cf.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.L&&(Gp(),Yp(17)),_m(this),this.o=2,km(this)):wm(this,this.Y-e)};var Sm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tm(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Tm){this.h=e.h,Nm(this,e.j),this.s=e.s,this.g=e.g,Rm(this,e.m),this.l=e.l;var t=e.i,n=new Vm;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Pm(this,n),this.o=e.o}else e&&(t=String(e).match(Sm))?(this.h=!1,Nm(this,t[1]||"",!0),this.s=Dm(t[2]||""),this.g=Dm(t[3]||"",!0),Rm(this,t[4]),this.l=Dm(t[5]||"",!0),Pm(this,t[6]||"",!0),this.o=Dm(t[7]||"")):(this.h=!1,this.i=new Vm(null,this.h))}function Cm(e){return new Tm(e)}function Nm(e,t,n){e.j=n?Dm(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Rm(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Pm(e,t,n){t instanceof Vm?(e.i=t,function(e,t){t&&!e.j&&(Bm(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(qm(this,t),Km(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Om(t,$m)),e.i=new Vm(t,e.h))}function jm(e,t,n){e.i.set(t,n)}function Am(e){return jm(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Dm(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Om(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Mm),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Mm(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Tm.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Om(t,Lm,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Om(t,Lm,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Om(n,"/"==n.charAt(0)?Fm:Um,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Om(n,zm)),e.join("")};var Lm=/[#\/\?@]/g,Um=/[#\?:]/g,Fm=/[#\?]/g,$m=/[#\?@]/g,zm=/#/g;function Vm(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Bm(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function qm(e,t){Bm(e),t=Wm(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Hm(e,t){return Bm(e),t=Wm(e,t),e.g.has(t)}function Km(e,t,n){qm(e,t),0<n.length&&(e.i=null,e.g.set(Wm(e,t),If(n)),e.h+=n.length)}function Wm(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(cf=Vm.prototype).add=function(e,t){Bm(this),this.i=null,e=Wm(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},cf.forEach=function(e,t){Bm(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},cf.ta=function(){Bm(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},cf.Z=function(e){Bm(this);let t=[];if("string"==typeof e)Hm(this,e)&&(t=t.concat(this.g.get(Wm(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},cf.set=function(e,t){return Bm(this),this.i=null,Hm(this,e=Wm(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},cf.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},cf.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Gm(e){this.l=e||Qm,ff.PerformanceNavigationTiming?e=0<(e=ff.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(ff.g&&ff.g.Ka&&ff.g.Ka()&&ff.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Qm=10;function Ym(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Xm(e){return e.h?1:e.g?e.g.size:0}function Jm(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Zm(e,t){e.g?e.g.add(t):e.h=t}function eg(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function tg(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return If(e.i)}Gm.prototype.cancel=function(){if(this.i=tg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var ng=class{stringify(e){return ff.JSON.stringify(e,void 0)}parse(e){return ff.JSON.parse(e,void 0)}};function rg(){this.g=new ng}function ig(e,t,n){const r=n||"";try{Im(e,(function(e,n){let i=e;mf(e)&&(i=kp(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function sg(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function og(e){this.l=e.fc||null,this.j=e.ob||!1}function ag(e,t){bp.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=lg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}kf(og,tm),og.prototype.g=function(){return new ag(this.l,this.j)},og.prototype.i=function(e){return function(){return e}}({}),kf(ag,bp);var lg=0;function cg(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function ug(e){e.readyState=4,e.l=null,e.j=null,e.A=null,hg(e)}function hg(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(cf=ag.prototype).open=function(e,t){if(this.readyState!=lg)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,hg(this)},cf.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||ff).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},cf.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ug(this)),this.readyState=lg},cf.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,hg(this)),this.g&&(this.readyState=3,hg(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==ff.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cg(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},cf.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ug(this):hg(this),3==this.readyState&&cg(this)}},cf.Za=function(e){this.g&&(this.response=this.responseText=e,ug(this))},cf.Ya=function(e){this.g&&(this.response=e,ug(this))},cf.ka=function(){this.g&&ug(this)},cf.setRequestHeader=function(e,t){this.v.append(e,t)},cf.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},cf.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(ag.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var dg=ff.JSON.parse;function fg(e){bp.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=pg,this.L=this.M=!1}kf(fg,bp);var pg="",mg=/^https?$/i,gg=["POST","PUT"];function yg(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,vg(e),wg(e)}function vg(e){e.F||(e.F=!0,wp(e,"complete"),wp(e,"error"))}function bg(e){if(e.h&&void 0!==df&&(!e.C[1]||4!=kg(e)||2!=e.da()))if(e.v&&4==kg(e))Op(e.La,0,e);else if(wp(e,"readystatechange"),4==kg(e)){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.I).match(Sm)[1]||null;!i&&ff.self&&ff.self.location&&(i=ff.self.location.protocol.slice(0,-1)),r=!mg.test(i?i.toLowerCase():"")}n=r}if(n)wp(e,"complete"),wp(e,"success");else{e.m=6;try{var s=2<kg(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",vg(e)}}finally{wg(e)}}}function wg(e,t){if(e.g){xg(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||wp(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function xg(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(ff.clearTimeout(e.A),e.A=null)}function kg(e){return e.g?e.g.readyState:0}function _g(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case pg:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Eg(e){let t="";return ep(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Ig(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Eg(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):jm(e,t,n))}function Sg(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Tg(e){this.Ga=0,this.j=[],this.l=new Vp,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Sg("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Sg("baseRetryDelayMs",5e3,e),this.hb=Sg("retryDelaySeedMs",1e4,e),this.eb=Sg("forwardChannelMaxRetries",2,e),this.xa=Sg("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Gm(e&&e.concurrentRequestLimit),this.Ja=new rg,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Cg(e){if(Rg(e),3==e.H){var t=e.W++,n=Cm(e.I);if(jm(n,"SID",e.K),jm(n,"RID",t),jm(n,"TYPE","terminate"),Ag(e,n),(t=new cm(e,e.l,t)).L=2,t.v=Am(Cm(n)),n=!1,ff.navigator&&ff.navigator.sendBeacon)try{n=ff.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&ff.Image&&((new Image).src=t.v,n=!0),n||(t.g=Hg(t.l,null),t.g.ha(t.v)),t.G=Date.now(),bm(t)}Bg(e)}function Ng(e){e.g&&(Lg(e),e.g.cancel(),e.g=null)}function Rg(e){Ng(e),e.u&&(ff.clearTimeout(e.u),e.u=null),Fg(e),e.i.cancel(),e.m&&("number"==typeof e.m&&ff.clearTimeout(e.m),e.m=null)}function Pg(e){if(!Ym(e.i)&&!e.m){e.m=!0;var t=e.Na;Cp||Pp(),Np||(Cp(),Np=!0),Rp.add(t,e),e.C=0}}function jg(e,t){var n;n=t?t.m:e.W++;const r=Cm(e.I);jm(r,"SID",e.K),jm(r,"RID",n),jm(r,"AID",e.V),Ag(e,r),e.o&&e.s&&Ig(r,e.o,e.s),n=new cm(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Dg(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Zm(e.i,n),pm(n,r,t)}function Ag(e,t){e.na&&ep(e.na,(function(e,n){jm(t,n,e)})),e.h&&Im({},(function(e,n){jm(t,n,e)}))}function Dg(e,t,n){n=Math.min(e.j.length,n);var r=e.h?wf(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=t,0>n)t=Math.max(0,i[o].g-100),s=!1;else try{ig(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Og(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Cp||Pp(),Np||(Cp(),Np=!0),Rp.add(t,e),e.A=0}}function Mg(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=Jp(wf(e.Ma,e),zg(e,e.A)),e.A++,!0)}function Lg(e){null!=e.B&&(ff.clearTimeout(e.B),e.B=null)}function Ug(e){e.g=new cm(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Cm(e.wa);jm(t,"RID","rpc"),jm(t,"SID",e.K),jm(t,"AID",e.V),jm(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&jm(t,"TO",e.qa),jm(t,"TYPE","xmlhttp"),Ag(e,t),e.o&&e.s&&Ig(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Am(Cm(t)),n.s=null,n.S=!0,mm(n,e)}function Fg(e){null!=e.v&&(ff.clearTimeout(e.v),e.v=null)}function $g(e,t){var n=null;if(e.g==t){Fg(e),Lg(e),e.g=null;var r=2}else{if(!Jm(e.i,t))return;n=t.F,eg(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;wp(r=Kp(),new Xp(r,n)),Pg(e)}else Og(e);else if(3==(i=t.o)||0==i&&0<t.ca||!(1==r&&function(e,t){return!(Xm(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.j=t.F.concat(e.j),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=Jp(wf(e.Na,e,t),zg(e,e.C)),e.C++,0)))}(e,t)||2==r&&Mg(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Vg(e,5);break;case 4:Vg(e,10);break;case 3:Vg(e,6);break;default:Vg(e,2)}}function zg(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Vg(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=wf(e.pb,e);n||(n=new Tm("//www.google.com/images/cleardot.gif"),ff.location&&"http"==ff.location.protocol||Nm(n,"https"),Am(n)),function(e,t){const n=new Vp;if(ff.Image){const r=new Image;r.onload=xf(sg,n,r,"TestLoadImage: loaded",!0,t),r.onerror=xf(sg,n,r,"TestLoadImage: error",!1,t),r.onabort=xf(sg,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=xf(sg,n,r,"TestLoadImage: timeout",!1,t),ff.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Yp(2);e.H=0,e.h&&e.h.za(t),Bg(e),Rg(e)}function Bg(e){if(e.H=0,e.ma=[],e.h){const t=tg(e.i);0==t.length&&0==e.j.length||(Sf(e.ma,t),Sf(e.ma,e.j),e.i.i.length=0,If(e.j),e.j.length=0),e.h.ya()}}function qg(e,t,n){var r=n instanceof Tm?Cm(n):new Tm(n);if(""!=r.g)t&&(r.g=t+"."+r.g),Rm(r,r.m);else{var i=ff.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Tm(null);r&&Nm(s,r),t&&(s.g=t),i&&Rm(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&jm(r,n,t),jm(r,"VER",e.ra),Ag(e,r),r}function Hg(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ha&&!e.va?new fg(new og({ob:!0})):new fg(e.va)).Oa(e.J),t}function Kg(){}function Wg(){if(Lf&&!(10<=Number(Wf)))throw Error("Environmental error: no available transport.")}function Gg(e,t){bp.call(this),this.g=new Tg(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Nf(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Nf(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Xg(this)}function Qg(e){om.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Yg(){am.call(this),this.status=1}function Xg(e){this.g=e}function Jg(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Zg(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=n+(o<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(t=n+((o=t+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(t^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function ey(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}(cf=fg.prototype).Oa=function(e){this.M=e},cf.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():im.g(),this.C=this.u?nm(this.u):nm(im),this.g.onreadystatechange=wf(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void yg(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=ff.FormData&&e instanceof ff.FormData,!(0<=Ef(gg,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{xg(this),0<this.B&&((this.L=function(e){return Lf&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=wf(this.ua,this)):this.A=Op(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){yg(this,e)}},cf.ua=function(){void 0!==df&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,wp(this,"timeout"),this.abort(8))},cf.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,wp(this,"complete"),wp(this,"abort"),wg(this))},cf.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wg(this,!0)),fg.$.N.call(this)},cf.La=function(){this.s||(this.G||this.v||this.l?bg(this):this.kb())},cf.kb=function(){bg(this)},cf.isActive=function(){return!!this.g},cf.da=function(){try{return 2<kg(this)?this.g.status:-1}catch(e){return-1}},cf.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},cf.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),dg(t)}},cf.Ia=function(){return this.m},cf.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(cf=Tg.prototype).ra=8,cf.H=1,cf.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new cm(this,this.l,e);let s=this.s;if(this.U&&(s?(s=tp(s),rp(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Dg(this,i,t),jm(n=Cm(this.I),"RID",e),jm(n,"CVER",22),this.F&&jm(n,"X-HTTP-Session-Id",this.F),Ag(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Eg(s)))+"&"+t:this.o&&Ig(n,this.o,s)),Zm(this.i,i),this.bb&&jm(n,"TYPE","init"),this.P?(jm(n,"$req",t),jm(n,"SID","null"),i.aa=!0,pm(i,n,null)):pm(i,n,t),this.H=2}}else 3==this.H&&(e?jg(this,e):0==this.j.length||Ym(this.i)||jg(this))},cf.Ma=function(){if(this.u=null,Ug(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Jp(wf(this.jb,this),e)}},cf.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Yp(10),Ng(this),Ug(this))},cf.ib=function(){null!=this.v&&(this.v=null,Ng(this),Mg(this),Yp(19))},cf.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Yp(2)):(this.l.info("Failed to ping google.com"),Yp(1))},cf.isActive=function(){return!!this.h&&this.h.isActive(this)},(cf=Kg.prototype).Ba=function(){},cf.Aa=function(){},cf.za=function(){},cf.ya=function(){},cf.isActive=function(){return!0},cf.Va=function(){},Wg.prototype.g=function(e,t){return new Gg(e,t)},kf(Gg,bp),Gg.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Yp(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=qg(e,null,e.Y),Pg(e)},Gg.prototype.close=function(){Cg(this.g)},Gg.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=kp(e),e=n);t.j.push(new class{constructor(e,t){this.g=e,this.map=t}}(t.fb++,e)),3==t.H&&Pg(t)},Gg.prototype.N=function(){this.g.h=null,delete this.j,Cg(this.g),delete this.g,Gg.$.N.call(this)},kf(Qg,om),kf(Yg,am),kf(Xg,Kg),Xg.prototype.Ba=function(){wp(this.g,"a")},Xg.prototype.Aa=function(e){wp(this.g,new Qg(e))},Xg.prototype.za=function(e){wp(this.g,new Yg)},Xg.prototype.ya=function(){wp(this.g,"b")},kf(Jg,(function(){this.blockSize=-1})),Jg.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Jg.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)Zg(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Zg(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Zg(this,r),i=0;break}}this.h=i,this.i+=t},Jg.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var ty={};function ny(e){return-128<=e&&128>e?function(e,t){var n=ty;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new ey([0|e],0>e?-1:0)})):new ey([0|e],0>e?-1:0)}function ry(e){if(isNaN(e)||!isFinite(e))return sy;if(0>e)return uy(ry(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=iy;return new ey(t,0)}var iy=4294967296,sy=ny(0),oy=ny(1),ay=ny(16777216);function ly(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function cy(e){return-1==e.h}function uy(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new ey(n,~e.h).add(oy)}function hy(e,t){return e.add(uy(t))}function dy(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function fy(e,t){this.g=e,this.h=t}function py(e,t){if(ly(t))throw Error("division by zero");if(ly(e))return new fy(sy,sy);if(cy(e))return t=py(uy(e),t),new fy(uy(t.g),uy(t.h));if(cy(t))return t=py(e,uy(t)),new fy(uy(t.g),t.h);if(30<e.g.length){if(cy(e)||cy(t))throw Error("slowDivide_ only works with positive integers.");for(var n=oy,r=t;0>=r.X(e);)n=my(n),r=my(r);var i=gy(n,1),s=gy(r,1);for(r=gy(r,2),n=gy(n,2);!ly(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=gy(r,1),n=gy(n,1)}return t=hy(e,i.R(t)),new fy(i,t)}for(i=sy;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),o=(s=ry(n)).R(t);cy(o)||0<o.X(e);)o=(s=ry(n-=r)).R(t);ly(s)&&(s=oy),i=i.add(s),e=hy(e,o)}return new fy(i,e)}function my(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new ey(n,e.h)}function gy(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new ey(i,e.h)}(cf=ey.prototype).ea=function(){if(cy(this))return-uy(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:iy+r)*t,t*=iy}return e},cf.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(ly(this))return"0";if(cy(this))return"-"+uy(this).toString(e);for(var t=ry(Math.pow(e,6)),n=this,r="";;){var i=py(n,t).g,s=((0<(n=hy(n,i.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(ly(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},cf.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},cf.X=function(e){return cy(e=hy(this,e))?-1:ly(e)?0:1},cf.abs=function(){return cy(this)?uy(this):this},cf.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ey(n,-2147483648&n[n.length-1]?-1:0)},cf.R=function(e){if(ly(this)||ly(e))return sy;if(cy(this))return cy(e)?uy(this).R(uy(e)):uy(uy(this).R(e));if(cy(e))return uy(this.R(uy(e)));if(0>this.X(ay)&&0>e.X(ay))return ry(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,l=65535&e.D(i);n[2*r+2*i]+=o*l,dy(n,2*r+2*i),n[2*r+2*i+1]+=s*l,dy(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,dy(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,dy(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new ey(n,0)},cf.gb=function(e){return py(this,e).h},cf.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new ey(n,this.h&e.h)},cf.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new ey(n,this.h|e.h)},cf.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new ey(n,this.h^e.h)},Wg.prototype.createWebChannel=Wg.prototype.g,Gg.prototype.send=Gg.prototype.u,Gg.prototype.open=Gg.prototype.m,Gg.prototype.close=Gg.prototype.close,Zp.NO_ERROR=0,Zp.TIMEOUT=8,Zp.HTTP_ERROR=6,em.COMPLETE="complete",rm.EventType=sm,sm.OPEN="a",sm.CLOSE="b",sm.ERROR="c",sm.MESSAGE="d",bp.prototype.listen=bp.prototype.O,fg.prototype.listenOnce=fg.prototype.P,fg.prototype.getLastError=fg.prototype.Sa,fg.prototype.getLastErrorCode=fg.prototype.Ia,fg.prototype.getStatus=fg.prototype.da,fg.prototype.getResponseJson=fg.prototype.Wa,fg.prototype.getResponseText=fg.prototype.ja,fg.prototype.send=fg.prototype.ha,fg.prototype.setWithCredentials=fg.prototype.Oa,Jg.prototype.digest=Jg.prototype.l,Jg.prototype.reset=Jg.prototype.reset,Jg.prototype.update=Jg.prototype.j,ey.prototype.add=ey.prototype.add,ey.prototype.multiply=ey.prototype.R,ey.prototype.modulo=ey.prototype.gb,ey.prototype.compare=ey.prototype.X,ey.prototype.toNumber=ey.prototype.ea,ey.prototype.toString=ey.prototype.toString,ey.prototype.getBits=ey.prototype.D,ey.fromNumber=ry,ey.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return uy(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=ry(Math.pow(n,8)),i=sy,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),n);8>o?(o=ry(Math.pow(n,o)),i=i.R(o).add(ry(a))):i=(i=i.R(r)).add(ry(a))}return i};var yy=hf.createWebChannelTransport=function(){return new Wg},vy=hf.getStatEventTarget=function(){return Kp()},by=hf.ErrorCode=Zp,wy=hf.EventType=em,xy=hf.Event=qp,ky=hf.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},_y=hf.FetchXmlHttpFactory=og,Ey=hf.WebChannel=rm,Iy=hf.XhrIo=fg,Sy=hf.Md5=Jg,Ty=hf.Integer=ey;const Cy="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ny.UNAUTHENTICATED=new Ny(null),Ny.GOOGLE_CREDENTIALS=new Ny("google-credentials-uid"),Ny.FIRST_PARTY=new Ny("first-party-uid"),Ny.MOCK_USER=new Ny("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ry="9.22.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py=new aa("@firebase/firestore");function jy(){return Py.logLevel}function Ay(e,...t){if(Py.logLevel<=ta.DEBUG){const n=t.map(My);Py.debug(`Firestore (${Ry}): ${e}`,...n)}}function Dy(e,...t){if(Py.logLevel<=ta.ERROR){const n=t.map(My);Py.error(`Firestore (${Ry}): ${e}`,...n)}}function Oy(e,...t){if(Py.logLevel<=ta.WARN){const n=t.map(My);Py.warn(`Firestore (${Ry}): ${e}`,...n)}}function My(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(e="Unexpected state"){const t=`FIRESTORE (${Ry}) INTERNAL ASSERTION FAILED: `+e;throw Dy(t),new Error(t)}function Uy(e,t){e||Ly()}function Fy(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class zy extends jo{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ny.UNAUTHENTICATED)))}shutdown(){}}class Hy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Ky{constructor(e){this.t=e,this.currentUser=Ny.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Vy;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vy,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Ay("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Ay("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vy)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Ay("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Uy("string"==typeof t.accessToken),new By(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Uy(null===e||"string"==typeof e),new Ny(e)}}class Wy{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=Ny.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Gy{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Wy(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Ny.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Qy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yy{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&Ay("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,Ay("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Ay("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):Ay("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Uy("string"==typeof e.token),this.T=e.token,new Qy(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xy(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Xy(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Zy(e,t){return e<t?-1:e>t?1:0}function ev(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tv{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new zy($y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new zy($y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new zy($y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new zy($y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return tv.fromMillis(Date.now())}static fromDate(e){return tv.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new tv(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Zy(this.nanoseconds,e.nanoseconds):Zy(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){this.timestamp=e}static fromTimestamp(e){return new nv(e)}static min(){return new nv(new tv(0,0))}static max(){return new nv(new tv(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,t,n){void 0===t?t=0:t>e.length&&Ly(),void 0===n?n=e.length-t:n>e.length-t&&Ly(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===rv.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof rv?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class iv extends rv{construct(e,t,n){return new iv(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new zy($y.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new iv(t)}static emptyPath(){return new iv([])}}const sv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ov extends rv{construct(e,t,n){return new ov(e,t,n)}static isValidIdentifier(e){return sv.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ov.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ov(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new zy($y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new zy($y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new zy($y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new zy($y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ov(t)}static emptyPath(){return new ov([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.path=e}static fromPath(e){return new av(iv.fromString(e))}static fromName(e){return new av(iv.fromString(e).popFirst(5))}static empty(){return new av(iv.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===iv.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return iv.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new av(new iv(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}lv.UNKNOWN_ID=-1;function cv(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=nv.fromTimestamp(1e9===r?new tv(n+1,0):new tv(n,r));return new hv(i,av.empty(),t)}function uv(e){return new hv(e.readTime,e.key,-1)}class hv{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new hv(nv.min(),av.empty(),-1)}static max(){return new hv(nv.max(),av.empty(),-1)}}function dv(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=av.comparator(e.documentKey,t.documentKey),0!==n?n:Zy(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mv(e){if(e.code!==$y.FAILED_PRECONDITION||e.message!==fv)throw e;Ay("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ly(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new gv(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof gv?t:gv.resolve(t)}catch(e){return gv.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):gv.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):gv.reject(t)}static resolve(e){return new gv(((t,n)=>{t(e)}))}static reject(e){return new gv(((t,n)=>{n(e)}))}static waitFor(e){return new gv(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=gv.resolve(!1);for(const n of e)t=t.next((e=>e?gv.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new gv(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const l=a;t(e[l]).next((e=>{s[l]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new gv(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vv{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function bv(e){return null==e}function wv(e){return 0===e&&1/e==-1/0}function xv(e){return"number"==typeof e&&Number.isInteger(e)&&!wv(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vv.ct=-1;const kv=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],_v=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ev=_v;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Iv(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Sv(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Tv(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,t){this.comparator=e,this.root=t||Rv.EMPTY}insert(e,t){return new Cv(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Rv.BLACK,null,null))}remove(e){return new Cv(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rv.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Nv(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Nv(this.root,e,this.comparator,!1)}getReverseIterator(){return new Nv(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Nv(this.root,e,this.comparator,!0)}}class Nv{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rv{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Rv.RED,this.left=null!=r?r:Rv.EMPTY,this.right=null!=i?i:Rv.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Rv(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Rv.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Rv.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rv.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rv.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ly();if(this.right.isRed())throw Ly();const e=this.left.check();if(e!==this.right.check())throw Ly();return e+(this.isRed()?0:1)}}Rv.EMPTY=null,Rv.RED=!0,Rv.BLACK=!1,Rv.EMPTY=new class{constructor(){this.size=0}get key(){throw Ly()}get value(){throw Ly()}get color(){throw Ly()}get left(){throw Ly()}get right(){throw Ly()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Rv(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pv{constructor(e){this.comparator=e,this.data=new Cv(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new jv(this.data.getIterator())}getIteratorFrom(e){return new jv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Pv))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Pv(this.comparator);return t.data=e,t}}class jv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Av{constructor(e){this.fields=e,e.sort(ov.comparator)}static empty(){return new Av([])}unionWith(e){let t=new Pv(ov.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new Av(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ev(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ov{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Dv("Invalid base64 string: "+e):e}}(e);return new Ov(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ov(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Zy(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ov.EMPTY_BYTE_STRING=new Ov("");const Mv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lv(e){if(Uy(!!e),"string"==typeof e){let t=0;const n=Mv.exec(e);if(Uy(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Uv(e.seconds),nanos:Uv(e.nanos)}}function Uv(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Fv(e){return"string"==typeof e?Ov.fromBase64String(e):Ov.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function zv(e){const t=e.mapValue.fields.__previous_value__;return $v(t)?zv(t):t}function Vv(e){const t=Lv(e.mapValue.fields.__local_write_time__.timestampValue);return new tv(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e,t,n,r,i,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class qv{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new qv("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof qv&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Kv(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?$v(e)?4:sb(e)?9007199254740991:10:Ly()}function Wv(e,t){if(e===t)return!0;const n=Kv(e);if(n!==Kv(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Vv(e).isEqual(Vv(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Lv(e.timestampValue),r=Lv(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Fv(e.bytesValue).isEqual(Fv(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Uv(e.geoPointValue.latitude)===Uv(t.geoPointValue.latitude)&&Uv(e.geoPointValue.longitude)===Uv(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Uv(e.integerValue)===Uv(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Uv(e.doubleValue),r=Uv(t.doubleValue);return n===r?wv(n)===wv(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return ev(e.arrayValue.values||[],t.arrayValue.values||[],Wv);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Iv(n)!==Iv(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!Wv(n[e],r[e])))return!1;return!0}(e,t);default:return Ly()}}function Gv(e,t){return void 0!==(e.values||[]).find((e=>Wv(e,t)))}function Qv(e,t){if(e===t)return 0;const n=Kv(e),r=Kv(t);if(n!==r)return Zy(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Zy(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Uv(e.integerValue||e.doubleValue),r=Uv(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Yv(e.timestampValue,t.timestampValue);case 4:return Yv(Vv(e),Vv(t));case 5:return Zy(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Fv(e),r=Fv(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=Zy(n[e],r[e]);if(0!==t)return t}return Zy(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Zy(Uv(e.latitude),Uv(t.latitude));return 0!==n?n:Zy(Uv(e.longitude),Uv(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=Qv(n[e],r[e]);if(t)return t}return Zy(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Hv.mapValue&&t===Hv.mapValue)return 0;if(e===Hv.mapValue)return 1;if(t===Hv.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=Zy(r[e],s[e]);if(0!==t)return t;const o=Qv(n[r[e]],i[s[e]]);if(0!==o)return o}return Zy(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Ly()}}function Yv(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Zy(e,t);const n=Lv(e),r=Lv(t),i=Zy(n.seconds,r.seconds);return 0!==i?i:Zy(n.nanos,r.nanos)}function Xv(e){return Jv(e)}function Jv(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Lv(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Fv(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,av.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Jv(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Jv(e.fields[i])}`;return n+"}"}(e.mapValue):Ly()}function Zv(e){return!!e&&"integerValue"in e}function eb(e){return!!e&&"arrayValue"in e}function tb(e){return!!e&&"nullValue"in e}function nb(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function rb(e){return!!e&&"mapValue"in e}function ib(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Sv(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=ib(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ib(e.arrayValue.values[n]);return t}return Object.assign({},e)}function sb(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ob{constructor(e){this.value=e}static empty(){return new ob({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!rb(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ib(t)}setAll(e){let t=ov.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=ib(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());rb(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Wv(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];rb(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Sv(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new ob(ib(this.value))}}function ab(e){const t=[];return Sv(e.fields,((e,n)=>{const r=new ov([e]);if(rb(n)){const e=ab(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Av(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class lb{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new lb(e,0,nv.min(),nv.min(),nv.min(),ob.empty(),0)}static newFoundDocument(e,t,n,r){return new lb(e,1,t,nv.min(),n,r,0)}static newNoDocument(e,t){return new lb(e,2,t,nv.min(),nv.min(),ob.empty(),0)}static newUnknownDocument(e,t){return new lb(e,3,t,nv.min(),nv.min(),ob.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(nv.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ob.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ob.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=nv.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof lb&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lb(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,t){this.position=e,this.inclusive=t}}function ub(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?av.comparator(av.fromName(o.referenceValue),n.key):Qv(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function hb(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Wv(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,t="asc"){this.field=e,this.dir=t}}function fb(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{}class mb extends pb{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new _b(e,t,n):"array-contains"===t?new Tb(e,n):"in"===t?new Cb(e,n):"not-in"===t?new Nb(e,n):"array-contains-any"===t?new Rb(e,n):new mb(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Eb(e,n):new Ib(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Qv(t,this.value)):null!==t&&Kv(this.value)===Kv(t)&&this.matchesComparison(Qv(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Ly()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class gb extends pb{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new gb(e,t)}matches(e){return yb(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((e=>e.isInequality()));return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function yb(e){return"and"===e.op}function vb(e){return bb(e)&&yb(e)}function bb(e){for(const t of e.filters)if(t instanceof gb)return!1;return!0}function wb(e){if(e instanceof mb)return e.field.canonicalString()+e.op.toString()+Xv(e.value);if(vb(e))return e.filters.map((e=>wb(e))).join(",");{const t=e.filters.map((e=>wb(e))).join(",");return`${e.op}(${t})`}}function xb(e,t){return e instanceof mb?function(e,t){return t instanceof mb&&e.op===t.op&&e.field.isEqual(t.field)&&Wv(e.value,t.value)}(e,t):e instanceof gb?function(e,t){return t instanceof gb&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&xb(n,t.filters[r])),!0)}(e,t):void Ly()}function kb(e){return e instanceof mb?function(e){return`${e.field.canonicalString()} ${e.op} ${Xv(e.value)}`}(e):e instanceof gb?function(e){return e.op.toString()+" {"+e.getFilters().map(kb).join(" ,")+"}"}(e):"Filter"}class _b extends mb{constructor(e,t,n){super(e,t,n),this.key=av.fromName(n.referenceValue)}matches(e){const t=av.comparator(e.key,this.key);return this.matchesComparison(t)}}class Eb extends mb{constructor(e,t){super(e,"in",t),this.keys=Sb("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ib extends mb{constructor(e,t){super(e,"not-in",t),this.keys=Sb("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Sb(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>av.fromName(e.referenceValue)))}class Tb extends mb{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return eb(t)&&Gv(t.arrayValue,this.value)}}class Cb extends mb{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Gv(this.value.arrayValue,t)}}class Nb extends mb{constructor(e,t){super(e,"not-in",t)}matches(e){if(Gv(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Gv(this.value.arrayValue,t)}}class Rb extends mb{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!eb(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Gv(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.dt=null}}function jb(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Pb(e,t,n,r,i,s,o)}function Ab(e){const t=Fy(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>wb(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),bv(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Xv(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Xv(e))).join(",")),t.dt=e}return t.dt}function Db(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!fb(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!xb(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!hb(e.startAt,t.startAt)&&hb(e.endAt,t.endAt)}function Ob(e){return av.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mb{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function Lb(e,t,n,r,i,s,o,a){return new Mb(e,t,n,r,i,s,o,a)}function Ub(e){return new Mb(e)}function Fb(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function $b(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function zb(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Vb(e){return null!==e.collectionGroup}function Bb(e){const t=Fy(e);if(null===t.wt){t.wt=[];const e=zb(t),n=$b(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new db(e)),t.wt.push(new db(ov.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new db(ov.keyField(),e))}}}return t.wt}function qb(e){const t=Fy(e);if(!t._t)if("F"===t.limitType)t._t=jb(t.path,t.collectionGroup,Bb(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Bb(t)){const t="desc"===n.dir?"asc":"desc";e.push(new db(n.field,t))}const n=t.endAt?new cb(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new cb(t.startAt.position,t.startAt.inclusive):null;t._t=jb(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function Hb(e,t,n){return new Mb(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Kb(e,t){return Db(qb(e),qb(t))&&e.limitType===t.limitType}function Wb(e){return`${Ab(qb(e))}|lt:${e.limitType}`}function Gb(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>kb(e))).join(", ")}]`),bv(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Xv(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Xv(e))).join(",")),`Target(${t})`}(qb(e))}; limitType=${e.limitType})`}function Qb(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):av.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Bb(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=ub(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Bb(e),t))&&!(e.endAt&&!function(e,t,n){const r=ub(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Bb(e),t))}(e,t)}function Yb(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Xb(e){return(t,n)=>{let r=!1;for(const i of Bb(e)){const e=Jb(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Jb(e,t,n){const r=e.field.isKeyField()?av.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Qv(r,i):Ly()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Ly()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Sv(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return Tv(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=new Cv(av.comparator);function tw(){return ew}const nw=new Cv(av.comparator);function rw(...e){let t=nw;for(const n of e)t=t.insert(n.key,n);return t}function iw(e){let t=nw;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function sw(){return aw()}function ow(){return aw()}function aw(){return new Zb((e=>e.toString()),((e,t)=>e.isEqual(t)))}const lw=new Cv(av.comparator),cw=new Pv(av.comparator);function uw(...e){let t=cw;for(const n of e)t=t.add(n);return t}const hw=new Pv(Zy);function dw(){return hw}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wv(t)?"-0":t}}function pw(e){return{integerValue:""+e}}function mw(e,t){return xv(t)?pw(t):fw(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(){this._=void 0}}function yw(e,t,n){return e instanceof ww?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&$v(t)&&(t=zv(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof xw?kw(e,t):e instanceof _w?Ew(e,t):function(e,t){const n=bw(e,t),r=Sw(n)+Sw(e.gt);return Zv(n)&&Zv(e.gt)?pw(r):fw(e.serializer,r)}(e,t)}function vw(e,t,n){return e instanceof xw?kw(e,t):e instanceof _w?Ew(e,t):n}function bw(e,t){var n;return e instanceof Iw?Zv(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null}class ww extends gw{}class xw extends gw{constructor(e){super(),this.elements=e}}function kw(e,t){const n=Tw(t);for(const t of e.elements)n.some((e=>Wv(e,t)))||n.push(t);return{arrayValue:{values:n}}}class _w extends gw{constructor(e){super(),this.elements=e}}function Ew(e,t){let n=Tw(t);for(const t of e.elements)n=n.filter((e=>!Wv(e,t)));return{arrayValue:{values:n}}}class Iw extends gw{constructor(e,t){super(),this.serializer=e,this.gt=t}}function Sw(e){return Uv(e.integerValue||e.doubleValue)}function Tw(e){return eb(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,t){this.field=e,this.transform=t}}class Nw{constructor(e,t){this.version=e,this.transformResults=t}}class Rw{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Rw}static exists(e){return new Rw(void 0,e)}static updateTime(e){return new Rw(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pw(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class jw{}function Aw(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Bw(e.key,Rw.none()):new Uw(e.key,e.data,Rw.none());{const n=e.data,r=ob.empty();let i=new Pv(ov.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Fw(e.key,r,new Av(i.toArray()),Rw.none())}}function Dw(e,t,n){e instanceof Uw?function(e,t,n){const r=e.value.clone(),i=zw(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Fw?function(e,t,n){if(!Pw(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=zw(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll($w(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Ow(e,t,n,r){return e instanceof Uw?function(e,t,n,r){if(!Pw(e.precondition,t))return n;const i=e.value.clone(),s=Vw(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Fw?function(e,t,n,r){if(!Pw(e.precondition,t))return n;const i=Vw(e.fieldTransforms,r,t),s=t.data;return s.setAll($w(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return Pw(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Mw(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=bw(r.transform,e||null);null!=i&&(null===n&&(n=ob.empty()),n.set(r.field,i))}return n||null}function Lw(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&ev(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof xw&&t instanceof xw||e instanceof _w&&t instanceof _w?ev(e.elements,t.elements,Wv):e instanceof Iw&&t instanceof Iw?Wv(e.gt,t.gt):e instanceof ww&&t instanceof ww}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Uw extends jw{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Fw extends jw{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $w(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function zw(e,t,n){const r=new Map;Uy(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,vw(o,a,n[i]))}return r}function Vw(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,yw(e,s,t))}return r}class Bw extends jw{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qw extends jw{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&Dw(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Ow(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Ow(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=ow();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Aw(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(nv.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),uw())}isEqual(e){return this.batchId===e.batchId&&ev(this.mutations,e.mutations,((e,t)=>Lw(e,t)))&&ev(this.baseMutations,e.baseMutations,((e,t)=>Lw(e,t)))}}class Kw{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Uy(e.mutations.length===n.length);let r=lw;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new Kw(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gw{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qw,Yw;function Xw(e){switch(e){default:return Ly();case $y.CANCELLED:case $y.UNKNOWN:case $y.DEADLINE_EXCEEDED:case $y.RESOURCE_EXHAUSTED:case $y.INTERNAL:case $y.UNAVAILABLE:case $y.UNAUTHENTICATED:return!1;case $y.INVALID_ARGUMENT:case $y.NOT_FOUND:case $y.ALREADY_EXISTS:case $y.PERMISSION_DENIED:case $y.FAILED_PRECONDITION:case $y.ABORTED:case $y.OUT_OF_RANGE:case $y.UNIMPLEMENTED:case $y.DATA_LOSS:return!0}}function Jw(e){if(void 0===e)return Dy("GRPC error has no .code"),$y.UNKNOWN;switch(e){case Qw.OK:return $y.OK;case Qw.CANCELLED:return $y.CANCELLED;case Qw.UNKNOWN:return $y.UNKNOWN;case Qw.DEADLINE_EXCEEDED:return $y.DEADLINE_EXCEEDED;case Qw.RESOURCE_EXHAUSTED:return $y.RESOURCE_EXHAUSTED;case Qw.INTERNAL:return $y.INTERNAL;case Qw.UNAVAILABLE:return $y.UNAVAILABLE;case Qw.UNAUTHENTICATED:return $y.UNAUTHENTICATED;case Qw.INVALID_ARGUMENT:return $y.INVALID_ARGUMENT;case Qw.NOT_FOUND:return $y.NOT_FOUND;case Qw.ALREADY_EXISTS:return $y.ALREADY_EXISTS;case Qw.PERMISSION_DENIED:return $y.PERMISSION_DENIED;case Qw.FAILED_PRECONDITION:return $y.FAILED_PRECONDITION;case Qw.ABORTED:return $y.ABORTED;case Qw.OUT_OF_RANGE:return $y.OUT_OF_RANGE;case Qw.UNIMPLEMENTED:return $y.UNIMPLEMENTED;case Qw.DATA_LOSS:return $y.DATA_LOSS;default:return Ly()}}(Yw=Qw||(Qw={}))[Yw.OK=0]="OK",Yw[Yw.CANCELLED=1]="CANCELLED",Yw[Yw.UNKNOWN=2]="UNKNOWN",Yw[Yw.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Yw[Yw.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Yw[Yw.NOT_FOUND=5]="NOT_FOUND",Yw[Yw.ALREADY_EXISTS=6]="ALREADY_EXISTS",Yw[Yw.PERMISSION_DENIED=7]="PERMISSION_DENIED",Yw[Yw.UNAUTHENTICATED=16]="UNAUTHENTICATED",Yw[Yw.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Yw[Yw.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Yw[Yw.ABORTED=10]="ABORTED",Yw[Yw.OUT_OF_RANGE=11]="OUT_OF_RANGE",Yw[Yw.UNIMPLEMENTED=12]="UNIMPLEMENTED",Yw[Yw.INTERNAL=13]="INTERNAL",Yw[Yw.UNAVAILABLE=14]="UNAVAILABLE",Yw[Yw.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zw{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ex}static getOrCreateInstance(){return null===ex&&(ex=new Zw),ex}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let ex=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx=new Ty([4294967295,4294967295],0);function rx(e){const t=tx().encode(e),n=new Sy;return n.update(t),new Uint8Array(n.digest())}function ix(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Ty([n,r],0),new Ty([i,s],0)]}class sx{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ox(`Invalid padding: ${t}`);if(n<0)throw new ox(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new ox(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new ox(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Ty.fromNumber(this.It)}Et(e,t,n){let r=e.add(t.multiply(Ty.fromNumber(n)));return 1===r.compare(nx)&&(r=new Ty([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=rx(e),[n,r]=ix(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,r,e);if(!this.At(t))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new sx(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.It)return;const t=rx(e),[n,r]=ix(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,r,e);this.Rt(t)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class ox extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,lx.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ax(nv.min(),r,new Cv(Zy),tw(),uw())}}class lx{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new lx(n,t,uw(),uw(),uw())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e,t,n,r){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=r}}class ux{constructor(e,t){this.targetId=e,this.Vt=t}}class hx{constructor(e,t,n=Ov.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class dx{constructor(){this.St=0,this.Dt=mx(),this.Ct=Ov.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=uw(),t=uw(),n=uw();return this.Dt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Ly()}})),new lx(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=mx()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class fx{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=tw(),this.zt=px(),this.Wt=new Cv(Zy)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:Ly()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((e,n)=>{this.te(n)&&t(n)}))}ne(e){var t;const n=e.targetId,r=e.Vt.count,i=this.se(n);if(i){const s=i.target;if(Ob(s))if(0===r){const e=new av(s.path);this.Yt(n,e,lb.newNoDocument(e,nv.min()))}else Uy(1===r);else{const i=this.ie(n);if(i!==r){const r=this.re(e,i);if(0!==r){this.ee(n);const e=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=Zw.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var r,i,s,o,a,l;const c={localCacheCount:t,existenceFilterCount:n.count},u=n.unchangedNames;return u&&(c.bloomFilter={applied:0===e,hashCount:null!==(r=null==u?void 0:u.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(o=null===(s=null===(i=null==u?void 0:u.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==o?o:0,padding:null!==(l=null===(a=null==u?void 0:u.bits)||void 0===a?void 0:a.padding)&&void 0!==l?l:0}),c}(r,i,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:r}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,l;try{a=Fv(i).toUint8Array()}catch(e){if(e instanceof Dv)return Oy("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{l=new sx(a,s,o)}catch(e){return Oy(e instanceof ox?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===l.It?1:r!==t-this.oe(e.targetId,l)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Gt.ue(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.vt(s)||(this.Yt(e,n,null),r++)})),r}ce(e){const t=new Map;this.Qt.forEach(((n,r)=>{const i=this.se(r);if(i){if(n.current&&Ob(i.target)){const t=new av(i.target.path);null!==this.jt.get(t)||this.ae(r,t)||this.Yt(r,t,lb.newNoDocument(t,e))}n.Mt&&(t.set(r,n.Ot()),n.Ft())}}));let n=uw();this.zt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.jt.forEach(((t,n)=>n.setReadTime(e)));const r=new ax(e,t,this.Wt,this.jt,n);return this.jt=tw(),this.zt=px(),this.Wt=new Cv(Zy),r}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,t)?r.Bt(t,1):r.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new dx,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new Pv(Zy),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||Ay("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new dx),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function px(){return new Cv(av.comparator)}function mx(){return new Cv(av.comparator)}const gx={asc:"ASCENDING",desc:"DESCENDING"},yx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vx={and:"AND",or:"OR"};class bx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wx(e,t){return e.useProto3Json||bv(t)?t:{value:t}}function xx(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function kx(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function _x(e,t){return xx(e,t.toTimestamp())}function Ex(e){return Uy(!!e),nv.fromTimestamp(function(e){const t=Lv(e);return new tv(t.seconds,t.nanos)}(e))}function Ix(e,t){return function(e){return new iv(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Sx(e){const t=iv.fromString(e);return Uy(Kx(t)),t}function Tx(e,t){return Ix(e.databaseId,t.path)}function Cx(e,t){const n=Sx(t);if(n.get(1)!==e.databaseId.projectId)throw new zy($y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new zy($y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new av(jx(n))}function Nx(e,t){return Ix(e.databaseId,t)}function Rx(e){const t=Sx(e);return 4===t.length?iv.emptyPath():jx(t)}function Px(e){return new iv(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function jx(e){return Uy(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Ax(e,t,n){return{name:Tx(e,t),fields:n.value.mapValue.fields}}function Dx(e,t){let n;if(t instanceof Uw)n={update:Ax(e,t.key,t.value)};else if(t instanceof Bw)n={delete:Tx(e,t.key)};else if(t instanceof Fw)n={update:Ax(e,t.key,t.data),updateMask:Hx(t.fieldMask)};else{if(!(t instanceof qw))return Ly();n={verify:Tx(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof ww)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof xw)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof _w)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Iw)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw Ly()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:_x(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Ly()}(e,t.precondition)),n}function Ox(e,t){return{documents:[Nx(e,t.path)]}}function Mx(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Nx(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Nx(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return qx(gb.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Vx(e.field),direction:Fx(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=wx(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Lx(e){let t=Rx(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Uy(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Ux(e);return t instanceof gb&&vb(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new db(Bx(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,bv(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new cb(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new cb(n,t)}(n.endAt)),Lb(t,i,o,s,a,"F",l,c)}function Ux(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Bx(e.unaryFilter.field);return mb.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Bx(e.unaryFilter.field);return mb.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Bx(e.unaryFilter.field);return mb.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Bx(e.unaryFilter.field);return mb.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ly()}}(e):void 0!==e.fieldFilter?function(e){return mb.create(Bx(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ly()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return gb.create(e.compositeFilter.filters.map((e=>Ux(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Ly()}}(e.compositeFilter.op))}(e):Ly()}function Fx(e){return gx[e]}function $x(e){return yx[e]}function zx(e){return vx[e]}function Vx(e){return{fieldPath:e.canonicalString()}}function Bx(e){return ov.fromServerFormat(e.fieldPath)}function qx(e){return e instanceof mb?function(e){if("=="===e.op){if(nb(e.value))return{unaryFilter:{field:Vx(e.field),op:"IS_NAN"}};if(tb(e.value))return{unaryFilter:{field:Vx(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(nb(e.value))return{unaryFilter:{field:Vx(e.field),op:"IS_NOT_NAN"}};if(tb(e.value))return{unaryFilter:{field:Vx(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vx(e.field),op:$x(e.op),value:e.value}}}(e):e instanceof gb?function(e){const t=e.getFilters().map((e=>qx(e)));return 1===t.length?t[0]:{compositeFilter:{op:zx(e.op),filters:t}}}(e):Ly()}function Hx(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Kx(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e,t,n,r,i=nv.min(),s=nv.min(),o=Ov.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Wx(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Wx(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wx(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wx(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e){this.fe=e}}function Qx(e){const t=Lx({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Hb(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(Uv(e.integerValue));else if("doubleValue"in e){const n=Uv(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),wv(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(`${n.seconds||""}`),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(Fv(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?sb(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):Ly()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const e of Object.keys(n))this.Te(e,t),this.me(n[e],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const e of n)this.me(e,t)}ve(e,t){this.ye(t,37),av.fromName(e).path.forEach((e=>{this.ye(t,60),this.be(e,t)}))}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}Yx.Ve=new Yx;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xx{constructor(){this.rn=new Jx}addToCollectionParentIndex(e,t){return this.rn.add(t),gv.resolve()}getCollectionParents(e,t){return gv.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return gv.resolve()}deleteFieldIndex(e,t){return gv.resolve()}getDocumentsMatchingTarget(e,t){return gv.resolve(null)}getIndexType(e,t){return gv.resolve(0)}getFieldIndexes(e,t){return gv.resolve([])}getNextCollectionGroupToUpdate(e){return gv.resolve(null)}getMinOffset(e,t){return gv.resolve(hv.min())}getMinOffsetFromCollectionGroup(e,t){return gv.resolve(hv.min())}updateCollectionGroup(e,t,n){return gv.resolve()}updateIndexEntries(e,t){return gv.resolve()}}class Jx{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Pv(iv.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Pv(iv.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Zx{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Zx(e,Zx.DEFAULT_COLLECTION_PERCENTILE,Zx.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zx.DEFAULT_COLLECTION_PERCENTILE=10,Zx.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zx.DEFAULT=new Zx(41943040,Zx.DEFAULT_COLLECTION_PERCENTILE,Zx.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zx.DISABLED=new Zx(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ek{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new ek(0)}static Mn(){return new ek(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tk{constructor(){this.changes=new Zb((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,lb.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?gv.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Ow(n.mutation,e,Av.empty(),tv.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,uw()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=uw()){const r=sw();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=rw();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=sw();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,uw())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=tw();const s=aw(),o=aw();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Fw)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),Ow(o.mutation,t,o.mutation.getFieldMask(),tv.now())):s.set(t.key,Av.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new nk(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=aw();let r=new Cv(((e,t)=>e-t)),i=uw();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Av.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||uw()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,l=r.value,c=ow();l.forEach((e=>{if(!i.has(e)){const r=Aw(t.get(e),n.get(e));null!==r&&c.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,c))}return gv.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return av.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Vb(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):gv.resolve(sw());let o=-1,a=i;return s.next((t=>gv.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?gv.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,uw()))).next((e=>({batchId:o,changes:iw(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new av(t)).next((e=>{let t=rw();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=rw();return this.indexManager.getCollectionParents(e,r).next((s=>gv.forEach(s,(s=>{const o=function(e,t){return new Mb(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,lb.newInvalidDocument(r)))}));let n=rw();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&Ow(s.mutation,i,Av.empty(),tv.now()),Qb(t,i)&&(n=n.insert(e,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return gv.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:Ex(n.createTime)}),gv.resolve()}getNamedQuery(e,t){return gv.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(e){return{name:e.name,query:Qx(e.bundledQuery),readTime:Ex(e.readTime)}}(t)),gv.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(){this.overlays=new Cv(av.comparator),this.ls=new Map}getOverlay(e,t){return gv.resolve(this.overlays.get(t))}getOverlays(e,t){const n=sw();return gv.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.we(e,t,r)})),gv.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ls.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.ls.delete(n)),gv.resolve()}getOverlaysForCollection(e,t,n){const r=sw(),i=t.length+1,s=new av(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return gv.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Cv(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=sw(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=sw(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return gv.resolve(o)}we(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Ww(t,n));let i=this.ls.get(t);void 0===i&&(i=uw(),this.ls.set(t,i)),this.ls.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(){this.fs=new Pv(ak.ds),this.ws=new Pv(ak._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new ak(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ys(new ak(e,t))}ps(e,t){e.forEach((e=>this.removeReference(e,t)))}Is(e){const t=new av(new iv([])),n=new ak(t,e),r=new ak(t,e+1),i=[];return this.ws.forEachInRange([n,r],(e=>{this.ys(e),i.push(e.key)})),i}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new av(new iv([])),n=new ak(t,e),r=new ak(t,e+1);let i=uw();return this.ws.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new ak(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class ak{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return av.comparator(e.key,t.key)||Zy(e.As,t.As)}static _s(e,t){return Zy(e.As,t.As)||av.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new Pv(ak.ds)}checkEmpty(e){return gv.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Hw(i,t,n,r);this.mutationQueue.push(s);for(const t of r)this.Rs=this.Rs.add(new ak(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return gv.resolve(s)}lookupMutationBatch(e,t){return gv.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.bs(n),i=r<0?0:r;return gv.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return gv.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return gv.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ak(t,0),r=new ak(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],(e=>{const t=this.Ps(e.As);i.push(t)})),gv.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Pv(Zy);return t.forEach((e=>{const t=new ak(e,0),r=new ak(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,r],(e=>{n=n.add(e.As)}))})),gv.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;av.isDocumentKey(i)||(i=i.child(""));const s=new ak(new av(i),0);let o=new Pv(Zy);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.As)),!0)}),s),gv.resolve(this.Vs(o))}Vs(e){const t=[];return e.forEach((e=>{const n=this.Ps(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Uy(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return gv.forEach(t.mutations,(r=>{const i=new ak(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new ak(t,0),r=this.Rs.firstAfterOrEqual(n);return gv.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,gv.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e){this.Ds=e,this.docs=new Cv(av.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return gv.resolve(n?n.document.mutableCopy():lb.newInvalidDocument(t))}getEntries(e,t){let n=tw();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():lb.newInvalidDocument(e))})),gv.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=tw();const s=t.path,o=new av(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||dv(uv(o),n)<=0||(r.has(o.key)||Qb(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return gv.resolve(i)}getAllFromCollectionGroup(e,t,n,r){Ly()}Cs(e,t){return gv.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new uk(this)}getSize(e){return gv.resolve(this.size)}}class uk extends tk{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.os.addEntry(e,r)):this.os.removeEntry(n)})),gv.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e){this.persistence=e,this.xs=new Zb((e=>Ab(e)),Db),this.lastRemoteSnapshotVersion=nv.min(),this.highestTargetId=0,this.Ns=0,this.ks=new ok,this.targetCount=0,this.Ms=ek.kn()}forEachTarget(e,t){return this.xs.forEach(((e,n)=>t(n))),gv.resolve()}getLastRemoteSnapshotVersion(e){return gv.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return gv.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),gv.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),gv.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new ek(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,gv.resolve()}updateTargetData(e,t){return this.Fn(t),gv.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,gv.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.xs.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.xs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),gv.waitFor(i).next((()=>r))}getTargetCount(e){return gv.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return gv.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),gv.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),gv.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),gv.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return gv.resolve(n)}containsKey(e,t){return gv.resolve(this.ks.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,t){this.$s={},this.overlays={},this.Os=new vv(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new hk(this),this.indexManager=new Xx,this.remoteDocumentCache=function(e){return new ck(e)}((e=>this.referenceDelegate.Ls(e))),this.serializer=new Gx(t),this.qs=new ik(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new lk(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){Ay("MemoryPersistence","Starting transaction:",e);const r=new fk(this.Os.next());return this.referenceDelegate.Us(),n(r).next((e=>this.referenceDelegate.Ks(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Gs(e,t){return gv.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}}class fk extends pv{constructor(e){super(),this.currentSequenceNumber=e}}class pk{constructor(e){this.persistence=e,this.Qs=new ok,this.js=null}static zs(e){return new pk(e)}get Ws(){if(this.js)return this.js;throw Ly()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),gv.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),gv.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),gv.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((e=>this.Ws.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ws.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return gv.forEach(this.Ws,(n=>{const r=av.fromPath(n);return this.Hs(e,r).next((e=>{e||t.removeEntry(r,nv.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return gv.or([()=>gv.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mk{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=r}static Li(e,t){let n=uw(),r=uw();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new mk(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ki(e,t).next((i=>i||this.Gi(e,t,r,n))).next((n=>n||this.Qi(e,t)))}Ki(e,t){if(Fb(t))return gv.resolve(null);let n=qb(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Hb(t,null,"F"),n=qb(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=uw(...r);return this.Ui.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.ji(t,r);return this.zi(t,s,i,n.readTime)?this.Ki(e,Hb(t,null,"F")):this.Wi(e,s,t,n)}))))})))))}Gi(e,t,n,r){return Fb(t)||r.isEqual(nv.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((i=>{const s=this.ji(t,i);return this.zi(t,s,n,r)?this.Qi(e,t):(jy()<=ta.DEBUG&&Ay("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Gb(t)),this.Wi(e,s,t,cv(r,-1)))}))}ji(e,t){let n=new Pv(Xb(e));return t.forEach(((t,r)=>{Qb(e,r)&&(n=n.add(r))})),n}zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,t){return jy()<=ta.DEBUG&&Ay("QueryEngine","Using full collection scan to execute query:",Gb(t)),this.Ui.getDocumentsMatchingQuery(e,t,hv.min())}Wi(e,t,n,r){return this.Ui.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,t,n,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new Cv(Zy),this.Yi=new Zb((e=>Ab(e)),Db),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rk(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}}function vk(e,t,n,r){return new yk(e,t,n,r)}async function bk(e,t){const n=Fy(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.tr(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=uw();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({er:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function wk(e){const t=Fy(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Bs.getLastRemoteSnapshotVersion(e)))}function xk(e,t,n){let r=uw(),i=uw();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=tw();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(nv.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Ay("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{nr:r,sr:i}}))}function kk(e,t){const n=Fy(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function _k(e,t){const n=Fy(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Bs.getTargetData(e,t).next((i=>i?(r=i,gv.resolve(r)):n.Bs.allocateTargetId(e).next((i=>(r=new Wx(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ji.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function Ek(e,t,n){const r=Fy(e),i=r.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!yv(e))throw e;Ay("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function Ik(e,t,n){const r=Fy(e);let i=nv.min(),s=uw();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Fy(e),i=r.Yi.get(n);return void 0!==i?gv.resolve(r.Ji.get(i)):r.Bs.getTargetData(t,n)}(r,e,qb(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Hi.getDocumentsMatchingQuery(e,t,n?i:nv.min(),n?s:uw()))).next((e=>(Sk(r,Yb(t),e),{documents:e,ir:s})))))}function Sk(e,t,n){let r=e.Xi.get(t)||nv.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Xi.set(t,r)}class Tk{constructor(){this.activeTargetIds=dw()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ck{constructor(){this.Hr=new Tk,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Tk,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{Yr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){Ay("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){Ay("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pk=null;function jk(){return null===Pk?Pk=268435456+Math.round(2147483648*Math.random()):Pk++,"0x"+Pk.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Ak={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok="WebChannelConnection";class Mk extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,r,i){const s=jk(),o=this.To(e,t);Ay("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={};return this.Eo(a,r,i),this.Ao(e,o,a,n).then((t=>(Ay("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw Oy("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,r,i,s){return this.Io(e,t,n,r,i)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ry,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}To(e,t){const n=Ak[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,r){const i=jk();return new Promise(((s,o)=>{const a=new Iy;a.setWithCredentials(!0),a.listenOnce(wy.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case by.NO_ERROR:const t=a.getResponseJson();Ay(Ok,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case by.TIMEOUT:Ay(Ok,`RPC '${e}' ${i} timed out`),o(new zy($y.DEADLINE_EXCEEDED,"Request time out"));break;case by.HTTP_ERROR:const n=a.getStatus();if(Ay(Ok,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values($y).indexOf(t)>=0?t:$y.UNKNOWN}(t.status);o(new zy(e,t.message))}else o(new zy($y.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new zy($y.UNAVAILABLE,"Connection failed."));break;default:Ly()}}finally{Ay(Ok,`RPC '${e}' ${i} completed.`)}}));const l=JSON.stringify(r);Ay(Ok,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",l,n,15)}))}Ro(e,t,n){const r=jk(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=yy(),o=vy(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.xmlHttpFactory=new _y({})),this.Eo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=i.join("");Ay(Ok,`Creating RPC '${e}' stream ${r}: ${c}`,a);const u=s.createWebChannel(c,a);let h=!1,d=!1;const f=new Dk({ro:t=>{d?Ay(Ok,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(Ay(Ok,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),Ay(Ok,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},oo:()=>u.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(u,Ey.EventType.OPEN,(()=>{d||Ay(Ok,`RPC '${e}' stream ${r} transport opened.`)})),p(u,Ey.EventType.CLOSE,(()=>{d||(d=!0,Ay(Ok,`RPC '${e}' stream ${r} transport closed`),f.wo())})),p(u,Ey.EventType.ERROR,(t=>{d||(d=!0,Oy(Ok,`RPC '${e}' stream ${r} transport errored:`,t),f.wo(new zy($y.UNAVAILABLE,"The operation could not be completed")))})),p(u,Ey.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];Uy(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Ay(Ok,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Qw[e];if(void 0!==t)return Jw(t)}(t),i=o.message;void 0===n&&(n=$y.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.wo(new zy(n,i)),u.close()}else Ay(Ok,`RPC '${e}' stream ${r} received:`,i),f._o(i)}})),p(o,xy.STAT_EVENT,(t=>{t.stat===ky.PROXY?Ay(Ok,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===ky.NOPROXY&&Ay(Ok,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.fo()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(e){return new bx(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,t-n);r>0&&Ay("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,t,n,r,i,s,o,a){this.ii=e,this.$o=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Fk(e,t)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===$y.RESOURCE_EXHAUSTED?(Dy(t.toString()),Dy("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===$y.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Fo===t&&this.Zo(e,n)}),(t=>{e((()=>{const e=new zy($y.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((e=>{n((()=>this.tu(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return Ay("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(Ay("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class zk extends $k{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Ly()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(Uy(void 0===t||"string"==typeof t),Ov.fromBase64String(t||"")):(Uy(void 0===t||t instanceof Uint8Array),Ov.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?$y.UNKNOWN:Jw(e.code);return new zy(t,e.message||"")}(o);n=new hx(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Cx(e,r.document.name),s=Ex(r.document.updateTime),o=r.document.createTime?Ex(r.document.createTime):nv.min(),a=new ob({mapValue:{fields:r.document.fields}}),l=lb.newFoundDocument(i,s,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new cx(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Cx(e,r.document),s=r.readTime?Ex(r.readTime):nv.min(),o=lb.newNoDocument(i,s),a=r.removedTargetIds||[];n=new cx([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Cx(e,r.document),s=r.removedTargetIds||[];n=new cx([],s,i,null)}else{if(!("filter"in t))return Ly();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new Gw(r,i),o=e.targetId;n=new ux(o,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return nv.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?nv.min():t.readTime?Ex(t.readTime):nv.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=Px(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Ob(r)?{documents:Ox(e,r)}:{query:Mx(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=kx(e,t.resumeToken);const r=wx(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(nv.min())>0){n.readTime=xx(e,t.snapshotVersion.toTimestamp());const r=wx(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ly()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=Px(this.serializer),t.removeTarget=e,this.Wo(t)}}class Vk extends $k{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(Uy(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=function(e,t){return e&&e.length>0?(Uy(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Ex(e.updateTime):Ex(t);return n.isEqual(nv.min())&&(n=Ex(t)),new Nw(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Ex(e.commitTime);return this.listener.cu(n,t)}return Uy(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Px(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Dx(this.serializer,e)))};this.Wo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new zy($y.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Io(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===$y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new zy($y.UNKNOWN,e.toString())}))}vo(e,t,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.vo(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===$y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new zy($y.UNKNOWN,e.toString())}))}terminate(){this.lu=!0}}class qk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Dy(t),this.mu=!1):Ay("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr((e=>{n.enqueueAndForget((async()=>{e_(this)&&(Ay("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Fy(e);t.vu.add(4),await Wk(t),t.bu.set("Unknown"),t.vu.delete(4),await Kk(t)}(this))}))})),this.bu=new qk(n,r)}}async function Kk(e){if(e_(e))for(const t of e.Ru)await t(!0)}async function Wk(e){for(const t of e.Ru)await t(!1)}function Gk(e,t){const n=Fy(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),Zk(n)?Jk(n):v_(n).Ko()&&Yk(n,t))}function Qk(e,t){const n=Fy(e),r=v_(n);n.Au.delete(t),r.Ko()&&Xk(n,t),0===n.Au.size&&(r.Ko()?r.jo():e_(n)&&n.bu.set("Unknown"))}function Yk(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(nv.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}v_(e).su(t)}function Xk(e,t){e.Vu.qt(t),v_(e).iu(t)}function Jk(e){e.Vu=new fx({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),v_(e).start(),e.bu.gu()}function Zk(e){return e_(e)&&!v_(e).Uo()&&e.Au.size>0}function e_(e){return 0===Fy(e).vu.size}function t_(e){e.Vu=void 0}async function n_(e){e.Au.forEach(((t,n)=>{Yk(e,t)}))}async function r_(e,t){t_(e),Zk(e)?(e.bu.Iu(t),Jk(e)):e.bu.set("Unknown")}async function i_(e,t,n){if(e.bu.set("Online"),t instanceof hx&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Au.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Au.delete(r),e.Vu.removeTarget(r))}(e,t)}catch(n){Ay("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await s_(e,n)}else if(t instanceof cx?e.Vu.Ht(t):t instanceof ux?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(nv.min()))try{const t=await wk(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Au.get(r);i&&e.Au.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.Au.get(t);if(!r)return;e.Au.set(t,r.withResumeToken(Ov.EMPTY_BYTE_STRING,r.snapshotVersion)),Xk(e,t);const i=new Wx(r.target,t,n,r.sequenceNumber);Yk(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Ay("RemoteStore","Failed to raise snapshot:",t),await s_(e,t)}}async function s_(e,t,n){if(!yv(t))throw t;e.vu.add(1),await Wk(e),e.bu.set("Offline"),n||(n=()=>wk(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Ay("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await Kk(e)}))}function o_(e,t){return t().catch((n=>s_(e,n,t)))}async function a_(e){const t=Fy(e),n=b_(t);let r=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;l_(t);)try{const e=await kk(t.localStore,r);if(null===e){0===t.Eu.length&&n.jo();break}r=e.batchId,c_(t,e)}catch(e){await s_(t,e)}u_(t)&&h_(t)}function l_(e){return e_(e)&&e.Eu.length<10}function c_(e,t){e.Eu.push(t);const n=b_(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function u_(e){return e_(e)&&!b_(e).Uo()&&e.Eu.length>0}function h_(e){b_(e).start()}async function d_(e){b_(e).hu()}async function f_(e){const t=b_(e);for(const n of e.Eu)t.uu(n.mutations)}async function p_(e,t,n){const r=e.Eu.shift(),i=Kw.from(r,t,n);await o_(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await a_(e)}async function m_(e,t){t&&b_(e).ou&&await async function(e,t){if(Xw(n=t.code)&&n!==$y.ABORTED){const n=e.Eu.shift();b_(e).Qo(),await o_(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await a_(e)}var n}(e,t),u_(e)&&h_(e)}async function g_(e,t){const n=Fy(e);n.asyncQueue.verifyOperationInProgress(),Ay("RemoteStore","RemoteStore received new credentials");const r=e_(n);n.vu.add(3),await Wk(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await Kk(n)}async function y_(e,t){const n=Fy(e);t?(n.vu.delete(2),await Kk(n)):t||(n.vu.add(2),await Wk(n),n.bu.set("Unknown"))}function v_(e){return e.Su||(e.Su=function(e,t,n){const r=Fy(e);return r.fu(),new zk(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{uo:n_.bind(null,e),ao:r_.bind(null,e),nu:i_.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Qo(),Zk(e)?Jk(e):e.bu.set("Unknown")):(await e.Su.stop(),t_(e))}))),e.Su}function b_(e){return e.Du||(e.Du=function(e,t,n){const r=Fy(e);return r.fu(),new Vk(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{uo:d_.bind(null,e),ao:m_.bind(null,e),au:f_.bind(null,e),cu:p_.bind(null,e)}),e.Ru.push((async t=>{t?(e.Du.Qo(),await a_(e)):(await e.Du.stop(),e.Eu.length>0&&(Ay("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))}))),e.Du
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class w_{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Vy,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new w_(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new zy($y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function x_(e,t){if(Dy("AsyncQueue",`${t}: ${e}`),yv(e))return new zy($y.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e){this.comparator=e?(t,n)=>e(t,n)||av.comparator(t.key,n.key):(e,t)=>av.comparator(e.key,t.key),this.keyedMap=rw(),this.sortedSet=new Cv(this.comparator)}static emptySet(e){return new k_(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof k_))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new k_;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(){this.Cu=new Cv(av.comparator)}track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):Ly():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class E_{constructor(e,t,n,r,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new E_(e,t,k_.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Kb(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(){this.Nu=void 0,this.listeners=[]}}class S_{constructor(){this.queries=new Zb((e=>Wb(e)),Kb),this.onlineState="Unknown",this.ku=new Set}}async function T_(e,t){const n=Fy(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new I_),i)try{s.Nu=await n.onListen(r)}catch(e){const n=x_(e,`Initialization of query '${Gb(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Mu(n.onlineState),s.Nu&&t.$u(s.Nu)&&P_(n)}async function C_(e,t){const n=Fy(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function N_(e,t){const n=Fy(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.$u(e)&&(r=!0);i.Nu=e}}r&&P_(n)}function R_(e,t,n){const r=Fy(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function P_(e){e.ku.forEach((e=>{e.next()}))}class j_{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new E_(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=E_.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A_{constructor(e){this.key=e}}class D_{constructor(e){this.key=e}}class O_{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=uw(),this.mutatedKeys=uw(),this.tc=Xb(e),this.ec=new k_(this.tc)}get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new __,r=t?t.ec:this.ec;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const c=r.get(e),u=Qb(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.rc(c,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.tc(u,a)>0||l&&this.tc(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(a||l)&&(o=!0)),f&&(u?(s=s.add(u),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ec:s,ic:n,zi:o,mutatedKeys:i}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ly()}};return n(e)-n(t)}(e.type,t.type)||this.tc(e.doc,t.doc))),this.oc(n);const s=t?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==i.length||a?{snapshot:new E_(this.query,e.ec,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:s}:{cc:s}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new __,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((e=>this.Yu=this.Yu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Yu=this.Yu.delete(e))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=uw(),this.ec.forEach((e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))}));const t=[];return e.forEach((e=>{this.Zu.has(e)||t.push(new D_(e))})),this.Zu.forEach((n=>{e.has(n)||t.push(new A_(n))})),t}hc(e){this.Yu=e.ir,this.Zu=uw();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return E_.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class M_{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class L_{constructor(e){this.key=e,this.fc=!1}}class U_{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.dc={},this.wc=new Zb((e=>Wb(e)),Kb),this._c=new Map,this.mc=new Set,this.gc=new Cv(av.comparator),this.yc=new Map,this.Ic=new ok,this.Tc={},this.Ec=new Map,this.Ac=ek.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function F_(e,t){const n=rE(e);let r,i;const s=n.wc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const e=await _k(n.localStore,qb(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await $_(n,t,r,"current"===s,e.resumeToken),n.isPrimaryClient&&Gk(n.remoteStore,e)}return i}async function $_(e,t,n,r,i){e.Rc=(t,n,r)=>async function(e,t,n,r){let i=t.view.sc(n);i.zi&&(i=await Ik(e.localStore,t.query,!1).then((({documents:e})=>t.view.sc(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return X_(e,t.targetId,o.cc),o.snapshot}(e,t,n,r);const s=await Ik(e.localStore,t,!0),o=new O_(t,s.ir),a=o.sc(s.documents),l=lx.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),c=o.applyChanges(a,e.isPrimaryClient,l);X_(e,n,c.cc);const u=new M_(t,n,o);return e.wc.set(t,u),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),c.snapshot}async function z_(e,t){const n=Fy(e),r=n.wc.get(t),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter((e=>!Kb(e,t)))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ek(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Qk(n.remoteStore,r.targetId),Q_(n,r.targetId)})).catch(mv)):(Q_(n,r.targetId),await Ek(n.localStore,r.targetId,!0))}async function V_(e,t){const n=Fy(e);try{const e=await function(e,t){const n=Fy(e),r=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];t.targetChanges.forEach(((s,a)=>{const l=i.get(a);if(!l)return;o.push(n.Bs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(e,s.addedDocuments,a))));let c=l.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?c=c.withResumeToken(Ov.EMPTY_BYTE_STRING,nv.min()).withLastLimboFreeSnapshotVersion(nv.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),i=i.insert(a,c),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(l,c,s)&&o.push(n.Bs.updateTargetData(e,c))}));let a=tw(),l=uw();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(xk(e,s,t.documentUpdates).next((e=>{a=e.nr,l=e.sr}))),!r.isEqual(nv.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next((t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return gv.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.Ji=i,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.yc.get(t);r&&(Uy(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.fc=!0:e.modifiedDocuments.size>0?Uy(r.fc):e.removedDocuments.size>0&&(Uy(r.fc),r.fc=!1))})),await eE(n,e,t)}catch(e){await mv(e)}}function B_(e,t,n){const r=Fy(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.wc.forEach(((n,r)=>{const i=r.view.Mu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Fy(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Mu(t)&&(r=!0)})),r&&P_(n)}(r.eventManager,t),e.length&&r.dc.nu(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function q_(e,t,n){const r=Fy(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.yc.get(t),s=i&&i.key;if(s){let e=new Cv(av.comparator);e=e.insert(s,lb.newNoDocument(s,nv.min()));const n=uw().add(s),i=new ax(nv.min(),new Map,new Cv(Zy),e,n);await V_(r,i),r.gc=r.gc.remove(s),r.yc.delete(t),Z_(r)}else await Ek(r.localStore,t,!1).then((()=>Q_(r,t,n))).catch(mv)}async function H_(e,t){const n=Fy(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Fy(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=gv.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Uy(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=uw();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);G_(n,r,null),W_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await eE(n,e)}catch(e){await mv(e)}}async function K_(e,t,n){const r=Fy(e);try{const e=await function(e,t){const n=Fy(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Uy(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);G_(r,t,n),W_(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await eE(r,e)}catch(n){await mv(n)}}function W_(e,t){(e.Ec.get(t)||[]).forEach((e=>{e.resolve()})),e.Ec.delete(t)}function G_(e,t,n){const r=Fy(e);let i=r.Tc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Tc[r.currentUser.toKey()]=i}}function Q_(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e._c.get(t))e.wc.delete(r),n&&e.dc.Pc(r,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach((t=>{e.Ic.containsKey(t)||Y_(e,t)}))}function Y_(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(Qk(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),Z_(e))}function X_(e,t,n){for(const r of n)r instanceof A_?(e.Ic.addReference(r.key,t),J_(e,r)):r instanceof D_?(Ay("SyncEngine","Document no longer in limbo: "+r.key),e.Ic.removeReference(r.key,t),e.Ic.containsKey(r.key)||Y_(e,r.key)):Ly()}function J_(e,t){const n=t.key,r=n.path.canonicalString();e.gc.get(n)||e.mc.has(r)||(Ay("SyncEngine","New document in limbo: "+n),e.mc.add(r),Z_(e))}function Z_(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new av(iv.fromString(t)),r=e.Ac.next();e.yc.set(r,new L_(n)),e.gc=e.gc.insert(n,r),Gk(e.remoteStore,new Wx(qb(Ub(n.path)),r,"TargetPurposeLimboResolution",vv.ct))}}async function eE(e,t,n){const r=Fy(e),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach(((e,a)=>{o.push(r.Rc(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=mk.Li(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.dc.nu(i),await async function(e,t){const n=Fy(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>gv.forEach(t,(t=>gv.forEach(t.Fi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>gv.forEach(t.Bi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!yv(e))throw e;Ay("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Ji.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(t,i)}}}(r.localStore,s))}async function tE(e,t){const n=Fy(e);if(!n.currentUser.isEqual(t)){Ay("SyncEngine","User change. New user:",t.toKey());const e=await bk(n.localStore,t);n.currentUser=t,function(e,t){e.Ec.forEach((e=>{e.forEach((e=>{e.reject(new zy($y.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.Ec.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await eE(n,e.er)}}function nE(e,t){const n=Fy(e),r=n.yc.get(t);if(r&&r.fc)return uw().add(r.key);{let e=uw();const r=n._c.get(t);if(!r)return e;for(const t of r){const r=n.wc.get(t);e=e.unionWith(r.view.nc)}return e}}function rE(e){const t=Fy(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=V_.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=nE.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=q_.bind(null,t),t.dc.nu=N_.bind(null,t.eventManager),t.dc.Pc=R_.bind(null,t.eventManager),t}function iE(e){const t=Fy(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=H_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=K_.bind(null,t),t}class sE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Uk(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return vk(this.persistence,new gk,e.initialUser,this.serializer)}createPersistence(e){return new dk(pk.zs,this.serializer)}createSharedClientState(e){return new Ck}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class oE{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>B_(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=tE.bind(null,this.syncEngine),await y_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new S_}createDatastore(e){const t=Uk(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Mk(r));var r;return function(e,t,n,r){return new Bk(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t,n,r,i,s;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>B_(this.syncEngine,e,0),s=Rk.D()?new Rk:new Nk,new Hk(t,n,r,i,s)}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new U_(e,t,n,r,i,s);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Fy(e);Ay("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await Wk(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class aE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Dy("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lE{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Ny.UNAUTHENTICATED,this.clientId=Jy.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Ay("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Ay("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new zy($y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vy;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=x_(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function cE(e,t){e.asyncQueue.verifyOperationInProgress(),Ay("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await bk(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function uE(e,t){e.asyncQueue.verifyOperationInProgress();const n=await dE(e);Ay("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>g_(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>g_(t.remoteStore,n))),e._onlineComponents=t}function hE(e){return"FirebaseError"===e.name?e.code===$y.FAILED_PRECONDITION||e.code===$y.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function dE(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Ay("FirestoreClient","Using user provided OfflineComponentProvider");try{await cE(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!hE(n))throw n;Oy("Error using user provided cache. Falling back to memory cache: "+n),await cE(e,new sE)}}else Ay("FirestoreClient","Using default OfflineComponentProvider"),await cE(e,new sE);return e._offlineComponents}async function fE(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Ay("FirestoreClient","Using user provided OnlineComponentProvider"),await uE(e,e._uninitializedComponentsProvider._online)):(Ay("FirestoreClient","Using default OnlineComponentProvider"),await uE(e,new oE))),e._onlineComponents}function pE(e){return fE(e).then((e=>e.syncEngine))}async function mE(e){const t=await fE(e),n=t.eventManager;return n.onListen=F_.bind(null,t.syncEngine),n.onUnlisten=z_.bind(null,t.syncEngine),n}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gE(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const yE=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(e,t,n){if(!n)throw new zy($y.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function bE(e){if(!av.isDocumentKey(e))throw new zy($y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function wE(e){if(av.isDocumentKey(e))throw new zy($y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function xE(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Ly()}function kE(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new zy($y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xE(e);throw new zy($y.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _E{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new zy($y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new zy($y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new zy($y.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gE(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new zy($y.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new zy($y.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new zy($y.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class EE{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _E({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new zy($y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new zy($y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _E(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new qy;switch(e.type){case"firstParty":return new Gy(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new zy($y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=yE.get(e);t&&(Ay("ComponentProvider","Removing Datastore"),yE.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class IE{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new TE(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new IE(this.firestore,e,this._key)}}class SE{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new SE(this.firestore,e,this._query)}}class TE extends SE{constructor(e,t,n){super(e,t,Ub(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new IE(this.firestore,null,new av(e))}withConverter(e){return new TE(this.firestore,e,this._path)}}function CE(e,t,...n){if(e=Qo(e),vE("collection","path",t),e instanceof EE){const r=iv.fromString(t,...n);return wE(r),new TE(e,null,r)}{if(!(e instanceof IE||e instanceof TE))throw new zy($y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(iv.fromString(t,...n));return wE(r),new TE(e.firestore,null,r)}}function NE(e,t,...n){if(e=Qo(e),1===arguments.length&&(t=Jy.A()),vE("doc","path",t),e instanceof EE){const r=iv.fromString(t,...n);return bE(r),new IE(e,null,new av(r))}{if(!(e instanceof IE||e instanceof TE))throw new zy($y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(iv.fromString(t,...n));return bE(r),new IE(e.firestore,e instanceof TE?e.converter:null,new av(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class RE{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Fk(this,"async_queue_retry"),this.Xc=()=>{const e=Lk();e&&Ay("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=Lk();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Lk();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new Vy;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!yv(e))throw e;Ay("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((e=>{this.Wc=e,this.Hc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e);throw Dy("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Hc=!1,e))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const r=w_.createAndSchedule(this,e,t,n,(e=>this.na(e)));return this.zc.push(r),r}Zc(){this.Wc&&Ly()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function PE(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of["next","error","complete"])if(e in n&&"function"==typeof n[e])return!0;return!1}(e)}class jE extends EE{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new RE,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||OE(this),this._firestoreClient.terminate()}}function AE(e,t){const n="string"==typeof e?e:t||"(default)",r=Ma("object"==typeof e?e:za(),"firestore").getImmediate({identifier:n});if(!r._initialized){const e=wo("firestore");e&&function(e,t,n,r={}){var i;const s=(e=kE(e,EE))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&Oy("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Ny.MOCK_USER;else{t=Eo(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new zy($y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ny(s)}e._authCredentials=new Hy(new By(t,n))}}(r,...e)}return r}function DE(e){return e._firestoreClient||OE(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function OE(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new Bv(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,gE(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new lE(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ME{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ME(Ov.fromBase64String(e))}catch(e){throw new zy($y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new ME(Ov.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new zy($y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ov(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class UE{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new zy($y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new zy($y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Zy(this._lat,e._lat)||Zy(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=/^__.*__$/;class zE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Fw(e,this.data,this.fieldMask,t,this.fieldTransforms):new Uw(e,this.data,t,this.fieldTransforms)}}class VE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Fw(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function BE(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ly()}}class qE{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new qE(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.fa(e),r}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return aI(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(BE(this.ca)&&$E.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class HE{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Uk(e)}ya(e,t,n,r=!1){return new qE({ca:e,methodName:t,ga:n,path:ov.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function KE(e){const t=e._freezeSettings(),n=Uk(e._databaseId);return new HE(e._databaseId,!!t.ignoreUndefinedProperties,n)}function WE(e,t,n,r,i,s={}){const o=e.ya(s.merge||s.mergeFields?2:0,t,n,i);rI("Data must be an object, but it was:",o,r);const a=tI(r,o);let l,c;if(s.merge)l=new Av(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=iI(t,r,n);if(!o.contains(i))throw new zy($y.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);lI(e,i)||e.push(i)}l=new Av(e),c=o.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,c=o.fieldTransforms;return new zE(new ob(a),l,c)}class GE extends UE{_toFieldTransform(e){if(2!==e.ca)throw 1===e.ca?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof GE}}function QE(e,t,n){return new qE({ca:3,ga:t.settings.ga,methodName:e._methodName,la:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class YE extends UE{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=QE(this,e,!0),n=this.pa.map((e=>eI(e,t))),r=new xw(n);return new Cw(e.path,r)}isEqual(e){return this===e}}class XE extends UE{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=QE(this,e,!0),n=this.pa.map((e=>eI(e,t))),r=new _w(n);return new Cw(e.path,r)}isEqual(e){return this===e}}function JE(e,t,n,r){const i=e.ya(1,t,n);rI("Data must be an object, but it was:",i,r);const s=[],o=ob.empty();Sv(r,((e,r)=>{const a=oI(t,e,n);r=Qo(r);const l=i.da(a);if(r instanceof GE)s.push(a);else{const e=eI(r,l);null!=e&&(s.push(a),o.set(a,e))}}));const a=new Av(s);return new VE(o,a,i.fieldTransforms)}function ZE(e,t,n,r,i,s){const o=e.ya(1,t,n),a=[iI(t,r,n)],l=[i];if(s.length%2!=0)throw new zy($y.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)a.push(iI(t,s[e])),l.push(s[e+1]);const c=[],u=ob.empty();for(let e=a.length-1;e>=0;--e)if(!lI(c,a[e])){const t=a[e];let n=l[e];n=Qo(n);const r=o.da(t);if(n instanceof GE)c.push(t);else{const e=eI(n,r);null!=e&&(c.push(t),u.set(t,e))}}const h=new Av(c);return new VE(u,h,o.fieldTransforms)}function eI(e,t){if(nI(e=Qo(e)))return rI("Unsupported field value:",t,e),tI(e,t);if(e instanceof UE)return function(e,t){if(!BE(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=eI(i,t.wa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Qo(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return mw(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=tv.fromDate(e);return{timestampValue:xx(t.serializer,n)}}if(e instanceof tv){const n=new tv(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:xx(t.serializer,n)}}if(e instanceof FE)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof ME)return{bytesValue:kx(t.serializer,e._byteString)};if(e instanceof IE){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ix(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${xE(e)}`)}(e,t)}function tI(e,t){const n={};return Tv(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Sv(e,((e,r)=>{const i=eI(r,t.ha(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function nI(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof tv||e instanceof FE||e instanceof ME||e instanceof IE||e instanceof UE)}function rI(e,t,n){if(!nI(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=xE(n);throw"an object"===r?t._a(e+" a custom object"):t._a(e+" "+r)}}function iI(e,t,n){if((t=Qo(t))instanceof LE)return t._internalPath;if("string"==typeof t)return oI(e,t);throw aI("Field path arguments must be of type string or ",e,!1,void 0,n)}const sI=new RegExp("[~\\*/\\[\\]]");function oI(e,t,n){if(t.search(sI)>=0)throw aI(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new LE(...t.split("."))._internalPath}catch(r){throw aI(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function aI(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new zy($y.INVALID_ARGUMENT,a+e+l)}function lI(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new IE(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new uI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(hI("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class uI extends cI{data(){return super.data()}}function hI(e,t){return"string"==typeof t?oI(e,t):t instanceof LE?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new zy($y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fI{convertValue(e,t="none"){switch(Kv(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Uv(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Fv(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Ly()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Sv(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new FE(Uv(e.latitude),Uv(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=zv(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Vv(e));default:return null}}convertTimestamp(e){const t=Lv(e);return new tv(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=iv.fromString(e);Uy(Kx(n));const r=new qv(n.get(1),n.get(3)),i=new av(n.popFirst(5));return r.isEqual(t)||Dy(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mI{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gI extends cI{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new yI(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(hI("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class yI extends gI{data(e={}){return super.data(e)}}class vI{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new mI(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new yI(this._firestore,this._userDataWriter,n.key,n,new mI(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new zy($y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new yI(e._firestore,e._userDataWriter,n.doc.key,n.doc,new mI(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new yI(e._firestore,e._userDataWriter,t.doc.key,t.doc,new mI(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:bI(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function bI(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ly()}}class wI extends fI{constructor(e){super(),this.firestore=e}convertBytes(e){return new ME(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new IE(this.firestore,null,t)}}function xI(e,t,n,...r){e=kE(e,IE);const i=kE(e.firestore,jE),s=KE(i);let o;return o="string"==typeof(t=Qo(t))||t instanceof LE?ZE(s,"updateDoc",e._key,t,n,r):JE(s,"updateDoc",e._key,t),EI(i,[o.toMutation(e._key,Rw.exists(!0))])}function kI(e,t){const n=kE(e.firestore,jE),r=NE(e),i=pI(e.converter,t);return EI(n,[WE(KE(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Rw.exists(!1))]).then((()=>r))}function _I(e,...t){var n,r,i;e=Qo(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||PE(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(PE(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let l,c,u;if(e instanceof IE)c=kE(e.firestore,jE),u=Ub(e._key.path),l={next:n=>{t[o]&&t[o](II(c,e,n))},error:t[o+1],complete:t[o+2]};else{const n=kE(e,SE);c=kE(n.firestore,jE),u=n._query;const r=new wI(c);l={next:e=>{t[o]&&t[o](new vI(c,r,n,e))},error:t[o+1],complete:t[o+2]},dI(e._query)}return function(e,t,n,r){const i=new aE(r),s=new j_(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>T_(await mE(e),s))),()=>{i.Dc(),e.asyncQueue.enqueueAndForget((async()=>C_(await mE(e),s)))}}(DE(c),u,a,l)}function EI(e,t){return function(e,t){const n=new Vy;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const r=iE(e);try{const e=await function(e,t){const n=Fy(e),r=tv.now(),i=t.reduce(((e,t)=>e.add(t.key)),uw());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=tw(),l=uw();return n.Zi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=Mw(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new Fw(e.key,t,ab(t.value.mapValue),Rw.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:iw(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Tc[e.currentUser.toKey()];r||(r=new Cv(Zy)),r=r.insert(t,n),e.Tc[e.currentUser.toKey()]=r}(r,e.batchId,n),await eE(r,e.changes),await a_(r.remoteStore)}catch(e){const t=x_(e,"Failed to persist write");n.reject(t)}}(await pE(e),t,n))),n.promise}(DE(e),t)}function II(e,t,n){const r=n.docs.get(t._key),i=new wI(e);return new gI(e,i,t._key,r,new mI(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(...e){return new YE("arrayUnion",e)}function TI(...e){return new XE("arrayRemove",e)}!function(e,t=!0){Ry=Fa,Oa(new Yo("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new jE(new Ky(e.getProvider("auth-internal")),new Yy(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new zy($y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qv(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),Va(Cy,"3.12.1",e),Va(Cy,"3.12.1","esm2017")}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const CI="firebasestorage.googleapis.com",NI="storageBucket";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class RI extends jo{constructor(e,t,n=0){super(OI(e),`Firebase Storage: ${t} (${OI(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,RI.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return OI(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var PI,jI,AI,DI;function OI(e){return"storage/"+e}function MI(){return new RI(PI.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function LI(){return new RI(PI.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function UI(){return new RI(PI.CANCELED,"User canceled the upload/download.")}function FI(){return new RI(PI.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function $I(e){return new RI(PI.INVALID_ARGUMENT,e)}function zI(){return new RI(PI.APP_DELETED,"The Firebase app was deleted.")}function VI(e,t){return new RI(PI.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function BI(e){throw new RI(PI.INTERNAL_ERROR,"Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(jI=PI||(PI={})).UNKNOWN="unknown",jI.OBJECT_NOT_FOUND="object-not-found",jI.BUCKET_NOT_FOUND="bucket-not-found",jI.PROJECT_NOT_FOUND="project-not-found",jI.QUOTA_EXCEEDED="quota-exceeded",jI.UNAUTHENTICATED="unauthenticated",jI.UNAUTHORIZED="unauthorized",jI.UNAUTHORIZED_APP="unauthorized-app",jI.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",jI.INVALID_CHECKSUM="invalid-checksum",jI.CANCELED="canceled",jI.INVALID_EVENT_NAME="invalid-event-name",jI.INVALID_URL="invalid-url",jI.INVALID_DEFAULT_BUCKET="invalid-default-bucket",jI.NO_DEFAULT_BUCKET="no-default-bucket",jI.CANNOT_SLICE_BLOB="cannot-slice-blob",jI.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",jI.NO_DOWNLOAD_URL="no-download-url",jI.INVALID_ARGUMENT="invalid-argument",jI.INVALID_ARGUMENT_COUNT="invalid-argument-count",jI.APP_DELETED="app-deleted",jI.INVALID_ROOT_OPERATION="invalid-root-operation",jI.INVALID_FORMAT="invalid-format",jI.INTERNAL_ERROR="internal-error",jI.UNSUPPORTED_ENVIRONMENT="unsupported-environment";class qI{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=qI.makeFromUrl(e,t)}catch(t){return new qI(e,"")}if(""===n.path)return n;throw r=e,new RI(PI.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.");var r}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const i=new RegExp("^gs://"+r+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),a=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${t===CI?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let t=0;t<a.length;t++){const r=a[t],i=r.regex.exec(e);if(i){const e=i[r.indices.bucket];let t=i[r.indices.path];t||(t=""),n=new qI(e,t),r.postModify(n);break}}if(null==n)throw function(e){return new RI(PI.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return n}}class HI{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(e){return"string"==typeof e||e instanceof String}function WI(e){return GI()&&e instanceof Blob}function GI(){return"undefined"!=typeof Blob&&!So()}function QI(e,t,n,r){if(r<t)throw $I(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw $I(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function XI(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function JI(e,t){const n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return n||r||i}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(DI=AI||(AI={}))[DI.NO_ERROR=0]="NO_ERROR",DI[DI.NETWORK_ERROR=1]="NETWORK_ERROR",DI[DI.ABORT=2]="ABORT";class ZI{constructor(e,t,n,r,i,s,o,a,l,c,u,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==i){const e=MI();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){r(this.appDelete_?zI():UI())}else{r(LI())}};this.canceled_?e(0,new eS(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return 2===a}let c=!1;function u(...e){c||(c=!0,t.apply(null,e))}function h(t){i=setTimeout((()=>{i=null,e(f,l())}),t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(c)return void d();if(e)return d(),void u.call(null,e,...t);if(l()||o)return d(),void u.call(null,e,...t);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),h(n)}let p=!1;function m(e){p||(p=!0,d(),c||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}(((e,t)=>{if(t)return void e(!1,new eS(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===AI.NO_ERROR,i=n.getStatus();if(!t||JI(i,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===AI.ABORT;return void e(!1,new eS(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new eS(s,n))}))}),e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class eS{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function tS(...e){const t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(GI())return new Blob(e);throw new RI(PI.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(e){if("undefined"==typeof atob)throw t="base-64",new RI(PI.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);var t;return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class iS{constructor(e,t){this.data=e,this.contentType=t||null}}function sS(e,t){switch(e){case rS.RAW:return new iS(oS(t));case rS.BASE64:case rS.BASE64URL:return new iS(aS(e,t));case rS.DATA_URL:return new iS(function(e){const t=new lS(e);return t.base64?aS(rS.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw VI(rS.DATA_URL,"Malformed data URL.")}return oS(t)}(t.rest)}(t),new lS(t).contentType)}throw MI()}function oS(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function aS(e,t){switch(e){case rS.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw VI(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case rS.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw VI(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=nS(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw VI(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class lS{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw VI(rS.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;var r,i;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */null!=n&&(this.base64=(i=";base64",!!((r=n).length>=i.length)&&r.substring(r.length-i.length)===i),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}class cS{constructor(e,t){let n=0,r="";WI(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(WI(this.data_)){const s=this.data_,o=(r=e,i=t,(n=s).webkitSlice?n.webkitSlice(r,i):n.mozSlice?n.mozSlice(r,i):n.slice?n.slice(r,i):null);return null===o?null:new cS(o)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new cS(n,!0)}var n,r,i}static getBlob(...e){if(GI()){const t=e.map((e=>e instanceof cS?e.data_:e));return new cS(tS.apply(null,t))}{const t=e.map((e=>KI(e)?sS(rS.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let i=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]})),new cS(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(e){let t;try{t=JSON.parse(e)}catch(e){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(e,t){return t}class fS{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||dS}}let pS=null;function mS(){if(pS)return pS;const e=[];e.push(new fS("bucket")),e.push(new fS("generation")),e.push(new fS("metageneration")),e.push(new fS("name","fullPath",!0));const t=new fS("name");t.xform=function(e,t){return function(e){return!KI(e)||e.length<2?e:hS(e)}(t)},e.push(t);const n=new fS("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new fS("timeCreated")),e.push(new fS("updated")),e.push(new fS("md5Hash",null,!0)),e.push(new fS("cacheControl",null,!0)),e.push(new fS("contentDisposition",null,!0)),e.push(new fS("contentEncoding",null,!0)),e.push(new fS("contentLanguage",null,!0)),e.push(new fS("contentType",null,!0)),e.push(new fS("metadata","customMetadata",!0)),pS=e,pS}function gS(e,t,n){const r={type:"file"},i=n.length;for(let e=0;e<i;e++){const i=n[e];r[i.local]=i.xform(r,t[i.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,i=new qI(n,r);return t._makeStorageReference(i)}})}(r,e),r}function yS(e,t,n){const r=uS(t);if(null===r)return null;return gS(e,r,n)}function vS(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(e){if(!e)throw MI()}function xS(e,t){return function(n,r){const i=yS(e,r,t);return wS(null!==i),i}}function kS(e,t){return function(n,r){const i=yS(e,r,t);return wS(null!==i),function(e,t,n,r){const i=uS(t);if(null===i)return null;if(!KI(i.downloadTokens))return null;const s=i.downloadTokens;if(0===s.length)return null;const o=encodeURIComponent;return s.split(",").map((t=>{const i=e.bucket,s=e.fullPath;return YI("/b/"+o(i)+"/o/"+o(s),n,r)+XI({alt:"media",token:t})}))[0]}(i,r,e.host,e._protocol)}}function _S(e){return function(t,n){let r;var i,s;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new RI(PI.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new RI(PI.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(s=e.bucket,r=new RI(PI.QUOTA_EXCEEDED,"Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,r=new RI(PI.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")):r=n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}}function ES(e){const t=_S(e);return function(n,r){let i=t(n,r);var s;return 404===n.getStatus()&&(s=e.path,i=new RI(PI.OBJECT_NOT_FOUND,"Object '"+s+"' does not exist.")),i.serverResponse=r.serverResponse,i}}function IS(e,t,n){const r=YI(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,s=new bS(r,"GET",xS(e,n),i);return s.errorHandler=ES(t),s}function SS(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}function TS(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;const l=SS(t,r,i),c="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+vS(l,n)+"\r\n--"+a+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",u="\r\n--"+a+"--",h=cS.getBlob(c,r,u);if(null===h)throw FI();const d={name:l.fullPath},f=YI(s,e.host,e._protocol),p=e.maxUploadRetryTime,m=new bS(f,"POST",xS(e,n),p);return m.urlParams=d,m.headers=o,m.body=h.uploadData(),m.errorHandler=_S(t),m}class CS{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function NS(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){wS(!1)}return wS(!!n&&-1!==(t||["active"]).indexOf(n)),n}const RS=262144;function PS(e,t,n,r,i,s,o,a){const l=new CS(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw new RI(PI.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");const c=l.total-l.current;let u=c;i>0&&(u=Math.min(u,i));const h=l.current,d=h+u;let f="";f=0===u?"finalize":c===u?"upload, finalize":"upload";const p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${l.current}`},m=r.slice(h,d);if(null===m)throw FI();const g=t.maxUploadRetryTime,y=new bS(n,"POST",(function(e,n){const i=NS(e,["active","final"]),o=l.current+u,a=r.size();let c;return c="final"===i?xS(t,s)(e,n):null,new CS(o,a,"final"===i,c)}),g);return y.headers=p,y.body=m.uploadData(),y.progressCallback=a||null,y.errorHandler=_S(e),y}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function AS(e){switch(e){case"running":case"pausing":case"canceling":return jS.RUNNING;case"paused":return jS.PAUSED;case"success":return jS.SUCCESS;case"canceled":return jS.CANCELED;default:return jS.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,t,n){if("function"==typeof e||null!=t||null!=n)this.next=e,this.error=null!=t?t:void 0,this.complete=null!=n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MS=null;class LS{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=AI.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=AI.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=AI.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw BI("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const e in r)r.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,r[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw BI("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw BI("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw BI("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw BI("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class US extends LS{initXhr(){this.xhr_.responseType="text"}}function FS(){return MS?MS():new US}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $S{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=mS(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(PI.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const t=this.isExponentialBackoffExpired();if(JI(e.status,[])){if(!t)return this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,void this.completeTransitions_();e=LI()}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(PI.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout((()=>{this.pendingTimeout=void 0,this._continueUpload()}),this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=function(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o=SS(t,r,i),a={name:o.fullPath},l=YI(s,e.host,e._protocol),c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},u=vS(o,n),h=e.maxUploadRetryTime,d=new bS(l,"POST",(function(e){let t;NS(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){wS(!1)}return wS(KI(t)),t}),h);return d.urlParams=a,d.headers=c,d.body=u,d.errorHandler=_S(t),d}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,FS,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const r=function(e,t,n,r){const i=e.maxUploadRetryTime,s=new bS(n,"POST",(function(e){const t=NS(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){wS(!1)}n||wS(!1);const i=Number(n);return wS(!isNaN(i)),new CS(i,r.size(),"final"===t)}),i);return s.headers={"X-Goog-Upload-Command":"query"},s.errorHandler=_S(t),s}(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,FS,t,n);this._request=i,i.getPromise().then((e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=RS*this._chunkMultiplier,t=new CS(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,i)=>{let s;try{s=PS(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){return this._error=e,void this._transition("error")}const o=this._ref.storage._makeRequest(s,FS,r,i,!1);this._request=o,o.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){2*(RS*this._chunkMultiplier)<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=IS(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,FS,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=TS(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,FS,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=UI(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){const e=AS(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const i=new DS(t||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();this._observers.slice().forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(AS(this._state)){case jS.SUCCESS:OS(this._resolve.bind(null,this.snapshot))();break;case jS.CANCELED:case jS.ERROR:OS(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(AS(this._state)){case jS.RUNNING:case jS.PAUSED:e.next&&OS(e.next.bind(e,this.snapshot))();break;case jS.SUCCESS:e.complete&&OS(e.complete.bind(e))();break;case jS.CANCELED:case jS.ERROR:default:e.error&&OS(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e,t){this._service=e,this._location=t instanceof qI?t:qI.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new zS(e,t)}get root(){const e=new qI(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return hS(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new qI(this._location.bucket,e);return new zS(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new RI(PI.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function VS(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=YI(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,s=new bS(r,"GET",kS(e,n),i);return s.errorHandler=ES(t),s}(e.storage,e._location,mS());return e.storage.makeRequestWithTokens(t,FS).then((e=>{if(null===e)throw new RI(PI.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e}))}function BS(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new qI(e._location.bucket,n);return new zS(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(e,t){if(e instanceof WS){const n=e;if(null==n._bucket)throw new RI(PI.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+NI+"' property when initializing the app?");const r=new zS(n,n._bucket);return null!=t?qS(r,t):r}return void 0!==t?BS(e,t):e}function HS(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof WS)return new zS(e,t);throw $I("To use ref(service, url), the first argument must be a Storage instance.")}return qS(e,t)}function KS(e,t){const n=null==t?void 0:t[NI];return null==n?null:qI.makeFromBucketSpec(n,e)}class WS{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=CI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?qI.makeFromBucketSpec(r,this._host):KS(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=qI.makeFromBucketSpec(this._url,e):this._bucket=KS(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){QI("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){QI("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new zS(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new HI(zI());{const s=function(e,t,n,r,i,s,o=!0){const a=XI(e.urlParams),l=e.url+a,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,s),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,r),new ZI(l,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const GS="@firebase/storage",QS="0.11.2",YS="storage";function XS(e,t,n){return function(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new $S(e,new cS(t),n)}(e=Qo(e),t,n)}function JS(e,t){return HS(e=Qo(e),t)}function ZS(e=za(),t){const n=Ma(e=Qo(e),YS).getImmediate({identifier:t}),r=wo("storage");return r&&function(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"==typeof i?i:Eo(i,e.app.options.projectId))}(e,t,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,...r),n}function eT(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new WS(n,r,i,t,Fa)}Oa(new Yo(YS,eT,"PUBLIC").setMultipleInstances(!0)),Va(GS,QS,""),Va(GS,QS,"esm2017");const tT=$a({apiKey:"AIzaSyBdN3Y3QC9-RSsO7MqKYKvSmW-kMIfcjlA",authDomain:"repic---communityproject.firebaseapp.com",projectId:"repic---communityproject",storageBucket:"repic---communityproject.appspot.com",messagingSenderId:"671623865251",appId:"1:671623865251:web:37dea5c98068c3d290b016",measurementId:"G-YRV80V72MJ"}),nT=(function(e=za()){const t=Ma(e=Qo(e),fc);t.isInitialized()?t.getImmediate():function(e,t={}){const n=Ma(e,fc);if(n.isInitialized()){const e=n.getImmediate();if(Mo(t,n.getOptions()))return e;throw wc.create("already-initialized")}const r=n.initialize({options:t})}(e)}(tT),za(),function(e=za()){const t=Ma(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Ma(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Mo(n.getOptions(),null!=t?t:{}))return e;eu(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:ef,persistence:[od,Vh,qh]}),r=ko("authTokenSyncURL");if(r){const e=af(r);!function(e,t,n){Qo(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){Qo(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}const i=bo("auth");return i&&lh(n,`http://${i}`),n}()),rT=AE(),iT=tv,sT=(ZS(tT),AE(tT));let oT=class{UserURL="";UserIntro="";UserNickName="";UserStacks=[];error=!1;isPending=!1;Initialization({UserURL:e,UserIntro:t,UserNickName:n,UserStacks:r}){this.setUrl(e),this.setIntro(t),this.setNickName(n),this.setStacks(r)}async delDocumentField({tranaction:e,docId:t,updateKey:n,updateValue:r}){await aT.delDocumentFieldArray({tranaction:e,docId:t,updateKey:n,updateValue:r}),this.setError(!1),this.setIsPending(!1)}async writeDocumentField({tranaction:e,docId:t,updateKey:n,updateValue:r}){await aT.writeDocumentFieldArray({tranaction:e,docId:t,updateKey:n,updateValue:r}),this.setError(!1),this.setIsPending(!1)}async updateDocumentField({tranaction:e,docId:t,updateKey:n,updateValue:r}){await aT.updateDocumentField({tranaction:e,docId:t,updateKey:n,updateValue:r}),this.setError(!1),this.setIsPending(!1)}async uploadIMG({file:e,Uid:t,docId:n}){await aT.UpdateImg({file:e,Uid:t,docId:n}),this.setError(!1),this.setIsPending(!1)}async downloadIMG({uid:e}){const t=await aT.getUpdatedImg({Uid:e});this.setUrl(t)}setUrl(e){this.UserURL=e}setIntro(e){this.UserIntro=e}setNickName(e){this.UserNickName=e}setStacks(e){this.UserStacks=e}setError(e){this.error=e}setIsPending(e){this.isPending=e}};en([Ks()],oT.prototype,"setUrl",null),en([Ks()],oT.prototype,"setIntro",null),en([Ks()],oT.prototype,"setNickName",null),en([Ks()],oT.prototype,"setStacks",null),en([Ks()],oT.prototype,"setError",null),en([Ks()],oT.prototype,"setIsPending",null),oT=en([Ms(),Hs()],oT);const aT=new class{AppAuth=nT;userInfoUpdateStore=Ds.resolve(oT);async login({email:e,password:t}){await Lh(this.AppAuth,e,t)}async logout(){var e;await(e=this.AppAuth,Qo(e).signOut())}async signup({email:e,password:t,displayName:n}){await Mh(this.AppAuth,e,t).then((e=>{const{user:t}=e;if(!t)throw new Error("실패");Uh(this.AppAuth.currentUser,{displayName:n})}))}async delDocumentFieldArray({tranaction:e,docId:t,updateKey:n,updateValue:r}){this.AppAuth.currentUser?.uid;const i=NE(rT,e,t);await xI(i,{[n]:TI(r)})}async updateDocumentField({tranaction:e,docId:t,updateKey:n,updateValue:r}){this.AppAuth.currentUser?.uid;const i=NE(sT,e,t);await xI(i,{[n]:r})}async writeDocumentFieldArray({tranaction:e,docId:t,updateKey:n,updateValue:r}){this.AppAuth.currentUser?.uid;const i=NE(rT,e,t);await xI(i,{[n]:SI(r)})}async addDocument({transaction:e,email:t,nickName:n,text:r,title:i,stacks:s,startDate:o,endDate:a,proceedingMethod:l,recruit:c,status:u}){const h=iT.fromDate(new Date),d=this.AppAuth.currentUser?.uid||"",f=CE(rT,e),p={uid:d,email:t,nickName:n,introduce:"",stacks:Qs,thumbnailURL:`https://firebasestorage.googleapis.com/v0/b/repic---communityproject.appspot.com/o/images%2FuserThumbs%2F${d}?alt=media`,Initial:!1},m={comments:Ys,createdTime:h,likes:Xs,text:r,title:i,uid:d,view:Js},g={comments:Ys,createdTime:h,likes:Xs,text:r,title:i,uid:d,view:Js,stacks:s,startDate:o,endDate:a,proceedingMethod:l,recruit:c,status:u};"Users"===e?await kI(f,p):"Communities"===e?await kI(f,m):"Projects"===e&&await kI(f,g)}async updateDocument({transaction:e,docId:t,field:n,value:r}){this.AppAuth.currentUser;const i=NE(sT,e,t);await xI(i,{[n]:r})}async UpdateImg({file:e,Uid:t,docId:n}){console.log(e);const r=this.AppAuth.currentUser?.uid||"",i=ZS();console.log(r);const s=XS(JS(i,`images/userThumbs/${r}`),e,{contentType:"image/jpeg"}),o=NE(sT,"Users",n);await s.on("state_changed",(e=>{const t=e.bytesTransferred/e.totalBytes*100;console.log(`Upload is ${t}% done`),100===t&&xI(o,{Initial:!0})}),(e=>{console.log(e)}))}async getUpdatedImg({Uid:e}){this.AppAuth.currentUser?.uid;const t=JS(ZS(),`images/userThumbs/${e}`);var n;return await(n=t,VS(n=Qo(n)))}};let lT=class{error=!1;isPending=!1;async logout(){this.setIsPending(!0),this.setError(!1);try{await aT.logout(),this.setIsPending(!1),this.setError(!1)}catch(e){this.setError(!0),this.setIsPending(!1)}}setError(e){this.error=e}setIsPending(e){this.isPending=e}};en([Ks()],lT.prototype,"setError",null),en([Ks()],lT.prototype,"setIsPending",null),lT=en([Ms(),Hs()],lT);const cT=Ui.button`
cursor: pointer;
padding: 1rem;
font-weight: bold;
background-color: ${e=>e.theme.colors.backgroundMain};
border: 1px solid ${e=>e.theme.colors.textMain};
color: ${e=>e.theme.colors.textMain};
border-radius: .4rem;
white-space: nowrap;
  &:hover{
    background-color: ${e=>e.theme.colors.textMain};
    color: ${e=>e.theme.colors.backgroundMain};
  }
`;function uT(){const[,e]=Ws(Ds.resolve(lT)),t=mt();return(0,o.jsx)(cT,{className:"logout",type:"button",onClick:async()=>{e.logout(),t("/login")},children:"로그아웃"})}const hT=Ui.ul`
margin-block: 1rem;
display: flex;
justify-content: space-between;
align-items: center;
li{
  display: flex;
  align-items: center;
  a{
    margin-left: 3rem;
    white-space: nowrap;
    text-decoration: none;
    color: ${e=>e.theme.colors.textMain};
    align-items: center;
    letter-spacing: -0.5px;
    display: flex;
    img{
      height: 20px;
      margin-right: 1rem;
    }
  }
  a:hover{
    text-decoration-line: underline;
  }
  .headerLogo{
    height: 2rem;
    margin-right: 3rem;
  }
  button{
    margin-left: 1.5rem;
  }
}
`;function dT(){const{isDarkMode:e}=Gi(),t=nT.currentUser;return(0,o.jsxs)(hT,{children:[(0,o.jsxs)("li",{children:[e?(0,o.jsx)("img",{className:"headerLogo",src:"/images/logoB_.png",alt:"test"}):(0,o.jsx)("img",{className:"headerLogo",src:"/images/logoW__.png",alt:"test"}),(0,o.jsx)(Gt,{to:"/",children:"홈"}),(0,o.jsx)(Gt,{to:"/communities?page=1&sort=Recent",children:"커뮤니티"}),(0,o.jsx)(Gt,{to:"/projects?page=1&filter=All",children:"프로젝트"})]}),t?(0,o.jsxs)("li",{className:"headerSide",children:[(0,o.jsxs)(Gt,{to:`/setting/${t.uid}`,children:[e?(0,o.jsx)("img",{src:"/images/icons/setting02.png",alt:"seticon"}):(0,o.jsx)("img",{src:"/images/icons/setting04.png",alt:"seticon"}),(0,o.jsx)("p",{children:"정보수정"})]}),(0,o.jsx)(Gt,{to:`/user/${t.uid}?sort=WriteCommunity`,children:"마이페이지"}),(0,o.jsx)(uT,{})]}):(0,o.jsxs)("li",{className:"headerSide",children:[(0,o.jsx)(Gt,{to:"/signup",children:"가입하기"}),(0,o.jsx)(Gt,{to:"/login",children:"로그인"})]})]})}const fT=Ui.div`
  a{
    text-decoration: none;
    color: ${e=>e.theme.colors.textMain};
    li{
      padding-block: 2rem;
    }
    li:hover{
      background-color: ${e=>e.theme.colors.primary};
      color:white;
    }
  }
`;function pT({label:e,path:t,onclick:n}){return(0,o.jsx)(fT,{children:(0,o.jsx)(Gt,{to:`${t}`,onClick:n,children:(0,o.jsx)("li",{children:e})})})}const mT=Ui.div`
padding-block: 2rem;
  button{
    padding: 1rem 4rem 1rem 4rem;
  }
`;function gT({OnClick:e,userId:t}){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(pT,{label:"정보수정",path:`/setting/${t}`,onclick:e}),(0,o.jsx)(pT,{label:"마이페이지",path:`/user/${t}?sort=WriteCommunity`,onclick:e}),(0,o.jsx)(mT,{children:(0,o.jsx)(uT,{})})]})}function yT({OnClick:e}){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(pT,{label:"가입하기",path:"/signup",onclick:e}),(0,o.jsx)(pT,{label:"로그인",path:"/login",onclick:e})]})}function vT({OnClick:e}){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(pT,{label:"홈",path:"/",onclick:e}),(0,o.jsx)(pT,{label:"커뮤니티",path:"/communities?page=1&sort=Recent",onclick:e}),(0,o.jsx)(pT,{label:"프로젝트",path:"/projects?page=1&filter=All",onclick:e})]})}const bT=Ui.div`
position: absolute;
width: 100%;
height: 100vh;
z-index: 2;
background-color: ${e=>e.theme.colors.backgroundMain};
left: 0;
top: 0;
padding: 1.5rem 5rem 1.5rem 5rem;

.buttonBar{
  display: flex;
  justify-content: end;
  padding-right: 0.5rem;
  align-items: center;
  button{
    cursor: pointer;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    background:none;
    border: none;
    font-size: 4rem;
    color: ${e=>e.theme.colors.textMain};
  }
}

.ItemBar{
  ul{
    padding-block: 3rem;
    text-align: center;
  }
}
`;function wT({setToggle:e,toggle:t}){const n=nT.currentUser,r=n?.uid||"",i=()=>{e(!t)};return(0,o.jsxs)(bT,{className:"menuBar",children:[(0,o.jsx)("div",{className:"buttonBar",children:(0,o.jsx)("button",{type:"button",onClick:()=>{e(!t)},children:"x"})}),(0,o.jsx)("div",{className:"ItemBar",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)(vT,{OnClick:i}),n?(0,o.jsx)(gT,{OnClick:i,userId:r}):(0,o.jsx)(yT,{OnClick:i})]})})]})}const xT=Ui.header`
border-bottom: 1px solid ${e=>e.theme.colors.textMain};;
background-color: ${e=>e.theme.colors.backgroundMain};
padding: 1.5rem 5rem 1.5rem 5rem;
font-family: 'Noto Sans CJK KR';
font-weight: bold;
letter-spacing :3px;
position: fixed;
top: 0;
left: 0;
right: 0;
font-size: 1.4rem;
`;function kT(){const[{width:e}]=Ws(Ds.resolve(ro)),[t,n]=(0,N.useState)(!1);return(0,o.jsxs)(xT,{children:[(0,o.jsx)("nav",{children:e>720?(0,o.jsx)(dT,{}):(0,o.jsx)(uo,{toggle:t,setToggle:n})}),t&&(0,o.jsx)(wT,{setToggle:n,toggle:t})]})}let _T=class{connection=!1;error=!1;async unsubscribe(){this.setConnection(!1);try{(await nT.onAuthStateChanged((()=>{console.log("connecting"),this.setConnection(!0)})))()}catch(e){this.setError(!0)}}setConnection(e){this.connection=e}setError(e){this.error=e}};function ET(){return Ws(Ds.resolve(_T))}en([Ks()],_T.prototype,"setConnection",null),en([Ks()],_T.prototype,"setError",null),_T=en([Ms(),Hs()],_T);const IT=Ui.div`
position: absolute;
width: 98vw;
height: 98vh;
overflow: hidden;
text-align: center;
top: 0;
left: 0;
right: 0;
margin: auto;
  .box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .loader{
      display: inline-block;
      border: 3px solid white;
      border-radius: 50%;
      border-top: 3px solid #222;
      width: 40px;
      height: 40px;
      -webkit-animation: spin 1s linear infinite;
      animation: spin 1s linear infinite;
    }
    .loadingPara{
      margin-top: 3rem;
    }
  }

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;function ST(){return(0,o.jsx)(IT,{children:(0,o.jsxs)("div",{className:"box",children:[(0,o.jsx)("div",{className:"loader"}),(0,o.jsx)("div",{className:"loadingPara",children:"Loading..."})]})})}const TT=Ui.div`
max-width: 760px;
margin: auto;
padding: 0 1rem 0 1rem;
margin-top: 3rem;
`;N=s("fYo6y");const CT=Ui.div`
max-width: 760px;
margin: auto;
padding: 0 1rem 0 1rem;
margin-top: 3rem;
`;N=s("fYo6y");let NT=class{communityItems=[];error=!1;isPending=!1;async readCommnuityItemsInfo(){this.setIsPending(!0),this.setError(!1);try{this.setIsPending(!1),this.setError(!1),await _I(CE(rT,"Communities"),(e=>{const t=[];e.docs.forEach((e=>{const n={...e.data(),id:e.id};t.push(n)})),this.setCommunityItems(t)}))}catch(e){this.setIsPending(!1),this.setError(!0)}}async updateItemView({docId:e,updateValue:t}){this.setIsPending(!0),this.setError(!1);try{await aT.writeDocumentFieldArray({tranaction:"Communities",docId:e,updateKey:"view",updateValue:t}),this.setIsPending(!1),this.setError(!1)}catch(e){this.setIsPending(!1),this.setError(!0)}}async updateItemLikes({docId:e,updateValue:t}){this.setIsPending(!0),this.setError(!1);try{await aT.writeDocumentFieldArray({tranaction:"Communities",docId:e,updateKey:"likes",updateValue:t}),this.setIsPending(!1),this.setError(!1)}catch(e){this.setIsPending(!1),this.setError(!0)}}setCommunityItems(e){this.communityItems=e}setError(e){this.error=e}setIsPending(e){this.isPending=e}};function RT(){return Ws(Ds.resolve(NT))}en([Ks()],NT.prototype,"setCommunityItems",null),en([Ks()],NT.prototype,"setError",null),en([Ks()],NT.prototype,"setIsPending",null),NT=en([Ms(),Hs()],NT);N=s("fYo6y");function PT({uid:e}){const[t,n]=(0,N.useState)();return(0,N.useEffect)((()=>{_I(CE(rT,"Users"),(t=>{t.docs.forEach((t=>{const r={...t.data(),id:t.id};e===r.uid&&n(r)}))}))}),[]),{gotUserInfo:t}}function jT({createdTime:e}){const t=new Date(1e3*e.seconds+e.nanoseconds/1e6);return{date:t.toLocaleDateString("ko-KR"),atTime:t.toLocaleTimeString()}}const AT=Ui.div`
margin-top: 1rem;
border-bottom: 1px solid ${e=>e.theme.colors.textMain};
padding: 1rem;
margin-bottom: 1rem;
  div{
    display: flex;
    align-items: center;
    margin-bottom: .5rem;
    ul{
      font-size: 1.5rem;
      display: flex;
      margin-bottom: .5rem;
      li{
        color: ${e=>e.theme.colors.textSecond};
      }
    }
    p{
      font-size: 1.5rem;
      line-height: 2.2rem;
    }
    a{
      text-decoration: none;
      color: ${e=>e.theme.colors.textMain};
      font-size: 1.5rem;
      margin-right: 2rem;
      font-family: 'Noto Sans CJK KR';
      font-weight: bold;
    }
  }
  .comentTextBox{
    font-size: 1.2rem;
    color: ${e=>e.theme.colors.textMain};
  }
`;function DT({comment:e}){const{gotUserInfo:t}=PT({uid:e.uid}),{date:n}=jT({createdTime:e.createdTime});return t?(0,o.jsxs)(AT,{children:[(0,o.jsx)("div",{children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(Gt,{to:`/user/${t.uid}?sort=WriteCommunity`,children:t.nickName})}),(0,o.jsx)("li",{className:"date",children:n})]})}),(0,o.jsx)("div",{className:"comentTextBox",children:(0,o.jsx)("p",{children:e.text})})]}):null}const OT=Ui.div``;function MT({communityItem:e}){const{comments:t}=e[0];return(0,o.jsx)(OT,{children:t.sort(((e,t)=>t.createdTime.seconds-e.createdTime.seconds)).map((e=>(0,o.jsx)(DT,{comment:e},e.createdTime.seconds)))})}let LT=class{comment="";error=!1;isPending=!1;async updateComment({tranaction:e,docId:t,uid:n,createdTime:r}){this.setIsPending(!0),this.setError(!1);const i={uid:n,createdTime:r,text:this.comment,likes:[]};try{await aT.writeDocumentFieldArray({tranaction:e,docId:t,updateKey:"comments",updateValue:i}),this.setIsPending(!1),this.setError(!1),this.changeComment("")}catch(e){this.setIsPending(!1),this.setError(!0)}}changeComment(e){this.comment=e}setError(e){this.error=e}setIsPending(e){this.isPending=e}};function UT(){return Ws(Ds.resolve(LT))}en([Ks()],LT.prototype,"changeComment",null),en([Ks()],LT.prototype,"setError",null),en([Ks()],LT.prototype,"setIsPending",null),LT=en([Ms(),Hs()],LT);const FT=Ui.button`
margin-top: 1rem;
font-family: 'GmarketSansMedium';
border-radius: 0.5rem;
background-color: ${e=>e.theme.colors.primary};
color: white;
font-size: 1.6rem;
font-weight: bold;
letter-spacing: 2px;
width: 300px;
height: 40px;
border: none;
&:active{
  background-color: ${e=>e.theme.colors.primaryDeep};
}

&:disabled {
    filter: grayscale(80%);
    cursor: not-allowed;
}
`;function $T({label:e,type:t="button",disable:n=!0,onClick:r}){return(0,o.jsx)(FT,{disabled:!n,onClick:()=>{r&&r()},type:t,children:e})}const zT=Ui.div`
margin-top: 2rem;
border: 1px solid ${e=>e.theme.colors.textMain};
border-radius: .5rem;
padding: 1rem;
  textarea{
    width: 100%;
    height: 70px;
    padding: 1rem;
    resize: none;
    background-color: ${e=>e.theme.colors.backgroundMain};
    color: ${e=>e.theme.colors.textMain};
  }
  .buttonBox{
    text-align: end;
    margin-block: 2rem;
    button{
      width: 150px;
    }
  }
`;function VT({communityItem:e}){const[{comment:t},n]=UT(),r=mt();Qi((()=>{n.changeComment("")}));return(0,o.jsxs)(zT,{children:[(0,o.jsx)("div",{children:(0,o.jsx)("textarea",{placeholder:"댓글 작성",value:t,onChange:e=>{n.changeComment(e.target.value)},cols:10,rows:10})}),(0,o.jsx)("div",{className:"buttonBox",children:(0,o.jsx)($T,{label:"작성하기",onClick:()=>{const t=nT.currentUser?.uid||"",i=iT.fromDate(new Date);""===t?(alert("로그인해주세요"),r("/login")):n.updateComment({tranaction:"Communities",docId:e[0].id,uid:t,createdTime:i})}})})]})}const BT=Ui.button`
cursor: pointer;
padding: 1rem;
font-weight: bold;
background-color: ${e=>e.theme.colors.backgroundMain};
border: 1px solid ${e=>e.theme.colors.textMain};
color: ${e=>e.theme.colors.textMain};
border-radius: .4rem;
white-space: nowrap;
  &:hover{
    background-color: ${e=>e.theme.colors.textMain};
    color: ${e=>e.theme.colors.backgroundMain};
  }
`;function qT(){const e=mt();return(0,o.jsx)(BT,{className:"darkMode",type:"button",onClick:()=>{e(-1)},children:"뒤로가기"})}const HT=Ui.div`
margin-block: 1rem;
text-align: end;
`;function KT(){return(0,o.jsx)(HT,{children:(0,o.jsx)(qT,{})})}const WT=Ui.div``;function GT({communityItem:e}){return(0,o.jsxs)(WT,{children:[(0,o.jsx)(VT,{communityItem:e}),(0,o.jsx)(KT,{}),0!==e[0].comments.length&&(0,o.jsx)(MT,{communityItem:e})]})}N=s("fYo6y");let QT=class{UserInfo=[];UserURL="";error=!1;isPending=!1;async readUserInfo({uid:e}){this.setIsPending(!0),this.setError(!1);try{await _I(CE(rT,"Users"),(t=>{t.docs.forEach((t=>{const n=[{...t.data(),id:t.id}];e===n[0].uid&&this.setUserInfo(n)}))})),this.setIsPending(!1),this.setError(!1)}catch(e){this.setIsPending(!1),this.setError(!0)}}setError(e){this.error=e}setIsPending(e){this.isPending=e}setUserInfo(e){this.UserInfo=e}};function YT(){return Ws(Ds.resolve(QT))}en([Ks()],QT.prototype,"setError",null),en([Ks()],QT.prototype,"setIsPending",null),en([Ks()],QT.prototype,"setUserInfo",null),QT=en([Ms(),Hs()],QT);const XT=Ui.div`
  .body{
    width: 100%;
    margin-block: 1rem;
    min-height: 500px;
    padding: 2rem;
    word-break: break-all;
    border-bottom: 1px solid ${e=>e.theme.colors.textMain};
    h1{
      font-weight: bold;
      font-size: 2rem;
      font-family: 'GmarketSansMedium';
      letter-spacing: 1px;
      margin-bottom: 2rem;
    }
    p{
      font-family: 'Noto Sans CJK KR';
      font-weight: 100;
      line-height: 2rem;
      letter-spacing: .6px;
    }
  }
  .buttonBox{
    text-align: end;
    button{
      border-radius: 1rem;
      border: none;
      margin: 1rem;
      white-space: nowrap;
      background-color: ${e=>e.theme.colors.buttonMain};
      color: ${e=>e.theme.colors.textMain};
      border: 1px solid ${e=>e.theme.colors.buttonMain};
      padding: 1rem;
      width: 60px;
      height: 40px;
      img{
        height: 100%;
        margin-right: .3rem;
      }
    }
    button:hover{
      cursor: pointer;
      border: 1px solid ${e=>e.theme.colors.textMain};
    }
  }
`;function JT({communityItem:e}){const{isDarkMode:t}=Gi(),n=mt(),r=nT.currentUser?.uid||"",[,i]=RT();return(0,o.jsxs)(XT,{children:[(0,o.jsxs)("div",{className:"body",children:[(0,o.jsx)("h1",{children:e[0].title}),(0,o.jsx)("p",{children:e[0].text})]}),(0,o.jsx)("div",{className:"buttonBox",children:(0,o.jsxs)("button",{type:"button",onClick:()=>{""===r?(alert("로그인해주세요"),n("/login")):i.updateItemLikes({docId:e[0].id,updateValue:r})},children:[t?(0,o.jsx)("img",{src:"/images/icons/like02.png",alt:""}):(0,o.jsx)("img",{src:"/images/icons/like04.png",alt:""}),e[0].likes.length]})})]})}const ZT=Ui.div`
display: flex;
align-items: center;
  .userThumbNail{
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-size: contain;
    background-color: white;
    box-shadow: 1px 1px 2px ${e=>e.theme.colors.textMain};
  }
  .userPara{
    padding: 0rem 2rem 0rem 2rem;
    h1{
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
    p{
      color: ${e=>e.theme.colors.textSecond};
      font-size: 1.5rem;
    }
  }
`;function eC({UserInfo:e,communityItem:t}){const{date:n}=jT({createdTime:t[0].createdTime});return(0,o.jsxs)(ZT,{className:"userInfo",children:[(0,o.jsx)(Gt,{to:`/user/${e[0].uid}?sort=WriteCommunity`,children:e[0].Initial?(0,o.jsx)("div",{className:"userThumbNail",style:{backgroundImage:`url(${e[0].thumbnailURL})`}}):(0,o.jsx)("div",{className:"userThumbNail",style:{backgroundImage:"url(/images/icons/default.jpg)"}})}),(0,o.jsxs)("div",{className:"userPara",children:[(0,o.jsx)("h1",{children:e[0].nickName}),(0,o.jsxs)("p",{children:["작성일 : ",n]})]})]})}const tC=Ui.div`
display: flex;
justify-content: space-between;
color: ${e=>e.theme.colors.textSecond};
font-size: 1.3rem;
padding: 0;
  div{
    margin: 0px 0px .5rem 0px;
    padding: 0rem 1rem 0rem 1rem;
    white-space: nowrap;
  }
@media (max-width: 720px){
  margin-top: 3rem;
}
`;function nC({communityItem:e}){return(0,o.jsxs)(tC,{className:"itemInfo",children:[(0,o.jsxs)("div",{children:["댓글수 : ",e[0].comments.length,"개"]}),(0,o.jsxs)("div",{children:["좋아요 : ",e[0].likes.length,"개"]}),(0,o.jsxs)("div",{children:["방문자수 : ",e[0].view.length]})]})}const rC=Ui.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0rem 1rem 2rem 1rem;
  border-bottom: 1px solid ${e=>e.theme.colors.textMain};

@media (max-width: 720px){
  flex-direction: column;
  align-items: flex-start;
}
`;function iC({UserInfo:e,communityItem:t}){return(0,o.jsxs)(rC,{children:[(0,o.jsx)(eC,{UserInfo:e,communityItem:t}),(0,o.jsx)(nC,{communityItem:t})]})}const sC=Ui.div``;function oC({communityItem:e}){const[{UserInfo:t},n]=YT();return(0,N.useEffect)((()=>{n.readUserInfo({uid:e[0].uid})}),[]),t.length?(0,o.jsxs)(sC,{children:[(0,o.jsx)(iC,{UserInfo:t,communityItem:e}),(0,o.jsx)(JT,{communityItem:e})]}):null}const aC=Ui.div`
  
`;function lC({communityItem:e}){const[,t]=RT();return(0,N.useEffect)((()=>{const n=String(iT.fromDate(new Date).seconds)+String(iT.fromDate(new Date).nanoseconds);t.updateItemView({docId:e[0].id,updateValue:n})}),[]),(0,o.jsxs)(aC,{children:[(0,o.jsx)(oC,{communityItem:e}),(0,o.jsx)(GT,{communityItem:e})]})}N=s("fYo6y");function cC({DocId:e}){const[{communityItems:t},n]=RT();(0,N.useEffect)((()=>{n.readCommnuityItemsInfo()}),[]);return{communityItem:t.filter((t=>t.id===e))}}N=s("fYo6y"),N=s("fYo6y");let uC=class{searchText="";radioValue="";changeSearchText(e){this.searchText=e}changeRadioValue(e){this.radioValue=e}};function hC(){return Ws(Ds.resolve(uC))}en([Ks()],uC.prototype,"changeSearchText",null),en([Ks()],uC.prototype,"changeRadioValue",null),uC=en([Ms(),Hs()],uC);const dC=Ui.div`
padding-block: 2rem;
border-bottom: 1px solid ${e=>e.theme.colors.textMain};
display: flex;
justify-content: space-between;
align-items: center;

  table{
    padding-block: 1.2rem;
    a{
      color : ${e=>e.theme.colors.textMain};
      text-decoration: none;
      padding: 1rem;
      border-radius: 1rem;
    }
    .active{
      background-color: ${e=>e.theme.colors.buttonMain};
      color: ${e=>e.theme.colors.primaryDeep}
    }
  }

  .searchField{
    input{
      width: 300px;
      height: 40px;
      padding: 1rem;
      border: 2px solid ${e=>e.theme.colors.buttonMain};
      border-radius: 0.3rem;
      background-color: ${e=>e.theme.colors.backgroundMain};
      color: ${e=>e.theme.colors.textMain};
    }
    button{
      height: 40px;
      padding: 1rem 2rem 1rem 2rem;
      white-space: nowrap;
      background-color: ${e=>e.theme.colors.buttonMain};
      color: ${e=>e.theme.colors.textMain};
      border: none;
    }
  }
@media (max-width: 720px){
  flex-direction: column;

  table{
    width: 100%;
    padding-block: 1.2rem;
    margin-block: 1rem;
    th{
      display: flex;
      a{
        text-decoration: none;
      }
    }
  }
  .searchField{
    width: 100%;
    display: flex;
    input{
      width: 100%;
    }
  }
}
`;function fC({radioValue:e,Page:t,searchConfirm:n,searchText:r,Search:i}){const[,s]=hC();return(0,o.jsxs)(dC,{children:[(0,o.jsx)("table",{children:(0,o.jsx)("thead",{children:(0,o.jsx)("tr",{children:i?(0,o.jsxs)("th",{children:[(0,o.jsx)(Gt,{className:`${"Recent"===e&&"active"}`,to:`/communities?page=${t}&sort=Recent&search=${i}`,children:"최신순"}),(0,o.jsx)(Gt,{className:`${"View"===e&&"active"}`,to:`/communities?page=${t}&sort=View&search=${i}`,children:"조회순"}),(0,o.jsx)(Gt,{className:`${"Likes"===e&&"active"}`,to:`/communities?page=${t}&sort=Likes&search=${i}`,children:"좋아요순"})]}):(0,o.jsxs)("th",{children:[(0,o.jsx)(Gt,{className:`${"Recent"===e&&"active"}`,to:`/communities?page=${t}&sort=Recent`,children:"최신순"}),(0,o.jsx)(Gt,{className:`${"View"===e&&"active"}`,to:`/communities?page=${t}&sort=View`,children:"조회순"}),(0,o.jsx)(Gt,{className:`${"Likes"===e&&"active"}`,to:`/communities?page=${t}&sort=Likes`,children:"좋아요순"})]})})})}),(0,o.jsxs)("div",{className:"searchField",children:[(0,o.jsx)("input",{type:"text",value:r,onKeyUp:e=>{"Enter"===e.key&&n()},onChange:e=>{s.changeSearchText(e.target.value)},placeholder:"검색하세요"}),(0,o.jsx)("button",{type:"button",onClick:n,children:"검색"})]})]})}N=s("fYo6y");const pC=Ui.div`
display: flex;
  p{
    margin-right: 2rem;
    font-size: 1.2rem;
  }
  .userName{
    font-weight: 500;
    font-size: 1.2rem;
  }
`;function mC({communityItem:e,UserInfo:t}){const{date:n,atTime:r}=jT({createdTime:e.createdTime});return(0,o.jsxs)(pC,{children:[(0,o.jsx)("p",{className:"userName",children:t[0].nickName}),(0,o.jsxs)("p",{children:[n," ",r]})]})}const gC=Ui.div`
margin: 1rem 0rem 0.2rem 0rem;
  h1{
    font-size: 1.6rem;
    font-weight: bold;
  }
`;function yC({communityItem:e}){return(0,o.jsx)(gC,{className:"communityTitle",children:(0,o.jsx)("h1",{children:e.title})})}const vC=Ui.div`
display: flex;
justify-content: space-between;
align-items: center;
font-weight: 100;
  p{
    font-size: 1.3rem;
    white-space: nowrap;
  }
  .textBox{
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: break-word;
    display: block;
    margin-block: 0.5rem;
    line-height: 1.4;
    width: 100%;
  }
  .iconbox{
    margin-right: 1rem;
    width: 130px;
    display: flex;
    .iconitem{
      display: flex;
      margin: 0rem 0.5rem 0rem 0.5rem;
    img{
      margin-right: 0.5rem;
      height: 15px;
    }
    }
  }
`;function bC({communityItem:e}){const{isDarkMode:t}=Gi();return(0,o.jsxs)(vC,{className:"textLine",children:[(0,o.jsx)("p",{className:"textBox",children:e.text}),t?(0,o.jsxs)("div",{className:"iconbox",children:[(0,o.jsxs)("p",{className:"iconitem",children:[(0,o.jsx)("img",{src:"/images/icons/like01.png",alt:""}),e.likes.length]}),(0,o.jsxs)("p",{className:"iconitem",children:[(0,o.jsx)("img",{src:"/images/icons/more01.png",alt:""}),e.view.length]}),(0,o.jsxs)("p",{className:"iconitem",children:[(0,o.jsx)("img",{src:"/images/icons/user02.png",alt:""}),e.comments.length]})]}):(0,o.jsxs)("div",{className:"iconbox",children:[(0,o.jsxs)("p",{className:"iconitem",children:[(0,o.jsx)("img",{src:"/images/icons/like03.png",alt:""}),e.likes.length]}),(0,o.jsxs)("p",{className:"iconitem",children:[(0,o.jsx)("img",{src:"/images/icons/more03.png",alt:""}),e.view.length]}),(0,o.jsxs)("p",{className:"iconitem",children:[(0,o.jsx)("img",{src:"/images/icons/user04.png",alt:""}),e.comments.length]})]})]})}const wC=Ui.div`
  width: 100%;
  border-bottom: 1px solid ${e=>e.theme.colors.textMain};
  color: ${e=>e.theme.colors.textMain};;
  padding: 1rem 0.5rem 1rem 0.5rem;
  &:hover{
    background-color: ${e=>e.theme.colors.buttonMain};
    h1{
      color: ${e=>e.theme.colors.primary}
    }
  }

`;function xC({communityItem:e}){const[{UserInfo:t},n]=YT();return(0,N.useEffect)((()=>{n.readUserInfo({uid:e.uid})}),[]),t.length?(0,o.jsxs)(wC,{children:[(0,o.jsx)(mC,{communityItem:e,UserInfo:t}),(0,o.jsx)(yC,{communityItem:e}),(0,o.jsx)(bC,{communityItem:e})]}):null}const kC=Ui.div`
  a{
    text-decoration: none;
  }

`;function _C({communityItems:e}){return(0,o.jsx)(kC,{children:e.map((e=>(0,o.jsx)(Gt,{to:`/communities/${e.id}`,children:(0,o.jsx)(xC,{communityItem:e})},e.id)))})}N=s("fYo6y");const EC=Ui.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-block: 1.5rem;
  .clone{
    visibility: hidden;
  }
  .pageButtonBox{
    display: flex;
    text-align: center;
    padding-block: 1rem;
    a{
      margin: .3rem;
      text-decoration: none;
      color: ${e=>e.theme.colors.textMain};
    }
  }
  .ButtonBox{
    text-align: center;
    button{
      width: 100px;
      margin: auto;
    }
  }
`;function IC({Page:e,Search:t,communityItems:n,radioValue:r}){const[i,s]=(0,N.useState)(0),a=mt();(0,N.useEffect)((()=>{s(Math.ceil(n.length/10))}),[n]);return(0,o.jsxs)(EC,{children:[(0,o.jsx)("div",{className:"ButtonBox clone",children:(0,o.jsx)($T,{label:"글작성"})}),(0,o.jsx)("div",{className:"pageButtonBox",children:t?(0,o.jsxs)(o.Fragment,{children:[1===Number(e)&&(0,o.jsx)(Gt,{to:`/communities?page=1&sort=${r}&search=${t}`,children:"<"}),1!==Number(e)&&(0,o.jsx)(Gt,{to:`/communities?page=${Number(e)-1}&sort=${r}&search=${t}`,children:"<"}),(()=>{const n=[];for(let s=0;s<i;s++)n.push((0,o.jsx)(Gt,{to:`/communities?page=${s+1}&sort=${r}&search=${t}`,children:Number(e)===s+1?(0,o.jsx)("p",{className:`pages${s+1} Active`,children:s+1}):(0,o.jsx)("p",{className:`pages${s+1}`,children:s+1})},s));return n})(),Number(e)===i&&(0,o.jsx)(Gt,{to:`/communities?page=${i}&sort=${r}&search=${t}`,children:">"}),Number(e)!==i&&(0,o.jsx)(Gt,{to:`/communities?page=${Number(e)+1}&sort=${r}&search=${t}`,children:">"})]}):(0,o.jsxs)(o.Fragment,{children:[1===Number(e)&&(0,o.jsx)(Gt,{to:`/communities?page=1&sort=${r}`,children:"<"}),1!==Number(e)&&(0,o.jsx)(Gt,{to:`/communities?page=${Number(e)-1}&sort=${r}`,children:"<"}),(()=>{const t=[];for(let n=0;n<i;n++)t.push((0,o.jsx)(Gt,{to:`/communities?page=${n+1}&sort=${r}`,children:Number(e)===n+1?(0,o.jsx)("p",{className:`pages${n+1} Active`,children:n+1}):(0,o.jsx)("p",{className:`pages${n+1}`,children:n+1})},n));return t})(),Number(e)===i&&(0,o.jsx)(Gt,{to:`/communities?page=${i}&sort=${r}`,children:">"}),Number(e)!==i&&(0,o.jsx)(Gt,{to:`/communities?page=${Number(e)+1}&sort=${r}`,children:">"})]})}),(0,o.jsx)("div",{className:"ButtonBox",children:(0,o.jsx)($T,{label:"글작성",type:"submit",onClick:()=>{a("/communities/write")}})})]})}const SC=Ui.div`

`;function TC({Page:e,Search:t,radioValue:n,filteredCommunityItems:r}){const i=r.filter(((t,n)=>n<10*Number(e)&&10*(Number(e)-1)<=n));return(0,o.jsxs)(SC,{children:[(0,o.jsx)(_C,{communityItems:i}),(0,o.jsx)(IC,{Page:e,Search:t,radioValue:n,communityItems:r})]})}function CC({Search:e,communityItems:t}){return{sortedItems:t.filter((t=>t.title.includes(e.trim())||t.text.includes(e.trim())))}}const NC=Ui.div`

`;function RC({radioValue:e,communityItems:t,Page:n,Search:r,searchText:i}){const s=mt(),{sortedItems:a}=CC({Search:r,communityItems:t});return(0,o.jsxs)(NC,{children:[(0,o.jsx)(fC,{radioValue:e,Page:n,searchConfirm:()=>{i?s(`/communities?page=1&sort=${e}&search=${i}`):i||s(`/communities?page=1&sort=${e}`)},searchText:i,Search:r}),(0,o.jsx)(TC,{Page:n,Search:r,radioValue:e,filteredCommunityItems:a})]})}const PC=Ui.div`
  .communityBanner{
  border-radius: 1rem;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  background-image: url('/images/CommunityBanner.jpg');
  background-size: cover ;
  background-position: center;
  background-color: black;
  }
  .communityHeader{
    margin-bottom: 1rem;
    h1{
      margin-block: 1rem;
      font-size: 2rem;
      font-weight: bold;
    }
    p{
      color: ${e=>e.theme.colors.textSecond};
      font-weight: bold;
    }
  }
`;function jC(){return(0,o.jsxs)(PC,{children:[(0,o.jsxs)("div",{className:"communityHeader",children:[(0,o.jsx)("h1",{children:"[ COMMUNITY ]"}),(0,o.jsx)("p",{children:"다양한 사람을 만나고 생각의 폭을 넓혀보세요."})]}),(0,o.jsx)("div",{className:"communityBanner"})]})}N=s("fYo6y");function AC(){const[e,t]=(0,N.useState)({});return(0,N.useCallback)((()=>{t({})}),[])}const DC=Ui.div`
  
`;function OC({radioValue:e,communityItems:t,Page:n,Search:r,searchText:i}){const s=AC(),[a,l]=(0,N.useState)(t);return(0,N.useEffect)((()=>{"Recent"===e?l([...t].sort(((e,t)=>t.createdTime.seconds-e.createdTime.seconds))):"View"===e?l([...t].sort(((e,t)=>t.view.length-e.view.length))):"Likes"===e&&l([...t].sort(((e,t)=>t.likes.length-e.likes.length))),s()}),[e,t]),(0,o.jsxs)(DC,{children:[(0,o.jsx)(jC,{}),(0,o.jsx)(RC,{radioValue:e,communityItems:a,Page:n,Search:r,searchText:i})]})}s("fYo6y");let MC=class{title="";text="";error=!1;isPending=!1;async addDocument(){this.setIsPending(!0),this.setError(!1);try{await aT.addDocument({transaction:"Communities",title:this.title,text:this.text}),this.setIsPending(!1),this.setError(!1)}catch(e){this.setIsPending(!1),this.setError(!0)}}changeTitle(e){this.title=e}changeText(e){this.text=e}setError(e){this.error=e}setIsPending(e){this.isPending=e}};en([Ks()],MC.prototype,"changeTitle",null),en([Ks()],MC.prototype,"changeText",null),en([Ks()],MC.prototype,"setError",null),en([Ks()],MC.prototype,"setIsPending",null),MC=en([Ms(),Hs()],MC);const LC=Ui.div`
margin-top: 3rem;
form{
  width: 100%
}
div{
  width: 100%;
  input{
    width: 100%;
    margin-block: 1rem;
    padding: 1rem;
    height: 4rem;
    background-color: ${e=>e.theme.colors.backgroundMain};
    border: 1px solid ${e=>e.theme.colors.textSecond};
    color: ${e=>e.theme.colors.textMain};
  }
  textarea{
    padding: 1rem;
    width: 100%;
    margin-block: 1rem;
    height: 720px;
    background-color: ${e=>e.theme.colors.backgroundMain};
    color: ${e=>e.theme.colors.textMain};
  }
}
`;const UC=Ui.div`
text-align: center;
position: absolute;
z-index: -1;
left: 50%;
transform: translateX(-50%);
  .card{
    display: inline-block;
    width: 480px;
    padding: 3rem;
    box-shadow: 0px 3px 5px rgba(0,0,0,0.2);
    .box{
      position: relative;
      .top{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 50%;
        z-index: -1;

        .profile, .title, .job{
          margin: 5px;
        }
        .profile{
          width: 80px;
          height: 80px;
          border: 4px solid white;
          box-shadow: 0px 3px 5px rgba(0,0,0,0.2);
          border-radius: 45%;
          z-index: -1;
        }
        .title{
          font-size: 18px;
          font-weight: 700;
        }
        .job {
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
  }
`;function FC(){const e=nT.currentUser,{gotUserInfo:t}=PT({uid:String(e?.uid)});return void 0===t?null:(0,o.jsx)(UC,{children:(0,o.jsx)("div",{className:"card",children:(0,o.jsx)("div",{className:"box",children:(0,o.jsxs)("div",{className:"top",children:[t.Initial?(0,o.jsx)("img",{src:`${t.thumbnailURL}`,alt:"Thumb",className:"profile"}):(0,o.jsx)("img",{src:"/images/icons/default.jpg",alt:"ThumbDefault",className:"profile"}),(0,o.jsx)("h1",{className:"title",children:t.nickName}),(0,o.jsx)("h3",{className:"job",children:"Developer"}),(0,o.jsx)("div",{className:"links",children:(0,o.jsx)("ul",{children:(0,o.jsx)("li",{children:t.email})})})]})})})})}const $C=Ui.div`
width:49%;
min-height: 80vh;
display: flex;
align-items: center;
div{
    .communityPara{
      margin-bottom: 1rem;
      font-size: 3rem;
      line-height: 4rem;
      font-weight: bold;
    }
    a{
      text-decoration: none;
      color: ${e=>e.theme.colors.primary};
      font-size: 2rem;
    }
  }
`;function zC(){return(0,o.jsx)($C,{children:(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{className:"communityPara",children:["Communicate"," ",(0,o.jsx)("br",{})," ","with people"]}),(0,o.jsx)(Gt,{to:"/communities?page=1&sort=Recent",children:(0,o.jsx)("p",{children:"Community Page"})})]})})}const VC=Ui.div`
width:49%;
min-height: 80vh;
display: flex;
align-items: center;
justify-content: end;
text-align: end;
div{
    /* border: 2px solid #222; */
    .projectPara{
      margin-bottom: 1rem;
      font-size: 3rem;
      line-height: 4rem;
      font-weight: bold;
    }
    a{
      text-decoration: none;
      color: ${e=>e.theme.colors.primary};
      font-size: 2rem;
    }
  }
`;function BC(){return(0,o.jsx)(VC,{children:(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{className:"projectPara",children:["Do Something"," ",(0,o.jsx)("br",{})," ","Incredible Now"]}),(0,o.jsx)(Gt,{to:"/projects?page=1&filter=All",children:(0,o.jsx)("p",{children:"Project Page"})})]})})}const qC=Ui.div`
width: 100%;
min-height: 90vh;
display: flex;
justify-content: space-between;
`;function HC(){return(0,o.jsxs)(qC,{children:[(0,o.jsx)(zC,{}),(0,o.jsx)(BC,{})]})}const KC=Ui.div`

`;function WC(){const e=nT.currentUser;return(0,o.jsxs)(KC,{children:[e?(0,o.jsx)(FC,{}):null,(0,o.jsx)(HC,{})]})}const GC=Ui.div`
text-align: center;
.MainLogo{
  width: 100px;
  margin-block: 1rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${e=>e.theme.colors.textMain};
}
.introComent{
  font-size: 2rem;
  font-weight: bold;
  .title{
    display: inline;
    color: ${e=>e.theme.colors.primary}
  }
  .titlePara{
    display: inline;
    color: ${e=>e.theme.colors.textMain}
  }
}
.semiComent{
  margin: 1rem;
  color: ${e=>e.theme.colors.textSecond}
}
`;function QC(){const{isDarkMode:e}=Gi();return(0,o.jsxs)(GC,{children:[e?(0,o.jsx)("img",{className:"MainLogo",src:"/images/logoB.png",alt:"test"}):(0,o.jsx)("img",{className:"MainLogo",src:"/images/logoW.png",alt:"test"}),(0,o.jsxs)("div",{className:"introComent",children:[(0,o.jsx)("p",{className:"title",children:"리픽"}),(0,o.jsx)("p",{className:"titlePara",children:"에 오신 걸 환영합니다."})]}),(0,o.jsx)("p",{className:"semiComent",children:"REPIC은 개발자를 위한 플랫폼입니다."})]})}let YC=class{email="";password="";error=!1;isPending=!1;async login(){try{this.setIsPending(!0),this.setError(!1),await aT.login({email:this.email,password:this.password}),this.setIsPending(!1),this.setError(!1),this.changeEmail(""),this.changePassword("")}catch(e){this.setError(!0),this.setIsPending(!1)}}setError(e){this.error=e}setIsPending(e){this.isPending=e}changeEmail(e){this.email=e}changePassword(e){this.password=e}get valid(){return this.email.includes("@")&&this.password.length>=4}};en([Ks()],YC.prototype,"setError",null),en([Ks()],YC.prototype,"setIsPending",null),en([Ks()],YC.prototype,"changeEmail",null),en([Ks()],YC.prototype,"changePassword",null),YC=en([Ms(),Hs()],YC);const XC=Ui.div`
margin-block: 1rem;
  label{
    text-align: left;
    p{
      margin-bottom: 1rem;
    }
    input{
      border-radius: 1rem;
      border: none;
      background-color: ${e=>e.theme.colors.buttonMain};
      height: 40px;
      width: 300px;
      padding: 1rem;
      color: ${e=>e.theme.colors.textMain};
    }
  }
`;function JC({label:e,value:t,placeholder:n,type:r="text",onChange:i,readOnly:s=!1}){return(0,o.jsx)(XC,{children:(0,o.jsxs)("label",{children:[(0,o.jsx)("p",{children:e}),(0,o.jsx)("input",{type:r,placeholder:n,value:t,onChange:e=>{i&&i(e.target.value)},readOnly:s})]})})}const ZC=Ui.div`
margin-top: 3rem;
text-align: center;
  p{
    color: ${e=>e.theme.colors.textMain}
  }
  form{
    margin: auto;
    margin-block: 2rem;
    max-width: 300px;
    p{
      margin-top: 2rem;
      a{
        color: ${e=>e.theme.colors.primaryDeep};
      }
    }
  }
`;function eN(){const[{email:e,password:t,valid:n},r]=Ws(Ds.resolve(YC)),i=mt();return(0,o.jsxs)(ZC,{className:"loginBox",children:[(0,o.jsx)("p",{className:"login",children:"REPIC아이디로 로그인"}),(0,o.jsx)("form",{onSubmit:e=>{e.preventDefault(),r.login().then((()=>{i("/")}))},children:(0,o.jsxs)("fieldset",{children:[(0,o.jsx)(JC,{value:e,onChange:e=>{r.changeEmail(e)},label:"Email",placeholder:"email@exmaple.com"}),(0,o.jsx)(JC,{value:t,onChange:e=>{r.changePassword(e)},label:"Password",type:"password",placeholder:"Password"}),(0,o.jsx)($T,{label:"로그인",type:"submit",disable:n}),(0,o.jsxs)("p",{children:["아직 회원이 아니신가요?",(0,o.jsx)(Gt,{to:"/signup",children:"회원가입"})]})]})})]})}const tN=Ui.div`
  padding-bottom: 80px;
`;function nN(){return(0,o.jsxs)(tN,{children:[(0,o.jsx)(QC,{}),(0,o.jsx)(eN,{})]})}N=s("fYo6y");function rN({DocId:e}){const[t,n]=(0,N.useState)();return(0,N.useEffect)((()=>{_I(CE(rT,"Projects"),(t=>{t.docs.forEach((t=>{const r={...t.data(),id:t.id};e===r.id&&n(r)}))}))}),[]),{gotProjectItem:t}}N=s("fYo6y");let iN=class{projects=[];error=!1;isPending=!1;async readProjectItemsInfo(){this.setIsPending(!0),this.setError(!1);try{this.setIsPending(!1),this.setError(!1),await _I(CE(rT,"Projects"),(e=>{const t=[];e.docs.forEach((e=>{const n={...e.data(),id:e.id};t.push(n)})),this.setProjects(t)}))}catch(e){this.setIsPending(!1),this.setError(!0)}}async updateItemView({docId:e,updateValue:t}){this.setIsPending(!0),this.setError(!1);try{await aT.writeDocumentFieldArray({tranaction:"Projects",docId:e,updateKey:"view",updateValue:t}),this.setIsPending(!1),this.setError(!1)}catch(e){this.setIsPending(!1),this.setError(!0)}}async updateItemLikes({docId:e,updateValue:t}){this.setIsPending(!0),this.setError(!1);try{await aT.writeDocumentFieldArray({tranaction:"Projects",docId:e,updateKey:"likes",updateValue:t}),this.setIsPending(!1),this.setError(!1)}catch(e){this.setIsPending(!1),this.setError(!0)}}setProjects(e){this.projects=e}setError(e){this.error=e}setIsPending(e){this.isPending=e}};function sN(){return Ws(Ds.resolve(iN))}en([Ks()],iN.prototype,"setProjects",null),en([Ks()],iN.prototype,"setError",null),en([Ks()],iN.prototype,"setIsPending",null),iN=en([Ms(),Hs()],iN);const oN=Ui.div`
margin-top: 2rem;
border: 1px solid ${e=>e.theme.colors.textMain};
border-radius: .5rem;
padding: 1rem;
  textarea{
    width: 100%;
    height: 70px;
    padding: 1rem;
    resize: none;
    background-color: ${e=>e.theme.colors.backgroundMain};
    color: ${e=>e.theme.colors.textMain};
  }
  .buttonBox{
    text-align: end;
    margin-block: 2rem;
    button{
      width: 150px;
    }
  }
`;function aN({project:e}){const[{comment:t},n]=UT(),r=mt();Qi((()=>{n.changeComment("")}));return(0,o.jsxs)(oN,{children:[(0,o.jsx)("div",{children:(0,o.jsx)("textarea",{placeholder:"댓글 작성",value:t,onChange:e=>{n.changeComment(e.target.value)},cols:10,rows:10})}),(0,o.jsx)("div",{className:"buttonBox",children:(0,o.jsx)($T,{label:"작성하기",onClick:()=>{const t=nT.currentUser?.uid||"",i=iT.fromDate(new Date);""===t?(alert("로그인해주세요"),r("/login")):n.updateComment({tranaction:"Projects",docId:e.id,uid:t,createdTime:i})}})})]})}const lN=Ui.div`
margin-block: 1rem;
text-align: end;
`;function cN(){return(0,o.jsx)(lN,{children:(0,o.jsx)(qT,{})})}const uN=Ui.div``;function hN({project:e}){const{comments:t}=e;return(0,o.jsx)(uN,{children:t.sort(((e,t)=>t.createdTime.seconds-e.createdTime.seconds)).map((e=>(0,o.jsx)(DT,{comment:e},e.createdTime.seconds)))})}const dN=Ui.div``;function fN({project:e}){return(0,o.jsxs)(dN,{children:[(0,o.jsx)(aN,{project:e}),(0,o.jsx)(cN,{}),0!==e.comments.length&&(0,o.jsx)(hN,{project:e})]})}N=s("fYo6y");const pN=Ui.div`
display: flex;
align-items: center;
  .userThumbNail{
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-size: contain;
    background-color: white;
    box-shadow: 1px 1px 2px ${e=>e.theme.colors.textMain};
  }
  .userPara{
    padding: 0rem 2rem 0rem 2rem;
    h1{
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
    p{
      color: ${e=>e.theme.colors.textSecond};
      font-size: 1.5rem;
    }
  }
`;function mN({project:e,UserInfo:t}){const{date:n}=jT({createdTime:e.createdTime});return(0,o.jsxs)(pN,{className:"userInfo",children:[(0,o.jsx)(Gt,{to:`/user/${t[0].uid}?sort=WriteCommunity`,children:t[0].Initial?(0,o.jsx)("div",{className:"userThumbNail",style:{backgroundImage:`url(${t[0].thumbnailURL})`}}):(0,o.jsx)("div",{className:"userThumbNail",style:{backgroundImage:"url(/images/icons/default.jpg)"}})}),(0,o.jsxs)("div",{className:"userPara",children:[(0,o.jsx)("h1",{children:t[0].nickName}),(0,o.jsxs)("p",{children:["작성일 : ",n]})]})]})}const gN=Ui.div`
display: flex;
justify-content: space-between;
color: ${e=>e.theme.colors.textSecond};
font-size: 1.3rem;
padding: 0;
  div{
    margin: 0px 0px .5rem 0px;
    padding: 0rem 1rem 0rem 1rem;
    white-space: nowrap;
  }
@media (max-width: 720px){
  margin-top: 3rem;
}
`;function yN({project:e}){return(0,o.jsxs)(gN,{className:"itemInfo",children:[(0,o.jsxs)("div",{children:["댓글수 : ",e.comments.length,"개"]}),(0,o.jsxs)("div",{children:["좋아요 : ",e.likes.length,"개"]}),(0,o.jsxs)("div",{children:["방문자수 : ",e.view.length]})]})}const vN=Ui.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0rem 1rem 2rem 1rem;
  border-bottom: 1px solid ${e=>e.theme.colors.textMain};

@media (max-width: 720px){
  flex-direction: column;
  align-items: flex-start;
}
`;function bN({project:e,UserInfo:t}){return(0,o.jsxs)(vN,{children:[(0,o.jsx)(mN,{UserInfo:t,project:e}),(0,o.jsx)(yN,{project:e})]})}const wN=Ui.div`
width: 50%;
display: flex;
align-items: flex-end;
margin-block: .8rem;
h1{
  font-size: 1.8rem;
  font-weight: bold;
  margin-right: 2rem;
}
.stackBox{
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    .stack{
      width: 30px;
      height: 30px;
      margin: .5rem .5rem .5rem .5rem;
      background-size: contain;
      background-color: white;
      background-position: center;
      border-radius: 20px;
    }
  }
`;function xN({project:e,label:t,value:n="",type:r}){return"status"===r&&void 0!==e?(0,o.jsxs)(wN,{className:"defaultBox",children:[(0,o.jsx)("h1",{children:"모집상태"}),e.status?(0,o.jsx)("p",{children:"모집중"}):(0,o.jsx)("p",{children:"모집종료"})]}):"stacks"===r&&void 0!==e?(0,o.jsx)(wN,{className:"defaultBox",children:(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"사용스택"}),(0,o.jsx)("div",{className:"stackBox",children:e.stacks.map((e=>(0,o.jsx)("div",{className:"stack",style:{backgroundImage:`url(/images/library/resized/${e}.png)`}},e)))})]})}):(0,o.jsxs)(wN,{className:"defaultBox",children:[(0,o.jsx)("h1",{children:t}),(0,o.jsx)("p",{children:n})]})}const kN=Ui.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid ${e=>e.theme.colors.textMain};

@media (max-width: 720px){
  /* flex-direction: column;
  align-items: flex-start; */
}
`;function _N({project:e}){return(0,o.jsxs)(kN,{children:[(0,o.jsx)(xN,{label:"모집구분",value:e.proceedingMethod,type:"proceedingMethod"}),(0,o.jsx)(xN,{label:"모집상태",type:"status",project:e}),(0,o.jsx)(xN,{label:"시작예정",value:e.startDate,type:"startDate"}),(0,o.jsx)(xN,{label:"종료예정",value:e.endDate,type:"endDate"}),(0,o.jsx)(xN,{label:"모집분야",value:e.recruit,type:"recruit"}),(0,o.jsx)(xN,{label:"사용스택",type:"stacks",project:e})]})}const EN=Ui.div`
  .body{
    width: 100%;
    margin-block: 1rem;
    min-height: 500px;
    padding: 2rem;
    word-break: break-all;
    border-bottom: 1px solid ${e=>e.theme.colors.textMain};
    h1{
      font-weight: bold;
      font-size: 2rem;
      font-family: 'GmarketSansMedium';
      letter-spacing: 1px;
      margin-bottom: 2rem;
    }
    p{
      font-family: 'Noto Sans CJK KR';
      font-weight: 100;
      line-height: 2rem;
      letter-spacing: .6px;
    }
  }
  .buttonBox{
    text-align: end;
    button{
      border-radius: 1rem;
      border: none;
      margin: 1rem;
      white-space: nowrap;
      background-color: ${e=>e.theme.colors.buttonMain};
      color: ${e=>e.theme.colors.textMain};
      border: 1px solid ${e=>e.theme.colors.buttonMain};
      padding: 1rem;
      width: 60px;
      height: 40px;
      img{
        height: 100%;
        margin-right: .3rem;
      }
    }
    button:hover{
      cursor: pointer;
      border: 1px solid ${e=>e.theme.colors.textMain};
    }
  }
`;function IN({project:e}){const{isDarkMode:t}=Gi(),n=mt(),r=nT.currentUser?.uid||"",[,i]=sN();return(0,o.jsxs)(EN,{children:[(0,o.jsxs)("div",{className:"body",children:[(0,o.jsx)("h1",{children:e.title}),(0,o.jsx)("p",{children:e.text})]}),(0,o.jsx)("div",{className:"buttonBox",children:(0,o.jsxs)("button",{type:"button",onClick:()=>{""===r?(alert("로그인해주세요"),n("/login")):i.updateItemLikes({docId:e.id,updateValue:r})},children:[t?(0,o.jsx)("img",{src:"/images/icons/like02.png",alt:""}):(0,o.jsx)("img",{src:"/images/icons/like04.png",alt:""}),e.likes.length]})})]})}const SN=Ui.div`

`;function TN({project:e}){const[{UserInfo:t},n]=YT();return(0,N.useEffect)((()=>{n.readUserInfo({uid:e.uid})}),[]),t.length?(0,o.jsxs)(SN,{children:[(0,o.jsx)(bN,{UserInfo:t,project:e}),(0,o.jsx)(_N,{project:e}),(0,o.jsx)(IN,{project:e})]}):null}const CN=Ui.div`

`;function NN({project:e}){const[,t]=sN();return(0,N.useEffect)((()=>{const n=String(iT.fromDate(new Date).seconds)+String(iT.fromDate(new Date).nanoseconds);t.updateItemView({docId:e.id,updateValue:n})}),[]),(0,o.jsxs)(CN,{children:[(0,o.jsx)(TN,{project:e}),(0,o.jsx)(fN,{project:e})]})}N=s("fYo6y"),N=s("fYo6y");let RN=class{searchText="";radioValue="";changeSearchText(e){this.searchText=e}changeRadioValue(e){this.radioValue=e}};function PN(){return Ws(Ds.resolve(RN))}en([Ks()],RN.prototype,"changeSearchText",null),en([Ks()],RN.prototype,"changeRadioValue",null),RN=en([Ms(),Hs()],RN);const jN=Ui.div`
  .ProjectBanner{
  border-radius: 1rem;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  background-image: url('/images/ProjectBanner3.jpg');
  background-size: cover ;
  background-position: center;
  background-color: black;
  }
  .ProjectHeader{
    margin-bottom: 1rem;
    h1{
      margin-block: 1rem;
      font-size: 2rem;
      font-weight: bold;
    }
    p{
      color: ${e=>e.theme.colors.textSecond};
      font-weight: bold;
    }
  }
`;function AN(){return(0,o.jsxs)(jN,{children:[(0,o.jsxs)("div",{className:"ProjectHeader",children:[(0,o.jsx)("h1",{children:"[ PROJECT ]"}),(0,o.jsx)("p",{children:"다양한 사람과 팀을 이루고 프로젝트를 진행해보세요"})]}),(0,o.jsx)("div",{className:"ProjectBanner"})]})}function DN({Search:e,projectItems:t}){const n=t.filter((t=>t.title.includes(e.trim())||t.text.includes(e.trim()))).sort(((e,t)=>t.createdTime.seconds-e.createdTime.seconds));return{sortedItems:n}}N=s("fYo6y");const ON=Ui.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-block: 1.5rem;
  .clone{
    visibility: hidden;
  }
  .pageButtonBox{
    display: flex;
    text-align: center;
    padding-block: 1rem;
    a{
      margin: .3rem;
      text-decoration: none;
      color: ${e=>e.theme.colors.textMain};
    }
  }
  .ButtonBox{
    text-align: center;
    button{
      width: 100px;
      margin: auto;
    }
  }
`;function MN({projects:e,Page:t,Search:n}){const[r,i]=(0,N.useState)(0),[{radioValue:s}]=PN(),a=mt();(0,N.useEffect)((()=>{i(Math.ceil(e.length/10))}),[e]);const l=()=>{a("/projects/write")};return(0,o.jsxs)(ON,{children:[(0,o.jsx)("div",{className:"ButtonBox clone",children:(0,o.jsx)($T,{label:"글작성",type:"submit",onClick:l})}),(0,o.jsx)("div",{className:"pageButtonBox",children:n?(0,o.jsxs)(o.Fragment,{children:[1===Number(t)&&(0,o.jsx)(Gt,{to:`/projects?page=1&filter=${s}&search=${n}`,children:"<"}),1!==Number(t)&&(0,o.jsx)(Gt,{to:`/projects?page=${Number(t)-1}&filter=${s}&search=${n}`,children:"<"}),(()=>{const e=[];for(let i=0;i<r;i++)e.push((0,o.jsx)(Gt,{to:`/communities?page=${i+1}&sort=${s}&search=${n}`,children:Number(t)===i+1?(0,o.jsx)("p",{className:`pages${i+1} Active`,children:i+1}):(0,o.jsx)("p",{className:`pages${i+1}`,children:i+1})},i));return e})(),Number(t)===r&&(0,o.jsx)(Gt,{to:`/projects?page=${r}&filter=${s}&search=${n}`,children:">"}),Number(t)!==r&&(0,o.jsx)(Gt,{to:`/projects?page=${Number(t)+1}&filter=${s}&search=${n}`,children:">"})]}):(0,o.jsxs)(o.Fragment,{children:[1===Number(t)&&(0,o.jsx)(Gt,{to:`/projects?page=1&filter=${s}`,children:"<"}),1!==Number(t)&&(0,o.jsx)(Gt,{to:`/projects?page=${Number(t)-1}&filter=${s}`,children:"<"}),(()=>{const e=[];for(let n=0;n<r;n++)e.push((0,o.jsx)(Gt,{to:`/communities?page=${n+1}&sort=${s}`,children:Number(t)===n+1?(0,o.jsx)("p",{className:`pages${n+1} Active`,children:n+1}):(0,o.jsx)("p",{className:`pages${n+1}`,children:n+1})},n));return e})(),Number(t)===r&&(0,o.jsx)(Gt,{to:`/projects?page=${r}&filter=${s}`,children:">"}),Number(t)!==r&&(0,o.jsx)(Gt,{to:`/projects?page=${Number(t)+1}&filter=${s}`,children:">"})]})}),(0,o.jsx)("div",{className:"ButtonBox",children:(0,o.jsx)($T,{label:"글작성",type:"submit",onClick:l})})]})}const LN=Ui.tr`
align-items: center;
line-height: 40px;
  a{
    color : ${e=>e.theme.colors.textMain};
    text-decoration: none;
    padding: 1rem;
    border-radius: 1rem;
  }
  .active{
    background-color: ${e=>e.theme.colors.buttonMain};
    color: ${e=>e.theme.colors.primaryDeep}
  }
`;function UN({Page:e,Search:t}){const[{radioValue:n}]=PN();return(0,o.jsx)(LN,{children:t?(0,o.jsxs)("td",{children:[(0,o.jsx)(Gt,{className:`${"All"===n&&"active"}`,to:`/projects?page=${e}&filter=All&search=${t}`,children:"전체"}),(0,o.jsx)(Gt,{className:`${"Front"===n&&"active"}`,to:`/projects?page=${e}&filter=Front&search=${t}`,children:"프론트앤드"}),(0,o.jsx)(Gt,{className:`${"Back"===n&&"active"}`,to:`/projects?page=${e}&filter=Back&search=${t}`,children:"백앤드"}),(0,o.jsx)(Gt,{className:`${"Design"===n&&"active"}`,to:`/projects?page=${e}&filter=Design&search=${t}`,children:"디자인"}),(0,o.jsx)(Gt,{className:`${"Plan"===n&&"active"}`,to:`/projects?page=${e}&filter=Plan&search=${t}`,children:"기획"})]}):(0,o.jsxs)("td",{children:[(0,o.jsx)(Gt,{className:`${"All"===n&&"active"}`,to:`/projects?page=${e}&filter=All`,children:"전체"}),(0,o.jsx)(Gt,{className:`${"Front"===n&&"active"}`,to:`/projects?page=${e}&filter=Front`,children:"프론트앤드"}),(0,o.jsx)(Gt,{className:`${"Back"===n&&"active"}`,to:`/projects?page=${e}&filter=Back`,children:"백앤드"}),(0,o.jsx)(Gt,{className:`${"Design"===n&&"active"}`,to:`/projects?page=${e}&filter=Design`,children:"디자인"}),(0,o.jsx)(Gt,{className:`${"Plan"===n&&"active"}`,to:`/projects?page=${e}&filter=Plan`,children:"기획"})]})})}const FN=Ui.tr`
  input{
    width: 300px;
    height: 40px;
    padding: 1rem;
    border: 2px solid ${e=>e.theme.colors.buttonMain};
    border-radius: 0.3rem;
    background-color: ${e=>e.theme.colors.backgroundMain};
    color: ${e=>e.theme.colors.textMain};
  }
  button{
    height: 40px;
    padding: 1rem 2rem 1rem 2rem;
    white-space: nowrap;
    background-color: ${e=>e.theme.colors.buttonMain};
    color: ${e=>e.theme.colors.textMain};
    border: none;
  }
@media (max-width: 720px){
  display: block;
  margin-top: 1rem;
  white-space: nowrap;
}
`;function $N(){const e=mt(),[{searchText:t,radioValue:n},r]=PN(),i=()=>{t?e(`/projects?page=1&filter=${n}&search=${t}`):t||e(`/projects?page=1&filter=${n}`)};return(0,o.jsx)(FN,{children:(0,o.jsxs)("td",{children:[(0,o.jsx)("input",{type:"text",value:t,onKeyUp:e=>{"Enter"===e.key&&i()},onChange:e=>{r.changeSearchText(e.target.value)},placeholder:"검색하세요"}),(0,o.jsx)("button",{type:"button",onClick:i,children:"검색"})]})})}const zN=Ui.div`
padding-block: 2rem;
border-bottom: 1px solid ${e=>e.theme.colors.textMain};
justify-content: space-between;
align-items: center;
  table{
    padding-block: 1.2rem;
    width: 100%;
    thead{
      display: flex;
      justify-content: space-between;
    }
  }
@media (max-width: 720px){
  table{
    thead{
      display: block;
    }
  }
}
`;function VN({Page:e,Search:t}){return(0,o.jsx)(zN,{children:(0,o.jsx)("table",{children:(0,o.jsxs)("thead",{children:[(0,o.jsx)(UN,{Page:e,Search:t}),(0,o.jsx)($N,{})]})})})}const BN=Ui.div`
border-top: 1px solid ${e=>e.theme.colors.textMain};
padding: 1rem;
display: flex;
justify-content: space-between;
align-items: center;
  .author{
    display: flex;
    align-items: center;
    img{
      border-radius: 15px;
      width: 30px;
      height: 30px;
      margin-right: 1rem;
    }
    h1{
      font-size: 1.2rem;
    }
  }
  .iconbox{
    margin-right: 1rem;
    display: flex;
    .iconitem{
      display: flex;
      margin: 0rem 0.5rem 0rem 0.5rem;
    img{
      margin-right: 0.5rem;
      height: 15px;
    }
    }
  }
`;function qN({project:e}){const{gotUserInfo:t}=PT({uid:e.uid}),{isDarkMode:n}=Gi();return t?(0,o.jsxs)(BN,{children:[(0,o.jsxs)("div",{className:"author",children:[t.Initial?(0,o.jsx)("img",{src:`${t.thumbnailURL}`,alt:"ThumbNail",className:"ThumbnailImg"}):(0,o.jsx)("img",{src:"/images/icons/default.jpg",alt:"ThumbDefault",className:"ThumbnailImg"}),(0,o.jsx)("h1",{children:t.nickName})]}),n?(0,o.jsxs)("div",{className:"iconbox",children:[(0,o.jsxs)("p",{className:"iconitem",children:[(0,o.jsx)("img",{src:"/images/icons/more01.png",alt:""}),e.view.length]}),(0,o.jsxs)("p",{className:"iconitem",children:[(0,o.jsx)("img",{src:"/images/icons/user02.png",alt:""}),e.comments.length]})]}):(0,o.jsxs)("div",{className:"iconbox",children:[(0,o.jsxs)("p",{className:"iconitem",children:[(0,o.jsx)("img",{src:"/images/icons/more03.png",alt:""}),e.view.length]}),(0,o.jsxs)("p",{className:"iconitem",children:[(0,o.jsx)("img",{src:"/images/icons/user04.png",alt:""}),e.comments.length]})]})]}):null}const HN=Ui.div`
  .textBody{
    .textBox{
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: break-word;
    display: block;
    width: 100%;
    padding: 1rem;
  }
  }
  .stackBox{
    margin-block: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .stack{
      width: 30px;
      height: 30px;
      margin: .5rem .5rem .5rem .5rem;
      background-size: contain;
      background-color: white;
      background-position: center;
      border-radius: 20px;
    }
    .hidden{
      display: none;
    }
  }
`;function KN({project:e}){return(0,o.jsxs)(HN,{children:[(0,o.jsx)("div",{className:"textBody",children:(0,o.jsx)("p",{className:"textBox",children:e.text})}),(0,o.jsxs)("div",{className:"stackBox",children:[e.stacks.map(((e,t)=>(0,o.jsx)("div",{className:t>=4?"hidden":"stack",style:{backgroundImage:`url(/images/library/resized/${e}.png)`}},e))),e.stacks.length>=5&&(0,o.jsx)("div",{children:"..."})]})]})}const WN=Ui.div`
  .deadLine{
    display: flex;
    p{
      margin-block: .5rem;
      padding: 1rem;
      font-size: 1.2rem;
    }
  }
  div{
    h1{
      margin-block: .5rem;
      padding: 1rem;
      font-weight: bold;
    }
  }
`;function GN({project:e}){return(0,o.jsxs)(WN,{className:"itemCard",children:[(0,o.jsx)("div",{className:"deadLine",children:(0,o.jsxs)("p",{children:["기간 |",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),e.startDate," - ",e.endDate]})}),(0,o.jsx)("div",{children:(0,o.jsx)("h1",{children:e.title})})]})}const QN=Ui.div`
width: 33%;
padding: 1rem;
  a{
    text-decoration: none;
    color: ${e=>e.theme.colors.textMain};
    .projectCard{
      border: 1px solid ${e=>e.theme.colors.textMain};
      border-radius: .5rem;
      padding: .5rem;
      .itemCard{
      }
    }
    .projectCard:hover{
      border: 1px solid ${e=>e.theme.colors.primary};
      background-color: ${e=>e.theme.colors.backgroundThird};
    }
  }
@media (max-width: 720px){
  width: 50%;
}
`;function YN({project:e}){return(0,o.jsx)(QN,{children:(0,o.jsx)(Gt,{to:`/projects/${e.id}`,children:(0,o.jsxs)("div",{className:"projectCard",children:[(0,o.jsx)(GN,{project:e}),(0,o.jsx)(KN,{project:e}),(0,o.jsx)(qN,{project:e})]})})})}const XN=Ui.div`
  display: flex;
  flex-wrap: wrap;
`;function JN({projects:e,Page:t}){const n=e.filter(((e,n)=>n<12*Number(t)&&12*(Number(t)-1)<=n));return(0,o.jsx)(XN,{children:n.map((e=>(0,o.jsx)(YN,{project:e},e.id)))})}const ZN=Ui.div`
  
`;function eR({Page:e,Search:t,projects:n}){const{sortedItems:r}=DN({Search:t,projectItems:n});return(0,o.jsxs)(ZN,{children:[(0,o.jsx)(VN,{Page:e,Search:t}),(0,o.jsx)(JN,{projects:r,Page:e}),(0,o.jsx)(MN,{projects:r,Page:e,Search:t})]})}const tR=Ui.div``;function nR({Page:e,Search:t,projects:n}){const r=AC(),[i,s]=(0,N.useState)(n),[{radioValue:a}]=PN();return(0,N.useEffect)((()=>{"All"===a?s(n):"Front"===a?s(n.filter((e=>"프론트앤드"===e.recruit))):"Back"===a?s(n.filter((e=>"백앤드"===e.recruit))):"Design"===a?s(n.filter((e=>"디자인"===e.recruit))):"Plan"===a&&s(n.filter((e=>"기획"===e.recruit))),r()}),[a]),(0,o.jsxs)(tR,{children:[(0,o.jsx)(AN,{}),(0,o.jsx)(eR,{Page:e,Search:t,projects:i})]})}let rR=class{title="";text="";stacks=[];startDate="";endDate="";proceedingMethod="proceedingMethod";recruit="recruit";status=!0;error=!1;isPending=!1;async addDocument(){this.setIsPending(!0),this.setError(!1);try{await aT.addDocument({stacks:this.stacks,startDate:this.startDate,endDate:this.endDate,proceedingMethod:this.proceedingMethod,recruit:this.recruit,status:this.status,transaction:"Projects",title:this.title,text:this.text}),this.setIsPending(!1),this.setError(!1),this.setDefault()}catch(e){this.setIsPending(!1),this.setError(!0)}}setDefault(){this.title="",this.text="",this.stacks=[],this.startDate="",this.endDate="",this.proceedingMethod="",this.status=!0,this.recruit=""}changeTitle(e){this.title=e}changeText(e){this.text=e}changeStacks(e){this.stacks=e}changeStartDate(e){this.startDate=e}changeEndDate(e){this.endDate=e}changeProceedingMethod(e){this.proceedingMethod=e}changeStatus(e){this.status=e}changeRecurte(e){this.recruit=e}setError(e){this.error=e}setIsPending(e){this.isPending=e}get valid(){return!!this.title&&!!this.text&&this.stacks.length>0&&Number(this.endDate.replace(/-/g,""))-Number(this.endDate.replace(/-/g,""))>=0&&"proceedingMethod"!==this.proceedingMethod&&"recruit"!==this.recruit}};function iR(){return Ws(Ds.resolve(rR))}en([Ks()],rR.prototype,"setDefault",null),en([Ks()],rR.prototype,"changeTitle",null),en([Ks()],rR.prototype,"changeText",null),en([Ks()],rR.prototype,"changeStacks",null),en([Ks()],rR.prototype,"changeStartDate",null),en([Ks()],rR.prototype,"changeEndDate",null),en([Ks()],rR.prototype,"changeProceedingMethod",null),en([Ks()],rR.prototype,"changeStatus",null),en([Ks()],rR.prototype,"changeRecurte",null),en([Ks()],rR.prototype,"setError",null),en([Ks()],rR.prototype,"setIsPending",null),rR=en([Ms(),Hs()],rR);const sR=Ui.div`
width: 100%;
  input{
    width: 100%;
    margin-block: 1rem;
    padding: 1rem;
    height: 4rem;
    background-color: ${e=>e.theme.colors.backgroundMain};
    border: 1px solid ${e=>e.theme.colors.textSecond};
    color: ${e=>e.theme.colors.textMain};
  }
`;function oR(){const[{title:e},t]=iR();return(0,o.jsx)(sR,{children:(0,o.jsx)("input",{type:"text",value:e,onChange:e=>{t.changeTitle(e.target.value)},required:!0,placeholder:"제목을 입력해주세요"})})}const aR=Ui.div`
width: 100%;
  textarea{
    padding: 1rem;
    width: 100%;
    height: 720px;
    margin-block: 1rem;
    resize: none;
    background-color: ${e=>e.theme.colors.backgroundMain};
    color: ${e=>e.theme.colors.textMain};
  }
`;function lR(){const[{text:e},t]=iR();return(0,o.jsx)(aR,{children:(0,o.jsx)("textarea",{value:e,onChange:e=>{t.changeText(e.target.value)},required:!0,placeholder:"내용을 입력해주세요"})})}const cR=Ui.div`
width: 100%;
  select{
    width: 100%;
    margin-block: 1rem;
    padding: 1rem;
    height: 4rem;
    background-color: ${e=>e.theme.colors.backgroundMain};
    border: 1px solid ${e=>e.theme.colors.textSecond};
    color: ${e=>e.theme.colors.textMain};
  }
`;function uR(){const[{proceedingMethod:e},t]=iR();return(0,o.jsxs)(cR,{className:"selectBox",children:[(0,o.jsx)("p",{children:"진행방식"}),(0,o.jsxs)("select",{value:e,onChange:e=>{t.changeProceedingMethod(e.target.value)},children:[(0,o.jsx)("option",{value:"proceedingMethod",children:"선택해주세요"}),(0,o.jsx)("option",{value:"온라인",children:"온라인"}),(0,o.jsx)("option",{value:"오프라인",children:"오프라인"})]})]})}const hR=Ui.div`
width: 100%;
  select{
    width: 100%;
    margin-block: 1rem;
    padding: 1rem;
    height: 4rem;
    background-color: ${e=>e.theme.colors.backgroundMain};
    border: 1px solid ${e=>e.theme.colors.textSecond};
    color: ${e=>e.theme.colors.textMain};
  }
`;function dR(){const[{recruit:e},t]=iR();return(0,o.jsxs)(hR,{className:"selectBox",children:[(0,o.jsx)("p",{children:"모집인원"}),(0,o.jsxs)("select",{value:e,onChange:e=>{t.changeRecurte(e.target.value)},children:[(0,o.jsx)("option",{value:"recrute",children:"선택해주세요"}),(0,o.jsx)("option",{value:"기획",children:"기획"}),(0,o.jsx)("option",{value:"디자인",children:"디자인"}),(0,o.jsx)("option",{value:"프론트앤드",children:"프론트엔드"}),(0,o.jsx)("option",{value:"백앤드",children:"백앤드"})]})]})}const fR=Ui.div`
width: 100%;
  input{
    width: 100%;
    margin-block: 1rem;
    padding: 1rem;
    height: 4rem;
    background-color: ${e=>e.theme.colors.backgroundMain};
    border: 1px solid ${e=>e.theme.colors.textSecond};
    color: ${e=>e.theme.colors.textMain};
    color-scheme: ${e=>e.theme.colors.scheme};;
  }
`;function pR(){const[,e]=iR();return(0,o.jsxs)(fR,{children:[(0,o.jsx)("label",{htmlFor:"start",children:"시작일"}),(0,o.jsx)("input",{type:"date",id:"start",name:"trip-start",onChange:t=>{e.changeStartDate(t.target.value)}}),(0,o.jsx)("label",{htmlFor:"start",children:"종료일"}),(0,o.jsx)("input",{type:"date",id:"start",name:"trip-start",onChange:t=>{e.changeEndDate(t.target.value)}})]})}const mR=Ui.li`
list-style-type: none;
  input{
    display: none;
  }
  input[type='checkbox']:checked + label div{
    box-sizing: border-box;
    border: 1px solid red;
  }
  input[type='checkbox']:checked + label div:before{
    content: '';
    position:absolute;
    z-index: -1;
    width:7px;
    height:7px;
    border-radius: 1rem;
    background-color: red;
  }
  .stackLabel{
    position: static;
    padding: 0;
    display: inline;
    margin: 1rem;
    div{
      width: 35px;
      height: 35px;
      margin: 0rem 4px 0rem 4px;
      border-radius: 2rem;
      background-color: white;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
    div:hover{
      cursor: pointer;
    }
    span{
      position: absolute;
      font-size: 1.2rem;
      width: 43px;
      text-align: center;
      visibility: hidden;
    }
    div:hover + span{
      visibility: visible;
    }
  }
`;function gR({label:e,onChange:t,UserStacks:n}){return(0,o.jsxs)(mR,{className:"stack",children:[(0,o.jsx)("input",{type:"checkBox",id:`${e}`,onChange:e=>{t&&t(e.target.id)},checked:n.includes(`${e}`)}),(0,o.jsxs)("label",{className:"stackLabel",htmlFor:`${e}`,children:[(0,o.jsx)("div",{className:`${e}`,style:{backgroundImage:`url(/images/library/resized/${e}.png)`}}),(0,o.jsx)("span",{className:"test",children:e})]})]})}const yR=Ui.div`
  .stackBox{
    .front, .back, .global{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
  }
`;function vR(){const[{stacks:e},t]=iR(),n=n=>{if(console.log(n),e.includes(n)){if(e.includes(n)){const r=e.filter((e=>e!==n));t.changeStacks(r)}}else{const r=[...e,n];t.changeStacks(r)}};return(0,o.jsxs)(yR,{children:["프로젝트 사용 기술",(0,o.jsx)("div",{className:"stackBox",children:(0,o.jsx)("div",{className:"front",children:no.map((t=>(0,o.jsx)(gR,{label:t,onChange:n,UserStacks:e},t)))})})]})}const bR=Ui.div`
margin-top: 3rem;
form{
  width: 100%
}
div{
  width: 100%;
  input{
    width: 100%;
    margin-block: 1rem;
    padding: 1rem;
    height: 4rem;
    background-color: ${e=>e.theme.colors.backgroundMain};
    border: 1px solid ${e=>e.theme.colors.textSecond};
    color: ${e=>e.theme.colors.textMain};
    color-scheme: ${e=>e.theme.colors.scheme};;
  }
}
`;function wR(){const[{valid:e},t]=iR(),n=mt();return(0,o.jsx)(bR,{children:(0,o.jsx)("div",{children:(0,o.jsxs)("form",{onSubmit:e=>{e.preventDefault(),t.addDocument().then((()=>{n("/projects?page=1&filter=All")}))},children:[(0,o.jsx)("h1",{children:"프로젝트 작성"}),(0,o.jsx)(oR,{}),(0,o.jsx)(uR,{}),(0,o.jsx)(dR,{}),(0,o.jsx)(pR,{}),(0,o.jsx)(vR,{}),(0,o.jsx)(lR,{}),(0,o.jsx)($T,{label:"게시하기",type:"submit",disable:e})]})})})}N=s("fYo6y"),N=s("fYo6y");function xR(){return Ws(Ds.resolve(oT))}s("fYo6y");const kR=Ui.div`
  h1{
    font-size: 1.5rem;
    font-weight: normal;
    margin-block: 2rem;
  }
  input, .introduce{
  background-color: rgba( 255, 255, 255, 0 );
  color: ${e=>e.theme.colors.textMain};
  border: 1px solid ${e=>e.theme.colors.textSecond};
  width: 100%;
  font-size: 1.6rem;
  border-radius: 0.4rem;
  padding: 3rem .7rem 1.7rem .7rem;
  margin-block: 1rem;
}
.introduce{
  min-height: 100px;
  resize: none;
}
  label{
    position: absolute;
    padding: 2rem 0rem 0rem 1rem;
    color: ${e=>e.theme.colors.textSecond};
    font-weight: 300;
    font-size: 1.4rem;
    z-index: -1;
  }
`;function _R(){const[{UserNickName:e,UserIntro:t},n]=xR();return(0,o.jsxs)(kR,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"닉네임변경"}),(0,o.jsx)("label",{className:"NickLabel",htmlFor:"nickName",children:"NickName"}),(0,o.jsx)("input",{type:"text",value:e,id:"nickName",onChange:e=>{n.setNickName(e.target.value)}})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"자기소개 작성"}),(0,o.jsx)("label",{className:"IntroLabel",htmlFor:"intro",children:"Introduce"}),(0,o.jsx)("textarea",{className:"introduce",value:t,id:"intro",onChange:e=>{n.setIntro(e.target.value)},cols:30,rows:10})]})]})}const ER=Ui.div`
  h1{
    font-size: 1.5rem;
    font-weight: normal;
    margin-block: 2rem;
  }
  input{
  background-color: rgba( 255, 255, 255, 0 );
  color: ${e=>e.theme.colors.textMain};
  border: 1px solid ${e=>e.theme.colors.textSecond};
  width: 100%;
  font-size: 1.6rem;
  border-radius: 0.4rem;
  padding: 1.7rem .7rem 1.7rem .7rem;
  margin-block: 1rem;
  }
`;function IR({setFile:e}){return(0,o.jsxs)(ER,{children:[(0,o.jsx)("h1",{children:"사진변경"}),(0,o.jsx)("input",{type:"file",onChange:t=>{null!==t.target.files&&e(t.target.files[0])},id:"photo"})]})}const SR=Ui.div`
  h1{
    font-size: 1.5rem;
    font-weight: normal;
    margin-block: 2rem;
  }
  .stackBox{
    .front, .back, .global{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
  }
`;function TR(){const[{UserStacks:e},t]=xR(),n=n=>{if(e.includes(n)){if(e.includes(n)){const r=e.filter((e=>e!==n));t.setStacks(r)}}else{const r=[...e,n];t.setStacks(r)}};return(0,o.jsxs)(SR,{children:[(0,o.jsx)("h1",{children:"사용가능한 기술"}),(0,o.jsxs)("div",{className:"stackBox",children:[(0,o.jsx)("div",{className:"front",children:Zs.map((t=>(0,o.jsx)(gR,{label:t,onChange:n,UserStacks:e},t)))}),(0,o.jsx)("div",{className:"back",children:eo.map((t=>(0,o.jsx)(gR,{label:t,onChange:n,UserStacks:e},t)))}),(0,o.jsx)("div",{className:"global",children:to.map((t=>(0,o.jsx)(gR,{label:t,onChange:n,UserStacks:e},t)))})]})]})}const CR=Ui.div`
text-align: center;
  button{
    width: 100%;
  }
`;function NR({file:e,userInfo:t}){const[{UserStacks:n,UserNickName:r,UserIntro:i},s]=xR();return(0,o.jsx)(CR,{children:(0,o.jsx)("form",{onSubmit:o=>{o.preventDefault(),e.name&&s.uploadIMG({file:e,Uid:t.uid,docId:t.id}),no.forEach((e=>{s.delDocumentField({tranaction:"Users",docId:t.id,updateKey:"stacks",updateValue:e})})),n.forEach((e=>{s.writeDocumentField({tranaction:"Users",docId:t.id,updateKey:"stacks",updateValue:e})})),s.updateDocumentField({tranaction:"Users",docId:t.id,updateKey:"nickName",updateValue:r}),s.updateDocumentField({tranaction:"Users",docId:t.id,updateKey:"introduce",updateValue:i})},children:(0,o.jsx)($T,{label:"정보 변경",type:"submit"})})})}const RR=Ui.div`
  width: 62%;
  padding: 0rem 1rem 2rem 1rem;
  margin-bottom: 2.5rem;

  @media (max-width: 720px) {
    width: 100%;
  }
`;function PR({userInfo:e}){const[,t]=xR(),[n,r]=(0,N.useState)({});return(0,N.useEffect)((()=>{t.Initialization({UserIntro:e.introduce,UserURL:e.thumbnailURL,UserNickName:e.nickName,UserStacks:e.stacks})}),[e]),(0,o.jsxs)(RR,{children:[(0,o.jsx)(IR,{setFile:r}),(0,o.jsx)(TR,{}),(0,o.jsx)(_R,{}),(0,o.jsx)(NR,{file:n,userInfo:e})]})}const jR=Ui.div`
padding : 1rem;
width: 36%;
min-height: 80vh;
margin-bottom: 3rem;
text-align: center;
border-right: 1px solid ${e=>e.theme.colors.textMain};
  h1{
    font-size: 3rem;
    font-weight: normal;
  }
  .Thumbnail{
    display: inline-block;
    width: 80px;
    margin-block: 2rem;
    height: 80px;
    border-radius: 5rem;
    background-color: white;
    box-shadow: 1px 1px 3px ${e=>e.theme.colors.textMain};
    .ThumbnailImg{
      border-radius: 5rem;
      width: 100%;
      padding: 0.2rem;
    }
  }
  .stackBox{
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    .stack{
      width: 30px;
      height: 30px;
      margin: .5rem .5rem .5rem .5rem;
      background-size: contain;
      background-color: white;
      background-position: center;
      border-radius: 20px;
    }
  }

  @media (max-width: 720px) {
    display: none;
  }
`;function AR({userInfo:e}){return(0,o.jsxs)(jR,{children:[(0,o.jsx)("h1",{children:e.nickName}),(0,o.jsx)("div",{className:"Thumbnail",children:e.Initial?(0,o.jsx)("img",{src:`${e.thumbnailURL}`,alt:"Thumb",className:"ThumbnailImg"}):(0,o.jsx)("img",{src:"/images/icons/default.jpg",alt:"ThumbDefault",className:"ThumbnailImg"})}),(0,o.jsx)("div",{children:e.email}),(0,o.jsx)("div",{className:"stackBox",children:e.stacks.map((e=>(0,o.jsx)("div",{className:"stack",style:{backgroundImage:`url(/images/library/resized/${e}.png)`}},e)))})]})}const DR=Ui.div`
  display: flex;
  justify-content: space-between;
`;function OR({userInfo:e}){return(0,o.jsxs)(DR,{children:[(0,o.jsx)(AR,{userInfo:e}),(0,o.jsx)(PR,{userInfo:e})]})}const MR=Ui.div`
text-align: center;
.MainLogo{
  width: 100px;
  margin-block: 1rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${e=>e.theme.colors.textMain};
}
.introComent{
  font-size: 2rem;
  font-weight: bold;
  .title{
    display: inline;
    color: ${e=>e.theme.colors.primary}
  }
  .titlePara{
    display: inline;
    color: ${e=>e.theme.colors.textMain}
  }
}
.semiComent{
  margin: 1rem;
  color: ${e=>e.theme.colors.textSecond}
}
`;function LR(){const{isDarkMode:e}=Gi();return(0,o.jsxs)(MR,{children:[e?(0,o.jsx)("img",{className:"MainLogo",src:"/images/logoB.png",alt:"test"}):(0,o.jsx)("img",{className:"MainLogo",src:"/images/logoW.png",alt:"test"}),(0,o.jsxs)("div",{className:"introComent",children:[(0,o.jsx)("p",{className:"title",children:"리픽"}),(0,o.jsx)("p",{className:"titlePara",children:"에 오신 걸 환영합니다."})]}),(0,o.jsx)("p",{className:"semiComent",children:"REPIC은 개발자를 위한 플랫폼입니다."})]})}let UR=class{email="";displayName="";password="";passwordComfirm="";error=!1;isPending=!1;async signup(){try{this.setIsPending(!0),this.setError(!1),await aT.signup({email:this.email,displayName:this.displayName,password:this.password}).then((()=>{aT.addDocument({email:this.email,nickName:this.displayName,transaction:"Users"})})),this.setIsPending(!1),this.setError(!1),this.changeEmail(""),this.changeDisplayName(""),this.changePassword(""),this.changePasswordComfirm("")}catch(e){this.setError(!0),this.setIsPending(!1)}}setError(e){this.error=e}setIsPending(e){this.isPending=e}changeEmail(e){this.email=e}changeDisplayName(e){this.displayName=e}changePassword(e){this.password=e}changePasswordComfirm(e){this.passwordComfirm=e}get valid(){return this.email.includes("@")&&!!this.displayName&&this.password.length>=8&&0===this.password.search(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/)&&this.password===this.passwordComfirm}};en([Ks()],UR.prototype,"setError",null),en([Ks()],UR.prototype,"setIsPending",null),en([Ks()],UR.prototype,"changeEmail",null),en([Ks()],UR.prototype,"changeDisplayName",null),en([Ks()],UR.prototype,"changePassword",null),en([Ks()],UR.prototype,"changePasswordComfirm",null),UR=en([Ms(),Hs()],UR);const FR=Ui.div`
margin-top: 3rem;
text-align: center;
  p{
    color: ${e=>e.theme.colors.textMain}
  }
  form{
    margin: auto;
    margin-block: 2rem;
    max-width: 300px;
    p{
      margin-top: 2rem;
      a{
        color: ${e=>e.theme.colors.primaryDeep};
      }
    }
  }
`;function $R(){const e=mt(),[{email:t,displayName:n,password:r,passwordComfirm:i,valid:s},a]=Ws(Ds.resolve(UR));return(0,o.jsxs)(FR,{children:[(0,o.jsx)("p",{className:"signup",children:"REPIC회원가입"}),(0,o.jsx)("form",{onSubmit:t=>{t.preventDefault(),a.signup().then((()=>{e("/")}))},children:(0,o.jsxs)("fieldset",{children:[(0,o.jsx)(JC,{label:"Email",value:t,onChange:e=>{a.changeEmail(e)},placeholder:"email@exmaple.com"}),(0,o.jsx)(JC,{label:"NickName",value:n,onChange:e=>{a.changeDisplayName(e)},placeholder:"Nick Name"}),(0,o.jsx)(JC,{label:"Password",type:"password",value:r,onChange:e=>{a.changePassword(e)},placeholder:"Password"}),(0,o.jsx)(JC,{label:"PasswordComfirm",type:"password",value:i,onChange:e=>{a.changePasswordComfirm(e)},placeholder:"Password"}),(0,o.jsx)($T,{type:"submit",label:"가입하기",disable:s}),(0,o.jsxs)("p",{children:["이미 회원이신가요?",(0,o.jsx)(Gt,{to:"/login",children:"로그인"})]})]})})]})}const zR=Ui.div`
  padding-bottom: 80px;
`;function VR(){return(0,o.jsxs)(zR,{children:[(0,o.jsx)(LR,{}),(0,o.jsx)($R,{})]})}N=s("fYo6y"),N=s("fYo6y");function BR({uid:e}){const[{communityItems:t},n]=RT();(0,N.useEffect)((()=>{n.readCommnuityItemsInfo()}),[]);return{AuthorCommunity:t.filter((t=>t.uid===e))}}N=s("fYo6y");const qR=Ui.button`
cursor: pointer;
padding: 1rem;
width: 100%;
font-weight: bold;
background-color: ${e=>e.theme.colors.backgroundMain};
border: 1px solid ${e=>e.theme.colors.textMain};
color: ${e=>e.theme.colors.textMain};
border-radius: .4rem;
white-space: nowrap;
  &:hover{
    background-color: ${e=>e.theme.colors.textMain};
    color: ${e=>e.theme.colors.backgroundMain};
  }
`;function HR({infinityNumber:e,setInfinityNumber:t}){return(0,o.jsx)(qR,{className:"moreView",type:"button",onClick:()=>{t(e+1)},children:"더보기"})}const KR=Ui.div`
  .communityBox{
    a{
      text-decoration: none;
    }
    margin-bottom: 1rem;
  }
  .buttonBox{
    margin-block: 1rem;
  }
`;function WR({CommunityItems:e}){const[t,n]=(0,N.useState)(1),r=e.filter(((e,n)=>n<10*t));return(0,o.jsxs)(KR,{children:[(0,o.jsx)("div",{className:"communityBox",children:r.map((e=>(0,o.jsx)(Gt,{to:`/communities/${e.id}`,children:(0,o.jsx)(xC,{communityItem:e})},e.id)))}),10*t<e.length?(0,o.jsx)("div",{className:"buttonBox",children:(0,o.jsx)(HR,{infinityNumber:t,setInfinityNumber:n})}):null]})}const GR=Ui.div`
`;function QR({UserInfo:e}){const{AuthorCommunity:t}=BR({uid:e.uid});return t.length?(0,o.jsx)(GR,{children:(0,o.jsx)(WR,{CommunityItems:t})}):null}N=s("fYo6y");function YR({uid:e}){const[{projects:t},n]=sN();(0,N.useEffect)((()=>{n.readProjectItemsInfo()}),[]);return{AuthorProject:t.filter((t=>t.uid===e))}}N=s("fYo6y"),N=s("fYo6y");const XR=Ui.div`
display: flex;
  p{
    margin-right: 2rem;
    font-size: 1.2rem;
  }
  .userName{
    font-weight: 500;
    font-size: 1.2rem;
  }
`;function JR({projectItem:e,UserInfo:t}){const{date:n,atTime:r}=jT({createdTime:e.createdTime});return(0,o.jsxs)(XR,{children:[(0,o.jsx)("p",{className:"userName",children:t[0].nickName}),(0,o.jsxs)("p",{children:[n," ",r]})]})}const ZR=Ui.div`
display: flex;
justify-content: space-between;
align-items: center;
font-weight: 100;
  p{
    font-size: 1.3rem;
    white-space: nowrap;
  }
  .textBox{
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: break-word;
    display: block;
    margin-block: 0.5rem;
    line-height: 1.4;
    width: 100%;
  }
  .iconbox{
    margin-right: 1rem;
    width: 130px;
    display: flex;
    .iconitem{
      display: flex;
      margin: 0rem 0.5rem 0rem 0.5rem;
    img{
      margin-right: 0.5rem;
      height: 15px;
    }
    }
  }
`;function eP({projectItem:e}){const{isDarkMode:t}=Gi();return(0,o.jsxs)(ZR,{className:"textLine",children:[(0,o.jsx)("p",{className:"textBox",children:e.text}),t?(0,o.jsxs)("div",{className:"iconbox",children:[(0,o.jsxs)("p",{className:"iconitem",children:[(0,o.jsx)("img",{src:"/images/icons/like01.png",alt:""}),e.likes.length]}),(0,o.jsxs)("p",{className:"iconitem",children:[(0,o.jsx)("img",{src:"/images/icons/more01.png",alt:""}),e.view.length]}),(0,o.jsxs)("p",{className:"iconitem",children:[(0,o.jsx)("img",{src:"/images/icons/user02.png",alt:""}),e.comments.length]})]}):(0,o.jsxs)("div",{className:"iconbox",children:[(0,o.jsxs)("p",{className:"iconitem",children:[(0,o.jsx)("img",{src:"/images/icons/like03.png",alt:""}),e.likes.length]}),(0,o.jsxs)("p",{className:"iconitem",children:[(0,o.jsx)("img",{src:"/images/icons/more03.png",alt:""}),e.view.length]}),(0,o.jsxs)("p",{className:"iconitem",children:[(0,o.jsx)("img",{src:"/images/icons/user04.png",alt:""}),e.comments.length]})]})]})}const tP=Ui.div`
margin: 1rem 0rem 0.2rem 0rem;
  h1{
    font-size: 1.6rem;
    font-weight: bold;
  }
`;function nP({projectItem:e}){return(0,o.jsx)(tP,{className:"projectTitle",children:(0,o.jsx)("h1",{children:e.title})})}const rP=Ui.div`
  width: 100%;
  border-bottom: 1px solid ${e=>e.theme.colors.textMain};
  color: ${e=>e.theme.colors.textMain};;
  padding: 1rem 0.5rem 1rem 0.5rem;
  &:hover{
    background-color: ${e=>e.theme.colors.buttonMain};
    h1{
      color: ${e=>e.theme.colors.primary}
    }
  }

`;function iP({projectItem:e}){const[{UserInfo:t},n]=YT();return(0,N.useEffect)((()=>{n.readUserInfo({uid:e.uid})}),[]),t.length?(0,o.jsxs)(rP,{children:[(0,o.jsx)(JR,{projectItem:e,UserInfo:t}),(0,o.jsx)(nP,{projectItem:e}),(0,o.jsx)(eP,{projectItem:e})]}):null}const sP=Ui.div`
  .communityBox{
    a{
      text-decoration: none;
    }
    margin-bottom: 1rem;
  }
  .buttonBox{
    margin-block: 1rem;
  }
`;function oP({projectItems:e}){const[t,n]=(0,N.useState)(1),r=e.filter(((e,n)=>n<10*t));return(0,o.jsxs)(sP,{children:[(0,o.jsx)("div",{className:"communityBox",children:r.map((e=>(0,o.jsx)(Gt,{to:`/projects/${e.id}`,children:(0,o.jsx)(iP,{projectItem:e})},e.id)))}),10*t<e.length?(0,o.jsx)("div",{className:"buttonBox",children:(0,o.jsx)(HR,{infinityNumber:t,setInfinityNumber:n})}):null]})}const aP=Ui.div`

`;function lP({UserInfo:e}){const{AuthorProject:t}=YR({uid:e.uid});return t.length?(0,o.jsx)(aP,{children:(0,o.jsx)(oP,{projectItems:t})}):null}const cP=Ui.div`
display: flex;
align-items: center;
padding: 1rem;
  .userThumbNail{
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-size: contain;
    background-color: white;
    box-shadow: 1px 1px 2px ${e=>e.theme.colors.textMain};
  }
  .userPara{
    padding: 0rem 2rem 0rem 2rem;
    div{
      h1{
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }
    }
    .stackBox{
      display: flex;
      flex-wrap: wrap;
      .stack{
        width: 20px;
        height: 20px;
        margin: .3rem .3rem .3rem .3rem;
        background-size: contain;
        background-color: white;
        background-position: center;
        border-radius: 20px;
      }
    }
  }
`;function uP({UserInfo:e}){return(0,o.jsxs)(cP,{className:"userInfo",children:[(0,o.jsx)("div",{children:e.Initial?(0,o.jsx)("div",{className:"userThumbNail",style:{backgroundImage:`url(${e.thumbnailURL})`}}):(0,o.jsx)("div",{className:"userThumbNail",style:{backgroundImage:"url(/images/icons/default.jpg)"}})}),(0,o.jsxs)("div",{className:"userPara",children:[(0,o.jsx)("div",{children:(0,o.jsx)("h1",{children:e.nickName})}),(0,o.jsx)("div",{className:"stackBox",children:e.stacks.map((e=>(0,o.jsx)("div",{className:"stack",style:{backgroundImage:`url(/images/library/resized/${e}.png)`}},e)))})]})]})}const hP=Ui.div`
padding: 0rem 1rem 0rem 1rem;
margin-top: 2rem;
  .userText{
    margin-top: 2rem;
    h1{
      padding-bottom: 1rem;
    }
    p{
      font-size: 1.4rem;
      margin-top: 1rem;
    }
  }
`;function dP({UserInfo:e}){return(0,o.jsx)(hP,{children:(0,o.jsxs)("div",{className:"userText",children:[(0,o.jsx)("h1",{children:"자기 소개"}),e.introduce?(0,o.jsx)("p",{children:e.introduce}):(0,o.jsx)("p",{children:" 자기 소개가 없습니다."})]})})}let fP=class{radioValue="";changeRadioValue(e){this.radioValue=e}};function pP(){return Ws(Ds.resolve(fP))}en([Ks()],fP.prototype,"changeRadioValue",null),fP=en([Ms(),Hs()],fP);const mP=Ui.div`
margin-top: 2rem;
height: 50px;
line-height: 50px;
padding: 0rem 1rem 0rem 1rem;
border-top: 1px solid ${e=>e.theme.colors.textSecond};
 a{
  text-decoration: none;
  color: ${e=>e.theme.colors.textMain};
  margin: 0rem 1rem 0rem 1rem;
  padding-block: 11px;
 }
 a:hover{
  color: ${e=>e.theme.colors.primary};
  border-bottom: 3px solid ${e=>e.theme.colors.primary};
 }
 .active{
  color: ${e=>e.theme.colors.primary};
  border-bottom: 3px solid ${e=>e.theme.colors.primary};
 }
`;function gP({userId:e}){const[{radioValue:t}]=pP();return(0,o.jsxs)(mP,{children:[(0,o.jsx)(Gt,{className:`${"WriteCommunity"===t&&"active"}`,to:`/user/${e}?sort=WriteCommunity`,children:"커뮤니티"}),(0,o.jsx)(Gt,{className:`${"WriteProject"===t&&"active"}`,to:`/user/${e}?sort=WriteProject`,children:"프로젝트"})]})}const yP=Ui.div`
border: 1px solid ${e=>e.theme.colors.textSecond};
border-radius: 1rem;
margin-bottom: 1rem;
`;function vP({UserInfo:e,userId:t}){return(0,o.jsxs)(yP,{children:[(0,o.jsx)(uP,{UserInfo:e}),(0,o.jsx)(dP,{UserInfo:e}),(0,o.jsx)(gP,{userId:t})]})}const bP=Ui.div`
  min-height: 80vh;
`;function wP({UserInfo:e,userId:t,Sort:n}){return(0,o.jsxs)(bP,{children:[(0,o.jsx)(vP,{UserInfo:e,userId:t}),"WriteCommunity"===n&&(0,o.jsx)(QR,{UserInfo:e}),"WriteProject"===n&&(0,o.jsx)(lP,{UserInfo:e})]})}var xP=$i`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${e=>e.theme.colors.backgroundMain};
    color: ${e=>e.theme.colors.textMain};
    font-size: 1.6rem;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 500;
    padding-top: 80px;
  }
  label{
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
  }
  :lang(ko) {
    h1, h2, h3 {
      word-break: keep-all;
    }
  }
`;var kP={colors:{backgroundMain:"#FFF",backgroundSecond:"#FFF",backgroundThird:"#E2EFF2",textMain:"#222",textSecond:"#7A7676",shadowMain:"#555",secondary:"#00F",buttonMain:"#ECECEC",primary:"#00A9E6",primaryDeep:"#008EC1",scheme:"light"}};var _P={colors:{backgroundMain:"#333",backgroundSecond:"#344346",backgroundThird:"#344349",textMain:"white",textSecond:"#7A7676",shadowMain:"#777",secondary:"#00F",buttonMain:"#222",primary:"#00A9E6",primaryDeep:"#008EC1",scheme:"dark"}};const EP=(IP=[{element:(0,o.jsx)((function(){const{setResize:e,delResize:t}=io(),[{connection:n},r]=ET();return(0,N.useEffect)((()=>(e(),()=>{t()})),[]),(0,N.useEffect)((()=>{r.unsubscribe()}),[]),n?(0,o.jsxs)("div",{children:[(0,o.jsx)(kT,{}),(0,o.jsx)(TT,{children:(0,o.jsx)(Dt,{})}),(0,o.jsx)(lo,{})]}):(0,o.jsx)(ST,{})}),{}),children:[{path:"/",element:(0,o.jsx)((function(){return(0,o.jsx)(WC,{})}),{})},{path:"/projects",element:(0,o.jsx)((function(){const[e]=Xt(),[{projects:t},n]=sN(),[,r]=PN(),i=e.get("page")??"",s=e.get("filter")??"",a=e.get("search")??"";return(0,N.useEffect)((()=>{n.readProjectItemsInfo()}),[]),(0,N.useEffect)((()=>{r.changeRadioValue(s)}),[s]),(0,N.useEffect)((()=>{r.changeSearchText(a)}),[s,a]),t.length?(0,o.jsx)(nR,{Page:i,Search:a,projects:t}):null}),{})},{path:"/projects/:id",element:(0,o.jsx)((function(){const e=yt(),{gotProjectItem:t}=rN({DocId:String(e.id)});return t?(0,o.jsx)(NN,{project:t}):null}),{})},{path:"/projects/write",element:(0,o.jsx)((function(){return(0,o.jsx)(wR,{})}),{})},{path:"/communities",element:(0,o.jsx)((function(){const[e]=Xt(),[{communityItems:t},n]=RT(),[{searchText:r,radioValue:i},s]=hC(),a=e.get("page")??"",l=e.get("sort")??"",c=e.get("search")??"";return(0,N.useEffect)((()=>{s.changeRadioValue(l)}),[l]),(0,N.useEffect)((()=>{s.changeSearchText(c)}),[c,l]),(0,N.useEffect)((()=>{n.readCommnuityItemsInfo()}),[n]),(0,N.useEffect)((()=>{""===c&&s.changeSearchText("")}),[]),t.length?(0,o.jsx)(OC,{radioValue:i,communityItems:t,Page:a,Search:c,searchText:r}):null}),{})},{path:"/communities/write",element:(0,o.jsx)((function(){const e=mt(),[{title:t,text:n},r]=Ws(Ds.resolve(MC));return(0,o.jsx)(LC,{children:(0,o.jsx)("div",{children:(0,o.jsxs)("form",{onSubmit:t=>{t.preventDefault(),r.addDocument().then((()=>{e("/communities?page=1&sort=Recent")}))},children:[(0,o.jsx)("h1",{children:"커뮤니티 작성"}),(0,o.jsx)("div",{children:(0,o.jsx)("input",{type:"text",value:t,onChange:e=>{r.changeTitle(e.target.value)},required:!0,placeholder:"제목을 입력해주세요"})}),(0,o.jsx)("div",{children:(0,o.jsx)("textarea",{value:n,onChange:e=>{r.changeText(e.target.value)},required:!0,placeholder:"내용을 입력해주세요"})}),(0,o.jsx)("button",{type:"submit",children:"게시하기"})]})})})}),{})},{path:"/communities/:id",element:(0,o.jsx)((function(){const e=yt(),{communityItem:t}=cC({DocId:String(e.id)});return t.length?(0,o.jsx)(lC,{communityItem:t}):null}),{})},{path:"/setting/:id",element:(0,o.jsx)((function(){const e=yt(),t=mt(),[{UserInfo:n},r]=YT(),{currentUser:i}=nT;if((0,N.useEffect)((()=>{r.readUserInfo({uid:String(e.id)})}),[r]),e.id!==i?.uid&&(alert("잘못된 접근입니다."),t("/")),!n.length)return null;if(null===i)return null;const[s]=n;return(0,o.jsx)(OR,{userInfo:s})}),{})},{path:"/user/:id",element:(0,o.jsx)((function(){const e=yt(),[t]=Xt(),{gotUserInfo:n}=PT({uid:String(e.id)}),[,r]=pP(),i=t.get("sort")??"";return(0,N.useEffect)((()=>{r.changeRadioValue(i)}),[i]),n?(0,o.jsx)(wP,{UserInfo:n,userId:String(e.id),Sort:i}):null}),{})}]},{element:(0,o.jsx)((function(){const{setResize:e,delResize:t}=io(),[{connection:n},r]=ET();return(0,N.useEffect)((()=>(e(),()=>{t()})),[]),(0,N.useEffect)((()=>{r.unsubscribe()}),[]),n?(0,o.jsxs)("div",{children:[(0,o.jsx)(CT,{children:(0,o.jsx)(Dt,{})}),(0,o.jsx)(lo,{})]}):(0,o.jsx)(ST,{})}),{}),children:[{path:"/login",element:(0,o.jsx)((function(){return(0,o.jsx)(nN,{})}),{})},{path:"/signup",element:(0,o.jsx)((function(){return(0,o.jsx)(VR,{})}),{})}]}],Ce({basename:null==SP?void 0:SP.basename,future:$t({},null==SP?void 0:SP.future,{v7_prependBasename:!0}),history:j({window:null==SP?void 0:SP.window}),hydrationData:(null==SP?void 0:SP.hydrationData)||qt(),routes:IP,mapRouteProperties:Ft}).initialize());var IP,SP;function TP(){const{isDarkMode:e}=Gi(),t=e?kP:_P;return(0,o.jsxs)(Ri,{theme:t,children:[(0,o.jsx)(zi.Reset,{}),(0,o.jsx)(xP,{}),(0,o.jsx)(jt,{router:EP})]})}!function(){const e=document.getElementById("root");if(!e)return;t(I).createRoot(e).render((0,o.jsx)(TP,{}))}();