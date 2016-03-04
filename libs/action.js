// JavaScript Document
//导航
function ActionNav(id) {
    $(id).hover(function () {        
        $(this).children(".green_bg").fadeIn(200, function () {
            $(id).children(".ico_show").removeClass("bg1").addClass("bg2");
        });        
    },
    function () {  
        $(this).children(".green_bg").fadeOut(200, function () {
            $(id).children(".ico_show").removeClass("bg2").addClass("bg1");
        });
    });
}
ActionNav(".nav_1");
ActionNav(".nav_2");
ActionNav(".nav_3");
ActionNav(".nav_4");
ActionNav(".nav_5");
ActionNav(".nav_6");
ActionNav(".nav_7");
ActionNav(".nav_8");

//客服按钮
$(".kefu a").hover(function() {  
		$(this).children(".toll_img").animate({
			top: '-95px'
		},
		500); 	
		$(this).children(".toll_info").animate({
			top: '0px'
		},
		500);		    
    },
    function() {
		$(this).children(".toll_img").animate({
			top: '0px'
		},
		500); 
		$(this).children(".toll_info").animate({
			top: '95px'
		},
		500); 
})

//页面切换效果


//快速数字按钮
function ActionNumQuick(id) {
    $(id).hover(function() {
			$(this).children(".playico").animate({
				right: '20px'
			},
			500);			    
    },
    function() {		
			$(this).children(".playico").animate({
				right: '120px'
			},
			500);						
    });
}
ActionNumQuick(".num_01");
ActionNumQuick(".num_02");
ActionNumQuick(".num_03");

//工作
function ShowJob() {
    $("#get_job").show();
    $("#get_job").fadeIn("slow");
    $(".box").addClass("cover");
    FloatAction("get_job");
}
function CloseJob() {
    $("#get_job").fadeOut("slow");
    $(".box").removeClass("cover");
}
$(".btn_close2").bind("click", function () {
    CloseJob();
});

//注册
function ShowReg() {
    $("#RegFloat").show();
    $("#RegFloat").animate({
        top: '150px'
    },
    400);
    $(".box").addClass("cover");
    FloatAction("RegFloat");
}
function CloseReg() {
    $("#RegFloat").animate({
        top: '-800px'
    },
    400, 
    function() {
        $(this).hide();
    });
    $(".box").removeClass("cover");
}

//忘记密码
function ShowForget() {
    $("#ForgetFloat").show();
    $("#ForgetFloat").animate({
        top: '150px'
    },
    400);
    $(".box").addClass("cover");
    FloatAction("ForgetFloat");
}

$(".btn_close3").bind("click", function () {
    CloseForget();
});

function CloseForget() {
    $("#ForgetFloat").animate({
        top: '-800px'
    },
    400,
    function () {
        $(this).hide();
    });
    $(".box").removeClass("cover");
}

function FloatAction(id) {
    var tips;
    var theTop = 150;
    /*这是默认高度,越大越往下*/    
    var old = theTop;
    function initFloatTips() {
        tips = document.getElementById(id);
        moveTips();
    };
    function moveTips() {
        var tt = 50;
        if (window.innerHeight) {
            pos = window.pageYOffset
        }
        else if (document.documentElement && document.documentElement.scrollTop) {
            pos = document.documentElement.scrollTop
        }
        else if (document.body) {
            pos = document.body.scrollTop;
        }

        pos = pos - tips.offsetTop + theTop;
        pos = tips.offsetTop + pos / 10;

        if (pos < theTop) pos = theTop;
        if (pos != old) {
            tips.style.top = pos + "px";
            tt = 10;
            //alert(tips.style.top);
        }

        old = pos;
        setTimeout(moveTips, tt);
    }
    //!]]>
    initFloatTips();
}

//真人娱乐切换
//function ChangeLeftnav(num){	
//	$(".rightanimated>div").css({"display":"none"}).eq(num).attr("style","");	
//	$(".leftnav li").removeClass("hover").eq(num).attr("class","hover");
//	$(".leftnav>ul>li>.arrow-right").attr("style","").eq(num).css({"display":"block"});	
//	window.setTimeout(function(){
//		$(".rightanimated>div>#left_animated").removeClass("leftplay").eq(num).addClass("leftplay");
//		$(".rightanimated>div>#right_animated").removeClass("rightplay").eq(num).addClass("rightplay");
//	},20)	;	
//}

function ChangeLeftnav(num) {
    $(".rightanimated>div").css({ "display": "none" }).eq(num).attr("style", "");
    $(".leftnav li").removeClass("hover").eq(num).attr("class", "hover");
    $(".leftnav>ul>li>.arrow-right").attr("style", "").eq(num).css({ "display": "block" });
    window.setTimeout(function () {
        //$(".rightanimated>div>#left_animated").removeClass("leftplay").eq(num).addClass("leftplay");
        //$(".rightanimated>div>#right_animated").removeClass("rightplay").eq(num).addClass("rightplay");
        $(".gamebg").removeClass("display").eq(num).addClass("display");
        $(".flplane").removeClass("myflplane").eq(num).addClass("myflplane");
    }, 20);

    window.setTimeout(function () {
        $(".webonline").removeClass("webflght").eq(num).addClass("webflght");
        $(".ondownload").removeClass("downloadflght").eq(num).addClass("downloadflght");
        $(".phonebox").removeClass("phoneflght").eq(num).addClass("phoneflght");
    }, 3000);
}

function ActionCasinoBtn(id) {
    $(id).hover(function () {
        $(this).children(".cloud02").animate({
            left: '20px'
        },
        300);
        $(this).children(".cloud01").animate({
            left: '90px'
        },
        300);
        $(this).children(".imgpic").animate({
            top: '10px'
        },
        300);
    },
    function () {
        $(this).children(".cloud02").animate({
            left: '30px'
        },
        300);
        $(this).children(".cloud01").animate({
            left: '80px'
        },
        300);
        $(this).children(".imgpic").animate({
            top: '20px'
        },
        300);

    });
}
ActionCasinoBtn(".webonline");
ActionCasinoBtn(".ondownload");
ActionCasinoBtn(".phonebox");






//钱包状态切换
function ChangeAccountnav(num){	
	$(".color_box li").css({"display":"none"}).eq(num).attr("style","");	
	$(".color_nav li").removeClass("hover").eq(num).attr("class","hover");	
}

//资料、表单通用切换
function ChangeCutnav(num){	
	$(".cut_nav>ul>li>.arrow-right3").attr("style","").eq(num).css({"display":"block"});	
	$(".cut_box dl").removeClass("block").eq(num).attr("class","block");	
	$(".cut_nav li").removeClass("hover").eq(num).attr("class","hover");	
}

//存款切换
function ShowCashierTable(num) {
	$(".cashier_table").hide();
	$("#CashierTable_" + num).show();
}


//=点击展开关闭效果=
function openShutManager(oSourceObj,oTargetObj,shutAble,oOpenTip,oShutTip){
var sourceObj = typeof oSourceObj == "string" ? document.getElementById(oSourceObj) : oSourceObj;
var targetObj = typeof oTargetObj == "string" ? document.getElementById(oTargetObj) : oTargetObj;
var openTip = oOpenTip || "";
var shutTip = oShutTip || "";
if(targetObj.style.display!="none"){
   if(shutAble) return;
   targetObj.style.display="none";
   if(openTip  &&  shutTip){
    sourceObj.innerHTML = shutTip; 
   }
} else {
   targetObj.style.display="block";
   if(openTip  &&  shutTip){
    sourceObj.innerHTML = openTip; 
   }
}
}

//帮助中心导航
function setMenuStyle() {
    $(".collapsed").css({ 'display': 'none' });
    $(".help_nav>ul>li>a").bind('click', function () {
        $(".collapsed").css({ 'display': 'none' });
        $(this).next().css({ 'display': 'block' });
    });

    show('aboutus.html');
    var name = getParamValue('name');
    show(name + '.html');
}

function show(url) {
    jQuery('.help_content_box').load(url);
}
setMenuStyle();

//合营联盟导航
function setHyMenuStyle() {
    $(".collapsed2").css({ 'display': 'none' });
    $(".agent_nav>ul>li>a").bind('click', function () {
        $(".collapsed2").css({ 'display': 'none' });
        $(this).next().css({ 'display': 'block' });
    });

    showhy('about.html');
    var name = getParamValue('name');
    showhy(name + '.html');
}

function showhy(url) {
    jQuery('.agent_content_box').load(url);
}
setHyMenuStyle();

// 获取地址栏的参数数组
function getUrlParams() {
    var search = window.location.search;
    // 写入数据字典
    var tmparray = search.substr(1, search.length).split("&");
    var paramsArray = new Array;
    if (tmparray != null) {
        for (var i = 0; i < tmparray.length; i++) {
            var reg = /[=|^==]/;    // 用=进行拆分，但不包括==
            var set1 = tmparray[i].replace(reg, '&');
            var tmpStr2 = set1.split('&');
            var array = new Array;
            array[tmpStr2[0]] = tmpStr2[1];
            paramsArray.push(array);
        }
    }
    // 将参数数组进行返回
    return paramsArray;
}
// 根据参数名称获取参数值
function getParamValue(name) {
    var paramsArray = getUrlParams();
    if (paramsArray != null) {
        for (var i = 0 ; i < paramsArray.length ; i++) {
            for (var j in paramsArray[i]) {
                if (j == name) {
                    return paramsArray[i][j];
                }
            }
        }
    }
    return null;
}


//手机版下拉 gamerbox下拉


$(".quick_nav_box .phone_c").mouseenter(function () {
    $(".hide_sphone").delay(500).slideDown("fast");
    $(".hide_gamerbox").delay(200).slideUp("fast");
});

$(".quick_nav_box .gamerbox_c").mouseenter(function () {
    $(".hide_gamerbox").delay(500).slideDown("fast");
    $(".hide_sphone").delay(200).slideUp("fast");
});

$(".quick_nav_box").mouseleave(function () {
    $(".hide_sphone").delay(500).slideUp("fast");
    $(".hide_gamerbox").delay(500).slideUp("fast");
});







//滚轮滚动显示TOP
$(function () {
     $(document).scroll(function(){ 
         //backTop('wscrolltop');
     });

     $("#wscrolltop").hover(function () {
             $(this).animate({
                 padding: "15px 10px"
             }, 100);
         },
         function () {
             $(this).animate({
                 padding: "5px 10px"
             }, 100);
     });
})

function backTop(btnId) {
        var jBtn = $("#" + btnId);
        var btn = document.getElementById(btnId);
        var d = document.documentElement;
        window.onscroll = set;
        btn.onclick = function () {  
            window.onscroll = null;
            this.timer = setInterval(function () {
                d.scrollTop -= Math.ceil(d.scrollTop * 0.1);
                if (d.scrollTop == 0) {
                    jBtn.fadeOut();
                    clearInterval(btn.timer, window.onscroll = set);
                }
            }, 20);
        };
        function set() {
            if (d.scrollTop) {
                jBtn.fadeIn();
            }
            else {
                jBtn.fadeOut();
            }
        }
    }   








