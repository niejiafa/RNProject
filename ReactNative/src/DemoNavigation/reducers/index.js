/**
 * Created by ndmac on 16/8/26.
 */

import { combineReducers } from 'redux';

const data = {
    data: []
}

export function Reducer(state = data, action) {

    let newState = {...state};

    switch (action.type){
        case 'DemoOneType':
            return {
                newState,
                data:action.data,
            };
    }

    return newState;
}

export default combineReducers({
    Reducer,
});