import { useState, useEffect, useRef } from "react";
import { BlogList } from "../lists";
import { ScrollAnimation } from "../components/ScrollAnimation";

const getPerView = () =>
  window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

function useItemsPerView() {
  const [perView, setPerView] = useState(getPerView);

  useEffect(() => {
    const onResize = () => setPerView(getPerView());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return perView;
}

export function Ourblog() {
  const perView = useItemsPerView();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const startX = useRef(0);
  const viewportRef = useRef(null);

  const pages = Math.max(BlogList.length - perView + 1, 1);
  const index = Math.min(current, pages - 1);

  // auto-slide every 4 seconds (stops while hovering or dragging)
  useEffect(() => {
    if (paused || dragging || pages <= 1) return;
    const timer = setTimeout(() => {
      setCurrent((c) => (Math.min(c, pages - 1) + 1) % pages);
    }, 4000);
    return () => clearTimeout(timer);
  }, [current, paused, dragging, pages]);

  const handlePointerDown = (e) => {
    startX.current = e.clientX;
    setDragging(true);
    setDragX(0);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragging) return;
    setDragX(e.clientX - startX.current);
  };

  const handlePointerUp = () => {
    if (!dragging) return;
    const cardWidth = viewportRef.current.offsetWidth / perView;
    const threshold = cardWidth * 0.2; // drag 20% of a card to change slide

    let target = index;
    if (dragX < -threshold) target = Math.min(index + 1, pages - 1);
    else if (dragX > threshold) target = Math.max(index - 1, 0);

    setCurrent(target);
    setDragging(false);
    setDragX(0);
  };

  return (
    <section>
      <div className="flex flex-col items-center mt-10 mb-5">
        <span className="border mt-1 w-24 border-[#634832]"></span>
        <p className="text-md tracking-widest">LATEST NEWS</p>
        <span className="border mt-1 w-24 border-[#634832]"></span>
        <h4 className="text-2xl font-['Fredericka_the_Great'] text-[#634832] mt-3">
          Our Blog
        </h4>
      </div>

      <div
        className="max-w-7xl mx-auto px-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* viewport (the draggable area) */}
        <div
          ref={viewportRef}
          className="overflow-hidden py-6 touch-pan-y select-none cursor-grab active:cursor-grabbing"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onDragStart={(e) => e.preventDefault()}
        >
          {/* track */}
          <div
            className={`flex ${
              dragging ? "" : "transition-transform duration-700 ease-in-out"
            }`}
            style={{
              transform: `translateX(calc(-${index * (100 / perView)}% + ${dragX}px))`,
            }}
          >
            {BlogList.map((blog) => (
              <div
                key={blog.id}
                className="shrink-0 px-3"
                style={{ width: `${100 / perView}%` }}
              >
                <BlogComponent
                  imgURL={blog.imgURL}
                  title={blog.title}
                  date={blog.date}
                  comments={blog.comments}
                  description={blog.description}
                />
              </div>
            ))}
          </div>
        </div>

        {pages > 1 && (
          <div className="flex justify-center gap-3 mt-4 mb-10">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`size-3 rounded-full border-2 cursor-pointer transition-colors duration-300 ${
                  i === index
                    ? "bg-[#634832] border-[#634832]"
                    : "bg-white border-black"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function BlogComponent({ imgURL, title, date, comments, description }) {
  const d = new Date(date);
  const day = d.getUTCDate();
  const month = d.toLocaleDateString("en-US", {
    month: "short",
    timeZone: "UTC",
  });
  const fullDate = d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <ScrollAnimation direction="down">
      <article className="group relative h-96 overflow-hidden rounded-3xl cursor-pointer select-none">
        <img
          src={imgURL}
          alt={title}
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
        <div className="absolute top-4 right-4 size-16 rounded-full bg-white text-slate-700 flex flex-col items-center justify-center leading-tight transition-colors duration-300 group-hover:bg-amber-950 group-hover:text-white">
          <span className="text-xl font-bold">{day}</span>
          <span className="text-xs font-semibold">{month}</span>
        </div>

        <div className="absolute bottom-0 inset-x-0 p-5 text-white bg-white/0 transition-colors duration-500 group-hover:bg-white/90 group-hover:text-black">
          <div className="flex gap-2 text-sm">
            <span className="border-y border-[#8a6a45] px-3 py-1">
              {fullDate}
            </span>
            <span className="border-y border-[#8a6a45] px-3 py-1">
              {comments} Comments
            </span>
          </div>

          <h5 className="font-bold text-lg mt-4 leading-snug">{title}</h5>
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
            <div className="overflow-hidden">
              <p className="text-sm text-slate-500 pt-3">{description}</p>
            </div>
          </div>
        </div>
      </article>
    </ScrollAnimation>
  );
}
