'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View
} = React;

var alert = React.Alert.alert;

var Widget = require('../widget/widget.js');

var {
  Style,
  VCode,
  Button
} = Widget;

var layout = React.createClass({

  render: function(){
    return (
      <View style={[Style.mix('page', 'flex')]}>
        <React.ScrollView>
          <VCode
              label='验证码'
              placeholder='请输入验证码'
              buttonText='发送'
              maxLength={4}
              count={60}
              style={{
                backgroundColor: '#FFF'
              }}
            />
        </React.ScrollView>
      </View>
    );
  }
});

// styles
var styles = StyleSheet.create({

});

module.exports = layout;