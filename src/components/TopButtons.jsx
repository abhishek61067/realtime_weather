import React from 'react'

function TopButtons() {

    const cities =[
        {id:1, title: "Kathmandu"},
        {id:1, title: "thimpu"},
        {id:1, title: "delhi"},
        {id:1, title: "dhaka"},
        {id:1, title: "islambad"},
    ]


  return (
    <div className='flex items-center justify-around my-6'>
{cities.map((city)=>{
   return <button key={city.id} className='text-white text-lg font-medium capitalize'>{city.title}</button>
})}
        </div>
  )
}

export default TopButtons