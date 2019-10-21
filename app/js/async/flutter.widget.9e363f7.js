(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{XsZK:function(t,e,s){var a=s("nYXS");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s("SZ7m").default)("0656e75c",a,!0,{})},ZMqj:function(t,e,s){"use strict";s.r(e);var a=s("jBla"),l={name:"FlutterWidget",components:{md:s.n(a).a}},n=s("JFUb");var r=function(t){s("XsZK")},i=Object(n.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("md")],1)},[],!1,r,"data-v-2b984e2a",null);e.default=i.exports},j04M:function(t,e,s){"use strict";s.r(e);var a=s("JFUb"),l=Object(a.a)(null,function(){var t=this;t.$createElement;t._self._c;return t._m(0)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("h1",[t._v("Widget 是什么？")]),t._v(" "),s("p",[t._v("Flutter 中的 Widget 相当于 Android 里的 View，iOS 里的 UIView。")]),t._v(" "),s("p",[t._v("在 Flutter 中要用 Widget 构件 UI。Flutter 的 Widget 渲染采用的是类似 React 的框架：当 Widget 状态发生变化，需要更新界面时，框架会先计算从上一个状态转换到下一个状态所需的最小更改，然后再去刷新界面。")]),t._v(" "),s("h1",[t._v("Flutter Framework 里的 Widget")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/13916253446/assets/master/public/168eb1ddc1f9a6c0.5kfcp0yrwz.jpg",alt:"flutter framework"}})]),t._v(" "),s("p",[t._v("这是 Flutter Framework 层的架构图，可以看到 Framework 里面有一层是 Widgets。")]),t._v(" "),s("p",[t._v("在 Widgets 层下面，有：")]),t._v(" "),s("ul",[s("li",[t._v("Rendering（渲染层）")]),t._v(" "),s("li",[t._v("Animation、Painting、Gestures（动画、绘制、手势）")]),t._v(" "),s("li",[t._v("Foundation（基础库层）")])]),t._v(" "),s("p",[t._v("Widgets 下面的层提供的是最基本的功能，但是这些平时很少使用到，因为要使用这些的话会比较复杂。我们在开发中使用的都是封装好的东西，也就是 Widgets 上面的那层：")]),t._v(" "),s("p",[t._v("1、Material（[mə'tɪrɪəl]: 材料，原料） & Cupertino（库比蒂诺（苹果电脑的全球总公司所在地，位于美国旧金山））")]),t._v(" "),s("p",[t._v("Material & Cupertino 指的 Widget 的风格是 Material 或 Cupertino 。Flutter 为了减轻开发人员的工作量，实现了两种不同风格的组件：Material 和 Cupertino 。Material 用于 Android，Cupertino 用于 iOS。有了这些组件，开发人员不需要再做额外的工作，就可以让 Flutter 的 UI 风格适应不同的平台，让 Flutter UI 获得和 Native UI 一样的使用体验。")]),t._v(" "),s("p",[t._v("2、根 Widget")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Flutter会默认把 根Widget 充满屏幕。")])]),t._v(" "),s("li",[s("p",[t._v("在 Flutter 中，根Widget 只能是以下三个：")]),t._v(" "),s("p",[t._v("1、WidgetsApp：WidgetsApp 是可以自定义风格的 根Widget。")]),t._v(" "),s("p",[t._v("2、MaterialApp：MaterialApp 是在 WidgetsApp 上添加了很多 material-design 的功能，是 Material Design 风格的 根Widget。")]),t._v(" "),s("p",[t._v("3、CupertinoApp：CupertinoApp 也是基于 WidgetsApp 实现的 iOS 风格的 根Widget。")])])]),t._v(" "),s("p",[t._v("3、Widget 的分类：StatelessWidget 和 StatefulWidget")]),t._v(" "),s("p",[t._v("因为渲染是很耗性能的，为了提高 Flutter 的帧率，就要尽量减少不必要的 UI 渲染，所以 Flutter 根据 UI 是否有变化，将 Widget 分为：")]),t._v(" "),s("ul",[s("li",[t._v("StatefulWidget（['steitful]：有状态的）")])]),t._v(" "),s("p",[t._v("StatefulWidget 是 UI 可以变化的 Widget，创建完后 UI 还可以在更改。")]),t._v(" "),s("ul",[s("li",[t._v("StatelessWidget（['stetləs]：无国籍的）")])]),t._v(" "),s("p",[t._v("StatelessWidget 是 UI 不可以变化的 Widget，创建完后 UI 就不可以在更改。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("pre",{pre:!0},[s("code",{attrs:{class:"hljs language-dart"}},[s("span",{attrs:{class:"hljs-class"}},[s("span",{attrs:{class:"hljs-keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"hljs-title"}},[t._v("MyApp")]),t._v(" "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"hljs-title"}},[t._v("StatelessWidget")]),t._v(" ")]),t._v("{\n  @override\n  Widget build(BuildContext context) {\n    "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" MaterialApp(\n      title: "),s("span",{attrs:{class:"hljs-string"}},[t._v("'Welcome to Flutter'")]),t._v(",\n      color: Colors.yellow,\n      home: "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Scaffold(\n        appBar: "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" AppBar(\n          title: "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" Text("),s("span",{attrs:{class:"hljs-string"}},[t._v("'1'")]),t._v("),\n        ),\n        body: "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" Center(\n          child: "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" Text("),s("span",{attrs:{class:"hljs-string"}},[t._v("'Hello World'")]),t._v("),\n        ),\n      ),\n    );\n  }\n}\n")])]),t._v(" "),s("h1",[t._v("StatefulWidget的实现")]),t._v(" "),s("p",[t._v("需要有两部分组成：")]),t._v(" "),s("ul",[s("li",[t._v("StatefulWidget")]),t._v(" "),s("li",[t._v("State")])]),t._v(" "),s("p",[t._v("1、StatefulWidget实现步骤")]),t._v(" "),s("ul",[s("li",[t._v("首先继承StatefulWidget")]),t._v(" "),s("li",[t._v("实现createState方法，返回一个State")])]),t._v(" "),s("pre",{pre:!0},[s("code",{attrs:{class:"hljs language-dart"}},[s("span",{attrs:{class:"hljs-class"}},[s("span",{attrs:{class:"hljs-keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"hljs-title"}},[t._v("MyApp")]),t._v(" "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"hljs-title"}},[t._v("StatefulWidget")]),t._v(" ")]),t._v("{\n  @override\n  State<StatefulWidget> createState() {\n    "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" MyAppState("),s("span",{attrs:{class:"hljs-string"}},[t._v('"Hello World"')]),t._v(");\n  }\n}\n")])]),t._v(" "),s("div",{staticClass:"tip"},[s("p",[t._v("主要功能就是创建State")])]),t._v(" "),s("p",[t._v("2、State的实现步骤")]),t._v(" "),s("ul",[s("li",[t._v("首先继承State，State 的泛型类型是上面定义的 Widget 的类型")]),t._v(" "),s("li",[t._v("实现build方法，返回一个Widget")]),t._v(" "),s("li",[t._v("调用setState方法，来刷新UI")])]),t._v(" "),s("pre",{pre:!0},[s("code",{attrs:{class:"hljs language-dart"}},[s("span",{attrs:{class:"hljs-class"}},[s("span",{attrs:{class:"hljs-keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"hljs-title"}},[t._v("MyAppState")]),t._v(" "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"hljs-title"}},[t._v("State")]),t._v("<"),s("span",{attrs:{class:"hljs-title"}},[t._v("MyApp")]),t._v("> ")]),t._v("{\n  "),s("span",{attrs:{class:"hljs-built_in"}},[t._v("bool")]),t._v(" isShowText ="),s("span",{attrs:{class:"hljs-keyword"}},[t._v("true")]),t._v(";\n  "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("void")]),t._v(" increment(){\n    setState(() {\n      widget.content += "),s("span",{attrs:{class:"hljs-string"}},[t._v('"d"')]),t._v(";\n    });\n  }\n  @override\n  Widget build(BuildContext context) {\n    "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" MaterialApp(\n        title: "),s("span",{attrs:{class:"hljs-string"}},[t._v("'Flutter Demo'")]),t._v(",\n        theme: ThemeData(\n          primarySwatch: Colors.blue,\n        ),\n        home: Scaffold(\n          appBar: AppBar(title: Text("),s("span",{attrs:{class:"hljs-string"}},[t._v('"Widget -- StatefulWidget及State"')]),t._v("),),\n          body: Center(\n              child: GestureDetector(\n                child: isShowText? Text(widget.content) :"),s("span",{attrs:{class:"hljs-keyword"}},[t._v("null")]),t._v(",\n                onTap: increment,\n              )\n          ),\n        )\n    );\n  }\n}\n")])]),t._v(" "),s("div",{staticClass:"tip"},[s("p",[t._v("State的两个功能:"),s("br"),t._v("\n1、build() —— 创建 Widget\n2、setState() —— 刷新 UI")])]),t._v(" "),s("div",{staticClass:"tip"},[s("p",[t._v("为什么 StatefulWidget 被分成 StatefulWidget 和 State 两部分？"),s("br"),t._v("\n一方面是为了保存当前 APP 的状态，另一个重要的原因就是为了性能！")]),t._v(" "),s("p",[t._v("当 UI 需要更新时候，假设 Widget 和 State 都重建，可是 State 里保存了 UI 显示的数据，State 重建，创建新的实例，UI 之前的状态就会丢失，导致 UI 显示异常，所以要分成两部分，一部分会重建，一部分不会重建，重建的部分就是 StatefulWidget，不会重建的部分就是 State。")]),t._v(" "),s("p",[t._v("Widget 重建的成本很低，但 State 的重建成本很高，因此将 StatefulWidget 分成两部分：重建成本低的 Widget 和重建成本高的 State。这样就使得 State 不会被频繁重建，也就提高了性能。")])]),t._v(" "),s("h1",[t._v("StatefulWidget 的生命周期")]),t._v(" "),s("p",[t._v("因为 StatefulWidget 由 StatefulWidget 和 State 两部分组成，所以也有 StatefulWidget 的生命周期和 State 生命周期。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/13916253446/assets/master/public/16ab1dbc405c19e2.zgjxv6g5m9n.jpg",alt:"StatefulWidget"}})])])}],!1,null,null,null);e.default=l.exports},jBla:function(t,e,s){t.exports=s("j04M")},nYXS:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"",""])}}]);