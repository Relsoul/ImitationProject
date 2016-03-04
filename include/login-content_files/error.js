/**
 * Created by Jed on 14-9-29.
 */
var EP_CODE = {
    1: '188真人系统维护。。。',
    2: '188体育系统维护中。。。',
    3: 'AG真人系统维护中。。。',
    4: '快乐彩系统维护中。。。',
    5: 'GD系统维护中。。。',
    800: '参数有误',
    801: '传入参数必须为数字',
    802: '传入参数超过指定长度',
    980: 'db busy',
    981: 'db unavailable',
    990: 'credentials error',
    992: '无法获得配置信息',
    998: '验证码有误',
    1050: '金额格式有误',
    1051: '金额必须大于零',
    1080: '余额不足',
    1081: '账户异常，请联系客服',
    1082: '获取账户失败',
    1100: '注册失败，请重试',
    1101: '注册参数有误',
    1102: '用户名不允许注册',
    1103: '用户名已存在',
    1104: 'Email已经存在',
    1105: '手机号已经存在',
    1106: '无效的安全问题',
    1107: '注册已关闭，请联系客服',
    999: '未登陆',
    1000: '登陆已关闭',
    1001: '用户名或密码格式有误',
    1002: '用户名不存在或密码错误',
    1003: '用户已被锁定',
    1004: '登陆服务异常，请联系客服',
    1005: '登陆失败，请重试',
    1006: '密码错误次数过多，已锁定',
    1007: '用户名或密码错误',
    1008: "您的账户还未审核通过，请稍后再试或联系客服！",
    1207: "请选择银行卡",
    1200: '系统关闭存款功能',
    1201: '系统关闭存款功能',
    1202: '超过单日存款限制次数',
    1203: '存款金额不能低于最低限额',
    1204: '存款金额不能超过最高限额',
    1205: '有正在审核的申请',
    1208: '传入存款类型有误',
    1210: '首选银行Id有误',
    1211: '获取第三方支付平台信息失败',
    1212: '获取第三方存款队列信息失败',
    1213: '获取商户信息失败',
    1214: '获取商户平台配置信息失败',
    1215: '存款失败',
    1216: '获取ATM银行卡信息失败',
    1217: '未知错误，请联系管理员',
    1300: '系统关闭取款功能',
    1301: '超过单日取款限制次数',
    1302: '取款金额不能低于最低限额',
    1303: '取款金额超过当日最大限额',
    1304: '取款金额不能超过单日取款总额限制',
    1305: '银行卡信息已经存在，选择首选银行',
    1306: '取款开户银行与真实姓名不一致',
    1307: '已有未处理的取款申请',
    1308: '未知错误',
    1309: '取款密码有误',
    1400: '无效的游戏平台',
    1401: '游戏平台繁忙，请稍后重试',
    1402: '游戏平台官方维护',
    1403: '奇迹游戏平台维护',
    1404: '游戏平台已关闭',
    1406: '游戏平台配置有误',
    1407: '游戏平台维护中',
    1408: '获取玩家参与游戏平台列表失败',
    1405: '转账服务繁忙，请稍后重试',
    1410: '无效响应结果',
    1411: 'http exception',
    1412: '玩家尚未注册到游戏平台',
    1413: '获取游戏平台余额失败，请重试',
    1414: '玩家注册游戏平台失败',
    1415: '游戏平台转出失败',
    1416: '转入游戏平台失败',
    1417: '创建转账到游戏失败',
    1418: '转账回滚到主账户失败，请联系客服',
    1419: '转出余额超过游戏平台余额',
    1420: '更新转账状态失败',
    1421: '转账初始化失败',
    1422: '转出游戏未知错误',
    1423: '无效的转账记录',
    1424: '转账记录刚生成不久，请过3分钟后再处理',
    1425: '转账确认操作失败，请重试',
    1426: "转账金额必须为整数，不能包含小数点",
    1601: '银行字典信息有误',
    1602: '无法获取银行卡信息',
    1603: '无法获取第三方支付平台信息',
    1604: '银行代码有误',
    1900: '无效的活动',
    1901: '无效的上传配置参数',
    1902: '编辑活动失败',
    1903: '调整活动状态失败',
    1904: '调整活动顺序失败',
    1920: '你未达到参与此活动的条件',
    1921: '你还有该活动下的申请待处理中，请耐心等待',
    1922: '你已经参与过此活动了，无法再申请了',
    1923: '活动已下架',
    1924: '无效的活动申请信息',
    1925: '活动申请失败，请重试',
    1430: '交易正在处理中，请联系客服确认',
    1431: '中介账户余额不足，请联系客服处理',
    1435: '转账配置丢失，请重试或联系客服',
    1436: '系统转账额度不足，请联系客服'
};
function getError(code, key) {
    if (code in  EP_CODE) {
        return EP_CODE[code];
    }
    return '操作失败！';
}

function errorMsg(data) {
    if (data.c in  EP_CODE) {
        return EP_CODE[data.c];
    }
    return '未知错误！参考错误代码：' + data.c;
}