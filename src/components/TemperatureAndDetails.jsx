import React from 'react'
import { UilLocationPoint, UilSearch, UilArrowUp, UilArrowDown, UilTemperature, UilWind, UilSun, UilTear, UilSunset,  } from '@iconscout/react-unicons'


function TemperatureAndDetails() {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>Rain</p>
        </div>
{/* humidity wind section starts */}

        <div className='flex justify-between items-center text-white py-3 '>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" 
            alt=""
             className='w-20' 
             />
             <p className='text-5xl'>34 &deg;</p>
             <div className='flex flex-col justify-between items-center'>
             <div className='flex font-light text-sm items-center justify-center'>
     <UilTemperature size={18} className={"mr-1"} />
     Real fell:
     <span className='font-medium ml-1'>32 &deg;</span>
             </div>
             <div className='flex font-light text-sm items-center justify-center'>
     <UilTear size={18} className={"mr-1"} />
     Humidity:
     <span className='font-medium ml-1'>65%</span>
             </div>
             <div className='flex font-light text-sm items-center justify-center'>
     <UilWind size={18} className={"mr-1"} />
     Wind:
     <span className='font-medium ml-1'>32 km/h</span>
             </div>
             </div>

        </div>
        {/* humidity wind section starts */}

        {/* rise section starts */}

        <div className='flex flex-row justify-between items-center py-3 text-white text-sm'>
<div className='flex justify-center items-center'>
    <UilSun />
    <p className='font-extralight'> 
        Rise:<span className='font-light ml-1'>6:45 AM</span>
        </p>
        <p className='font-extralight'>| </p> 
</div>
<div className='flex justify-between items-center'>
    <UilSunset/>
    <p className='font-extralight'> 
        Set:<span className='font-light ml-1'>7:45 PM</span>
        </p>
        <p className='font-extralight'> | </p> 
</div>
<div className='flex justify-between items-center'>
    <UilSun/>
    <p className='font-extralight'> 
        Rise:<span className='font-light ml-1'>6:45 AM</span>
        </p>
        <p className='font-extralight'> |</p> 
</div>
<div className='flex justify-between items-center'>
    <UilSun/>
    <p className='font-extralight'> 
        High:<span className='font-light ml-1'>45&deg;</span>
        </p>
        <p className='font-extralight'> | </p> 
</div>
<div className='flex justify-between items-center'>
    <UilSun/>
    <p className='font-light'> 
        Low: <span className='font-light ml-1'>40&deg;</span>
        </p>
        <p className='font-extralight'> | </p> 
</div>
        </div>
        {/* rise section ends */}



    </div>
  )
}

export default TemperatureAndDetails