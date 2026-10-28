import { useState, useEffect } from "react";
import {ChevronDoubleUp} from "../assets/icons"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-20 right-15 z-99 flex h-15 w-15 items-center justify-center rounded-full cursor-pointer bg-[#634832] text-2xl text-white shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Back to top"
    >
    <ChevronDoubleUp />
    </button>
  );
}