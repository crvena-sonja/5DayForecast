import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {forecastReducer} from './reducers';

export default createStore(forecastReducer, applyMiddleware(thunk));