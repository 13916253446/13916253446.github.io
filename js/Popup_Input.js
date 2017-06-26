//弹窗输入框组件
(function (current) {
    if (!current.yyq_components) current.yyq_components = {};
    yyq_components.popup_input = (function () {
        var initObj = {
            Title: "标题",
            Content: "",
            InputType: "text",
            ConfirmContent: "确定",
            CancelContent: "取消",
            ConfirmCallback: function () { },
            CancelCallback: function () { }
        };
        var maskDom, wrapperDom, isFirstShow = false;
        //隐藏DOM
        function hideDom() {
            maskDom.style.display = "none";
            wrapperDom.style.transform = "translate(-50%,-50%) scale(0)";
            wrapperDom.style.webkitTransform = "translate(-50%,-50%) scale(0)";
        }
        return {
            show: function (option) {
                if (Object.prototype.toString.call(option) == "[object Object]") {
                    for (var item in option) {
                        if (initObj[item] != null) initObj[item] = option[item];
                    }
                };
                if (wrapperDom == null) {
                    isFirstShow = true;
                    maskDom = document.createElement("div"); maskDom.setAttribute("component_input", "");
                    wrapperDom = document.createElement("div"); wrapperDom.className = "popup_input_wrapper";
                    wrapperDom.innerHTML = "\
                                        <div>\
                                            <div class='popup_input_inner'>\
                                                <div class='popup_input_title'>昵称</div>\
                                                <div class='pupop_input_title_tip'>请输入昵称：</div>\
                                                <input class='popup_input_content' type='"+ initObj.InputType + "' value='' />\
                                            </div>\
                                            <div class='popup_input_line'></div>\
                                            <div class='popup_input_btn_wrapper'>\
                                                <div class='component_input_row component_input_vcenter'>\
                                                    <div class='popup_input_btn_clear popup_input_btn component_input_full'>清除</div>\
                                                    <div class='popup_input_btn_ok popup_input_btn component_input_full'>确定</div>\
                                                </div>\
                                                <div class='popup_input_lines'></div>\
                                            </div>\
                                        </div>";
                    document.body.appendChild(maskDom);
                    document.body.appendChild(wrapperDom);
                    insertStyle();
                    if (current.$) {
                        $(wrapperDom.querySelector(".popup_input_btn_clear")).on("touchend", function () {
                            arguments[0].stopPropagation(); arguments[0].preventDefault();
                            var val = wrapperDom.querySelector("input").value.trim();
                            var result = initObj.CancelCallback(val);
                            if (Object.prototype.toString.call(result) == "[object Boolean]" && !result) return;
                            hideDom();
                        });
                        $(wrapperDom.querySelector(".popup_input_btn_ok")).on("touchend", function () {
                            arguments[0].stopPropagation(); arguments[0].preventDefault();
                            var val = wrapperDom.querySelector("input").value.trim();
                            var result = initObj.ConfirmCallback(val);
                            if (Object.prototype.toString.call(result) == "[object Boolean]" && !result) return;
                            hideDom();
                        });
                        $(maskDom).on("touchend", function () {
                            arguments[0].stopPropagation(); arguments[0].preventDefault();
                            hideDom();
                        });
                    } else {
                        wrapperDom.querySelector(".popup_input_btn_clear").addEventListener("click", function () {
                            arguments[0].stopPropagation(); arguments[0].preventDefault();
                            var val = wrapperDom.querySelector("input").value.trim();
                            var result = initObj.CancelCallback(val);
                            if (Object.prototype.toString.call(result) == "[object Boolean]" && !result) return;
                            hideDom();
                        }, false);
                        wrapperDom.querySelector(".popup_input_btn_ok").addEventListener("click", function () {
                            arguments[0].stopPropagation(); arguments[0].preventDefault();
                            var val = wrapperDom.querySelector("input").value.trim();
                            var result = initObj.ConfirmCallback(val);
                            if (Object.prototype.toString.call(result) == "[object Boolean]" && !result) return;
                            hideDom();
                        }, false);
                        maskDom.addEventListener("click", hideDom, false);
                    }
                };
                if (option.InputType && option.InputType != initObj.InputType) wrapperDom.querySelector(".popup_input_content").setAttribute("type", option.InputType);
                wrapperDom.querySelector(".popup_input_title").innerHTML = initObj.Title;
                wrapperDom.querySelector(".pupop_input_title_tip").innerHTML = "请输入" + initObj.Title + "：";
                wrapperDom.querySelector(".popup_input_content").value = initObj.Content;
                wrapperDom.querySelector(".popup_input_btn_clear").innerHTML = initObj.CancelContent;
                wrapperDom.querySelector(".popup_input_btn_ok").innerHTML = initObj.ConfirmContent;

                maskDom.style.display = "block";
                if (isFirstShow) setTimeout(showDom, 100);
                else showDom();
                isFirstShow = false;
                function showDom() {
                    wrapperDom.style.transform = "translate(-50%,-50%) scale(1)";
                    wrapperDom.style.webkitTransform = "translate(-50%,-50%) scale(1)";
                }
            }
        }
    })();
    //插入样式
    var insertStyle = (function () {
        var isInstered = false;
        return function () {
            if (isInstered) return;
            isInstered = true;
            var style = "[component_input] {\
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
                         .component_input_row {\
                                    display: flexbox;\
                                    display: -webkit-flex;\
                                    display: flex;\
                         }\
                        .component_input_full {\
                            flex: 1;\
                            -webkit-box-flex: 1;\
                            -webkit-flex: 1;\
                            width: 0%;\
                        }\
                        .component_input_center {\
                            -webkit-box-pack: center;\
                            justify-content: center;\
                            -webkit-justify-content: center;\
                        }\
                        .component_input_vcenter {\
                            -webkit-box-align: center;\
                            align-items: center;\
                            -webkit-align-items: center;\
                        }\
                        .popup_input_wrapper {\
                            position: fixed;\
                            top: 50%;\
                            left: 50%;\
                            transform: translate(-50%,-50%) scale(0);\
                            -webkit-transform: translate(-50%,-50%) scale(0);\
                            transition: transform;\
                            -webkit-transition: transform .3s;\
                            will-change: transform;\
                            background-color: rgba(255,255,255,0.95);\
                            border-radius: 13px;\
                            width: 280px;\
                            z-index:999;\
                        }\
                        .popup_input_content{\
                            box-sizing:border-box;\
                            -webkit-box-sizing:border-box;\
                            -webkit-appearance:none;\
                        }\
                        .popup_input_inner {\
                            padding: 12px;\
                        }\
                        .popup_input_title {\
                            color: #000;\
                            text-align: center;\
                            font-size: 18px;\
                        }\
                        .pupop_input_title_tip {\
                            color: #000;\
                            text-align: center;\
                            font-size: 14px;\
                        }\
                        .popup_input_inner input {\
                            padding: 8px;\
                            width: 100%;\
                            margin-top: 20px;\
                            -webkit-appearance: none;\
                            font-size: 16px;\
                            border-width: 1px;\
                            border-color: #DDD;\
                        }\
                        input:focus {\
                            outline: 0;\
                        }\
                        .popup_input_btn_wrapper {\
                            text-align: center;\
                            color: #fcb340;\
                            padding: 10px 0;\
                            position: relative;\
                        }\
                        .popup_input_btn {\
                            text-align: center;\
                        }\
                        .popup_input_line {\
                                width: 100%;\
                                height: 1px;\
                                transform: scaleY(.5);\
                                -webkit-transform: scaleY(.5);\
                                background-color: #DDD;\
                         }\
                        .popup_input_lines {\
                            position: absolute;\
                            top: 0;\
                            left: 50%;\
                            transform: translateX(-50%) scaleX(.5);\
                            -webkit-transform: translateX(-50%) scaleX(.5);\
                            width: 1px;\
                            height: 100%;\
                            background-color: #DDD;\
                        }";
            var styleDom = document.createElement("style"); styleDom.type = "text/css";
            styleDom.innerHTML = style;
            document.head.appendChild(styleDom);
        }
    })();
})(window);