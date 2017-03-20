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
      cards: [
        {
          number: '2342342234239527',
          bank: 'icbc',
          checked: true
        },
        {
          number: '2342342342349528',
          bank: 'icbc'
        },
        {
          number: '2342342343242321',
          bank: 'boc'
        }
      ]
    };
  },

  render: function(){
    return (
      <View style={Style.mix('page', 'flex')}>
        <React.ScrollView>
          <View>
            <Widget.BankList cards={this.state.cards} 
              onSelect={this.onBankSelect}
              ref="bankList"/>
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