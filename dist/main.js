!function(){"use strict";function n(n){return new Promise((function(t){setTimeout((function(){t(String.fromCharCode.apply(null,new Uint16Array(n)))}),500)}))}function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},t(n)}function e(n,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,(void 0,i=function(n,e){if("object"!==t(n)||null===n)return n;var o=n[Symbol.toPrimitive];if(void 0!==o){var r=o.call(n,"string");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(r.key),"symbol"===t(i)?i:String(i)),r)}var i}(function(){function t(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}var o,r;return o=t,r=[{key:"load",value:function(){return new Promise((function(n,t){setTimeout((function(){return function(t){for(var e=new ArrayBuffer(2*t.length),o=new Uint16Array(e),r=0;r<t.length;r++)o[r]=t.charCodeAt(r);n(e)}('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}')}),1e3)})).then(n)}}],null&&e(o.prototype,null),r&&e(o,r),Object.defineProperty(o,"prototype",{writable:!1}),t})().load().then((function(n){console.log(n)}),(function(n){console.log(n)}))}();