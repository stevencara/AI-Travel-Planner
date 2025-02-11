import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function PlaceCardItem({place}) {
  
    const [photoUrl, SetPhotoUrl] = useState();
  
    useEffect(()=>{
      place&&GetPlacePhoto();
    },[place])
  
    const GetPlacePhoto = async() => {
  
      if (!place.placeName) return;
      const data ={      
        textQuery:place.placeName
      }
  
      try {
        const result = await GetPlaceDetails(data);
        const PhotoUrl = PHOTO_REF_URL.replace("{NAME}", result.data.places[0].photos[3].name);
        SetPhotoUrl(PhotoUrl);
  
      } catch (error) {
        console.error("Error al obtener detalles del lugar:", error);
      }
    }


  return (

    <Link to={"https://www.google.com/maps/search/?api=1&query="+place.placeName} target="_blank">
      <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
            <img src={photoUrl?photoUrl:"/placeholder.png"} alt="" className='w-[130px] h-[130px] rounded-xl object-cover' />
            <div className="">
                <h2 className='font-bold text-lg text-black'>{place.placeName}</h2>
                <p className='text-sm text-gray-400'>{place.placeDetails}</p>
                <h2 className='mt-2 text-gray-800'>🕙 {place.travelTimeFromHotel}</h2>
                {/* <Button size="sm"><FaMapLocationDot /></Button> */}
            </div>
        </div>
    </Link>
  )
}

export default PlaceCardItem