function getBalance(gamePlatform, objId, tagType) {
    $.ajax({
        type: "post",
        url: "/Handler/TransHandler.ashx",
        dataType: "text",
        data: { action: "getBalance", gamePlatform: gamePlatform }
    }).error(function (text) {
        if (tagType == "val") {
            $("#" + objId).val('0.00 元');
        } else if(tagType == "text") {
            $("#" + objId).text('0.00 元');
        } else {
            $("#" + objId).html('0.00 元');
        }
    }).done(function (text) {
        if (tagType == "val") {
            $("#" + objId).val(text);
        } else if(tagType == "text") {
            $("#" + objId).text(text);
        } else {
            $("#" + objId).html(text);
        }
    });
}


function getGamePlatform() {
    $.ajax({
        type: "post",
        url: "/Handler/TransHandler.ashx",
        dataType: "text",
        data: { action: "getplatform" }
    }).error(function (text) {
        ;
    }).done(function (text) {
        if (/^<option/gi.test(text)) {
            $("#selTransFrom").html(text);
            $("#selTransTo").html(text);
            selectLeft();
        } else {
            ;
        }
    });
}

function isAmount(input) {
    return (/^(([1-9]\d*)|\d)(\.\d{1,2})?$/).test(input.toString());
}

function isIntAmount(input) {
    return (/^[1-9]\d*$/).test(input.toString());

}

function selectLeft() {
    //var cc2 = document.getElementById("selTransTo");
    //var i;
    //if (document.getElementById("selTransFrom").value != "0") {
    //    for (i = 1; i < cc2.length; i++)
    //        cc2.options[i].disabled = true;
    //    cc2.options[0].disabled = false;
    //    cc2.options[0].selected = true;
    //}
    //else {
    //    for (i = 1; i < cc2.length; i++)
    //        cc2.options[i].disabled = false;
    //    cc2.options[0].disabled = true;
    //    cc2.options[0].selected = false;
    //    cc2.options[1].selected = true;
    //}
    
}

function doTransacter(obj) {
    if ($("#selTransFrom").val() != "0" && $("#selTransTo").val() != "0") {
        alert("只能从中心钱包转到游戏平台或从游戏平台转到主账户！");
        return false;
    }
    if ($("#selTransFrom").val() == $("#selTransTo").val()) {
        alert("只能从中心钱包转到游戏平台或从游戏平台转到主账户！");
        return false;
    }
    if (!isIntAmount($("#txtAmount1").val())) {
        alert("请输入正确的转账金额！");
        return false;
    }

    //$(obj).attr("aria-disabled", true);
    //$(obj).html("转账中...");
    $(obj).attr("style", "display:none").attr("disabled","true");
    $("#aTransDoing").attr("style", "display:");
    
    $.ajax({
        type: "post",
        url: "/Handler/TransHandler.ashx",
        dataType: "text",
        data: { action: "transfer", amount: $("#txtAmount1").val(), from: $("#selTransFrom").val(), to: $("#selTransTo").val() }
    }).error(function (text) {
        if (text.statusCode == '404') {
            alert('请求的文档不存在，拒绝转账！');
        } else {
            alert(text.statusText);
        }
        //$(obj).attr("aria-disabled", false);
        //$(obj).html("确认转帐");
        $(obj).attr("style", "display:").attr("disabled", "false");;
        $("#aTransDoing").attr("style", "display:none");
    }).done(function (text) {
        alert(text);
        //$(obj).attr("aria-disabled", false);
        //$(obj).html("确认转帐");
        $(obj).attr("style", "display:");
        $("#aTransDoing").attr("style", "display:none").attr("disabled", "false");
        showAccount();
    });
}

function reqRepair(id) {
    $.ajax({
        type: "post",
        url: "/Handler/TransHandler.ashx",
        dataType: "text",
        data: { action: "requestRepair", Id: id }
    }).error(function (text) {
        if (text.statusCode == '404') {
            alert('请求的文档不存在！');
        } else {
            alert(text.statusText);
        }
    }).done(function (text) {
        alert(text);
    });
}