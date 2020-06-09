import React, { Component } from 'react';
import './App.css';
import  Form from './Components/Form';
import WeatherAPI from './Components/WeatherAPI'


class App extends Component{


getWeather=(e)=>{
  e.preventDefault()
  console.log("weather")
}

  render(){
    return(
      <div>     
        <div>Weather App</div>
        <Form getWeather={this.getWeather} />
        <WeatherAPI /> 
      </div>

    )
  }
}


export default App;
