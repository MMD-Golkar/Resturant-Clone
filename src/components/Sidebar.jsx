import { DropdownArrow, XMark } from "../assets/icons";
import { useState } from "react";
export function Sidebar({ mobileMenuStatus , setMobileMenuStatus}) {
  const [blogDropDownStatus, setBlogDropDownStatus] = useState(false);
  const [pageDropDownStatus, setPageDropDownStatus] = useState(false);
  const [shopDropDownStatus, setShopDropDownStatus] = useState(false);
  return (
    <aside
      className={`md:hidden top-22 z-99 [&_button]:cursor-pointer rounded-br-md flex flex-col w-70 sticky left-0 items-start pl-10 pt-5 transition-transform duration-600 ease-in-out bg-yellow-800 text-white h-200 ${mobileMenuStatus ? "translate-x-0" : "-translate-x-full"}`}
      inert={!mobileMenuStatus}
    >
      <button className="bg-red-500 p-0.5 right-5 rounded-sm ml-auto mr-5" onClick={()=> setMobileMenuStatus(false)}><XMark /></button>  
      <button className="mt-5">Home</button>
      <button
        className="flex items-center gap-1 mt-5 mb-3"
        onClick={() => setBlogDropDownStatus((Prev) => !Prev)}
      >
        Blog
        <DropdownArrow />
      </button>
      {blogDropDownStatus && (
        <div className="flex flex-col ml-5 gap-1 items-start [&_button]:underline">
          <button>Bean Stories</button>
          <button>Brew Tips</button>
          <button>Cafe Life</button>
          <button>Order Like a Pro</button>
        </div>
      )}
      <button
        className="flex items-center gap-1 mt-2 mb-3"
        onClick={() => setPageDropDownStatus((Prev) => !Prev)}
      >
        Page
        <DropdownArrow />
      </button>
      {pageDropDownStatus && (
        <div className="flex flex-col ml-5 gap-1 items-start [&_button]:underline">
          <button>Welcome</button>
          <button>The Menu</button>
          <button>Our Roots</button>
          <button>Beans & Gear</button>
          <button>Bean Stories</button>
          <button>Find Us</button>
        </div>
      )}

      <button
        className="flex items-center gap-1 mt-2 mb-3"
        onClick={() => setShopDropDownStatus((Prev) => !Prev)}
      >
        Shop
        <DropdownArrow />
      </button>

      {shopDropDownStatus && (
        <div className="flex flex-col items-start ml-5 gap-1 [&_button]:underline">
          <button>Cart</button>
          <button>Checkout</button>
          <button>My Account</button>
        </div>
      )}
      <button className="mt-2">Contact</button>
      <button className="mt-4 mb-5">Buy Now</button>
    </aside>
  );
}

