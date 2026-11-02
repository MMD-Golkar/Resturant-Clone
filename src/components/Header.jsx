import { useState } from "react";
import { Link } from "react-router-dom";
import { HamburgerMenu, DropdownArrow } from "../assets/icons";
import { BsCart2 } from "react-icons/bs";
import { Sidebar } from "./Sidebar";
import { useCart } from "../components/shop/CartContext";

const pageLinks = [
  ["Welcome", "/"],
  ["About Brewnora", "/about"],
  ["The Menu", "/#menu"],
  ["Our Roots", "/#about"],
  ["Beans & Gear", "/shop"],
  ["Bean Stories", "/#blog"],
  ["Find Us", "/#contact"],
];

const blogLinks = [
  ["Bean Stories", "/#blog"],
  ["Brew Tips", "/#blog"],
  ["Cafe Life", "/#blog"],
  ["Order Like a Pro", "/#blog"],
];

const shopLinks = [
  ["Shop", "/shop"],
  ["Cart", "/cart"],
  ["Checkout", "/checkout"],
];

function NavDropdown({ label, links }) {
  return (
    <div className="group relative w-fit">
      <button
        type="button"
        className="flex cursor-pointer items-center gap-1"
        aria-haspopup="true"
      >
        {label}
        <DropdownArrow />
      </button>
      <div
        className="invisible absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-300 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
      >
        <div className="flex flex-col rounded-2xl bg-[#967259] p-2 text-white shadow-lg">
          {links.map(([text, to]) => (
            <Link
              key={text}
              to={to}
              className="rounded-xl px-5 py-2 transition-colors hover:bg-white hover:text-[#967259]"
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      <header className="sticky top-0 z-[99] w-full bg-amber-950 text-white">
        <div className="relative mx-auto flex h-20 items-center justify-between md:h-20">
          <button
            type="button"
            className="ml-5 rounded p-2 transition hover:bg-white/10 lg:hidden"
            onClick={() => setMobileMenuStatus((previous) => !previous)}
            aria-label={mobileMenuStatus ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuStatus}
          >
            <HamburgerMenu />
          </button>

          <nav className="ml-8 hidden items-center gap-5 lg:flex lg:gap-7">
            <Link to="/" className="transition hover:text-amber-200">
              Home
            </Link>
            <NavDropdown label="Page" links={pageLinks} />
            <Link to="/#contact" className="transition hover:text-amber-200">
              Contact
            </Link>
            <Link to="/#team" className="transition hover:text-amber-200">
              Team
            </Link>
          </nav>

          <Link
            to="/"
            className="absolute left-1/2 flex -translate-x-1/2 items-center lg:static lg:translate-x-0"
            aria-label="Brewnora home"
          >
            <img
              src="/src/assets/images/logo.png"
              alt="Brewnora"
              className="w-9 md:w-10"
            />
          </Link>

          <nav className="mr-5 hidden items-center gap-5 lg:flex lg:gap-7">
            <NavDropdown label="Blog" links={blogLinks} />
            <Link to="/#reviews" className="transition hover:text-amber-200">
              Reviews
            </Link>
            <NavDropdown label="Shop" links={shopLinks} />
            <Link
              to="/shop"
              className="rounded-md bg-yellow-700 px-3 py-2 transition hover:bg-yellow-600"
            >
              Buy Now
            </Link>
          </nav>

          <Link
            to="/cart"
            aria-label={`Shopping cart${totalItems ? `, ${totalItems} items` : ""}`}
            className="relative mr-5 rounded-xl border border-white p-3 transition hover:bg-white/10"
          >
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-amber-500 px-1 text-sm text-amber-950">
                {totalItems}
              </span>
            )}
            <BsCart2 className="size-6" />
          </Link>
        </div>
      </header>

      <Sidebar
        mobileMenuStatus={mobileMenuStatus}
        setMobileMenuStatus={setMobileMenuStatus}
      />
    </>
  );
}
