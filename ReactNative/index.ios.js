/**
 * Created by ndmac on 16/8/23.
 */

import React, { Component } from 'react';
import { StyleSheet , View ,AppRegistry ,Text ,Animated, Easing, Image} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import DemoOne from './src/DemoOne'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

export default class Demo extends Component {
    render() {
        return (
                <Provider store={store}>
                <DemoOne />
                </Provider>
                );
    }
}

const styles = StyleSheet.create({
                                 container: {
                                 backgroundColor:'gray',
                                 flex:1
                                 }
                                 });

AppRegistry.registerComponent('RNModuleName',()=> Demo);