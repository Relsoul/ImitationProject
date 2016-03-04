function getReportRecord(pageIndex, dataSource, divHolderId) {
    $.ajax({
        type: "post",
        url: "/Handler/ReportMessageHandler.ashx",
        dataType: "text",
        data: { action: "getReportRecord", pageIndex: pageIndex, dataSource: dataSource, divHolderId: divHolderId }
    }).error(function (text) {
        if (text.statusCode == '404') {
            alert('请求的文档不存在！');
        } else {
            alert(text.statusText);
        }
    }).done(function (text) {
        if (/^<ul/gi.test(text) || /^<div/gi.test(text)) {
            $("#" + divHolderId).html(text);
        } else {
            alert(text);
        }
    });
}

function changeStatus(objid) {
    var id = objid.split('_')[1];
    $.ajax({
        type: "post",
        url: "/Handler/ReportMessageHandler.ashx",
        dataType: "text",
        data: { action: "changeStatus", Id: id }
    }).error(function (text) {
        if (text.statusCode == '404') {
            alert('请求的文档不存在！');
        } else {
            alert(text.statusText);
        }
    }).done(function (text) {
        if (text == "1") {
            $("#"+objid).removeClass("new").addClass("unew").html("已读");
        } else {
            alert(text);
        }
    });
}

function doRemoveNoteData(items) {
    $.ajax({
        type: "post",
        url: "/Handler/ReportMessageHandler.ashx",
        dataType: "text",
        data: { action: "removeNoteData", Ids: items }
    }).error(function (text) {
        if (text.statusCode == '404') {
            alert('请求的文档不存在！');
        } else {
            alert(text.statusText);
        }
    }).done(function (text) {
        if (text == "1") {
            alert("删除成功");
        } else {
            alert(text);
        }
    });
}