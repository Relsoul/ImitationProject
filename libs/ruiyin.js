/**
 * Created by soul on 2016/2/27.
 */
(function ($, window) {
    var sidebarScroll = function () {
        var _id, _time;
        var _scrollEvent = function () {
            return function () {
                var _scroll_val = $(this).scrollTop();
                var result = (window.innerHeight - $(_id).height()) / 2 + _scroll_val;
                //console.log("body height", window.innerHeight, "scrool", $(this).scrollTop(), "sidebar height", $(_id).height(),"result_val",result)
                $(_id).stop().animate({
                    top: "+" + (result)
                }, _time)
            }
        };

        var _idScroll = function () {
            $(window).on("scroll", _scrollEvent())
        };

        return {
            init: function (id, time) {
                if($(id).length<=0||!$(id)){
                    return false
                }
                _id = id;
                _time = time;
                _idScroll()
            }
        }
    };

    var header=function(){
        var dynamicCalu=function(id,val){
            var val=val||0;
            if(!$(id).length){
                return false
            }
            var a_length=$(id).children("a").length;
            var a_width=$(id).children("a").width();
            var span_length=$(id).children("span").length;
            var span_width=$(id).children("span").width();
            if(span_length<=0||!span_length){
                span_length=0;
                span_width=0;
            }
            var result_width=(a_width*a_length)+(span_length*span_width)+val;
            $(id).width(result_width);
            //console.log(result_width)
        };

         var setSubMenuClick=function(id){
             $(id).on("click","a",function(e){
                 var _click_elem=$(this).attr("href");
                 var hash=_click_elem.match(/#[a-zA-Z0-9_-]+/gi);
                 if(!hash){
                     return false;
                 }
                 hash=hash[0].substr(1);
                 $("."+hash+"-menu").click()
             })

         };

        return{
            dynamicCalu:dynamicCalu,
            setSubMenuClick:setSubMenuClick
        }
    }();


    var Tab=function(){
        var elem_id;

        var elemEvent=function(){
            return function(){
                var target_id=$(this).attr("target_act");
                $(this).siblings().removeClass("current");
                $(this).addClass("current");
                $("#"+target_id).removeClass("hide");
                $("#"+target_id).siblings().addClass("hide");
            }
        };


        return{
            init:function(elem_id){
                elem_id=elem_id;
                $(elem_id).on("click","a",elemEvent())
            }
        }
    };

    var LoginCurrent=function(id){
        var login_tab_id=id;
        var current_number=location.hash?location.hash.substr(1):0;
        var setLoginCurrent=function(){
            $(login_tab_id).removeClass("current");
            $(login_tab_id).eq(current_number).addClass("current");
        }

        return{
            setLoginCurrent:setLoginCurrent
        }
    };

    var LoginValiDate={
        strategies:{},
        showDialog:function(elem,msg){
            $(elem).show();
            $(elem).removeClass("valid-tips")
            $(elem).addClass("error-tips")
            $(elem).html(msg)
        },
        hideDialog:function(elem){
            $(elem).removeClass("error-tips")
            $(elem).addClass("valid-tips")
            $(elem).html("")
        },
        addStrategies:function(name,func) {
            this.strategies[name]=func
        },
        get:function(key){
            return this.strategies[key]
        }
    };

    var AuthController=Object.create(LoginValiDate);
    AuthController.setValidator=function(elem,rules){
        this.elem=$(elem);
        this.validateFunc=[];
        for(var i= 0,func_key;func_key=rules[i++];){
            this.validateFunc.push(function(func_key){
                return function(){
                    var rule=func_key["rule"].split(":");
                    var strte=rule.shift()
                    rule.unshift(this.elem.val());
                    rule.push(func_key.errorMesg);
                    var strategie=this.get(strte)
                    return strategie.apply(elem,rule)
                }
            }.call(this,func_key))
        }


    };
    AuthController.build=function(error_elem){
        this.error_elem=error_elem;
        this.elem.on("change",this.keyUpFunction.bind(this))
    };
    AuthController.keyUpFunction=function(e){
        var message=[];
        for(var i= 0,validate;validate=this.validateFunc[i++];){
            //单纯执行一次返回的是bind函数
            var errorMsg=validate.bind(this)()
            if(errorMsg){
                message.push(errorMsg)

            }
        }
        console.log(165,message)
        message.forEach(function(e,i){
            if(e){
                this.showDialog( this.error_elem,e)
            }
        },this)
        if(message.length<=0){
            this.hideDialog(this.error_elem)
        }
    };

    LoginValiDate.addStrategies("minLength",function(value,length,errorMsg){
        if(value.length<length){
            return errorMsg
        }
    });
    LoginValiDate.addStrategies("maxLength",function(value,length,errorMsg){
        if(value.length>length){
            return errorMsg
        }
    });
    LoginValiDate.addStrategies("onlyWordNumber",function(value,errorMsg){
        if(/[^0-9A-Za-z]/.test(value)){
            return errorMsg
        }
    })
    LoginValiDate.addStrategies("wordAndNumber",function(value,errorMsg){
        if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+$/.test(value))){
            return errorMsg
        }
    })
    LoginValiDate.addStrategies("identifyPassWord",function(value,indentifyElem,errorMsg){
        if($(indentifyElem).val()!=value){
            return errorMsg
        }
    })
    LoginValiDate.addStrategies("telephone",function(value,errorMsg){
        if(!(/^1[3|4|5|7|8][0-9]{9}$/.test(value))){
            return errorMsg
        }
    })


    var username=Object.create(AuthController);
    username.setValidator("#username",[{rule:"minLength:4",errorMesg:"用户名必须大于等于4"},{rule:"onlyWordNumber",errorMesg:"必须使用单词或者数字"},{rule:"maxLength:11",errorMesg:"用户名必须小于等于11"}]);
    username.build("#username + .error_info");

    var joinpwd=Object.create(AuthController);
    joinpwd.setValidator("#joinpwd",[{rule:"minLength:6",errorMesg:"密码长度必须大于等于6"},{rule:"maxLength:16",errorMesg:"密码长度必须小于等于16"},{rule:"wordAndNumber",errorMesg:"必须使用单词和数字组合"},])
    joinpwd.build("#joinpwd + .error_info");

    var indetifyPw=Object.create(AuthController);
    indetifyPw.setValidator("#indetifyPw",[{rule:"minLength:6",errorMesg:"密码长度必须大于等于6"},{rule:"maxLength:16",errorMesg:"密码长度必须小于等于16"},{rule:"wordAndNumber",errorMesg:"必须使用单词和数字组合"},{rule:"identifyPassWord:#joinpwd",errorMesg:"两次密码必须一致"}])
    indetifyPw.build("#indetifyPw + .error_info");

    var telephoneID=Object.create(AuthController);
    telephoneID.setValidator("#telephoneID",[{rule:"telephone",errorMesg:"请输入正确的手机号"}])
    telephoneID.build("#telephoneID + .error_info")




    //加载模块
    var init = function () {
        //侧边栏滚动
        var sideber = sidebarScroll();
        /*
         * id,滚动时间
         *
         * */
        sideber.init("#sideChatRight", 500);

        //动态计算header下子菜单高度
        header.dynamicCalu(".games-drop");
        header.dynamicCalu(".lottery-drop");
        header.dynamicCalu(".l-c-drop");
        header.dynamicCalu("#sports",5);
        header.dynamicCalu(".sports-drop");

        // set header when click * sub-menu  goto * this page and set this page relevant sub-menu current

        header.setSubMenuClick(".games-drop");
        header.setSubMenuClick(".lottery-drop");

        //体育赛事选项卡切换模块
        if($("#sports").length>0){
            var sportsTab=Tab();
            sportsTab.init("#sports","#sports>a")
        }

        //set loginTab form url hash
        if($(".layout .items-tab a").length>0){
            var login=LoginCurrent(".layout .items-tab a");
            login.setLoginCurrent()
        }

    };


    init()

})($, window);