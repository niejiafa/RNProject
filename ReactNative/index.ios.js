'use strict';
import React, { Component } from 'react';
import { StyleSheet , View ,AppRegistry ,Text ,Animated, Easing, Image} from 'react-native';


class RNComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
            </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'gray',
        flex:1
    }
});

AppRegistry.registerComponent('RNModuleName',()=> RNComponent);