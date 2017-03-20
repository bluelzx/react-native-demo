'use strict';
var React = require('react-native');

var Style = require('../style/style');

var {
  StyleSheet,
  View
} = React;

var styles, widget;

// 
widget = React.createClass({

  // 
  render: function(){
    return (
      <View
        style={[Style.mix('separator'), this.props.style]}
      >
      </View>
    );
  }
});

// styles
styles = StyleSheet.create({

});

module.exports = widget;