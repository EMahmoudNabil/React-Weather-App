import React, { Component } from 'react';
import './App.css';
import  Form from './Components/Form';
import WeatherAPI from './Components/WeatherAPI'

const API_KEYS ="49b665d9e0e16bb274cc2f37a9050557";

class App extends Component{

  state={
    temperture :'',
    city :'',
    country :'',
    humidity :'',
    description :'',
    error : ''
  }


getWeather= async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEYS}`);
    const data =await api.json();
    
    if(city && country){
      this.setState({
        temperture :data.main.temp,
        city : data.name,
        country : data.sys.country,
        humidity :data.main.humidity,
        description :data.weather[0].description,
        error : ''
      })
    }else{
      this.setState({
          temperture :'',
          city :'',
          country :'',
          humidity :'',
          description :'',
          error : 'Please Enter Data'}
      )
    }
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
