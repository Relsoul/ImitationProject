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
    }




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