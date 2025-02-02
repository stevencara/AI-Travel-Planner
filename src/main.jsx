import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app";
import CreateTrip from './create-trip';
import Header from './components/custom/Header';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/create-trip" element={<CreateTrip />}/> 
    </Routes>
  </BrowserRouter>
);
