import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }) {
  
  return (
    <div>
      <h2 className="font-bold text-lg">Places to visit</h2>
      <div className="mt-5">
        <div className="grid md:grid-cols-2 gap-5">
          {trip.tripData?.itinerary &&
            Object.keys(trip.tripData.itinerary).sort((a, b) => Number(a.match(/\d+/)) - Number(b.match(/\d+/))).map((dayKey) => (
              <div className="font-bold text-lg" key={dayKey}> {dayKey}

                {trip.tripData.itinerary[dayKey].activities?.map(
                  (place, index) => (
                    <div key={index}>

                      <div className="">
                        <PlaceCardItem place={place} />
                      </div>
                    </div>
                  )
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default PlacesToVisit;
