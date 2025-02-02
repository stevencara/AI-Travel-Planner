import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app";
import CreateTrip from './create-trip';
import Header from './components/custom/Header';
import { Toaster } from 'sonner';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Header/>
      <Toaster/>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/create-trip" element={<CreateTrip />}/> 
      </Routes>
    </GoogleOAuthProvider>
  </BrowserRouter>
);
