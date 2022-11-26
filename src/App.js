import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import getWeatherData from './services/weatherService';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';
// import getFormattedWeatherData from './services/weatherService';
function App() {
  //states

  const [query, setQuery] = useState({q:"kathmandu"})
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);


// var fetchWeather;
useEffect(()=> {  

const fetchWeather = async()=>{
  // let a;
   await getFormattedWeatherData(query).then((data)=>{
    setWeather(data);
    // a = data;  
  });
  // console.log(a);
  console.log(weather);
};

fetchWeather();
// if(click==1){

  //this condition is just working oppposite
  // if(cityStatus==0){
  //   toast.warn("kera")
  // }
  // else{
    
  // }

  // fetchWeather();
  // getWeatherData("weather",{q:"kathmandu"});
  // console.log(formatCurrentWeather.lat);
// }




},[query]);

//for changin the background according to the temperature in frontend return part.
const formatbg = ()=>{
  if(!weather){
    return "from-cyan-700 to-blue-700";
  }
  else{
    const threshold = 20
    //weather.temp is in kelvin
    if((weather.temp-273.15).toFixed()<=threshold){
      return "from-cyan-700 to-blue-700";
    }
    else{
      return "from-yellow-700 to-orange-700";
    }
  }
}


  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br
     ${formatbg()} h-fit shadow-xl shadow-gray-400`}>
    <TopButtons setQuery={setQuery} />
    <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>

    {weather && (
<>
<TimeAndLocation weather={weather} />
  <TemperatureAndDetails weather = {weather}/> 
  </>

    )}
    
  {/* <Forecast title= {"hourly forecast"} items={weather.hourly} />
  <Forecast title= {"daily forecast"} items={weather.daily} /> */}

  
  <ToastContainer autoClose={2000} theme="colored" newestOnTop={true} />
     </div>
     
  );
}


export default App;
