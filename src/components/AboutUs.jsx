import { ArrowRight } from "../assets/icons";
import { ScrollAnimation } from "../components/ScrollAnimation";
import { Link } from "react-router-dom";

const coffeeHighlights = [
  "Espresso — rich coffee, hot water.",
  "Caramel latte — espresso, milk, caramel.",
  "Mocha — espresso, chocolate, steamed milk.",
];

export function AboutUs() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: "url('/menu-bg.png')" }}
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 md:grid-cols-2 md:gap-10 lg:px-12 lg:py-20">
        <div className="relative mx-auto flex aspect-[4/3] w-full max-w-xl items-center justify-center">
          <img
            src="/src/assets/images/moving-dotts.png"
            alt=""
            aria-hidden="true"
            className="absolute left-0 top-1/4 w-1/3 max-w-40"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(27%) sepia(30%) saturate(900%) hue-rotate(350deg) brightness(90%)",
            }}
          />
          <img
            src="/src/assets/images/about1.png"
            alt="A Brewnora barista preparing a pour-over coffee"
            className="relative z-10 max-h-full w-[82%] object-contain"
          />
          <img
            src="/src/assets/images/coffee.png"
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 left-1 w-[22%] max-w-28"
          />
          <img
            src="/src/assets/images/map.png"
            alt=""
            aria-hidden="true"
            className="absolute right-0 top-0 z-10 w-[22%] max-w-28 rounded-lg"
          />
        </div>

        <ScrollAnimation direction="up">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-3 flex flex-col">
              <span className="w-20 border border-yellow-900 lg:w-28" />
              <p className="text-sm tracking-widest lg:text-base">ABOUT US</p>
              <span className="w-20 border border-yellow-900 lg:w-28" />
            </div>
            <h2 className="mb-4 font-['Fredericka_the_Great'] text-3xl leading-tight text-[#634832] sm:text-4xl">
              One Of The Best Coffee Service
            </h2>
            <p className="mb-6 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
              We serve more than just coffee — we create little moments of
              warmth and happiness. From your first sip to your last, every cup
              is made to make your day better.
            </p>
            <ul className="mb-7 flex flex-col gap-3 text-left text-sm text-gray-700 sm:text-base">
              {coffeeHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-1 shrink-0 text-[#634832]">
                    <ArrowRight />
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-flex w-fit items-center justify-center rounded-lg bg-[#634832] px-6 py-3 text-sm font-bold text-white shadow-[0px_7px_10px_0px_rgba(211,162,69,0.6)] transition hover:bg-[#503824] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#634832]"
            >
              See More About Us
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
