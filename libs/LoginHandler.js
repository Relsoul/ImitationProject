function doLogin() {
    var userName = $("#userName").val();
    var userPwd = $("#cLoginPwd").val();
    
    if (userName == "" || userName == null) {
        alert("请输入登录名");
        $("#userName").focus();
        return false;
    } else if (!/^\w{5,10}$/ig.test(userName)) {
        alert("用户名须以数字和字母组成");
        $("#userName").focus();
        return false;
    }
    
    if (userPwd == "" || userPwd == null) {
        alert("请输入登录密码");
        $("#cLoginPwd").focus();
        return false;
    }

    $.post("/handler/LoginHandler.ashx?r=" + new Date(), {
            "username": $("#userName").val(),
            "password": $("#cLoginPwd").val(),
            "action": "Login"
        }, function(data) {
            if (data.status == 1) {
                $.cookie("username", data.errcode);
                //window.open('/jumptogame.html?game=EA');
                window.document.location.href = "/Index.aspx?dt=" + new Date();
            } else {
                alert(data.errmessage);
                $("#userName").val("");
                $("#cLoginPwd").val("");
                $("#userName").focus();
            }
        }, "json");
}

function doLogout() {
    $.post("/Handler/LoginHandler.ashx?r=" + new Date(), {
        "action": "Logout" },
   function (data) {
       if (data.status == 1) {
           $.removeCookie('username');
           $.removeCookie('t188loginUrl');
           alert("已安全退出");
           window.document.location.href = "/Index.aspx?dt=" + new Date();
           //$('.aaaa').css({ 'display': 'block' }).eq(1).css({ 'display': 'none' }); $('#iframe1').attr('src', '#');
       } else {
           alert(data.statusText);
       }
    },"json");
}