!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/assets/",e(e.s=4)}([function(t,e,n){"use strict";var r=n(1),i=n.n(r),o=n(13);e.a={name:"credit-intro-widget",data:function(){return{logged:i.a&&i.a.uid,loaded:!0,image:i.a.publicPath+"/img/getcredit.png",credits:0,canSign:!0,signing:!1,loginLink:i.a.home+"/m/signin?redirect_to="+encodeURIComponent(location.href)}},methods:{getCredits:function(){location.href="/me/credits#creditsApproach"},goMembership:function(){location.href="/me/membership"},goCreditCharge:function(){location.href="/me/credits#chargeCredits"},dailySign:function(){var t=this;if(!this.signing)return this.signing=!0,Object(o.a)("common.widget.credit.sign").then(function(e){console.log(e),t.credits=e.credits,t.canSign=!1,window.App.PopMsgbox.success({title:"签到成功",timer:2e3,showConfirmButton:!0}),t.signing=!1}).catch(function(e){window.App.PopMsgbox.error({title:e.message||"签到失败",timer:2e3,showConfirmButton:!0}),t.signing=!1})},getData:function(){var t=this;Object(o.a)("common.widget.credit.data").then(function(e){t.credits=e.credits,t.canSign=!e.signed}).catch(function(t){console.log(t)})}},mounted:function(){this.getData()}}},function(t,e){t.exports=VUETT},function(t,e){t.exports=jQuery},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),i=n.n(r),o=n(6),a=n(2);n.n(a)()(document).ready(function(){new i.a({el:"#creditintrowidget",render:function(t){return t(o.a)}})})},function(t,e){t.exports=Vue},function(t,e,n){"use strict";function r(t){n(7)}var i=n(0),o=n(18),a=n(12),s=r,c=a(i.a,o.a,!1,s,"data-v-126f6dc8",null);e.a=c.exports},function(t,e,n){var r=n(8);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(10)("21da9892",r,!0,{})},function(t,e,n){e=t.exports=n(9)(!1),e.push([t.i,".wrapper[data-v-126f6dc8]{display:flex;align-content:center;justify-content:center;min-height:80px}.content[data-v-126f6dc8]{text-align:center;width:100%}.wrapper img[data-v-126f6dc8]{display:block;margin:0 auto 10px}.title[data-v-126f6dc8]{color:#333;font-size:16px;font-weight:500;text-align:center;cursor:pointer}.wrapper .loader[data-v-126f6dc8]{text-align:center;margin:30px auto;font-size:20px}.action[data-v-126f6dc8]{border-top:1px dotted #e1e1e1;padding:15px 0}.btns button[data-v-126f6dc8]{margin:0 5px}.login-link[data-v-126f6dc8]{margin:20px auto 30px}.sign-btn[data-v-126f6dc8]{min-width:78px;min-height:36px}.sign-btn span[data-v-126f6dc8]{margin-top:-5px;margin-left:-5px}",""])},function(t,e){function n(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=f[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(o(n.parts[i]));f[n.id]={id:n.id,refs:1,parts:a}}}}function i(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function o(t){var e,n,r=document.querySelector("style["+g+'~="'+t.id+'"]');if(r){if(h)return m;r.parentNode.removeChild(r)}if(y){var o=p++;r=d||(d=i()),e=a.bind(null,r,o,!1),n=a.bind(null,r,o,!0)}else r=i(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function a(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=_(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function s(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),v.ssrId&&t.setAttribute(g,e.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(11),f={},l=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,h=!1,m=function(){},v=null,g="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,i){h=n,v=i||{};var o=u(t,e);return r(o),function(e){for(var n=[],i=0;i<o.length;i++){var a=o[i],s=f[a.id];s.refs--,n.push(s)}e?(o=u(t,e),r(o)):o=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete f[s.id]}}}};var _=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=o[0],s=o[1],c=o[2],u=o[3],f={id:t+":"+i,css:s,media:c,sourceMap:u};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}},function(t,e){t.exports=function(t,e,n,r,i,o){var a,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(a=t,s=t.default);var u="function"==typeof s?s.options:s;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId=i);var f;if(o?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=f):r&&(f=r),f){var l=u.functional,d=l?u.render:u.beforeCreate;l?(u._injectStyles=f,u.render=function(t,e){return f.call(e),d(t,e)}):u.beforeCreate=d?[].concat(d,f):[f]}return{esModule:a,exports:s,options:u}}},function(t,e,n){"use strict";(function(t){function r(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new o.a(function(r,i){var o=s.a.commonServiceApi+"/"+e.split(".").join("/");t.post(o,Object.assign(n,{_wpnonce:s.a._wpnonce}),function(t){t.status&&200!==t.status?i(new Error(t.responseJSON?t.responseJSON.message:t.statusText)):"rest_common_service_error"===t.code?i(new Error(t.message)):r(t.data)},"json").fail(function(t){i(new Error(t.responseJSON?t.responseJSON.message:t.statusText))})})}e.a=r;var i=n(14),o=n.n(i),a=n(1),s=n.n(a)}).call(e,n(2))},function(t,e,n){"use strict";(function(e){function n(){}function r(t,e){return function(){t.apply(e,arguments)}}function i(t){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function o(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?a:s)(e.promise,t._value);var r;try{r=n(t._value)}catch(t){return void s(e.promise,t)}a(e.promise,r)})}function a(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void c(t);if("function"==typeof n)return void f(r(n,e),t)}t._state=1,t._value=e,c(t)}catch(e){s(t,e)}}function s(t,e){t._state=2,t._value=e,c(t)}function c(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)o(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,a(e,t))},function(t){n||(n=!0,s(e,t))})}catch(t){if(n)return;n=!0,s(e,t)}}var l=setTimeout;i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var r=new this.constructor(n);return o(this,new u(t,e,r)),r},i.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){return e.reject(n)})})},i.all=function(t){return new i(function(e,n){function r(t,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){r(t,e)},n)}i[t]=a,0==--o&&e(i)}catch(t){n(t)}}if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var i=Array.prototype.slice.call(t);if(0===i.length)return e([]);for(var o=i.length,a=0;a<i.length;a++)r(a,i[a])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var r=0,i=t.length;r<i;r++)t[r].then(e,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){l(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},t.exports=i}).call(e,n(15).setImmediate)},function(t,e,n){(function(t){function r(t,e){this._id=t,this._clearFn=e}var i=void 0!==t&&t||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;e.setTimeout=function(){return new r(o.call(setTimeout,i,arguments),clearTimeout)},e.setInterval=function(){return new r(o.call(setInterval,i,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(i,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(16),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(e,n(3))},function(t,e,n){(function(t,e){!function(t,n){"use strict";function r(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var r={callback:t,args:e};return u[c]=r,s(c),c++}function i(t){delete u[t]}function o(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r)}}function a(t){if(f)setTimeout(a,0,t);else{var e=u[t];if(e){f=!0;try{o(e)}finally{i(t),f=!1}}}}if(!t.setImmediate){var s,c=1,u={},f=!1,l=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():l&&"onreadystatechange"in l.createElement("script")?function(){var t=l.documentElement;s=function(e){var n=l.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),d.setImmediate=r,d.clearImmediate=i}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(3),n(17))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(t){if(f===setTimeout)return setTimeout(t,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function o(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function a(){m&&p&&(m=!1,p.length?h=p.concat(h):v=-1,h.length&&s())}function s(){if(!m){var t=i(a);m=!0;for(var e=h.length;e;){for(p=h,h=[];++v<e;)p&&p[v].run();v=-1,e=h.length}p=null,m=!1,o(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var f,l,d=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(t){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var p,h=[],m=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new c(t,e)),1!==h.length||m||i(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=u,d.addListener=u,d.once=u,d.off=u,d.removeListener=u,d.removeAllListeners=u,d.emit=u,d.prependListener=u,d.prependOnceListener=u,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loaded?n("div",{staticClass:"wrapper"},[t.logged?n("div",{staticClass:"content"},[n("p",{staticClass:"title",on:{click:t.getCredits}},[n("img",{attrs:{src:t.image}}),t._v("点我获取积分")]),t._v(" "),n("div",{staticClass:"action"},[n("p",{staticClass:"intro"},[t._v("您当前积分："+t._s(t.credits)+"，会员消费/充值积分更优惠")]),t._v(" "),n("div",{staticClass:"btns"},[n("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"button"},on:{click:t.goMembership}},[t._v("办理会员")]),t._v(" "),t.canSign?n("button",{staticClass:"btn btn-warning btn-sm sign-btn",attrs:{type:"button"},on:{click:t.dailySign}},[t.signing?n("span",{staticClass:"tico tico-spinner2 spinning"}):t._e(),t._v("\n                       "+t._s(t.signing?"":"立即签到")+"\n                  ")]):t._e(),t._v(" "),t.canSign?t._e():n("button",{staticClass:"btn btn-inverse btn-sm",attrs:{type:"button"},on:{click:t.goCreditCharge}},[t._v("充值积分")])])])]):n("div",{staticClass:"content"},[n("a",{staticClass:"btn btn-danger btn-md login-link bind-redirect",attrs:{href:t.loginLink}},[t._v("登录查看")])])]):n("div",{staticClass:"wrapper"},[n("span",{staticClass:"loader tico tico-spinner2 spinning"})])},i=[],o={render:r,staticRenderFns:i};e.a=o}]);