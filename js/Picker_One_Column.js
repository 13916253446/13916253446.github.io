//单列Picker选项组件
!function (current) {
    var config = {//配置基本信息
        winWidth: document.documentElement.clientWidth,
    };
    var requestAnimationFrame = current.requestAnimationFrame || current.webkitRequestAnimationFrame || function (currentBack) { setTimeout(callBack(), 1000 / 60) };
    if (!current.yyq_components) current.yyq_components = {};
    yyq_components.picker_one_column = (function () {
        var dataType;//数据类型1.字符串（["测试","测试"]），2.对象（[{text:"测试",value:"测试"}]）
        var dataArray = [];
        var maskDom, wrapperDom, contentDom;
        var defaultConfig = {//组件默认配置
            autoHide: true,//是否点击组件外部自动隐藏组件
            ConfirmCallback: function () { },
            CancelCallback: function () { }
        };
        return {
            //初始化数据
            initData: function (arg, option) {
                if (Object.prototype.toString.call(option) == "[object Object]") {
                    for (var item in option) {
                        if (defaultConfig[item] != null) defaultConfig[item] = option[item];
                    }
                };
                if (Object.prototype.toString.call(arg) !== "[object Array]") {
                    console.error("用于初始化的数据，数据格式不正确哦");
                    return;
                };
                if (arg.length < 1) {
                    console.error("初始化数据不能为空哦");
                    return;
                };
                var contentHTMLStr = "";
                if (dataArray.toString() !== arg.toString()) {
                    dataArray = arg;
                    dataType = Object.prototype.toString.call(dataArray[0]) == "[object Object]" ? 2 : 1;
                    if (dataType == 2) {
                        dataArray.unshift({ text: "", value: "" }, { text: "", value: "" });
                        dataArray.push({ text: "", value: "" }, { text: "", value: "" });
                    } else if (dataType == 1) {
                        dataArray.unshift("", "");
                        dataArray.push("", "");
                    };
                    dataArray.map(function (item) {
                        contentHTMLStr += "<div class='Picker_One_Column_content_item' data-str=" + (dataType == 2 ? JSON.stringify(item) : item) + ">" + (dataType == 2 ? item.text : item) + "</div>";
                    });

                }


                if (wrapperDom == null) {
                    wrapperDom = document.createElement("div"); maskDom = document.createElement("div");
                    wrapperDom.className = "Picker_One_Column_wrapper";
                    maskDom.setAttribute("component_picker_one_column", "");
                    wrapperDom.innerHTML = "    <div class='Picker_One_Column_header component_component_picker_one_column_row component_component_picker_one_column_vcenter'>\
                                                    <div class='Picker_One_Column_back'>取消</div><div class='component_component_picker_one_column_full'></div><div class='Picker_One_Column_ok'>确定</div>\
                                                </div>\
                                                <div class='Picker_One_Column_content_wrapper'>\
                                                    <div class='Picker_One_Column_content'>\
                                                         "+ contentHTMLStr.toString() + "\
                                                    </div>\
                                                    <div class='Picker_One_Column_line'></div><div class='Picker_One_Column_lines'></div>\
                                                </div>";
                    contentDom = wrapperDom.querySelector(".Picker_One_Column_content");
                    if (current.$) {
                        $(wrapperDom.querySelector(".Picker_One_Column_back")).on("touchend", function () {
                            arguments[0].stopPropagation(); arguments[0].preventDefault();
                            var result = defaultConfig.CancelCallback();
                            if (Object.prototype.toString.call(result) == "[object Boolean]" && !result) return;
                            closeComponent();
                        });
                        $(wrapperDom.querySelector(".Picker_One_Column_ok")).on("touchend", function () {
                            arguments[0].stopPropagation(); arguments[0].preventDefault();
                            var result = defaultConfig.ConfirmCallback(wrapperDom.dataset.str);
                            if (Object.prototype.toString.call(result) == "[object Boolean]" && !result) return;
                            closeComponent();
                        });
                        $(maskDom).on("touchend", function () {
                            arguments[0].stopPropagation(); arguments[0].preventDefault();
                            if (defaultConfig.autoHide) closeComponent();
                        })
                    } else {
                        wrapperDom.querySelector(".Picker_One_Column_back").addEventListener("click", function () {
                            var result = defaultConfig.CancelCallback();
                            if (Object.prototype.toString.call(result) == "[object Boolean]" && !result) return;
                            closeComponent();
                        }, false);
                        wrapperDom.querySelector(".Picker_One_Column_ok").addEventListener("click", function () {
                            var result = defaultConfig.ConfirmCallback(wrapperDom.dataset.str);
                            if (Object.prototype.toString.call(result) == "[object Boolean]" && !result) return;
                            closeComponent();
                        }, false);
                        maskDom.addEventListener("click", function () {
                            if (defaultConfig.autoHide) closeComponent();
                        }, false);
                    };
                    //添加滚动事件
                    contentDom.addEventListener("scroll", (function () {
                        var timer, autoScroll = false;
                        return function () {
                            if (autoScroll) { autoScroll = false; return; };
                            clearTimeout(timer); var currentDoms = this;
                            timer = setTimeout(function () {
                                var top = wrapperDom.querySelector(".Picker_One_Column_line").getBoundingClientRect().top + 20;
                                var left = parseFloat(config.winWidth) / 2
                                var currentDom = document.elementFromPoint(left, top);
                                if (currentDom) {
                                    [].map.call(wrapperDom.querySelectorAll(".Picker_One_Column_content_item"), function (item, index) {
                                        if (item == currentDom) {
                                            item.classList.add("Picker_One_Column_content_item-acitve");
                                            wrapperDom.dataset.str = item.dataset.str;
                                            currentDoms.children[index - 2].scrollIntoView(true);//触发滚动
                                        } else {
                                            item.classList.remove("Picker_One_Column_content_item-acitve");
                                        }
                                    });
                                }
                            }, 100);
                        };
                    })(), false);
                    document.body.appendChild(maskDom);
                    document.body.appendChild(wrapperDom);
                    insertStyle();
                } else if (dataArray.toString() !== arg.toString()) {
                    wrapperDom.querySelector(".Picker_One_Column_content").innerHTML = contentHTMLStr;
                };
                //关闭组件
                function closeComponent() {
                    maskDom.style.display = "none";
                    wrapperDom.style.transform = "translateY(100%) scale(0)";
                    wrapperDom.style.webkitTransform = "translateY(100%) scale(0)";
                }
            },
            //显示组件
            show: function (val) {
                if (dataArray.length < 1) {
                    console.error("初始化数据不能为空哦");
                    return;
                };
                val = val == null ? "" : val;
                maskDom.style.display = "block";
                requestAnimationFrame(function () {
                    wrapperDom.style.transform = "translateY(0) scale(1)";
                    wrapperDom.style.webkitTransform = "translateY(0) scale(1)";
                });
                var showDom;
                if (val == "") {
                    var doms = wrapperDom.querySelectorAll(".Picker_One_Column_content_item");
                    showDom = doms[0];
                    doms[2].classList.add("Picker_One_Column_content_item-acitve");
                    wrapperDom.dataset.str = doms[2].dataset.str;
                } else {
                    var doms = wrapperDom.querySelectorAll(".Picker_One_Column_content_item");
                    [].map.call(doms, function (item, index) {
                        var str = item.innerText == null || item.innerText == "" ? "测试数据" : item.innerText;
                        if (str == val) {
                            item.classList.add("Picker_One_Column_content_item-acitve");
                            wrapperDom.dataset.str = item.dataset.str;
                            showDom = doms[index - 2];//触发滚动
                        } else {
                            item.classList.remove("Picker_One_Column_content_item-acitve");
                        }
                    });
                }
                setTimeout(function () {
                    if (showDom) showDom.scrollIntoView(true);
                    else {
                        var doms = wrapperDom.querySelectorAll(".Picker_One_Column_content_item");
                        doms[0].scrollIntoView(true);
                        doms[2].classList.add("Picker_One_Column_content_item-acitve");
                        wrapperDom.dataset.str = doms[2].dataset.str;
                    }
                }, 100);
            }
        }
    })();
    //插入样式
    var insertStyle = (function () {
        var isInstered = false;
        return function () {
            if (isInstered) return;
            isInstered = true;
            var style = "[component_picker_one_column] {\
                            position: fixed;\
                            top: 0;\
                            left: 0;\
                            width: 100%;\
                            height: 100%;\
                            overflow: hidden;\
                            white-space: nowrap;\
                            background-color: rgba(0,0,0,0.3);\
                            z-index: 995;\
                            display:none;\
                        }\
                         .component_component_picker_one_column_row {\
                                    display: flexbox;\
                                    display: -webkit-flex;\
                                    display: flex;\
                         }\
                        .component_component_picker_one_column_full {\
                            flex: 1;\
                            -webkit-box-flex: 1;\
                            -webkit-flex: 1;\
                            width: 0%;\
                        }\
                        .component_component_picker_one_column_center {\
                            -webkit-box-pack: center;\
                            justify-content: center;\
                            -webkit-justify-content: center;\
                        }\
                        .component_component_picker_one_column_vcenter {\
                            -webkit-box-align: center;\
                            align-items: center;\
                            -webkit-align-items: center;\
                        }\
                         .Picker_One_Column_wrapper {\
                            position: fixed;\
                            bottom: 0;\
                            left: 0;\
                            width: 100%;\
                            background-color: #DDD;\
                            z-index: 999;\
                            transform: translateY(100%) scale(0);\
                            -webkit-transform: translateY(100%) scale(0);\
                            transition: transform .3s;\
                            -webkit-transition: transform .3s;\
                        }\
                        .Picker_One_Column_header {\
                            padding: 8px;\
                            background-color: #EEE;\
                            font-size: 12px;\
                            color: #888;\
                        }\
                        .Picker_One_Column_back {\
                            padding: 5px 10px;\
                            color: #333;\
                            border: 1px solid #CCC;\
                            border-radius: 3px;\
                            font-weight: 400;\
                        }\
                        .Picker_One_Column_ok {\
                            padding: 5px 10px;\
                            background-color: #FCB340;\
                            color: #FFF;\
                            font-weight: 400;\
                            border-radius: 3px;\
                        }\
                        .Picker_One_Column_content_wrapper {\
                            position: relative;\
                        }\
                        .Picker_One_Column_content {\
                            white-space: nowrap;\
                            overflow-y: auto;\
                            -webkit-overflow-scrolling: touch;\
                            height: 200px;\
                            text-align: center;\
                            color: #333;\
                        }\
                        .Picker_One_Column_content_item {\
                            height: 40px;\
                            line-height: 40px;\
                            white-space: nowrap;\
                            overflow: hidden;\
                        }\
                        .Picker_One_Column_content_item-acitve{\
                                font-size:18px;\
                                font-weight:bold;\
                         }\
                        .Picker_One_Column_line {\
                            position: absolute;\
                            top: 80px;\
                            left: 0;\
                            width: 100%;\
                            height: 1px;\
                            transform: translateY(-50%);\
                            -webkit-transform: translateY(-50%);\
                            background-color: rgba(0,0,0,0.1);\
                        }\
                        .Picker_One_Column_lines {\
                            position: absolute;\
                            top: 121px;\
                            left: 0;\
                            width: 100%;\
                            height: 1px;\
                            transform: translateY(-50%);\
                            -webkit-transform: translateY(-50%);\
                            background-color: rgba(0,0,0,0.1);\
                        }";
            var styleDom = document.createElement("style"); styleDom.type = "text/css";
            styleDom.innerHTML = style;
            document.head.appendChild(styleDom);
        }
    })();
}(window);