import React from 'react';
import '../App.css';


//to view  
//  no state(stateless componant)
const Form =(props) =>{

    return(
        <form onSubmit={props.getWeather}>
            <input type="text"   name="city" placeholder="City..."/>
            <input type="text"  name ="country"  placeholder="Country..."/>
            <button>Get Weather</button>
         </form>
    )
  
}


export default Form;
