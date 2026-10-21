import { ArrowRight } from "../assets/icons";
export function AboutUs() {
  return (
    <section className="flex flex-col md:flex-row mt-10 md:mt-137 w-full lg:mt-200 lg:justify-around mb-15">
      <div className="flex w-[90%] lg:max-h-100  lg:mt-15 lg:mr-auto  mt-35 md:ml-5 md:w-80 lg:flex-1 md:mr-20 mb:10 relative h-80 min-[600px]:top-10 min-[700px]:top-30">
        <img
          src="../src/assets/images/coffee.png"
          className=" top-59 w-[20%] min-[1150px]:mt-15 xl:mt-35 min-[1500px]:ml-50 max-w-30 absolute lg:top-5 min-[720px]:left-20 md:left-0 md:-top-2 z-10 ml-5 animate-[bounce_4s_infinite] ease-in-out"
        />
        <img
          src="../src/assets/images/moving-dotts.png"
          className="w-[32%] z-10 absolute ml-5 top-20 min-[1500px]:ml-50 max-w-60 md:left-0 md:-top-27 min-[720px]:left-20 animate-[bounce_4s_infinite] ease-in-out"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(27%) sepia(30%) saturate(900%) hue-rotate(350deg) brightness(90%)",
          }}
        />
        <img
          src="../src/assets/images/about1.png"
          className="w-full z-5 absolute max-w-130 min-[1500px]:ml-50 lg:max-w-160  md:-top-40 md:left-0 ml-7 right-0 left-0 min-[650px]:left-11 min-[720px]:left-25"
        />
        <img
          src="../src/assets/images/map.png"
          className="z-10 absolute -right-5 xl:left-120 lg:right-0 min-[1500px]:ml-50 md:-top-35 max-w-30 animate-[bounce_4s_infinite] ease-in-out w-[22%] rounded-lg "
        />
      </div>
      <div className="mt-10 lg:w-148 xl:w-190 md:mt-10 md:w-100 md:pl-10 min-[1700px]:mr-50 flex flex-col lg:items-start items-center justify-center w-full min-[550px]:mt-30 min-[699px]:mt-50">
        <div className="flex flex-col ">
          <span className="w-18 border lg:w-28 border-yellow-900"></span>
          <p className="lg:text-2xl xl:text-3xl">ABOUT US</p>
          <span className="w-18 border lg:w-28 border-yellow-900"></span>
        </div>
        <h4 className="font-['Fredericka_the_Great'] text-2xl mt-3 lg:text-4xl text-[#634832] mb-3 xl:text-5xl">One Of The Best Coffee Service</h4>
        <p className="text-gray-600 text-sm w-[80%] text-center mb-6 lg:text-lg lg:text-start ">
          We serve more than just coffee — we create little moments of warmth
          and happiness. ☕ From your first sip to your last, every cup is made
          to make your day better.
        </p>
        <div className="flex flex-col mb-6 gap-2 lg:text-lg">
          <div className="flex gap-1">
            <button>
              <ArrowRight />
            </button>
            <p>Espresso — Rich coffee, hot water.</p>
          </div>
          <div className="flex gap-1">
            <button>
              <ArrowRight />
            </button>
            <p>Caramel Latte — Espresso, milk, caramel syrup.</p>
          </div>
          <div className="flex gap-1">
            <button>
              <ArrowRight />
            </button>
            <p>Mocha — Espresso, chocolate, steamed milk.</p>
          </div>
        </div>
        <button className="bg-[#634832] mb-10  shadow-[0px_7px_10px_0px_rgba(211,162,69,0.6)] text-white text-sm font-bold lg:px-12 px-7 py-3 rounded-lg cursor-pointer">
          See More About Us
        </button>
      </div>
    </section>
  );
}
