import { useEffect, useState } from "react";

export function useScrollState(threshold = 18) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const enterThreshold = threshold;
    const exitThreshold = Math.max(0, threshold - 12);

    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled((prev) => {
        if (prev) {
          return y > exitThreshold;
        }
        return y > enterThreshold;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isScrolled;
}
