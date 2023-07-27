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
import Home from "./routes/Home";
import Concerts from "./routes/Concerts";
import RootLayout from "./routes/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<GetEvents />} />
      <Route path="/concerts" element={<Concerts />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export { App };
