'use strict';
var React = require('react-native');
var Icon = require('../icon/icon.js');
var Style = require('../style/style');

var {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity
} = React;

var styles, widget;

// 
widget = React.createClass({

  getDefaultProps() {
      return {

      };
  },
  
  // 
  getInitialState: function(){
    return {
      password: ''
    };
  },

  getValue: function(){
    return this.state.password;
  },

  onChangeText: function(text){
    var onChange = this.props.onChange;
    //
    this.setState({
      password: text
    });
    //
    if(typeof onChange === 'function'){
      onChange(text);
    };
  },

  onPress: function(){
    this.refs.input.focus();
  },

  componentDidMount: function(){
    setTimeout(function(){
      this.refs.input.focus();
    }.bind(this), 300);
  },

  // 
  render: function(){
    var self = this;
    var len = this.state.password.length;

    return (
      <TouchableOpacity
        style={[styles.touch]}
        onPress={this.onPress}
        activeOpacity={9}
      >
        <View style={[styles.container, this.props.style]}>
          <View style={[styles.grid, styles.firstGrid]} >
            <View style={[ len >= 1 ? styles.circle : null ]} />
          </View>
          <View style={[styles.grid]} >
            <View style={[ len >= 2 ? styles.circle : null ]} />
          </View>
          <View style={[styles.grid]} >
            <View style={[ len >= 3 ? styles.circle : null ]} />
          </View>
          <TextInput style={styles.input} 
            maxLength={6} 
            ref='input'
            value={this.state.password}
            keyboardType='numbers-and-punctuation'
            onChangeText={this.onChangeText}
          />
          <View style={[styles.grid]} >
            <View style={[ len >= 4 ? styles.circle : null ]} />
          </View>
          <View style={[styles.grid]} >
            <View style={[ len >= 5 ? styles.circle : null ]} />
          </View>
          <View style={[styles.grid]} >
            <View style={[ len >= 6 ? styles.circle : null ]} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
});

var borderColor = '#666', 
  circleColor = '#777',
  gridWidth = 50,
  circleWidth = 30,
  pixel = Style.pixel;

// styles
styles = StyleSheet.create({
  touch: {

  },
  container:{
    flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  grid: {
    alignItems: 'center',
    justifyContent: 'center',
    width: gridWidth,
    height: gridWidth,
    borderTopColor: borderColor,
    borderRightColor: borderColor,
    borderBottomColor: borderColor,
    borderTopWidth: pixel,
    borderRightWidth: pixel,
    borderBottomWidth: pixel
  },
  firstGrid: {
    borderLeftWidth: pixel,
    borderLeftColor: borderColor
  },
  circle: {
    width: circleWidth,
    height: circleWidth,
    backgroundColor: circleColor,
    borderRadius: circleWidth/2
  },
  input: {
    height: 0,
    width: 0
  }
});

module.exports = widget;
