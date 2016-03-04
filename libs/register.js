
jQuery.validator.addMethod("stringCheck", function (value, element) {
    return this.optional(element) || /^[\w]{5,10}$/.test(value);
}, "请以数字或字母組合(7-12位)"); //请以tzh2开头+数字或字母組合(7-12位)
jQuery.validator.addMethod("phoneCheck", function (value, element) {
    return this.optional(element) || /^(([0+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?|\d{11}$/.test(value);
}, "*格式：0577-88888888或11位手机号");
jQuery.validator.addMethod("truename", function(value, element) {
    return this.optional(element) || !/[^\u4E00-\u9FA5]/g.test(value);
},"请输入真实姓名");

var Register = function() {
    return {
        //main function to initiate the module
        init: function() {
            var acode = request("code");
            if (!acode) {
                if ($.cookie("agentcode")) {
                    acode = $.cookie("agentcode");
                } else {
                    acode = "RUIWIN";
                }
            } 
            $.cookie("agentcode", acode, { path: "/" });
            $("#agentcode").val(acode);

            $.get("/handler/SecurityIssues.ashx", function (option) {
                $("#securityissues").html(option);
            });

            $(".code_img img").bind('click', function() {
                $(".code_img img").attr("src", "/handler/CreateCodeImage.ashx?p=" + new Date());
            });

            $('#registerform').validate({
                // focusInvalid: true, // do not focus the last invalid input
                rules: {
                    username: {
                        required: true,
                        stringCheck: true,
                        rangelength: [5, 10],
                        remote: {
                            //验证用户名是否存在
                            type: "GET",
                            url: "/handler/validationUsernameIsExist.ashx?p=" + new Date(), //servlet
                            data: {
                                username: function () { return $("#username").val(); } //return "tzh2"+$("#username").val(); 删除 tzh2 前缀 与 web.config 文件同步 2016-01-16
                            }
                        }
                    },
                    password: {
                        required: true,
                        rangelength: [6, 15]
                    },
                    repassword: {
                        required: true,
                        equalTo: "#password"
                    },
                    agentcode: {
                        required: true,
                        remote: {
                            //验证代理是否存在
                            type: "GET",
                            url: "/handler/validationAgentCode.ashx?p=" + new Date(), //servlet
                            data: {
                                agentcode: function() { return $("#agentcode").val(); }
                            }
                        }
                    },
                    email: {
                        required: true,
                        email: true,
                        remote: {
                            type: "GET",
                            url: "handler/validationEmail.ashx?p=" + new Date(),
                            data: {
                                email: function() {
                                    return $("#email").val();
                                }
                            }
                        }
                    },
                    securityissues: {
                        required: true
                    },
                    securityanswer: {
                        required: true
                    },
                    code: {
                        required: true,
                        remote: {
                            //验证验证码是否正确
                            type: "GET",
                            url: "/handler/validationCode.ashx?p=" + new Date(), //servlet
                            data: {
                                code: function() { return $("#code").val(); }
                            }
                        }
                    }
                    ,rule: { required: true }
                },
                messages: {
                    username: { remote: " 该用户名已被注册" },
                    agentcode: {remote:" 该邀请码错误"},
                    email: { remote: " 该email已被注册" },
                    code: { remote: " 输入了错误的验证码" }
                },
                errorPlacement: function (error, element) {
                    
                    if (element.attr("name") == "username") {
                        $(element).parent().parent().next().empty();
                        error.appendTo($(element).parent().parent().next());
                    }  else {
                        $(element).parent().next().empty();
                        error.appendTo($(element).parent().next());
                    }
                },
                highlight: function (element) { // hightlight error inputs
                    if (element.id == 'username')
                        $(element).parent().parent().next().removeClass('success').addClass('error');
                    else
                        $(element).parent().next().removeClass('success').addClass('error'); // set error class to the control group
                },
                unhighlight: function (element) { // revert the change dony by hightlight
                    if (element.id == 'username')
                        $(element).parent().parent().next().removeClass('error').addClass('success').text("Ok");
                    else
                        $(element).parent().next().removeClass('error').addClass('success').text("Ok");
                },
                submitHandler: function() {
                    RegisterPost();
                }
            });

            //$('#registerform input').keypress(function(e) {
            //    if (e.which == 13) {
            //        if ($('#registerform').validate().form()) {
            //            RegisterPost();
            //        } else {
            //            return false;
            //        }

            //    }
            //});

            $("#registerform #submitbutton").bind('click', function () {
                $("#registerform").submit();
            });
        }
    };

}();

function RegisterPost() {
    $.post("handler/Register.ashx?p=" + new Date(), {
        //"tzh2" + $("#username").val() 删除 tzh2 前缀 与 web.config 文件同步 2016-01-16
            "username": $("#username").val(),
            "password": $("#password").val(),
            "agentcode": $("#agentcode").val(),
            "QuestionId": $("#securityissues").val(),
            "Answer": $("#securityanswer").val(),
            "email": $("#email").val(),
            "code": $("#code").val(),
            "yqma": $("#yqma").val()
        }, function(data) {
            if (data.status == 1) {
                CloseReg();
                login($("#username").val(), $("#password").val());
                $(".reg_info_table table").hide().eq(0).show();
                $("#registerform")[0].reset();
            } else {
                alert(data.errmessage);
            }
        },"json");
}

function submitStep0() {
    var yqma = $("#yqma").val();
    if (/^\w{5}$/ig.test(yqma)) {
        $.get("handler/getyaoqingma.ashx", {yaoqingma:yqma}, function(txt) {
            if (txt == "true") {
                $(".reg_info_table>table").eq(0).hide();
                $(".reg_info_table>table").eq(1).show();
            } else {
                alert("邀请码无效");
            }
        });
    } else {
        alert("邀请码无效");
    }
}

function submitStep1() {
    var regUsername = /^\w{5,10}$/ig;
    var regPass = /^.{6,12}$/ig;
    var regAgentCoed = /^\w{4,6}$/ig;
    if (regUsername.test($("#username").val()) &&
       regPass.test($("#password").val()) &&
        $("#password").val() == $("#repassword").val() &&
        regAgentCoed.test($("#agentcode").val())) {
        //username: "tzh2"+$("#username").val() 删除 tzh2 前缀 与 web.config 文件同步 2016-01-16
        $.get("handler/validationUsernameIsExist.ashx?p=" + new Date(), { username: $("#username").val() }, function (data1) {
            if (data1 == "true") {
                $.get("handler/validationAgentCode.ashx?p=" + new Date(), { agentcode: $("#agentcode").val() }, function (data2) {
                    if (data2 == "true") {
                        $(".reg_info_table>table").eq(1).hide();
                        $(".reg_info_table>table").eq(2).show();
                    } 
                });
            } 
        });
    }
}

function submitStep2() {
    var regEmail = /^[a-zA-Z0-9_\\.]+@[a-zA-Z0-9-]+[\\.a-zA-Z]+$/ig;
    var regQuestion = /^[1-9]$/;
    var regAnswer = /^.{1,20}$/ig;
    var regCode = /^[a-zA-Z0-9]{4}$/ig;
    if (regEmail.test($("#email").val()) &&
        regQuestion.test($("#securityissues").val()) &&
        regAnswer.test($("#securityanswer").val()) &&
        regCode.test($("#code").val())) {
        $.get("handler/validationCode.ashx?p=" + new Date(), { code: $("#code").val() }, function(data2) {
            if (data2 == "true") {
                $(".reg_info_table>table").eq(2).hide();
                //$("#lbusername").text("tzh2"+$("#username").val()); 删除 tzh2 前缀 与 web.config 文件同步 2016-01-16
                $("#lbusername").text($("#username").val());
                $("#lbpassword").text($("#password").val());
                $("#lbagentcode").text($("#agentcode").val());
                $("#lbemail").text($("#email").val());
                $("#lbquestion").text($("#securityissues").find("option:selected").text());
                $("#lbanswer").text($("#securityanswer").val());
                $(".reg_info_table>table").eq(3).show();
            }
        });
    }
}

function login(uname, pwd) {
    $.post("/handler/LoginHandler.ashx?r=" + new Date(), {
            "username": uname,
            "password": pwd,
            "action": "Login"
            //"imgCode": $("#verificationCode").val()
    }, function(data) {
        if (data.status == 1) {
            $.cookie("username", data.errcode);
            window.document.location.href = "/Index.aspx?dt=" + new Date();
        }
    },"json");
}

//js获取url参数的function
function request(paras) {
    var url = location.href;
    var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    var paraObj = {}
    for (i = 0; j = paraString[i]; i++) {
        paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
    }
    var returnValue = paraObj[paras.toLowerCase()];
    if (typeof (returnValue) == "undefined") {
        return "";
    } else {
        return returnValue;
    }
}

$(function() {
    Register.init();
   // $(".reg_info_table .type_btn").eq(0).bind("click", function () { submitStep0(); });
    $(".reg_info_table .type_btn").eq(1).bind("click", function() { submitStep1(); });
    $(".reg_info_table .type_btn").eq(2).bind("click", function () { submitStep2(); });
    $(".btn_close").bind("click", function() {
        CloseReg();
        $("#registerform")[0].reset();
        $(".reg_info_table table").hide().eq(1).show();
        Register.init();
    });

});