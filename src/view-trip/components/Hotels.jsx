import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HotelCardItem from './HotelCardItem'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';

function Hotels({trip}) {
    
  return (
    <div className=''>
        <h2 className='font-bold text-xl mt-5'>Hotel Recommendation</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {trip?.tripData?.hotelOptions?.map((hotel, index)=>(
                <HotelCardItem hotel={hotel}/>
            ))}
        </div>
    </div>
  )
}

export default Hotels