function isUrlA(url) {
    var strRegex = '^((https|http|ftp|rtsp|mms)?://)' + '?(([0-9a-z_!~*\'().&amp;=+$%-]+: )?[0-9a-z_!~*\'().&amp;=+$%-]+@)?' //ftp的user@ 
    + '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184 
    + '|' // 允许IP和DOMAIN（域名） 
    + '([0-9a-z_!~*\'()-]+.)*' // 域名- www. 
    + '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' // 二级域名 
    + '[a-z]{2,6})' // first level domain- .com or .museum 
    + '(:[0-9]{1,4})?' // 端口- :80 
    //+ '((/?)|' // a slash isn't required if there is no file name 
    //+ '(/[0-9a-z_!~*\'().;?:@&amp;=+$,%#-]+)+/?)$';
    var re = new RegExp(strRegex);
    if (re.test(url)) {
        return true;
    }
    else {
        return false;
    }
}

function doLogin(gamePlatform) {
    $.ajax({
        type: "post",
        url: "/Handler/UserHandler.ashx",
        dataType: "text",
        async: true,
        data: { action: "loginGame", gamePlatform: gamePlatform }
    }).error(function (text) {
        if (text.statusCode == '404') {
            alert('请求的文档不存在，拒绝登录！');
        } else {
            alert(text.statusText);
        }
    }).done(function (text) {
        if (isUrlA(text)) {
            if (gamePlatform == "sc")
                gamePlatform = "kg";
            $.get("/handler/logingamerecord.ashx", { action: "add", gamePlatform: gamePlatform }, function() {
                window.location.href = text;
            });  // 增加进入游戏记录
            
        } else {
            alert(text);
            window.close();
        }
    });
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

$(function () {
    var gamePlatform = getUrlParam("game");
    doLogin(gamePlatform);
})