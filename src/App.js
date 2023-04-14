import React from "react";
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from "react-router-dom";
import TicketmasterNavbar from "./TicketmasterNavbar.js";
import  Concerts  from "./pages/Concerts.js";
import Sports from "./pages/Sports.js";
import Family from "./pages/Family.js";
import Art from "./pages/ArtAndTheater.js";
import Deals from "./pages/Deals.js";
import EntertainmentGuides from "./pages/EntertainmentGuides.js";
import SignIn from "./pages/SignIn.js";
import Sell from "./pages/SellTickets.js"
import MyListings from "./pages/MyListings.js";
import GiftCards from "./pages/GiftCards.js";
import Help from "./pages/Help.js"
import Home from "./pages/Home.js";



function App() {
      return (
          <div>
            <BrowserRouter>
              <TicketmasterNavbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/concerts" element={<Concerts />} />
                <Route path="/sports" element={<Sports />} />
                <Route path="/family" element={<Family />} />
                <Route path="/arttheater" element={<Art />} />
                <Route path="/deals" element={<Deals />} />
                <Route path="/entertainment" element={<EntertainmentGuides />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/selltickets" element={<Sell />} />
                <Route path="/mylistings" element={<MyListings />} />
                <Route path="/giftcards" element={<GiftCards />} />
                <Route path="/help" element={<Help />} />

              </Routes>
            
            </BrowserRouter>

        
          </div>
      );
}

export { App };


