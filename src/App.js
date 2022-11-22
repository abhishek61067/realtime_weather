import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getWeatherData from './services/weatherService';
import getFormattedWeatherData from './services/weatherService';
// import getFormattedWeatherData from './services/weatherService';
function App() {

const fetchWeather = async () =>{
  //because getFormattedWeatherData is async, we need to await it.
  const data = await getFormattedWeatherData({q:"kathmandu"});
  console.log(data)
  // console.log(url);
} 



fetchWeather();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br
     from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
    <TopButtons/>
    <Inputs/>
    <TimeAndLocation/>
    <TemperatureAndDetails/>
    <Forecast title= {"hourly forecast"}/>
    <Forecast title= {"daily forecast"}/>
     </div>
  );
}


export default App;
