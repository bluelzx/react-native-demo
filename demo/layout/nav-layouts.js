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

// 引用所有页面的引用
// 将其赋予 Widget.Navigator 控件的 props.componets 属性
var Components = require('../core/components.js');

// 用于mixin，简化导航方法的调用
// 让页面具有 this.props.navigator 上的方法，如 this.push 等
var NavMinin = require('../core/nav-mixin.js');

var Widget = require('../widget/widget.js');

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

  mixins: [NavMinin],

  // 跳转到
  go: function(name){
    return function(){
      this.push(name);
    }.bind(this);
  },

  render: function(){
    var self = this;

    return (
        <View style={[Style.mix('page', 'flex'), styles.container]}>
          <ScrollView>
            <View>
              <View style={[]}>
                <SelectButton text="6.输入交易密码" 
                  onPress={function(){
                    self.push('layout6');
                  }} />
              </View>
              <View style={[]}>
                <SelectButton text="7.付款结果(replace)" 
                  onPress={function(){
                    self.replace('layout7');
                  }} />
              </View>
              <View style={[]}>
                <SelectButton text="8.密码" 
                  onPress={this.go('layout8')} />
              </View>
              <View style={[]}>
                <SelectButton text="9.账户关联认证-银行卡" 
                  onPress={this.method('push', 'layout9')} />
              </View>
              <View style={[]}>
                <SelectButton text="10.银行卡绑定" 
                  onPress={this.go('layout10')} />
              </View>
              <View style={[]}>
                <SelectButton text="11.账户关联认证-预留手机" 
                  onPress={this.go('layout11')} />
              </View>
              <View style={[]}>
                <SelectButton text="12.付款详情" 
                  onPress={this.go('layout12')} />
              </View>
            </View>
          </ScrollView>
        </View>
    );
  }
});

var nav = React.createClass({

  render: function(){
    return (
      <Widget.Navigator
        style={styles.flex}
        components={Components}
        initialRoute={{
          title: '模板',
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