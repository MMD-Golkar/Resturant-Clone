import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Homepage from "./pages/homepage";
import Shop from "./pages/shoppage";
import { Cart } from "../src/pages/cartpage";
import Checkout from "./pages/checkoutpage";
import AboutPage from "./pages/aboutpage";
export default function App() {
  const location = useLocation();

  const [user, setUser] = useState(() => ({
    searchfor:
      location.pathname === "/" ? "" : sessionStorage.getItem("searchfor") || "",
  }));
  const [previousPathname, setPreviousPathname] = useState(location.pathname);

  if (location.pathname !== previousPathname) {
    setPreviousPathname(location.pathname);
    if (location.pathname === "/") {
      setUser((previous) =>
        previous.searchfor ? { ...previous, searchfor: "" } : previous,
      );
    }
  }

  useEffect(() => {
    if (location.pathname !== "/" && user.searchfor) {
      sessionStorage.setItem("searchfor", user.searchfor);
    } else {
      sessionStorage.removeItem("searchfor");
    }
  }, [location.pathname, user.searchfor]);
  return (
    <Routes>
      <Route path="/" element={<Homepage user={user} setUser={setUser} />} />
      <Route path="/shop" element={<Shop user={user} setUser={setUser} />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}
