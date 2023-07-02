import React from "react";

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
import Sell from "./routes/SellTickets.js"
import MyListings from "./routes/MyListings.js";
import GiftCards from "./routes/GiftCards.js";
import Help from "./routes/Help.js"
import Home from "./routes/Home.js";
import { SearchBar } from "./components/SearchBar";

function App() {
      return (
          <div>
            <BrowserRouter>
              <TicketmasterNavbar />
              <Header/>
              <SearchBar/>

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
              <Footer/>
            </BrowserRouter>
          </div>
      );
}

export { App };