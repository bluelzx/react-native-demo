/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS,
  ScrollView
} from 'react-native';

var IndexPage = require("./demo/index");

// IndexPage = require('./demo/page/bindCard/bindCard');

class AwesomeProject extends Component {
  render() {
    return (
        <NavigatorIOS
          ref='navigator'
          style={styles.container}
          initialRoute={{
            title: '登录',
            component: IndexPage
          }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E9EB'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
