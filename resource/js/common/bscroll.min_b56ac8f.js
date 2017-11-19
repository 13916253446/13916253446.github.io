!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):t.BScroll=i()}(this,function(){"use strict";function t(t){return!1!==x&&("standard"===x?t:x+t.charAt(0).toUpperCase()+t.substr(1))}function i(t,i,e,s){t.addEventListener(i,e,{passive:!1,capture:!!s})}function e(t,i,e,s){t.removeEventListener(i,e,{passive:!1,capture:!!s})}function s(t){for(var i=0,e=0;t;)i-=t.offsetLeft,e-=t.offsetTop,t=t.offsetParent;return{left:i,top:e}}function o(t){if(t instanceof window.SVGElement){var i=t.getBoundingClientRect();return{top:i.top,left:i.left,width:i.width,height:i.height}}return{top:t.offsetTop,left:t.offsetLeft,width:t.offsetWidth,height:t.offsetHeight}}function n(t,i){for(var e in i)if(i[e].test(t[e]))return!0;return!1}function r(t,i){var e=document.createEvent("Event");e.initEvent(i,!0,!0),e.pageX=t.pageX,e.pageY=t.pageY,t.target.dispatchEvent(e)}function h(t){var i=t.target;if(!/(SELECT|INPUT|TEXTAREA)/i.test(i.tagName)){var e=document.createEvent(window.MouseEvent?"MouseEvents":"Event");e.initEvent("click",!0,!1),e._constructed=!0,i.dispatchEvent(e)}}function a(t,i){i.firstChild?l(t,i.firstChild):i.appendChild(t)}function l(t,i){i.parentNode.insertBefore(t,i)}function c(){return window.performance&&window.performance.now?window.performance.now()+window.performance.timing.navigationStart:+new Date}function p(t){for(var i=arguments.length,e=Array(i>1?i-1:0),s=1;i>s;s++)e[s-1]=arguments[s];for(var o=0;o<e.length;o++){var n=e[o];for(var r in n)t[r]=n[r]}return t}function u(t,i,e,s,o,n){var r=t-i,h=Math.abs(r)/e,a=n.deceleration,l=n.itemHeight,c=n.swipeBounceTime,p=n.wheel,u=n.swipeTime,d=p?4:15,m=t+h/a*(0>r?-1:1);return p&&l&&(m=Math.round(m/l)*l),s>m?(m=o?s-o/d*h:s,u=c):m>0&&(m=o?o/d*h:0,u=c),{destination:Math.round(m),duration:u}}function d(t){console.error("[BScroll warn]: "+t)}function m(t){var i=document.createElement("div"),e=document.createElement("div");return i.style.cssText="position:absolute;z-index:9999;pointerEvents:none",e.style.cssText="box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;",e.className="bscroll-indicator","horizontal"===t?(i.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",e.style.height="100%",i.className="bscroll-horizontal-scrollbar"):(i.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",e.style.width="100%",i.className="bscroll-vertical-scrollbar"),i.style.cssText+=";overflow:hidden",i.appendChild(e),i}function g(t,i){this.wrapper=i.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=t,this.direction=i.direction,i.fade?(this.visible=0,this.wrapperStyle.opacity="0"):this.visible=1}function f(t,i){this.wrapper="string"==typeof t?document.querySelector(t):t,this.wrapper||d("can not resolve the wrapper dom"),this.scroller=this.wrapper.children[0],this.scroller||d("the wrapper need at least one child element to be scroller"),this.scrollerStyle=this.scroller.style,this._init(t,i)}var v=function(){function t(t,i){var e=[],s=!0,o=!1,n=void 0;try{for(var r,h=t[Symbol.iterator]();!(s=(r=h.next()).done)&&(e.push(r.value),!i||e.length!==i);s=!0);}catch(t){o=!0,n=t}finally{try{!s&&h.return&&h.return()}finally{if(o)throw n}}return e}return function(i,e){if(Array.isArray(i))return i;if(Symbol.iterator in Object(i))return t(i,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),y=function(t){if(Array.isArray(t)){for(var i=0,e=Array(t.length);i<t.length;i++)e[i]=t[i];return e}return Array.from(t)},w=document.createElement("div").style,x=function(){var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var i in t)if(void 0!==w[t[i]])return i;return!1}(),T=t("transform"),b=t("perspective")in w,S="ontouchstart"in window,P=!1!==T,Y=t("transition")in w,X={transform:T,transitionTimingFunction:t("transitionTimingFunction"),transitionDuration:t("transitionDuration"),transitionProperty:t("transitionProperty"),transitionDelay:t("transitionDelay"),transformOrigin:t("transformOrigin"),transitionEnd:t("transitionEnd")},_=1,M={touchstart:_,touchmove:_,touchend:_,mousedown:2,mousemove:2,mouseup:2},E={startX:0,startY:0,scrollX:!1,scrollY:!0,freeScroll:!1,directionLockThreshold:5,eventPassthrough:"",click:!1,tap:!1,bounce:!0,bounceTime:700,momentum:!0,momentumLimitTime:300,momentumLimitDistance:15,swipeTime:2500,swipeBounceTime:500,deceleration:.001,flickLimitTime:200,flickLimitDistance:100,resizePolling:60,probeType:0,preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:!1,disableMouse:S,disableTouch:!S,wheel:!1,snap:!1,scrollbar:!1,pullDownRefresh:!1,pullUpLoad:!1},D={swipe:{style:"cubic-bezier(0.23, 1, 0.32, 1)",fn:function(t){return 1+--t*t*t*t*t}},swipeBounce:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},bounce:{style:"cubic-bezier(0.165, 0.84, 0.44, 1)",fn:function(t){return 1- --t*t*t*t}}},H=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return window.setTimeout(t,(t.interval||100/60)/2)},k=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||function(t){window.clearTimeout(t)};return g.prototype.refresh=function(){this.transitionTime(),this._calculate(),this.updatePosition()},g.prototype.fade=function(t,i){var e=this;if(!i||this.visible){var s=t?250:500;t=t?"1":"0",this.wrapperStyle[X.transitionDuration]=s+"ms",clearTimeout(this.fadeTimeout),this.fadeTimeout=setTimeout(function(){e.wrapperStyle.opacity=t,e.visible=+t},0)}},g.prototype.updatePosition=function(){if("vertical"===this.direction){var t=Math.round(this.sizeRatioY*this.scroller.y);if(0>t){this.transitionTime(500);var i=Math.max(this.indicatorHeight+3*t,8);this.indicatorStyle.height=i+"px",t=0}else if(t>this.maxPosY){this.transitionTime(500);var e=Math.max(this.indicatorHeight-3*(t-this.maxPosY),8);this.indicatorStyle.height=e+"px",t=this.maxPosY+this.indicatorHeight-e}else this.indicatorStyle.height=this.indicatorHeight+"px";this.y=t,this.scroller.options.useTransform?this.indicatorStyle[X.transform]="translateY("+t+"px)"+this.scroller.translateZ:this.indicatorStyle.top=t+"px"}else{var s=Math.round(this.sizeRatioX*this.scroller.x);if(0>s){this.transitionTime(500);var o=Math.max(this.indicatorWidth+3*s,8);this.indicatorStyle.width=o+"px",s=0}else if(s>this.maxPosX){this.transitionTime(500);var n=Math.max(this.indicatorWidth-3*(s-this.maxPosX),8);this.indicatorStyle.width=n+"px",s=this.maxPosX+this.indicatorWidth-n}else this.indicatorStyle.width=this.indicatorWidth+"px";this.x=s,this.scroller.options.useTransform?this.indicatorStyle[X.transform]="translateX("+s+"px)"+this.scroller.translateZ:this.indicatorStyle.left=s+"px"}},g.prototype.transitionTime=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.indicatorStyle[X.transitionDuration]=t+"ms"},g.prototype.transitionTimingFunction=function(t){this.indicatorStyle[X.transitionTimingFunction]=t},g.prototype.remove=function(){this.wrapper.parentNode.removeChild(this.wrapper)},g.prototype._calculate=function(){if("vertical"===this.direction){var t=this.wrapper.clientHeight;this.indicatorHeight=Math.max(Math.round(t*t/(this.scroller.scrollerHeight||t||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px",this.maxPosY=t-this.indicatorHeight,this.sizeRatioY=this.maxPosY/this.scroller.maxScrollY}else{var i=this.wrapper.clientWidth;this.indicatorWidth=Math.max(Math.round(i*i/(this.scroller.scrollerWidth||i||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px",this.maxPosX=i-this.indicatorWidth,this.sizeRatioX=this.maxPosX/this.scroller.maxScrollX}},function(t){t.prototype._init=function(t,i){this._handleOptions(i),this._events={},this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._addDOMEvents(),this._initExtFeatures(),this._watchTransition(),this.refresh(),this.options.snap||this.scrollTo(this.options.startX,this.options.startY),this.enable()},t.prototype._handleOptions=function(t){this.options=p({},E,t),this.translateZ=this.options.HWCompositing&&b?" translateZ(0)":"",this.options.useTransition=this.options.useTransition&&Y,this.options.useTransform=this.options.useTransform&&P,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollX="horizontal"!==this.options.eventPassthrough&&this.options.scrollX,this.options.scrollY="vertical"!==this.options.eventPassthrough&&this.options.scrollY,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,!0===this.options.tap&&(this.options.tap="tap")},t.prototype._addDOMEvents=function(){var t=i;this._handleDOMEvents(t)},t.prototype._removeDOMEvents=function(){var t=e;this._handleDOMEvents(t)},t.prototype._handleDOMEvents=function(t){var i=this.options.bindToWrapper?this.wrapper:window;t(window,"orientationchange",this),t(window,"resize",this),this.options.click&&t(this.wrapper,"click",this,!0),this.options.disableMouse||(t(this.wrapper,"mousedown",this),t(i,"mousemove",this),t(i,"mousecancel",this),t(i,"mouseup",this)),S&&!this.options.disableTouch&&(t(this.wrapper,"touchstart",this),t(i,"touchmove",this),t(i,"touchcancel",this),t(i,"touchend",this)),t(this.scroller,X.transitionEnd,this)},t.prototype._initExtFeatures=function(){this.options.snap&&this._initSnap(),this.options.scrollbar&&this._initScrollbar(),this.options.pullUpLoad&&this._initPullUp(),this.options.pullDownRefresh&&this._initPullDown(),this.options.wheel&&this._initWheel()},t.prototype.handleEvent=function(t){switch(t.type){case"touchstart":case"mousedown":this._start(t);break;case"touchmove":case"mousemove":this._move(t);break;case"touchend":case"mouseup":case"touchcancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"click":this.enabled&&!t._constructed&&(n(t.target,this.options.preventDefaultException)||t.preventDefault(),t.stopPropagation())}},t.prototype.refresh=function(){var t=o(this.wrapper);this.wrapperWidth=t.width,this.wrapperHeight=t.height;var i=o(this.scroller);this.scrollerWidth=i.width,this.scrollerHeight=i.height;var e=this.options.wheel;e?(this.items=this.scroller.children,this.options.itemHeight=this.itemHeight=this.items.length?this.scrollerHeight/this.items.length:0,void 0===this.selectedIndex&&(this.selectedIndex=e.selectedIndex||0),this.options.startY=-this.selectedIndex*this.itemHeight,this.maxScrollX=0,this.maxScrollY=-this.itemHeight*(this.items.length-1)):(this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight),this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=s(this.wrapper),this.trigger("refresh"),this.resetPosition()},t.prototype.enable=function(){this.enabled=!0},t.prototype.disable=function(){this.enabled=!1},t.prototype._watchTransition=function(){var t=!1,i=this,e=this.scroller.style.pointerEvents||"auto";Object.defineProperty(this,"isInTransition",{get:function(){return t},set:function(s){t=s,i.scroller.style.pointerEvents=t?"none":e}})}}(f),function(t){t.prototype._start=function(t){var i=M[t.type];if((i===_||0===t.button)&&!(!this.enabled||this.destroyed||this.initiated&&this.initiated!==i)){this.initiated=i,this.options.preventDefault&&!n(t.target,this.options.preventDefaultException)&&t.preventDefault(),this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.movingDirectionX=0,this.movingDirectionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=c(),this.options.wheel&&(this.target=t.target),this.stop();var e=t.touches?t.touches[0]:t;this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=e.pageX,this.pointY=e.pageY,this.trigger("beforeScrollStart")}},t.prototype._move=function(t){if(this.enabled&&!this.destroyed&&M[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i=t.touches?t.touches[0]:t,e=i.pageX-this.pointX,s=i.pageY-this.pointY;this.pointX=i.pageX,this.pointY=i.pageY,this.distX+=e,this.distY+=s;var o=Math.abs(this.distX),n=Math.abs(this.distY),r=c();if(!(r-this.endTime>this.options.momentumLimitTime&&n<this.options.momentumLimitDistance&&o<this.options.momentumLimitDistance)){if(this.directionLocked||this.options.freeScroll||(this.directionLocked=o>n+this.options.directionLockThreshold?"h":n>=o+this.options.directionLockThreshold?"v":"n"),"h"===this.directionLocked){if("vertical"===this.options.eventPassthrough)t.preventDefault();else if("horizontal"===this.options.eventPassthrough)return void(this.initiated=!1);s=0}else if("v"===this.directionLocked){if("horizontal"===this.options.eventPassthrough)t.preventDefault();else if("vertical"===this.options.eventPassthrough)return void(this.initiated=!1);e=0}e=this.hasHorizontalScroll?e:0,s=this.hasVerticalScroll?s:0,this.movingDirectionX=e>0?-1:0>e?1:0,this.movingDirectionY=s>0?-1:0>s?1:0;var h=this.x+e,a=this.y+s;(h>0||h<this.maxScrollX)&&(h=this.options.bounce?this.x+e/3:h>0?0:this.maxScrollX),(a>0||a<this.maxScrollY)&&(a=this.options.bounce?this.y+s/3:a>0?0:this.maxScrollY),this.moved||(this.moved=!0,this.trigger("scrollStart")),this._translate(h,a),r-this.startTime>this.options.momentumLimitTime&&(this.startTime=r,this.startX=this.x,this.startY=this.y,1===this.options.probeType&&this.trigger("scroll",{x:this.x,y:this.y})),this.options.probeType>1&&this.trigger("scroll",{x:this.x,y:this.y});var l=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,p=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,u=this.pointX-l,d=this.pointY-p;(u>document.documentElement.clientWidth-this.options.momentumLimitDistance||u<this.options.momentumLimitDistance||d<this.options.momentumLimitDistance||d>document.documentElement.clientHeight-this.options.momentumLimitDistance)&&this._end(t)}}},t.prototype._end=function(t){if(this.enabled&&!this.destroyed&&M[t.type]===this.initiated){this.initiated=!1,this.options.preventDefault&&!n(t.target,this.options.preventDefaultException)&&t.preventDefault(),this.trigger("touchEnd",{x:this.x,y:this.y});var i=this.stopFromTransition;if(this.stopFromTransition=!1,!(this.options.pullDownRefresh&&this._checkPullDown()||this.resetPosition(this.options.bounceTime,D.bounce))){this.isInTransition=!1;var e=Math.round(this.x),o=Math.round(this.y);if(this.moved){this.scrollTo(e,o);var a=e-this.absStartX,l=o-this.absStartY;this.directionX=a>0?-1:0>a?1:0,this.directionY=l>0?-1:0>l?1:0,this.endTime=c();var p=this.endTime-this.startTime,d=Math.abs(e-this.startX),m=Math.abs(o-this.startY);if(this._events.flick&&p<this.options.flickLimitTime&&d<this.options.flickLimitDistance&&m<this.options.flickLimitDistance)this.trigger("flick");else{var g=0;if(this.options.momentum&&p<this.options.momentumLimitTime&&(m>this.options.momentumLimitDistance||d>this.options.momentumLimitDistance)){var f=this.hasHorizontalScroll?u(this.x,this.startX,p,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options):{destination:e,duration:0},v=this.hasVerticalScroll?u(this.y,this.startY,p,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options):{destination:o,duration:0};e=f.destination,o=v.destination,g=Math.max(f.duration,v.duration),this.isInTransition=!0}else this.options.wheel&&(o=Math.round(o/this.itemHeight)*this.itemHeight,g=this.options.wheel.adjustTime||400);var y=D.swipe;if(this.options.snap){var w=this._nearestSnap(e,o);this.currentPage=w,g=this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(e-w.x),1e3),Math.min(Math.abs(o-w.y),1e3)),300),e=w.x,o=w.y,this.directionX=0,this.directionY=0,y=D.bounce}if(e!==this.x||o!==this.y)return(e>0||e<this.maxScrollX||o>0||o<this.maxScrollY)&&(y=D.swipeBounce),void this.scrollTo(e,o,g,y);this.options.wheel&&(this.selectedIndex=Math.round(Math.abs(this.y/this.itemHeight))),this.trigger("scrollEnd",{x:this.x,y:this.y})}}else{if(this.options.wheel){if(this.target&&this.target.className===this.options.wheel.wheelWrapperClass){var x=Math.abs(Math.round(o/this.itemHeight)),T=Math.round((this.pointY+s(this.target).top-this.itemHeight/2)/this.itemHeight);this.target=this.items[x+T]}this.scrollToElement(this.target,this.options.wheel.adjustTime||400,!0,!0,D.swipe)}else i||(this.options.tap&&r(t,this.options.tap),this.options.click&&h(t));this.trigger("scrollCancel")}}}},t.prototype._resize=function(){var t=this;this.enabled&&(clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling))},t.prototype._startProbe=function(){function t(){if(i.isInTransition){var e=i.getComputedPosition();i.trigger("scroll",e),i.probeTimer=H(t)}}k(this.probeTimer),this.probeTimer=H(t);var i=this},t.prototype._transitionProperty=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";this.scrollerStyle[X.transitionProperty]=t},t.prototype._transitionTime=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.scrollerStyle[X.transitionDuration]=t+"ms",this.options.wheel)for(var i=0;i<this.items.length;i++)this.items[i].style[X.transitionDuration]=t+"ms";if(this.indicators)for(var e=0;e<this.indicators.length;e++)this.indicators[e].transitionTime(t)},t.prototype._transitionTimingFunction=function(t){if(this.scrollerStyle[X.transitionTimingFunction]=t,this.options.wheel)for(var i=0;i<this.items.length;i++)this.items[i].style[X.transitionTimingFunction]=t;if(this.indicators)for(var e=0;e<this.indicators.length;e++)this.indicators[e].transitionTimingFunction(t)},t.prototype._transitionEnd=function(t){t.target===this.scroller&&this.isInTransition&&(this._transitionTime(),this.pulling||this.resetPosition(this.options.bounceTime,D.bounce)||(this.isInTransition=!1,this.trigger("scrollEnd",{x:this.x,y:this.y})))},t.prototype._translate=function(t,i){if(this.options.useTransform?this.scrollerStyle[X.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=Math.round(t),i=Math.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.options.wheel)for(var e=this.options.wheel.rotate,s=void 0===e?25:e,o=0;o<this.items.length;o++){var n=s*(i/this.itemHeight+o);this.items[o].style[X.transform]="rotateX("+n+"deg)"}if(this.x=t,this.y=i,this.indicators)for(var r=0;r<this.indicators.length;r++)this.indicators[r].updatePosition()},t.prototype._animate=function(t,i,e,s){function o(){var p=c();if(p>=l)return n.isAnimating=!1,n._translate(t,i),void(n.pulling||n.resetPosition(n.options.bounceTime)||n.trigger("scrollEnd",{x:n.x,y:n.y}));var u=s(p=(p-a)/e),d=(t-r)*u+r,m=(i-h)*u+h;n._translate(d,m),n.isAnimating&&(n.animateTimer=H(o)),3===n.options.probeType&&n.trigger("scroll",{x:n.x,y:n.y})}var n=this,r=this.x,h=this.y,a=c(),l=a+e;this.isAnimating=!0,k(this.animateTimer),o()},t.prototype.scrollBy=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:D.bounce;t=this.x+t,i=this.y+i,this.scrollTo(t,i,e,s)},t.prototype.scrollTo=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:D.bounce;this.isInTransition=this.options.useTransition&&e>0&&(t!==this.x||i!==this.y),!e||this.options.useTransition?(this._transitionProperty(),this._transitionTimingFunction(s.style),this._transitionTime(e),this._translate(t,i),e&&3===this.options.probeType&&this._startProbe(),this.options.wheel&&(this.selectedIndex=i>0?0:i<this.maxScrollY?this.items.length-1:Math.round(Math.abs(i/this.itemHeight)))):this._animate(t,i,e,s.fn)},t.prototype.scrollToElement=function(t,i,e,o,n){if(t&&(t=t.nodeType?t:this.scroller.querySelector(t),!this.options.wheel||t.className===this.options.wheel.wheelItemClass)){var r=s(t);r.left-=this.wrapperOffset.left,r.top-=this.wrapperOffset.top,!0===e&&(e=Math.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===o&&(o=Math.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),r.left-=e||0,r.top-=o||0,r.left=r.left>0?0:r.left<this.maxScrollX?this.maxScrollX:r.left,r.top=r.top>0?0:r.top<this.maxScrollY?this.maxScrollY:r.top,this.options.wheel&&(r.top=Math.round(r.top/this.itemHeight)*this.itemHeight),this.scrollTo(r.left,r.top,i,n)}},t.prototype.resetPosition=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:D.bounce,e=this.x;!this.hasHorizontalScroll||e>0?e=0:e<this.maxScrollX&&(e=this.maxScrollX);var s=this.y;return!this.hasVerticalScroll||s>0?s=0:s<this.maxScrollY&&(s=this.maxScrollY),(e!==this.x||s!==this.y)&&(this.scrollTo(e,s,t,i),!0)},t.prototype.getComputedPosition=function(){var t=window.getComputedStyle(this.scroller,null),i=void 0,e=void 0;return this.options.useTransform?(i=+((t=t[X.transform].split(")")[0].split(", "))[12]||t[4]),e=+(t[13]||t[5])):(i=+t.left.replace(/[^-\d.]/g,""),e=+t.top.replace(/[^-\d.]/g,"")),{x:i,y:e}},t.prototype.stop=function(){if(this.options.useTransition&&this.isInTransition){this.isInTransition=!1;var t=this.getComputedPosition();this._translate(t.x,t.y),this.options.wheel?this.target=this.items[Math.round(-t.y/this.itemHeight)]:this.trigger("scrollEnd",{x:this.x,y:this.y}),this.stopFromTransition=!0}else!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this.trigger("scrollEnd",{x:this.x,y:this.y}),this.stopFromTransition=!0)},t.prototype.destroy=function(){this._removeDOMEvents(),this._events={},this.options.scrollbar&&this._removeScrollBars(),this.destroyed=!0,this.trigger("destroy")}}(f),function(t){t.prototype.on=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;this._events[t]||(this._events[t]=[]),this._events[t].push([i,e])},t.prototype.once=function(t,i){function e(){this.off(t,e),o||(o=!0,i.apply(s,arguments))}var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this,o=!1;e.fn=i,this.on(t,e)},t.prototype.off=function(t,i){var e=this._events[t];if(e)for(var s=e.length;s--;)(e[s][0]===i||e[s][0]&&e[s][0].fn===i)&&(e[s][0]=void 0)},t.prototype.trigger=function(t){var i=this._events[t];if(i)for(var e=i.length,s=[].concat(y(i)),o=0;e>o;o++){var n=s[o],r=v(n,2),h=r[0],a=r[1];h&&h.apply(a,[].slice.call(arguments,1))}}}(f),function(t){t.prototype._initSnap=function(){var t=this;this.currentPage={};var i=this.options.snap;if(i.loop){var e=this.scroller.children;e.length>0&&(a(e[e.length-1].cloneNode(!0),this.scroller),this.scroller.appendChild(e[1].cloneNode(!0)))}var s=i.el;"string"==typeof s&&(s=this.scroller.querySelectorAll(s)),this.on("refresh",function(){if(t.pages=[],t.wrapperWidth&&t.wrapperHeight&&t.scrollerWidth&&t.scrollerHeight){var e=i.stepX||t.wrapperWidth,n=i.stepY||t.wrapperHeight,r=0,h=void 0,a=void 0,l=void 0,c=0,p=void 0,u=0,d=void 0,m=void 0;if(s)for(p=s.length,d=-1;p>c;c++)m=o(s[c]),(0===c||m.left<=o(s[c-1]).left)&&(u=0,d++),t.pages[u]||(t.pages[u]=[]),r=Math.max(-m.left,t.maxScrollX),h=Math.max(-m.top,t.maxScrollY),a=r-Math.round(m.width/2),l=h-Math.round(m.height/2),t.pages[u][d]={x:r,y:h,width:m.width,height:m.height,cx:a,cy:l},r>t.maxScrollX&&u++;else for(a=Math.round(e/2),l=Math.round(n/2);r>-t.scrollerWidth;){for(t.pages[c]=[],p=0,h=0;h>-t.scrollerHeight;)t.pages[c][p]={x:Math.max(r,t.maxScrollX),y:Math.max(h,t.maxScrollY),width:e,height:n,cx:r-a,cy:h-l},h-=n,p++;r-=e,c++}var g=i.loop?1:0;t.goToPage(t.currentPage.pageX||g,t.currentPage.pageY||0,0);var f=i.threshold;f%1==0?(t.snapThresholdX=f,t.snapThresholdY=f):(t.snapThresholdX=Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].width*f),t.snapThresholdY=Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].height*f))}}),this.on("scrollEnd",function(){i.loop&&(0===t.currentPage.pageX&&t.goToPage(t.pages.length-2,t.currentPage.pageY,0),t.currentPage.pageX===t.pages.length-1&&t.goToPage(1,t.currentPage.pageY,0))}),!1!==i.listenFlick&&this.on("flick",function(){var e=i.speed||Math.max(Math.max(Math.min(Math.abs(t.x-t.startX),1e3),Math.min(Math.abs(t.y-t.startY),1e3)),300);t.goToPage(t.currentPage.pageX+t.directionX,t.currentPage.pageY+t.directionY,e)})},t.prototype._nearestSnap=function(t,i){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var e=0;if(Math.abs(t-this.absStartX)<=this.snapThresholdX&&Math.abs(i-this.absStartY)<=this.snapThresholdY)return this.currentPage;t>0?t=0:t<this.maxScrollX&&(t=this.maxScrollX),i>0?i=0:i<this.maxScrollY&&(i=this.maxScrollY);for(var s=this.pages.length;s>e;e++)if(t>=this.pages[e][0].cx){t=this.pages[e][0].x;break}s=this.pages[e].length;for(var o=0;s>o;o++)if(i>=this.pages[0][o].cy){i=this.pages[0][o].y;break}return e===this.currentPage.pageX&&((e+=this.directionX)<0?e=0:e>=this.pages.length&&(e=this.pages.length-1),t=this.pages[e][0].x),o===this.currentPage.pageY&&((o+=this.directionY)<0?o=0:o>=this.pages[0].length&&(o=this.pages[0].length-1),i=this.pages[0][o].y),{x:t,y:i,pageX:e,pageY:o}},t.prototype.goToPage=function(t,i,e){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:D.bounce,o=this.options.snap;t>=this.pages.length?t=this.pages.length-1:0>t&&(t=0),i>=this.pages[t].length?i=this.pages[t].length-1:0>i&&(i=0);var n=this.pages[t][i].x,r=this.pages[t][i].y;e=void 0===e?o.speed||Math.max(Math.max(Math.min(Math.abs(n-this.x),1e3),Math.min(Math.abs(r-this.y),1e3)),300):e,this.currentPage={x:n,y:r,pageX:t,pageY:i},this.scrollTo(n,r,e,s)},t.prototype.next=function(t,i){var e=this.currentPage.pageX,s=this.currentPage.pageY;++e>=this.pages.length&&this.hasVerticalScroll&&(e=0,s++),this.goToPage(e,s,t,i)},t.prototype.prev=function(t,i){var e=this.currentPage.pageX,s=this.currentPage.pageY;--e<0&&this.hasVerticalScroll&&(e=0,s--),this.goToPage(e,s,t,i)},t.prototype.getCurrentPage=function(){return this.options.snap&&this.currentPage}}(f),function(t){t.prototype.wheelTo=function(t){this.options.wheel&&(this.y=-t*this.itemHeight,this.scrollTo(0,this.y))},t.prototype.getSelectedIndex=function(){return this.options.wheel&&this.selectedIndex},t.prototype._initWheel=function(){var t=this.options.wheel;t.wheelWrapperClass||(t.wheelWrapperClass="wheel-scroll"),t.wheelItemClass||(t.wheelItemClass="wheel-item"),void 0===t.selectedIndex&&(t.selectedIndex=0,d("wheel option selectedIndex is required!"))}}(f),function(t){t.prototype._initScrollbar=function(){var t=this,i=this.options.scrollbar.fade,e=void 0===i||i;this.indicators=[];var s=void 0;this.options.scrollX&&(s={el:m("horizontal"),direction:"horizontal",fade:e},this._insertScrollBar(s.el),this.indicators.push(new g(this,s))),this.options.scrollY&&(s={el:m("vertical"),direction:"vertical",fade:e},this._insertScrollBar(s.el),this.indicators.push(new g(this,s))),this.on("refresh",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].refresh()}),e&&(this.on("scrollEnd",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade()}),this.on("scrollCancel",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade()}),this.on("scrollStart",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade(!0)}),this.on("beforeScrollStart",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade(!0,!0)}))},t.prototype._insertScrollBar=function(t){this.wrapper.appendChild(t)},t.prototype._removeScrollBars=function(){for(var t=0;t<this.indicators.length;t++)this.indicators[t].remove()}}(f),function(t){t.prototype._initPullDown=function(){this.options.probeType=3},t.prototype._checkPullDown=function(){var t=this.options.pullDownRefresh,i=t.threshold,e=void 0===i?90:i,s=t.stop,o=void 0===s?40:s;return this.y>e&&(this.pulling||(this.pulling=!0,this.trigger("pullingDown")),this.scrollTo(this.x,o,this.options.bounceTime,D.bounce)),this.pulling},t.prototype.finishPullDown=function(){this.pulling=!1,this.resetPosition(this.options.bounceTime,D.bounce)}}(f),function(t){t.prototype._initPullUp=function(){this.options.probeType=3,this.pullupWatching=!1,this._watchPullUp()},t.prototype._watchPullUp=function(){function t(i){1===this.movingDirectionY&&i.y<=this.maxScrollY+e&&(this.trigger("pullingUp"),this.pullupWatching=!1,this.off("scroll",t))}if(!this.pullupWatching){this.pullupWatching=!0;var i=this.options.pullUpLoad.threshold,e=void 0===i?0:i;this.on("scroll",t)}},t.prototype.finishPullUp=function(){var t=this;this.isInTransition?this.once("scrollEnd",function(){t._watchPullUp()}):this._watchPullUp()}}(f),f.Version="1.4.2",f});