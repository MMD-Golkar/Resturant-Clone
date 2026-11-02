import { Link } from "react-router-dom";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "../shop/CartContext";

const money = (n) => `$${Number(n).toFixed(2)}`;

const brownButton =
  "block w-full cursor-pointer rounded-xl bg-[#654832] px-7 py-4 text-center text-sm font-semibold text-white shadow-[0px_7px_10px_0px_rgba(211,162,69,0.6)] transition duration-200 hover:-translate-y-1 hover:bg-[#503824] active:translate-y-0";

export function CartPage() {
  const { items, totalItems, subtotal, updateQuantity, removeItem, clearCart } =
    useCart();

  return (
    <div className="ml-auto mr-auto w-[90%] pt-10 pb-16">
      <h3 className="mb-10 text-sm text-gray-500">Home/Cart</h3>

      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <section className="flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* Items */}
          <div className="min-w-0 flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p>
                {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
              </p>
              <button
                onClick={clearCart}
                className="cursor-pointer text-sm text-gray-500 underline transition hover:text-[#654832]"
              >
                Clear cart
              </button>
            </div>

            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 border border-gray-200 bg-white p-3 sm:p-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 shrink-0 object-cover sm:h-32 sm:w-32"
                  />

                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold leading-tight text-black sm:text-lg">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm text-[#654832]">
                          {money(item.price)} each
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="cursor-pointer rounded-md p-1.5 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center overflow-hidden rounded-lg border border-[#654832]/30">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                          className="flex h-9 w-9 cursor-pointer items-center justify-center text-[#654832] transition hover:bg-[#654832]/10"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-10 text-center text-sm font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                          className="flex h-9 w-9 cursor-pointer items-center justify-center text-[#654832] transition hover:bg-[#654832]/10"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <span className="text-lg font-semibold text-[#654832]">
                        {money(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Summary */}
          <aside className="border border-gray-200 bg-white p-6 lg:sticky lg:top-24 lg:w-80">
            <h2 className="mb-5 text-center text-sm uppercase tracking-wide text-gray-600">
              Order summary
            </h2>

            <dl className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-500">Items</dt>
                <dd>{totalItems}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Subtotal</dt>
                <dd>{money(subtotal)}</dd>
              </div>
            </dl>

            <div className="my-5 flex items-center justify-between border-t border-gray-200 pt-5">
              <span className="font-semibold">Total</span>
              <span className="text-xl font-semibold text-[#654832]">
                {money(subtotal)}
              </span>
            </div>

            <Link to="/checkout" className={brownButton}>
              Checkout
            </Link>

            <Link
              to="/shop"
              className="mt-4 block text-center text-sm text-[#654832] underline"
            >
              Continue shopping
            </Link>
          </aside>
        </section>
      )}
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="mx-auto flex max-w-sm flex-col items-center py-12 text-center">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#654832]/10 text-[#654832]">
        <ShoppingCart className="h-9 w-9" />
      </div>
      <h2 className="text-xl font-semibold">Your cart is empty</h2>
      <p className="mt-2 mb-6 text-gray-500">
        Looks like you haven't added anything yet. Browse the shop to find
        something you like.
      </p>
      <Link to="/shop" className={brownButton}>
        Browse products
      </Link>
    </div>
  );
}
