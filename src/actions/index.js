export const FETCH_FORECAST_REQUEST = 'FETCH_FORECAST_REQUEST';
export const fetchForecastRequest = (city) => ({
  type: FETCH_FORECAST_REQUEST,
  city
});

export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS';
export const fetchForecastSuccess = (forecast) => ({
  type: FETCH_FORECAST_SUCCESS,
  forecast
});

export const FETCH_FORECAST_ERROR = 'FETCH_FORECAST_ERROR';
export const fetchForecastError = (error) => ({
  type: FETCH_FORECAST_ERROR,
  error
});

export const FETCH_FORECAST = 'FETCH_FORECAST';
export const fetchForecast = (city) => dispatch => {
    dispatch(fetchForecastRequest(city))
    return fetch(`http://api.openweathermap.org/data/2.5/forecast/daily` + 
    `?appid=585e670f55ee9b114fa2f1f2731177d9&q=${city.replace(/\s+/g, '')}&units=imperial&cnt=5`)
    .then(response => {
      if(!response.ok){
        Response.reject(response.statusText);
      }
      return response.json();
    })
    .then(json => {
      return dispatch(fetchForecastSuccess(json.list));
    })
    .catch(err => {
      console.log('there was an error: ' + err);
      dispatch(fetchForecastError(err));
    })
}
