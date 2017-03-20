'use strict';
var React = require('react-native');
var Style = require('./widget/style/style');

var NavLayouts = require('./layout/nav-layouts');
var NavWidgets = require('./layout/nav-widgets');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  TabBarIOS,
  PixelRatio,
  View,
  ScrollView
} = React;

var tabs = [
  {
    name: 'pages',
    title: '页面',
    icon: require('./images/template@2x.png'),
    getTarget: function(){
      var Page = require('./page/page-list.js');
      return (<Page></Page>); 
    }
  },
  {
    name: 'layouts',
    title: '模板',
    icon: require('./images/template@2x.png'),
    getTarget: function(){
      return (<NavLayouts></NavLayouts>); 
    }
  },
  {
    name: 'widgets',
    title: '控件',
    icon: require('./images/widget@2x.png'),
    getTarget: function(){
      return (<NavWidgets></NavWidgets>); 
    }
  }
];

var Letschat = React.createClass({
  //
  getInitialState() {

    return {
      selectedTab: tabs[0].name,
      tabs: tabs
    };
  },

  //
  select: function(name){
    this.setState({
      selectedTab: name
    });
  },

  //
  getTabBarItems: function(){
    var items = [];
    var self = this, tabs = this.state.tabs, tab;

    tabs.forEach(function(tab){

      tab = Object.assign({
        title: tab.name,
        getTarget: function(){ return (<View></View>); }
      }, tab);

      items.push(
        <TabBarIOS.Item
          key={tab.name}
          icon={tab.icon}
          systemIcon={tab.systemIcon}
          title={tab.title}
          onPress={self.select.bind(self, tab.name)}
          selected={self.state.selectedTab === tab.name}>
            {tab.getTarget()}
        </TabBarIOS.Item>
      );
    });

    return items;
  },

  //
  render: function(){

    return (
      <TabBarIOS style={styles.container}>
        {this.getTabBarItems()}
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:20
  },
  list_item:{
    padding: 10,
    backgroundColor: '#EEE',
    marginBottom: Style.pixel
  },
  contentContainer:{

  }
});

module.exports = Letschat;