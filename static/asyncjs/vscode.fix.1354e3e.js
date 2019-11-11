(window.webpackJsonp=window.webpackJsonp||[]).push([["vscode.fix"],{"+id4":function(e,s,t){(e.exports=t("I1BE")(!1)).push([e.i,"",""])},"9E52":function(e,s,t){var n=t("+id4");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,t("SZ7m").default)("2ac7ee71",n,!0,{})},Xnc3:function(e,s,t){"use strict";t.r(s);var n=t("pG3S"),a={name:"VscodeFix",components:{md:t.n(n).a}},r=t("JFUb");var c=function(e){t("9E52")},o=Object(r.a)(a,function(){var e=this.$createElement,s=this._self._c||e;return s("div",[s("md")],1)},[],!1,c,"data-v-17d620c6",null);s.default=o.exports},ZucK:function(e,s,t){"use strict";t.r(s);var n=t("JFUb"),a=Object(n.a)(null,function(){var e=this;e.$createElement;e._self._c;return e._m(0)},[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",[t("h3",{attrs:{id:"geng-xin-vscode-de-yu-yan-ban-ben"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#geng-xin-vscode-de-yu-yan-ban-ben","aria-hidden":"true"}},[e._v("¶")]),e._v(" 更新vscode的语言版本")]),e._v(" "),t("p",[e._v("比如说当前项目用的是"),t("code",{pre:!0},[e._v("typescript3.7")]),e._v(", 但是因为"),t("code",{pre:!0},[e._v("vscode")]),e._v("内置的"),t("code",{pre:!0},[e._v("typescript")]),e._v("还没有更新到"),t("code",{pre:!0},[e._v("3.7")]),e._v(", 这样就会导致一些语法在"),t("code",{pre:!0},[e._v("vscode")]),e._v("上面显示错误。")]),e._v(" "),t("p",[e._v("从拓展程序下载"),t("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next"}},[e._v("JavaScript and TypeScript Nightly")]),e._v("来选择语言版本来支持。")]),e._v(" "),t("h3",{attrs:{id:"vscode-wu-fa-ding-wei-dao-bie-ming-de-lu-jing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vscode-wu-fa-ding-wei-dao-bie-ming-de-lu-jing","aria-hidden":"true"}},[e._v("¶")]),e._v(" vscode无法定位到别名的路径")]),e._v(" "),t("p",[e._v("比如"),t("code",{pre:!0},[e._v("import PullDownRefresh from '@/components/pullDownRefresh/pull-down-refresh.vue'")]),e._v("无法直接定位进去。")]),e._v(" "),t("p",[e._v("解决方案: 在项目更目录添加"),t("code",{pre:!0},[e._v("jsconfig.json")]),e._v("或者"),t("code",{pre:!0},[e._v("tsconfig.json")]),e._v("配置"),t("code",{pre:!0},[e._v("compilerOptions.path")])]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-json"}},[e._v("{\n  "),t("span",{attrs:{class:"hljs-attr"}},[e._v('"compilerOptions"')]),e._v(": {\n    "),t("span",{attrs:{class:"hljs-attr"}},[e._v('"paths"')]),e._v(": {\n      "),t("span",{attrs:{class:"hljs-attr"}},[e._v('"@/*"')]),e._v(": ["),t("span",{attrs:{class:"hljs-string"}},[e._v('"./src/*"')]),e._v("]\n    }\n  },\n  "),t("span",{attrs:{class:"hljs-attr"}},[e._v('"exclude"')]),e._v(": [\n    "),t("span",{attrs:{class:"hljs-string"}},[e._v('"node_modules"')]),e._v("\n  ]\n}\n\n")])])])}],!1,null,null,null);s.default=a.exports},pG3S:function(e,s,t){e.exports=t("ZucK")}}]);