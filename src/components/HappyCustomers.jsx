import { CustomerReviewsList } from "../lists";
import { useState, useEffect, useRef, useCallback } from "react";

export function HappyCustomers() {
  const [current, setCurrent] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const total = CustomerReviewsList.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + total) % total),
    [total],
  );

  // auto-slide every 4 seconds
  useEffect(() => {
    if (dragging) return;
    const timer = setTimeout(next, 4000);
    return () => clearTimeout(timer);
  }, [current, dragging, next]);

  const handlePointerDown = (e) => {
    setDragging(true);
    startX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragging) return;
    setDragX(e.clientX - startX.current);
  };

  const handlePointerUp = () => {
    if (!dragging) return;
    if (dragX < -60) next();
    else if (dragX > 60) prev();
    setDragging(false);
    setDragX(0);
  };

  return (
    <section className="flex flex-col md:flex-row">
      {/* LEFT: header block */}
      <div className="bg-[#967259] md:w-1/2 md:flex md:items-center md:justify-center">
        <div className="flex flex-col items-center pb-15 text-black w-[90%] ml-auto mr-auto pt-15 md:pb-0 md:pt-0">
          <span className="border w-35 border-[#634832] lg:w-23"></span>
          <p className="text-md md:text-lg text-white font-semibold tracking-widest lg:text-xl">
            HAPPY CUSTOMERS
          </p>
          <span className="border mt-0.5 w-35 border-[#634832] lg:w-23"></span>
          <h4 className="text-3xl font-['Fredericka_the_Great'] md:text-center md:text-5xl lg:mt-10 lg:text-6xl mb-5 text-white mt-3">
            Our Guest Book
          </h4>
          <p className="text-sm text-white w-[90%] text-center md:text-sm md:mt-10 lg:text-lg">
            Our team goes the extra mile to make you feel welcome, from the
            first greeting to the last sip
          </p>
        </div>
      </div>

      {/* RIGHT: slider + newsletter stacked */}
      <div className="flex flex-col md:w-1/2">
        {/* slider */}
        <div className="relative h-90 overflow-hidden md:flex-1 md:min-h-90">
          <div className="absolute inset-0 scale-105 bg-[url('../src/assets/images/happycustomerimage.png')] bg-cover bg-center bg-no-repeat blur-xs"></div>

          <div className="absolute inset-0 bg-black/60"></div>
          <div
            className="relative z-10 h-full overflow-hidden touch-pan-y select-none cursor-grab active:cursor-grabbing"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onDragStart={(e) => e.preventDefault()}
          >
            <div
              className={`flex h-full ${
                dragging ? "" : "transition-transform duration-700 ease-in-out"
              }`}
              style={{
                transform: `translateX(calc(-${current * 100}% + ${dragX}px))`,
              }}
            >
              {CustomerReviewsList.map((review) => (
                <div
                  key={review.id}
                  className="w-full shrink-0 flex items-center justify-center"
                >
                  <CustomerReview
                    text={review.text}
                    imgURL={review.imgURL}
                    name={review.name}
                    role={review.role}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* newsletter */}
        <div className="flex flex-col bg-amber-950 w-full h-40 text-white justify-center items-center">
          <p className="mb-4">NEWS LETTER</p>
          <div className="flex flex-row items-center gap-3">
            <input
              type="text"
              className="bg-white w-[70%] md:w-67 lg:w-100 xl:w-130 placeholder:text-gray-500 py-2 px-5 rounded-lg text-black"
              placeholder="Your Review..."
            />
            <button className="bg-[#634832] mt-0.5 px-4 py-2 rounded-md cursor-pointer">
              SEND
            </button>
          </div>
          <p className="mt-5 hidden bg-green-600 px-3 py-1 rounded-lg">
            Message sent. thank you for your feedback
          </p>
        </div>
      </div>
    </section>
  );
}

export function CustomerReview({ text, imgURL, name, role }) {
  return (
    <div className="flex flex-col items-center text-center text-white gap-5 w-full">
      <p className="text-sm leading-relaxed max-w-md px-6 pt-10 pb-5">{text}</p>
      <div className="group relative w-16 h-16 overflow-hidden rounded-full">
        <img
          src={imgURL}
          alt={name}
          draggable={false}
          className="w-full h-full object-cover"
        />
        <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-linear-to-r from-transparent via-white/70 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[500%]" />
      </div>

      <div>
        <p className="font-bold text-lg">{name}</p>
        <p className="text-sm">{role}</p>
      </div>
    </div>
  );
}
