(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"/10k":function(s,a,t){"use strict";t.r(a);var r=t("JFUb"),n=Object(r.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[t("code",{pre:!0},[s._v(".then")]),s._v("方法默认返回的就是一个"),t("code",{pre:!0},[s._v("Promise")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" model = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v("("),t("span",{attrs:{class:"hljs-function"}},[s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("resolve")]),s._v(") =>")]),s._v(" {\n    resolve("),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n})\n.then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("res")]),s._v(" =>")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(res)\n})\n\nmodel "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// Promise")]),s._v("\n")])]),s._v(" "),t("p",[s._v("实现原理：")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-class"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("Promise")]),s._v(" ")]),s._v("{\n    then (callback) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".status === "),t("span",{attrs:{class:"hljs-string"}},[s._v("'padding'")]),s._v(") {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v("("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {})\n        }\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".status === "),t("span",{attrs:{class:"hljs-string"}},[s._v("'resolved'")]),s._v(") {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v("("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {})\n        }\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".status === "),t("span",{attrs:{class:"hljs-string"}},[s._v("'rejected'")]),s._v(") {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v("("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {})\n        }\n    }\n}\n")])]),s._v(" "),t("p",[s._v("可以看到执行"),t("code",{pre:!0},[s._v("then")]),s._v("方法，无论什么状态都返回一个"),t("code",{pre:!0},[s._v("Promise")]),s._v("对象")]),s._v(" "),t("h1",[t("code",{pre:!0},[s._v(".then")]),s._v("方法也可以手动返回一个"),t("code",{pre:!0},[s._v("Promise")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[s._v(".then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("res")]),s._v(" =>")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v("("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("resolve")]),s._v(" =>")]),s._v(" {\n        setTimeout("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n            resolve("),t("span",{attrs:{class:"hljs-string"}},[s._v("'1秒钟之后执行'")]),s._v(")\n        }, "),t("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(")\n    })\n})\n.then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("result")]),s._v(" =>")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(result) "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 1秒钟之后执行")]),s._v("\n})\n")])]),s._v(" "),t("p",[s._v("实现原理：")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-class"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("Promise")]),s._v(" ")]),s._v("{\n    then (onResolved, onRejected) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" promise2\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".status === "),t("span",{attrs:{class:"hljs-string"}},[s._v("'padding'")]),s._v(") {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" promise2 = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v("("),t("span",{attrs:{class:"hljs-function"}},[s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("resolve, reject")]),s._v(") =>")]),s._v(" {\n                "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 当前还不确定这个Promise的状态，所以我们这里把成功和失败的回调都放到相应的回调队列里面，即使都放进去，最终也只会执行一个，因为Promise的状态最终要么是resolved，要么就是rejected")]),s._v("\n                 "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".onResolvedCallback.push("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("value")]),s._v(" =>")]),s._v(" {\n                     "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("try")]),s._v(" {\n                         "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 执行成功回调")]),s._v("\n                         "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" x = onResolved("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".data)\n                         "),t("span",{attrs:{class:"hljs-comment"}},[s._v("//! 判断成功回调的返回值是否是个Promise")]),s._v("\n                         "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (x "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("instanceof")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(") {\n                             x.then(resolve, reject)\n                         }\n                      } "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("catch")]),s._v(" (e) {\n                      }\n                 })\n            })\n        }\n    }\n}\n")])]),s._v(" "),t("p",[s._v("也就是"),t("code",{pre:!0},[s._v(".then")]),s._v("会创建一个"),t("code",{pre:!0},[s._v("Promise")]),s._v("，这个"),t("code",{pre:!0},[s._v("Promise")]),s._v("里面会判断"),t("code",{pre:!0},[s._v("then")]),s._v("传入的回调函数是否是个"),t("code",{pre:!0},[s._v("Promise")]),s._v("，如果是个"),t("code",{pre:!0},[s._v("Promise")]),s._v("，那么就会等回调函数的里面的"),t("code",{pre:!0},[s._v("Promise")]),s._v("执行完毕，才调用"),t("code",{pre:!0},[s._v("then")]),s._v("创建的"),t("code",{pre:!0},[s._v("Promise")]),s._v("的"),t("code",{pre:!0},[s._v("onResolved")]),s._v("或者"),t("code",{pre:!0},[s._v("onRejected")])]),s._v(" "),t("h1",[s._v("使用"),t("code",{pre:!0},[s._v("Promise.resolve")]),s._v("直接产生"),t("code",{pre:!0},[s._v("resolved")]),s._v("状态的"),t("code",{pre:!0},[s._v("Promise")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" obj = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".resolve("),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n")])]),s._v(" "),t("p",[s._v("实现原理：")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-class"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("Promise")]),s._v(" ")]),s._v("{\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("static")]),s._v(" resolve (val) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v("("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("resolve")]),s._v(" =>")]),s._v(" {\n            resolve(val)\n        })        \n    }\n}\n")])]),s._v(" "),t("p",[s._v("可以看到是直接返回一个"),t("code",{pre:!0},[s._v("Promise")]),s._v("，内部调用"),t("code",{pre:!0},[s._v("resolve")]),s._v("，将状态改变成"),t("code",{pre:!0},[s._v("resolved")]),s._v("状态")]),s._v(" "),t("h1",[s._v("使用"),t("code",{pre:!0},[s._v("Promise.reject")]),s._v("直接产生rejected"),t("code",{pre:!0},[s._v("状态的")]),s._v("Promise`")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" obj = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".resolve("),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n")])]),s._v(" "),t("p",[s._v("实现原理：")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-class"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("Promise")]),s._v(" ")]),s._v("{\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("static")]),s._v(" resolve (val) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v("("),t("span",{attrs:{class:"hljs-function"}},[s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("resolve, reject")]),s._v(") =>")]),s._v(" {\n            reject(val)\n        })        \n    }\n}\n")])]),s._v(" "),t("p",[s._v("可以看到是直接返回一个"),t("code",{pre:!0},[s._v("Promise")]),s._v("，内部调用"),t("code",{pre:!0},[s._v("reject")]),s._v("，将状态改变成"),t("code",{pre:!0},[s._v("rejected")]),s._v("状态")]),s._v(" "),t("h1",[t("code",{pre:!0},[s._v("Promise.all")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("接收一个"),t("code",{pre:!0},[s._v("promise")]),s._v("数组")])]),s._v(" "),t("li",[t("p",[s._v("返回一个新的"),t("code",{pre:!0},[s._v("Promise")]),s._v("，将所有的"),t("code",{pre:!0},[s._v("resolve")]),s._v("结果放进一个数组里面")])]),s._v(" "),t("li",[t("p",[s._v("只要有一个 "),t("code",{pre:!0},[s._v("promise")]),s._v(" 变成"),t("code",{pre:!0},[s._v("rejected")]),s._v("，这个新的 "),t("code",{pre:!0},[s._v("promise")]),s._v(" 将会被 "),t("code",{pre:!0},[s._v("rejected")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".all([ "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v("("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("resolve")]),s._v(" =>")]),s._v(" {\n    resolve("),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n}), "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v("("),t("span",{attrs:{class:"hljs-function"}},[s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("resolve, reject")]),s._v(") =>")]),s._v(" {\n    reject("),t("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(")\n}) ])\n.then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("res")]),s._v(" =>")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 这里的代码不会执行")]),s._v("\n})\n.catch("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("e")]),s._v(" =>")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 代码会执行到这里")]),s._v("\n    "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".lor(e) "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 2")]),s._v("\n})\n")])])])]),s._v(" "),t("h1",[t("code",{pre:!0},[s._v(".catch")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("也会返回一个"),t("code",{pre:!0},[s._v("resolved")]),s._v("状态的"),t("code",{pre:!0},[s._v("Promise")]),s._v("，除非再手动抛出一个错误")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" promise = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v("("),t("span",{attrs:{class:"hljs-function"}},[s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("rel, rej")]),s._v(") =>")]),s._v(" {\n    rej("),t("span",{attrs:{class:"hljs-string"}},[s._v("'抛出错误'")]),s._v(")\n})\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" promise2 = promise.catch("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("err")]),s._v(" =>")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" err    \n})\n.then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("res")]),s._v(" =>")]),s._v(" {\n    res "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 抛出错误")]),s._v("\n})\n\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 手动抛出错误")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" promise2 = promise.catch("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("err")]),s._v(" =>")]),s._v(" {\n     "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".reject(err)\n })\n.then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("res")]),s._v(" =>")]),s._v(" {\n     "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 不会执行")]),s._v("\n})\n.catch("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("err")]),s._v(" =>")]),s._v(" {\n    err "),t("span",{attrs:{class:"hljs-comment"}},[s._v("//执行到了这里")]),s._v("\n})\n")])])]),s._v(" "),t("li",[t("p",[s._v("多个"),t("code",{pre:!0},[s._v("Promise")]),s._v("嵌套，只需要一个"),t("code",{pre:!0},[s._v("catch")]),s._v("方法就可以捕获")]),s._v(" "),t("p",[s._v("只要前面的"),t("code",{pre:!0},[s._v("Promise")]),s._v("发生错误，就会直接进入这个"),t("code",{pre:!0},[s._v("Promise")]),s._v("后面的"),t("code",{pre:!0},[s._v("catch")]),s._v("（"),t("strong",[s._v("不仅限于紧跟后面的")]),s._v("）")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-java"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Promise((res, rej) => {\n    res("),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n})\n.then(res => {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("throw")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Error("),t("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(")\n})\n.then(res => {\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 不会执行到这里")]),s._v("\n})\n."),t("span",{attrs:{class:"hljs-keyword"}},[s._v("catch")]),s._v("(err => {\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 会执行到这里，catch能捕获住前面所有的Promise发生的错误")]),s._v("\n})\n")])])]),s._v(" "),t("li",[t("p",[t("code",{pre:!0},[s._v(".catch")]),s._v("和"),t("code",{pre:!0},[s._v("onRejected")]),s._v("不能同时捕获到错误，而且是"),t("code",{pre:!0},[s._v("onRejected")]),s._v("的优先级高于"),t("code",{pre:!0},[s._v("catch")]),s._v("，可以理解为"),t("code",{pre:!0},[s._v("onRejected")]),s._v("带代码逻辑在"),t("code",{pre:!0},[s._v("catch")]),s._v("之前，只要是"),t("code",{pre:!0},[s._v(".catch")]),s._v("能捕获到的错误，"),t("code",{pre:!0},[s._v("onRejected")]),s._v("都能捕获到，无论是代码逻辑错误，还是通过"),t("code",{pre:!0},[s._v("reject")]),s._v("抛出的错误")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" promise = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v("("),t("span",{attrs:{class:"hljs-function"}},[s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("res, rej")]),s._v(") =>")]),s._v(" {\n    rej("),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n})\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" promise2 = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v("("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("throw")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Error")]),s._v("("),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n})\n\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 第一种情况")]),s._v("\npromise\n.then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {}, "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("onRejected")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 代码会执行到这里")]),s._v("\n})\n.catch("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("err")]),s._v(" =>")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 代码不会执行到这里")]),s._v("\n})\n\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 第二种情况：抛出的错误也可以被onRejected捕获到")]),s._v("\npromise2\n.then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {}, "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("onRejected")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n     "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 代码会执行到这里")]),s._v("\n})\n.catch("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("err")]),s._v(" =>")]),s._v(" {\n     "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 代码不会执行到这里")]),s._v("\n})\n\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 第三种情况： onRejected没有在紧跟着的后面也可以捕获到错误")]),s._v("\npromise\n.then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {})\n.then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {}, "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("onRejected")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 代码会执行到这里")]),s._v("\n})\n.catch("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("err")]),s._v(" =>")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 代码不会执行到这里")]),s._v("\n})\n")])])]),s._v(" "),t("li",[t("p",[s._v("内部"),t("code",{pre:!0},[s._v("Promise")]),s._v("的错误，外部是无法捕获的")]),s._v(" "),t("p",[s._v("因为"),t("code",{pre:!0},[s._v("try catch")]),s._v("只能捕获同步错误，所有内部的Promise，外部是无法捕获的")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v("("),t("span",{attrs:{class:"hljs-function"}},[s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("res,rej")]),s._v(") =>")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".reject("),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n})\n.then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {}, "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("onRejected")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 无法捕获到错误")]),s._v("\n})\n.catch("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("err")]),s._v(" =>")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 同样也无法捕获到错误")]),s._v("\n})\n\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v("("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".resolve("),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n})\n.then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("res")]),s._v(" =>")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 同样不会执行，因为内部的promise，外部是无法捕获到的")]),s._v("\n})\n.catch("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("err")]),s._v(" =>")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 同样也不会执行")]),s._v("\n})\n")])])]),s._v(" "),t("li",[t("p",[s._v("正确的理解内部"),t("code",{pre:!0},[s._v("Promise")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-java"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Promise((resolve) => {\n    resolve("),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")    \n})\n.then(res => {\n     "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" Promise.reject(res)\n})\n."),t("span",{attrs:{class:"hljs-keyword"}},[s._v("catch")]),s._v("(err => {\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 会执行到这里的")]),s._v("\n})\n")])]),s._v(" "),t("p",[t("code",{pre:!0},[s._v(".then")]),s._v("会立马执行传入的回调，如果回调的执行结果是"),t("code",{pre:!0},[s._v("Promise")]),s._v("那么直接返回这个"),t("code",{pre:!0},[s._v("Promise")]),s._v("，如果不是将创建一个"),t("code",{pre:!0},[s._v("Promise")]),s._v(",返回出去,所以这里的"),t("code",{pre:!0},[s._v("Promise")]),s._v("是属于外部的")])])])])}],!1,null,null,null);a.default=n.exports},CMt6:function(s,a,t){"use strict";t.r(a);var r=t("qBKV"),n={name:"ES6PromiseTopic",components:{md:t.n(r).a}},e=t("JFUb");var v=function(s){t("bLwY")},l=Object(e.a)(n,function(){var s=this.$createElement,a=this._self._c||s;return a("div",[a("md")],1)},[],!1,v,"data-v-4ed59baa",null);a.default=l.exports},ZK7P:function(s,a,t){(s.exports=t("I1BE")(!1)).push([s.i,"",""])},bLwY:function(s,a,t){var r=t("ZK7P");"string"==typeof r&&(r=[[s.i,r,""]]),r.locals&&(s.exports=r.locals);(0,t("SZ7m").default)("6d50967a",r,!0,{})},qBKV:function(s,a,t){s.exports=t("/10k")}}]);