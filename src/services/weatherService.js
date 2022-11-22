import { DateTime } from "luxon";

const API_KEY= "f61f7e6fd6ebc07cffd89dbb80a073f1";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";




//we are calling getWeatherData() in both functions, getgetFormattedWeatherData 
// and formattedForecastWeather
const getWeatherData =  async (infoType, searchParams)=>{
const url = new URL(BASE_URL + infoType)
//url.search is a variable.
//URLSearchParams will take care of the formatting like we see ? in search params
url.search = new URLSearchParams({...searchParams, appId: API_KEY})
//you can return more than 1 thing but you have to wrap in a list or object eg: 
// return [abc,bcd] or {abc,bcd}
return fetch(url).then(res=>res.json())
}


const formatCurrentWeather = (data)=>{
//to get lon lat and other data
const{
    coord:{lat,lon}, 
    main:{temp, feels_like, temp_min, temp_max, humidity},
    name,
    dt,
    sys:{country, sunrise, sunset},
    weather,
    wind:{speed},
} = data

const {main:details, icon} = weather[0];

//we can return multiple things wrapping it around {} or [].
return{lat,lon, temp, feels_like, temp_min, temp_max, humidity, name, 
    dt, country,sunrise,sunset,details, icon  ,speed};
}

//The prob is in formatForecastWeather, remove formatForecastWeather 
//from formattedForecastWeather variable in getFormattedWeatherData 
// function before prob is sovled.
const formatForecastWeather = (data)=>{
const {timezone, daily, hourly} = data;
daily = daily.slice(1,6).map(d=>{
    return{
        title: formatToLocalTime(d.dt,timezone,"ccc"),
        temp:d.temp.day,
        icon: d.weather[0].icon 
    }
})
    hourly = hourly.slice(1,6).map(d=>{
    return{
        title: formatToLocalTime(d.dt,timezone,"hh:mm:a"),
        temp:d.temp.day,
        icon: d.weather[0].icon 
    }   
})

return {timezone, daily, hourly};
}


//we will be calling two api in this function. First we will call weather api and 
// get lat and lon data. Then we will call onecall api using lat and lon as search params
// and get hourly and daily data.
const getFormattedWeatherData = async (searchParams)=>{

    //this is for weather infotype.
  const formattedCurrentWeather =  await getWeatherData("weather", searchParams).then(
        formatCurrentWeather
  );

  const{lat,lon} = formattedCurrentWeather;
  //conculsion formattedCurrentWeather is an object and not a list of objects


  //this is for onecall infotype.
  //prob is here, to call onecall, you need to create api key and cant use free api keys
//   go here: https://home.openweathermap.org/api_keys and create api keys 
// and wait for around 15-30 min to activate the keys
  const formattedForecastWeather = await getWeatherData("onecall",
   {lat, lon, exclude: "current, minutely, alerts", units:searchParams.units}
   ).then(formatForecastWeather);
   //add then here

  return {...formattedForecastWeather,...formattedCurrentWeather};

}

//for getting icon image
const iconUrlFromCode  = (code)=>{
    return `http://openweathermap.org/img/wn/${code}@2x.png`;
}


//to format the time in standard format 
const formatToLocalTime = ( 
    secs,
    zone,
    format= "cccc, dd LLL yyyy' | Local Time: 'hh:mm:a"
) =>{
    return DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
}

export default getFormattedWeatherData;

export {formatToLocalTime, iconUrlFromCode};

