import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Homepage from "./pages/homepage";
import Shop from "./pages/shoppage";
import { Cart } from "../src/pages/cartpage";
export default function App() {
  const location = useLocation();

  const [user, setUser] = useState({
    searchfor: sessionStorage.getItem("searchfor") || "",
  });
  useEffect(() => {
    if (location.pathname === "/") {
      sessionStorage.removeItem("searchfor");

      setUser((prevUser) => ({
        ...prevUser,
        searchfor: "",
      }));
    }
  }, [location.pathname]);

  useEffect(() => {
    if (user.searchfor) {
      sessionStorage.setItem("searchfor", user.searchfor);
    } else {
      sessionStorage.removeItem("searchfor");
    }
  }, [user.searchfor]);
  return (
    <Routes>
      <Route path="/" element={<Homepage user={user} setUser={setUser} />} />
      <Route path="/shop" element={<Shop user={user} setUser={setUser} />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
