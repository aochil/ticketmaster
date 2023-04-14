import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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





const router = createBrowserRouter([
  { path: "/concerts", element: <Concerts /> },
  { path: "/sports", element: <Sports /> },
  { path: "/family", element: <Family /> },
  { path: "/arttheater", element: <Art /> },
  { path: "/deals", element: <Deals /> },
  { path: "/entertainment", element: <EntertainmentGuides /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/selltickets", element: <Sell /> },
  { path: "/mylistings", element: <MyListings /> },
  { path: "/giftcards", element: <GiftCards /> },
  { path: "/help", element: <Help /> }
]);



function App() {
      return (
          <div>
            <TicketmasterNavbar />
            <RouterProvider router= {router} />
          </div>
      );
}

export { App };


