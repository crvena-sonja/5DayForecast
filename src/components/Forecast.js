import React, {Component} from 'react';
import {connect} from 'react-redux';

import SingleDayForecast from './SingleDayForecast';
import './Forecast.css';

export class Forecast extends Component{

    createFiveDayForecast(){
        return this.props.forecast.map((item, index) => {
            return( 
                <SingleDayForecast weather={item} index={index}/>
            )
        });
    }

    render(){
        return( 
            <div className='FullForecastContainer'>
                <h2>{this.props.city}</h2> 
                <div className='FullForecast'>
                    {this.createFiveDayForecast()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    forecast: state.forecast,
    city: state.city
});

export default connect(mapStateToProps)(Forecast);

