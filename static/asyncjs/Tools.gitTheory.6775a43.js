(window.webpackJsonp=window.webpackJsonp||[]).push([["Tools.gitTheory"],{EGhY:function(e,t,s){"use strict";s.r(t);var v=s("V9VE"),a={name:"ToolsGitTheory",components:{md:s.n(v).a}},_=s("JFUb");var r=function(e){s("mQ7B")},c=Object(_.a)(a,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("md")],1)},[],!1,r,"data-v-75858694",null);t.default=c.exports},GUuH:function(e,t,s){(e.exports=s("I1BE")(!1)).push([e.i,"",""])},V9VE:function(e,t,s){e.exports=s("rCbC")},mQ7B:function(e,t,s){var v=s("GUuH");"string"==typeof v&&(v=[[e.i,v,""]]),v.locals&&(e.exports=v.locals);(0,s("SZ7m").default)("6a356c7a",v,!0,{})},rCbC:function(e,t,s){"use strict";s.r(t);var v=s("JFUb"),a=Object(v.a)(null,function(){var e=this;e.$createElement;e._self._c;return e._m(0)},[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("p",[s("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/385704-20150915155600929-543996061.jpg",alt:"git"}})]),e._v(" "),s("ol",[s("li",[e._v("目录结构")])]),e._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":""}},[e._v(".\n├── .git //git管理目录\n|   └── branches\n|   └── config\n|   └── description\n|   └── HEAD\n|   └── hooks\n|   └── info\n|   └── objects\n|   └── refs\n\n")])]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("code",{pre:!0},[e._v("git add")]),e._v("命令")])]),e._v(" "),s("ul",[s("li",[e._v("修改的文件(文件内容)压缩成二进制文件，并且计算文件内容的"),s("code",{pre:!0},[e._v("SHA1")]),e._v("哈希值(长度40的字符串)，哈希值的前2个字符作为目录名，后38个字符作为二进制文件的文件名，把这个目录放在"),s("code",{pre:!0},[e._v(".git/objects")]),e._v("目录下")])]),e._v(" "),s("p",[e._v("比如说添加了两个新的文件，并且文件内容不相同")]),e._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":""}},[e._v(".\n├── .git //git管理目录\n|   └── branches\n|   └── config\n|   └── description\n|   └── HEAD\n|   └── hooks\n|   └── info\n|   └── objects\n|   |   └── 6f // 文件目录\n|   |       └── 5373dce73cc01c45d037d74aa1879d8ee733e1 //二进制文件\n|   |   └── 0c // 文件目录\n|   |       └── 29714e63ba0eae075c4f61c3521c56fb964518 //二进制文件\n|   └── refs\n")])]),e._v(" "),s("p",[e._v("可以通过"),s("code",{pre:!0},[e._v("git cat-file")]),e._v("查看二进制文件的原始内容")]),e._v(" "),s("pre",{pre:!0},[s("code",{attrs:{class:"hljs language-shell"}},[e._v("git cat-file -p 6f5373dce73cc01c45d037d74aa1879d8ee733e1\n")])]),e._v(" "),s("ul",[s("li",[e._v("文件保存成二进制对象以后，还需要通知"),s("code",{pre:!0},[e._v("Git")]),e._v("哪些文件发生了变动。所有变动的文件，"),s("code",{pre:!0},[e._v("Git")]),e._v('都记录在一个区域，叫做"暂存区"（英文叫做'),s("code",{pre:!0},[e._v("index")]),e._v("或者"),s("code",{pre:!0},[e._v("stage")]),e._v("）")])]),e._v(" "),s("p",[e._v("通过"),s("code",{pre:!0},[e._v("git ls-files")]),e._v("可以查看暂存区的内容，包括二进制对象名")]),e._v(" "),s("pre",{pre:!0},[s("code",{attrs:{class:"hljs language-shell"}},[e._v("git ls-files --stage\n"),s("span",{attrs:{class:"hljs-meta"}},[e._v("\n#")]),s("span",{attrs:{class:"bash"}},[e._v(" 100644 6256e61634866db86ae7c52f248074389854cc1e 0  test.vue")]),e._v("\n"),s("span",{attrs:{class:"hljs-meta"}},[e._v("#")]),s("span",{attrs:{class:"bash"}},[e._v(" 100644 0c29714e63ba0eae075c4f61c3521c56fb964518 0  test2.vue")]),e._v("\n")])]),e._v(" "),s("p",[e._v("通过"),s("code",{pre:!0},[e._v("git status")]),e._v("命令产生更可读的结果：")]),e._v(" "),s("pre",{pre:!0},[s("code",{attrs:{class:"hljs language-shell"}},[e._v("git status\n"),s("span",{attrs:{class:"hljs-meta"}},[e._v("\n#")]),s("span",{attrs:{class:"bash"}},[e._v("  new file:   test.vue")]),e._v("\n"),s("span",{attrs:{class:"hljs-meta"}},[e._v("#")]),s("span",{attrs:{class:"bash"}},[e._v("  new file:   test2.vue")]),e._v("\n")])]),e._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("code",{pre:!0},[e._v("git commit")]),e._v("命令")])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("前面保存对象的时候，只是保存单个文件，并没有记录文件之间的目录关系（哪个文件在哪里）。 生成一个"),s("code",{pre:!0},[e._v("Git")]),e._v("对象。也保存在"),s("code",{pre:!0},[e._v(".git/objects")]),e._v("目录里面")])]),e._v(" "),s("li",[s("p",[e._v("将目录树对象写入版本历史，将元数据和目录树，一起生成一个"),s("code",{pre:!0},[e._v("Git")]),e._v("对象(这就是所谓的生成快照)")])])]),e._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("code",{pre:!0},[e._v("branch")]),e._v("的概念")])]),e._v(" "),s("p",[e._v("所谓分支（branch）就是指向某个快照的指针，分支名就是指针名。哈希值是无法记忆的，分支使得用户可以为快照起别名。而且，分支会自动更新，如果当前分支有新的快照，指针就会自动指向它。比如"),s("code",{pre:!0},[e._v("master")]),e._v("分支就是有一个叫做"),s("code",{pre:!0},[e._v("master")]),e._v("指针，它指向的快照就是"),s("code",{pre:!0},[e._v("master")]),e._v("分支的当前快照。")]),e._v(" "),s("p",[e._v("用户可以对任意快照新建指针。比如，新建一个"),s("code",{pre:!0},[e._v("fix-typo")]),e._v("分支，就是创建一个叫做"),s("code",{pre:!0},[e._v("fix-typo")]),e._v("的指针，指向某个快照。所以，"),s("code",{pre:!0},[e._v("Git")]),e._v("新建分支特别容易，成本极低。")]),e._v(" "),s("p",[s("code",{pre:!0},[e._v("Git")]),e._v("有一个特殊指针"),s("code",{pre:!0},[e._v("HEAD")]),e._v("， 总是指向当前分支的最近一次快照。另外，"),s("code",{pre:!0},[e._v("Git")]),e._v("还提供简写方式，"),s("code",{pre:!0},[e._v("HEAD^")]),e._v("指向"),s("code",{pre:!0},[e._v("HEAD")]),e._v("的前一个快照（父节点），"),s("code",{pre:!0},[e._v("HEAD~6")]),e._v("则是HEAD之前的第6个快照。")]),e._v(" "),s("p",[e._v("每一个分支指针都是一个文本文件，保存在"),s("code",{pre:!0},[e._v(".git/refs/heads/")]),e._v("目录，该文件的内容就是它所指向的快照的二进制对象名（哈希值）。")]),e._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[e._v("分支指针是动态的。原因在于，下面三个命令会自动改写分支指针。")])]),e._v(" "),s("ul",[s("li",[e._v("git commit:当前分支指针指向新创建的快照")]),e._v(" "),s("li",[e._v("git pull:当前分支与远程分支合并后，指向新创建的快照")]),e._v(" "),s("li",[e._v("git reset:当前分支指针重置为指定快照")])]),e._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[e._v("总结")])]),e._v(" "),s("pre",{pre:!0},[s("code",{attrs:{class:"hljs language-shell"}},[e._v("工作区  ->  git add .  -> 暂存区 -> git commit -> 本地仓库 -> git push -> 远程仓库\n")])]),e._v(" "),s("h4",{attrs:{id:"can-kao"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#can-kao","aria-hidden":"true"}},[e._v("¶")]),e._v(" 参考")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/10/git-internals.html"}},[e._v("Git 原理入门")])])])])}],!1,null,null,null);t.default=a.exports}}]);