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


export function ProductComponent({ image, name, price, salePrice, rating }) {
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

        <button className="mt-3 rounded-xl cursor-pointer bg-[#654832] px-7 py-4 text-sm font-semibold text-white shadow-[0px_7px_10px_0px_rgba(211,162,69,0.6)] transition duration-200 hover:-translate-y-1 hover:bg-[#503824] active:translate-y-0">
          Add to cart
        </button>
      </div>
    </div>
  );
}
