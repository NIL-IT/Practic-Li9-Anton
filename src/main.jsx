import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import InfoPage from "./pages/InfoPage.jsx";
import SupportPage from "./pages/SupportPage.jsx";
import About from "./pages/About.jsx";
import AppointmentPage from "./pages/AppointmentPage.jsx";
import AddressesPages from "./pages/AddressesPages.jsx";
import FormPage from "./pages/FormPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "faq",
    element: <InfoPage />,
  },
  {
    path: "support",
    element: <SupportPage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "appointment",
    element: <AppointmentPage />,
  },
  {
    path: "appointment/:cityName",
    element: <AddressesPages />,
  },
  {
    path: "appointment/:cityName/form",
    element: <FormPage />,
  },
  {
    path: "faq/:quest",
    element: <SearchPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
