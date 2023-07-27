import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GetEvents from "./components/GetEvents";
import Concerts from "./routes/Concerts";
import RootLayout from "./routes/RootLayout";
import NotFound from "./routes/NotFound";
import Sports from "./routes/Sports";
import Art from "./routes/ArtAndTheater";
import Family from "./routes/Family";
import Deals from "./routes/Deals";
import EntertainmentGuides from "./routes/EntertainmentGuides";
import SignIn from "./routes/SignIn";
import Sell from "./routes/SellTickets";
import GiftCards from "./routes/GiftCards";
import Help from "./routes/Help";
import Register from "./routes/Register";
import TermsOfService from "./routes/TermsOfService";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<GetEvents />} />
      <Route path="concerts" element={<Concerts />} />
      <Route path="sports" element={<Sports />} />
      <Route path="artstheater" element={<Art />} />
      <Route path="family" element={<Family />} />
      <Route path="deals" element={<Deals />} />
      <Route path="entertainmentguides" element={<EntertainmentGuides />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="register" element={<Register />} />
      <Route path="sell" element={<Sell />} />
      <Route path="giftcards" element={<GiftCards />} />
      <Route path="help" element={<Help />} />
      <Route path="termsofservice" element={<TermsOfService />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export { App };
