(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"/eQ1":function(s,t,a){"use strict";a.r(t);var n=a("JFUb"),_=Object(n.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h4",{attrs:{id:"jia-zai-zi-ti-wen-jian-mo-ren-xing-wei"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jia-zai-zi-ti-wen-jian-mo-ren-xing-wei","aria-hidden":"true"}},[s._v("¶")]),s._v(" 加载字体文件默认行为")]),s._v(" "),a("p",[s._v("默认情况下，在构建渲染树之前会延迟字体请求，这可能会导致文本渲染延迟")]),s._v(" "),a("p",[s._v("字体延迟加载带有一个可能会延迟文本渲染的重要隐藏影响：浏览器必须"),a("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction"}},[s._v("构建渲染树")]),s._v("（它依赖 DOM 和 CSSOM 树），然后才能知道需要使用哪些字体资源来渲染文本。 因此，字体请求的处理将远远滞后于其他关键资源请求的处理，并且在提取资源之前，可能会阻止浏览器渲染文本。")]),s._v(" "),a("ol",[a("li",[s._v("浏览器请求 HTML 文档")]),s._v(" "),a("li",[s._v("浏览器开始解析 HTML 响应和构建 DOM")]),s._v(" "),a("li",[s._v("浏览器发现 CSS、JS 以及其他资源并分派请求")]),s._v(" "),a("li",[s._v("浏览器在收到所有 CSS 内容后构建 CSSOM，然后将其与 DOM 树合并以构建渲染树\n"),a("ul",[a("li",[s._v("在渲染树指示需要哪些字体变体在网页上渲染指定文本后，将分派字体请求")])])]),s._v(" "),a("li",[s._v("浏览器执行布局并将内容绘制到屏幕上\n"),a("ul",[a("li",[s._v("如果字体尚不可用，浏览器可能不会渲染任何文本像素")]),s._v(" "),a("li",[s._v("字体可用之后，浏览器将绘制文本像素")])])])]),s._v(" "),a("p",[s._v("网页内容的首次绘制（可在渲染树构建后不久完成）与字体资源请求之间的“竞赛”产生了“空白文本问题”，出现该问题时，浏览器会在渲染网页布局时遗漏所有文本\n。大部分浏览器在等待下载网络字体时会执行最大超时策略，超时之后将使用回退字体。 不过，各个浏览器的执行方式并不相同：")]),s._v(" "),a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("浏览器")]),s._v(" "),a("th",[s._v("超时")]),s._v(" "),a("th",[s._v("回退")]),s._v(" "),a("th",[s._v("交换")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("Chrome 35+")]),s._v(" "),a("td",[s._v("3秒")]),s._v(" "),a("td",[s._v("是")]),s._v(" "),a("td",[s._v("是")])]),s._v(" "),a("tr",[a("td",[s._v("Opera")]),s._v(" "),a("td",[s._v("3秒")]),s._v(" "),a("td",[s._v("是")]),s._v(" "),a("td",[s._v("是")])]),s._v(" "),a("tr",[a("td",[s._v("Firefox")]),s._v(" "),a("td",[s._v("3秒")]),s._v(" "),a("td",[s._v("是")]),s._v(" "),a("td",[s._v("是")])]),s._v(" "),a("tr",[a("td",[s._v("Internet Explorer")]),s._v(" "),a("td",[s._v("0秒")]),s._v(" "),a("td",[s._v("是")]),s._v(" "),a("td",[s._v("是")])]),s._v(" "),a("tr",[a("td",[s._v("Safari")]),s._v(" "),a("td",[s._v("无超时")]),s._v(" "),a("td",[s._v("不适用")]),s._v(" "),a("td",[s._v("不适用")])])])]),s._v(" "),a("ul",[a("li",[s._v("Chrome 和 Firefox 的超时时间为 3 秒，在此之后，将会以回退字体来显示文本。 如果成功下载字体，那么最终会发生交换，并以期望的字体重新渲染文本。")]),s._v(" "),a("li",[s._v("Internet Explorer 的超时时间为零秒，这表示文本得以立即渲染。 如果所请求的字体尚不可用，那么将使用回退字体，之后在所请求的字体可用时将重新渲染该文本。")]),s._v(" "),a("li",[s._v("Safari 没有超时行为（或者至少并无超出网络超时基线的行为）")])]),s._v(" "),a("h4",{attrs:{id:"zen-me-you-hua"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zen-me-you-hua","aria-hidden":"true"}},[s._v("¶")]),s._v(" 怎么优化")]),s._v(" "),a("p",[s._v("也就说怎么自定义这种默认行为")]),s._v(" "),a("h5",{attrs:{id:"1-yu-jia-zai-wang-ye-zi-ti-zi-yuan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#1-yu-jia-zai-wang-ye-zi-ti-zi-yuan","aria-hidden":"true"}},[s._v("¶")]),s._v(" 1. 预加载网页字体资源")]),s._v(" "),a("p",[s._v("您的页面很有可能需要您事先在知道的网址上托管特定的网页字体，如果确实如此，您可利用新的网络平台功能："),a("code",{pre:!0},[s._v('<link rel="preload">')])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-HTML"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("head")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- Other tags... --\x3e")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("link")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rel")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"preload"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"/fonts/awesome-l.woff2"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("as")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"font"')]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("head")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-css"}},[s._v("__"),a("span",{attrs:{class:"hljs-selector-tag"}},[s._v("at__font-face")]),s._v(" {\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("font-family")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Awesome Font'")]),s._v(";\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("font-style")]),s._v(": normal;\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("font-weight")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("400")]),s._v(";\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("src")]),s._v(": "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("local")]),s._v("("),a("span",{attrs:{class:"hljs-string"}},[s._v("'Awesome Font'")]),s._v("),\n       "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("url")]),s._v("("),a("span",{attrs:{class:"hljs-string"}},[s._v("'/fonts/awesome-l.woff2'")]),s._v(") "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("format")]),s._v("("),a("span",{attrs:{class:"hljs-string"}},[s._v("'woff2'")]),s._v("), "),a("span",{attrs:{class:"hljs-comment"}},[s._v("/* will be preloaded */")]),s._v("\n       "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("url")]),s._v("("),a("span",{attrs:{class:"hljs-string"}},[s._v("'/fonts/awesome-l.woff'")]),s._v(") "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("format")]),s._v("("),a("span",{attrs:{class:"hljs-string"}},[s._v("'woff'")]),s._v("),\n       "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("url")]),s._v("("),a("span",{attrs:{class:"hljs-string"}},[s._v("'/fonts/awesome-l.ttf'")]),s._v(") "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("format")]),s._v("("),a("span",{attrs:{class:"hljs-string"}},[s._v("'truetype'")]),s._v("),\n       "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("url")]),s._v("("),a("span",{attrs:{class:"hljs-string"}},[s._v("'/fonts/awesome-l.eot'")]),s._v(") "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("format")]),s._v("("),a("span",{attrs:{class:"hljs-string"}},[s._v("'embedded-opentype'")]),s._v(");\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("unicode-range")]),s._v(":U+"),a("span",{attrs:{class:"hljs-number"}},[s._v("000")]),s._v("-"),a("span",{attrs:{class:"hljs-number"}},[s._v("5")]),s._v("FF; "),a("span",{attrs:{class:"hljs-comment"}},[s._v("/* Latin glyphs */")]),s._v("\n}\n")])]),s._v(" "),a("p",[s._v("然预加载可以增加网络字体在页面内容渲染时可用的可能性，但并不保证一定如此(因为下载成功有可能在构建渲染树之后)。 您仍需要考虑所渲染的文本使用了尚未可用的 font-family 时浏览器的行为。")]),s._v(" "),a("p",[s._v("为确保之后的一致性，CSS 工作组已提议采用新的 @font-face 描述符 "),a("a",{attrs:{href:"https://drafts.csswg.org/css-fonts-4/#font-display-desc"}},[s._v("font-display")]),s._v("，以及用于控制可下载字体在加载前如何渲染的相应属性。")]),s._v(" "),a("h5",{attrs:{id:"2-zi-ding-yi-xian-shi-shi-jian-xian"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#2-zi-ding-yi-xian-shi-shi-jian-xian","aria-hidden":"true"}},[s._v("¶")]),s._v(" 2. 自定义显示时间线")]),s._v(" "),a("p",[s._v("与某些浏览器目前实施的现有字体超时行为相似，font-display 将字体下载生命周期分为三个主要期间：")]),s._v(" "),a("ol",[a("li",[s._v("第一个期间为"),a("strong",[s._v("字体阻止期")]),s._v("。 在此期间，如果字体未加载，则任何尝试使用字体的元素都必须改用不可见的回退字体来渲染。 如果字体在阻止期成功加载，则正常使用字体")]),s._v(" "),a("li",[s._v("字体阻止期过后便是"),a("strong",[s._v("字体交换期")]),s._v("。 在此期间，如果字体未加载，则任何尝试使用字体的元素都必须改用回退字体来渲染。 如果字体在交换期成功加载，则正常使用字体")]),s._v(" "),a("li",[s._v("字体交换期之后便是"),a("strong",[s._v("字体失败期")]),s._v("。 如果字体在此期间开始时尚未加载，则会将字体标记为加载失败，从而导致正常字体回退。 否则，正常使用字体")])]),s._v(" "),a("p",[s._v("了解这些期间后，您即可使用 font-display，根据是否或何时下载字体，决定渲染字体的方式")]),s._v(" "),a("p",[a("strong",[s._v("使用 font-display")])]),s._v(" "),a("p",[s._v("若要使用 font-display 属性，则为其添加 @font-face 规则：")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-css"}},[s._v("__"),a("span",{attrs:{class:"hljs-selector-tag"}},[s._v("at__font-face")]),s._v(" {\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("font-family")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'Awesome Font'")]),s._v(";\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("font-style")]),s._v(": normal;\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("font-weight")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("400")]),s._v(";\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("font-display")]),s._v(": auto; "),a("span",{attrs:{class:"hljs-comment"}},[s._v("/* or block, swap, fallback, optional */")]),s._v("\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("src")]),s._v(": "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("local")]),s._v("("),a("span",{attrs:{class:"hljs-string"}},[s._v("'Awesome Font'")]),s._v("),\n       "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("url")]),s._v("("),a("span",{attrs:{class:"hljs-string"}},[s._v("'/fonts/awesome-l.woff2'")]),s._v(") "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("format")]),s._v("("),a("span",{attrs:{class:"hljs-string"}},[s._v("'woff2'")]),s._v("), "),a("span",{attrs:{class:"hljs-comment"}},[s._v("/* will be preloaded */")]),s._v("\n       "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("url")]),s._v("("),a("span",{attrs:{class:"hljs-string"}},[s._v("'/fonts/awesome-l.woff'")]),s._v(") "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("format")]),s._v("("),a("span",{attrs:{class:"hljs-string"}},[s._v("'woff'")]),s._v("),\n       "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("url")]),s._v("("),a("span",{attrs:{class:"hljs-string"}},[s._v("'/fonts/awesome-l.ttf'")]),s._v(") "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("format")]),s._v("("),a("span",{attrs:{class:"hljs-string"}},[s._v("'truetype'")]),s._v("),\n       "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("url")]),s._v("("),a("span",{attrs:{class:"hljs-string"}},[s._v("'/fonts/awesome-l.eot'")]),s._v(") "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("format")]),s._v("("),a("span",{attrs:{class:"hljs-string"}},[s._v("'embedded-opentype'")]),s._v(");\n  "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("unicode-range")]),s._v(":U+"),a("span",{attrs:{class:"hljs-number"}},[s._v("000")]),s._v("-"),a("span",{attrs:{class:"hljs-number"}},[s._v("5")]),s._v("FF; "),a("span",{attrs:{class:"hljs-comment"}},[s._v("/* Latin glyphs */")]),s._v("\n}\n")])]),s._v(" "),a("p",[s._v("font-display 当前支持以下范围的值： "),a("code",{pre:!0},[s._v("auto")]),s._v(" | "),a("code",{pre:!0},[s._v("block")]),s._v(" | "),a("code",{pre:!0},[s._v("swap")]),s._v(" | "),a("code",{pre:!0},[s._v("fallback")]),s._v(" | "),a("code",{pre:!0},[s._v("optional")]),s._v("。")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("auto")]),s._v(" 使用 user-agent 所用的字体显示策略。 大部分浏览器当前使用类似于 block 的默认策略。")]),s._v(" "),a("li",[a("strong",[s._v("block")]),s._v(" 为字体指定较短的阻止期（在大部分情况下，建议值为 3 秒）以及无限的交换期。 换言之，字体未加载时，浏览器首先绘制“不可见”的文本，但在字体加载后立即交换字体")])]),s._v(" "),a("p",[s._v("为此，浏览器将创建指标与所选字体相似的匿名字体，但所有字形皆不含“墨水”。")]),s._v(" "),a("p",[s._v("只有在必须以特定字样渲染文本以使页面可用时，才应使用此值。")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("swap")]),s._v("为字体指定零秒的阻止期，以及无限的交换期。 这意味着字体未加载时，浏览器会立即以回退字体来绘制文本，但在字体加载后立即交换字体。 与 block 相似，仅当以特定字体渲染文本对于页面来说十分重要，但以任何字体渲染都可呈现正确的消息时，才应使用此值。 徽标文本非常适合于交换，因为使用合理的回退字体显示公司名称即可传达消息，但您最终会使用正式的字样")]),s._v(" "),a("li",[a("strong",[s._v("fallback")]),s._v("为字体指定极短的阻止期（在大部分情况下，建议值为 100 毫秒或更短）以及较短的交换期（在大部分情况下，建议值为 3 秒）。 换言之，字体未加载时，首先使用回退字体来渲染字体，但在字体加载后立即交换字体。 但是，如果经过的时间过长，则在页面剩余的生命周期中将使用回退字体。 fallback 非常适合于正文等内容，对于这些内容，您希望用户尽快开始阅读，不想让新字体载入时发生的文本移动干扰其体验")]),s._v(" "),a("li",[a("strong",[s._v("optional")]),s._v("为字体指定极短的阻止期（在大部分情况下，建议值为 100 毫秒或更短）以及零秒的交换期。 与 fallback 相似，此值非常适合在下载的字体可以“锦上添花”， 但对于用户体验并非至关重要时使用。 optional 值让浏览器决定是否启动字体下载，而浏览器会从用户的角度出发，选择最适合的方案，即可能选择不下载，或以低优先级执行下载。 当用户的网络连接较差以及下载字体并非利用资源的最佳方式时，可以使用此方法")])]),s._v(" "),a("p",[s._v("font-display 在许多现代浏览器中"),a("a",{attrs:{href:"https://caniuse.com/#feat=css-font-rendering-controls"}},[s._v("获得采用")]),s._v("。 随着这种属性的实施范围越来越广，浏览器采取一致行为指日可待")]),s._v(" "),a("h5",{attrs:{id:"3-shi-yong-font-loading-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#3-shi-yong-font-loading-api","aria-hidden":"true"}},[s._v("¶")]),s._v(" 3. 使用"),a("code",{pre:!0},[s._v("Font Loading API")])]),s._v(" "),a("p",[s._v("开发者可以将 "),a("code",{pre:!0},[s._v('<link rel="preload">')]),s._v(" 与 font-display 配合使用，以很好地控制字体加载与渲染，而不会增加很多开销。 但是，如果您需要进一步自定义，而且愿意承担运行 JavaScript 所引入的开销，还有一个选项可供选择。")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.w3.org/TR/css-font-loading/"}},[s._v("Font Loading API")]),s._v(" 提供一种脚本编程接口来定义和操纵 CSS 字体，追踪其下载进度，以及替换其默认延迟下载行为。 例如，如果您确定需要特定字体变体，您可以对其进行定义并指示浏览器立即提取字体资源：")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" font = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" FontFace("),a("span",{attrs:{class:"hljs-string"}},[s._v('"Awesome Font"')]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v('"url(/fonts/awesome.woff2)"')]),s._v(", {\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'normal'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("unicodeRange")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'U+000-5FF'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("weight")]),s._v(":"),a("span",{attrs:{class:"hljs-string"}},[s._v("'400'")]),s._v("\n})\n\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 可以不用等待渲染树构建，立马去获取字体")]),s._v("\nfont.load().then("),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 应用字体，可能会导致回流")]),s._v("\n  "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".fonts.add(font);\n  "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".body.style.fontFamily = "),a("span",{attrs:{class:"hljs-string"}},[s._v('"Awesome Font, serif"')]),s._v(";\n\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 默认情况下，设置字体元素是隐藏的")]),s._v("\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 下载完毕后设置元素显示")]),s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" content = "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementById("),a("span",{attrs:{class:"hljs-string"}},[s._v('"content"')]),s._v(");\n  content.style.visibility = "),a("span",{attrs:{class:"hljs-string"}},[s._v('"visible"')]),s._v(";\n})\n")])]),s._v(" "),a("p",[s._v("此外，由于您可以检查字体状态（通过 "),a("a",{attrs:{href:"https://www.w3.org/TR/css-font-loading/#font-face-set-check"}},[s._v("check()")]),s._v(" 方法）并追踪其下载进度，因此您还可以为在网页上渲染文本定义自定义策略：")]),s._v(" "),a("ul",[a("li",[s._v("您可以在获得字体前暂停所有文本渲染。")]),s._v(" "),a("li",[s._v("您可以为每种字体执行自定义超时策略。")]),s._v(" "),a("li",[s._v("您可以利用回退字体解除渲染阻止，并在获得字体后注入使用所需字体的新样式。")])]),s._v(" "),a("p",[s._v("最重要的是，您还可以混用和匹配上述策略来适应网页上的不同内容。 例如，在获得字体前延迟某些部分的文本渲染；使用回退字体，然后在字体下载完成后进行重新渲染；指定不同的超时等等。")]),s._v(" "),a("p",[s._v("注：在某些浏览器上，Font Loading API 仍处于开发阶段。 您可以考虑使用 "),a("a",{attrs:{href:"https://github.com/bramstein/fontloader"}},[s._v("FontLoader polyfill")]),s._v(" 或"),a("a",{attrs:{href:"https://github.com/typekit/webfontloader"}},[s._v("webfontloader")]),s._v(" 库来提供类似功能，不过附加的 JavaScript 依赖关系会产生更多开销。")]),s._v(" "),a("div",{staticClass:"warning"},[a("p",[s._v("在 src 列表中优先列出 "),a("code",{pre:!0},[s._v("local()")]),s._v("：在 src 列表中首先列出"),a("code",{pre:!0},[s._v("local('Font Name')")]),s._v("可确保不会针对已安装的字体发出 HTTP 请求")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/font_loading_api.png",alt:"fontFace"}})]),s._v(" "),a("h4",{attrs:{id:"can-kao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-kao","aria-hidden":"true"}},[s._v("¶")]),s._v(" 参考：")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization"}},[s._v("网页字体优化")])]),s._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5c7e578de51d4541c11413fc?utm_medium=hao.caibaojian.com&utm_source=hao.caibaojian.com"}},[s._v("CSS @font-face性能优化")])])])])}],!1,null,null,null);t.default=_.exports},"2ots":function(s,t,a){(s.exports=a("I1BE")(!1)).push([s.i,"",""])},"6NLl":function(s,t,a){s.exports=a("/eQ1")},SXTo:function(s,t,a){var n=a("2ots");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);(0,a("SZ7m").default)("0c03f46e",n,!0,{})},Zdis:function(s,t,a){"use strict";a.r(t);var n=a("6NLl"),_={name:"FoodsFontFace",components:{md:a.n(n).a}},v=a("JFUb");var l=function(s){a("SXTo")},r=Object(v.a)(_,function(){var s=this.$createElement,t=this._self._c||s;return t("div",[t("md")],1)},[],!1,l,"data-v-078528da",null);t.default=r.exports}}]);