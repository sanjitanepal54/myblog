webpackJsonp([0xd2a57dc1d883],{162:function(e,n,t){"use strict";function o(e,n,t){var o=a.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function r(e,n,t){return a.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=o,n.apiRunnerAsync=r;var a=[{plugin:t(289),options:{plugins:[]}}]},282:function(e,n,t){"use strict";var o;n.components={"component---src-pages-404-js":t(406),"component---src-pages-index-js":t(407),"component---src-pages-page-2-js":t(408),"component---src-pages-posts-my-first-blog-js":t(409)},n.json=(o={"layout-index.json":t(82),"404.json":t(410)},o["layout-index.json"]=t(82),o["index.json"]=t(412),o["layout-index.json"]=t(82),o["page-2.json"]=t(413),o["layout-index.json"]=t(82),o["404-html.json"]=t(411),o["layout-index.json"]=t(82),o["posts-my-first-blog.json"]=t(414),o),n.layouts={"layout---index":t(405)}},283:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},c=t(2),s=o(c),l=t(3),f=o(l),p=t(207),d=o(p),h=t(137),m=o(h),g=t(162),y=function(e){var n=e.children;return s.default.createElement("div",null,n())},v=function(e){function n(t){r(this,n);var o=a(this,e.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=d.default.getResourcesForPathname(e.location.pathname);if(t)this.setState({location:e.location,pageResources:t});else{var o=e.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(e){n.setState({location:o,pageResources:e})})}}},n.prototype.componentDidMount=function(){var e=this;m.default.on("onPostLoadPageResources",function(n){d.default.getPage(e.state.location.pathname)&&n.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path))))},n.prototype.render=function(){var e=(0,g.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),n=e[0];return this.props.page?this.state.pageResources?n||(0,c.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:y,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(s.default.Component);v.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},n.default=v,e.exports=n.default},137:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(518),a=o(r),u=(0,a.default)();e.exports=u},284:function(e,n,t){"use strict";var o=t(161),r={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var a=decodeURIComponent(t),u=a.slice(n.length);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),r[u])return r[u];var i=void 0;return e.some(function(e){if(e.matchPath){if((0,o.matchPath)(u,{path:e.path})||(0,o.matchPath)(u,{path:e.matchPath}))return i=e,r[u]=e,!0}else{if((0,o.matchPath)(u,{path:e.path,exact:!0}))return i=e,r[u]=e,!0;if((0,o.matchPath)(u,{path:e.path+"index.html"}))return i=e,r[u]=e,!0}return!1}),i}}},285:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(200),a=o(r),u=t(162),i=(0,u.apiRunner)("replaceHistory"),c=i[0],s=c||(0,a.default)();e.exports=s},411:function(e,n,t){t(30),e.exports=function(e){return t.e(0xa2868bfb69fc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(484)})})}},410:function(e,n,t){t(30),e.exports=function(e){return t.e(0xe70826b53c04,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(485)})})}},412:function(e,n,t){t(30),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(486)})})}},82:function(e,n,t){t(30),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(202)})})}},413:function(e,n,t){t(30),e.exports=function(e){return t.e(0x7b71d9db271c,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(487)})})}},414:function(e,n,t){t(30),e.exports=function(e){return t.e(0x8e7b56edbffe,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(488)})})}},405:function(e,n,t){t(30),e.exports=function(e){return t.e(0x67ef26645b2a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(286)})})}},207:function(e,n,t){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.publicLoader=void 0;var r=t(2),a=(o(r),t(284)),u=o(a),i=t(137),c=o(i),s=void 0,l={},f={},p={},d={},h={},m=[],g=[],y={},v=[],R={},w=function(e){return e&&e.default||e},P=void 0,_=!0,x=[],b={},j={},E=5;P=t(287)({getNextQueuedResources:function(){return v.slice(-1)[0]},createResourceDownload:function(e){k(e,function(){v=v.filter(function(n){return n!==e}),P.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){P.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){P.onPostLoadPageResources(e)});var C=function(e,n){return R[e]>R[n]?1:R[e]<R[n]?-1:0},N=function(e,n){return y[e]>y[n]?1:y[e]<y[n]?-1:0},k=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(d[n])e.nextTick(function(){t(null,d[n])});else{var o=void 0;o="component---"===n.slice(0,12)?f.components[n]:"layout---"===n.slice(0,9)?f.layouts[n]:f.json[n],o(function(e,o){d[n]=o,x.push({resource:n,succeeded:!e}),j[n]||(j[n]=e),x=x.slice(-E),t(e,o)})}},O=function(n,t){h[n]?e.nextTick(function(){t(null,h[n])}):j[n]?e.nextTick(function(){t(j[n])}):k(n,function(e,o){if(e)t(e);else{var r=w(o());h[n]=r,t(e,r)}})},L=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var n=x.find(function(e){return e.succeeded});return!!n},T=function(e,n){console.log(n),b[e]||(b[e]=n),L()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},S=1,A={empty:function(){g=[],y={},R={},v=[],m=[]},addPagesArray:function(e){m=e;var n="";n="/myblog",s=(0,u.default)(e,n)},addDevRequires:function(e){l=e},addProdRequires:function(e){f=e},dequeue:function(e){return g.pop()},enqueue:function(e){if(!m.some(function(n){return n.path===e}))return!1;var n=1/S;S+=1,y[e]?y[e]+=1:y[e]=1,A.has(e)||g.unshift(e),g.sort(N);var t=s(e);return t.jsonName&&(R[t.jsonName]?R[t.jsonName]+=1+n:R[t.jsonName]=1+n,v.indexOf(t.jsonName)!==-1||d[t.jsonName]||v.unshift(t.jsonName)),t.componentChunkName&&(R[t.componentChunkName]?R[t.componentChunkName]+=1+n:R[t.componentChunkName]=1+n,v.indexOf(t.componentChunkName)!==-1||d[t.jsonName]||v.unshift(t.componentChunkName)),v.sort(C),P.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:v,resourcesCount:R}},getPages:function(){return{pathArray:g,pathCount:y}},getPage:function(e){return s(e)},has:function(e){return g.some(function(n){return n===e})},getResourcesForPathname:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};_&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(s(n)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var r;if(t){if(o>=n.length)break;r=n[o++]}else{if(o=n.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),_=!1;if(b[n])return T(n,'Previously detected load failure for "'+n+'"'),t();var o=s(n);if(!o)return T(n,"A page wasn't found for \""+n+'"'),t();if(n=o.path,p[n])return e.nextTick(function(){t(p[n]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:p[n]})}),p[n];c.default.emit("onPreLoadPageResources",{path:n});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){p[n]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};t(e),c.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return O(o.componentChunkName,function(e,n){e&&T(o.path,"Loading the component for "+o.path+" failed"),r=n,i()}),O(o.jsonName,function(e,n){e&&T(o.path,"Loading the JSON for "+o.path+" failed"),a=n,i()}),void(o.layoutComponentChunkName&&O(o.layout,function(e,n){e&&T(o.path,"Loading the Layout for "+o.path+" failed"),u=n,i()}))},peek:function(e){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(e){return g.length-g.indexOf(e)-1}};n.publicLoader={getResourcesForPathname:A.getResourcesForPathname};n.default=A}).call(n,t(160))},489:function(e,n){e.exports=[{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-page-2-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"page-2.json",path:"/page-2/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"},{componentChunkName:"component---src-pages-posts-my-first-blog-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-my-first-blog.json",path:"/posts/myFirstBlog/"}]},287:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],r=[],a=function(){var e=n();e&&(r.push(e),t(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=t(162),u=t(2),i=o(u),c=t(83),s=o(c),l=t(161),f=t(418),p=t(389),d=o(p),h=t(285),m=o(h),g=t(137),y=o(g),v=t(489),R=o(v),w=t(490),P=o(w),_=t(283),x=o(_),b=t(282),j=o(b),E=t(207),C=o(E);t(380),window.___emitter=y.default,C.default.addPagesArray(R.default),C.default.addProdRequires(j.default),window.asyncRequires=j.default,window.___loader=C.default,window.matchPath=l.matchPath;var N=P.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),k=function(e){var n=N[e];return null!=n&&(m.default.replace(n.toPath),!0)};k(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,n){k(e.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:e,action:n})}))}function n(e,n){var t=n.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(288);var o=function(e){function n(t){t.page.path===C.default.getPage(e).path&&(y.default.off("onPostLoadPageResources",n),clearTimeout(o),window.___history.push(e))}var t=N[e];if(t&&(e=t.toPath),window.location.pathname!==e){var o=setTimeout(function(){y.default.off("onPostLoadPageResources",n),y.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);C.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):y.default.on("onPostLoadPageResources",n)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:m.default.location,action:m.default.action});var c=(0,a.apiRunner)("replaceRouterComponent",{history:m.default})[0],p=function(e){var n=e.children;return i.default.createElement(l.Router,{history:m.default},n)},h=(0,l.withRouter)(x.default);C.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(c?c:p,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:n},(0,u.createElement)(h,{layout:!0,children:function(n){return(0,u.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return C.default.getPage(o.location.pathname)?(0,u.createElement)(x.default,r({page:!0},o)):(0,u.createElement)(x.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return s.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},490:function(e,n){e.exports=[]},288:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(137),a=o(r),u="/";u="/myblog/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},289:function(e,n){"use strict"},389:function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,e=function(){for(t.removeEventListener(r,e),a=1;e=n.shift();)e()}),function(e){a?setTimeout(e,0):n.push(e)}})},30:function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var i=!1,c=!0,s=function(e){u&&(u(t,e),u=null)};return!a&&n&&n[o]?void s(!0):(r(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,e(function(){i||(i=!0,a?a[o]=void 0:(n||(n={}),n[o]=!0),s(!0))}))))}}o()},518:function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).slice().map(function(e){e(t)}),(e["*"]||[]).slice().map(function(e){e(n,t)})}}}e.exports=t},160:function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(n){try{return f.call(null,e)}catch(n){return f.call(this,e)}}}function u(){m&&d&&(m=!1,d.length?h=d.concat(h):g=-1,h.length&&i())}function i(){if(!m){var e=r(u);m=!0;for(var n=h.length;n;){for(d=h,h=[];++g<n;)d&&d[g].run();g=-1,n=h.length}d=null,m=!1,a(e)}}function c(e,n){this.fun=e,this.array=n}function s(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(e){l=t}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var d,h=[],m=!1,g=-1;p.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];h.push(new c(e,n)),1!==h.length||m||r(i)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},406:function(e,n,t){t(30),e.exports=function(e){return t.e(0x9427c64ab85d,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(291)})})}},407:function(e,n,t){t(30),e.exports=function(e){return t.e(35783957827783,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(292)})})}},408:function(e,n,t){t(30),e.exports=function(e){return t.e(0xc6c285f8fd10,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(293)})})}},409:function(e,n,t){t(30),e.exports=function(e){return t.e(69649897764141,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(294)})})}}});
//# sourceMappingURL=app-e1e2a7086b7534a5072a.js.map