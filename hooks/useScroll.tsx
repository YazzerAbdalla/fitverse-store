"use client";
import { useEffect, useRef, useState } from "react";

function useScrollDetection(debounce = 150) {
  const [isScrolling, setIsScrolling] = useState(false);
  console.log("🚀 ~ useScrollDetection ~ isScrolling:", isScrolling)
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, debounce);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [debounce]);

  return isScrolling;
}

export default useScrollDetection;
