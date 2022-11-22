import React from 'react'

function Forecast({title}) {
  return (
    <div>
{/* hourly forecast starts */}

<div>
    <p className=' text-xl text-white uppercase mt-6'>{title}</p>
</div>
<hr />

<div className='flex justify-between items-center my-6'>
<div className='flex flex-col justify-between items-center'>
<p className='text-white font-light text-sm'>04:30 PM</p>
<img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='my-1 w-12' />
<p className='font-medium text-white'>12 &deg;</p>
</div>
<div className='flex flex-col justify-between items-center'>
<p className='text-white font-light text-sm'>04:30 PM</p>
<img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='my-1 w-12' />
<p className='font-medium text-white'>12 &deg;</p>
</div>
<div className='flex flex-col justify-between items-center'>
<p className='text-white font-light text-sm'>04:30 PM</p>
<img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='my-1 w-12' />
<p className='font-medium text-white'>12 &deg;</p>
</div>
<div className='flex flex-col justify-between items-center'>
<p className='text-white font-light text-sm'>04:30 PM</p>
<img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='my-1 w-12' />
<p className='font-medium text-white'>12 &deg;</p>
</div>

</div>
{/* hourly forecast ends */}


    </div>
  )
}

export default Forecast;