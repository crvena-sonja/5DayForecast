import {createStore} from 'redux';

import {forecastReducer} from './reducers';

export default createStore(forecastReducer);