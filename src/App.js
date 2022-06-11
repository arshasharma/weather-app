import React,{useState} from 'react';
import axios from "axios";
import './App.css';

function App() {

  const [data,setData] = useState({})
  const [location,setLocation] = useState('')


  const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ed836da2a0c1ea6576b522aad15e3106`

  const searchlocation = (event) =>{
    if(event.key ==='Enter') {
      axios.get(url).then((response) =>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
   }
// const celcius_temp=({data.main.temp} − 32) * 5/9 ;
  //  (32°F − 32) × 5/9 = 0°C

  return (
   
    
   <div className="app">
     <h1>hello</h1>
     <div className="search">
       <input value={location} 
       onChange={ event => setLocation(event.target.value)}
       onKeyPress={searchlocation}
       placeholder='Enter Location..'
       type="text"/>
     </div>
     <div className="container">
       <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>

         <div className="temp">
            {/* {data.main ? <h1>{data.main.temp} F</h1> : null} */}
            <h1>{data.main.temp.toFixed()} F</h1>
          </div> 

            <div className="description">
              {/* {data.weather ? <p>{data.weather[0].description}</p> : null } */}
              <p>{data.weather[0].description}</p>
            </div>
       </div>

       <div className="bottom">
            <div className="feels">
              <p>feels like</p>
              <p>{data.main.feels_like}</p>
              
            </div>
            <div className="humidity">
              <p>Humidity</p>
              <p>{data.main.humidity}</p>
            </div>
            <div className="wind">
              <p>Wind</p>
              <p>{data.wind.speed}</p>
            </div>
       </div>

     </div>
  </div>
  );
}

export default App;
