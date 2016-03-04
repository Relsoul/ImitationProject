function getSummary() {
    $.ajax({
        type: "post",
        url: "/Handler/IntegralsHandler.ashx",
        dataType: "text",
        data: { action: "getSummary" }
    }).error(function (text) {
        if (text.statusCode == '404') {
            //alert('请求的文档不存在！');
        } else {
            //alert(text.statusText);
        }
    }).done(function (text) {
        if (/^\d+-\d+-\d+-\d+$/gi.test(text)) {
            var arr = text.split('-');
            $("#tdTotIntegral").html(arr[0]);
            $("#tdTimes").html(arr[1]);
            if (arr[2].trim() == '0' || arr[3].trim() == '0') {
                $("#tdRatio").html("");
                $("#txtJF").attr("disabled", true);
                $("#aExhJF").text("未达条件");
            }
            else if (parseInt(arr[2]) < parseInt(arr[3])) {
                $("#tdRatio").html("");
                $("#txtJF").attr("disabled", true);
                $("#aExhJF").text("未达条件");
            } else {
                $("#tdRatio").html(arr[3] + ":1");
                $("#aExhJF").unbind("click");
                $("#aExhJF").bind("click", function () {
                    return doExchange(this);
                });//负数
            }

            $("#tdCurIntegral").html(arr[2]);
        } else {
            $("#tdRatio").html("");
            $("#txtJF").attr("disabled", true);
            $("#aExhJF").text("未达条件");
        }
    });
}

function doExchange(obj) {
    if (/^\d+$/.test($("#txtJF").val())) {
        $(obj).attr("style", "display:none").attr("disabled", "true");
        $("#aExchangeDoing").attr("style", "display:");

        $.ajax({
            type: "post",
            url: "/Handler/IntegralsHandler.ashx",
            dataType: "text",
            data: { action: "doExchange", Integral: $("#txtJF").val() }
        }).error(function (text) {
            if (text.statusCode == '404') {
                alert('操作请求失败！');
            } else {
                alert(text.statusText);
            }

            $(obj).attr("style", "display:").attr("disabled", "false");
            $("#aExchangeDoing").attr("style", "display:none");
        }).done(function (text) {
            alert(text);
            $(obj).attr("style", "display:").attr("disabled", "false");
            $("#aExchangeDoing").attr("style", "display:none");
            getSummary();
            //getReportRecord(1, "exchangerecord", "dlJiFenExchange");
        });
    } else {
        alert("请输入要兑换的积分数，并且只能为正整数！");
        $("#txtJF").focus();
        return false;
    }
}