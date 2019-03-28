(window.webpackJsonp=window.webpackJsonp||[]).push([["Foods.eventLoop"],{"5qkb":function(s,t,a){(s.exports=a("I1BE")(!1)).push([s.i,"",""])},U7Mq:function(s,t,a){var n=a("5qkb");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);(0,a("SZ7m").default)("6da1b646",n,!0,{})},aTL0:function(s,t,a){"use strict";a.r(t);var n=a("JFUb"),l=Object(n.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h4",{attrs:{id:"zong-jie-ji-ge-gai-nian"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zong-jie-ji-ge-gai-nian","aria-hidden":"true"}},[s._v("¶")]),s._v(" 总结几个概念")]),s._v(" "),a("div",{staticClass:"tip"},[a("p",[s._v("浏览器是多线程的，如网络线程，编码解码线程，加密和监控线程，GUI渲染线程等等，只不过"),a("code",{pre:!0},[s._v("js引擎")]),s._v("是单线程的，所有的线程完成了页面需要监听的内容，就会回到主线程通知主线程。")])]),s._v(" "),a("div",{staticClass:"tip"},[a("p",[s._v("下面是：事件循环正在以CPU高效的速度，运行着")])]),s._v(" "),a("p",[a("video",{attrs:{controls:"controls",autoplay:"",src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop.mov"}})]),s._v(" "),a("div",{staticClass:"tip"},[a("p",[s._v("下面是：当有任务发生时，浏览器对事件循环说，我有一份任务要交给你来做，事件循环说：“好的，把他加到我的待办事项里面，我空闲的时候就会去做”")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop1.png",alt:"loop"}})]),s._v(" "),a("p",[a("strong",[s._v("比如下面这个例子：")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[s._v("setTimeout(callback1, "),a("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(")\nsetTimeout(callback2, "),a("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(")\n")])]),s._v(" "),a("div",{staticClass:"tip"},[a("p",[s._v("浏览器对事件循环说，我这里有两件事需要你做一下，在经过1000ms之后事件循环将"),a("code",{pre:!0},[s._v("callback1")]),s._v(","),a("code",{pre:!0},[s._v("callback2")]),s._v("放到代办事项里面，在主线程执行完毕绕道穿插口的时候，正好绕道待办事项，执行一次任务，继续下次任务，再次绕道穿插口，再执行一次任务")])]),s._v(" "),a("div",{staticClass:"warning"},[a("p",[s._v("这里需要注意的一点是：每次事件循环只会执行一个任务")])]),s._v(" "),a("p",[a("video",{attrs:{controls:"controls",autoplay:"",src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop1.mov"}})]),s._v(" "),a("div",{staticClass:"tip"},[a("p",[s._v("浏览器的渲染又是事件循环里面的又一条弯道了")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop2.png",alt:"loop"}})]),s._v(" "),a("p",[a("strong",[s._v("看个例子：")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[a("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".body.appendChild(el)\nel.style.display = "),a("span",{attrs:{class:"hljs-string"}},[s._v("'none'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"tip"},[a("p",[s._v("这段代码我们可能会担心元素发生闪烁，因为先拼接DOM，然后再设置元素隐藏，实际上则不会，因为渲染任务会在这段js执行完毕之后，才会进入渲染弯道，只会paint一次")])]),s._v(" "),a("p",[a("strong",[s._v("看个例子：比如说页面上有个gif图片")])]),s._v(" "),a("p",[s._v("第一种情况是这样的: 会造成gif停止")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[s._v("dom.addEventListener("),a("span",{attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v(", () => {\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("while")]),s._v(" ("),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(") {\n    ...\n  }\n})\n")])]),s._v(" "),a("p",[s._v("第二种情况是这样的: 不会造成gif停止")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[s._v("dom.addEventListener("),a("span",{attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v(", () => {\n  "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"hljs-title"}},[s._v("do")]),s._v(" ("),a("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n    setTimeout("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("do")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(")\n  }\n  setTimeout("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("do")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(")\n})\n")])]),s._v(" "),a("div",{staticClass:"tip"},[a("p",[s._v("第一种情况是，进入代办事项弯道的时候，js会一直执行造成，无法进入渲染弯道，然后gif就停止了"),a("br"),s._v("\n第二种情况是，进入代办事项弯道的时候，执行一次do事件，在转到主弯道的时候，渲染任务对事件循环说，我需要进行一次渲染，这个时候，事件循环进入渲染弯道渲染，然后又进入待办事件弯道，每一次都只会执行一个代办事项，就这样循环着")])]),s._v(" "),a("p",[a("video",{attrs:{controls:"controls",autoplay:"",src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/loop3.mov"}})]),s._v(" "),a("div",{staticClass:"tip"},[a("p",[s._v("也说明了一点：渲染可以在任务之间发生，但是并不是说一定会在两次任务之间就会发生一次渲染，浏览器尽可能的尝试高效的渲染，也许在两次三次任务之后渲染，比如当前选项卡切换了，即使发生样式变化也不会渲染，因为渲染没有任何意义，而且只有在样式发生改变的时候，才会触发渲染，又比如在60HZ的显示器上面，即使一秒钟触发1000次样式修改，浏览器也最多也只会渲染60次，因为渲染1000次没有任何意义，用户也看不到。")])]),s._v(" "),a("p",[s._v("看到17分钟的位置")]),s._v(" "),a("h3",{attrs:{id:"can-kao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-kao","aria-hidden":"true"}},[s._v("¶")]),s._v(" 参考：")]),s._v(" "),a("p",[s._v("-"),a("a",{attrs:{href:"https://www.youtube.com/watch?v=cCOL7MC4Pl0"}},[s._v("Jake Archibald: In The Loop - JSConf.Asia 2018")])])])}],!1,null,null,null);t.default=l.exports},eBRc:function(s,t,a){"use strict";a.r(t);var n=a("hjZZ"),l={name:"FoodsEventLoop",components:{md:a.n(n).a}},o=a("JFUb");var e=function(s){a("U7Mq")},v=Object(o.a)(l,function(){var s=this.$createElement,t=this._self._c||s;return t("div",[t("md")],1)},[],!1,e,"data-v-cdf422ec",null);t.default=v.exports},hjZZ:function(s,t,a){s.exports=a("aTL0")}}]);