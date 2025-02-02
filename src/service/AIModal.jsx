import { GoogleGenerativeAI } from "@google/generative-ai";

  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export   const chatSession = model.startChat({
      generationConfig,

      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, here's a detailed Las Vegas travel plan for a couple on a budget, formatted in JSON as requested. This focuses on free and low-cost activities, affordable hotels, and efficient travel.\n\n```json\n{\n  \"tripDetails\": {\n    \"location\": \"Las Vegas, Nevada, USA\",\n    \"duration\": \"3 Days\",\n    \"budget\": \"Cheap\",\n    \"travelers\": \"Couple\"\n  },\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n       \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"Low\",\n       \"hotelImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Circus_Circus_Las_Vegas.jpg/1280px-Circus_Circus_Las_Vegas.jpg\",\n      \"geoCoordinates\": { \"latitude\": 36.1382, \"longitude\": -115.1687 },\n       \"rating\": 3.5,\n      \"description\": \"Family-friendly hotel on the Strip with budget-friendly rooms, free circus acts, and the Adventuredome indoor theme park. Older but offers good value. \",\n       \"amenities\": [\"Free parking\",\"Swimming pool\",\"Casino\",\"Family Friendly\"]\n    },\n     {\n      \"hotelName\": \"Excalibur Hotel & Casino\",\n      \"hotelAddress\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"Low to Mid\",\n       \"hotelImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Excalibur_Las_Vegas_Night_View.jpg/1024px-Excalibur_Las_Vegas_Night_View.jpg\",\n       \"geoCoordinates\": { \"latitude\": 36.0985, \"longitude\": -115.1721 },\n       \"rating\": 4.0,\n      \"description\": \"Medieval-themed hotel at the southern end of the Strip, known for its unique architecture and relatively affordable prices. Features a large pool area and several dining options.\",\n       \"amenities\": [\"Swimming pool\",\"Casino\",\"Multiple dining Options\"]\n      },\n    {\n      \"hotelName\": \"OYO Hotel & Casino Las Vegas\",\n       \"hotelAddress\": \"115 E Tropicana Ave, Las Vegas, NV 89109\",\n      \"price\": \"Low\",\n       \"hotelImageUrl\":\"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/7a/aa/f0/oyo-hotel-casino-las-vegas.jpg?w=700&h=-1&s=1\",\n       \"geoCoordinates\": { \"latitude\": 36.0997, \"longitude\": -115.1673 },\n      \"rating\": 3.3,\n      \"description\": \"Budget-friendly hotel located near the Strip, offering basic amenities and a good location for exploring the area. It is often a great choice for couples seeking a lower-cost stay.\",\n      \"amenities\": [\"Casino\", \"Pool\",\"Restaurants\",\"Bar\"]\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"theme\": \"The Strip Exploration and Free Entertainment\",\n      \"bestTimeToVisit\": \"Afternoon and Evening\",\n       \"activities\": [\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Gardens\",\n          \"placeDetails\": \"A beautiful indoor garden display that changes seasonally. Free to enter.\",\n           \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bellagio_Conservatory_and_Botanical_Gardens.jpg/1024px-Bellagio_Conservatory_and_Botanical_Gardens.jpg\",\n          \"geoCoordinates\": { \"latitude\": 36.1128, \"longitude\": -115.1742 },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.8,\n          \"travelTimeFromHotel\": \"10-20 minutes (depending on hotel and mode of transport - walking or bus)\"\n        },\n         {\n          \"placeName\": \"Bellagio Fountains\",\n          \"placeDetails\": \"Spectacular water fountain show with music. Free to watch.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Fountains_of_Bellagio_Las_Vegas.jpg/1280px-Fountains_of_Bellagio_Las_Vegas.jpg\",\n          \"geoCoordinates\": { \"latitude\": 36.1126, \"longitude\": -115.1736 },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.9,\n          \"travelTimeFromHotel\": \"10-20 minutes (depending on hotel and mode of transport - walking or bus)\"\n        },\n        {\n          \"placeName\": \"Walk the Las Vegas Strip\",\n          \"placeDetails\": \"Enjoy the vibrant atmosphere, lights, and street performers. Take in the sights.\",\n           \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/The_Las_Vegas_Strip_at_night_from_the_air.jpg/1280px-The_Las_Vegas_Strip_at_night_from_the_air.jpg\",\n          \"geoCoordinates\": { \"latitude\": 36.1162, \"longitude\": -115.1724 },\n          \"ticketPricing\": \"Free\",\n           \"rating\": 4.7,\n          \"travelTimeFromHotel\": \"Varies, flexible time\"\n        },\n         {\n          \"placeName\": \"Mirage Volcano\",\n          \"placeDetails\": \"Watch the simulated volcano eruption show in front of the Mirage hotel. Free to watch.\",\n           \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Mirage_Volcano.jpg/1024px-Mirage_Volcano.jpg\",\n          \"geoCoordinates\": { \"latitude\": 36.1211, \"longitude\": -115.1732 },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.6,\n          \"travelTimeFromHotel\": \"15-30 minutes (depending on hotel and mode of transport - walking or bus)\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"theme\": \"Downtown Vegas and Arts\",\n       \"bestTimeToVisit\": \"Daytime and Early Evening\",\n      \"activities\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"A pedestrian mall with a canopy screen, light shows, street performers. Free to explore.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Fremont_Street_Experience_2021.jpg/1280px-Fremont_Street_Experience_2021.jpg\",\n          \"geoCoordinates\": { \"latitude\": 36.1699, \"longitude\": -115.1411 },\n          \"ticketPricing\": \"Free\",\n           \"rating\": 4.5,\n          \"travelTimeFromHotel\": \"30-45 minutes (bus or rideshare)\"\n        },\n         {\n          \"placeName\": \"Container Park\",\n          \"placeDetails\": \"Unique outdoor shopping, dining, and entertainment venue made from shipping containers.  Explore the shops and enjoy the atmosphere.\",\n          \"placeImageUrl\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Downtown_Container_Park_Las_Vegas_2023.jpg/1280px-Downtown_Container_Park_Las_Vegas_2023.jpg\",\n          \"geoCoordinates\": { \"latitude\": 36.1692, \"longitude\": -115.1421 },\n          \"ticketPricing\": \"Free (costs for shopping/dining)\",\n          \"rating\": 4.4,\n            \"travelTimeFromHotel\": \"30-45 minutes (bus or rideshare)\"\n        },\n         {\n          \"placeName\": \"Arts District\",\n          \"placeDetails\": \"Explore the galleries, murals, and unique shops. Take photos and enjoy the art. Visit the antique shops\",\n           \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Arts_District_Las_Vegas_2020.jpg/1280px-Arts_District_Las_Vegas_2020.jpg\",\n          \"geoCoordinates\": { \"latitude\": 36.1569, \"longitude\": -115.1501 },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.6,\n           \"travelTimeFromHotel\": \"20-35 minutes (bus or rideshare)\"\n        },\n          {\n          \"placeName\": \"Gold and Silver Pawn Shop\",\n           \"placeDetails\": \"The pawn shop from the TV show Pawn Stars. Browse for unique items and see if you find a bargain. Even if you don't buy anything it is a great spot to check out.\",\n          \"placeImageUrl\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Gold_%26_Silver_Pawn_Shop_Las_Vegas_NV_2014.jpg/1280px-Gold_%26_Silver_Pawn_Shop_Las_Vegas_NV_2014.jpg\",\n          \"geoCoordinates\": { \"latitude\": 36.1645, \"longitude\": -115.1437 },\n           \"ticketPricing\": \"Free\",\n            \"rating\": 4.0,\n          \"travelTimeFromHotel\": \"30-45 minutes (bus or rideshare)\"\n        }\n      ]\n    },\n    \"day3\": {\n      \"theme\": \"Relaxation and Final Views\",\n      \"bestTimeToVisit\": \"Morning and Afternoon\",\n      \"activities\": [\n         {\n          \"placeName\": \"Pool Time\",\n            \"placeDetails\": \"Enjoy the hotel swimming pool\",\n           \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Las_Vegas_pool_3.jpg/1280px-Las_Vegas_pool_3.jpg\",\n            \"geoCoordinates\": { \"latitude\": 36.10, \"longitude\": -115.17 },\n          \"ticketPricing\": \"Free\",\n           \"rating\": 4.5,\n           \"travelTimeFromHotel\": \"0 minutes, at your hotel\"\n        },\n        {\n           \"placeName\": \"The Linq Promenade\",\n            \"placeDetails\": \"Outdoor shopping, dining, and entertainment area with the High Roller Observation Wheel. Free to wander around, fees apply to attractions.\",\n            \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Linq_promenade_night_3.jpg/1280px-Linq_promenade_night_3.jpg\",\n           \"geoCoordinates\": { \"latitude\": 36.1174, \"longitude\": -115.1691 },\n          \"ticketPricing\": \"Free (fees for attractions)\",\n            \"rating\": 4.3,\n          \"travelTimeFromHotel\": \"10-20 minutes (depending on hotel - walking or bus)\"\n        },\n        {\n          \"placeName\": \"Eiffel Tower Viewing Deck at Paris Las Vegas (Optional)\",\n          \"placeDetails\": \"Optional visit to view Las Vegas from Eiffel Tower deck. (Ticket cost approx. $20-30)\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Eiffel_Tower_at_Paris_Las_Vegas.jpg/1280px-Eiffel_Tower_at_Paris_Las_Vegas.jpg\",\n          \"geoCoordinates\": { \"latitude\": 36.1120, \"longitude\": -115.1706 },\n          \"ticketPricing\": \"$20-$30\",\n          \"rating\": 4.6,\n          \"travelTimeFromHotel\": \"15-25 minutes (depending on hotel - walking or bus)\"\n        },\n        {\n          \"placeName\": \"Final Walk on the Strip\",\n          \"placeDetails\": \"Enjoy a final walk on the strip to soak in the lights and atmosphere before departure.\",\n          \"placeImageUrl\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/The_Las_Vegas_Strip_at_night_from_the_air.jpg/1280px-The_Las_Vegas_Strip_at_night_from_the_air.jpg\",\n           \"geoCoordinates\": { \"latitude\": 36.1162, \"longitude\": -115.1724 },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.7,\n           \"travelTimeFromHotel\": \"Flexible\"\n        }\n      ]\n    }\n  }\n}\n```\n**Important Notes for a Budget Trip:**\n\n* **Transportation:** Use the Deuce bus for affordable travel up and down the Strip and Downtown. Consider walking when possible.\n* **Food:** Take advantage of early bird specials, happy hour deals, and grocery stores for snacks and drinks. Avoid eating primarily at restaurants in tourist areas.\n* **Free Activities:** Las Vegas has plenty of free attractions as listed above. Be creative in finding ways to enjoy the city without overspending.\n* **Water:** Carry refillable water bottles and refill at water fountains to save money on bottled water.\n* **Flexibility:** Be prepared to adjust the schedule based on your interests and energy levels.\n* **Book in Advance**: To secure the lowest possible hotel prices book your accommodation in advance.\n\nThis itinerary provides a mix of iconic Las Vegas sights, budget-friendly experiences, and a balance of activity and relaxation, all while keeping affordability in mind. Have a great trip!\n"},
          ],
        },
      ],
    });
  
