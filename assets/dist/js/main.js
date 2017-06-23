function CodeBlock(t){this.body=t,this.btn=t.querySelector(".demo-code--copy"),this._addEventListeners=function(){this.clipboard.on("success",function(e){t.querySelector(".demo-code--copy").classList.add("success"),setTimeout(function(){t.querySelector(".demo-code--copy").classList.remove("success")},1500)}),this.clipboard.on("error",function(t){throw new Error(t)})},this._init=function(){var t=this;this.clipboard=new Clipboard(this.btn,{text:function(e){return t.body.innerText}}),this._addEventListeners()},this._init()}function TableOfContents(t){this.base=t,this.furthestTitle=null,this._highlightTitles=function(t){for(var e=0,i=0;i<this.titles.length;i++)this.titles[i].getBoundingClientRect().top<IN_VIEW_THRESHOLD?(e=i,this.links[i].classList.add("active")):this.links[i].classList.remove("active");this._updateScrollIndicator(t,e)},this._updateScrollIndicator=function(t,e){if(e!==this.furthestTitle){this.furthestTitle=e;var i=this.titles[e].offsetTop;if(e===this.titles.length-1){var n=this.component.offsetTop+this.component.offsetHeight;this.nextElementDistance=n,this.currElementDistance=i}else{var o=this.titles[e+1].offsetTop;this.nextElementDistance=o,this.currElementDistance=i}}goal=this.nextElementDistance-this.currElementDistance,distance=goal-(this.nextElementDistance-t-IN_VIEW_THRESHOLD),distance=distance>goal?goal:distance;var r=33*(e+1)+33*(distance/goal);this.scrollIndicator.style.height=r+"px"},this.hideToc=function(){this.maxHeight=this.toc.getBoundingClientRect().height,this.toc.style.maxHeight="0px"},this.update=function(t,e){t?(this.body.classList.add("active"),this.toc.style.maxHeight=this.maxHeight+"px",this._highlightTitles(e)):(this.toc.style.maxHeight="0px",this.scrollIndicator.style.height="0px",this.body.classList.remove("active"))},this.getComponent=function(){return this.component},this._init=function(){if(this.component=document.getElementById(this.base+"-component"),this.body=document.getElementById(this.base+"-nav"),this.scrollIndicator=this.body.querySelector(".scrollIndicator"),this.toc=this.body.querySelector(".toc"),this.component){this.hideToc(),this.titles=[],this.links=this.toc.querySelectorAll("li > a");for(var t=0;t<this.links.length;t++)this.titles.push(this.component.querySelector(this.links[t].getAttribute("href")))}},this._init()}function Drawer(t){this.drawerContainer=t,this.drawer=t.querySelector(".drawer"),this.tocs=t.querySelectorAll(".toc"),this.active=!1,this.toggle=function(){this.active?this._hideDrawer():this._showDrawer()},this._showDrawer=function(){this.active=!0,this.drawerContainer.classList.add("in");var t=this;requestAnimationFrame(function(){requestAnimationFrame(function(){t.drawerContainer.classList.add("active"),document.body.addEventListener("touchend",t._onBodyClick)})})},this._removeDrawer=function(){this.drawerContainer.removeEventListener("transitionend",this._removeDrawer),this.active=!1,this.drawerContainer.classList.remove("in")},this._hideDrawer=function(){this.active&&(document.body.removeEventListener("touchend",this._onBodyClick),this.drawerContainer.classList.remove("active"),this.drawerContainer.addEventListener("transitionend",this._removeDrawer))},this._onBodyClick=function(t){this.active&&(this.drawer.contains(t.target)||this._hideDrawer())},this._updateTocs=function(){this.ticking=!1;for(var t=[],e=Object.keys(this.tocs),i=0;i<e.length;i++){var n=this.tocs[e[i]].getComponent();n&&n.offsetTop+n.offsetHeight-this.latestKnownScrollY>0&&t.push(this.tocs[e[i]])}for(var o=t[0],i=0;i<e.length;i++){var r=this.tocs[e[i]]===o;this.tocs[e[i]].update(r,this.latestKnownScrollY)}},this._requestTick=function(){this.ticking||requestAnimationFrame(this._updateTocs),this.ticking=!0},this._onScroll=function(){this.latestKnownScrollY=main.scrollTop,this._requestTick()},this._addEventListeners=function(){for(var t=this.drawer.querySelectorAll(".collection-listItem > a"),e=0;e<t.length;e+=1)t[e].addEventListener("click",this._hideDrawer);main.addEventListener("scroll",this._onScroll),window.addEventListener("resize",this._onScroll),window.addEventListener("hashchange",this._onScroll)},this._init=function(){this.latestKnownScrollY=0,this.ticking=!1,this._onBodyClick=this._onBodyClick.bind(this),this._hideDrawer=this._hideDrawer.bind(this),this._removeDrawer=this._removeDrawer.bind(this),this._updateTocs=this._updateTocs.bind(this),this._requestTick=this._requestTick.bind(this),this._onScroll=this._onScroll.bind(this),this.tocs={};for(var t=Array.prototype.slice.call(document.querySelectorAll(".collection-listItem")),e=0;e<t.length;e++){var i=/(.*)-nav/.exec(t[e].getAttribute("id"))[1];this.tocs[i]=new TableOfContents(i)}this._updateTocs(),this._addEventListeners()},this._init()}console.log("card demo script"),function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Clipboard=t()}}(function(){return function t(e,i,n){function o(s,c){if(!i[s]){if(!e[s]){var a="function"==typeof require&&require;if(!c&&a)return a(s,!0);if(r)return r(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=i[s]={exports:{}};e[s][0].call(u.exports,function(t){var i=e[s][1][t];return o(i||t)},u,u.exports,t,e,i,n)}return i[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(t,e,i){var n=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}e.exports=function(t,e){for(;t&&t.nodeType!==n;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},{}],2:[function(t,e,i){function n(t,e,i,n){return function(i){i.delegateTarget=o(i.target,e),i.delegateTarget&&n.call(t,i)}}var o=t("./closest");e.exports=function(t,e,i,o,r){var s=n.apply(this,arguments);return t.addEventListener(i,s,r),{destroy:function(){t.removeEventListener(i,s,r)}}}},{"./closest":1}],3:[function(t,e,i){i.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},i.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||i.node(t[0]))},i.string=function(t){return"string"==typeof t||t instanceof String},i.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},{}],4:[function(t,e,i){function n(t,e,i){return t.addEventListener(e,i),{destroy:function(){t.removeEventListener(e,i)}}}function o(t,e,i){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,i)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,i)})}}}function r(t,e,i){return c(document.body,t,e,i)}var s=t("./is"),c=t("delegate");e.exports=function(t,e,i){if(!t&&!e&&!i)throw new Error("Missing required arguments");if(!s.string(e))throw new TypeError("Second argument must be a String");if(!s.fn(i))throw new TypeError("Third argument must be a Function");if(s.node(t))return n(t,e,i);if(s.nodeList(t))return o(t,e,i);if(s.string(t))return r(t,e,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},{"./is":3,delegate:2}],5:[function(t,e,i){e.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var i=t.hasAttribute("readonly");i||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),i||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),o=document.createRange();o.selectNodeContents(t),n.removeAllRanges(),n.addRange(o),e=n.toString()}return e}},{}],6:[function(t,e,i){function n(){}n.prototype={on:function(t,e,i){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){function n(){o.off(t,n),e.apply(i,arguments)}var o=this;return n._=e,this.on(t,n,i)},emit:function(t){var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),n=0,o=i.length;for(n;n<o;n++)i[n].fn.apply(i[n].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),n=i[t],o=[];if(n&&e)for(var r=0,s=n.length;r<s;r++)n[r].fn!==e&&n[r].fn._!==e&&o.push(n[r]);return o.length?i[t]=o:delete i[t],this}},e.exports=n},{}],7:[function(t,e,i){!function(n,o){if(void 0!==i)o(e,t("select"));else{var r={exports:{}};o(r,n.select),n.clipboardAction=r.exports}}(this,function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(t){return t&&t.__esModule?t:{default:t}}(e),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=function(){function t(e){i(this,t),this.resolveOptions(e),this.initSelection()}return r(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=i+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,n.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,n.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":o(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=s})},{select:5}],8:[function(t,e,i){!function(n,o){if(void 0!==i)o(e,t("./clipboard-action"),t("tiny-emitter"),t("good-listener"));else{var r={exports:{}};o(r,n.clipboardAction,n.tinyEmitter,n.goodListener),n.clipboard=r.exports}}(this,function(t,e,i,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){var i="data-clipboard-"+t;if(e.hasAttribute(i))return e.getAttribute(i)}var l=o(e),u=o(i),h=o(n),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),p=function(t){function e(t,i){r(this,e);var n=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.resolveOptions(i),n.listenClick(t),n}return c(e,t),f(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===d(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,h.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return a("action",t)}},{key:"defaultTarget",value:function(t){var e=a("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return a("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,i=!!document.queryCommandSupported;return e.forEach(function(t){i=i&&!!document.queryCommandSupported(t)}),i}}]),e}(u.default);t.exports=p})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});var main=document.querySelector(".main"),IN_VIEW_THRESHOLD=10,headerIcon=document.getElementById("headerIcon"),drawer=new Drawer(document.getElementById("drawerContainer"));headerIcon.addEventListener("click",function(){drawer.toggle()});for(var codeBlocks=document.querySelectorAll(".demo-code"),i=0;i<codeBlocks.length;i+=1)new CodeBlock(codeBlocks[i]);window.addEventListener("hashchange",function(t){console.log("ash change")});
//# sourceMappingURL=main.js.map