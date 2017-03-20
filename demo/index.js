'use strict';
var React = require("react-native");
var RouteCof = require("./core/config");
var Core = require("./core/core");
var Util = require("./core/util");
var $http = require("./services/services");
var Button = require("./widget/button/button");
var Link = require("./widget/link/link");
var Loading = require("./widget/loading/loading");
var Api = require("./api/api");
// var UserInfo = require("./page/bindCard/userInfo");
// var PayPage = require("./page/cashDesk/payPage");
var {
    ScrollView,
    View,
    TextInput,
    Text,
    AlertIOS,
    TouchableHighlight,
    StyleSheet,
    Image,
    ActivityIndicatorIOS,
    Modal,
    Dimensions
} = React;
var {
    ActionSheet
} = Api;
var funMap = {
    'bindCard' : 'widgets/native_bind_card',
    'redeem' : 'widgets/native_redeem_register',
    'cashDesk' : 'widgets/native_cash_desk'
};
var doLogin = function( username, cb ) {
  var query = 'http://223.252.223.155:8184/mobile/doLogin';
  var obj = {
    appId : "341742cf8c7a48edb7548fd76fb0b737",
    appKey : "df2f997ff3f1439dbf0cf4ae7e7a199c",
    sourceNo : "3000233363",
    loginName : username,
    mobile : username
  };
  $http.post({
      url : query,
      data : obj,
      success : function( data ) {
          console.info(data);
          cb(data);
      },
      error : function() {
          console.info("error");
      }
  });
};
var getCashDesk = function( username, cb ) {
  var query = "http://223.252.223.155:8184/mobile/cash_desk";
  var obj = {
    appId: "341742cf8c7a48edb7548fd76fb0b737",
    appKey : "df2f997ff3f1439dbf0cf4ae7e7a199c",
    mobile: username,
    loginName: username,
    sourceNo: "3000233363",
    tradeCode : "10000000001",
    outTradeNo: "ZSYNO"+Date.parse(new Date()),
    merchantNo: "3000233363",
    childMerchantNo: "3000233363",
    orderName: "ReactNative-TestOrder",
    amount: 100,
    orderDesc: "信通宝测试订单",
    orderUrl: "",
    orderNotifyUrl: "",
    orderFrontNotifyUrl: "",
    productNo: '10000000001',
    productName: 'TestOrder',
    paySource : 'IOS',
    openWidgetUrl: "",
    scenesCode: "020100001",
    urlKey : 'cash_desk',
    currency : 'CNY',
    orderBeginTime : '2015-09-21 10:00:30'
  };
  $http.post({
      url : query,
      data : obj,
      success : function( data ) {
          console.info(data);
          cb(data);
      },
      error : function() {
          console.info("error");
      }
  });
};
var getData = function( num, cb ) {
  // var num = "13427911252";
  doLogin(num, function( json ){
    if( json.code == 1 ) {
      getCashDesk(num, cb);
    }else{
      AlertIOS.alert(
       '系统错误'
      );
    }
  });
};
var getUserInfo = function( data, cb ) {
    $http.post({
        url : "widgets/native_cash_desk",
        data : data,
        success : function( res ) {
            console.info(res);
            cb(res.data);
        }
    });
};
var IndexPage = React.createClass({
    getInitialState : function() {
        return {
            userName : ""
        }
    },
    onChangeName : function( event ) {
        this.setState({
            userName : event.nativeEvent.text
        });
    },
    onBtnPress : function() {
        this.refs.loading.show();
        var _this = this;
        var navigator = this.props.navigator;
        var obj = {
            "transCode" : "4B8AFCE18182B901891A845F12A544CA",
            "appId" : "70ac6c027448495985923627ff6dccaa",
            "token" : "A870AC350D86A8FDEEE5E0AC6D9BC068",
            "loginName": "16789898989",
            "sourceNo":"1000218247",
            "urlKey" : "cash_desk",
            "randomNum" : "392L62cK",
            "merchantType" : 1
        };
        getData(this.state.userName, function( data ){
            if(data.data.resultInfo) {
                var url = data.data.resultInfo.widgetPageUrl;
                var obj = Util.formatUrlParam(url);
                console.info(obj);
                getUserInfo(obj, function( o ){
                    _this.refs.loading.hide();
                    if( o.jumpType == '1' ) {
                        Core.nextPage("UserInfoPage", {
                            commParam : o
                        }, navigator);
                    }else{
                        Core.nextPage("PayPage", {
                            commParam : o
                        },  navigator);
                    }
                });
            }else{
                _this.refs.loading.hide();
                React.Alert.alert('获取收银台地址失败');
            }
        });
    },
    componentDidMount : function() {
        Core.setRoute(RouteCof);
        var _this = this;
    },
    createAction : function() {
        var _this = this;
        ActionSheet([{
            text : "绑卡流程",
            data : 'bindCard',
            onPress : _this.onActionPress
        },{
            text : "收银台",
            data : 'caskDesk',
            onPress : _this.onActionPress
        },{
            text : "货基赎回",
            data : 'redeem',
            onPress : _this.onActionPress
        }]);
    },
    onActionPress : function( key ) {
        console.info(key);
    },
    modalPress : function() {
        console.info("modalPress");
    },
    render : function() {
        return(
            <ScrollView style={{backgroundColor: '#E6E9EB'}}>
                <Loading ref='loading'></Loading>
                <View style={{flex:1, flexDirection:'column', backgroundColor:"#fff", marginTop:30}}>
                    <View style={{flex:1, flexDirection:'row'}}>
                        <Text style={{width:80,paddingTop:10,paddingLeft:6}}>登录名</Text>
                        <TextInput
                            placeholder='请输入登录名'
                            onChange={this.onChangeName}
                            style={{height: 40, flex:2, fontSize:14}}
                          />
                    </View>
                </View>
                <View style={{flexDirection: 'row', paddingTop:40,alignSelf: 'stretch',justifyContent: 'center', alignItems:'center'}}>
                    <Button text="登录" ref='btn' onPress={this.onBtnPress}></Button>
                </View>
                <View style={{flexDirection: 'row', paddingTop:40,alignSelf: 'stretch',justifyContent: 'center', alignItems:'center'}}>
                    <Link text="更换流程&gt;" onPress={this.createAction} />
                </View>
            </ScrollView>
        )
    }
});
module.exports = IndexPage;
