import React, { useState } from "react";
import { UilLocationPoint, UilSearch } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Inputs({ setQuery }) {
  const [city, setCity] = useState("");

  //for handling search button click
  const handleSearchClick = () => {
    // const app = 1;
    if (city !== "") {
      setQuery({ q: city });
    }
  };

  //for handling location button click
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("fetching users location");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitudes;

        setQuery({ lat, lon });
      });
    }
  };

  // //for handling units: celcuis and fahrenheit
  // const handleUnitsChange = (e)=>{
  //   const selectedUnit = e.target.name;

  //   if(selectedUnit !==units){
  //     toast.success("Unit changed to fahrenheit");
  //     setUnits(selectedUnit);
  //   }

  // }

  // const a = "abc";
  return (
    <>
      <div className="flex flex-row items-center justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4 ">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type={"text"}
            placeholder={"Search for city"}
            className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
          />

          <UilSearch
            onClick={handleSearchClick}
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
          />
          {/* <UilLocationPoint onClick= {handleLocationClick} size ={25} className = "text-white cursor-pointer transition ease-out hover:scale-125" /> */}
        </div>
        {/* <div className="flex flex-row items-center justify-center w-1/4">
          <button
            onClick
            name="metric"
            className="text-xl font-light text-white hover:scale-125 transition ease-out "
          >
            &deg;C
          </button>
          <p className="text-white text-xl mx-1">|</p>
          <button
            onClick
            name="imperial"
            className="text-xl font-light text-white hover:scale-125 transition ease-out "
          >
            &deg;F
          </button>
        </div> */}
      </div>
    </>
  );
}

export default Inputs;
