import React from 'react'
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
    return (
      <div>
        <h2 className="font-bold text-lg">Places to visit</h2>
        <div className='mt-5'>
            <div className="grid md:grid-cols-2 gap-5">
            {trip.tripData?.itinerary?.day1?.activities?.map((place, index)=>(
                <div className="">
                    <h2 className='font-medium'>{place.placeName}</h2>
                    <div className="">
                        <h2 className='font-medium text-sm text-orange-600' >{place.placeDetails}</h2>
                        <PlaceCardItem place={place} />
                    </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    );
  }
  
  export default PlacesToVisit;