//焦点图
$(function(){
	var sw = 0;
	$("#slides .num span").mousedown(function(){
		sw = $("#slides .num span").index(this);
		myShow(sw);
	});

	$("#slides .slide-prev").click(function(){
        sw--;
	    if(sw==-1){sw=$("#slides ul li").length-1;}
	    myShow(sw);
	});

	$("#slides .slide-next").click(function(){
        sw++;
        if(sw==$("#slides ul li").length){sw=0;}
        myShow(sw);
	});


	function myShow(i){
		$("#slides .num span").eq(i).addClass("current").siblings("span").removeClass("current");
		$("#slides ul li").eq(i).stop(true,true).fadeIn(600).siblings("li").fadeOut(600);
		//$("#slides .text p").eq(i).show().siblings("p").hide();
	}
	//滑入停止动画，滑出开始动画
	$("#slides").mouseover(function(){
		if(myTime){
		   clearInterval(myTime);
		}
	});

	$("#slides").mouseout(function(){
		myTime = setInterval(function(){
		  myShow(sw)
		  sw++;
		  if(sw==$("#slides ul li").length){sw=0;}
		} , 6000);
	});
	
	//自动开始
	var myTime = setInterval(function(){
	   myShow(sw)
	   sw++;
	   if(sw==$("#slides ul li").length){sw=0;}
	} , 6000);


})