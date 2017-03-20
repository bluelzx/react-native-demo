var React = require('react-native');
var {
    StyleSheet,
    View,
    ActivityIndicatorIOS,
    Modal,
    Dimensions
} = React;

var Loading = React.createClass({
    getInitialState() {
        return {
            isLoading : false
        }
    },
    show() {
        this.setState({isLoading: true});
    },

    hide() {
        this.setState({isLoading: false});
    },
    render() {
        var loadingView = this.state.isLoading ? (
            <Modal transparent={true} visible={true}
            style={{flex: 1,justifyContent: 'center'}}>
                <ActivityIndicatorIOS hidden='true' size='large'
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height:Dimensions.get('window').height
                    }} />

                </Modal> ) : ( <View/>);
        return (
            <View>
                {loadingView}
            </View>
        )
    }
});
module.exports = Loading;
