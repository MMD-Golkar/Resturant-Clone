import { MapPin } from "../assets/icons";
import { FaTruck } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { WhyUsSliderList } from "../lists";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function WhyUs() {
 
  return (
    <section>
      <div className="w-[90%] xl:w-[80%] ml-auto mr-auto flex md:flex-row flex-col items-center pb-10 pt-10">
        <img
          src="../src/assets/images/why-choose1.png"
          className="z-5 md:max-w-70 relative lg:max-w-100"
        />
        <div className="flex -mt-10 z-10 items-end ml-15 md:absolute  -left-3 md:mt-80 md:ml-20 lg:ml-30 lg:mt-90 xl:ml-60">
          <img
            src="../src/assets/images/why-choose2.png"
            className="md:w-50 lg:w-70"
          />
          <span className="h-25 w-25 rounded-full flex items-center justify-center md:w-20 md:h-20 bg-[#DBC1AC] z-11 -ml-7">
            <MapPin />
          </span>
        </div>
        <div className="md:flex hidden flex-col items-center pb-10 text-black w-[90%] ml-auto mr-auto">
          <span className="border mb-1 w-30 border-[#967259]"></span>
          <p className="text-md tracking-widest">WHY CHOOSE US</p>
          <span className="border mt-1 w-30 border-[#967259]"></span>
          <h4 className="text-2xl font-['Fredericka_the_Great'] mb-5 text-[#634832] mt-3">
            Why We Are The Best?
          </h4>
          <p className="text-sm text-gray-500 w-[90%] text-center">
            Every cup is brewed fresh from carefully sourced beans, roasted to
            bring out the best in each blend. Our cozy, warm space is made for
            slowing down, whether you're catching up with a friend or settling
            in with a book.
          </p>
          <div className="hidden lg:grid md:mt-5  pb-10 flex-col sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:w-[90%] sm:ml-auto sm:mr-auto [&_svg]:text-[#634832] [&_button]:flex [&_button]:flex-col [&_button]:items-center [&_button]:border-l-5 [&_button]:w-[90%] [&_button]:ml-auto [&_button]:mr-auto [&_button]:py-7 [&_button]:gap-1 gap-7 [&_button]:hover:bg-[#967259] [&_button]:rounded-tr-lg [&_button]:rounded-br-lg [&_button]:border-[#634832] [&_button:hover_svg]:text-white [&_button:hover_p]:text-white [&_button]:duration-500 ease-in-out">
            <button>
              <FaTruck className=" size-8" />
              <p className="font-semibold">Fast Delivery</p>
            </button>
            <button>
              <FaHeadphones className=" size-8" />
              <p className="font-semibold">24/7 Services</p>
            </button>
            <button>
              <FaBirthdayCake className=" size-8" />
              <p className="font-semibold">Fresh Food</p>
            </button>
            <button>
              <FaHandshake className=" size-8" />
              <p className="font-semibold">Quality Maintain</p>
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col items-center pb-10 text-black w-[90%] ml-auto mr-auto">
        <span className="border mb-1 w-30 border-[#967259]"></span>
        <p className="text-md tracking-widest">WHY CHOOSE US</p>
        <span className="border mt-1 w-30 border-[#967259]"></span>
        <h4 className="text-2xl font-['Fredericka_the_Great'] mb-5 text-[#634832] mt-3">
          Why We Are The Best?
        </h4>
        <p className="text-sm text-gray-500 w-[90%] text-center">
          Every cup is brewed fresh from carefully sourced beans, roasted to
          bring out the best in each blend. Our cozy, warm space is made for
          slowing down, whether you're catching up with a friend or settling in
          with a book.
        </p>
      </div>

      <div className="md:hidden flex pb-10 flex-col sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:w-[80%] sm:ml-auto sm:mr-auto [&_svg]:text-[#634832] [&_button]:flex [&_button]:flex-col [&_button]:items-center [&_button]:border-l-5 [&_button]:w-[90%] [&_button]:ml-auto [&_button]:mr-auto [&_button]:py-7 [&_button]:gap-1 gap-7 [&_button]:hover:bg-[#967259] [&_button]:rounded-tr-lg [&_button]:rounded-br-lg [&_button]:border-[#634832] [&_button:hover_svg]:text-white [&_button:hover_p]:text-white [&_button]:duration-500 ease-in-out">
        <button>
          <FaTruck className=" size-8" />
          <p className="font-semibold">Fast Delivery</p>
        </button>
        <button>
          <FaHeadphones className=" size-8" />
          <p className="font-semibold">24/7 Services</p>
        </button>
        <button>
          <FaBirthdayCake className=" size-8" />
          <p className="font-semibold">Fresh Food</p>
        </button>
        <button>
          <FaHandshake className=" size-8" />
          <p className="font-semibold">Quality Maintain</p>
        </button>
      </div>

      <div className="bg-[url('../src/assets/images/coffeebean.png')] bg-cover bg-center bg-no-repeat w-full h-110">
  <div className="backdrop-blur-xs w-full h-full flex flex-col justify-center items-center">
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      rewind={true}
      pagination={{ el: ".why-us-dots", clickable: true }}
      grabCursor={true}
      spaceBetween={16}
      breakpoints={{
        0: { slidesPerView: 1, slidesPerGroup: 1 },
        768: { slidesPerView: 2, slidesPerGroup: 2 },
        1024: { slidesPerView: 4, slidesPerGroup: 4 },
      }}
      className="w-full min-w-0 py-6 px-4"
    >
      {WhyUsSliderList.map((product) => (
        <SwiperSlide key={product.id}>
          <WhyusSliderComponent
            title={product.title}
            description={product.description}
            img={product.img}
          />
        </SwiperSlide>
      ))}
    </Swiper>

    <div className="why-us-dots flex mt-5 gap-3 justify-center [--swiper-pagination-color:#fff] [--swiper-pagination-bullet-inactive-color:#fff] [--swiper-pagination-bullet-inactive-opacity:0.4] [--swiper-pagination-bullet-size:10px]" />
  </div>
</div>
    </section>
  );
}

export function WhyusSliderComponent({ title, description, img }) {
  return (
    <div className="flex flex-col items-center justify-center text-white  w-110 md:w-100  lg:w-[90%] ml-auto mr-auto border  border-transparent hover:border-black py-5 rounded-md hover:shadow-[0_5px_10px_3px_rgba(0,0,0,2)]">
      <img src={img} className="mb-5 size-25 bg-transparent" />
      <p className="font-semibold text-xl">{title}</p>
      <p className="text-sm mt-2 mb-3 text-center w-[90%]">{description}</p>
      <button className="cursor-pointer px-4 py-1 rounded-lg hover:text-white hover:bg-amber-900">
        See More
      </button>
    </div>
  );
}
