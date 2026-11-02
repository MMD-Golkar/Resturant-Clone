import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScrollAnimation } from "../components/ScrollAnimation";
import { TypingText } from "../components/TypingText";
import { handleSearch } from "../utils";

export function HeroSection({ user, setUser }) {
  const navigate = useNavigate();
  const [searcheditem, setSearchedItem] = useState("");

  return (
    <section
      className="relative isolate w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-7xl items-center gap-8 px-5 py-10 text-white sm:px-8 md:grid-cols-2 md:gap-6 lg:px-12 lg:py-16">
        <ScrollAnimation direction="up">
          <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
            <p className="mb-5 mt-2 font-[Arizonia] text-2xl italic sm:text-3xl">
              <TypingText text="Welcome to Brewnora" speed={100} />
            </p>
            <h1 className="mb-5 max-w-2xl font-['Fredericka_the_Great'] text-4xl leading-tight sm:text-5xl lg:text-6xl">
              <TypingText text="We Have Dialysis Coffee" speed={200} />
            </h1>
            <p className="mb-7 max-w-lg text-sm leading-6 text-gray-200 sm:text-base">
              Brewnora is a cozy corner for handcrafted coffee, fresh pastries,
              and warm moments, where every cup is made with care.
            </p>
            <form
              className="relative w-full max-w-lg"
              onSubmit={(event) =>
                handleSearch(event, searcheditem, user, setUser, navigate)
              }
            >
              <input
                type="search"
                className="h-12 w-full rounded-lg border border-white/30 bg-white py-3 pl-4 pr-25 text-sm text-black outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-amber-500"
                placeholder="Search products..."
                value={searcheditem}
                onChange={(event) => setSearchedItem(event.target.value)}
              />
              <button
                className="absolute right-1.5 top-1.5 bottom-1.5 rounded-md bg-yellow-700 px-4 text-sm font-semibold text-white transition hover:bg-yellow-600"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </ScrollAnimation>

        <div className="relative mx-auto flex w-full max-w-xl items-center justify-center md:max-w-none">
          <img
            src="/src/assets/images/ellipse-image.png"
            alt=""
            aria-hidden="true"
            className="absolute right-0 top-0 hidden w-3/4 max-w-lg md:block"
          />
          <img
            src="/src/assets/images/moving-dotts.png"
            alt=""
            aria-hidden="true"
            className="absolute -left-2 top-1/4 hidden w-28 md:block lg:w-40"
          />
          <img
            src="/src/assets/images/main-banner-image.png"
            alt="Freshly made latte served at Brewnora"
            className="relative z-10 w-full max-w-sm object-contain sm:max-w-md md:max-w-full lg:max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
}
