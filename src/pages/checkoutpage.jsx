import { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { TopHeader } from "../components/shop/TopHeader";
import { useCart } from "../components/shop/CartContext";

const money = (amount) => `$${Number(amount).toFixed(2)}`;

const fieldClass =
  "mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-[#654832] focus:ring-2 focus:ring-[#654832]/20";

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    clearCart();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <TopHeader />
      <main className="mx-auto w-[90%] max-w-6xl py-10 pb-16">
        <p className="mb-8 text-sm text-gray-500">
          <Link to="/cart" className="hover:text-[#654832]">
            Home / Cart
          </Link>{" "}
          / Checkout
        </p>

        {submitted ? (
          <section
            className="mx-auto max-w-xl border border-gray-200 bg-white px-6 py-12 text-center shadow-sm"
            role="status"
          >
            <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">
              ✓
            </div>
            <h2 className="text-2xl font-semibold text-[#654832]">
              Demo checkout complete
            </h2>
            <p className="mt-3 text-gray-600">
              Your cart has been cleared. This demo does not process a payment
              or send an order to the restaurant.
            </p>
            <Link
              to="/shop"
              className="mt-7 inline-flex rounded-xl bg-[#654832] px-7 py-3 font-semibold text-white transition hover:bg-[#503824]"
            >
              Return to the shop
            </Link>
          </section>
        ) : items.length === 0 ? (
          <section className="mx-auto max-w-xl py-12 text-center">
            <h2 className="text-2xl font-semibold">Your cart is empty</h2>
            <p className="mt-2 text-gray-500">
              Add something to your cart before checking out.
            </p>
            <Link
              to="/shop"
              className="mt-6 inline-flex rounded-xl bg-[#654832] px-7 py-3 font-semibold text-white transition hover:bg-[#503824]"
            >
              Browse the shop
            </Link>
          </section>
        ) : (
          <section className="grid gap-8 lg:grid-cols-[1fr_21rem]">
            <form
              onSubmit={handleSubmit}
              className="border border-gray-200 bg-white p-5 sm:p-8"
            >
              <h2 className="mb-6 text-2xl font-semibold text-[#654832]">
                Delivery details
              </h2>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-medium">
                  Full name
                  <input
                    className={fieldClass}
                    name="name"
                    autoComplete="name"
                    required
                  />
                </label>
                <label className="text-sm font-medium">
                  Email address
                  <input
                    className={fieldClass}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </label>
                <label className="text-sm font-medium sm:col-span-2">
                  Street address
                  <input
                    className={fieldClass}
                    name="address"
                    autoComplete="street-address"
                    required
                  />
                </label>
                <label className="text-sm font-medium">
                  City
                  <input
                    className={fieldClass}
                    name="city"
                    autoComplete="address-level2"
                    required
                  />
                </label>
                <label className="text-sm font-medium">
                  Phone
                  <input
                    className={fieldClass}
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                  />
                </label>
              </div>

              <fieldset className="mt-7">
                <legend className="font-semibold">Payment</legend>
                <label className="mt-3 flex items-start gap-3 rounded-lg border border-[#654832]/30 bg-[#654832]/5 p-4 text-sm">
                  <input
                    type="radio"
                    name="payment"
                    value="pay-on-delivery"
                    defaultChecked
                    className="mt-0.5 accent-[#654832]"
                  />
                  <span>
                    <span className="block font-medium">Pay on delivery</span>
                    <span className="mt-1 block text-gray-500">
                      Demo option only. No payment will be collected.
                    </span>
                  </span>
                </label>
              </fieldset>

              <button
                type="submit"
                className="mt-7 w-full rounded-xl bg-[#654832] px-6 py-4 font-semibold text-white shadow-[0px_7px_10px_0px_rgba(211,162,69,0.35)] transition hover:bg-[#503824] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#654832]"
              >
                Complete demo order
              </button>
              <p className="mt-3 text-center text-xs text-gray-500">
                Demo checkout only — no payment is processed and no order is
                sent to the restaurant.
              </p>
            </form>

            <aside className="h-fit border border-gray-200 bg-white p-6 lg:sticky lg:top-24">
              <h2 className="mb-5 text-lg font-semibold">Order summary</h2>
              <ul className="flex flex-col gap-4">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between gap-4 text-sm"
                  >
                    <span className="text-gray-600">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="shrink-0 font-medium">
                      {money(item.price * item.quantity)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex justify-between border-t border-gray-200 pt-5 font-semibold">
                <span>Total</span>
                <span className="text-[#654832]">{money(subtotal)}</span>
              </div>
              <Link
                to="/cart"
                className="mt-5 block text-center text-sm text-[#654832] underline"
              >
                Edit cart
              </Link>
            </aside>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
