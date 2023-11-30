import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AppLayout from "./Pages/AppLayout/AppLayout.jsx";
import Home from "./Pages/Home/Home.jsx";
import BGChanger from "./Pages/BgChanger/BGChanger.jsx";
import PassGenerator from "./Pages/PassGenerator/PassGenerator.jsx";
import CurrencyConverter from "./Pages/CurrencyConverter/CurrencyConverter.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="" element={<Home />} />
      <Route path="bgChanger" element={<BGChanger />} />
      <Route path="pass-generator" element={<PassGenerator />} />
      <Route path="currency-converter" element={<CurrencyConverter />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
