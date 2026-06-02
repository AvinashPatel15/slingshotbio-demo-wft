import { useEffect, useRef, useState } from "react";

type CarouselDirection = 1 | -1;

export function useCarousel(
  total: number,
  { autoplayMs = 6500, initialIndex = 0 }: { autoplayMs?: number; initialIndex?: number } = {},
) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideOffset, setSlideOffset] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(false);
  const directionRef = useRef<CarouselDirection>(1);

  const moveCarousel = (direction: CarouselDirection) => {
    if (isAnimating || total <= 1) {
      return;
    }

    directionRef.current = direction;
    setIsAnimating(true);
    setTransitionEnabled(true);

    window.requestAnimationFrame(() => {
      setSlideOffset(direction === 1 ? -1 : 1);
    });
  };

  useEffect(() => {
    if (!autoplayMs || total <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      moveCarousel(1);
    }, autoplayMs);

    return () => window.clearInterval(intervalId);
  }, [activeIndex, autoplayMs, isAnimating, total]);

  const completeCarouselMove = () => {
    if (!isAnimating) {
      return;
    }

    setTransitionEnabled(false);
    setActiveIndex((current) => (current + directionRef.current + total) % total);
    setSlideOffset(0);
    setIsAnimating(false);
  };

  const getDirectionForTarget = (targetIndex: number): CarouselDirection => {
    const forwardSteps = (targetIndex - activeIndex + total) % total;
    const backwardSteps = (activeIndex - targetIndex + total) % total;

    return forwardSteps <= backwardSteps ? 1 : -1;
  };

  return {
    activeIndex,
    completeCarouselMove,
    getDirectionForTarget,
    isAnimating,
    moveCarousel,
    slideOffset,
    transitionEnabled,
  };
}
