'use strict';
var routeConfig = {
	//首次绑卡页面
	"UserInfoPage" : {
		Page : require("../page/bindCard/userInfo"),
		title : "开通信通宝"
	},
	"SetPasswordPage" : {
		Page : require("../page/bindCard/setPassword"),
		title : "设置交易密码"
	},
	"BindCardPage" : {
		Page : require("../page/bindCard/bindCard"),
		title : "绑定银行卡"
	},
	"SelectBanklistPage" : {
		Page : require("../page/bindCard/selectBanklist"),
		title : "选择银行卡"
	},
	"VCodePage" : {
		Page : require("../page/bindCard/vcodePage"),
		title : "验证短信"
	},
	//支付
	"PayPage" : {
		Page : require("../page/cashDesk/payPage"),
		title : "收银台"
	},
	"PayDetailPage" : {
		Page : require("../page/cashDesk/payDetail"),
		title : "交易结果"
	},
	"ChooseBankPage" : {
		Page : require("../page/cashDesk/chooseBank"),
		title : "更换银行卡"
	},
	"SecurityPage" : {
		Page : require("../page/cashDesk/securitycheck"),
		title : "自行认证"
	},
	"CompletePage" : {
		Page : require('../page/public/complete'),
		title : '交易结果'
	},
	//关联认证
	"AuthentcationPage" : {
		Page : require("../page/relative/authentication"),
		title : "关联认证"
	},
	"RelativeTieCardPage" : {
		Page : require("../page/relative/relativeTieCard"),
		title : "绑卡验证"
	},
	"ValidatePwdPage" : {
		Page : require("../page/relative/validatePwd"),
		title : "校验交易密码"
	},
	//绑卡
	"TieCardPage" : {
		Page : require("../page/tiecard/tieCard"),
		title : "绑定银行卡"
	},
	"VerificationPage" : {
		Page : require("../page/tiecard/verification"),
		title : "短信验证"
	},
	"ValidatePwdNPage" : {
		Page : require("../page/tiecard/validatePwd"),
		title : "校验交易密码"
	},
	//忘记密码
	"BankListPage" : {
		Page : require("../page/forgetpwd/banklist"),
		title : "选择银行卡"
	},
	"ResetPwdPage" : {
		Page : require("../page/forgetpwd/resetpwd"),
		title : "重设交易密码"
	},
	"VarifyCardPage" : {
		Page : require("../page/forgetpwd/varifycard"),
		title : "验证账户信息"
	},
	"VarifyCodePage" : {
		Page : require("../page/forgetpwd/varifycode"),
		title : "验证短信"
	},
	//赎回
	'RedeemPage' : {
		Page : require('../page/refund/redeem'),
		title : '赎回-验证交易密码'
	},
	'RedeemResultPage' : {
		Page : require('../page/refund/result'),
		title : '赎回结果'
	},
	//协议公共页面
	"AgreementPage" : {
		Page : require('../page/public/agreement'),
		title : '协议展示'
	}
};
module.exports = routeConfig;
