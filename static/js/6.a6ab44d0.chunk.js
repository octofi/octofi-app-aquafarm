/*! For license information please see 6.a6ab44d0.chunk.js.LICENSE.txt */
(this.webpackJsonpdefi_v2=this.webpackJsonpdefi_v2||[]).push([[6],{3244:function(e,t,n){(function(t){"undefined"===typeof window&&(t.window={}),n(3547),"undefined"===typeof webpackJsonpreact_tradingview_widget&&(t.webpackJsonpreact_tradingview_widget=window.webpackJsonpreact_tradingview_widget),n(3548),e.exports=n(3549)}).call(this,n(45))},3547:function(e,t){!function(e){var t=window.webpackJsonpreact_tradingview_widget;window.webpackJsonpreact_tradingview_widget=function(n,i,a){for(var u,c,l,s=0,f=[];s<n.length;s++)c=n[s],r[c]&&f.push(r[c][0]),r[c]=0;for(u in i)Object.prototype.hasOwnProperty.call(i,u)&&(e[u]=i[u]);for(t&&t(n,i,a);f.length;)f.shift()();if(a)for(s=0;s<a.length;s++)l=o(o.s=a[s]);return l};var n={},r={2:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e}}([])},3548:function(e,t){webpackJsonpreact_tradingview_widget([0],[function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,l=[],s=!1,f=-1;function p(){s&&c&&(s=!1,c.length?l=c.concat(l):f=-1,l.length&&d())}function d(){if(!s){var e=u(p);s=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new y(e,t)),1!==l.length||s||u(d)},y.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";(function(t){var n=function(e){};"production"!==t.env.NODE_ENV&&(n=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=function(e,t,r,o,i,a,u,c){if(n(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[r,o,i,a,u,c],f=0;(l=new Error(t.replace(/%s/g,(function(){return s[f++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}}).call(t,n(0))},function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,u,c=a(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))o.call(n,s)&&(c[s]=n[s]);if(r){u=r(n);for(var f=0;f<u.length;f++)i.call(n,u[f])&&(c[u[f]]=n[u[f]])}}return c}},function(e,t,n){"use strict";(function(t){var r=n(1);if("production"!==t.env.NODE_ENV){var o=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,(function(){return n[o++]}));"undefined"!==typeof console&&console.error(i);try{throw new Error(i)}catch(a){}};r=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];o.apply(void 0,[t].concat(r))}}}e.exports=r}).call(t,n(0))},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";(function(t){var n={};"production"!==t.env.NODE_ENV&&Object.freeze(n),e.exports=n}).call(t,n(0))},function(e,t,n){"use strict";(function(t){if("production"!==t.env.NODE_ENV)var r=n(2),o=n(4),i=n(5),a={};e.exports=function(e,n,u,c,l){if("production"!==t.env.NODE_ENV)for(var s in e)if(e.hasOwnProperty(s)){var f;try{r("function"===typeof e[s],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",c||"React class",u,s,typeof e[s]),f=e[s](n,s,c,u,null,i)}catch(d){f=d}if(o(!f||f instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",u,s,typeof f),f instanceof Error&&!(f.message in a)){a[f.message]=!0;var p=l?l():"";o(!1,"Failed %s type: %s%s",u,f.message,null!=p?p:"")}}}}).call(t,n(0))},,function(e,t,n){"use strict";(function(t){"production"===t.env.NODE_ENV?e.exports=n(10):e.exports=n(11)}).call(t,n(0))},function(e,t,n){"use strict";var r=n(3),o=n(6),i=n(1),a="function"===typeof Symbol&&Symbol.for,u=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.call"):60104,l=a?Symbol.for("react.return"):60105,s=a?Symbol.for("react.portal"):60106,f=a?Symbol.for("react.fragment"):60107,p="function"===typeof Symbol&&Symbol.iterator;function d(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);throw(t=Error(n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.")).name="Invariant Violation",t.framesToPop=1,t}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function h(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||y}function v(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||y}function m(){}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){"object"!==typeof e&&"function"!==typeof e&&null!=e&&d("85"),this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var g=v.prototype=new m;function b(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||y}g.constructor=v,r(g,h.prototype),g.isPureReactComponent=!0;var w=b.prototype=new m;w.constructor=b,r(w,h.prototype),w.unstable_isAsyncReactComponent=!0,w.render=function(){return this.props.children};var _={current:null},O=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,o={},i=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,r)&&!E.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:u,type:e,key:i,ref:a,props:o,_owner:_.current}}function S(e){return"object"===typeof e&&null!==e&&e.$$typeof===u}var j=/\/+/g,T=[];function R(e,t,n,r){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function x(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function P(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case u:case c:case l:case s:i=!0}}if(i)return n(r,e,""===t?"."+A(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var f=t+A(o=e[a],a);i+=P(o,f,n,r)}else if(null===e||"undefined"===typeof e?f=null:f="function"===typeof(f=p&&e[p]||e["@@iterator"])?f:null,"function"===typeof f)for(e=f.call(e),a=0;!(o=e.next()).done;)i+=P(o=o.value,f=t+A(o,a++),n,r);else"object"===o&&d("31","[object Object]"===(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return i}function A(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function N(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?C(e,r,n,i.thatReturnsArgument):null!=e&&(S(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(j,"$&/")+"/")+n,e={$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function C(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(j,"$&/")+"/"),t=R(t,i,r,o),null==e||P(e,"",I,t),x(t)}var D={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return C(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=R(null,null,t,n),null==e||P(e,"",N,t),x(t)},count:function(e){return null==e?0:P(e,"",i.thatReturnsNull,null)},toArray:function(e){var t=[];return C(e,t,null,i.thatReturnsArgument),t},only:function(e){return S(e)||d("143"),e}},Component:h,PureComponent:v,unstable_AsyncComponent:b,Fragment:f,createElement:k,cloneElement:function(e,t,n){var o=r({},e.props),i=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=_.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)O.call(t,s)&&!E.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:u,type:e.type,key:i,ref:a,props:o,_owner:c}},createFactory:function(e){var t=k.bind(null,e);return t.type=e,t},isValidElement:S,version:"16.2.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:_,assign:r}},L=Object.freeze({default:D}),U=L&&D||L;e.exports=U.default?U.default:U},function(e,t,n){"use strict";(function(t){"production"!==t.env.NODE_ENV&&function(){var t=n(3),r=n(6),o=n(2),i=n(4),a=n(1),u=n(7),c="function"===typeof Symbol&&Symbol.for,l=c?Symbol.for("react.element"):60103,s=c?Symbol.for("react.call"):60104,f=c?Symbol.for("react.return"):60105,p=c?Symbol.for("react.portal"):60106,d=c?Symbol.for("react.fragment"):60107,y="function"===typeof Symbol&&Symbol.iterator;function h(e){if(null===e||"undefined"===typeof e)return null;var t=y&&e[y]||e["@@iterator"];return"function"===typeof t?t:null}var v=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,(function(){return n[o++]}));"undefined"!==typeof console&&console.warn(i);try{throw new Error(i)}catch(a){}},m=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];v.apply(void 0,[t].concat(r))}},g={};function b(e,t){var n=e.constructor,r=n&&(n.displayName||n.name)||"ReactClass",o=r+"."+t;g[o]||(i(!1,"%s(...): Can only update a mounted or mounting component. This usually means you called %s() on an unmounted component. This is a no-op.\n\nPlease check the code for the %s component.",t,t,r),g[o]=!0)}var w={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,n){b(e,"forceUpdate")},enqueueReplaceState:function(e,t,n,r){b(e,"replaceState")},enqueueSetState:function(e,t,n,r){b(e,"setState")}};function _(e,t,n){this.props=e,this.context=t,this.refs=r,this.updater=n||w}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){"object"!==typeof e&&"function"!==typeof e&&null!=e&&o(!1,"setState(...): takes an object of state variables to update or a function which returns an object of state variables."),this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var O={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},E=function(e,t){Object.defineProperty(_.prototype,e,{get:function(){m(!1,"%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var k in O)O.hasOwnProperty(k)&&E(k,O[k]);function S(e,t,n){this.props=e,this.context=t,this.refs=r,this.updater=n||w}function j(){}j.prototype=_.prototype;var T=S.prototype=new j;function R(e,t,n){this.props=e,this.context=t,this.refs=r,this.updater=n||w}T.constructor=S,t(T,_.prototype),T.isPureReactComponent=!0;var x=R.prototype=new j;x.constructor=R,t(x,_.prototype),x.unstable_isAsyncReactComponent=!0,x.render=function(){return this.props.children};var P,A,N={current:null},I=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function D(e){if(I.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function L(e){if(I.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}function U(e,t){var n=function(){P||(P=!0,i(!1,"%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}function F(e,t){var n=function(){A||(A=!0,i(!1,"%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}var $=function(e,t,n,r,o,i,a){var u={$$typeof:l,type:e,key:t,ref:n,props:a,_owner:i,_store:{}};return Object.defineProperty(u._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(u,"_self",{configurable:!1,enumerable:!1,writable:!1,value:r}),Object.defineProperty(u,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(u.props),Object.freeze(u)),u};function q(e,t,n){var r,o={},i=null,a=null,u=null,c=null;if(null!=t)for(r in D(t)&&(a=t.ref),L(t)&&(i=""+t.key),u=void 0===t.__self?null:t.__self,c=void 0===t.__source?null:t.__source,t)I.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(1===s)o.children=n;else if(s>1){for(var f=Array(s),p=0;p<s;p++)f[p]=arguments[p+2];Object.freeze&&Object.freeze(f),o.children=f}if(e&&e.defaultProps){var d=e.defaultProps;for(r in d)void 0===o[r]&&(o[r]=d[r])}if((i||a)&&("undefined"===typeof o.$$typeof||o.$$typeof!==l)){var y="function"===typeof e?e.displayName||e.name||"Unknown":e;i&&U(o,y),a&&F(o,y)}return $(e,i,a,u,c,N.current,o)}function W(e,n,r){var o,i,a=t({},e.props),u=e.key,c=e.ref,l=e._self,s=e._source,f=e._owner;if(null!=n)for(o in D(n)&&(c=n.ref,f=N.current),L(n)&&(u=""+n.key),e.type&&e.type.defaultProps&&(i=e.type.defaultProps),n)I.call(n,o)&&!C.hasOwnProperty(o)&&(void 0===n[o]&&void 0!==i?a[o]=i[o]:a[o]=n[o]);var p=arguments.length-2;if(1===p)a.children=r;else if(p>1){for(var d=Array(p),y=0;y<p;y++)d[y]=arguments[y+2];a.children=d}return $(e.type,u,c,l,s,f,a)}function V(e){return"object"===typeof e&&null!==e&&e.$$typeof===l}var M={getCurrentStack:null,getStackAddendum:function(){var e=M.getCurrentStack;return e?e():null}};var z=!1,B=/\/+/g;function J(e){return(""+e).replace(B,"$&/")}var H=[];function K(e,t,n,r){if(H.length){var o=H.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function Y(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,H.length<10&&H.push(e)}function G(e,t,n,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u,c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case l:case s:case f:case p:c=!0}}if(c)return n(r,e,""===t?"."+X(e,0):t),1;var d=0,y=""===t?".":t+":";if(Array.isArray(e))for(var v=0;v<e.length;v++)d+=G(u=e[v],y+X(u,v),n,r);else{var m=h(e);if("function"===typeof m){m===e.entries&&(i(z,"Using Maps as children is unsupported and will likely yield unexpected results. Convert it to a sequence/iterable of keyed ReactElements instead.%s",M.getStackAddendum()),z=!0);for(var g,b=m.call(e),w=0;!(g=b.next()).done;)d+=G(u=g.value,y+X(u,w++),n,r)}else if("object"===a){var _;_=" If you meant to render a collection of children, use an array instead."+M.getStackAddendum();var O=""+e;o(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===O?"object with keys {"+Object.keys(e).join(", ")+"}":O,_)}}return d}function Q(e,t,n){return null==e?0:G(e,"",t,n)}function X(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function Z(e,t,n){var r=e.func,o=e.context;r.call(o,t,e.count++)}function ee(e,t,n){var r,o,i=e.result,u=e.keyPrefix,c=e.func,l=e.context,s=c.call(l,t,e.count++);Array.isArray(s)?te(s,i,n,a.thatReturnsArgument):null!=s&&(V(s)&&(r=s,o=u+(!s.key||t&&t.key===s.key?"":J(s.key)+"/")+n,s=$(r.type,o,r.ref,r._self,r._source,r._owner,r.props)),i.push(s))}function te(e,t,n,r,o){var i="";null!=n&&(i=J(n)+"/");var a=K(t,i,r,o);Q(e,ee,a),Y(a)}function ne(e){var t=e.type;return"string"===typeof t?t:"function"===typeof t?t.displayName||t.name:null}var re=null,oe=!1,ie=function(){var e,t="";if(re){var n=null==(e=re)?"#empty":"string"===typeof e||"number"===typeof e?"#text":"string"===typeof e.type?e.type:e.type===d?"React.Fragment":e.type.displayName||e.type.name||"Unknown",r=re._owner;t+=function(e,t,n){return"\n    in "+(e||"Unknown")+(t?" (at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+")":n?" (created by "+n+")":"")}(n,re._source,r&&ne(r))}return t+=M.getStackAddendum()||""},ae=new Map([["children",!0],["key",!0]]);function ue(){if(N.current){var e=ne(N.current);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}function ce(e){if(null!==e&&void 0!==e&&void 0!==e.__source){var t=e.__source;return"\n\nCheck your code at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+"."}return""}var le={};function se(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var n=function(e){var t=ue();if(!t){var n="string"===typeof e?e:e.displayName||e.name;n&&(t="\n\nCheck the top-level render call using <"+n+">.")}return t}(t);if(!le[n]){le[n]=!0;var r="";e&&e._owner&&e._owner!==N.current&&(r=" It was passed a child from "+ne(e._owner)+"."),re=e,i(!1,'Each child in an array or iterator should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.%s',n,r,ie()),re=null}}}function fe(e,t){if("object"===typeof e)if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];V(r)&&se(r,t)}else if(V(e))e._store&&(e._store.validated=!0);else if(e){var o=h(e);if("function"===typeof o&&o!==e.entries)for(var i,a=o.call(e);!(i=a.next()).done;)V(i.value)&&se(i.value,t)}}function pe(e){var t=e.type;if("function"===typeof t){var n=t.displayName||t.name,r=t.propTypes;r?(re=e,u(r,e.props,"prop",n,ie),re=null):void 0===t.PropTypes||oe||(oe=!0,i(!1,"Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",n||"Unknown")),"function"===typeof t.getDefaultProps&&i(t.getDefaultProps.isReactClassApproved,"getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function de(e){re=e;var t=!0,n=!1,r=void 0;try{for(var o,a=Object.keys(e.props)[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var u=o.value;if(!ae.has(u)){i(!1,"Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.%s",u,ie());break}}}catch(c){n=!0,r=c}finally{try{!t&&a.return&&a.return()}finally{if(n)throw r}}null!==e.ref&&i(!1,"Invalid attribute `ref` supplied to `React.Fragment`.%s",ie()),re=null}function ye(e,t,n){var r="string"===typeof e||"function"===typeof e||"symbol"===typeof e||"number"===typeof e;if(!r){var o="";(void 0===e||"object"===typeof e&&null!==e&&0===Object.keys(e).length)&&(o+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var a=ce(t);o+=a||ue(),o+=ie()||"",i(!1,"React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",null==e?e:typeof e,o)}var u=q.apply(this,arguments);if(null==u)return u;if(r)for(var c=2;c<arguments.length;c++)fe(arguments[c],e);return"symbol"===typeof e&&e===d?de(u):pe(u),u}var he={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return te(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;var r=K(null,null,t,n);Q(e,Z,r),Y(r)},count:function(e,t){return Q(e,a.thatReturnsNull,null)},toArray:function(e){var t=[];return te(e,t,null,a.thatReturnsArgument),t},only:function(e){return V(e)||o(!1,"React.Children.only expected to receive a single React element child."),e}},Component:_,PureComponent:S,unstable_AsyncComponent:R,Fragment:d,createElement:ye,cloneElement:function(e,t,n){for(var r=W.apply(this,arguments),o=2;o<arguments.length;o++)fe(arguments[o],r.type);return pe(r),r},createFactory:function(e){var t=ye.bind(null,e);return t.type=e,Object.defineProperty(t,"type",{enumerable:!1,get:function(){return m(!1,"Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},isValidElement:V,version:"16.2.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:N,assign:t}};t(he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,{ReactDebugCurrentFrame:M,ReactComponentTreeHook:{}});var ve=Object.freeze({default:he}),me=ve&&he||ve,ge=me.default?me.default:me;e.exports=ge}()}).call(t,n(0))},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=n(13)((function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}),!0)}else e.exports=n(14)()}).call(t,n(0))},function(e,t,n){"use strict";(function(t){var r=n(1),o=n(2),i=n(4),a=n(3),u=n(5),c=n(7);e.exports=function(e,n){var l="function"===typeof Symbol&&Symbol.iterator;var s="<<anonymous>>",f={array:h("array"),bool:h("boolean"),func:h("function"),number:h("number"),object:h("object"),string:h("string"),symbol:h("symbol"),any:y(r.thatReturnsNull),arrayOf:function(e){return y((function(t,n,r,o,i){if("function"!==typeof e)return new d("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var a=t[n];if(!Array.isArray(a))return new d("Invalid "+o+" `"+i+"` of type `"+m(a)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<a.length;c++){var l=e(a,c,r,o,i+"["+c+"]",u);if(l instanceof Error)return l}return null}))},element:y((function(t,n,r,o,i){var a=t[n];return e(a)?null:new d("Invalid "+o+" `"+i+"` of type `"+m(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),instanceOf:function(e){return y((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||s;return new d("Invalid "+o+" `"+i+"` of type `"+(((u=t[n]).constructor&&u.constructor.name?u.constructor.name:s)+"` supplied to `")+r+"`, expected instance of `"+a+"`.")}var u;return null}))},node:y((function(e,t,n,r,o){return v(e[t])?null:new d("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return y((function(t,n,r,o,i){if("function"!==typeof e)return new d("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var a=t[n],c=m(a);if("object"!==c)return new d("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var l in a)if(a.hasOwnProperty(l)){var s=e(a,l,r,o,i+"."+l,u);if(s instanceof Error)return s}return null}))},oneOf:function(e){if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull;return y((function(t,n,r,o,i){for(var a=t[n],u=0;u<e.length;u++)if(p(a,e[u]))return null;return new d("Invalid "+o+" `"+i+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}))},oneOfType:function(e){if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull;for(var n=0;n<e.length;n++){var o=e[n];if("function"!==typeof o)return i(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",b(o),n),r.thatReturnsNull}return y((function(t,n,r,o,i){for(var a=0;a<e.length;a++)if(null==(0,e[a])(t,n,r,o,i,u))return null;return new d("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}))},shape:function(e){return y((function(t,n,r,o,i){var a=t[n],c=m(a);if("object"!==c)return new d("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var s=e[l];if(s){var f=s(a,l,r,o,i+"."+l,u);if(f)return f}}return null}))},exact:function(e){return y((function(t,n,r,o,i){var c=t[n],l=m(c);if("object"!==l)return new d("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");var s=a({},t[n],e);for(var f in s){var p=e[f];if(!p)return new d("Invalid "+o+" `"+i+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=p(c,f,r,o,i+"."+f,u);if(y)return y}return null}))}};function p(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function d(e){this.message=e,this.stack=""}function y(e){if("production"!==t.env.NODE_ENV)var r={},a=0;function c(c,l,f,p,y,h,v){if(p=p||s,h=h||f,v!==u)if(n)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!==typeof console){var m=p+":"+f;!r[m]&&a<3&&(i(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",h,p),r[m]=!0,a++)}return null==l[f]?c?null===l[f]?new d("The "+y+" `"+h+"` is marked as required in `"+p+"`, but its value is `null`."):new d("The "+y+" `"+h+"` is marked as required in `"+p+"`, but its value is `undefined`."):null:e(l,f,p,y,h)}var l=c.bind(null,!1);return l.isRequired=c.bind(null,!0),l}function h(e){return y((function(t,n,r,o,i,a){var u=t[n];return m(u)!==e?new d("Invalid "+o+" `"+i+"` of type `"+g(u)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var n=function(e){var t=e&&(l&&e[l]||e["@@iterator"]);if("function"===typeof t)return t}(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!v(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!v(i[1]))return!1}return!0;default:return!1}}function m(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||"Symbol"===t["@@toStringTag"]||"function"===typeof Symbol&&t instanceof Symbol}(t,e)?"symbol":t}function g(e){if("undefined"===typeof e||null===e)return""+e;var t=m(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function b(e){var t=g(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return d.prototype=Error.prototype,f.checkPropTypes=c,f.PropTypes=f,f}}).call(t,n(0))},function(e,t,n){"use strict";var r=n(1),o=n(2),i=n(5);e.exports=function(){function e(e,t,n,r,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}}])},3549:function(e,t,n){var r;"undefined"!==typeof self&&self,r=function(){return webpackJsonpreact_tradingview_widget([1],{8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"BarStyles",(function(){return f})),n.d(t,"IntervalTypes",(function(){return p})),n.d(t,"RangeTypes",(function(){return d})),n.d(t,"Themes",(function(){return y}));var r=n(9),o=n.n(r),i=n(12),a=n.n(i),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function c(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f={BARS:"0",CANDLES:"1",HOLLOW_CANDLES:"9",HEIKIN_ASHI:"8",LINE:"2",AREA:"3",RENKO:"4",LINE_BREAK:"7",KAGI:"5",POINT_AND_FIGURE:"6"},p={D:"D",W:"W"},d={YTD:"ytd",ALL:"all"},y={LIGHT:"Light",DARK:"Dark"},h="tradingview-widget-script",v="tradingview-widget",m=function(e){function t(){var e,n,r;l(this,t);for(var i=arguments.length,a=Array(i),f=0;f<i;f++)a[f]=arguments[f];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.containerId=v+"-"+Math.random(),r.componentDidMount=function(){return r.appendScript(r.initWidget)},r.componentDidUpdate=function(){r.cleanWidget(),r.initWidget()},r.canUseDOM=function(){return!("undefined"===typeof window||!window.document||!window.document.createElement)},r.appendScript=function(e){if(r.canUseDOM()){if(r.scriptExists())return"undefined"===typeof TradingView?void r.updateOnloadListener(e):void e();var t=document.createElement("script");t.id=h,t.type="text/javascript",t.async=!0,t.src="https://s3.tradingview.com/tv.js",t.onload=e,document.getElementsByTagName("head")[0].appendChild(t)}else e()},r.getScriptElement=function(){return document.getElementById(h)},r.scriptExists=function(){return null!==r.getScriptElement()},r.updateOnloadListener=function(e){var t=r.getScriptElement(),n=t.onload;return t.onload=function(){n(),e()}},r.initWidget=function(){if("undefined"!==typeof TradingView&&document.getElementById(r.containerId)){var e=r.props,t=e.widgetType,n=c(e,["widgetType"]),o=u({},n,{container_id:r.containerId});o.autosize&&(delete o.width,delete o.height),"number"===typeof o.interval&&(o.interval=o.interval.toString()),o.popup_width&&"number"===typeof o.popup_width&&(o.popup_width=o.popup_width.toString()),o.popup_height&&"number"===typeof o.popup_height&&(o.popup_height=o.popup_height.toString()),new TradingView[t](o)}},r.cleanWidget=function(){r.canUseDOM()&&(document.getElementById(r.containerId).innerHTML="")},r.getStyle=function(){return r.props.autosize?{width:"100%",height:"100%"}:{}},r.render=function(){return o.a.createElement("article",{id:r.containerId,style:r.getStyle()})},s(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(r.PureComponent);m.propTypes={allow_symbol_change:a.a.bool,autosize:a.a.bool,calendar:a.a.bool,details:a.a.bool,enable_publishing:a.a.bool,height:a.a.number,hideideas:a.a.bool,hide_legend:a.a.bool,hide_side_toolbar:a.a.bool,hide_top_toolbar:a.a.bool,hotlist:a.a.bool,interval:a.a.oneOf([1,3,5,15,30,60,120,180,"1","3","5","15","30","60","120","180",p.D,p.W]),locale:a.a.string,news:a.a.arrayOf(a.a.string),no_referral_id:a.a.bool,popup_height:a.a.oneOfType([a.a.number,a.a.string]),popup_width:a.a.oneOfType([a.a.number,a.a.string]),range:a.a.oneOf(["1d","5d","1m","3m","6m",d.YTD,"12m","60m",d.ALL]),referral_id:a.a.string,save_image:a.a.bool,show_popup_button:a.a.bool,studies:a.a.arrayOf(a.a.string),style:a.a.oneOf([f.BARS,f.CANDLES,f.HOLLOW_CANDLES,f.HEIKIN_ASHI,f.LINE,f.AREA,f.RENKO,f.LINE_BREAK,f.KAGI,f.POINT_AND_FIGURE]),symbol:a.a.string.isRequired,theme:a.a.oneOf([y.LIGHT,y.DARK]),timezone:a.a.string,toolbar_bg:a.a.string,watchlist:a.a.arrayOf(a.a.string),widgetType:a.a.string,width:a.a.number,withdateranges:a.a.bool},m.defaultProps={allow_symbol_change:!0,autosize:!1,enable_publishing:!1,height:610,hideideas:!0,hide_legend:!1,hide_side_toolbar:!0,hide_top_toolbar:!1,interval:p.D,locale:"en",save_image:!0,show_popup_button:!1,style:f.CANDLES,theme:y.LIGHT,timezone:"Etc/UTC",toolbar_bg:"#F1F3F6",widgetType:"widget",width:980,withdateranges:!1},t.default=m}},[8])},e.exports=r()}}]);
//# sourceMappingURL=6.a6ab44d0.chunk.js.map