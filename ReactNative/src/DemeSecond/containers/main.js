/**
 * Created by ndmac on 16/8/26.
 */

import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
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

    //constructor(props) {
    //    super(props);
    //
    //    this.loadData = this.loadData.bind(this);
    //}

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2',
                'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2']),
        };
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
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
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