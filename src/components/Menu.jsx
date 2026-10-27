import { MenuItemslist } from "../lists";
import { Carticon } from "../assets/icons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ScrollAnimation } from "../components/ScrollAnimation";

//this is the code i write before using Ai code

/*export function Menu() {
  return (
    <section>
      <div className="flex flex-col bg-[#DBC1AC] h-105 items-center z-10">
        <span className="w-31 border border-amber-900 mt-15"></span>
        <h4 className="tracking-widest">SPECIAL MENU</h4>
        <span className="w-31 border border-amber-900 "></span>
        <h4 className="font-['Fredericka_the_Great'] text-2xl text-[#634832] mt-3">Our Special Menu</h4>
      </div>
      <div>
        {MenuItemslist.map((product)=>(
        <MenuItem 
         key={product.id} 
         name={product.productName}
         description={product.description}
         url={product.imgURL}
         price={product.price}
        />
      ))}
      </div>
      
    </section>
  );
}
  */

/*export function MenuItem({name , description , url , price}) {
  
  return (
    <div className="hover:bg-[#967259] flex flex-col items-center justify-end bg-white border -mt-35 rounded-tl-4xl rounded-tr-md rounded-br-4xl rounded-bl-md w-[95%] h-65 mr-auto ml-auto mb-20 z-30">
      <div className="flex justify-center ml-15">
        <img src={url} className="w-55 mb-9 rounded-full border" />
        <p className="bg-black h-12 w-12 justify-center rounded-full flex items-center text-white mt-13 ml-2">${price}</p>
      </div>
      <p className="font-semibold">{name}</p>
      <p className="text-center mb-3">
        {description}
      </p>
      <button className="bg-[#634832] p-3 text-white rounded-full -mb-5 cursor-pointer"><Carticon /></button>
    </div>
  );
}*/

//this is my code + Ai written code for the slide effect + edited styles and added code by me

export function Menu() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  return (
    <section className="overflow-x-hidden">
      <div className="flex flex-col bg-[#DBC1AC] h-105 items-center z-10">
        <span className="w-31 mb-1 border border-amber-900 mt-15"></span>
        <h4 className="tracking-widest">SPECIAL MENU</h4>
        <span className="w-31 mt-1 border border-amber-900 "></span>
        <h4 className="font-['Fredericka_the_Great'] text-2xl text-[#634832] mt-3">
          Our Special Menu
        </h4>
      </div>

      <div className="relative z-30 -mt-35 px-4 md:px-10">
        <div className=" cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-6">
            {MenuItemslist.map((product) => (
              <div
                key={product.id}
                className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 xl:basis-1/3 pl-6"
              >
                <MenuItem
                  name={product.productName}
                  description={product.description}
                  url={product.imgURL}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="bg-[#634832] text-white px-7 py-3 rounded-lg cursor-pointer shadow-[0px_7px_10px_0px_rgba(211,162,69,0.6)] mt-5 mb-10 ml-auto mr-auto flex">
        See More Menu
      </button>
    </section>
  );
}

export function MenuItem({ name, description, url, price }) {
  return (
    <ScrollAnimation direction="up">
      <div className="hover:bg-[#967259] flex flex-col items-center mt-5 justify-end bg-white  rounded-tl-4xl rounded-tr-md rounded-br-4xl rounded-bl-md w-full h-65 mb-20">
        <div className="flex justify-center ml-15">
          <img src={url} draggable="false" className="w-55 mb-9 rounded-full" />
          <p className="bg-black h-12 w-12 justify-center rounded-full flex items-center text-white mt-13 ml-2">
            ${price}
          </p>
        </div>
        <p className="font-semibold">{name}</p>
        <p className="text-center w-[80%] mb-5">{description}</p>
        <button className="bg-[#634832] p-3 text-white rounded-full -mb-5 cursor-pointer">
          <Carticon />
        </button>
      </div>
    </ScrollAnimation>
  );
}
