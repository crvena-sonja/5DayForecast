import * as actions from '../actions';

const initialState = {
  forecast: [],
  city: 'arlington,va',
  showForecast: false,
  loading: false,
  error: null,
};

export const forecastReducer = (state=initialState, action) => {
  switch(action.type){
    case actions.NEW_FORECAST:
      return Object.assign({}, state, {showForecast: false});
    case actions.FETCH_FORECAST_REQUEST:
      return Object.assign({}, state, {loading: true, city: action.city});
    case actions.FETCH_FORECAST_SUCCESS:
      return Object.assign({}, state, {forecast: action.forecast, loading: false, showForecast: true});
    case actions.FETCH_FORECAST_ERROR:
      return Object.assign({}, state, {error: action.error, loading: false});
    default:
      return state;
  }
 
}