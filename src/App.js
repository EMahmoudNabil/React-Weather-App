import React, { Component } from 'react';
import './App.css';
import  Form from './Components/Form';
import WeatherAPI from './Components/WeatherAPI'


class App extends Component{

  render(){
    return(
      <div>     
        <div>Weather App</div>
        <Form />
        <WeatherAPI /> 
      </div>

    )
  }
}


export default App;
