import { useCart } from "../shop/CartContext";
import { useEffect, useState } from "react";

export function Products({ products, onClear }) {
  return (
    <div>
      <p className="mb-6">showing all {products.length} results</p>

      {products.length === 0 ? (
        <div>
          <p className="mb-3">No products found.</p>
          <button
            onClick={onClear}
            className="cursor-pointer text-[#654832] underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 md:gap-6 xl:grid-cols-4">
          {products.map((product) => (
            <ProductComponent
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              salePrice={product.salePrice}
              rating={product.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/*export function ProductComponent({
  id,
  image,
  name,
  price,
  salePrice,
  rating,
}) {
  const { addItem } = useCart();

  return (
    <div className="relative w-full overflow-hidden bg-white text-center">
      {salePrice && (
        <span className="absolute left-0 top-0 z-10 bg-[#654832] px-3 py-4 text-xs font-bold text-white">
          SALE!
        </span>
      )}

      <img
        src={image}
        alt={name}
        className="aspect-square w-full object-cover"
      />

      <div className="px-2 pb-4">
        <h3 className="mt-2 text-lg font-semibold leading-tight text-black">
          {name}
        </h3>
        <div
          className="mt-1 text-base text-[#654832]"
          aria-label={`${rating} out of 5 stars`}
        >
          {"★".repeat(rating)}
          {"☆".repeat(5 - rating)}
        </div>

        <div className="mt-2 flex items-center justify-center gap-1.5 text-sm">
          {salePrice && (
            <span className="text-gray-400 line-through">${price}</span>
          )}
          <span className="font-semibold text-[#654832] underline">
            ${salePrice || price}
          </span>
        </div>

        <button
          className="mt-3 rounded-xl cursor-pointer bg-[#654832] px-7 py-4 text-sm font-semibold text-white shadow-[0px_7px_10px_0px_rgba(211,162,69,0.6)] transition duration-200 hover:-translate-y-1 hover:bg-[#503824] active:translate-y-0"
          onClick={() =>
            addItem({ id, name, image, price: salePrice || price })
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}*/



export function ProductComponent({
  id,
  image,
  name,
  price,
  salePrice,
  rating,
}) {
  const { items, addItem, updateQuantity } = useCart();
  const quantity = items.find((item) => item.id === id)?.quantity ?? 0;
  const [showAdded, setShowAdded] = useState(false);

  useEffect(() => {
    if (!showAdded) return;
    const timer = setTimeout(() => setShowAdded(false), 2000);
    return () => clearTimeout(timer);
  }, [showAdded]);

  const handleAdd = () => {
    addItem({ id, name, image, price: salePrice || price });
    setShowAdded(true);
  };

  return (
    <div className="relative w-full overflow-hidden bg-white text-center">
      {salePrice && (
        <span className="absolute left-0 top-0 z-10 bg-[#654832] px-3 py-4 text-xs font-bold text-white">
          SALE!
        </span>
      )}

      <div className="relative">
        <img
          src={image}
          alt={name}
          className="aspect-square w-full object-cover"
        />

        <div
          role="status"
          aria-live="polite"
          className={`pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#654832] px-4 py-2 text-xs font-semibold text-white shadow-lg transition duration-300 ${
            showAdded && quantity > 0
              ? "translate-y-0 opacity-100"
              : "translate-y-2 opacity-0"
          }`}
        >
          ✓ Added to cart
        </div>
      </div>

      <div className="px-2 pb-4">
        <h3 className="mt-2 text-lg font-semibold leading-tight text-black">
          {name}
        </h3>
        <div
          className="mt-1 text-base text-[#654832]"
          aria-label={`${rating} out of 5 stars`}
        >
          {"★".repeat(rating)}
          {"☆".repeat(5 - rating)}
        </div>

        <div className="mt-2 flex items-center justify-center gap-1.5 text-sm">
          {salePrice && (
            <span className="text-gray-400 line-through">${price}</span>
          )}
          <span className="font-semibold text-[#654832] underline">
            ${salePrice || price}
          </span>
        </div>

        {quantity === 0 ? (
          <button
            onClick={handleAdd}
            className="mt-3 rounded-xl cursor-pointer bg-[#654832] px-7 py-4 text-sm font-semibold text-white shadow-[0px_7px_10px_0px_rgba(211,162,69,0.6)] transition duration-200 hover:-translate-y-1 hover:bg-[#503824] active:translate-y-0"
          >
            Add to cart
          </button>
        ) : (
          <div className="mt-3 inline-flex h-[52px] items-center overflow-hidden rounded-xl border border-[#654832]/30 bg-white">
            <button
              onClick={() => updateQuantity(id, quantity - 1)}
              aria-label={`Decrease quantity of ${name}`}
              className="flex h-full w-11 cursor-pointer items-center justify-center text-xl leading-none text-[#654832] transition hover:bg-[#654832]/10"
            >
              −
            </button>
            <span className="w-12 text-center text-sm font-semibold text-black">
              {quantity}
            </span>
            <button
              onClick={() => updateQuantity(id, quantity + 1)}
              aria-label={`Increase quantity of ${name}`}
              className="flex h-full w-11 cursor-pointer items-center justify-center text-xl leading-none text-[#654832] transition hover:bg-[#654832]/10"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
