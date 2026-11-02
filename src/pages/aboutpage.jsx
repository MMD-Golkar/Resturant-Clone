import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ScrollToTop } from "../components/ScrollToTop";

const values = [
  {
    title: "Coffee made with care",
    description:
      "We choose thoughtfully sourced beans and prepare every cup with attention, from the first grind to the final pour.",
  },
  {
    title: "A place to slow down",
    description:
      "Brewnora is a welcoming neighborhood café for good conversations, a quiet break, or a fresh start to your day.",
  },
  {
    title: "Fresh from our kitchen",
    description:
      "Pair your favorite coffee with pastries and comforting café favorites made to bring a little joy to the table.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative isolate overflow-hidden bg-cover bg-center px-5 py-16 text-center text-white sm:py-20 md:py-28"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        >
          <div className="absolute inset-0 -z-10 bg-black/45" />
          <div className="relative">
            <p className="font-[Arizonia] text-2xl sm:text-3xl">Our story</p>
            <h1 className="mx-auto mt-3 max-w-3xl font-['Fredericka_the_Great'] text-4xl leading-tight sm:text-5xl md:text-6xl">
              Welcome to Brewnora
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/85 sm:text-base">
              A cozy coffee house built around carefully made drinks, fresh
              favorites, and the little moments that make a day feel special.
            </p>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 py-12 sm:px-8 md:grid-cols-2 md:gap-12 md:py-20">
          <img
            src="/src/assets/images/about1.png"
            alt="A Brewnora barista preparing a fresh coffee"
            className="mx-auto max-h-[28rem] w-full max-w-lg object-contain"
          />
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#967259]">
              WHO WE ARE
            </p>
            <h2 className="mt-3 font-['Fredericka_the_Great'] text-3xl leading-tight text-[#634832] sm:text-4xl">
              More than a cup of coffee
            </h2>
            <p className="mt-5 leading-7 text-gray-600">
              Brewnora brings together the things we love about a neighborhood
              café: the aroma of freshly brewed coffee, a warm welcome, and
              something delicious to share. Whether you are stopping in on the
              way to work or staying awhile with friends, we want every visit
              to feel easy and memorable.
            </p>
            <p className="mt-4 leading-7 text-gray-600">
              From classic espresso drinks to seasonal treats, our menu is made
              for discovering a new favorite or returning to the one you
              already love.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-lg bg-[#634832] px-6 py-3 font-semibold text-white transition hover:bg-[#503824]"
              >
                Explore the menu
              </Link>
              <Link
                to="/#booking"
                className="inline-flex items-center justify-center rounded-lg border border-[#634832] px-6 py-3 font-semibold text-[#634832] transition hover:bg-[#634832] hover:text-white"
              >
                Book a table
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f1eb] px-5 py-12 sm:px-8 md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <p className="text-sm font-semibold tracking-[0.2em] text-[#967259]">
                THE BREWNORA WAY
              </p>
              <h2 className="mt-3 font-['Fredericka_the_Great'] text-3xl text-[#634832] sm:text-4xl">
                Made for good moments
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {values.map((value) => (
                <article
                  key={value.title}
                  className="rounded-2xl border border-[#634832]/10 bg-white p-6 shadow-sm sm:p-8"
                >
                  <span
                    className="mb-4 block h-1 w-12 rounded-full bg-[#967259]"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-semibold text-[#634832]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
