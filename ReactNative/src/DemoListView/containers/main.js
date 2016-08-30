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
        backgroundColor: '#FFFFFF',
        justifyContent:'center'
    },
    text: {
        fontSize: 12,
        textAlign: 'center'
    },
    separator: {
        height: 0.5,
        backgroundColor: 'gray',
        marginLeft: 15,
    },
});

class Test extends Component {
    static propTypes = {
        dataArray: PropTypes.array,
    };

    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });
        this.state = {
            dataSource: dataSource,
        };

        this.loadData = this.loadData.bind(this);
        this.updateDataSource = this.updateDataSource.bind(this);
    }

    loadData() {
        this.props.actions.obtainDataList(['one','two','three','four','five','six']);
    }

    updateDataSource() {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });
        return dataSource.cloneWithRows(this.props.dataArray);
    }

    renderRow(rowData) {
        return <Text>{rowData}</Text>;
    }

    renderHeader() {
        return <Text>{'Section'}</Text>;
    }

    renderSeparator() {
        return <View style={styles.separator} />;
    }

    componentWillMount() {
        this.loadData();
    }

    render() {
        this.state.dataSource = this.updateDataSource();

        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderSeparator={this.renderSeparator}
                    renderRow={e => this.renderRow(e)}
                    renderHeader={e => this.renderHeader(e)}
                />
            </View>
        );
    }
}

export default connect((state) => (
    {
        dataArray: state.Reducer.data,
    }
    ), dispatch => (
    {
        actions: bindActionCreators(Action, dispatch),
    }
    )
)(Test);