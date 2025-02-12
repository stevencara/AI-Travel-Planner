import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserTripCardItem({trip}) {

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

    <Link to={"/view-trip/"+trip?.id}>

    <div className='hover:scale-105 transition-all'>
        <img src={photoUrl?photoUrl:"/placeholder.png"} className="object-cover rounded-xl  h-[220px] w-full cursor-pointer " />
        <div className="">
            <h2 className='text-lg font-bolt'>{trip?.userSelection?.location?.label}</h2>
            <h2 className='text-sm text-gray-500'>{trip?.userSelection?.noOfDays} 2 Days trip with {trip?.userSelection?.budget} Budget</h2>
        </div>
    </div>
    </Link>
  )
}

export default UserTripCardItem