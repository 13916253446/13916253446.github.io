//日期YYYY-MM-dd格式日期控件
!function (current) {
    var config = {//配置基本信息
        winWidth: document.documentElement.clientWidth,
    };
    if (!current.yyq_components) current.yyq_components = {};
    var requestAnimationFrame = current.requestAnimationFrame || current.webkitRequestAnimationFrame || function (currentBack) { setTimeout(callBack(), 1000 / 60) };
    yyq_components.picker_date = (function () {
        var maskDom, wrapperDom, yearContentDom, monthContentDom, dateContentDom;
        var defaultConfig = {//组件默认配置
            autoHide: true,//是否点击组件外部自动隐藏组件
            MaxYear: new Date().getFullYear() + 5,
            MinYear: new Date().getFullYear() - 50,
            ConfirmCallback: function () { },
            CancelCallback: function () { }
        };
        //生成年份
        var makeYear = (function () {
            var oldStr = "";
            return function () {
                var newStr = "<div class='component_picker_date_item'></div><div class='component_picker_date_item'></div>", option = { isNew: false, domStr: "" };
                for (var i = parseInt(defaultConfig.MinYear) ; i <= parseInt(defaultConfig.MaxYear) ; i++) {
                    newStr += "<div class='component_picker_date_item'>" + i + "</div>";
                };
                newStr += "<div class='component_picker_date_item'></div><div class='component_picker_date_item'></div>";
                if (oldStr == newStr) option.isNew = false;
                else {
                    oldStr = newStr;
                    option.isNew = true;
                }
                option.domStr = newStr;
                return option;
            };
        })();
        //月份
        var monthStr = (function () {
            var monthDom = "";
            ["", "", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "", ""].map(function (item) {
                monthDom += "<div class='component_picker_date_item'>" + item + "</div>";
            });
            return monthDom;
        })();
        //具体某一天
        var dayStr = (function () {
            var newStr = "<div class='component_picker_date_item'></div><div class='component_picker_date_item'></div>";
            for (var i = 1; i < 32; i++) {
                var str = (i < 10) ? ("0" + i) : (i + "");
                newStr += "<div class='component_picker_date_item'>" + str + "</div>";
            };
            newStr += "<div class='component_picker_date_item'></div><div class='component_picker_date_item'></div>";
            return newStr;
        })();
        return {
            initData: function (option) {
                if (Object.prototype.toString.call(option) == "[object Object]") {
                    for (var item in option) {
                        if (defaultConfig[item] != null) defaultConfig[item] = option[item];
                    }
                };
                if (parseInt(defaultConfig.MaxYear - parseInt(defaultConfig.MinYear) < 0)) {
                    console.error("最小年份不能大于最大年份");
                    return;
                };
                if (wrapperDom == null) {
                    wrapperDom = document.createElement("div"); wrapperDom.className = "component_picker_date_wrapper";
                    maskDom = document.createElement("div"); maskDom.className = "component_picker_date_mask";
                    wrapperDom.innerHTML = "<div class='component_picker_date_header component_picker_date_row component_picker_date_vcenter'>\
                                                <div class='component_picker_date_back'>取消</div><div class='component_picker_date_full'></div><div class='component_picker_date_ok'>确定</div>\
                                            </div>\
                                            <div class='component_picker_date_content_wrapper'>\
                                                <div class='component_picker_date_content component_picker_date_row component_picker_date_vcenter'>\
                                                    <div class='component_picker_date_full component_picker_date_year component_picker_date_item_wrapper'>\
                                                                "+ makeYear().domStr.toString() + "\
                                                    </div>\
                                                    <div class='component_picker_date_full component_picker_date_month component_picker_date_item_wrapper'>\
                                                                "+ monthStr + "\
                                                    </div>\
                                                    <div class='component_picker_date_full component_picker_date_date component_picker_date_item_wrapper'>\
                                                                "+ dayStr + "\
                                                    </div>\
                                                </div>\
                                                <div class='component_picker_date_line'></div><div class='component_picker_date_lines'></div>\
                                            </div>";
                    yearContentDom = wrapperDom.querySelector(".component_picker_date_year");
                    monthContentDom = wrapperDom.querySelector(".component_picker_date_month");
                    dateContentDom = wrapperDom.querySelector(".component_picker_date_date");
                    if (current.$) {
                        $(wrapperDom.querySelector(".component_picker_date_back")).on("touchend", function () {
                            arguments[0].stopPropagation(); arguments[0].preventDefault();
                            var result = defaultConfig.CancelCallback();
                            if (Object.prototype.toString.call(result) == "[object Boolean]" && !result) return;
                            closeComponent();
                        });
                        $(wrapperDom.querySelector(".component_picker_date_ok")).on("touchend", function () {
                            arguments[0].stopPropagation(); arguments[0].preventDefault();
                            var str = wrapperDom.dataset.year + "-" + wrapperDom.dataset.month + "-" + wrapperDom.dataset.date;
                            var result = defaultConfig.ConfirmCallback(str);
                            if (Object.prototype.toString.call(result) == "[object Boolean]" && !result) return;
                            closeComponent();
                        });
                        $(maskDom).on("touchend", function () {
                            arguments[0].stopPropagation(); arguments[0].preventDefault();
                            if (defaultConfig.autoHide) closeComponent();
                        })
                    } else {
                        wrapperDom.querySelector(".component_picker_date_back").addEventListener("click", function () {
                            var result = defaultConfig.CancelCallback();
                            if (Object.prototype.toString.call(result) == "[object Boolean]" && !result) return;
                            closeComponent();
                        }, false);
                        wrapperDom.querySelector(".component_picker_date_ok").addEventListener("click", function () {
                            var str = wrapperDom.dataset.year + "-" + wrapperDom.dataset.month + "-" + wrapperDom.dataset.date;
                            var result = defaultConfig.ConfirmCallback(str);
                            if (Object.prototype.toString.call(result) == "[object Boolean]" && !result) return;
                            closeComponent();
                        }, false);
                        maskDom.addEventListener("click", function () {
                            if (defaultConfig.autoHide) closeComponent();
                        }, false);
                    };
                    yearContentDom.addEventListener("scroll", (function () {//弹窗滚动事件
                        var timer, autoScroll = false;
                        return function () {
                            if (autoScroll) { autoScroll = false; return; };
                            clearTimeout(timer); var current = this;
                            timer = setTimeout(function () {
                                var top = wrapperDom.querySelector(".component_picker_date_line").getBoundingClientRect().top + 20;
                                var left = parseFloat(config.winWidth) / 6
                                var currentDom = document.elementFromPoint(left, top);
                                if (currentDom) {
                                    [].map.call(yearContentDom.querySelectorAll(".component_picker_date_item"), function (item, index) {
                                        if (item == currentDom) {
                                            item.classList.add("component_picker_date_item_acitve");
                                            wrapperDom.dataset.year = item.innerText.trim();
                                            current.children[index - 2].scrollIntoView(true);//触发滚动
                                        } else {
                                            item.classList.remove("component_picker_date_item_acitve");
                                        }
                                    });
                                    tranformDateComponten();
                                }
                            }, 100);
                        };
                    })(), false);
                    monthContentDom.addEventListener("scroll", (function () {//弹窗滚动事件
                        var timer, autoScroll = false;
                        return function () {
                            if (autoScroll) { autoScroll = false; return; };
                            clearTimeout(timer); var current = this;
                            timer = setTimeout(function () {
                                var top = wrapperDom.querySelector(".component_picker_date_line").getBoundingClientRect().top + 20;
                                var left = parseFloat(config.winWidth) / 6 * 3;
                                var currentDom = document.elementFromPoint(left, top);
                                if (currentDom) {
                                    [].map.call(current.querySelectorAll(".component_picker_date_item"), function (item, index) {
                                        if (item == currentDom) {
                                            item.classList.add("component_picker_date_item_acitve");
                                            wrapperDom.dataset.month = item.innerText.trim();
                                            current.children[index - 2].scrollIntoView(true);//触发滚动
                                        } else {
                                            item.classList.remove("component_picker_date_item_acitve");
                                        }
                                    });
                                    tranformDateComponten();
                                }
                            }, 100);
                        };
                    })(), false);
                    dateContentDom.addEventListener("scroll", (function () {//弹窗滚动事件
                        var timer, autoScroll = false;
                        return function () {
                            if (autoScroll) { autoScroll = false; return; };
                            clearTimeout(timer); var current = this;
                            timer = setTimeout(function () {
                                var top = wrapperDom.querySelector(".component_picker_date_line").getBoundingClientRect().top + 20;
                                var left = parseFloat(config.winWidth) / 6 * 5;
                                var currentDom = document.elementFromPoint(left, top);
                                if (currentDom) {
                                    [].map.call(current.querySelectorAll(".component_picker_date_item"), function (item, index) {
                                        if (item == currentDom) {
                                            item.classList.add("component_picker_date_item_acitve");
                                            wrapperDom.dataset.date = item.innerText.trim();
                                            current.children[index - 2].scrollIntoView(true);//触发滚动
                                        } else {
                                            item.classList.remove("component_picker_date_item_acitve");
                                        }
                                    });
                                }
                            }, 100);
                        };
                    })(), false);
                    document.body.appendChild(maskDom);
                    document.body.appendChild(wrapperDom);
                    insertStyle();
                } else {
                    var obj = makeYear();
                    if (obj.isNew) yearContentDom.innerHTML = makeYear().domStr;
                }
                //关闭组件
                function closeComponent() {
                    maskDom.style.display = "none";
                    wrapperDom.style.transform = "translateY(100%) scale(0)";
                    wrapperDom.style.webkitTransform = "translateY(100%) scale(0)";
                }
            },
            show: function (val) {
                var initValue = val == null || val == "" ? new Date() : val;
                var initYear = new Date(initValue.replace(/-/g, "/")).getFullYear();
                var initMonth = new Date(initValue.replace(/-/g, "/")).getMonth() + 1;
                var initDate = new Date(initValue.replace(/-/g, "/")).getDate();
                var showDom1, showDom2, showDom3;
                [].map.call(yearContentDom.querySelectorAll(".component_picker_date_item"), function (item, index) {
                    var str = item.innerText == null || item.innerText == "" ? 0 : item.innerText;
                    if (parseInt(str) == parseInt(initYear)) {
                        item.classList.add("component_picker_date_item_acitve");
                        wrapperDom.dataset.year = str.trim();
                        showDom1 = yearContentDom.children[index - 2];//触发滚动
                    } else {
                        item.classList.remove("component_picker_date_item_acitve");
                    }
                });
                [].map.call(monthContentDom.querySelectorAll(".component_picker_date_item"), function (item, index) {
                    var str = item.innerText == null || item.innerText == "" ? 0 : item.innerText;
                    if (parseInt(str) == parseInt(initMonth)) {
                        item.classList.add("component_picker_date_item_acitve");
                        wrapperDom.dataset.month = str.trim();
                        showDom2 = monthContentDom.children[index - 2];//触发滚动
                    } else {
                        item.classList.remove("component_picker_date_item_acitve");
                    }
                });
                [].map.call(dateContentDom.querySelectorAll(".component_picker_date_item"), function (item, index) {
                    var str = item.innerText == null || item.innerText == "" ? 0 : item.innerText;
                    if (parseInt(str) == parseInt(initDate)) {
                        item.classList.add("component_picker_date_item_acitve");
                        wrapperDom.dataset.date = str.trim();
                        showDom3 = dateContentDom.children[index - 2];//触发滚动
                    } else {
                        item.classList.remove("component_picker_date_item_acitve");
                    }
                });
                maskDom.style.display = "block";
                requestAnimationFrame(function () {
                    wrapperDom.style.transform = "translateY(0) scale(1)";
                    wrapperDom.style.webkitTransform = "translateY(0) scale(1)";
                });
                if (showDom1 == null) {
                    showDom1 = yearContentDom.children[0];
                    yearContentDom.children[2].classList.add("component_picker_date_item_acitve");
                };
                if (showDom2 == null) {
                    showDom2 = monthContentDom.children[0];
                    monthContentDom.children[2].classList.add("component_picker_date_item_acitve");
                };
                if (showDom3 == null) {
                    showDom3 = dateContentDom.children[0];
                    dateContentDom.children[2].classList.add("component_picker_date_item_acitve");
                };
                var currentTimer = setTimeout(function () {
                    showDom1.scrollIntoView(true); showDom2.scrollIntoView(true); showDom3.scrollIntoView(true);
                    clearInterval(currentTimer);
                }, 100);
            }
        };
        //计算每月多少天
        function monthSize(oDate) {
            oDate = oDate ? oDate : new Date();
            var year = oDate.getFullYear(),
                month = oDate.getMonth(),
                _oDate = new Date();
            _oDate.setFullYear(year);
            _oDate.setMonth(month, 0);
            return _oDate.getDate();
        };
        //格式化日期控件 
        function tranformDateComponten() {
            if (yearContentDom == null || monthContentDom == null || dateContentDom==null) return;
            var currentYear = yearContentDom.querySelector(".component_picker_date_item_acitve").innerText;
            var currentMonth = monthContentDom.querySelector(".component_picker_date_item_acitve").innerText;
            var maxDay = monthSize(new Date(currentYear, currentMonth, "01"));
            [].map.call(dateContentDom.querySelectorAll(".component_picker_date_item"), function (item) {
                var currentDay = parseInt(item.innerText == null || item.innerText == "" ? 0 : item.innerText);
                if (currentDay > maxDay) {
                    item.classList.remove("component_picker_date_item_acitve");
                    item.style.display = "none";
                } else {
                    item.style.display = "block";
                }
            });
        };
    })();
    //插入样式
    var insertStyle = (function () {
        var isInstered = false;
        return function () {
            if (isInstered) return;
            isInstered = true;
            var style = ".component_picker_date_mask {\
                            background-color: rgba(0,0,0,0.3);\
                            position: fixed;\
                            z-index: 995;\
                            top: 0;\
                            left: 0;\
                            width: 100%;\
                            height: 100%;\
                        }\
                        .component_picker_date_row {\
                                    display: flexbox;\
                                    display: -webkit-flex;\
                                    display: flex;\
                         }\
                        .component_picker_date_full {\
                            flex: 1;\
                            -webkit-box-flex: 1;\
                            -webkit-flex: 1;\
                            width: 0%;\
                        }\
                        .component_picker_date_center {\
                            -webkit-box-pack: center;\
                            justify-content: center;\
                            -webkit-justify-content: center;\
                        }\
                        .component_picker_date_vcenter {\
                            -webkit-box-align: center;\
                            align-items: center;\
                            -webkit-align-items: center;\
                        }\
                        .component_picker_date_wrapper {\
                            position: fixed;\
                            bottom: 0;\
                            left: 0;\
                            width: 100%;\
                            overflow: hidden;\
                            z-index: 998;\
                            background-color: #DDD;\
                            transform: translateY(100%) scale(0);\
                            -webkit-transform: translateY(100%) scale(0);\
                            transition: transform .3s;\
                            -webkit-transition: transform .3s;\
                        }\
                        .component_picker_date_header {\
                            padding: 8px;\
                            background-color: #EEE;\
                            font-size: 12px;\
                            color: #888;\
                        }\
                        .component_picker_date_back {\
                            padding: 5px 10px;\
                            color: #333;\
                            border: 1px solid #CCC;\
                            border-radius: 3px;\
                            font-weight: 400;\
                        }\
                        .component_picker_date_ok {\
                            padding: 5px 10px;\
                            background-color: #FCB340;\
                            color: #FFF;\
                            font-weight: 400;\
                            border-radius: 3px;\
                        }\
                        .component_picker_date_line {\
                            position: absolute;\
                            top: 80px;\
                            left: 0;\
                            width: 100%;\
                            height: 1px;\
                            transform: translateY(-50%);\
                            -webkit-transform: translateY(-50%);\
                            background-color: rgba(0,0,0,0.1);\
                        }\
                        .component_picker_date_lines {\
                            position: absolute;\
                            top: 121px;\
                            left: 0;\
                            width: 100%;\
                            height: 1px;\
                            transform: translateY(-50%);\
                            -webkit-transform: translateY(-50%);\
                            background-color: rgba(0,0,0,0.1);\
                        }\
                        .component_picker_date_content_wrapper {\
                            position: relative;\
                        }\
                        .component_picker_date_item_wrapper {\
                            white-space: nowrap;\
                            overflow-y: auto;\
                            -webkit-overflow-scrolling: touch;\
                            height: 200px;\
                            text-align: center;\
                            color: #333;\
                        }\
                        component_picker_date_item_wrapper::-webkit-scrollbar {\
                            display: none;\
                        }\
                        .component_picker_date_item {\
                            height: 40px;\
                            line-height: 40px;\
                            white-space: nowrap;\
                            overflow: hidden;\
                        }\
                        .component_picker_date_item_acitve {\
                            font-size: 18px;\
                            font-weight: bold;\
                        }";
            var styleDom = document.createElement("style"); styleDom.type = "text/css";
            styleDom.innerHTML = style;
            document.head.appendChild(styleDom);
        }
    })();
}(window);