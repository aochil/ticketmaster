import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TicketmasterNavbar from "./components/TicketmasterNavbar.js";
import Concerts from "./routes/Concerts.js";
import Sports from "./routes/Sports.js";
import Family from "./routes/Family.js";
import Art from "./routes/ArtAndTheater.js";
import Deals from "./routes/Deals.js";
import EntertainmentGuides from "./routes/EntertainmentGuides.js";
import SignIn from "./routes/SignIn.js";
import Sell from "./routes/SellTickets.js";
import MyListings from "./routes/MyListings.js";
import GiftCards from "./routes/GiftCards.js";
import Help from "./routes/Help.js";
import Home from "./routes/Home.js";
import GetEvents from "./components/GetEvents";

function App() {
  return (
    <div>
      <Header />
      <GetEvents />
      <Footer />
    </div>
  );
}

export { App };
