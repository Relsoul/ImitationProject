/**
 * Created by soul on 2016/2/27.
 */
(function ($, window) {
    var sidebarScroll = function () {
        var _id, _time
        var _scrollEvent = function () {
            return function () {
                var _scroll_val = $(this).scrollTop()
                var result = (window.innerHeight - $(_id).height()) / 2 + _scroll_val
                //console.log("body height", window.innerHeight, "scrool", $(this).scrollTop(), "sidebar height", $(_id).height(),"result_val",result)
                $(_id).stop().animate({
                    top: "+" + (result)
                }, _time)
            }
        }

        var _idScroll = function () {
            $(window).on("scroll", _scrollEvent())
        }

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
        var dynamicCalu=function(id){
            var a_length=$(id).children("a").length;
            var a_width=$(id).children("a").width();
            var span_length=$(id).children("span").length;
            var span_width=$(id).children("span").width();
            var result_width=a_width*a_length+span_length*span_width
            $(id).width(result_width)
            //console.log(result_width)
        };

        return{
            dynamicCalu:dynamicCalu
        }
    }()




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
        header.dynamicCalu(".games-drop")




    }


    init()

})($, window)