import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/home/Home.jsx";
import Shop from "./pages/shop/Shop.jsx";
import About from "./pages/about/About.jsx"
import Contact from "./pages/contact/Contact.jsx";
 


ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

 