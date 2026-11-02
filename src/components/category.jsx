import useEmblaCarousel from "embla-carousel-react";
import { Categories } from "../lists";
import { PromoBlocksvg } from "../assets/icons";
import { ScrollAnimation } from "../components/ScrollAnimation";
import { useNavigate } from "react-router-dom";

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
export function Category({ setUser }) {
  const navigate = useNavigate();
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true });

  return (
    <section id="categories" className="scroll-mt-24">
      <div className="flex flex-col items-center z-10 mb-10">
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
                  <button
                    type="button"
                    onClick={() => {
                      const searches = {
                        Burger: "burger",
                        Cake: "bakery",
                        Dessert: "bakery",
                        Pizza: "pizza",
                        Soup: "asian",
                        Sushi: "sushi",
                      };
                      setUser((previous) => ({
                        ...previous,
                        searchfor: searches[category.categoryname],
                      }));
                      navigate("/shop");
                    }}
                    className="ease-in-out duration-300 hover:bg-[#634832] hover:text-white h-50 w-full rounded-lg cursor-pointer flex justify-center"
                    aria-label={`Browse ${category.categoryname} products`}
                  >
                    <div className="flex flex-col items-center mt-10 relative">
                      <span
                        className={`w-10 h-10 rounded-full ${category.theme} absolute ml-22`}
                      ></span>
                      <span className="bg-gray-300 w-23 h-23 rounded-full flex justify-center items-center">
                        <img
                          src={category.url}
                          alt={category.categoryname}
                          draggable="false"
                        />
                      </span>
                      <p className="mt-2">{category.categoryname}</p>
                  </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ScrollAnimation direction="up">
        <div className="flex flex-col lg:flex-row w-full lg:w-[90%] lg:justify-center lg:ml-auto lg:mr-auto items-center gap-5 pt-5 pb-5">
          <a
            href="/shop"
            className=" w-[95%] lg:w-full max-w-175  h-75 rounded-3xl bg-cover bg-center bg-no-repeat flex flex-col items-start pl-10 pt-5"
            style={{ backgroundImage: "url('/promo-block1.png')" }}
            aria-label="Shop Turkish coffee"
          >
            <PromoBlocksvg />
            <div className="-mt-27 mb-20 flex flex-col items-center -rotate-30 ml-5 ">
              <p className="tracking-wider">ONLY</p>
              <div className="flex gap-1">
                <p className="text-4xl">$</p>
                <p className="text-4xl text-[#634832]">1.50</p>
              </div>
            </div>
            <span className="w-33 border border-b-0"></span>
            <p className="tracking-widest text-sm">50% OFFER GOING</p>
            <span className="w-33 border border-b-0 mb-2"></span>
            <p className="font-semibold text-[#292E36] text-xl">
              Turkish Coffee
            </p>
            <p className="text-[#555555]">
              Your favorite coffee, now at half the price!
            </p>
          </a>
          <a
            href="/shop"
            className=" w-[95%] lg:w-full max-w-175  h-75 rounded-3xl bg-cover bg-center bg-no-repeat flex flex-col items-start pl-10 pt-5"
            style={{ backgroundImage: "url('/promo-block2.png')" }}
            aria-label="Shop Irish coffee"
          >
            <PromoBlocksvg />
            <div className="-mt-27 mb-20 flex flex-col items-center -rotate-30 ml-5 ">
              <p className="tracking-wider">ONLY</p>
              <div className="flex gap-1">
                <p className="text-4xl">$</p>
                <p className="text-4xl text-[#634832]">2.50</p>
              </div>
            </div>
            <span className="w-33 border border-b-0"></span>
            <p className="tracking-widest text-sm">50% OFFER GOING</p>
            <span className="w-33 border border-b-0 mb-2"></span>
            <p className="font-semibold text-[#292E36] text-xl">Irish Coffee</p>
            <p className="text-[#555555]">
              Your favorite coffee, now at half the price!
            </p>
          </a>
        </div>
      </ScrollAnimation>
    </section>
  );
}
