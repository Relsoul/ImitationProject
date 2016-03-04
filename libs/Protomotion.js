function getActivityType() {
    $.ajax({
        type: "post",
        url: "/Handler/PromotionHandler.ashx",
        dataType: "text",
        async: false,
        data: { action: "getActivityType" }
    }).error(function (text) {
        ;
    }).done(function (text) {
        if (/^<li/gi.test(text)) {
            $("#ulYHHolder").html(text);
        } else {
            ;
        }
    });
}

function getActivityRecordByType(divActivityHolder) {
    $.ajax({
        type: "post",
        url: "/Handler/PromotionHandler.ashx",
        dataType: "text",
        async: false,
        data: { action: "getActivityRecordByType" }
    }).error(function (text) {
        if (text.statusCode == '404') {
            alert('请求的文档不存在！');
        } else {
            alert(text.statusText);
        }
    }).done(function (text) {
        if (/^<dl/gi.test(text)) {
            $("#" + divActivityHolder).append(text);
        } else {
            alert(text);
        }
    });
}

function getActivityRecord(pageIndex, divHolderId) {
    $.ajax({
        type: "post",
        url: "/Handler/PromotionHandler.ashx",
        dataType: "text",
        data: { action: "getActivityRecord", pageIndex: pageIndex, divHolderId: divHolderId }
    }).error(function (text) {
        if (text.statusCode == '404') {
            alert('请求的文档不存在！');
        } else {
            alert(text.statusText);
        }
    }).done(function (text) {
        if (/^<div/gi.test(text)) {
            $("#" + divHolderId).html(text);
        } else {
            alert(text);
        }
    });
}

function doRequest(acId) {
    $.ajax({
        type: "post",
        url: "/Handler/PromotionHandler.ashx",
        dataType: "text",
        data: { action: "reqActivity", Id: acId }
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