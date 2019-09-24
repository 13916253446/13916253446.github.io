(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{"+Qi+":function(e,t,a){"use strict";a.r(t);var r=a("JFUb"),s=Object(r.a)(null,function(){var e=this;e.$createElement;e._self._c;return e._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h4",{attrs:{id:"wei-shi-me-yao-shi-yong-preload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wei-shi-me-yao-shi-yong-preload","aria-hidden":"true"}},[e._v("¶")]),e._v(" 为什么要使用"),a("code",{pre:!0},[e._v("preload")])]),e._v(" "),a("p",[e._v("虽然现在浏览器都做了优化，在"),a("code",{pre:!0},[e._v("ParseHtml")]),e._v("开始阶段，就会开启一个下载线程，去下载所有的资源。但是在"),a("code",{pre:!0},[e._v("ParseHtml")]),e._v("的时候，如果遇到外链"),a("code",{pre:!0},[e._v("script")]),e._v("而且这个资源还没有下载完成还是会堵塞"),a("code",{pre:!0},[e._v("DOM")]),e._v("构建的，会等待资源下载完毕，并且执行完毕，才会继续构建"),a("code",{pre:!0},[e._v("DOM")]),e._v("，还有一些首屏资源隐藏在"),a("code",{pre:!0},[e._v("js")]),e._v("中，或者"),a("code",{pre:!0},[e._v("css")]),e._v("中，浏览器是无法知道的，只能延迟到下一次下载")]),e._v(" "),a("blockquote",[a("p",[e._v("preload 一个基本的用法是提前加载资源，尽管大多数基于标记语言的资源能被浏览器的预加载器（Preloader）尽早发现，但不是所有的资源都是基于标记语言的，比如一些隐藏在 CSS 和 Javascript 中的资源。当浏览器发现自己需要这些资源时已经为时已晚，所以大多数情况，这些资源的加载都会对页面渲染造成延迟。")])]),e._v(" "),a("blockquote",[a("p",[e._v("HTML 解析器在创建 DOM 时如果碰上同步脚本（synchronous script)，解析器会停止创建 DOM，转而去执行脚本。所以，如果资源的获取只发生在解析器创建 DOM时，同步脚本的介入将使网络处于空置状态，尤其是对外部脚本资源来说，当然，页面内的脚本有时也会导致延迟。")])]),e._v(" "),a("blockquote",[a("p",[e._v("预加载器（Preloader）的出现就是为了优化这个过程，预加载器通过分析浏览器对 HTML 文档的早期解析结果（这一阶段叫做“令牌化（tokenization）”），找到可能包含资源的标签（tag），并将这些资源的 URL 收集起来。令牌化阶段的输出将会送到真正的 HTML 解析器手中，而收集起来的资源 URLs 会和资源类型一起被送到读取器（fetcher）手中，读取器会根据这些资源对页面加载速度的影响进行有次序地加载。")])]),e._v(" "),a("p",[e._v("看下面这段代码的执行过程：")]),e._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":""}},[e._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <title>Document</title>\n  <link rel="stylesheet" href="./assets/index.css">\n</head>\n<body>\n  <script src="./assets/index1.js"><\/script>\n  <div>123456</div>\n  <script src="./assets/index.js"><\/script>\n</body>\n</html>\n')])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/no_preload.png",alt:"preload"}})]),e._v(" "),a("p",[e._v("可以看到"),a("code",{pre:!0},[e._v("html")]),e._v("下载完毕，在执行"),a("code",{pre:!0},[e._v("Parse HTML")]),e._v("阶段并发的发出了基于标记语言的三个资源请求("),a("code",{pre:!0},[e._v("index.css、index1.js、index.js")]),e._v(")")]),e._v(" "),a("p",[e._v("我们再看下使用"),a("code",{pre:!0},[e._v("preload")]),e._v("之后的资源加载情况：")]),e._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":""}},[e._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <title>Document</title>\n  <link rel="preload" href="./assets/index1.js" as="script">\n  <link rel="stylesheet" href="./assets/index.css">\n</head>\n<body>\n  <script src="./assets/index1.js"><\/script>\n  <div>123456</div>\n  <script src="./assets/index.js"><\/script>\n</body>\n</html>\n')])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/preload.png",alt:"preload"}})]),e._v(" "),a("p",[e._v("使用了"),a("code",{pre:!0},[e._v("preload")]),e._v("可以看到"),a("code",{pre:!0},[e._v("index1.js")]),e._v("在"),a("code",{pre:!0},[e._v("HTML")]),e._v("下载完毕，立马就发出了资源请求，而另外两个还是在"),a("code",{pre:!0},[e._v("Parse HTML")]),e._v("阶段发出的资源请求，虽然时间相差不大("),a("strong",[e._v("118.8ms，119.3ms")]),e._v(")但是对于一些小的资源请求来说，可能已经足够下载了")]),e._v(" "),a("h4",{attrs:{id:"preload-gua-yong-yu-yu-jia-zai-na-xie-zi-yuan-qing-qiu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preload-gua-yong-yu-yu-jia-zai-na-xie-zi-yuan-qing-qiu","aria-hidden":"true"}},[e._v("¶")]),e._v(" "),a("code",{pre:!0},[e._v("preload")]),e._v("适用于预加载哪些资源请求")]),e._v(" "),a("p",[e._v("并不是所有的资源请求都适合放到"),a("code",{pre:!0},[e._v("preload")]),e._v("，这样会造成不必要的资源请求，以及导致并发上限，影响首屏资源请求")]),e._v(" "),a("ol",[a("li",[e._v("首屏的需要的图片")]),e._v(" "),a("li",[e._v("首屏需要的字体("),a("strong",[e._v("非常有必要")]),e._v(")")])]),e._v(" "),a("ul",[a("li",[e._v("IE8  只要定义了font-face，就会去下载字体，不论实际有没有应用该字体。")]),e._v(" "),a("li",[e._v("Firefox, IE 9+  只有定义了font-face 并且页面有元素应用了该字体，就会去下载，不论该元素是否有文本内容。")]),e._v(" "),a("li",[e._v("Chrome, Safari  只有定义了font-face 并且页面有元素应用了该字体，并且该元素有文本内容，才会去下载字体。")]),e._v(" "),a("li",[e._v("首屏需要的资源，隐藏在"),a("code",{pre:!0},[e._v("js")]),e._v("以及"),a("code",{pre:!0},[e._v("css")]),e._v("中的资源")])]),e._v(" "),a("h4",{attrs:{id:"as"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#as","aria-hidden":"true"}},[e._v("¶")]),e._v(" "),a("code",{pre:!0},[e._v("as")])]),e._v(" "),a("p",[e._v("as 属性的作用是告诉浏览器被加载的是什么资源，可能的 as 值包括：")]),e._v(" "),a("ul",[a("li",[e._v('"script"')]),e._v(" "),a("li",[e._v('"style"')]),e._v(" "),a("li",[e._v('"image"')]),e._v(" "),a("li",[e._v('"media"')]),e._v(" "),a("li",[e._v('"document"')]),e._v(" "),a("li",[e._v('"font"\n更多请参考'),a("a",{attrs:{href:"https://fetch.spec.whatwg.org/#concept-request-destination"}},[e._v("fetch spec")])])]),e._v(" "),a("p",[e._v("忽略 as 属性，或者错误的 as 属性会使 preload 等同于 XHR 请求，浏览器不知道加载的是什么，因此会赋予此类资源非常低的加载优先级。")]),e._v(" "),a("p",[e._v("对字体的提前加载")]),e._v(" "),a("p",[e._v("web 字体是较晚才能被发现的关键资源（late-discovered critical resources）中常见的一类 。web 字体对页面文字的渲染资至关重要，但却被深埋 CSS 中，即便是预加载器有解析 CSS，也无法确定包含字体信息的选择器是否会真正应用在 DOM 节点上。理论上，这个问题可以被解决，但实际情况是没有一个浏览器解决了这个问题。而且，即便是问题得到了解决，浏览器能对字体文件做出合理的预加载，一旦有新的 css 规则覆盖了现有字体规则，前面的预加载就多余了。")]),e._v(" "),a("p",[e._v("总之，非常复杂。")]),e._v(" "),a("p",[e._v("但有了 preload 这个标准，简单的一段代码就能搞定字体的预加载。")]),e._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":""}},[e._v('<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>\n')])]),e._v(" "),a("p",[e._v("需要注意的一点是："),a("strong",[e._v("crossorigin")]),e._v(" 属性是必须的，即便是字体资源在自家服务器上，因为用户代理必须采用匿名模式来获取字体资源。")]),e._v(" "),a("p",[e._v("type 属性可以确保浏览器只获取自己支持的资源。尽管Chrome 支持 WOFF2，也是目前唯一支持 preload 的浏览器，但未来或许会有更多的浏览器支持 preload，而这些浏览器支不支持 WOFF2 就不好说了。")]),e._v(" "),a("h3",{attrs:{id:"can-kao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-kao","aria-hidden":"true"}},[e._v("¶")]),e._v(" 参考：")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/5c7e578de51d4541c11413fc?utm_medium=hao.caibaojian.com&utm_source=hao.caibaojian.com"}},[e._v("CSS @font-face性能优化")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/32561606"}},[e._v("CSS预加载Preload")])])])])}],!1,null,null,null);t.default=s.exports},C3dt:function(e,t,a){"use strict";a.r(t);var r=a("ketU"),s={name:"PerformancePreload",components:{md:a.n(r).a}},n=a("JFUb");var i=function(e){a("T4jp")},o=Object(n.a)(s,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("md")],1)},[],!1,i,"data-v-3a7d6400",null);t.default=o.exports},T4jp:function(e,t,a){var r=a("eGXe");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a("SZ7m").default)("2be2bdcf",r,!0,{})},eGXe:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,"",""])},ketU:function(e,t,a){e.exports=a("+Qi+")}}]);