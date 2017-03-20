'use strict';
var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image
} = React;

var styles;

module.exports = React.createClass({
  
  //
  getInitialState: function(){
    return {
      // 
      items: [
        {
          image: 'icon_bcm',
          text: '交通银行'
        },
        {
          image: 'icon_boc',
          text: '中国银行'
        },
        {
          image: 'icon_ccb',
          text: '中国建设银行'
        },
        {
          image: 'icon_ceb',
          text: '光大银行'
        },
        {
          image: 'icon_cib',
          text: '兴业银行'
        },
        {
          image: 'icon_citic',
          text: '中信银行'
        },
        {
          image: 'icon_cmb',
          text: '招商银行'
        },
        {
          image: 'icon_gdb',
          text: '广东发展银行'
        },
        {
          image: 'icon_hxb',
          text: '华夏银行'
        },
        {
          image: 'icon_icbc',
          text: '中国工商银行'
        },
        {
          image: 'icon_psbc',
          text: '中国邮政银行'
        },
        {
          image: 'icon_spdb',
          text: '浦发银行'
        }
      ]
    };
  },

  // 取得一个Item
  getItem: function(item, index){

    var text = item.text;

    return (
      <View style={styles.row} key={index}>
        <Image
          style={styles.image}
          source={{uri: item.image}} />
        <Text
          style={styles.text}>{text}</Text>
      </View>
    );
  },

  // 取得全部Item
  getItems: function(){
    var items = [], sub = this.getItem;

    this.state.items.forEach(function(item, index){
      items.push(sub(item, index));
    });

    return items;
  },

  //
  render: function(){
    return (
      <ScrollView
        style={styles.flex}>
        {this.getItems()}
      </ScrollView>
    );
  }
});

// styles
styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  row: {
    paddingTop: 5,
    paddingLeft: 10,
    flexDirection: 'row',
    height: 30
  },
  image:{
    width: 20,
    height: 20
  },
  text:{
    flex: 1,
    marginTop: 7,
    marginLeft: 10
  }
});