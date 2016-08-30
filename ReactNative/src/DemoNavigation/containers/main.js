/**
 * Created by ndmac on 16/8/26.
 */

import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableHighlight} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Action from '../actions';
import MainChildView from './components/mainChildView'
import MainNavigationBar from './components/mainNavigationBar'

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

class NDNavigation extends Component {
    static propTypes = {
        dataArray: PropTypes.array,
    };

    constructor(props) {
        super(props);

        this.loadData = this.loadData.bind(this);
    }

    loadData() {
        this.props.actions.obtainDataList(['one','two','three','four','five','six']);
    }

    componentWillMount() {
        this.loadData();
    }

    render() {
        return (
            <Navigator
                initialRoute = {{ title: '首页', index: 0 }}
                renderScene={(route, navigator) =>
                    <View>
                        <MainNavigationBar
                            title = {route.title}
                        />
                        <MainChildView
                            title = {route.title}

                            // 下一级
                            onNext = { () => {
                              const nextIndex = route.index + 1;
                              navigator.push({
                                title: '第 ' + nextIndex + ' 页',
                                index: nextIndex,
                              });
                            }}

                            // 上一级
                            onBack = {() => {
                              if (route.index > 0) {
                                navigator.pop();
                              }
                            }}
                        />
                    </View>
                }
            />
        )
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
)(NDNavigation);