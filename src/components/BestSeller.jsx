import { BestSelleritems } from "../lists";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {ChevronLeft , ChevronRight} from "../assets/icons"

//this is the code i wrote before using Ai

/*
export function BestSeller() {
  return (
    <section>
      <div className="flex flex-col items-center mb-20">
        <span className="border mt-1 w-28 border-amber-900"></span>
        <p className="text-md tracking-widest">PEOPLE'S CHOICE</p>
        <span className="border mt-1 w-31 border-amber-900"></span>
        <h4 className="text-2xl font-['Fredericka_the_Great'] text-[#634832] mt-3">
          Best Seller
        </h4>
      </div>
      {BestSelleritems.map((item) => (
        <BestSellerItems
          key={item.id}
          imgURL={item.imgURL}
          price={item.price}
          name={item.name}
        />
      ))}
    </section>
  );
}

export function BestSellerItems({imgURL , price , name}) {
  return (
    <div className="relative hover:text-white hover:[&_p]:bg-[#634832] cursor-pointer hover:bg-[#967259] mt-40 mb-30 rounded-br-4xl rounded-tl-4xl rounded-tr-lg rounded-bl-lg h-70 w-[85%] ml-auto mr-auto flex items-end justify-center">
      <div className="flex -mt-40 ml-12">
        <img src={imgURL} className="max-h-100 " />
        <p className="mt-10 ml-2 w-10 flex items-center justify-center rounded-full h-10">
          ${price}
        </p>
      </div>
      <div className="absolute text-white items-center gap-0.5 flex flex-col bottom-10 ">
        <span className="border-white w-20 border border-b-0"></span>
        <h6>{name}</h6>
        <span className="bg-white w-20 border border-b-0"></span>
      </div>
    </div>
  );
}
*/

//this is the code changed by Ai

export function BestSeller() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 6000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative  md:h-75 ">
      <div className="flex flex-col items-center mt-15">
        <span className="border mt-1 w-31 border-amber-900"></span>
        <p className="text-md tracking-widest">PEOPLE'S CHOICE</p>
        <span className="border mt-1 w-31 border-amber-900"></span>
        <h4 className="text-2xl font-['Fredericka_the_Great'] text-[#634832] mt-3">
          Best Seller
        </h4>
      </div>

      <div className="relative flex flex-col md:w-[90%] md:justify-center ml-auto mr-auto md:bg-white md:mb-10 md:rounded-3xl md:absolute  md:left-1/2 md:-translate-x-1/2 z-5">
        <div className="overflow-hidden pt-5 md:pt-0 " ref={emblaRef}>
          <div className="flex">
            {BestSelleritems.map((item) => (
              <div
                key={item.id}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] min-w-0 "
              >
                <BestSellerItems
                  imgURL={item.imgURL}
                  price={item.price}
                  name={item.name}
                />
              </div>
            ))}
          </div>
        </div>

        <button
            onClick={scrollPrev}
            aria-label="Previous item"
            className="hidden absolute w-10 h-10 md:flex justify-center items-center pr-1 rounded-full bg-[#634832] text-white cursor-pointer hover:bg-[#967259]"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next item"
            className="hidden absolute right-0 w-10 h-10 md:flex justify-center items-center  rounded-full bg-[#634832] text-white cursor-pointer hover:bg-[#967259]"
          >
            <ChevronRight />
          </button>

        <div className="flex ml-auto mr-auto gap-1 md:hidden mb-5">
          <button
            onClick={scrollPrev}
            aria-label="Previous item"
            className=" w-12 h-12 flex justify-center items-center pr-1 rounded-full bg-[#634832] text-white cursor-pointer hover:bg-[#967259]"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next item"
            className=" w-12 h-12 flex justify-center items-center  rounded-full bg-[#634832] text-white cursor-pointer hover:bg-[#967259]"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export function BestSellerItems({ imgURL, price, name }) {
  return (
    <div className="relative hover:text-white md:bg-white hover:[&_p]:bg-[#634832] cursor-pointer hover:bg-[#967259] md:hover:bg-white  mb-5 rounded-br-4xl rounded-tl-4xl rounded-tr-lg rounded-bl-lg h-70 md:h-90 mt-30 md:mt-10 md:w-64 md:rounded-3xl w-[85%] ml-auto mr-auto flex items-end justify-center">
      <div className="flex pl-5 md:pl-0">
        <img src={imgURL} className="max-h-100 relative md:max-h-90" />
        
        <p className="mt-10 ml-2 w-12 flex items-center justify-center rounded-full h-12 md:absolute md:right-3 md:bg-white md:-top-7 md:hover:text-white">
          ${price}
        </p>
      </div>
      <div className="absolute text-white items-center gap-0.5 flex flex-col bottom-10 ">
        <span className="border-white w-20 border border-b-0"></span>
        <h6>{name}</h6>
        <span className="bg-white w-20 border border-b-0"></span>
      </div>
    </div>
  );
}
