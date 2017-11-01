import React from 'react';

import './SingleDayForecast.css';

export default function SingleDayForecast(props){
    const daysOfWeek = {'0':'Sunday', '1':'Monday', '2':'Tuesday', 
                        '3':'Wednesday', '4':'Thursday', '5':'Friday', '6':'Saturday'};


    return(
        <div id={props.index} className='SingleDayForecast'>
            <h3>{daysOfWeek[(new Date(props.weather.dt * 1000)).getDay()]}</h3>
            <p>{props.weather.weather[0].main}</p>
            <img src={`http://openweathermap.org/img/w/${props.weather.weather[0].icon}.png`} 
                alt={props.weather.weather[0].description} />
            <p>Humidity: {props.weather.humidity}%</p>
            <p>Hi: {Math.round(props.weather.temp.max)} F</p>
            <p>Lo: {Math.round(props.weather.temp.min)} F</p>
        </div>
    );
}