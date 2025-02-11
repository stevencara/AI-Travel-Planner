import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HotelCardItem({ hotel }) {

    const [photoUrl, SetPhotoUrl] = useState();
    
      useEffect(()=>{
        hotel&&GetPlacePhoto();
      },[hotel])
    
      const GetPlacePhoto = async() => {
    
        if (!hotel.hotelName) return;
        const data ={      
          textQuery: hotel.hotelName
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
    <Link
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        hotel.hotelName +
        "," +
        hotel?.hotelAddress
      }
      target="_blank"
    >
      <div className="hover:scale-105 transition-all cursor-pointer">
        <img src={photoUrl?photoUrl:"/placeholder.png"} alt="" className="rounded-xl h-[180px] w-full object-cover" />
        <div className="my-2 flex flex-col gap-2">
          <h2 className="font-medium text-black ">{hotel?.hotelName}</h2>
          <h2 className="text-xs text-gray-500 ">📍 {hotel?.hotelAddress}</h2>
          <h2 className="text-sm text-gray-800 ">💰 {hotel?.price}</h2>
          <h2 className="text-sm text-gray-800">⭐ {hotel?.rating} stars</h2>
        </div>
      </div>
    </Link>
  );
}

export default HotelCardItem;
