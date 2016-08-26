/**
 * Created by ndmac on 16/8/26.
 */

import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Action from '../actions';

const styles = StyleSheet.create({
    container: {
        marginTop: 64,
        flexDirection: 'column',
        borderColor: '#cccccc',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        backgroundColor: '#FFFFFF',
        justifyContent:'center'
    },
    text: {
        fontSize: 12,
        textAlign: 'center'
    },
});

class Test extends Component {

    static propTypes = {
        name: PropTypes.string,
        password: PropTypes.string,
    };

    constructor(props) {
        super(props);

        this.loadData = this.loadData.bind(this);
    }

    loadData() {
        this.props.actions.obtainDataList({name: 'niejiafa',password: '1314520'});
    }


    componentWillMount() {
        this.loadData();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    帐号: {this.props.name}   密码: {this.props.password}
                </Text>
                <Text style={styles.text}>
                    帐号: {this.props.name}   密码: {this.props.password}
                </Text>
                <Text style={styles.text}>
                    帐号: {this.props.name}   密码: {this.props.password}
                </Text>
                <Text style={styles.text}>
                    帐号: {this.props.name}   密码: {this.props.password}
                </Text>
            </View>
        );
    }
}

export default connect((state) => (
    {
        name: state.Reducer.data.name,
        password: state.Reducer.data.password,
    }
    ), dispatch => (
    {
        actions: bindActionCreators(Action, dispatch),
    }
    )
)(Test);