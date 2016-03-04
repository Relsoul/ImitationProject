var index=0;
$(".content .content-ban .bannav ul li").click(function(){
index=$(this).index();
$(".content .content-ban .banimg img").eq(index).fadeIn().siblings().fadeOut();
$(this).addClass("hov").siblings().removeClass("hov");
$(".content .content-ban .bannav ul li").find("b").hide();
$(this).find("b").show();
$(".content .content-ban .banlist ul").eq(index).show().siblings().hide();
});