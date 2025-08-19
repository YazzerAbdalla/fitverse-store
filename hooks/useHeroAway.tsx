import { useEffect, useState } from "react";

const useHeroAway = (heroId = "hero-section") => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const heroElement = document.getElementById(heroId);

    if (!heroElement) {
      console.warn(`Hero element with ID "${heroId}" not found`);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% is visible
        rootMargin: "0px",
      }
    );

    observer.observe(heroElement);

    return () => {
      observer.unobserve(heroElement);
    };
  }, [heroId]);

  return isVisible;
};

export default useHeroAway;
