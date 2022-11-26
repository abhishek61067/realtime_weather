import React from 'react'

function TopButtons({setQuery}) {

    const cities =[
        {id:1, title: "Kathmandu"},
        {id:1, title: "dhaka"},
        {id:1, title: "delhi"},
        {id:1, title: "Toronto"},
        {id:1, title: "doha"},
    ]


  return (
    <div className='flex items-center justify-around my-6'>
{cities.map((city)=>{
   return <button key={city.id} className='text-white text-lg font-medium 
   capitalize' onClick={()=>{setQuery({q:city.title})}} >{city.title}</button>
})}
        </div>
  )
}

export default TopButtons