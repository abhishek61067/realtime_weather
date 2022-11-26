import { DateTime } from "luxon";
import { toast } from "react-toastify";
//950b4348239818f209a19d1950399c90
const API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

//we are calling getWeatherData() in both functions, getgetFormattedWeatherData
// and formattedForecastWeather
const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  //url.search is a variable.
  //URLSearchParams will take care of the formatting like we see ? in search params
  url.search = new URLSearchParams({ ...searchParams, appId: API_KEY });
  //you can return more than 1 thing but you have to wrap in a list or object eg:
  // return [abc,bcd] or {abc,bcd}
  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  //to get lon lat and other data
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  //we can return multiple things wrapping it around {} or [].
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const getFormattedWeatherData = async (searchParams) => {
  //this is for weather infotype.
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);
  //formattedCurrentWeather will return what formatCurrentWeather will return.
  return formattedCurrentWeather;
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const formatKelvinToCelcius = (data)=>{
return ((data-273.15));
}

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode, formatKelvinToCelcius };