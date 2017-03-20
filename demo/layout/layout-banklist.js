'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Text
} = React;

var alert = React.Alert.alert;

var Widget = require('../widget/widget.js');

var {
  Style
} = Widget;

var layout = React.createClass({

  getInitialState: function(){
    return {
    };
  },

  render: function(){
    return (
      <View style={Style.mix('page', 'flex')}>
        <React.ScrollView>
          <View>
            <Widget.BankList ref="banklist" />
          </View>
        </React.ScrollView>
      </View>
    );
  }
});

// styles
var styles = StyleSheet.create({

});

module.exports = layout;