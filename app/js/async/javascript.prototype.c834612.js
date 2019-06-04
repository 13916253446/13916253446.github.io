(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"21HN":function(s,t,n){s.exports=n("jRgw")},CqaZ:function(s,t,n){"use strict";n.r(t);var a=n("21HN"),r={name:"JavascriptPrototype",components:{md:n.n(a).a}},e=n("JFUb");var o=function(s){n("PU35")},_=Object(e.a)(r,function(){var s=this.$createElement,t=this._self._c||s;return t("div",[t("md")],1)},[],!1,o,"data-v-263f5f4c",null);t.default=_.exports},PU35:function(s,t,n){var a=n("k0rD");"string"==typeof a&&(a=[[s.i,a,""]]),a.locals&&(s.exports=a.locals);(0,n("SZ7m").default)("7daf40d3",a,!0,{})},jRgw:function(s,t,n){"use strict";n.r(t);var a=n("JFUb"),r=Object(a.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("section",[n("h1",[s._v("首先要理解的几个概念")]),s._v(" "),n("p",[s._v("###1. 原型是什么")]),s._v(" "),n("p",[s._v("每一个"),n("code",{pre:!0},[s._v("JavaScript")]),s._v("对象("),n("code",{pre:!0},[s._v("null")]),s._v("除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"),n("strong",[s._v("继承")]),s._v("属性。")]),s._v(" "),n("p",[s._v("###2. 每个函数都有一个"),n("code",{pre:!0},[s._v("prototype")]),s._v("属性")]),s._v(" "),n("p",[s._v("###3. 每个对象(除了"),n("code",{pre:!0},[s._v("null")]),s._v("以外)都有一个"),n("code",{pre:!0},[s._v("_proto_")]),s._v("属性")]),s._v(" "),n("h1",[s._v("prototype")]),s._v(" "),n("p",[s._v("每个函数都有一个 prototype 属性，就是我们经常在各种例子中看到的那个 prototype ，比如：")]),s._v(" "),n("pre",{pre:!0},[n("code",{attrs:{class:"hljs language-js"}},[n("span",{attrs:{class:"hljs-function"}},[n("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),n("span",{attrs:{class:"hljs-title"}},[s._v("Person")]),s._v("("),n("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n\n}\n"),n("span",{attrs:{class:"hljs-comment"}},[s._v("// 虽然写在注释里，但是你要注意：")]),s._v("\n"),n("span",{attrs:{class:"hljs-comment"}},[s._v("// prototype是函数才会有的属性")]),s._v("\nPerson.prototype.name = "),n("span",{attrs:{class:"hljs-string"}},[s._v("'Kevin'")]),s._v(";\n"),n("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" person1 = "),n("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Person();\n"),n("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" person2 = "),n("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Person();\n"),n("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(person1.name) "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// Kevin")]),s._v("\n"),n("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(person2.name) "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// Kevin")]),s._v("\n")])]),s._v(" "),n("p",[s._v("那这个函数的 prototype 属性到底指向的是什么呢？是这个函数的原型吗？")]),s._v(" "),n("p",[s._v("其实，函数的 prototype 属性指向了一个对象，这个对象正是调用该构造函数而创建的"),n("strong",[s._v("实例")]),s._v("的原型，也就是这个例子中的 person1 和 person2 的原型。")]),s._v(" "),n("p",[s._v('那什么是原型呢？你可以这样理解：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。')]),s._v(" "),n("p",[s._v("让我们用一张图表示构造函数和实例原型之间的关系：\n"),n("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/prototype1.png",alt:"prototyp"}})]),s._v(" "),n("p",[s._v("在这张图中我们用 Object.prototype 表示实例原型。")]),s._v(" "),n("p",[s._v("那么我们该怎么表示实例与实例原型，也就是 person 和 Person.prototype 之间的关系呢，这时候我们就要讲到第二个属性：")]),s._v(" "),n("h2",{attrs:{id:"proto"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#proto","aria-hidden":"true"}},[s._v("¶")]),s._v(" "),n("strong",[s._v("proto")])]),s._v(" "),n("p",[s._v("这是每一个JavaScript对象(除了 null )都具有的一个属性，叫__proto__，这个属性会指向该对象的原型。")]),s._v(" "),n("p",[s._v("为了证明这一点,我们可以在火狐或者谷歌中输入：")]),s._v(" "),n("pre",{pre:!0},[n("code",{attrs:{class:"hljs language-js"}},[n("span",{attrs:{class:"hljs-function"}},[n("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),n("span",{attrs:{class:"hljs-title"}},[s._v("Person")]),s._v("("),n("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n\n}\n"),n("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" person = "),n("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Person();\n"),n("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(person.__proto__ === Person.prototype); "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// true")]),s._v("\n")])]),s._v(" "),n("p",[s._v("于是我们更新下关系图：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/prototype2.png",alt:"prototype"}})]),s._v(" "),n("h2",{attrs:{id:"constructor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#constructor","aria-hidden":"true"}},[s._v("¶")]),s._v(" constructor")]),s._v(" "),n("p",[s._v("原型指向构造函数倒是有的，这就要讲到第三个属性：constructor，每个原型都有一个 constructor 属性指向关联的构造函数。")]),s._v(" "),n("p",[s._v("为了验证这一点，我们可以尝试：")]),s._v(" "),n("pre",{pre:!0},[n("code",{attrs:{class:"hljs language-js"}},[n("span",{attrs:{class:"hljs-function"}},[n("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),n("span",{attrs:{class:"hljs-title"}},[s._v("Person")]),s._v("("),n("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n\n}\n"),n("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(Person === Person.prototype.constructor); "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// true")]),s._v("\n")])]),s._v(" "),n("p",[s._v("所以再更新下关系图：\n"),n("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/prototype3.png",alt:"prototype"}})]),s._v(" "),n("p",[s._v("综上我们已经得出：")]),s._v(" "),n("pre",{pre:!0},[n("code",{attrs:{class:"hljs language-js"}},[n("span",{attrs:{class:"hljs-function"}},[n("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),n("span",{attrs:{class:"hljs-title"}},[s._v("Person")]),s._v("("),n("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n\n}\n\n"),n("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" person = "),n("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Person();\n\n"),n("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(person.__proto__ == Person.prototype) "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// true")]),s._v("\n"),n("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(Person.prototype.constructor == Person) "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// true")]),s._v("\n"),n("span",{attrs:{class:"hljs-comment"}},[s._v("// 顺便学习一个ES5的方法,可以获得对象的原型")]),s._v("\n"),n("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),n("span",{attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".getPrototypeOf(person) === Person.prototype) "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// true")]),s._v("\n")])]),s._v(" "),n("p",[s._v("了解了构造函数、实例原型、和实例之间的关系，接下来我们讲讲实例和原型的关系：")]),s._v(" "),n("h2",{attrs:{id:"shi-li-yu-yuan-xing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shi-li-yu-yuan-xing","aria-hidden":"true"}},[s._v("¶")]),s._v(" 实例与原型")]),s._v(" "),n("p",[s._v("当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。")]),s._v(" "),n("p",[s._v("举个例子：")]),s._v(" "),n("pre",{pre:!0},[n("code",{attrs:{class:"hljs language-js"}},[n("span",{attrs:{class:"hljs-function"}},[n("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),n("span",{attrs:{class:"hljs-title"}},[s._v("Person")]),s._v("("),n("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n\n}\n\nPerson.prototype.name = "),n("span",{attrs:{class:"hljs-string"}},[s._v("'Kevin'")]),s._v(";\n\n"),n("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" person = "),n("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Person();\n\nperson.name = "),n("span",{attrs:{class:"hljs-string"}},[s._v("'Daisy'")]),s._v(";\n"),n("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(person.name) "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// Daisy")]),s._v("\n\n"),n("span",{attrs:{class:"hljs-keyword"}},[s._v("delete")]),s._v(" person.name;\n"),n("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(person.name) "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// Kevin")]),s._v("\n")])]),s._v(" "),n("p",[s._v("在这个例子中，我们给实例对象 person 添加了 name 属性，当我们打印 person.name 的时候，结果自然为 Daisy。")]),s._v(" "),n("p",[s._v("但是当我们删除了 person 的 name 属性时，读取 person.name，从 person 对象中找不到 name 属性就会从 person 的原型也就是 person."),n("strong",[s._v("proto")]),s._v(" ，也就是 Person.prototype中查找，幸运的是我们找到了 name 属性，结果为 Kevin。")]),s._v(" "),n("p",[s._v("但是万一还没有找到呢？原型的原型又是什么呢？")]),s._v(" "),n("h2",{attrs:{id:"yuan-xing-de-yuan-xing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yuan-xing-de-yuan-xing","aria-hidden":"true"}},[s._v("¶")]),s._v(" 原型的原型")]),s._v(" "),n("p",[s._v("在前面，我们已经讲了原型也是一个对象，既然是对象，我们就可以用最原始的方式创建它，那就是：")]),s._v(" "),n("pre",{pre:!0},[n("code",{attrs:{class:"hljs language-js"}},[n("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" obj = "),n("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),n("span",{attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v("();\nobj.name = "),n("span",{attrs:{class:"hljs-string"}},[s._v("'Kevin'")]),s._v("\n"),n("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(obj.name) "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// Kevin")]),s._v("\n")])]),s._v(" "),n("p",[s._v("其实原型对象就是通过 Object 构造函数生成的，结合之前所讲，实例的 "),n("strong",[s._v("proto")]),s._v(" 指向构造函数的 prototype ，所以我们再更新下关系图：\n"),n("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/prototype4.png",alt:"prototype"}})]),s._v(" "),n("h2",{attrs:{id:"yuan-xing-lian"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yuan-xing-lian","aria-hidden":"true"}},[s._v("¶")]),s._v(" 原型链")]),s._v(" "),n("p",[s._v("那 Object.prototype 的原型呢？")]),s._v(" "),n("p",[s._v("null，我们可以打印：")]),s._v(" "),n("pre",{pre:!0},[n("code",{attrs:{class:"hljs language-js"}},[n("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),n("span",{attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".prototype.__proto__ === "),n("span",{attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(") "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// true")]),s._v("\n")])]),s._v(" "),n("p",[s._v("最后一张关系图也可以更新为：\n"),n("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/prototype5.png",alt:"prototype"}})])])}],!1,null,null,null);t.default=r.exports},k0rD:function(s,t,n){(s.exports=n("I1BE")(!1)).push([s.i,"",""])}}]);