import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Home from "./Components/Home.jsx";
import Contact from "./Components/Contact.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import CountryDetail from "./Components/CountryDetail.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path=":country" element={<CountryDetail/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
