import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchForecast} from '../actions'
import './SearchForm.css';

export class SearchForm extends Component{

    onSubmit(event){
        event.preventDefault();
        const city = this.city.value;
        console.log('the city: ', city);
        this.city.value = '';
        this.props.dispatch(fetchForecast(city));
    }

    render(){
        return(
            <div className="Form">
                <form onSubmit={e => this.onSubmit(e)}>
                    City:
                    <input type="text" name="city" pattern='(^[\w\s]+,\s*\w{2}$)' placeholder="Arlington,VA" 
                        ref={city => this.city = city} required/>
                    <button type="submit">Get weather!</button>
                </form>
           </div>
        );
    }  
}

const mapStateToProps = (state, props) => ({
    city: state.city,
});

export default connect(mapStateToProps)(SearchForm);