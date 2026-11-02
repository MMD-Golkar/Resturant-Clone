import { Carticon } from "../assets/icons";
import { OfferMenuList } from "../lists";
import { ScrollAnimation } from "../components/ScrollAnimation";
import { useCart } from "./shop/CartContext";

export function OfferMenu() {
  return (
    <section id="offers" className="scroll-mt-24">
      <ScrollAnimation direction="up">
        <div className="flex flex-col items-center pt-20 pb-10 md:pt-55 md:hidden">
          <span className="border mb-1 w-25 border-[#634832]"></span>
          <p className="text-md tracking-widest">10% DISCOUNT</p>
          <span className="border mt-1 w-25 border-[#634832]"></span>
          <h4 className="text-2xl text-[#634832] font-['Fredericka_the_Great'] mt-3">
            Offer Menu
          </h4>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 md:w-[95%] md:ml-auto md:mr-auto sm:grid-rows-3 md:mt-10 lg:grid-rows-2 lg:grid-cols-3">
          <div className="hidden flex-col items-center self-center justify-center pt-5 -mt-10 md:flex ">
            <span className="border mb-1 w-25 border-[#634832] xl:w-35"></span>
            <p className="text-md tracking-widest xl:text-lg">10% DISCOUNT</p>
            <span className="border mt-1 w-25 border-[#634832] xl:w-35"></span>
            <h4 className="text-2xl text-[#634832] font-['Fredericka_the_Great'] mt-3 xl:text-4xl">
              Offer Menu
            </h4>
          </div>
          {OfferMenuList.map((item) => (
            <OfferMenuItem
              key={item.id}
              id={item.id}
              price={item.price}
              imgURL={item.imgURL}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
}

export function OfferMenuItem({ id, price, imgURL, name, description }) {
  const { addItem } = useCart();

  const addOfferToCart = () =>
    addItem({
      id: `offer-${id}`,
      name,
      image: imgURL,
      price: Number(price),
    });

  return (
    <ScrollAnimation direction="up">
      <div className="flex flex-col md:flex-row md:gap-1 items-center  md:relative md:w-full  w-[90%] text-center ml-auto mr-auto rounded-lg mb-5 cursor-pointer hover:[&_p]:opacity-0 md:hover:[&_p]:opacity-100 hover:[&_span]:flex md:hover:[&_span]:hidden">
        <div className="flex w-full justify-center pr-12 py-5 relative">
          <span className="w-full h-41 rounded-[55%] absolute opacity-80 z-10 hidden bg-[#634832] left-0 top-1/10 cursor-pointer items-center justify-center">
            <button
              type="button"
              onClick={addOfferToCart}
              aria-label={`Add ${name} to cart`}
              className="bg-white p-3 rounded-full text-gray-500 cursor-pointer shadow-[0px_5px_10px_0px_rgba(211,162,69,0.6)]"
            >
              <Carticon />
            </button>
          </span>
          <h6 className="text-white bg-black min-[1700px]:ml-8 w-12 h-12 md:absolute md:left-9 md:top-6 xl:left-15 lg:-mt-3  rounded-full flex items-center justify-center self-start z-11">
            ${price}
          </h6>

          <img src={imgURL} className="z-5 md:ml-[-37%] md:w-38" />
        </div>

        <div className="flex flex-col items-center w-full md:hover:[&_button]:flex pb-5 relative md:absolute md:w-5/7 md:h-37  md:justify-center md:right-0 md:opacity-90 md:hover:bg-[#634832] md:hover:text-white md:z-11 md:rounded-tr-lg md:rounded-br-4xl md:rounded-tl-4xl md:rounded-bl-lg md:hover:shadow-[0px_5px_10px_0px_rgba(211,162,69,0.6)]">
          <button
            type="button"
            onClick={addOfferToCart}
            aria-label={`Add ${name} to cart`}
            className="bg-white hidden lg:absolute  absolute z-11 -left-6 top-1/3 p-3 rounded-full text-gray-500 cursor-pointer shadow-[0px_5px_10px_0px_rgba(211,162,69,0.6)]"
          >
            <Carticon />
          </button>
          <div className="md:hover:[&_p]:text-white w-full h-full flex flex-col items-center justify-center">
            <p className="font-semibold text-xl lg:text-md mb-2 md:ml-20">
              {name}
            </p>
            <p className="text-gray-500 md:text-sm xl:text-md md:ml-18 ">
              {description}
            </p>
            <button
              type="button"
              onClick={addOfferToCart}
              className="mt-3 rounded-lg bg-[#634832] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#503824]"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
