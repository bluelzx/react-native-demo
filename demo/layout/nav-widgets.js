'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  NavigatorIOS,
  ScrollView
} = React;

var Widget = require('../widget/widget.js');

var layouts = {
  form: require('./layout-form'),
  password: require('./layout-password'),
  vcode: require('./layout-vcode'),
  modal: require('./layout-modal'),
  banklist: require('./layout-banklist'),
  cardlist: require('./layout-cardlist')
};

var {
  Style,
  SelectButton,
  Button,
  alert,
  BankList
} = Widget;

var createCardNumber = function(){
  var no = '', len = 19;
  for(var i = 0; i < len; i++){
    no += parseInt(Math.random()*10, 10);
  };
  return no;
};

var layout = React.createClass({

  onPress: function(btn, value){
    var next = layouts[value];
    if(next){
      this.props.navigator.push({
        component: next,
        title: btn.props.text
      });
    };
  },

  render: function(){
    return (
      <View style={[Style.mix('page', 'flex'), styles.container]}>
        <React.ScrollView>
          <View>
            <View style={[]}>
              <SelectButton text="表单" value="form" 
                onPress={this.onPress} />
            </View>
            <View style={[]}>
              <SelectButton text="密码" value="password" 
                onPress={this.onPress} />
            </View>
            <View style={[]}>
              <SelectButton text="验证码" value="vcode" 
                onPress={this.onPress} />
            </View>
            <View style={[]}>
              <SelectButton text="模态层" value="modal" 
                onPress={this.onPress} />
            </View>
            <View style={[]}>
              <SelectButton text="银行列表" value="banklist" 
                onPress={this.onPress} />
            </View>
            <View style={[]}>
              <SelectButton text="银行卡列表" value="cardlist" 
                onPress={this.onPress} />
            </View>
          </View>
        </React.ScrollView>
      </View>
    );
  }
});


var nav = React.createClass({
  render: function(){
    return (
      <NavigatorIOS
        style={styles.flex}
        initialRoute={{
          title: '控件',
          component: layout
        }} />
      
    );
  }
});

// styles
var styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: 'red'
  },
  container: {

  }
});

module.exports = nav;