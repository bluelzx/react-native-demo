'use strict';
var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Alert
} = React;

var styles, widget;

// 
widget = React.createClass({
  
  // 
  getInitialState: function(){
    return {};
  },

  // 
  render: function(){
    return (
      <View
        style={styles.flex}>
      </View>
    );
  }
});

// styles
styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});

module.exports = widget;