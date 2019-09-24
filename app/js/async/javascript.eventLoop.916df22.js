(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"/BS9":function(s,a,t){s.exports=t("hIlk")},"6e4N":function(s,a,t){(s.exports=t("I1BE")(!1)).push([s.i,"",""])},PH0N:function(s,a,t){"use strict";t.r(a);var n=t("/BS9"),r={name:"JavascriptEventLoop",components:{md:t.n(n).a}},v=t("JFUb");var l=function(s){t("dx2L")},_=Object(v.a)(r,function(){var s=this.$createElement,a=this._self._c||s;return a("div",[a("md")],1)},[],!1,l,"data-v-ff850458",null);a.default=_.exports},dx2L:function(s,a,t){var n=t("6e4N");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);(0,t("SZ7m").default)("e2aeb0bc",n,!0,{})},hIlk:function(s,a,t){"use strict";t.r(a);var n=t("JFUb"),r=Object(n.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",{attrs:{id:"jian-shu-shi-jian-xun-huan-mo-xing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jian-shu-shi-jian-xun-huan-mo-xing","aria-hidden":"true"}},[s._v("¶")]),s._v(" 简述事件循环模型")]),s._v(" "),t("p",[s._v("主线程在执行完"),t("strong",[s._v("同步任务")]),s._v("之后，就会去检查"),t("strong",[s._v("微任务队列(microTask)")]),s._v("，如果"),t("strong",[s._v("微任务队列(mircoTask)"),t("strong",[s._v("为空，就会检查")]),s._v("宏任务(Task)")]),s._v("，如果"),t("strong",[s._v("微任务队列(microTask)"),t("strong",[s._v("不为空，就会一次性执行完队列里面所有的")]),s._v("微任务")]),s._v("。\n每次单个"),t("strong",[s._v("宏任务")]),s._v("执行完毕后，就会检查"),t("strong",[s._v("微任务队列")]),s._v("，如果队列有任务，就会执行完所有的"),t("strong",[s._v("微任务")]),s._v("。")]),s._v(" "),t("ul",[t("li",[s._v("看下第一个示例：")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-string"}},[s._v("'script start'")]),s._v(");\n\nsetTimeout("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("timeFn")]),s._v("("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-string"}},[s._v("'setTimeout'")]),s._v(");\n}, "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(");\n\n"),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".resolve().then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("fn1")]),s._v("("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-string"}},[s._v("'promise1'")]),s._v(");\n}).then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("fn2")]),s._v("("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-string"}},[s._v("'promise2'")]),s._v(");\n});\n\n"),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-string"}},[s._v("'script end'")]),s._v(");\n")])]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("同步任务执行，分配微任务，宏任务至各自的队列")])])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[s._v("微任务(microTask): fn1\n\n宏任务(Task): timeFn\n\nJS Stack: script\n\nLog: "),t("span",{attrs:{class:"hljs-string"}},[s._v("'script start'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'script end'")]),s._v("\n")])]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("strong",[s._v("主线程执行完毕，检查微任务队列，微任务队列有任务，就执行微任务队列")])])]),s._v(" "),t("p",[s._v("执行微任务队列的代码")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[s._v("微任务(microTask): fn1 fn2\n\n宏任务(Task): timeFn\n\nJS Stack: script\n\nLog: "),t("span",{attrs:{class:"hljs-string"}},[s._v("'script start'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'script end'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'promise1'")]),s._v("\n")])]),s._v(" "),t("p",[s._v("微任务fn1加入主线程开始执行，打印"),t("code",{pre:!0},[s._v("promise1")]),s._v("，返回一个新的"),t("code",{pre:!0},[s._v("Promise")]),s._v("值为"),t("code",{pre:!0},[s._v("undefined")]),s._v("，加入微任务")]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("strong",[s._v("主线程执行执行完毕，检查微任务队列是否有任务")])])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[s._v("微任务(microTask): fn2\n\n宏任务(Task): timeFn\n\nJS Stack: script\n\nLog: "),t("span",{attrs:{class:"hljs-string"}},[s._v("'script start'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'script end'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'promise1'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'promise2'")]),s._v("\n")])]),s._v(" "),t("p",[s._v("fn1执行完毕，从微任务队列移除掉，fn1作为同步任务执行完毕，检查微任务队列里面有fn2,于是将fn2加入主线程，开始执行，打印promise2，主线程执行完毕后，检查微任务队列，发现微任务没有了，就开始检查宏任务")]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("strong",[s._v("将宏任务timeFn加入主线程开始执行")])])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[s._v("微任务(microTask):\n\n宏任务(Task): timeFn\n\nJS Stack: script\n\nLog: "),t("span",{attrs:{class:"hljs-string"}},[s._v("'script start'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'script end'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'promise1'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'promise2'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'setTimeout'")]),s._v("\n")])]),s._v(" "),t("p",[s._v("移除执行完毕的fn2，加入主线程的宏任务开始执行，打印setTimeout，所有的代码执行完毕")]),s._v(" "),t("h3",{attrs:{id:"zong-jie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zong-jie","aria-hidden":"true"}},[s._v("¶")]),s._v(" 总结")]),s._v(" "),t("p",[t("code",{pre:!0},[s._v("Task")]),s._v("宏任务有：")]),s._v(" "),t("ul",[t("li",[s._v("setTimeout")]),s._v(" "),t("li",[s._v("setInterval")]),s._v(" "),t("li",[s._v("setImmediate")]),s._v(" "),t("li",[s._v("I/O")]),s._v(" "),t("li",[s._v("UI rendering")]),s._v(" "),t("li",[s._v("requestAnimationFrame")])]),s._v(" "),t("p",[t("code",{pre:!0},[s._v("microTask")]),s._v("微任务有：")]),s._v(" "),t("ul",[t("li",[s._v("process.nextTick")]),s._v(" "),t("li",[s._v("promises")]),s._v(" "),t("li",[s._v("Object.observe")]),s._v(" "),t("li",[s._v("MutationObserver")])]),s._v(" "),t("h4",{attrs:{id:"wei-ren-wu-microtask-de-qi-yuan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wei-ren-wu-microtask-de-qi-yuan","aria-hidden":"true"}},[s._v("¶")]),s._v(" 微任务("),t("code",{pre:!0},[s._v("MicroTask")]),s._v(")的起源")]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("浏览器希望为开发人员提供一种监控DOM变化的方法，但是如果发生下面的情况，你是希望想听到一次，还是100次呢")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" i = "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < "),t("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v("; i ++) {\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" span = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".createElement("),t("span",{attrs:{class:"hljs-string"}},[s._v("'span'")]),s._v(")\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".body.appendChild(span)\n}\n")])]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("答案肯定就是一次了，这里浏览器就创建了一个新的队列:微任务("),t("code",{pre:!0},[s._v("microTask")]),s._v("),他承诺你在当前js执行完毕，也就是栈空的时候就会执行所有的微任务，微任务可能发生在事件循环的任何地方，比如在"),t("code",{pre:!0},[s._v("requestAnimationFrame")]),s._v("回调里面启动一个微任务，这个微任务就会在"),t("code",{pre:!0},[s._v("requestAnimationFrame")]),s._v("回调栈空之后，渲染之前执行，也说明了如果有一个一直执行的微任务队列，那么浏览器也就会卡死")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("loop")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".resolve().then(loop)\n  loop()\n}\n")])]),s._v(" "),t("p",[t("strong",[s._v("看个例子:")])]),s._v(" "),t("p",[s._v("我们给一个"),t("code",{pre:!0},[s._v("DOM")]),s._v("绑定两个事件")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[s._v("dom.addEventListener("),t("span",{attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v(", () => {\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".resolve().then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n  })\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(")\n})\ndom.addEventListener("),t("span",{attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v(", () => {\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".resolve().then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v(")\n  })\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-number"}},[s._v("4")]),s._v(")\n})\n")])]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("当我们点击"),t("code",{pre:!0},[s._v("DOM")]),s._v("的时候，会打印2,1,4,3")])]),s._v(" "),t("p",[s._v("但是如果是"),t("code",{pre:!0},[s._v("js")]),s._v("触发的呢")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[s._v("dom.addEventListener("),t("span",{attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v(", () => {\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".resolve().then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n  })\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(")\n})\ndom.addEventListener("),t("span",{attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v(", () => {\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".resolve().then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v(")\n  })\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-number"}},[s._v("4")]),s._v(")\n})\n\ndom.click()\n")])]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("js触发的时候，就会打印2,4,1,3")])]),s._v(" "),t("p",[t("video",{attrs:{controls:"controls",autoplay:"",src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop9.mov"}})]),s._v(" "),t("div",{staticClass:"warning"},[t("p",[s._v("js调用触发的时候，两次回调没有执行完，"),t("code",{pre:!0},[s._v("dom.click()")]),s._v("这里的javascript不会从栈里面移除，导致微任务一直不能触发，最后才会触发")])]),s._v(" "),t("h3",{attrs:{id:"can-kao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#can-kao","aria-hidden":"true"}},[s._v("¶")]),s._v(" 参考")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/"}},[s._v("Tasks, microtasks, queues and schedules")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/a32ZJComEggECDb2cXl5DQ"}},[s._v("一次弄懂Event Loop")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.404forest.com/2017/07/18/how-javascript-actually-works-eventloop-and-uirendering/#7-%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[s._v("深入探究 eventloop 与浏览器渲染的时序问题")])])])}],!1,null,null,null);a.default=r.exports}}]);