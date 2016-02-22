function gameNotify(status, type) {
    var flag = false;
    switch (status) {
        case 0:
            flag = true;
            break;
        case 1:
            alert('请先登录');
            break;
        case 2:
            notify('当前系统已关闭改平台，详情请询问客服。');
            break;
        default :
            break;
    }
    return flag;
}

function load_pt(gpid,status,type){
    var url = '';
    type = type.toLowerCase();
    switch (type){
        case 'plba':
            url = '/liveCasino/pt?gameCode=plba';
            break;
        default :
            url = '/game/pt?gameCode='+type;
            break;
    }
    var accountid = '451819984708';

    var flag = gameNotify(status);
    if(flag){
        var accid = '350808494186201';
        window.open('/home/lunch?gpid=' + gpid + '&accid=' + accountid + '&url=' + url);
    }
}

function load_keno(status) {
    var flag = gameNotify(status);
    if (flag) {
        var gpid = "5707231341449216";
        var accid = "5707231341449216";
        window.open('/home/lunch?gpid=' + gpid + '&accid=' + accid + '&url=' + '/lottery/kenoGame');
    }
}

function load_allbet(status) {
    var flag = gameNotify(status);
    if (flag) {
        var gpid = "9283948292830";
        var accid = "9283948292833";
        window.open('/home/lunch?gpid=' + gpid + '&accid=' + accid + '&url=' + '/liveCasino/allbet');
    }
}

function load_sgwin(status) {
    var flag = gameNotify(status);
    if (flag) {
        var gpid = "7589283920390";
        var accid = "7589283920394";
        window.open('/home/lunch?gpid=' + gpid + '&accid=' + accid + '&url=' + '/lottery/sgwin');
    }
}

function load_bbin_ld(status,gpId,page_site){
    var flag = gameNotify(status);
    if(flag){
        var accid = "350808494186201";
        var gameurl = '/liveCasino/bbin';
        if(page_site == 'Ltlottery'){
            gameurl = '/lottery/bbin';
        }
        if(page_site){gameurl += "?page_site="+page_site;}

        window.open('/home/lunch?gpid=' + gpId + '&accid=' + accid + '&url=' + gameurl);
    }
}

function load_bbin_game(status,gpId,gametype){
    var flag = gameNotify(status);
    if(flag){
        var accid = '350808494186201';
        var gameurl = '/game/bbin';
        if(gametype){gameurl += "?gametype="+gametype;} 
        window.open('/home/lunch?gpid=' + gpId + '&accid=' + accid + '&url=' + gameurl);
    }
}


function load_bbin_sb(status,gpId){
    var flag = gameNotify(status);
    if(flag){
        var accid = '350808494186201';
        var gameurl = '/sports/bbin';
        window.open('/home/lunch?gpid=' + gpId + '&accid=' + accid + '&url=' + gameurl);
    }
}

$(function(){
    var status = parseInt($('#bbin_ld').attr('status'));
    var gpId = $('#bbin_ld').attr('gpId');
   $('#bbin_ld').find('li').on('click',function(){
        load_bbin_ld(status,gpId,'live');
   });
});

function load_fh(status,gametype) {
    var flag = gameNotify(status);
    if (flag) {
        var gpid = "285467739648";
        var accid = "285467739648";
        var gameurl = '/lottery/fh';
        if(gametype){gameurl += "?type="+gametype;}
        window.open('/home/lunch?gpid=' + gpid + '&accid=' + accid + '&url=' + gameurl);

    }
}

function load_mg(status, gameId) {
    var gpid = "11964220589608960";
    var accid = "11964220589608960";
    var flag = gameNotify(status);
    if (flag) {
        var gameurl = '/game/mg';
        if(gameId){gameurl += "?gameId="+gameId;}
        window.open('/home/lunch?gpid=' + gpid + '&accid=' + accid + '&url=' + gameurl);
    }
}

function load_mg_ld(status, gameId) {
    var gpid = "11964220589606";
    var accid = "11964220589608960";
    var flag = gameNotify(status);
    if (flag) {
        var gameurl = '/liveCasino/mg';
        window.open('/home/lunch?gpid=' + gpid + '&accid=' + accid + '&url=' + gameurl);
    }
}

function load_salon_ld(status) {
    var gpid = "208925621341";
    var accid = "208925621340";
    var flag = gameNotify(status);
    if (flag) {
        var gameurl = '/liveCasino/salon';
        window.open('/home/lunch?gpid=' + gpid + '&accid=' + accid + '&url=' + gameurl);
    }
}



function get_ld_gc(status, g_type, type) {
    var flag = gameNotify(status, type);
    if (flag) {
        var gpid = "39500154618880";
        var accid = "39500154618880";
        var gameurl = '/liveCasino/ldClient';
        if(g_type){gameurl += "?g_type="+g_type;} 
        window.open('/home/lunch?gpid=' + gpid + '&accid=' + accid + '&url=' + gameurl);
    }
}

function get_ag_gc(status, type) {
    var flag = gameNotify(status, type);
    if (flag) {
        var gpid = "38712217599873024";
        var accid = "38712217599873024";
        var gameurl = '/liveCasino/agClient';
        window.open('/home/lunch?gpid=' + gpid + '&accid=' + accid + '&url=' + gameurl);
    }
}

function get_gd_gc(status, type, view) {
    var flag = gameNotify(status, type);
    if (flag) {
        var gpid = "3277767810617344";
        var accid = "3277767810617344";
        var gameurl = '/liveCasino/gdClient';
        if(view){gameurl += "?view="+view;} 
        window.open('/home/lunch?gpid=' + gpid + '&accid=' + accid + '&url=' + gameurl);
    }
}


function appendGameModal(gpid, url) {
    $.blockUI();
    $.ajax({
        url:'/kz/gp/reg?gpid='+gpid + "&r="+Math.random(),
        type:'post',
        dataType:'json',
        success:function(reg){
            if(reg.c == 0){
                $.ajax({
                    url: "/kz/gp/balance?gpid=" + gpid,
                    type: 'get',
                    dataType: 'json',
                    success: function (_gf) {
                        $.unblockUI();
                        if (_gf.code == 0) {
                            var amount = parseInt(_gf.data.val);
                            if (isNaN(amount)) {
                                amount = 0;
                            }
                            if (amount < 10) {
                                $(document.body).append(makeModal(gpid, url, '游戏账户余额不足(当前：￥' + amount + ')'));
                                $('#GameModal').reveal({
                                    animation: 'fade',
                                    animation_speed: 500,
                                    closeonbackgroundclick: false,
                                    dismissmodalclass: 'close-reveal-modal'
                                });
                                getbalance();
                            } else {
                                openGame(url);
                            }
                        } else {
                            openGame(url);
                        }
                    },
                    cache: false,
                    error: function () {
                        $.unblockUI();
                        openGame(url);
                    }
                });
            }else if(reg.c == 1407){
                notify('系统维护中。。。');
                $.unblockUI();
            }else{
                $.unblockUI();
            }
        }
    });

}

function getbalance() {
    $.ajax({
        url: "/kz/gp/balance?gpid=10000",
        type: 'get',
        dataType: 'json',
        success: function (_gf) {
            if (_gf.code == 0) {
                var amount = parseFloat(_gf.data.val);
                if (isNaN(amount)) {
                    amount = "-";
                } else {
                    amount = amount.toFixed(2);
                }
                $("#t_balance").html(amount);
                $("#t_amount").val(amount);
            }
        },
        cache: false,
        error: function () {
            notify("无法正确获取余额！");
        }
    });
}

function desp(gpid, url) {
    var t_amount = $("#t_amount").val();
    var amount = parseInt($("#t_balance").html());
    if (t_amount <= 0 || t_amount == "" || isNaN(t_amount)) {
        notify("请填写正确的转账金额");
        return false;
    }

    if (amount == 0) {
        notify("当前主账户余额为0，请先去存款。");
        return false;
    }
    if (t_amount > amount)t_amount = amount;

    $("#closeM").click();

    $.ajax(
        {
            url: "/kz/gp/transaction",
            data: {
                tout: "10000",
                tin: gpid,
                amount: t_amount
            },
            type: "POST",
            success: function (_gf) {
                openGame(url);
                $('#closeM').click();
            },
            error: function () {
                openGame(url);
                $('#closeM').click();
            }
        });
}

function makeModal(gpid, url, title) {
    $("#GameModal").remove();
    var html = '<div id="GameModal" class="modal" style="width:570px; margin-left:-285px;">';
    html += '<div class="modal-hd"><a id="closeM" class="right modal-close close-reveal-modal"></a>';
    html += '<h2>' + title + '</h2>';
    html += '</div>';
    html += '<div class="modal-content">';
    html += '<div class="user-form" style="min-height:0;">';
    html += '<ul class="mod-forms clearfix">';
    html += '<li>';
    html += '<label>主账户</label>';
    html += '<div class="txt"><span id="t_balance" class="fl" style="font-size:22px; color:#ff7800;"></span><span onclick="javascript:window.open(\'/fund/index#deposit\');" title="充值" class="btn-deposit">去存款</span></div>';
    html += '</li>';
    html += '<li>';
    html += '<label>转入金额</label>';
    html += '<div class="item-ipt">';
    html += '<input type="text" id="t_amount" onKeypress="return (/[\\d.]/.test(String.fromCharCode(event.keyCode)))" style="ime-mode:Disabled" value="100" name="amount" class="txt-ipt" placeholder="输入金额">';
    html += '</div>';
    html += '</li>';
    html += '</ul>';
    //html += '<div class="m-l-130 f14px"><span class="cRed">检测到您游戏余额不足，您可以 </span><!-- <a href="" target="_blank" class="a-td">前往充值 &gt;&gt;</a> --></div>';
    html += '<div class="forms-btn-g" style="margin-left:130px;">';
    html += '<a href="javascript:void(0);" onclick="desp(\'' + gpid + '\',\'' + url + '\');" class="btn-sub">自动转账进入游戏</a>';
    html += '<a href="javascript:void(0);" onclick="window.open(\'' + url + '\');$(\'#closeM\').click();" class="btn-reset">忽略提醒进入游戏</a>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    return html;
}