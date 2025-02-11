import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { IoIosSend } from "react-icons/io";



function InfoSection({trip}) {

  const [photoUrl, SetPhotoUrl] = useState();

  useEffect(()=>{
    trip&&GetPlacePhoto();
  },[trip])

  const GetPlacePhoto = async() => {

    if (!trip?.userSelection?.location?.label) return;
    const data ={      
      textQuery: trip.userSelection.location.label
    }

    try {
      const result = await GetPlaceDetails(data);
      console.log(result.data.places[0].photos[3].name);
      const PhotoUrl = PHOTO_REF_URL.replace("{NAME}", result.data.places[0].photos[3].name);
      SetPhotoUrl(PhotoUrl);

    } catch (error) {
      console.error("Error al obtener detalles del lugar:", error);
    }
  }

  return (
    <div>
        <img src={photoUrl?photoUrl:"/placeholder.png"} alt=""  className='h-[340px] w-full object-cover rounded-xl '/>
        <div className="flex justify-between items-center">    
            <div className="my-5 flex flex-col gap-2">
                <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label}</h2>
                <div className="flex gap-5">
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text:xs md:text-md'>📅 {trip?.userSelection?.noOfDays} Day</h2>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text:xs md:text-md'>💰 {trip?.userSelection?.budget} Budget</h2>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text:xs md:text-md'>🥂 No Of Traveler: {trip?.userSelection?.traveler}</h2>
                </div>
            </div>
            <Button><IoIosSend /></Button>
        </div>
    </div>
  )
}

export default InfoSection