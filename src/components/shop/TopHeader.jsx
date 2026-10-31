/*import {ScrollAnimation} from "../ScrollAnimation"
export function TopHeader({user}) {
 
  return (
    <section
      style={{ backgroundImage: "url('../shop-header.png')" }}
      className="h-70 w-full sm:pr-7 md:pr-25 bg-cover bg-top max-[767px]:-mt-200 bg-no-repeat text-white flex flex-col justify-center items-center text-center"
    >
      <ScrollAnimation direction="left">
        <h1 className="font-['Fredericka_the_Great'] text-3xl mb-5 md:text-4xl lg:text-5xl xl:text-6xl">Archives: Shop</h1>
        <p className="mb-5 md:font-semibold md:text-lg">This is where you can browse products in this store.</p>
        {user.searchfor && <div>
            <p className="mb-5 md:font-semibold md:text-lg">Search query for:</p>
            <p className="md:font-semibold md:text-lg">Home » {user.searchfor}</p>
        </div>}
      </ScrollAnimation>
    </section>
  );
}
*/

import { useLocation } from "react-router-dom";
import { ScrollAnimation } from "../ScrollAnimation";

// Text for each route. Add a new route here and it just works.
const PAGE_CONTENT = {
  "/shop": {
    title: "Archives: Shop",
    subtitle: "This is where you can browse products in this store.",
  },
  "/cart": {
    title: "Your Cart",
    subtitle: "Review your items before you check out.",
  },
};

export function TopHeader({ user }) {
  const { pathname } = useLocation();

  // Find the entry whose route the current path starts with, else use shop.
  const routeKey =
    Object.keys(PAGE_CONTENT).find((route) => pathname.startsWith(route)) ??
    "/shop";
  const { title, subtitle } = PAGE_CONTENT[routeKey];

  // The search info only makes sense on the shop page.
  const showSearch = routeKey === "/shop" && user?.searchfor;

  return (
    <section
      style={{ backgroundImage: "url('../shop-header.png')" }}
      className="h-70 w-full sm:pr-7 md:pr-25 bg-cover bg-top max-[767px]:-mt-200 bg-no-repeat text-white flex flex-col justify-center items-center text-center"
    >
      <ScrollAnimation direction="left">
        <h1 className="font-['Fredericka_the_Great'] text-3xl mb-5 md:text-4xl lg:text-5xl xl:text-6xl">
          {title}
        </h1>
        <p className="mb-5 md:font-semibold md:text-lg">{subtitle}</p>
        {showSearch && (
          <div>
            <p className="mb-5 md:font-semibold md:text-lg">Search query for:</p>
            <p className="md:font-semibold md:text-lg">
              Home » {user.searchfor}
            </p>
          </div>
        )}
      </ScrollAnimation>
    </section>
  );
}
