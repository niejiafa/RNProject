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

//import reducer from './src/DemoListView/reducers'
//import DemeList from './src/DemoListView/containers/main'

import reducer from './src/DemoNavigation/reducers'
import DemoNavigation from './src/DemoNavigation/containers/main'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

export default class Demo extends Component {
    render() {
        return (
            <Provider store={store}>
                <DemoNavigation />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('RNModuleName', ()=> Demo);