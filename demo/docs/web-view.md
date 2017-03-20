#Widget.WebView 控件

嵌入网页:
```
var React = require('react-native');
var Widget = require('../widget/widget.js');

module.exports = React.createClass({
  render: function(){
    return (
      <Widget.WebView 
        source={{ uri: 'http://baidu.com' }}
      />
    );
  }
});
```

嵌入HTML:
```
var React = require('react-native');
var Widget = require('../widget/widget.js');

module.exports = React.createClass({
  render: function(){
    return (
      <Widget.WebView 
        source={{ html: '<h1>hello!</h1>' }}
      />
    );
  }
});
```
