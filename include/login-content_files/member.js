/**
 *
 * Created by Jed on 15/1/13.
 */
//member info tag event
$(function () {
    $('div.item-tab').find('a').on('click', function () {
        var uri = $(this).attr('uri');
        var obj = this;
        $('#memberIndex').load(uri, function (response, status, xhr) {
            if (status == 'success') {
                $('div.item-tab').find('a.current').removeClass('current');
                $(obj).addClass('current');
            } else if (xhr.status == 403) {
                notify('请重新登录！');
            }
        });
        return false;
    });
    $('div.item-tab').find('a:first').click();
});


/**
 * 修改取款密码
 * @returns {boolean}
 */
function changeWdPassword() {
    var token = $('#wdpassword_form').valid();
    if (!token) {
        return false;
    }
    var old_pwd = $('#old_wdPassword').val();
    var new_pwd = $('#new_wdPassword').val();
    var new_pwd_c = $('#new_wdPassword_c').val();
    $.post('/member/changeWdPassword?t=' + Math.random(), {oldPwd: old_pwd, newPwd: new_pwd}, function (data) {
        if (data.success) {
            notify('修改取款密码成功！', 'success');
        } else {
            notify('修改取款密码失败！');
        }
        $.unblockUI();
    });
}


/**
 * 修改密码
 * @returns {boolean}
 */
function changePassword() {
    var token = $('#password_form').valid();
    if (!token) {
        return false;
    }
    var old_pwd = $('#old_password').val();
    var new_pwd = $('#new_password').val();
    var new_pwd_c = $('#new_password_c').val();
    $.ajax({
        url: '/service/vpkey',
        error: function () {
            notify('未知错误！');
        },
        success: function (rs) {
            var rsaKey = new RSAKey();
            rsaKey.setPublic(b64tohex(rs.modulus), b64tohex(rs.exponent));
            var enPassword = hex2b64(rsaKey.encrypt(old_pwd + ' ' + new_pwd + ' ' + new_pwd_c));
            var data = {"pwd": enPassword};
            $.post('/kz/member/changepwd?r=' + Math.random(), data, function (da) {
                if (da.c == 0) {
                    notify('修改密码成功！', 'success');
                } else {
                    notify('修改密码失败！');
                }
                $.unblockUI();
            });
        }
    });
}
function changeryptouard() {
    var token = $('#cryptouard_form').valid();
    if (!token) {
        return false;
    }
    var q1 = $("#question").find("option:selected").text();
    var a1 = $("#answer").val();
    var q2 = $("#new_question").find("option:selected").text();
    var a2 = $("#new_answer").val();
    $.post('/kz/member/cryptoguard', {q1: q1, a1: a1, q2: q2, a2: a2}, function (da) {
        if (da.c == 0) {
            notify('问题密码成功！', 'success');
        } else {
            notify('问题密码失败！');
        }
        $.unblockUI();
    });
}

/**
 * 重置表单
 * @param form
 */
function reset(form){
    $('#'+form).find('input').each(function(){
        $(this).val('');
    });
}
