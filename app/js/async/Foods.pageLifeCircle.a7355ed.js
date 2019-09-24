(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"1yQU":function(e,v,_){e.exports=_("oflK")},"3p6V":function(e,v,_){(e.exports=_("I1BE")(!1)).push([e.i,"",""])},kJcR:function(e,v,_){"use strict";_.r(v);var o=_("1yQU"),d={name:"FoodsPageLifeCircle",components:{md:_.n(o).a}},a=_("JFUb");var r=function(e){_("v/LU")},t=Object(a.a)(d,function(){var e=this.$createElement,v=this._self._c||e;return v("div",[v("md")],1)},[],!1,r,"data-v-6a5ea07c",null);v.default=t.exports},oflK:function(e,v,_){"use strict";_.r(v);var o=_("JFUb"),d=Object(o.a)(null,function(){var e=this;e.$createElement;e._self._c;return e._m(0)},[function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("section",[_("p",[e._v("HTML 页面的生命周期有三个重要事件：")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("DOMContentLoaded")]),e._v(" —— 浏览器加载 HTML，并构建 DOM 树，但像 "),_("code",{pre:!0},[e._v("<img>")]),e._v(" 和样式这样的资源可能还没有加载。")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("load")]),e._v(" —— 浏览器加载所有资源（图像，样式等）。")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("beforeunload/unload")]),e._v(" —— 当用户离开页面时。")])]),e._v(" "),_("p",[e._v("每个事件都是有用的：")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("DOMContentLoaded")]),e._v(" 事件 —— DOM 已经准备好，因此处理器可以查找 DOM 节点，并初始化接口。")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("load")]),e._v(" 事件 —— 额外资源被加载后，我们可以获取图像大小（如果在 HTML/CSS 中没有指定）等。")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("beforeunload/unload")]),e._v(" 事件 —— 用户即将离开：我们可以检查用户是否保存了修改，并在询问他是否真的要离开。")])]),e._v(" "),_("p",[e._v("我们探讨一下这些事件的细节。")]),e._v(" "),_("h2",{attrs:{id:"domcontentloaded"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#domcontentloaded","aria-hidden":"true"}},[e._v("¶")]),e._v(" "),_("a",{attrs:{href:"#domcontentloaded"}},[e._v("DOMContentLoaded")])]),e._v(" "),_("p",[_("code",{pre:!0},[e._v("DOMContentLoaded")]),e._v(" 事件发生在 "),_("code",{pre:!0},[e._v("document")]),e._v(" 对象上。")]),e._v(" "),_("p",[e._v("我们必须使用 "),_("code",{pre:!0},[e._v("addEventListener")]),e._v(" 来监听它：")]),e._v(" "),_("p",[e._v("例如：")]),e._v(" "),_("p",[e._v("在示例中， "),_("code",{pre:!0},[e._v("DOMContentLoaded")]),e._v(" 处理器在文档加载时运行，而不是等到页面被加载时运行。因此 "),_("code",{pre:!0},[e._v("alert")]),e._v(" 显示大小为零。")]),e._v(" "),_("p",[e._v("初识 "),_("code",{pre:!0},[e._v("DOMContentLoaded")]),e._v(" 事件时，觉得它比较简单。DOM 树已经准备好了 —— 这是事件。但却没有什么特别之处。")]),e._v(" "),_("p",[e._v("当浏览器开始加载 HTML 并在文本中遇到 "),_("code",{pre:!0},[e._v("<script>...<\/script>")]),e._v(" 时，就会停止构建 DOM。它必须立即执行脚本。因此 "),_("code",{pre:!0},[e._v("DOMContentLoaded")]),e._v(" 只有在所有此类脚本被执行后才会发生。")]),e._v(" "),_("p",[e._v("额外的脚本（带有 "),_("code",{pre:!0},[e._v("src")]),e._v("）也会促使 DOM 构建在加载和执行过程时暂停。因此 "),_("code",{pre:!0},[e._v("DOMContentLoaded")]),e._v(" 也会等待外部脚本。")]),e._v(" "),_("p",[e._v("唯一的例外是具有 "),_("code",{pre:!0},[e._v("async")]),e._v(" 和 "),_("code",{pre:!0},[e._v("defer")]),e._v(" 属性的外部脚本。它们告诉浏览器可以继续解析文档而不必等待脚本解析和执行。因此用户可以在脚本完成加载之前就看到页面，这对性能来说是有好处的。")]),e._v(" "),_("p",[e._v("外部样式不会影响 DOM，因此 "),_("code",{pre:!0},[e._v("DOMContentLoaded")]),e._v(" 无需等待它们。")]),e._v(" "),_("p",[e._v("但有一个陷阱：如果在样式之后有一个脚本，那么该脚本必须等待样式被执行：")]),e._v(" "),_("p",[e._v("原因是脚本可能希望获取如上述示例所描述的元素坐标和其他与样式相关的属性。当然，它必须等待样式被加载。")]),e._v(" "),_("p",[e._v("当 "),_("code",{pre:!0},[e._v("DOMContentLoaded")]),e._v(" 等待脚本时，它也在等待它们之前的样式。")]),e._v(" "),_("p",[e._v("Firefox、Chrome 和 Opera 都会在 "),_("code",{pre:!0},[e._v("DOMContentLoaded")]),e._v(" 中自动填写表单。")]),e._v(" "),_("p",[e._v("比如，如果页面有一个带有登录和密码的表单，并且浏览器记住了这些值，那么在 "),_("code",{pre:!0},[e._v("DOMContentLoaded")]),e._v(" 上，它就可以尝试自动填写它们（如果用户允许）。")]),e._v(" "),_("p",[e._v("因此如果 "),_("code",{pre:!0},[e._v("DOMContentLoaded")]),e._v(" 被长加载脚本延迟，那么自动填写也在等待。你可能在某些站点上（如果你使用浏览器自动填写）—— 登录/密码字段将不会立即自动填写，在页面被完全加载前会出现延迟。这实际上是延迟到 "),_("code",{pre:!0},[e._v("DOMContentLoaded")]),e._v(" 事件。")]),e._v(" "),_("p",[e._v("为外部脚本使用 "),_("code",{pre:!0},[e._v("async")]),e._v(" 和 "),_("code",{pre:!0},[e._v("defer")]),e._v(" 的一个好处是 —— 它们不会阻塞 "),_("code",{pre:!0},[e._v("DOMContentLoaded")]),e._v("，而且也不会延迟浏览器的自动填写。")]),e._v(" "),_("h2",{attrs:{id:"window-onload"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#window-onload","aria-hidden":"true"}},[e._v("¶")]),e._v(" "),_("a",{attrs:{href:"#window-onload"}},[e._v("window.onload")])]),e._v(" "),_("p",[e._v("当包括样式、图像和其他资源的页面被全部加载时， "),_("code",{pre:!0},[e._v("load")]),e._v(" 事件就会在 "),_("code",{pre:!0},[e._v("window")]),e._v(" 对象上被触发。")]),e._v(" "),_("p",[e._v("以下示例正确地显示了图像大小，因为 "),_("code",{pre:!0},[e._v("window.onload")]),e._v(" 等待了所有的图像：")]),e._v(" "),_("h2",{attrs:{id:"window-onunload"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#window-onunload","aria-hidden":"true"}},[e._v("¶")]),e._v(" "),_("a",{attrs:{href:"#windowonunload"}},[e._v("window.onunload")])]),e._v(" "),_("p",[e._v("当访问者离开页面时， "),_("code",{pre:!0},[e._v("unload")]),e._v(" 事件会在 "),_("code",{pre:!0},[e._v("window")]),e._v(" 上被触发。我们可以在那里做一些不涉及延迟的事件，比如关闭相关的弹出窗口。但我们不能取消跳转到另一个页面的事件。")]),e._v(" "),_("p",[e._v("因此我们需要使用另一个事件 —— "),_("code",{pre:!0},[e._v("onbeforeunload")]),e._v("。")]),e._v(" "),_("h2",{attrs:{id:"window-onbeforeunload"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#window-onbeforeunload","aria-hidden":"true"}},[e._v("¶")]),e._v(" "),_("a",{attrs:{href:"#windowonbeforeunload"}},[e._v("window.onbeforeunload")])]),e._v(" "),_("p",[e._v("如果访问中启动了离开页面的导航或试图关闭窗口， "),_("code",{pre:!0},[e._v("beforeunload")]),e._v(" 处理器将要求提供更多的确认。")]),e._v(" "),_("p",[e._v("它可能会返回一个带有问题的字符串。从历史上看，浏览器通常会显示它，但到目前为止，只有一些浏览器这样做。这是因为某些站长滥用了这个事件处理器，显示了误导和恶意的信息。")]),e._v(" "),_("p",[e._v("你可以通过运行这段代码，然后重新加载页面来进行尝试。")]),e._v(" "),_("p",[e._v("你也可以单击以下 "),_("code",{pre:!0},[e._v("<iframe></iframe>")]),e._v(" 中的按钮来设置处理器，然后单击链接：")]),e._v(" "),_("h2",{attrs:{id:"readystate"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#readystate","aria-hidden":"true"}},[e._v("¶")]),e._v(" "),_("a",{attrs:{href:"#readystate"}},[e._v("readyState")])]),e._v(" "),_("p",[e._v("如果在加载文档之后设置 "),_("code",{pre:!0},[e._v("DOMContentLoaded")]),e._v(" 处理器会发生什么？")]),e._v(" "),_("p",[e._v("很自然地，它从未运行过。")]),e._v(" "),_("p",[e._v("在某些情况下，我们不确定文档是否已经准备就绪，比如一个具有 "),_("code",{pre:!0},[e._v("async")]),e._v(" 属性的脚本加载并异步运行。取决于网络，它可能在文档完成之前加载和执行，或者在此之后，我们无法确定。因此，我们应该能够知道文件的当前状态。")]),e._v(" "),_("p",[_("code",{pre:!0},[e._v("document.readyState")]),e._v(" 属性为我们提供了一些关于它的信息。有三个可能的值：")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v('"loading"')]),e._v(" —— 文档正在被加载。")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v('"interactive"')]),e._v(" —— 文档被全部读取。")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v('"complete"')]),e._v(" —— 文档被全部读取，所有的资源（图像之类的）都被加载。")])]),e._v(" "),_("p",[e._v("因此我们检查 "),_("code",{pre:!0},[e._v("document.readyState")]),e._v(" 并设置一个处理器，或在代码准备就绪时立即执行它。")]),e._v(" "),_("p",[e._v("就像这样：")]),e._v(" "),_("p",[e._v("有一个 "),_("code",{pre:!0},[e._v("readystatechange")]),e._v(" 事件，当状态发生变化时触发，因此我们可以打印如下所有这些状态：")]),e._v(" "),_("p",[_("code",{pre:!0},[e._v("readystatechange")]),e._v(" 事件是跟踪文档加载状态的另一种机制，它很早就存在了。现在则很少被使用，但我们还是需要来讨论一下它的完整性。")]),e._v(" "),_("p",[_("code",{pre:!0},[e._v("readystatechange")]),e._v(" 在其他事件中的地位？")]),e._v(" "),_("p",[e._v("要查看时间，这里有一个带有 "),_("code",{pre:!0},[e._v("<iframe></iframe>")]),e._v("、 "),_("code",{pre:!0},[e._v("<img>")]),e._v(" 和记录事件的处理器：")]),e._v(" "),_("p",[e._v("典型输出：")]),e._v(" "),_("p",[e._v("方括号中的数字表示发生这种情况的大致时间。实际时间会长一些，但标记为相同数字的事件几乎是同时发生的（± 几毫秒）。")]),e._v(" "),_("ul",[_("li",[_("code",{pre:!0},[e._v("document.readyState")]),e._v(" 在 "),_("code",{pre:!0},[e._v("DOMContentLoaded")]),e._v(" 之前会立即变成了 "),_("code",{pre:!0},[e._v("interactive")]),e._v("。这两个事件的意义没有任何差别。")]),e._v(" "),_("li",[e._v("当所有资源（ "),_("code",{pre:!0},[e._v("iframe")]),e._v(" 和 "),_("code",{pre:!0},[e._v("img")]),e._v("）都被加载后， "),_("code",{pre:!0},[e._v("document.readyState")]),e._v(" 变成了 "),_("code",{pre:!0},[e._v("complete")]),e._v("。这里我们可以发现，它大约发生在 "),_("code",{pre:!0},[e._v("img.onload")]),e._v(" ("),_("code",{pre:!0},[e._v("img")]),e._v(" 是最后的资源) 和 "),_("code",{pre:!0},[e._v("window.onload")]),e._v(" 之间。转换到 "),_("code",{pre:!0},[e._v("complete")]),e._v(" 状态的意义与 "),_("code",{pre:!0},[e._v("window.onload")]),e._v(" 一致。区别在于 "),_("code",{pre:!0},[e._v("window.onload")]),e._v(" 在所有其他 "),_("code",{pre:!0},[e._v("load")]),e._v(" 处理器之后一直有效。")])]),e._v(" "),_("p",[e._v("页面生命周期事件：")]),e._v(" "),_("ul",[_("li",[e._v("当 DOM 准备就绪时， "),_("code",{pre:!0},[e._v("DOMContentLoaded")]),e._v(" 事件就会在 "),_("code",{pre:!0},[e._v("document")]),e._v(" 上触发。在这个阶段，我们可以将 JavaScript 应用于元素。\n"),_("ul",[_("li",[e._v("除了 "),_("code",{pre:!0},[e._v("async")]),e._v(" 或 "),_("code",{pre:!0},[e._v("defer")]),e._v(" 的脚本外，所有的脚本都会被执行。")]),e._v(" "),_("li",[e._v("图像和其他资源仍然可以继续被加载。")])])]),e._v(" "),_("li",[e._v("当页面和所有资源被加载时， "),_("code",{pre:!0},[e._v("load")]),e._v(" 事件会在 "),_("code",{pre:!0},[e._v("window")]),e._v(" 上被触发。我们很少使用它，因为通常没有必要去等待那么久。")]),e._v(" "),_("li",[e._v("当用户想要离开页面时， "),_("code",{pre:!0},[e._v("beforeunload")]),e._v(" 事件会在 "),_("code",{pre:!0},[e._v("window")]),e._v(" 上被触发。如果他返回一个字符串，那么浏览器就会以问题的形式向用户确认是否真的要离开。")]),e._v(" "),_("li",[e._v("当用户最终离开时， "),_("code",{pre:!0},[e._v("unload")]),e._v(" 事件会在 "),_("code",{pre:!0},[e._v("window")]),e._v(" 上被触发，在处理器中，我们只能做一些简单的事情，不会涉及到延迟或询问用户。正是由于这个限制，它很少被使用。")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("document.readyState")]),e._v(" 是文档的当前状态，可以在 "),_("code",{pre:!0},[e._v("readystatechange")]),e._v(" 事件中跟踪变更：\n"),_("ul",[_("li",[_("code",{pre:!0},[e._v("loading")]),e._v(" —— 文档正在被加载。")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("interactive")]),e._v(" —— 文档被解析，大概是与 "),_("code",{pre:!0},[e._v("DOMContentLoaded")]),e._v(" 同时发生，而不是在它之前发生。")]),e._v(" "),_("li",[_("code",{pre:!0},[e._v("complete")]),e._v(" —— 文档和资源被加载，与 "),_("code",{pre:!0},[e._v("window.onload")]),e._v(" 同时发生，而不是在它之前发生。")])])])]),e._v(" "),_("h3",{attrs:{id:"can-kao"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#can-kao","aria-hidden":"true"}},[e._v("¶")]),e._v(" 参考：")]),e._v(" "),_("ul",[_("li",[_("p",[_("a",{attrs:{href:"https://zh.javascript.info/onload-ondomcontentloaded"}},[e._v("页面生命周期：DOMContentLoaded、load、beforeunload 和 unload")])])]),e._v(" "),_("li",[_("p",[_("a",{attrs:{href:"https://github.com/AngusLius/summary-basic/issues/22"}},[e._v("浏览器、页面")])])])])])}],!1,null,null,null);v.default=d.exports},"v/LU":function(e,v,_){var o=_("3p6V");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,_("SZ7m").default)("9ec3c8ee",o,!0,{})}}]);