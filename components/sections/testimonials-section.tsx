"use client";

import { testimonialSlides } from "../../content/homepage";
import type { TestimonialSlide } from "../../content/types";
import { useCarousel } from "../../hooks/useCarousel";
import { ArrowRightIcon } from "../ui/icons";
import { LogoStrip } from "../ui/prototype-logo-strip";

export function TestimonialsSection() {
  const total = testimonialSlides.length;
  const {
    activeIndex,
    completeCarouselMove,
    getDirectionForTarget,
    isAnimating,
    moveCarousel,
    slideOffset,
    transitionEnabled,
  } = useCarousel(total, { autoplayMs: 6500, initialIndex: 1 });

  const carouselItems = [-2, -1, 0, 1, 2].map((offset) => {
    const slideIndex = (activeIndex + offset + total) % total;
    const visualSlot = offset + slideOffset;

    return {
      key: `${offset}-${testimonialSlides[slideIndex].author}`,
      slide: testimonialSlides[slideIndex],
      visualSlot,
    };
  });
  const trackPosition = slideOffset - 2;
  const trackTransform =
    trackPosition === -3
      ? "translate3d(calc(-300% - 120px), 0, 0)"
      : trackPosition === -1
        ? "translate3d(calc(-100% - 40px), 0, 0)"
        : "translate3d(calc(-200% - 80px), 0, 0)";

  const renderTestimonialCard = (slide: TestimonialSlide, isActive: boolean) => (
    <>
      <div className="testimonial-card__image-wrap">
        <img
          className="testimonial-card__image"
          src={slide.imageSrc}
          alt={isActive ? slide.imageAlt : ""}
          width={500}
          height={500}
          loading="lazy"
        />
      </div>
      <div className="testimonial-card__content">
        <p className="testimonial-card__quote">“{slide.quote}”</p>
        <div className="testimonial-card__meta">
          <div className="testimonial-card__identity">
            <strong>{slide.author}</strong>
            <span>{slide.title}</span>
          </div>
          <div className="testimonial-card__logo-wrap">
            <img src={slide.logoSrc} alt={isActive ? slide.logoAlt : ""} loading="lazy" />
          </div>
        </div>
        {isActive ? (
          <a
            className="btn btn--primary btn--md testimonial-card__cta"
            href={slide.href}
            target={slide.href.startsWith("http") ? "_blank" : undefined}
            rel={slide.href.startsWith("http") ? "noreferrer" : undefined}
          >
            Read about the Case Study
            <ArrowRightIcon />
          </a>
        ) : (
          <span className="testimonial-card__ghost-cta">Read about the Case Study</span>
        )}
      </div>
    </>
  );

  return (
    <section className="section section--muted testimonials-section">
      <div className="testimonials-shell">
        <div className="frame testimonials-frame">
          <header className="testimonials-header reveal">
            <div className="eyebrow">Testimonials</div>
            <h2 className="text-heading-lg testimonials-header__title">120+ Custom Precision Mimics Built for Science Proven in Practice</h2>
            {/* <p className="text-body-lg text-muted testimonials-header__subtitle">
              See how leading labs and enterprise teams use Slingshot controls to improve reproducibility,
              reduce variability, and make more confident decisions.
            </p> */}
          </header>

          <div className="testimonials-stage reveal">
            <div className="testimonials-carousel">
              <div
                className={`testimonials-track${transitionEnabled ? " testimonials-track--animated" : ""}`}
                style={{ transform: trackTransform }}
                onTransitionEnd={(event) => {
                  if (event.currentTarget === event.target) {
                    completeCarouselMove();
                  }
                }}
              >
                {carouselItems.map(({ key, slide, visualSlot }) => {
                  const isActive = visualSlot === 0;
                  const slotClass =
                    Math.abs(visualSlot) >= 2
                      ? "testimonial-card--edge"
                      : visualSlot === -1
                        ? "testimonial-card--side testimonial-card--side-left"
                        : visualSlot === 1
                          ? "testimonial-card--side testimonial-card--side-right"
                          : "testimonial-card--active";

                  return (
                    <article
                      key={key}
                      className={`testimonial-card ${slotClass}`}
                      aria-hidden={!isActive}
                      aria-live={isActive ? "polite" : undefined}
                    >
                      {renderTestimonialCard(slide, isActive)}
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="testimonials-controls reveal reveal--delay-1">
            <div className="testimonials-dots" aria-label="Testimonials carousel navigation">
              {testimonialSlides.map((slide, index) => (
                <button
                  key={slide.author}
                  type="button"
                  className={`testimonials-dot${index === activeIndex ? " testimonials-dot--active" : ""}`}
                  onClick={() => {
                    if (index === activeIndex || isAnimating) {
                      return;
                    }

                    moveCarousel(getDirectionForTarget(index));
                  }}
                  aria-label={`Show testimonial from ${slide.author}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                />
              ))}
            </div>
          </div>

          <LogoStrip className="logo-strip--testimonials reveal reveal--delay-1" />
        </div>
      </div>
    </section>
  );
}
