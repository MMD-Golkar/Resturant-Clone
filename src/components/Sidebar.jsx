 /* import { DropdownArrow, XMark } from "../assets/icons";
import { useState } from "react";
export function Sidebar({ mobileMenuStatus , setMobileMenuStatus}) {
  const [blogDropDownStatus, setBlogDropDownStatus] = useState(false);
  const [pageDropDownStatus, setPageDropDownStatus] = useState(false);
  const [shopDropDownStatus, setShopDropDownStatus] = useState(false);
  return (
    <aside
      className={`md:hidden max-[767px]: top-22 z-99 [&_button]:cursor-pointer rounded-br-md flex flex-col w-70 sticky left-0 items-start pl-10 pt-5 transition-transform duration-600 ease-in-out bg-yellow-800 text-white h-200 ${mobileMenuStatus ? "translate-x-0" : "-translate-x-full"}`}
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
*/


import { useState } from "react";
import { DropdownArrow, XMark } from "../assets/icons";

const MENU = [
  {
    label: "Blog",
    items: ["Bean Stories", "Brew Tips", "Cafe Life", "Order Like a Pro"],
  },
  {
    label: "Page",
    items: [
      "Welcome",
      "The Menu",
      "Our Roots",
      "Beans & Gear",
      "Bean Stories",
      "Find Us",
    ],
  },
  {
    label: "Shop",
    items: ["Cart", "Checkout", "My Account"],
  },
];

const rowClass =
  "w-full cursor-pointer rounded-lg px-3 py-3 text-left text-[17px] text-amber-50 transition-colors hover:bg-white/10";

export function Sidebar({ mobileMenuStatus, setMobileMenuStatus }) {
  const [openMenu, setOpenMenu] = useState(null);

  const close = () => setMobileMenuStatus(false);
  const toggle = (label) =>
    setOpenMenu((prev) => (prev === label ? null : label));

  return (
    <>
      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 top-22 z-90 bg-black/50 transition-opacity duration-500 md:hidden ${
          mobileMenuStatus ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        inert={!mobileMenuStatus}
        className={`md:hidden max-[767px]: top-22 z-99 [&_button]:cursor-pointer rounded-br-md flex flex-col w-70 sticky left-0 items-start pl-10 pt-5 transition-transform duration-600 ease-in-out bg-linear-to-b from-[#451a03] to-[#1c1008] text-white h-200 ${mobileMenuStatus ? "translate-x-0" : "-translate-x-full"}`}
      >
   
        <div className="flex items-center justify-between border-b border-white/10 pb-4 w-[90%]">
          <span className="font-[Arizonia] text-3xl text-amber-200">
            Brewnora
          </span>
          <button
            onClick={close}
            aria-label="Close menu"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-red-500 active:scale-95"
          >
            <XMark />
          </button>
        </div>

  
        <nav className="mt-4 flex flex-col gap-1 w-[90%]">
          <button className={rowClass}>Home</button>

          {MENU.map(({ label, items }) => {
            const isOpen = openMenu === label;
            return (
              <div key={label}>
                <button
                  onClick={() => toggle(label)}
                  aria-expanded={isOpen}
                  className={`${rowClass} flex items-center justify-between ${
                    isOpen ? "bg-white/10" : ""
                  }`}
                >
                  {label}
                  <span
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <DropdownArrow />
                  </span>
                </button>

               
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mt-1 mb-2 ml-5 flex flex-col gap-0.5 border-l border-amber-200/25 pl-2">
                      {items.map((item) => (
                        <button
                          key={item}
                          className="w-full cursor-pointer rounded-md px-3 py-2 text-left text-[15px] text-amber-100/80 transition-colors hover:bg-white/5 hover:text-white"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <button className={rowClass}>Contact</button>
        </nav>

        <button className="mt-auto mb-10 w-[90%] cursor-pointer rounded-xl bg-amber-600 py-3 font-semibold text-white shadow-lg shadow-black/30 transition hover:bg-amber-500 active:scale-[0.98]">
          Buy Now
        </button>
      </aside>
    </>
  );
}
