import React from "react";
import {
  UilLocationPoint,
  UilSearch,
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilWind,
  UilSun,
  UilTear,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode, formatKelvinToCelcius } from "../services/weatherService";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    humidity,
    speed,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>
      {/* humidity wind section starts */}

      <div className="flex justify-between items-center text-white py-3 ">
        <img
          src={iconUrlFromCode(icon)}
          alt=""
          className="w-20"
        />
        <p className="text-5xl">{formatKelvinToCelcius(temp).toFixed()}&deg;</p>
        <div className="flex flex-col justify-between items-center">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className={"mr-1"} />
            Real fell:
            <span className="font-medium ml-1">{(formatKelvinToCelcius(temp)).toFixed(0)}&deg;</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className={"mr-1"} />
            Humidity:
            <span className="font-medium ml-1">{humidity}%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className={"mr-1"} />
            Wind:
            <span className="font-medium ml-1">{speed}km/h</span>
          </div>
        </div>
      </div>
      {/* humidity wind section starts */}

      {/* rise section starts */}

      <div className="flex flex-row justify-between items-center py-3 text-white text-sm">
        <div className="flex justify-center items-center">
          <UilSun />
          <p className="font-extralight">
            Rise:<span className="font-light ml-1">{ formatToLocalTime(sunrise,timezone, "hh:mm:a")}</span>
          </p>
          <p className="font-extralight">| </p>
        </div>
        <div className="flex justify-between items-center">
          <UilSunset />
          <p className="font-extralight">
            Set:<span className="font-light ml-1">{ formatToLocalTime(sunset,timezone, "hh:mm:a")}</span>
          </p>
          <p className="font-extralight"> | </p>
        </div>
        <div className="flex justify-between items-center">
          <UilSun />
          <p className="font-extralight">
            High:<span className="font-light ml-1">{formatKelvinToCelcius(temp_max).toFixed()}&deg;</span>
          </p>
          <p className="font-extralight"> | </p>
        </div>
        <div className="flex justify-between items-center">
          <UilSun />
          <p className="font-light">
            Low: <span className="font-light ml-1">{formatKelvinToCelcius(temp_min).toFixed()}&deg;</span>
          </p>
          <p className="font-extralight"> | </p>
        </div>
      </div>
      {/* rise section ends */}
    </div>
  );
}

export default TemperatureAndDetails;
