import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Categories } from "../lists";

// this is the code i wrote before using Ai
/*export function Category() {
  return (
    <section>
      <div className="flex flex-col  h-100 items-center z-10  mb-30 cursor-pointer">
        <span className="w-37 mb-1 border border-amber-900 mt-15"></span>
        <h4 className="tracking-widest">OFFERED MENUS</h4>
        <span className="w-37 mt-1 border border-amber-900 "></span>
        <h4 className="font-['Fredericka_the_Great'] text-2xl text-[#634832] mt-3">
          Our Category
        </h4>
        {Categories.map((category) => (
          <div className="w-[90%] ease-in-out duration-600 hover:bg-[#634832] hover:text-white h-50 mt-7 rounded-lg" key={category.id}>
            <div className="flex flex-col items-center mt-10 relative">
              <span className="w-10 h-10  rounded-full bg-[#967259] absolute ml-22"></span>
              <button className="bg-gray-300 w-23 h-23 rounded-full flex justify-center items-center">
                <img src={category.url} />
              </button>
              <p className=" mt-2">{category.categoryname}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}*/

// this is my code edited by Ai and added slide effect
export function Category() {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({
      speed: 1.5,
      direction: "forward", // left to right. Use "forward" for right to left
      startDelay: 0,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  return (
    <section>
      <div className="flex flex-col items-center z-10 mb-30">
        <span className="w-37 mb-1 border border-amber-900 mt-15"></span>
        <h4 className="tracking-widest">OFFERED MENUS</h4>
        <span className="w-37 mt-1 border border-amber-900"></span>
        <h4 className="font-['Fredericka_the_Great'] text-2xl text-[#634832] mt-3">
          Our Category
        </h4>

        <div className="w-[90%] mt-7">
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            ref={emblaRef}
          >
            <div className="flex -ml-4">
              {Categories.map((category) => (
                <div
                  key={category.id}
                  className="min-w-0 shrink-0 grow-0 basis-1/2 md:basis-1/3 xl:basis-1/5 pl-4"
                >
                  <div className="ease-in-out duration-600 hover:bg-[#634832] hover:text-white h-50 rounded-lg cursor-pointer flex justify-center">
                    <div className="flex flex-col items-center mt-10 relative">
                      <span
                        className={`w-10 h-10 rounded-full ${category.theme} absolute ml-22`}
                      ></span>
                      <button className="bg-gray-300 w-23 h-23 rounded-full flex justify-center items-center">
                        <img
                          src={category.url}
                          alt={category.categoryname}
                          draggable="false"
                        />
                      </button>
                      <p className="mt-2">{category.categoryname}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
