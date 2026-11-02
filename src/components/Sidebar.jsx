import { useState } from "react";
import { Link } from "react-router-dom";
import { DropdownArrow, XMark } from "../assets/icons";

const menuGroups = [
  {
    label: "Page",
    items: [
      ["Welcome", "/"],
      ["About Brewnora", "/about"],
      ["The Menu", "/#menu"],
      ["Our Roots", "/#about"],
      ["Beans & Gear", "/shop"],
      ["Bean Stories", "/#blog"],
      ["Find Us", "/#contact"],
    ],
  },
  {
    label: "Blog",
    items: [
      ["Bean Stories", "/#blog"],
      ["Brew Tips", "/#blog"],
      ["Cafe Life", "/#blog"],
      ["Order Like a Pro", "/#blog"],
    ],
  },
  {
    label: "Shop",
    items: [
      ["Shop", "/shop"],
      ["Cart", "/cart"],
      ["Checkout", "/checkout"],
    ],
  },
];

const rowClass =
  "w-full rounded-lg px-3 py-3 text-left text-[17px] text-amber-50 transition-colors hover:bg-white/10";

export function Sidebar({ mobileMenuStatus, setMobileMenuStatus }) {
  const [openMenu, setOpenMenu] = useState(null);
  const close = () => setMobileMenuStatus(false);

  return (
    <>
      <button
        type="button"
        onClick={close}
        aria-label="Close navigation menu"
        tabIndex={mobileMenuStatus ? 0 : -1}
        className={`fixed inset-0 top-20 z-[90] bg-black/50 transition-opacity duration-300 lg:hidden ${
          mobileMenuStatus
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        inert={!mobileMenuStatus}
        className={`fixed bottom-0 left-0 top-20 z-[91] flex w-72 flex-col items-start overflow-y-auto rounded-br-md bg-gradient-to-b from-[#451a03] to-[#1c1008] pl-5 pt-5 text-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuStatus ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex w-[90%] items-center justify-between border-b border-white/10 pb-4">
          <span className="font-[Arizonia] text-3xl text-amber-200">
            Brewnora
          </span>
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-red-500"
          >
            <XMark />
          </button>
        </div>

        <nav className="mt-4 flex w-[90%] flex-col gap-1">
          <Link to="/" onClick={close} className={rowClass}>
            Home
          </Link>
          {menuGroups.map(({ label, items }) => {
            const isOpen = openMenu === label;
            return (
              <div key={label}>
                <button
                  type="button"
                  onClick={() =>
                    setOpenMenu((previous) =>
                      previous === label ? null : label,
                    )
                  }
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
                    <div className="mb-2 ml-5 mt-1 flex flex-col gap-0.5 border-l border-amber-200/25 pl-2">
                      {items.map(([text, to]) => (
                        <Link
                          key={text}
                          to={to}
                          onClick={close}
                          className="w-full rounded-md px-3 py-2 text-left text-[15px] text-amber-100/80 transition-colors hover:bg-white/5 hover:text-white"
                        >
                          {text}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <Link to="/#contact" onClick={close} className={rowClass}>
            Contact
          </Link>
          <Link to="/#team" onClick={close} className={rowClass}>
            Team
          </Link>
          <Link to="/#reviews" onClick={close} className={rowClass}>
            Reviews
          </Link>
        </nav>

        <Link
          to="/shop"
          onClick={close}
          className="mb-8 mt-auto w-[90%] rounded-xl bg-amber-600 py-3 text-center font-semibold text-white shadow-lg transition hover:bg-amber-500"
        >
          Buy Now
        </Link>
      </aside>
    </>
  );
}
