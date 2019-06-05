(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{XsZK:function(t,e,s){var a=s("nYXS");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s("SZ7m").default)("0656e75c",a,!0,{})},ZMqj:function(t,e,s){"use strict";s.r(e);var a=s("jBla"),l={name:"FlutterWidget",components:{md:s.n(a).a}},r=s("JFUb");var i=function(t){s("XsZK")},n=Object(r.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("md")],1)},[],!1,i,"data-v-2b984e2a",null);e.default=n.exports},j04M:function(t,e,s){"use strict";s.r(e);var a=s("JFUb"),l=Object(a.a)(null,function(){var t=this;t.$createElement;t._self._c;return t._m(0)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("h1",[t._v("Widget 是什么？")]),t._v(" "),s("p",[t._v("Flutter 中的 Widget 相当于 Android 里的 View，iOS 里的 UIView。")]),t._v(" "),s("p",[t._v("在 Flutter 中要用 Widget 构件 UI。Flutter 的 Widget 渲染采用的是类似 React 的框架：当 Widget 状态发生变化，需要更新界面时，框架会先计算从上一个状态转换到下一个状态所需的最小更改，然后再去刷新界面。")]),t._v(" "),s("h1",[t._v("Flutter Framework 里的 Widget")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/13916253446/assets/master/public/168eb1ddc1f9a6c0.5kfcp0yrwz.jpg",alt:"flutter framework"}})]),t._v(" "),s("p",[t._v("这是 Flutter Framework 层的架构图，可以看到 Framework 里面有一层是 Widgets。")]),t._v(" "),s("p",[t._v("在 Widgets 层下面，有：")]),t._v(" "),s("ul",[s("li",[t._v("Rendering（渲染层）")]),t._v(" "),s("li",[t._v("Animation、Painting、Gestures（动画、绘制、手势）")]),t._v(" "),s("li",[t._v("Foundation（基础库层）")])]),t._v(" "),s("p",[t._v("Widgets 下面的层提供的是最基本的功能，但是这些平时很少使用到，因为要使用这些的话会比较复杂。我们在开发中使用的都是封装好的东西，也就是 Widgets 上面的那层：")]),t._v(" "),s("p",[t._v("1、Material（[mə'tɪrɪəl]: 材料，原料） & Cupertino（库比蒂诺（苹果电脑的全球总公司所在地，位于美国旧金山））")]),t._v(" "),s("p",[t._v("Material & Cupertino 指的 Widget 的风格是 Material 或 Cupertino 。Flutter 为了减轻开发人员的工作量，实现了两种不同风格的组件：Material 和 Cupertino 。Material 用于 Android，Cupertino 用于 iOS。有了这些组件，开发人员不需要再做额外的工作，就可以让 Flutter 的 UI 风格适应不同的平台，让 Flutter UI 获得和 Native UI 一样的使用体验。")]),t._v(" "),s("p",[t._v("2、根 Widget")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Flutter会默认把 根Widget 充满屏幕。")])]),t._v(" "),s("li",[s("p",[t._v("在 Flutter 中，根Widget 只能是以下三个：")]),t._v(" "),s("p",[t._v("1、WidgetsApp：WidgetsApp 是可以自定义风格的 根Widget。")]),t._v(" "),s("p",[t._v("2、MaterialApp：MaterialApp 是在 WidgetsApp 上添加了很多 material-design 的功能，是 Material Design 风格的 根Widget。")]),t._v(" "),s("p",[t._v("3、CupertinoApp：CupertinoApp 也是基于 WidgetsApp 实现的 iOS 风格的 根Widget。")])])]),t._v(" "),s("p",[t._v("3、Widget 的分类：StatelessWidget 和 StatefulWidget")]),t._v(" "),s("p",[t._v("因为渲染是很耗性能的，为了提高 Flutter 的帧率，就要尽量减少不必要的 UI 渲染，所以 Flutter 根据 UI 是否有变化，将 Widget 分为：")]),t._v(" "),s("ul",[s("li",[t._v("StatefulWidget（['steitful]：有状态的）")])]),t._v(" "),s("p",[t._v("StatefulWidget 是 UI 可以变化的 Widget，创建完后 UI 还可以在更改。")]),t._v(" "),s("ul",[s("li",[t._v("StatelessWidget（['stetləs]：无国籍的）")])]),t._v(" "),s("p",[t._v("StatelessWidget 是 UI 不可以变化的 Widget，创建完后 UI 就不可以在更改。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("pre",{pre:!0},[s("code",{attrs:{class:"hljs language-dart"}},[s("span",{attrs:{class:"hljs-class"}},[s("span",{attrs:{class:"hljs-keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"hljs-title"}},[t._v("MyApp")]),t._v(" "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"hljs-title"}},[t._v("StatelessWidget")]),t._v(" ")]),t._v("{\n  @override\n  Widget build(BuildContext context) {\n    "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" MaterialApp(\n      title: "),s("span",{attrs:{class:"hljs-string"}},[t._v("'Welcome to Flutter'")]),t._v(",\n      color: Colors.yellow,\n      home: "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Scaffold(\n        appBar: "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" AppBar(\n          title: "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" Text("),s("span",{attrs:{class:"hljs-string"}},[t._v("'1'")]),t._v("),\n        ),\n        body: "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" Center(\n          child: "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" Text("),s("span",{attrs:{class:"hljs-string"}},[t._v("'Hello World'")]),t._v("),\n        ),\n      ),\n    );\n  }\n}\n")])])])}],!1,null,null,null);e.default=l.exports},jBla:function(t,e,s){t.exports=s("j04M")},nYXS:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"",""])}}]);