/**
 * Created by ndmac on 16/8/30.
 */

import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#FF5E3A',
        justifyContent:'center',
        height: 64,
        paddingTop: 10,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
});

class NDNavigationBar extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.text}>{ this.props.title }</Text>
            </View>
        )
    }
}

export default NDNavigationBar;
