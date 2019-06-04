(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Ubci:function(s,a,t){(s.exports=t("I1BE")(!1)).push([s.i,"",""])},XZa9:function(s,a,t){"use strict";t.r(a);var n=t("JFUb"),r=Object(n.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("定义原型上面的属性")]),s._v(" "),t("p",[s._v("在"),t("code",{pre:!0},[s._v("constructor")]),s._v("里面定义的属性和方法都是实例属性和方法，什么事实例属性和方法呢，就是说在"),t("code",{pre:!0},[s._v("new")]),s._v("的时候都会重新执行和创建这些实例和方法")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-class"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("Test")]),s._v(" ")]),s._v("{\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("constructor")]),s._v(" (name) {\n        "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 实例属性")]),s._v("\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".name = name\n        "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 实例方法")]),s._v("\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".getAge = "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" "),t("span",{attrs:{class:"hljs-number"}},[s._v("25")]),s._v("\n    }\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 原型上面的方法")]),s._v("\n    getWeigth () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-number"}},[s._v("160")]),s._v("\n    }\n}\n")])]),s._v(" "),t("p",[s._v("实例化之后：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://shadow.hfcui.com/blog/screely-1545396838875.png",alt:""}})]),s._v(" "),t("h4",{attrs:{id:"na-me-zen-me-ding-yi-yuan-xing-shu-xing-ni"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#na-me-zen-me-ding-yi-yuan-xing-shu-xing-ni","aria-hidden":"true"}},[s._v("¶")]),s._v(" 那么怎么定义原型属性呢")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("直接prototype上面定义")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[s._v("Test.protoType.weigth = "),t("span",{attrs:{class:"hljs-number"}},[s._v("160")]),s._v("\n")])])]),s._v(" "),t("li",[t("p",[s._v("通过"),t("code",{pre:!0},[s._v("get")]),s._v("方式定义")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-class"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("Test")]),s._v(" ")]),s._v("{\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("constructor")]),s._v(" (name) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".name = name\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".getAge = "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" "),t("span",{attrs:{class:"hljs-number"}},[s._v("25")]),s._v("\n    }\n    getWeigth () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-number"}},[s._v("160")]),s._v("\n    }\n    get weight () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-number"}},[s._v("160")]),s._v("\n    }\n}\n")])])])]),s._v(" "),t("p",[s._v("实例化之后：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://shadow.hfcui.com/blog/screely-1545397701529.png",alt:""}})]),s._v(" "),t("h1",[s._v("静态属性和方法")]),s._v(" "),t("p",[s._v("什么是静态属性静态方法：只能通过类本身来调用，不能通过类的实例来调用")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-class"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("Test")]),s._v(" ")]),s._v("{\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("static")]),s._v(" getWeight () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-number"}},[s._v("160")]),s._v("\n    }\n}\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 类本身可以调用")]),s._v("\nTest.getWeight() "),t("span",{attrs:{class:"hljs-comment"}},[s._v("//160")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 实例不能调用")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Test().getWeight "),t("span",{attrs:{class:"hljs-comment"}},[s._v("//undefined")]),s._v("\n")])]),s._v(" "),t("p",[s._v("这就说明几个问题：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("静态方法之间可以相互调用，非静态方法就不能调用静态方法")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-class"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("Test")]),s._v(" ")]),s._v("{\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("static")]),s._v(" getWeight () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-number"}},[s._v("160")]),s._v("\n    }\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 可以调用")]),s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("static")]),s._v(" getPerson () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("weight")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".getWeigth()\n        }\n    }\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 会抛出错误 Uncaught TypeError: this.getWeight is not a function")]),s._v("\n    getMan () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("weight")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".getWeight()\n        }\n    }\n}\n")])])]),s._v(" "),t("li",[t("p",[s._v("非静态方法可以通过类名来调用静态方法")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-class"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("Test")]),s._v(" ")]),s._v("{\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("static")]),s._v(" getWeight () {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-number"}},[s._v("160")]),s._v("\n  }\n  getMan () {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("weight")]),s._v(": Test.getWeight()\n    }\n  }\n}\n")])])])]),s._v(" "),t("h4",{attrs:{id:"tong-guo-static-ke-yi-shen-ming-jing-tai-fang-fa-na-me-zen-me-shen-ming-jing-tai-shu-xing-ni"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tong-guo-static-ke-yi-shen-ming-jing-tai-fang-fa-na-me-zen-me-shen-ming-jing-tai-shu-xing-ni","aria-hidden":"true"}},[s._v("¶")]),s._v(" 通过"),t("code",{pre:!0},[s._v("static")]),s._v("可以申明静态方法，那么怎么申明静态属性呢")]),s._v(" "),t("p",[s._v("我们知道申明原型属性才用偏门的方法"),t("code",{pre:!0},[s._v("get")]),s._v("的方式，那么通过"),t("code",{pre:!0},[s._v("static")]),s._v("结合"),t("code",{pre:!0},[s._v("get")]),s._v("的方式就可以申明一个静态属性")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-class"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("Test")]),s._v(" ")]),s._v("{\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("static")]),s._v(" get weight () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-number"}},[s._v("160")]),s._v("\n    }\n}\n\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 类本身可以访问")]),s._v("\nTest.weight "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 160")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 实例不可以访问")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Test().weight "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// undefined")]),s._v("\n")])]),s._v(" "),t("h1",[s._v("super")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("为什么要把"),t("code",{pre:!0},[s._v("super")]),s._v("调用放在第一行，或者说为什么要在使用"),t("code",{pre:!0},[s._v("this")]),s._v("之前，调用"),t("code",{pre:!0},[s._v("super")]),s._v("方法")]),s._v(" "),t("p",[t("code",{pre:!0},[s._v("super")]),s._v("相当于调用父类的构造函数"),t("code",{pre:!0},[s._v("constructor")]),s._v("，如果不先调用"),t("code",{pre:!0},[s._v("super")]),s._v("方法那么父类就没有执行构造函数，也就是不能访问父类的实例方法和属性")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-class"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("Parent")]),s._v(" ")]),s._v("{\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("constructor")]),s._v(" () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".name = "),t("span",{attrs:{class:"hljs-string"}},[s._v("'崔海峰'")]),s._v("\n    }\n}\n\n"),t("span",{attrs:{class:"hljs-class"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("Child")]),s._v(" ")]),s._v("{\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("constructor")]),s._v(" () {\n        "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 此时父类没有实例化，也就是说实例属性name不存在，而getName又访问实例属性name就会抛出错误")]),s._v("\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".getName()\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("super")]),s._v("()\n    }\n    getName () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".name\n    }\n}\n")])])])]),s._v(" "),t("p",[s._v("##### 总结：实现继承的时候，子类如果定义了"),t("code",{pre:!0},[s._v("constructor")]),s._v("方法，那么必须调用而且必须最先调用"),t("code",{pre:!0},[s._v("super")]),s._v("方法实例化父类")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("子类没有定义"),t("code",{pre:!0},[s._v("constructor")]),s._v("方法")]),s._v(" "),t("p",[s._v("子类没有定义"),t("code",{pre:!0},[s._v("constructor")]),s._v("方法，相当于自动调用了"),t("code",{pre:!0},[s._v("super")]),s._v("方法，必须会把实例化子类时候传递的参数，一样的传递给父类的构造函数"),t("code",{pre:!0},[s._v("constructor")]),s._v("；定义了"),t("code",{pre:!0},[s._v("constructor")]),s._v("方法，那么就必须调用"),t("code",{pre:!0},[s._v("super")]),s._v("方法")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-class"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("Parent")]),s._v(" ")]),s._v("{\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("constructor")]),s._v(" (name) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".name = name\n    }\n}\n\n"),t("span",{attrs:{class:"hljs-class"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("Child")]),s._v(" ")]),s._v("{\n    getWeigth () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-number"}},[s._v("160")]),s._v("\n    }\n}\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// Child没有定义constructor方法，相当于自动调用了super('崔海峰')")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Child("),t("span",{attrs:{class:"hljs-string"}},[s._v("'崔海峰'")]),s._v(") "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// { name: '崔海峰'}")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 必须调用而且最先调用super方法")]),s._v("\n"),t("span",{attrs:{class:"hljs-class"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("Child")]),s._v(" ")]),s._v("{\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor")]),s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("constructor")]),s._v(" () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".getWeight()\n    }\n}\n")])])])]),s._v(" "),t("h1",[s._v("访问父类的静态方法或者属性")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("直接通过父类变量访问")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-class"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("Parent")]),s._v(" ")]),s._v("{\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("static")]),s._v(" getName () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'崔海峰'")]),s._v("\n    }\n}\n\n"),t("span",{attrs:{class:"hljs-class"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("Child")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("extends")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("Parent")]),s._v(" ")]),s._v("{\n    getPerson () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": Parent.getName()\n        }\n    }\n}\n")])])]),s._v(" "),t("li",[t("p",[s._v("通过"),t("code",{pre:!0},[s._v("super")]),s._v("访问")]),s._v(" "),t("p",[t("code",{pre:!0},[s._v("super")]),s._v("对象(不是"),t("code",{pre:!0},[s._v("super")]),s._v("方法)只能在静态方法里面访问，所以通过"),t("code",{pre:!0},[s._v("super")]),s._v("访问父类的静态数据也只能在子类的静态方法里面使用")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-class"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("Parent")]),s._v(" ")]),s._v("{\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("static")]),s._v(" getName () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'崔海峰'")]),s._v("\n    }\n}\n\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 子类的静态方法可以访问super")]),s._v("\n"),t("span",{attrs:{class:"hljs-class"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("Child")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("extends")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("Parent")]),s._v(" ")]),s._v("{\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("static")]),s._v(" getPerson () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("super")]),s._v(".getName()\n        }\n    }\n}\n\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 子类的原型方法不能访问super")]),s._v("\n"),t("span",{attrs:{class:"hljs-class"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("Child")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("extends")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("Parent")]),s._v(" ")]),s._v("{\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// TypeError: (intermediate value).getName is not a function")]),s._v("\n    getPerson () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("super")]),s._v(".getName()\n        }\n    }\n}\n")])])])])])}],!1,null,null,null);a.default=r.exports},mjxB:function(s,a,t){var n=t("Ubci");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);(0,t("SZ7m").default)("59410409",n,!0,{})},vOSI:function(s,a,t){s.exports=t("XZa9")},wGdC:function(s,a,t){"use strict";t.r(a);var n=t("vOSI"),r={name:"ES6Class",components:{md:t.n(n).a}},e=t("JFUb");var l=function(s){t("mjxB")},v=Object(e.a)(r,function(){var s=this.$createElement,a=this._self._c||s;return a("div",[a("md")],1)},[],!1,l,"data-v-96a36520",null);a.default=v.exports}}]);