(window.webpackJsonp=window.webpackJsonp||[]).push([["javascript.eventLoop"],{"/BS9":function(s,t,a){s.exports=a("hIlk")},"6e4N":function(s,t,a){(s.exports=a("I1BE")(!1)).push([s.i,"",""])},PH0N:function(s,t,a){"use strict";a.r(t);var n=a("/BS9"),r={name:"JavascriptEventLoop",components:{md:a.n(n).a}},v=a("JFUb");var l=function(s){a("dx2L")},_=Object(v.a)(r,function(){var s=this.$createElement,t=this._self._c||s;return t("div",[t("md")],1)},[],!1,l,"data-v-ff850458",null);t.default=_.exports},dx2L:function(s,t,a){var n=a("6e4N");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);(0,a("SZ7m").default)("e2aeb0bc",n,!0,{})},hIlk:function(s,t,a){"use strict";a.r(t);var n=a("JFUb"),r=Object(n.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",{attrs:{id:"jian-shu-shi-jian-xun-huan-mo-xing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jian-shu-shi-jian-xun-huan-mo-xing","aria-hidden":"true"}},[s._v("¶")]),s._v(" 简述事件循环模型")]),s._v(" "),a("p",[s._v("主线程在执行完"),a("strong",[s._v("同步任务")]),s._v("之后，就会去检查"),a("strong",[s._v("微任务队列(microTask)")]),s._v("，如果"),a("strong",[s._v("微任务队列(mircoTask)"),a("strong",[s._v("为空，就会检查")]),s._v("宏任务(Task)")]),s._v("，如果"),a("strong",[s._v("微任务队列(microTask)"),a("strong",[s._v("不为空，就会一次性执行完队列里面所有的")]),s._v("微任务")]),s._v("。\n每次单个"),a("strong",[s._v("宏任务")]),s._v("执行完毕后，就会检查"),a("strong",[s._v("微任务队列")]),s._v("，如果队列有任务，就会执行完所有的"),a("strong",[s._v("微任务")]),s._v("。")]),s._v(" "),a("ul",[a("li",[s._v("看下第一个示例：")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'script start'")]),s._v(");\n\nsetTimeout("),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"hljs-title"}},[s._v("timeFn")]),s._v("("),a("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n  "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'setTimeout'")]),s._v(");\n}, "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(");\n\n"),a("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".resolve().then("),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"hljs-title"}},[s._v("fn1")]),s._v("("),a("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n  "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'promise1'")]),s._v(");\n}).then("),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"hljs-title"}},[s._v("fn2")]),s._v("("),a("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n  "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'promise2'")]),s._v(");\n});\n\n"),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'script end'")]),s._v(");\n")])]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("同步任务执行，分配微任务，宏任务至各自的队列")])])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[s._v("微任务(microTask): fn1\n\n宏任务(Task): timeFn\n\nJS Stack: script\n\nLog: "),a("span",{attrs:{class:"hljs-string"}},[s._v("'script start'")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'script end'")]),s._v("\n")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[s._v("主线程执行完毕，检查微任务队列，微任务队列有任务，就执行微任务队列")])])]),s._v(" "),a("p",[s._v("执行微任务队列的代码")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[s._v("微任务(microTask): fn1 fn2\n\n宏任务(Task): timeFn\n\nJS Stack: script\n\nLog: "),a("span",{attrs:{class:"hljs-string"}},[s._v("'script start'")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'script end'")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'promise1'")]),s._v("\n")])]),s._v(" "),a("p",[s._v("微任务fn1加入主线程开始执行，打印"),a("code",{pre:!0},[s._v("promise1")]),s._v("，返回一个新的"),a("code",{pre:!0},[s._v("Promise")]),s._v("值为"),a("code",{pre:!0},[s._v("undefined")]),s._v("，加入微任务")]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("strong",[s._v("主线程执行执行完毕，检查微任务队列是否有任务")])])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[s._v("微任务(microTask): fn2\n\n宏任务(Task): timeFn\n\nJS Stack: script\n\nLog: "),a("span",{attrs:{class:"hljs-string"}},[s._v("'script start'")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'script end'")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'promise1'")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'promise2'")]),s._v("\n")])]),s._v(" "),a("p",[s._v("fn1执行完毕，从微任务队列移除掉，fn1作为同步任务执行完毕，检查微任务队列里面有fn2,于是将fn2加入主线程，开始执行，打印promise2，主线程执行完毕后，检查微任务队列，发现微任务没有了，就开始检查宏任务")]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("strong",[s._v("将宏任务timeFn加入主线程开始执行")])])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[s._v("微任务(microTask):\n\n宏任务(Task): timeFn\n\nJS Stack: script\n\nLog: "),a("span",{attrs:{class:"hljs-string"}},[s._v("'script start'")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'script end'")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'promise1'")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'promise2'")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'setTimeout'")]),s._v("\n")])]),s._v(" "),a("p",[s._v("移除执行完毕的fn2，加入主线程的宏任务开始执行，打印setTimeout，所有的代码执行完毕")]),s._v(" "),a("h3",{attrs:{id:"diao-shi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diao-shi","aria-hidden":"true"}},[s._v("¶")]),s._v(" 调试")]),s._v(" "),a("h3",{attrs:{id:"can-kao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-kao","aria-hidden":"true"}},[s._v("¶")]),s._v(" 参考")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/"}},[s._v("Tasks, microtasks, queues and schedules")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/a32ZJComEggECDb2cXl5DQ"}},[s._v("一次弄懂Event Loop")])])])}],!1,null,null,null);t.default=r.exports}}]);