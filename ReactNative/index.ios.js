/**
 * Created by ndmac on 16/8/23.
 */

import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { AppRegistry } from 'react-native';

//import reducer from './src/DemoRedux/reducers'
//import DemoRedux from './src/DemoRedux/containers/main'

import reducer from './src/DemeSecond/reducers'
import DemeSecond from './src/DemeSecond/containers/main'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

export default class Demo extends Component {
    render() {
        return (
            <Provider store={store}>
                <DemeSecond />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('RNModuleName', ()=> Demo);