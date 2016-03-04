// 获取银行列表
function getUserBankList() {
    $.ajax({
        type: "post",
        url: "/Handler/ProfileHandler.ashx?rv=" + new Date(),
        dataType: "text",
        data: { action: "getBankList" }
    }).error(function (text) {
        if (text.statusCode == '404') {
        } else {
        }
    }).done(function (text) {
        $("#bankid").html(text);
    });
}

function getProfile() {
    $.getJSON("/Handler/ProfileHandler.ashx?p=" + new Date(), {
        "action": "getProfile"
    }, function (json) {
        if (json.truename) {
            $("#txtTrueName").val(json.truename).attr("readonly","readonly");
        }
        $("#txtUserName").val(json.username);
if (json.birthday) {
        $("#txtBirthDay").val(json.birthday).attr("readonly", "readonly");
}
        if (json.phone) {
            $("#spanphone").text(json.phone);
            $("#bind").css({ "display": "none" });
            $("#binded").css({ "display": "block" });
             oldPhone = json.phone;
        } else {
            $("#bind").css({ "display": "block" });
            $("#binded").css({ "display": "none" });
        }
        if (json.email) {
            $("#txtEmail").val(json.email).attr("readonly", "readonly");
        }
        if (json.qq) {
            $("#txtQQ").val(json.qq).attr("readonly", "readonly");
        }
       
    });
}

// 获取当前用户姓名
function getTrueName() {
    $.get("/handler/ProfileHandler.ashx?action=getTrueName&p=" + new Date(), function (data) {
        if (data) {
            $("#accountHolder").text(data);
        }
    });
}

// 获取绑定的银行卡
function getUserBankAccountList() {
    $.getJSON("/handler/ProfileHandler.ashx?action=getBindBankList&p=" + new Date(), function (data) {
        if (data) {
            var jsons = data.banks;
            var html = "";
            for (var i = 0; i < jsons.length; i++) {
                html += "<tr><td>" + jsons[i].bankname + "</td><td>" + jsons[i].openingBank + "</td><td>" + jsons[i].account + "</td><td>" + jsons[i].accountHolder + "</td><td>" + jsons[i].optHtml + "</td></tr>";
            }
            $("#banklist").html(html);
        }
    });
}

function changeInformation() {
    var trueName = $("#txtTrueName").val();
    var phone = oldPhone; //$("#txtPhone").val();
    var email = $("#txtEmail").val();
    var qq = $("#txtQQ").val();
    var birthDay = $("#txtBirthDay").val();
    var curPwd = $("#txtCurPwd").val();
    //var verCode = $("#txtCode").val().trim();
    var imgCode = $("#txtCodeImgEdit").val().trim();
    if (trueName == "") {
        alert("真实姓名不能为空");
        return false;
    }
    if (email == "") {
        alert("电子信箱不能为空");
        return false;
    }
    if (curPwd == "") {
        alert("请输入当前密码");
        return false;
    }
    if (imgCode == "") {
        alert("请输入图片验证码");
        return false;
    }
    //if (imgCode == "") {
    //    alert("请输入图片验证码");
    //    return false;
    //}
   
    $.ajax({
        type: "post",
        url: "/Handler/ProfileHandler.ashx",
        dataType: "text",
        data: { action: "changeInformation", TrueName: trueName, Email: email, Qq: qq, Birthday: birthDay, CurPwd: curPwd, Phone: phone, ImgCode: imgCode }
    }).error(function (text) {
        if (text.statusCode == '404') {
            alert('请求的文档不存在！');
        } else {
            alert(text.statusText);
        }
        event.returnValue = false;
    }).done(function (text) {
        alert(text);
        window.location.reload();
        event.returnValue = true;
        
    });
}

// 添加银行卡
function addUserBankAccount() {
    if ($("#accountHolder").text() == "") {
        alert("绑定卡号前请完善个人资料");
        return false;
    }
    if ($("#bankid").val() == "") {
        alert("请选择要绑定的银行");
        return false;
    }
    if ($("#city").val() == "城市") {
        alert("请选择开户行所在地区");
        return false;
    }
    if ($("#openingBank").val() == "") {
        alert("请输入开户行");
        return false;
    }
    if ($("#bankAccount").val() == "") {
        alert("请输入银行帐号");
        return false;
    }
    if ($("#bankAccount").val() != $("#bankAccountRe").val()) {
        alert("两次输入的银行账户不一致");
        return false;
    }
    $.getJSON("/handler/ProfileHandler.ashx?action=addUserBank&p=" + new Date(), {
        "BankId": $("#bankid").val(),
        "Province": $("#province").val(),
        "City": $("#city").val(),
        "OpeningBank": $("#openingBank").val(),
        "Account": $("#bankAccount").val()
    }, function (json) {
        alert(json.errmessage);
        if (json.status == 1) {
            getUserBankAccountList();
        }
    });
}

function doChangePwd() {
    var oldPwd = $("#txtOldPwd").val();
    var newPwd = $("#txtNewPwd").val();
    var reNewPwd = $("#txtReNewPwd").val();
    if (oldPwd == "") {
        alert("请输入当前密码");
        return false;
    }
    if (newPwd != reNewPwd) {
        alert("新密码和确认密码不一致");
        return false;
    }
    if (newPwd == "") {
        alert("请输入新密码");
        return false;
    }
    $.ajax({
        type: "post",
        url: "/Handler/ProfileHandler.ashx",
        dataType: "text",
        data: { action: "changePassword", OldPwd: oldPwd, NewPwd: newPwd }
    }).error(function (text) {
        if (text.statusCode == '404') {
            alert('请求的文档不存在！');
        } else {
            alert(text.statusText);
        }
        event.returnValue = false;
    }).done(function (text) {
        alert(text);
        event.returnValue = true;
        window.location = "/Index.aspx";
    });
}

function doUnBind(id) {
    if (confirm("确定要解除绑定吗？")) {
        $.getJSON("/handler/ProfileHandler.ashx?action=unBindUserBank&p=" + new Date(), {
            "Id": id
        }, function (json) {
            alert(json.errmessage);
            if (json.status == 1) {
                getUserBankAccountList();
            }
        });
    } else {
        return false;
    }
}




