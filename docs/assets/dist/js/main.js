<<<<<<< HEAD
function CodeBlock(t){this.body=t,this.btn=t.querySelector(".demo-code--copy"),this._addEventListeners=function(){this.clipboard.on("success",function(t){}),this.clipboard.on("error",function(t){throw new Error(t)})},this._init=function(){var t=this;this.clipboard=new Clipboard(this.btn,{text:function(e){return t.body.innerText}}),this._addEventListeners()},this._init()}function Drawer(t){this.drawerContainer=t,this.drawer=t.querySelector(".drawer"),this.tocs=t.querySelectorAll(".toc"),this.active=!1,this.toggle=function(){this.active?this._hideDrawer():this._showDrawer()},this._showDrawer=function(){this.active=!0,this.drawerContainer.classList.add("in");var t=this;requestAnimationFrame(function(){requestAnimationFrame(function(){t.drawerContainer.classList.add("active"),document.body.addEventListener("touchend",t._onBodyClick)})})},this._removeDrawer=function(){this.drawerContainer.removeEventListener("transitionend",this._removeDrawer),this.active=!1,this.drawerContainer.classList.remove("in")},this._hideDrawer=function(){this.active&&(document.body.removeEventListener("touchend",this._onBodyClick),this.drawerContainer.classList.remove("active"),this.drawerContainer.addEventListener("transitionend",this._removeDrawer))},this._onBodyClick=function(t){this.active&&(this.drawer.contains(t.target)||this._hideDrawer())},this._updateTocs=function(){main.getBoundingClientRect().height;for(var t=main.scrollTop,e=Object.keys(this.tocs),n=0;n<e.length;n++){var i=this.tocs[e[n]].getComponent().getBoundingClientRect(),o=i.top+main.scrollTop<=t&&i.top+i.height>=0;this.tocs[e[n]].update(o,main.scrollTop)}},this._addEventListeners=function(){for(var t=this.drawer.querySelectorAll(".collection-listItem > a"),e=0;e<t.length;e+=1)t[e].addEventListener("click",this._hideDrawer);main.addEventListener("scroll",this._updateTocs),window.addEventListener("hashchange",this._updateTocs)},this._init=function(){this._onBodyClick=this._onBodyClick.bind(this),this._hideDrawer=this._hideDrawer.bind(this),this._removeDrawer=this._removeDrawer.bind(this),this._updateTocs=this._updateTocs.bind(this),this.tocs={},this.components=Array.prototype.slice.call(document.querySelectorAll(".component"));for(var t=0;t<this.components.length;t++){var e=/(.*)-component/.exec(this.components[t].getAttribute("id"))[1];this.tocs[e]=new TableOfContents(e)}this._updateTocs(),this._addEventListeners()},this._init()}function TableOfContents(t){this.base=t,this._highlightTitles=function(t){for(var e=0,n=0;n<this.titles.length;n++)this.titles[n].getBoundingClientRect().top<100?(e=n,this.links[n].classList.add("active")):this.links[n].classList.remove("active");this._updateScrollIndicator(t,e)},this._updateScrollIndicator=function(t,e){var n=null,i=null;e===this.titles.length-1?(i=this.titles[e].offsetTop+this.component.getBoundingClientRect().bottom-100,n=this.titles[e].getBoundingClientRect().top-100):(n=t,i=this.titles[e+1].offsetTop-100);var o=i/n;console.log(i,n,o),this.scrollIndicator.style.height=33*(e+1)+33*o+"px"},this.update=function(t,e){t?(this.body.classList.add("active"),this._highlightTitles(e)):this.body.classList.remove("active")},this.getComponent=function(){return this.component},this._init=function(){this.component=document.getElementById(this.base+"-component"),this.body=document.getElementById(this.base+"-nav"),this.scrollIndicator=this.body.querySelector(".scrollIndicator"),this.toc=this.body.querySelector(".toc"),console.log(document.getElementById(this.base)),this.titles=[],this.links=this.toc.querySelectorAll("li > a");for(var t=0;t<this.links.length;t++)this.titles.push(this.component.querySelector(this.links[t].getAttribute("href")))},this._init()}console.log("card demo script"),function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Clipboard=t()}}(function(){return function t(e,n,i){function o(s,a){if(!n[s]){if(!e[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(r)return r(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[s]={exports:{}};e[s][0].call(u.exports,function(t){var n=e[s][1][t];return o(n||t)},u,u.exports,t,e,n,i)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(t,e,n){var i=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}e.exports=function(t,e){for(;t&&t.nodeType!==i;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},{}],2:[function(t,e,n){function i(t,e,n,i){return function(n){n.delegateTarget=o(n.target,e),n.delegateTarget&&i.call(t,n)}}var o=t("./closest");e.exports=function(t,e,n,o,r){var s=i.apply(this,arguments);return t.addEventListener(n,s,r),{destroy:function(){t.removeEventListener(n,s,r)}}}},{"./closest":1}],3:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},{}],4:[function(t,e,n){function i(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function o(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function r(t,e,n){return a(document.body,t,e,n)}var s=t("./is"),a=t("delegate");e.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!s.string(e))throw new TypeError("Second argument must be a String");if(!s.fn(n))throw new TypeError("Third argument must be a Function");if(s.node(t))return i(t,e,n);if(s.nodeList(t))return o(t,e,n);if(s.string(t))return r(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},{"./is":3,delegate:2}],5:[function(t,e,n){e.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var i=window.getSelection(),o=document.createRange();o.selectNodeContents(t),i.removeAllRanges(),i.addRange(o),e=i.toString()}return e}},{}],6:[function(t,e,n){function i(){}i.prototype={on:function(t,e,n){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function i(){o.off(t,i),e.apply(n,arguments)}var o=this;return i._=e,this.on(t,i,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),i=0,o=n.length;for(i;i<o;i++)n[i].fn.apply(n[i].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),i=n[t],o=[];if(i&&e)for(var r=0,s=i.length;r<s;r++)i[r].fn!==e&&i[r].fn._!==e&&o.push(i[r]);return o.length?n[t]=o:delete n[t],this}},e.exports=i},{}],7:[function(t,e,n){!function(i,o){if(void 0!==n)o(e,t("select"));else{var r={exports:{}};o(r,i.select),i.clipboardAction=r.exports}}(this,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(t){return t&&t.__esModule?t:{default:t}}(e),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=function(){function t(e){n(this,t),this.resolveOptions(e),this.initSelection()}return r(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,i.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":o(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=s})},{select:5}],8:[function(t,e,n){!function(i,o){if(void 0!==n)o(e,t("./clipboard-action"),t("tiny-emitter"),t("good-listener"));else{var r={exports:{}};o(r,i.clipboardAction,i.tinyEmitter,i.goodListener),i.clipboard=r.exports}}(this,function(t,e,n,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function c(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=o(e),u=o(n),h=o(i),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),p=function(t){function e(t,n){r(this,e);var i=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.resolveOptions(n),i.listenClick(t),i}return a(e,t),f(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===d(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,h.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return c("action",t)}},{key:"defaultTarget",value:function(t){var e=c("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return c("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(u.default);t.exports=p})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});var main=document.querySelector(".main"),headerIcon=document.getElementById("headerIcon"),drawer=new Drawer(document.getElementById("drawerContainer"));headerIcon.addEventListener("click",function(){drawer.toggle()});for(var codeBlocks=document.querySelectorAll(".demo-code"),i=0;i<codeBlocks.length;i+=1)new CodeBlock(codeBlocks[i]);window.addEventListener("hashchange",function(t){console.log("ash change")});
=======
function CodeBlock(t){this.body=t,this.btn=t.querySelector(".demo-code--copy"),this._addEventListeners=function(){this.clipboard.on("success",function(e){t.querySelector(".demo-code--copy").classList.add("success"),setTimeout(function(){t.querySelector(".demo-code--copy").classList.remove("success")},1500)}),this.clipboard.on("error",function(t){throw new Error(t)})},this._init=function(){var t=this;this.clipboard=new Clipboard(this.btn,{text:function(e){return t.body.innerText}}),this._addEventListeners()},this._init()}function Drawer(t){this.drawerContainer=t,this.drawer=t.querySelector(".drawer"),this.tocs=t.querySelectorAll(".toc"),this.active=!1,this.toggle=function(){this.active?this._hideDrawer():this._showDrawer()},this._showDrawer=function(){this.active=!0,this.drawerContainer.classList.add("in");var t=this;requestAnimationFrame(function(){requestAnimationFrame(function(){t.drawerContainer.classList.add("active"),document.body.addEventListener("touchend",t._onBodyClick)})})},this._removeDrawer=function(){this.drawerContainer.removeEventListener("transitionend",this._removeDrawer),this.active=!1,this.drawerContainer.classList.remove("in")},this._hideDrawer=function(){this.active&&(document.body.removeEventListener("touchend",this._onBodyClick),this.drawerContainer.classList.remove("active"),this.drawerContainer.addEventListener("transitionend",this._removeDrawer))},this._onBodyClick=function(t){this.active&&(this.drawer.contains(t.target)||this._hideDrawer())},this._updateTocs=function(){main.getBoundingClientRect().height;for(var t=main.scrollTop,e=Object.keys(this.tocs),n=0;n<e.length;n++){var i=this.tocs[e[n]].getComponent().getBoundingClientRect(),o=i.top+main.scrollTop-40<=t&&i.top+i.height>=0;this.tocs[e[n]].update(o,main.scrollTop)}},this._addEventListeners=function(){for(var t=this.drawer.querySelectorAll(".collection-listItem > a"),e=0;e<t.length;e+=1)t[e].addEventListener("click",this._hideDrawer);main.addEventListener("scroll",this._updateTocs),window.addEventListener("hashchange",this._updateTocs)},this._init=function(){this._onBodyClick=this._onBodyClick.bind(this),this._hideDrawer=this._hideDrawer.bind(this),this._removeDrawer=this._removeDrawer.bind(this),this._updateTocs=this._updateTocs.bind(this),this.tocs={},this.components=Array.prototype.slice.call(document.querySelectorAll(".component"));for(var t=0;t<this.components.length;t++){var e=/(.*)-component/.exec(this.components[t].getAttribute("id"))[1];this.tocs[e]=new TableOfContents(e)}this._updateTocs(),this._addEventListeners()},this._init()}function TableOfContents(t){this.base=t,this._highlightTitles=function(t){for(var e=0;e<this.titles.length;e++)this.titles[e].getBoundingClientRect().top<112?this.links[e].classList.add("active"):this.links[e].classList.remove("active")},this.update=function(t,e){t?(this.body.classList.add("active"),this._highlightTitles(e)):this.body.classList.remove("active")},this.getComponent=function(){return this.component},this._init=function(){this.component=document.getElementById(this.base+"-component"),this.body=document.getElementById(this.base+"-nav"),this.toc=this.body.querySelector(".toc"),this.titles=[],this.links=this.toc.querySelectorAll("li > a");for(var t=0;t<this.links.length;t++)this.titles.push(this.component.querySelector(this.links[t].getAttribute("href")))},this._init()}console.log("card demo script"),function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Clipboard=t()}}(function(){return function t(e,n,i){function o(s,a){if(!n[s]){if(!e[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(r)return r(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[s]={exports:{}};e[s][0].call(u.exports,function(t){var n=e[s][1][t];return o(n||t)},u,u.exports,t,e,n,i)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(t,e,n){function i(t,e){for(;t&&t.nodeType!==o;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var o=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}e.exports=i},{}],2:[function(t,e,n){function i(t,e,n,i,r){var s=o.apply(this,arguments);return t.addEventListener(n,s,r),{destroy:function(){t.removeEventListener(n,s,r)}}}function o(t,e,n,i){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&i.call(t,n)}}var r=t("./closest");e.exports=i},{"./closest":1}],3:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},{}],4:[function(t,e,n){function i(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!a.string(e))throw new TypeError("Second argument must be a String");if(!a.fn(n))throw new TypeError("Third argument must be a Function");if(a.node(t))return o(t,e,n);if(a.nodeList(t))return r(t,e,n);if(a.string(t))return s(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function r(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function s(t,e,n){return c(document.body,t,e,n)}var a=t("./is"),c=t("delegate");e.exports=i},{"./is":3,delegate:2}],5:[function(t,e,n){function i(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var i=window.getSelection(),o=document.createRange();o.selectNodeContents(t),i.removeAllRanges(),i.addRange(o),e=i.toString()}return e}e.exports=i},{}],6:[function(t,e,n){function i(){}i.prototype={on:function(t,e,n){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function i(){o.off(t,i),e.apply(n,arguments)}var o=this;return i._=e,this.on(t,i,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),i=0,o=n.length;for(i;i<o;i++)n[i].fn.apply(n[i].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),i=n[t],o=[];if(i&&e)for(var r=0,s=i.length;r<s;r++)i[r].fn!==e&&i[r].fn._!==e&&o.push(i[r]);return o.length?n[t]=o:delete n[t],this}},e.exports=i},{}],7:[function(t,e,n){!function(i,o){if(void 0!==n)o(e,t("select"));else{var r={exports:{}};o(r,i.select),i.clipboardAction=r.exports}}(this,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(t){return t&&t.__esModule?t:{default:t}}(e),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=function(){function t(e){n(this,t),this.resolveOptions(e),this.initSelection()}return r(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,i.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":o(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=s})},{select:5}],8:[function(t,e,n){!function(i,o){if(void 0!==n)o(e,t("./clipboard-action"),t("tiny-emitter"),t("good-listener"));else{var r={exports:{}};o(r,i.clipboardAction,i.tinyEmitter,i.goodListener),i.clipboard=r.exports}}(this,function(t,e,n,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function c(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=o(e),u=o(n),h=o(i),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),p=function(t){function e(t,n){r(this,e);var i=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.resolveOptions(n),i.listenClick(t),i}return a(e,t),f(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===d(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,h.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return c("action",t)}},{key:"defaultTarget",value:function(t){var e=c("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return c("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(u.default);t.exports=p})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});var main=document.querySelector(".main"),headerIcon=document.getElementById("headerIcon"),drawer=new Drawer(document.getElementById("drawerContainer"));headerIcon.addEventListener("click",function(){drawer.toggle()});for(var codeBlocks=document.querySelectorAll(".demo-code"),i=0;i<codeBlocks.length;i+=1)new CodeBlock(codeBlocks[i]);window.addEventListener("hashchange",function(t){console.log("ash change")});
>>>>>>> origin/master
//# sourceMappingURL=main.js.map