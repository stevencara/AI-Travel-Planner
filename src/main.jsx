import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import CreateTrip from './create-trip';
import Header from './components/custom/Header';
import { Toaster } from 'sonner';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Viewtrip from './view-trip/[tripId]';
import MyTrips from './my-trips';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Header/>
      <Toaster/>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/create-trip" element={<CreateTrip />}/>
        <Route path="/view-trip/:tripId" element={<Viewtrip/>}/>
        <Route path="/my-trips" element={<MyTrips/>}/>
      </Routes>
    </GoogleOAuthProvider>
  </BrowserRouter>
);
