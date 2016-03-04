(function ($) {
  if (!!window.ActiveXObject && !window.XMLHttpRequest && (location.href=='http://www.lanrentuku.com' || location.href=='http://www.lanrentuku.com/')) return;
  $(function () {
    nav();
    bnrSilder();
    sideSlider();
    helpToggle();
    systole();

    var img = document.createElement("img");
    img.onload = function() {
      window.onload = function () {
        skinShow();
      };
    };
  });

//滚动
  function nav() {
    var $liCur = $(".nav-box ul li.cur"),
      curP = $liCur.position().left,
      curW = $liCur.outerWidth(true),
      $slider = $(".nav-line"),
      $targetEle = $(".nav-box ul li:not('.last') a"),
      $navBox = $(".nav-box");
    $slider.stop(true, true).animate({
      "left":curP,
      "width":curW
    });
    $targetEle.mouseenter(function () {
      var $_parent = $(this).parent(),
        _width = $_parent.outerWidth(true),
        posL = $_parent.position().left;
      $slider.stop(true, true).animate({
        "left":posL,
        "width":_width
      }, "fast");
    });
    $navBox.mouseleave(function (cur, wid) {
      cur = curP;
      wid = curW;
      $slider.stop(true, true).animate({
        "left":cur,
        "width":wid
      }, "fast");
    });
  }

  ;
//滚动
  function bnrSilder() {
    if (!$("#head").length && !$("#bnr").length) {
      return;
    }
    (function () {
      if (navigator.userAgent.toLocaleLowerCase().indexOf('opera') >= 0) return;
      var sstag = document.createElement('script');
      sstag.type = 'text/javascript';
      sstag.async = true;
      sstag.src = 'script/SmoothScroll.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(sstag, s);
    })();
    $(window).scroll(function () {
      var bTop = $(this).scrollTop();
      $('.bnr-box').css({
        'margin-top':-bTop * 0.48
      });
      $('.bnr-txt').css({
        'margin-top':-bTop * 0.68
      });
      $('.bnr-btn').css({
        'margin-top':-bTop * 0.68
      });
      $('.warper').css({
        "background-position":"50% " + bTop * 0.2 + "px"
      });
      if (bTop < 200) {
        $(".txt-warp").css({
          'margin-top':-bTop * 1.5
        });
        $(".txt-nav-warp").removeAttr("style");
      } else {
        $(".txt-warp").css({
          'margin-top':-240
        });
        $(".txt-nav-warp").css({
          "position":"fixed",
          "top":0,
          "left":0,
          "box-shadow":"0 2px 6px #eee"
        });

      }
      var idxs = 0;
      if (bTop >= 200 && bTop < 577) {
        idxs;
      } else if (bTop >= 577 && bTop < 1072) {
        idxs = 1;
      } else if (bTop >= 1072 && bTop < 1165) {
        idxs = 2;
      } else if (bTop >= 1165) {
        idxs = 3;
      }
      $('.txt-nav li a').eq(idxs).addClass('on').parent().siblings().children().removeClass

        ('on');
      if (bTop < 200) {
        $('.txt-nav li a').removeClass('on');
      }
    });
  };


  function sideSlider() {
    if (!$(".help-side dl").length) {
      return false;
    }
    var $aCur = $(".help-side dl").find(".cur a"),
      $targetA = $(".help-side dl dd a"),
      $sideSilder = $(".side-slider"),
      curT = $aCur.position().top - 3;
    $sideSilder.stop(true, true).animate({
      "top":curT
    });
    $targetA.mouseenter(function () {
      var posT = $(this).position().top - 3;
      $sideSilder.stop(true, true).animate({
        "top":posT
      }, 240);
    }).parents(".help-side").mouseleave(function (_curT) {
        _curT = curT
        $sideSilder.stop(true, true).animate({
          "top":_curT
        });
      });
  }

  ;

  function helpToggle() {
    if (!$(".help-cont dl dt a").length) {
      return;
    }
    var $targetEle = $(".help-cont dl dt a");
    $targetEle.toggle(function () {
      $(this).parent().css({
        "background-position":"0 -20px"
      }).siblings().slideDown();
      return false;
    }, function () {
      $(this).parent().removeAttr("style").siblings().slideUp();
      return false;
    });
  }

  ;

  function systole() {
    if (!$(".history").length) {
      return;
    }
    var $warpEle = $(".history-date"),
      $targetA = $warpEle.find("h2 a,ul li a"),
      parentH,
      eleTop = [];
    parentH = $warpEle.parent().height();
    $warpEle.parent().css({
      "height":80
    });
    setTimeout(function () {

      $warpEle.find("ul").children(":not('h2:first')").each(function (idx) {
        eleTop.push($(this).position().top);
        $(this).css({
          "margin-top":-eleTop[idx]
        }).children().hide();
      }).animate({
          "margin-top":0
        }, 1600).children().fadeIn();
      $warpEle.parent().animate({
        "height":parentH
      }, 2600);

      $warpEle.find("ul").children(":not('h2:first')").addClass("bounceInDown").css({
        "-webkit-animation-duration":"2s",
        "-webkit-animation-delay":"0",
        "-webkit-animation-timing-function":"ease",
        "-webkit-animation-fill-mode":"both"
      }).end().children("h2").css({
          "position":"relative"
        });
    }, 600);

    $targetA.click(function () {
      $(this).parent().css({
        "position":"relative"
      });
      $(this).parent().siblings().slideToggle();
      $warpEle.parent().removeAttr("style");
      return false;
    });

  };


})(jQuery);


//娱乐场内容调用




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

