(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"5qkb":function(s,a,t){(s.exports=t("I1BE")(!1)).push([s.i,"",""])},U7Mq:function(s,a,t){var n=t("5qkb");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);(0,t("SZ7m").default)("6da1b646",n,!0,{})},aTL0:function(s,a,t){"use strict";t.r(a);var n=t("JFUb"),l=Object(n.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h4",{attrs:{id:"zong-jie-ji-ge-gai-nian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zong-jie-ji-ge-gai-nian","aria-hidden":"true"}},[s._v("¶")]),s._v(" 总结几个概念")]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("浏览器是多线程的，如网络线程，编码解码线程，加密和监控线程，GUI渲染线程等等，只不过"),t("code",{pre:!0},[s._v("js引擎")]),s._v("是单线程的，所有的线程完成了页面需要监听的内容，就会回到主线程通知主线程。")])]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("下面是：事件循环正在以CPU高效的速度，运行着")])]),s._v(" "),t("p",[t("video",{attrs:{controls:"controls",autoplay:"",src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop.mov"}})]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("下面是：当有任务发生时，浏览器对事件循环说，我有一份任务要交给你来做，事件循环说：“好的，把他加到我的待办事项里面，我空闲的时候就会去做”")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop1.png",alt:"loop"}})]),s._v(" "),t("p",[t("strong",[s._v("比如下面这个例子：")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[s._v("setTimeout(callback1, "),t("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(")\nsetTimeout(callback2, "),t("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(")\n")])]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("浏览器对事件循环说，我这里有两件事需要你做一下，在经过1000ms之后事件循环将"),t("code",{pre:!0},[s._v("callback1")]),s._v(","),t("code",{pre:!0},[s._v("callback2")]),s._v("放到代办事项里面，在主线程执行完毕绕道穿插口的时候，正好绕道待办事项，执行一次任务，继续下次任务，再次绕道穿插口，再执行一次任务")])]),s._v(" "),t("div",{staticClass:"warning"},[t("p",[s._v("这里需要注意的一点是：每次事件循环只会执行一个任务")])]),s._v(" "),t("p",[t("video",{attrs:{controls:"controls",autoplay:"",src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop1.mov"}})]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("浏览器的渲染又是事件循环里面的又一条弯道了")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop2.png",alt:"loop"}})]),s._v(" "),t("p",[t("strong",[s._v("看个例子：")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".body.appendChild(el)\nel.style.display = "),t("span",{attrs:{class:"hljs-string"}},[s._v("'none'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("这段代码我们可能会担心元素发生闪烁，因为先拼接DOM，然后再设置元素隐藏，实际上则不会，因为渲染任务会在这段js执行完毕之后，才会进入渲染弯道，只会paint一次")])]),s._v(" "),t("p",[t("strong",[s._v("看个例子：比如说页面上有个gif图片")])]),s._v(" "),t("p",[s._v("第一种情况是这样的: 会造成gif停止")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[s._v("dom.addEventListener("),t("span",{attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v(", () => {\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("while")]),s._v(" ("),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(") {\n    ...\n  }\n})\n")])]),s._v(" "),t("p",[s._v("第二种情况是这样的: 不会造成gif停止")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[s._v("dom.addEventListener("),t("span",{attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v(", () => {\n  "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("do")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n    setTimeout("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("do")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(")\n  }\n  setTimeout("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("do")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(")\n})\n")])]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("第一种情况是，进入代办事项弯道的时候，js会一直执行造成，无法进入渲染弯道，然后gif就停止了"),t("br"),s._v("\n第二种情况是，进入代办事项弯道的时候，执行一次do事件，在转到主弯道的时候，渲染任务对事件循环说，我需要进行一次渲染，这个时候，事件循环进入渲染弯道渲染，然后又进入待办事件弯道，每一次都只会执行一个代办事项，就这样循环着")])]),s._v(" "),t("p",[t("video",{attrs:{controls:"controls",autoplay:"",src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop3.mov"}})]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("也说明了一点：渲染可以在任务之间发生，但是并不是说一定会在两次任务之间就会发生一次渲染，浏览器尽可能的尝试高效的渲染，也许在两次三次任务之后渲染，比如当前选项卡切换了，即使发生样式变化也不会渲染，因为渲染没有任何意义，而且只有在样式发生改变的时候，才会触发渲染，又比如在60HZ的显示器上面，即使一秒钟触发1000次样式修改，浏览器也最多也只会渲染60次，因为渲染1000次没有任何意义，用户也看不到。")])]),s._v(" "),t("h4",{attrs:{id:"fen-xi-yi-xia-wei-shi-me-settimeout-bu-gua-yu-zuo-dong-hua"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fen-xi-yi-xia-wei-shi-me-settimeout-bu-gua-yu-zuo-dong-hua","aria-hidden":"true"}},[s._v("¶")]),s._v(" 分析一下为什么"),t("code",{pre:!0},[s._v("setTimeout")]),s._v("不适于做动画")]),s._v(" "),t("p",[s._v("假设在60HZ的显示器上面，我们用"),t("code",{pre:!0},[s._v("setTimeout(animFrame, 1000 / 60)")]),s._v("来模拟：可能会发生下面的现象")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop4.png",alt:"loop"}})]),s._v(" "),t("div",{staticClass:"warning"},[t("p",[t("code",{pre:!0},[s._v("setTimeout")]),s._v("并不是为动画而设计的，他的表现并不准确，有可能在一帧中什么也不做，然后在下一帧中做，这对用户来说简直就是视觉冲击")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop5.png",alt:"loop"}})]),s._v(" "),t("div",{staticClass:"warning"},[t("p",[s._v("也有可能某个任务运行时间过长，最终会移动渲染步骤，因为他们都在同一个线程中运行")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop6.png",alt:"loop"}})]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("而你使用"),t("code",{pre:!0},[s._v("requestAnimationFrame")]),s._v("就会是这样的，他是为动画而设计的，会在计算样式和渲染之前，而不是像任务一样无法掌控运行的时机，任务和帧没有强制的关联关系，所以任何可能会发生在任何时候，从下面的图可以看到在每一帧中，时间分配的很合理，即使"),t("code",{pre:!0},[s._v("requestAnimationFrame")]),s._v("里面的任务过长也不会影响当前帧的时间")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop7.png",alt:"loop"}})]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("当然你无法避免任务，比如一些点击之类的任务传递给你，希望你尽快做出响应，还比如一些定时器的任务，网络请求的任务等等，你已经有动画在运行了，用"),t("code",{pre:!0},[s._v("requestAnimation")]),s._v("就会下面这样的")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop8.png",alt:"loop"}})]),s._v(" "),t("h4",{attrs:{id:"wei-ren-wu-microtask-de-qi-yuan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wei-ren-wu-microtask-de-qi-yuan","aria-hidden":"true"}},[s._v("¶")]),s._v(" 微任务("),t("code",{pre:!0},[s._v("MicroTask")]),s._v(")的起源")]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("浏览器希望为开发人员提供一种监控DOM变化的方法，但是如果发生下面的情况，你是希望想听到一次，还是100次呢")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" i = "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < "),t("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v("; i ++) {\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" span = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".createElement("),t("span",{attrs:{class:"hljs-string"}},[s._v("'span'")]),s._v(")\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".body.appendChild(span)\n}\n")])]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("答案肯定就是一次了，这里浏览器就创建了一个新的队列:微任务("),t("code",{pre:!0},[s._v("microTask")]),s._v("),他承诺你在当前js执行完毕，也就是栈空的时候就会执行所有的微任务，微任务可能发生在事件循环的任何地方，比如在"),t("code",{pre:!0},[s._v("requestAnimationFrame")]),s._v("回调里面启动一个微任务，这个微任务就会在"),t("code",{pre:!0},[s._v("requestAnimationFrame")]),s._v("回调栈空之后，渲染之前执行，也说明了如果有一个一直执行的微任务队列，那么浏览器也就会卡死")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("loop")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".resolve().then(loop)\n  loop()\n}\n")])]),s._v(" "),t("p",[t("strong",[s._v("看个例子:")])]),s._v(" "),t("p",[s._v("我们给一个"),t("code",{pre:!0},[s._v("DOM")]),s._v("绑定两个事件")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[s._v("dom.addEventListener("),t("span",{attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v(", () => {\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".resolve().then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n  })\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(")\n})\ndom.addEventListener("),t("span",{attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v(", () => {\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".resolve().then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v(")\n  })\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-number"}},[s._v("4")]),s._v(")\n})\n")])]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("当我们点击"),t("code",{pre:!0},[s._v("DOM")]),s._v("的时候，会打印2,1,4,3")])]),s._v(" "),t("p",[s._v("但是如果是"),t("code",{pre:!0},[s._v("js")]),s._v("触发的呢")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[s._v("dom.addEventListener("),t("span",{attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v(", () => {\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".resolve().then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n  })\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(")\n})\ndom.addEventListener("),t("span",{attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v(", () => {\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".resolve().then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v(")\n  })\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-number"}},[s._v("4")]),s._v(")\n})\n\ndom.click()\n")])]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("js触发的时候，就会打印2,4,1,3")])]),s._v(" "),t("p",[t("video",{attrs:{controls:"controls",autoplay:"",src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop9.mov"}})]),s._v(" "),t("div",{staticClass:"warning"},[t("p",[s._v("js调用触发的时候，两次回调没有执行完，"),t("code",{pre:!0},[s._v("dom.click()")]),s._v("这里的javascript不会从栈里面移除，导致微任务一直不能触发，最后才会触发")])]),s._v(" "),t("h4",{attrs:{id:"requestidlecallback"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requestidlecallback","aria-hidden":"true"}},[s._v("¶")]),s._v(" "),t("code",{pre:!0},[s._v("requestIdleCallback")])]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[t("code",{pre:!0},[s._v("requestIdleCallback")]),s._v("注册的回调函数，可以在当前帧渲染的时候，如果这一帧渲染还有剩余的时间，就会在这一帧的末尾执行，因此可以用这个函数捕捉一帧的最后时机")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[s._v("requestAnimationFrame("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("raf")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n  requestIdleCallback("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("fic")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n    "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(")\n  })\n})\n")])]),s._v(" "),t("h3",{attrs:{id:"can-kao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#can-kao","aria-hidden":"true"}},[s._v("¶")]),s._v(" 参考：")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.youtube.com/watch?v=cCOL7MC4Pl0"}},[s._v("Jake Archibald: In The Loop - JSConf.Asia 2018")])]),s._v(" "),t("li",[t("a",{attrs:{href:"https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/"}},[s._v("Tasks, microtasks, queues and schedules")])])])])}],!1,null,null,null);a.default=l.exports},eBRc:function(s,a,t){"use strict";t.r(a);var n=t("hjZZ"),l={name:"FoodsEventLoop",components:{md:t.n(n).a}},e=t("JFUb");var v=function(s){t("U7Mq")},r=Object(e.a)(l,function(){var s=this.$createElement,a=this._self._c||s;return a("div",[a("md")],1)},[],!1,v,"data-v-cdf422ec",null);a.default=r.exports},hjZZ:function(s,a,t){s.exports=t("aTL0")}}]);