import { ScrollAnimation } from "../components/ScrollAnimation";
import { TypingText } from "../components/TypingText";
export function HeroSection() {
  return (
    <section
      className="w-full bg-cover bg-top bg-no-repeat absolute top-22 md:top-20 z-10"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center mt-10 z-50 md:mt-25 lg:max-w-100 xl:max-w-150 xl:mt-20 lg:mt-50 lg:ml-10 w-[90%] ml-auto mr-auto text-white md:w-200 md:items-start md:ml-10 xl:w-120 xl:ml-10">
          <ScrollAnimation direction="up">
            <p className="italic mb-10 font-[Arizonia] text-2xl mt-20 xl:ml-35">
              <TypingText text="Welcome to Brewnora" speed={100}></TypingText>
            </p>

            <h1 className="mb-5 text-5xl flex text-center md:text-start xl:text-center font-['Fredericka_the_Great']">
              <TypingText
                text="We Have Dialysis Coffee"
                speed={200}
              ></TypingText>
            </h1>

            <p className="w-[90%] flex text-center text-sm mb-5 text-gray-300">
              Brewnora is a cozy corner for handcrafted coffee, fresh pastries,
              and warm moments, where every cup is made with care.
            </p>
            <div className="relative flex w-full">
              <input
                type="text"
                className="bg-white md:pr-20 md:ml-0 md:mr-0 text-black xl:pr-50 xl:ml-5 lg:pr-40 lg:ml-5 placeholder:text-black border rounded-lg px-4 pr-20 py-3 w-[90%] ml-auto mr-auto"
                placeholder="Search Products..."
              />
              <button className="mt-5 absolute right-7 rounded-lg -top-3.5 p-2 cursor-pointer lg:right-6 text-black min-[860px]:right-11 min-[950px]:right-12 xl:right-8 xl:px-5 bg-yellow-700 min-[600px]:right-9 min-[700px]:right-10">
                Search
              </button>
            </div>
          </ScrollAnimation>
        </div>

        <div className="flex flex-col">
          <div className="flex">
            <img
              src="../src/assets/images/moving-dotts.png"
              className="animate-[bounce_6s_infinite] ease-in-out z-5 w-50 h-30 absolute -ml-20 hidden md:inline lg:-ml-130 xl:-ml-70"
            />
            <img
              src="../src/assets/images/ellipse-image.png"
              className=" top-0 right-0 hidden md:inline lg:absolute z-10"
            />
          </div>
          <img
            src="../src/assets/images/main-banner-image.png"
            className=" w-[90%] mt-5 ml-auto mr-auto md:w-80 md:ml-auto md:-mt-5 mb-20 z-50 lg:w-130 lg:mt-60 lg:mr-20 xl:mt-30 xl:mr-50 xl:w-170"
          />
        </div>
      </div>
    </section>
  );
}
