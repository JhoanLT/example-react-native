import {combineReducers} from 'redux';
import globalExample from './global';

const createReducer = (reducers) => 
    combineReducers({
        globalExample,
        ...reducers,
    });

export default createReducer;