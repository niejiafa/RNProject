/**
 * Created by ndmac on 16/8/30.
 */

import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        justifyContent:'center'
    },
});

class NDMainChildView extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onNext: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text>当前页面 : { this.props.title }</Text>
                <TouchableHighlight onPress = {this.props.onNext}>
                    <Text>下一级</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress = {this.props.onBack}>
                    <Text>上一级</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default NDMainChildView;
