import React, { Component } from 'react';
import {connect} from 'react-redux';

import SearchForm from './SearchForm';
import Forecast from './Forecast';
import './App.css';

class App extends Component {
  render() {

    let forecast;
    let errorMessage;

    if(this.props.showForecast){
      forecast = <Forecast />;
    }

    if(this.props.error){
      errorMessage = <p>Unfortunately there was an issue. Please try your search again.</p>;
    }

    return (
      <div className='App'>
        <header className='App-header'>
          <i className='fa fa-thermometer-half fa-5x' aria-hidden='true'></i>
          <h1 className='App-title'>5-day Forecast</h1>
        </header>
        <SearchForm />
        {errorMessage}
        {forecast}

        <footer className='App-footer'>
          <p>Made with  <i className='fa fa-heart' aria-hidden='true'></i> by Sonja </p>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showForecast: state.showForecast,
  error: state.error,
  forecast: state.forecast,
});

export default connect(mapStateToProps)(App);
