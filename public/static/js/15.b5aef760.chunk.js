(this["webpackJsonpbeancount-web"]=this["webpackJsonpbeancount-web"]||[]).push([[15],{135:function(t,e,o){"use strict";var r=o(3),n=o(48),i=o(42),s=o(49),a=o(0),f=o(88),l=o(85),c=function(t){var e=t.overlay,o=t.prefixCls,r=t.id,n=t.overlayInnerStyle;return a.createElement("div",{className:"".concat(o,"-inner"),id:r,role:"tooltip",style:n},"function"===typeof e?e():e)},u=function(t,e){var o=t.overlayClassName,u=t.trigger,p=void 0===u?["hover"]:u,d=t.mouseEnterDelay,h=void 0===d?0:d,y=t.mouseLeaveDelay,b=void 0===y?.1:y,m=t.overlayStyle,v=t.prefixCls,w=void 0===v?"rc-tooltip":v,g=t.children,O=t.onVisibleChange,j=t.afterVisibleChange,T=t.transitionName,A=t.animation,E=t.motion,x=t.placement,_=void 0===x?"right":x,C=t.align,P=void 0===C?{}:C,B=t.destroyTooltipOnHide,S=void 0!==B&&B,D=t.defaultVisible,R=t.getTooltipContainer,N=t.overlayInnerStyle,U=Object(s.a)(t,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle"]),I=Object(a.useRef)(null);Object(a.useImperativeHandle)(e,(function(){return I.current}));var L=Object(i.a)({},U);"visible"in t&&(L.popupVisible=t.visible);var k=!1,V=!1;if("boolean"===typeof S)k=S;else if(S&&"object"===Object(n.a)(S)){var H=S.keepParent;k=!0===H,V=!1===H}return a.createElement(f.a,Object(r.a)({popupClassName:o,prefixCls:w,popup:function(){var e=t.arrowContent,o=void 0===e?null:e,r=t.overlay,n=t.id;return[a.createElement("div",{className:"".concat(w,"-arrow"),key:"arrow"},o),a.createElement(c,{key:"content",prefixCls:w,id:n,overlay:r,overlayInnerStyle:N})]},action:p,builtinPlacements:l.a,popupPlacement:_,ref:I,popupAlign:P,getPopupContainer:R,onPopupVisibleChange:O,afterPopupVisibleChange:j,popupTransitionName:T,popupAnimation:A,popupMotion:E,defaultPopupVisible:D,destroyPopupOnHide:k,autoDestroy:V,mouseLeaveDelay:b,popupStyle:m,mouseEnterDelay:h},L),g)},p=Object(a.forwardRef)(u);e.a=p},136:function(t,e,o){"use strict";var r=o(40),n=o(41),i=o(3),s=o(0),a=o(135),f=o(72),l=o(39),c=o.n(l),u=o(85),p={adjustX:1,adjustY:1},d={adjustX:0,adjustY:0},h=[0,0];function y(t){return"boolean"===typeof t?t?p:d:Object(i.a)(Object(i.a)({},d),t)}var b=o(54),m=o(105),v=o(118),w=o(86),g=function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(o[r[n]]=t[r[n]])}return o},O=new RegExp("^(".concat(v.a.join("|"),")(-inverse)?$"));function j(t,e){var o=t.type;if((!0===o.__ANT_BUTTON||!0===o.__ANT_SWITCH||!0===o.__ANT_CHECKBOX||"button"===t.type)&&t.props.disabled){var r=function(t,e){var o={},r=Object(i.a)({},t);return e.forEach((function(e){t&&e in t&&(o[e]=t[e],delete r[e])})),{picked:o,omitted:r}}(t.props.style,["position","left","right","top","bottom","float","display","zIndex"]),n=r.picked,a=r.omitted,f=Object(i.a)(Object(i.a)({display:"inline-block"},n),{cursor:"not-allowed",width:t.props.block?"100%":null}),l=Object(i.a)(Object(i.a)({},a),{pointerEvents:"none"}),u=Object(b.a)(t,{style:l,className:null});return s.createElement("span",{style:f,className:c()(t.props.className,"".concat(e,"-disabled-compatible-wrapper"))},u)}return t}var T=s.forwardRef((function(t,e){var o,l=s.useContext(m.b),p=l.getPopupContainer,d=l.getPrefixCls,v=l.direction,T=Object(f.a)(!1,{value:t.visible,defaultValue:t.defaultVisible}),A=Object(n.a)(T,2),E=A[0],x=A[1],_=function(){var e=t.title,o=t.overlay;return!e&&!o&&0!==e},C=function(){var e=t.builtinPlacements,o=t.arrowPointAtCenter,r=t.autoAdjustOverflow;return e||function(t){var e=t.arrowWidth,o=void 0===e?4:e,r=t.horizontalArrowShift,n=void 0===r?16:r,s=t.verticalArrowShift,a=void 0===s?8:s,f=t.autoAdjustOverflow,l={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(n+o),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(a+o)]},topRight:{points:["br","tc"],offset:[n+o,-4]},rightTop:{points:["tl","cr"],offset:[4,-(a+o)]},bottomRight:{points:["tr","bc"],offset:[n+o,4]},rightBottom:{points:["bl","cr"],offset:[4,a+o]},bottomLeft:{points:["tl","bc"],offset:[-(n+o),4]},leftBottom:{points:["br","cl"],offset:[-4,a+o]}};return Object.keys(l).forEach((function(e){l[e]=t.arrowPointAtCenter?Object(i.a)(Object(i.a)({},l[e]),{overflow:y(f),targetOffset:h}):Object(i.a)(Object(i.a)({},u.a[e]),{overflow:y(f)}),l[e].ignoreShake=!0})),l}({arrowPointAtCenter:o,autoAdjustOverflow:r})},P=t.getPopupContainer,B=g(t,["getPopupContainer"]),S=t.prefixCls,D=t.openClassName,R=t.getTooltipContainer,N=t.overlayClassName,U=t.color,I=t.overlayInnerStyle,L=t.children,k=d("tooltip",S),V=d(),H=E;!("visible"in t)&&_()&&(H=!1);var F,q=j(Object(b.b)(L)?L:s.createElement("span",null,L),k),M=q.props,X=c()(M.className,Object(r.a)({},D||"".concat(k,"-open"),!0)),G=c()(N,(o={},Object(r.a)(o,"".concat(k,"-rtl"),"rtl"===v),Object(r.a)(o,"".concat(k,"-").concat(U),U&&O.test(U)),o)),z=I;return U&&!O.test(U)&&(z=Object(i.a)(Object(i.a)({},I),{background:U}),F={background:U}),s.createElement(a.a,Object(i.a)({},B,{prefixCls:k,overlayClassName:G,getTooltipContainer:P||R||p,ref:e,builtinPlacements:C(),overlay:function(){var e=t.title,o=t.overlay;return 0===e?e:o||e||""}(),visible:H,onVisibleChange:function(e){var o;x(!_()&&e),_()||null===(o=t.onVisibleChange)||void 0===o||o.call(t,e)},onPopupAlign:function(t,e){var o=C(),r=Object.keys(o).filter((function(t){return o[t].points[0]===e.points[0]&&o[t].points[1]===e.points[1]}))[0];if(r){var n=t.getBoundingClientRect(),i={top:"50%",left:"50%"};r.indexOf("top")>=0||r.indexOf("Bottom")>=0?i.top="".concat(n.height-e.offset[1],"px"):(r.indexOf("Top")>=0||r.indexOf("bottom")>=0)&&(i.top="".concat(-e.offset[1],"px")),r.indexOf("left")>=0||r.indexOf("Right")>=0?i.left="".concat(n.width-e.offset[0],"px"):(r.indexOf("right")>=0||r.indexOf("Left")>=0)&&(i.left="".concat(-e.offset[0],"px")),t.style.transformOrigin="".concat(i.left," ").concat(i.top)}},overlayInnerStyle:z,arrowContent:s.createElement("span",{className:"".concat(k,"-arrow-content"),style:F}),motion:{motionName:Object(w.b)(V,"zoom-big-fast",t.transitionName),motionDeadline:1e3}}),H?Object(b.a)(q,{className:X}):q)}));T.displayName="Tooltip",T.defaultProps={placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0};e.a=T},64:function(t,e,o){o(87),t.exports=self.fetch.bind(self)},85:function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));var r={adjustX:1,adjustY:1},n=[0,0],i={left:{points:["cr","cl"],overflow:r,offset:[-4,0],targetOffset:n},right:{points:["cl","cr"],overflow:r,offset:[4,0],targetOffset:n},top:{points:["bc","tc"],overflow:r,offset:[0,-4],targetOffset:n},bottom:{points:["tc","bc"],overflow:r,offset:[0,4],targetOffset:n},topLeft:{points:["bl","tl"],overflow:r,offset:[0,-4],targetOffset:n},leftTop:{points:["tr","tl"],overflow:r,offset:[-4,0],targetOffset:n},topRight:{points:["br","tr"],overflow:r,offset:[0,-4],targetOffset:n},rightTop:{points:["tl","tr"],overflow:r,offset:[4,0],targetOffset:n},bottomRight:{points:["tr","br"],overflow:r,offset:[0,4],targetOffset:n},rightBottom:{points:["bl","br"],overflow:r,offset:[4,0],targetOffset:n},bottomLeft:{points:["tl","bl"],overflow:r,offset:[0,4],targetOffset:n},leftBottom:{points:["br","bl"],overflow:r,offset:[-4,0],targetOffset:n}}},87:function(t,e,o){"use strict";o.r(e),o.d(e,"Headers",(function(){return h})),o.d(e,"Request",(function(){return O})),o.d(e,"Response",(function(){return A})),o.d(e,"DOMException",(function(){return x})),o.d(e,"fetch",(function(){return _}));var r="undefined"!==typeof globalThis&&globalThis||"undefined"!==typeof self&&self||"undefined"!==typeof r&&r,n="URLSearchParams"in r,i="Symbol"in r&&"iterator"in Symbol,s="FileReader"in r&&"Blob"in r&&function(){try{return new Blob,!0}catch(t){return!1}}(),a="FormData"in r,f="ArrayBuffer"in r;if(f)var l=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(t){return t&&l.indexOf(Object.prototype.toString.call(t))>-1};function u(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function p(t){return"string"!==typeof t&&(t=String(t)),t}function d(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return i&&(e[Symbol.iterator]=function(){return e}),e}function h(t){this.map={},t instanceof h?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function y(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function b(t){return new Promise((function(e,o){t.onload=function(){e(t.result)},t.onerror=function(){o(t.error)}}))}function m(t){var e=new FileReader,o=b(e);return e.readAsArrayBuffer(t),o}function v(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function w(){return this.bodyUsed=!1,this._initBody=function(t){var e;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"===typeof t?this._bodyText=t:s&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:a&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():f&&s&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=v(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):f&&(ArrayBuffer.prototype.isPrototypeOf(t)||c(t))?this._bodyArrayBuffer=v(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var t=y(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var t=y(this);return t||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(m)}),this.text=function(){var t=y(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,o=b(e);return e.readAsText(t),o}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),o=new Array(e.length),r=0;r<e.length;r++)o[r]=String.fromCharCode(e[r]);return o.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(j)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(t,e){t=u(t),e=p(e);var o=this.map[t];this.map[t]=o?o+", "+e:e},h.prototype.delete=function(t){delete this.map[u(t)]},h.prototype.get=function(t){return t=u(t),this.has(t)?this.map[t]:null},h.prototype.has=function(t){return this.map.hasOwnProperty(u(t))},h.prototype.set=function(t,e){this.map[u(t)]=p(e)},h.prototype.forEach=function(t,e){for(var o in this.map)this.map.hasOwnProperty(o)&&t.call(e,this.map[o],o,this)},h.prototype.keys=function(){var t=[];return this.forEach((function(e,o){t.push(o)})),d(t)},h.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),d(t)},h.prototype.entries=function(){var t=[];return this.forEach((function(e,o){t.push([o,e])})),d(t)},i&&(h.prototype[Symbol.iterator]=h.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function O(t,e){if(!(this instanceof O))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var o=(e=e||{}).body;if(t instanceof O){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new h(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new h(e.headers)),this.method=function(t){var e=t.toUpperCase();return g.indexOf(e)>-1?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(o),("GET"===this.method||"HEAD"===this.method)&&("no-store"===e.cache||"no-cache"===e.cache)){var r=/([?&])_=[^&]*/;if(r.test(this.url))this.url=this.url.replace(r,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function j(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var o=t.split("="),r=o.shift().replace(/\+/g," "),n=o.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(n))}})),e}function T(t){var e=new h;return t.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t})).forEach((function(t){var o=t.split(":"),r=o.shift().trim();if(r){var n=o.join(":").trim();e.append(r,n)}})),e}function A(t,e){if(!(this instanceof A))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===e.statusText?"":""+e.statusText,this.headers=new h(e.headers),this.url=e.url||"",this._initBody(t)}O.prototype.clone=function(){return new O(this,{body:this._bodyInit})},w.call(O.prototype),w.call(A.prototype),A.prototype.clone=function(){return new A(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},A.error=function(){var t=new A(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];A.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new A(null,{status:e,headers:{location:t}})};var x=r.DOMException;try{new x}catch(C){(x=function(t,e){this.message=t,this.name=e;var o=Error(t);this.stack=o.stack}).prototype=Object.create(Error.prototype),x.prototype.constructor=x}function _(t,e){return new Promise((function(o,n){var i=new O(t,e);if(i.signal&&i.signal.aborted)return n(new x("Aborted","AbortError"));var a=new XMLHttpRequest;function l(){a.abort()}a.onload=function(){var t={status:a.status,statusText:a.statusText,headers:T(a.getAllResponseHeaders()||"")};t.url="responseURL"in a?a.responseURL:t.headers.get("X-Request-URL");var e="response"in a?a.response:a.responseText;setTimeout((function(){o(new A(e,t))}),0)},a.onerror=function(){setTimeout((function(){n(new TypeError("Network request failed"))}),0)},a.ontimeout=function(){setTimeout((function(){n(new TypeError("Network request failed"))}),0)},a.onabort=function(){setTimeout((function(){n(new x("Aborted","AbortError"))}),0)},a.open(i.method,function(t){try{return""===t&&r.location.href?r.location.href:t}catch(e){return t}}(i.url),!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&(s?a.responseType="blob":f&&i.headers.get("Content-Type")&&-1!==i.headers.get("Content-Type").indexOf("application/octet-stream")&&(a.responseType="arraybuffer")),!e||"object"!==typeof e.headers||e.headers instanceof h?i.headers.forEach((function(t,e){a.setRequestHeader(e,t)})):Object.getOwnPropertyNames(e.headers).forEach((function(t){a.setRequestHeader(t,p(e.headers[t]))})),i.signal&&(i.signal.addEventListener("abort",l),a.onreadystatechange=function(){4===a.readyState&&i.signal.removeEventListener("abort",l)}),a.send("undefined"===typeof i._bodyInit?null:i._bodyInit)}))}_.polyfill=!0,r.fetch||(r.fetch=_,r.Headers=h,r.Request=O,r.Response=A)}}]);