import { useState } from "react";
import { HamburgerMenu, DropdownArrow } from "../assets/icons";
import { Sidebar } from "./Sidebar";
export function Header() {
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);

  return (
    <>
      <header className="w-full bg-amber-950 sticky top-0 md:text-white z-99">
        <div className="ml-auto mr-auto flex justify-between  items-center h-22 md:h-20 ">
          <button
            className="ml-5"
            onClick={() => setMobileMenuStatus((prev) => !prev)}
          >
            <HamburgerMenu />
          </button>

          <div className="hidden md:flex gap-2 lg:gap-5 mr-5 lg:-ml-20 lg:mr-15 xl:gap-8">
            <button className="cursor-pointer">Home</button>
            <div className="relative group w-fit">
              <button className="flex items-center gap-1 cursor-pointer">
                Page
                <DropdownArrow />
              </button>
              <PageDropDown />
            </div>
            <button className="cursor-pointer">Contact</button>
            <button className="cursor-pointer">Team</button>
          </div>

          <div className=" ml-[37%] mr-auto flex justify-center pr-1 md:ml-0 md:mr-0">
            <img src="../src/assets/images/logo.png" className="w-11 md:w-10" />
          </div>

          <div className="hidden md:flex gap-2 lg:gap-5 ml-5 lg:ml-15 lg:-mr-20 xl:gap-8">
            <div className="relative group w-fit">
              <button className="flex items-center cursor-pointer">
                Blog
                <DropdownArrow />
              </button>
              <BlogDropDown />
            </div>
            <button className="cursor-pointer mr-1">Reviews</button>
            <div className="relative group w-fit">
              <button className="flex items-center cursor-pointer">
              Shop
              <DropdownArrow />
            </button>
            <ShopDropDown />
            </div>
            <button className="cursor-pointer">Account</button>
          </div>
          <button className="hidden md:flex bg-yellow-700 mr-5 text-white p-2 rounded-md cursor-pointer">
            Buy Now
          </button>
        </div>
      </header>

      <Sidebar
        mobileMenuStatus={mobileMenuStatus}
        setMobileMenuStatus={setMobileMenuStatus}
      />
    </>
  );
}

export function PageDropDown() {
  return (
    <div
      className="absolute -left-18 top-full z-50 w-50 pt-4
        invisible opacity-0 translate-y-2
        transition-all duration-300 ease-in-out
        group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
        group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0"
    >
      <div
        className="flex flex-col rounded-2xl bg-[#967259] p-2 text-white shadow-sm shadow-[#967259]
          [&_button]:cursor-pointer [&_button]:rounded-2xl [&_button]:border [&_button]:border-transparent
          [&_button]:px-7 [&_button]:py-2 [&_button]:text-left
          [&_button]:transition-colors [&_button]:duration-200
          [&_button:hover]:border-dotted [&_button:hover]:border-[#967259]
          [&_button:hover]:bg-white [&_button:hover]:text-[#967259]"
      >
        <button>Welcome</button>
        <button>The Menu</button>
        <button>Our Roots</button>
        <button>Beans & Gear</button>
        <button>Bean Stories</button>
        <button>Find Us</button>
      </div>
    </div>
  );
}

export function BlogDropDown() {
  return (
    <div
      className="absolute -left-18 top-full z-50 w-50 pt-4
        invisible opacity-0 translate-y-2
        transition-all duration-300 ease-in-out
        group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
        group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0"
    >
      <div
        className="flex flex-col rounded-2xl bg-[#967259] p-2 text-white shadow-sm shadow-[#967259]
          [&_button]:cursor-pointer [&_button]:rounded-2xl [&_button]:border [&_button]:border-transparent
          [&_button]:px-7 [&_button]:py-2 [&_button]:text-left
          [&_button]:transition-colors [&_button]:duration-200
          [&_button:hover]:border-dotted [&_button:hover]:border-[#967259]
          [&_button:hover]:bg-white [&_button:hover]:text-[#967259]"
      >
        <button>Bean Stories</button>
        <button>Brew Tips</button>
        <button>Cafe Life</button>
        <button>Order Like a Pro</button>
      </div>
    </div>
  );
}

export function ShopDropDown() {
  return (
    <div
      className="absolute -left-18 top-full z-50 w-50 pt-4
        invisible opacity-0 translate-y-2
        transition-all duration-300 ease-in-out
        group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
        group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0"
    >
      <div
        className="flex flex-col rounded-2xl bg-[#967259] p-2 text-white shadow-sm shadow-[#967259]
          [&_button]:cursor-pointer [&_button]:rounded-2xl [&_button]:border [&_button]:border-transparent
          [&_button]:px-7 [&_button]:py-2 [&_button]:text-left
          [&_button]:transition-colors [&_button]:duration-200
          [&_button:hover]:border-dotted [&_button:hover]:border-[#967259]
          [&_button:hover]:bg-white [&_button:hover]:text-[#967259]"
      >
        <button>Cart</button>
        <button>Checkout</button>
        <button>My Account</button>
      </div>
    </div>
  );
}