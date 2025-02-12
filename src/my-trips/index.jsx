import { db } from '@/service/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserTripCardItem from './components/UserTripCardItem';

function MyTrips() {

const navigation = useNavigate();
const [userTrips, setUserTrips] = useState([]);

useEffect(()=>{
  GetUserTrips();
},[]);

const GetUserTrips = async() => {
  const user = JSON.parse(localStorage.getItem("user"));
   
  /**
   * Used to get all user trips
   * @returns
   */

  if (!user){
    navigation("/");
    return;
  }

  
  const q = query(collection(db, "AITrips"), where("userEmail", "==", user?.email));
  const querySnapshot = await getDocs(q);
  setUserTrips([]);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    setUserTrips(preVal=>[...preVal, doc.data()]);
  });
}

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold  text-3xl'>My Trips</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
        {userTrips?.length>0?userTrips.map((trip, index)=>(
          <UserTripCardItem trip={trip}  />
        )):[1,2,3,4,5,6].map((item, index)=>(
          <div key={index} className="h-[250px] w-full bg-slate-200 animate-pulse rounded-xl">

          </div>
        ))
      }
      </div>
    </div>
  )
}


export default MyTrips