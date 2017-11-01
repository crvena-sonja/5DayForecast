import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Forecast.css';

export class Forecast extends Component{

    componentDidMount(){
        console.log(this.props.forecast);
    }

    createFiveDayForecast(){
        const daysOfWeek = {'0':'Sunday', '1':'Monday', '2':'Tuesday', 
                            '3':'Wednesday', '4':'Thursday', '5':'Friday', '6':'Saturday'}

        // let date = new Date(this.props.forecast[0].dt * 1000);
        // console.log('is this the date: ',  daysOfWeek[date.getDay()]);

        return this.props.forecast.map((item, index) => {
            return( 
                <div id={index} className='OneDayForecast'>
                    <h3>{daysOfWeek[(new Date(item.dt * 1000)).getDay()]}</h3>
                    <p>{item.weather[0].main}</p>
                    <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} 
                        alt={item.weather[0].description} />
                    <p>Humidity: {item.humidity} %</p>
                    <p>Hi: {Math.round(item.temp.max)} F</p>
                    <p>Lo: {Math.round(item.temp.min)} F</p>
                </div>
            )
        });
    }

    render(){



        return( 
            <div className='Forecast'>
                <h2>{this.props.city}</h2> 
                {this.createFiveDayForecast()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    forecast: state.forecast,
    city: state.city
});

export default connect(mapStateToProps)(Forecast);

