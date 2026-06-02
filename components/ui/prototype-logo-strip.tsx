import { logoStripItems } from "../../content/homepage";

export function LogoStrip({ className = "" }: { className?: string }) {
  return (
    <section
      className={`logo-strip relative h-[var(--logo-strip-height)] overflow-hidden bg-white before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-[min(39.75vw,601px)] before:bg-gradient-to-r before:from-white before:to-transparent after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-[min(39.75vw,601px)] after:bg-gradient-to-l after:from-white after:to-transparent${className ? ` ${className}` : ""}`}
      aria-label="Customer and partner logos"
    >
      <div className="logo-strip__track flex h-full w-max animate-logo-drift items-center gap-[var(--logo-strip-gap)]">
        {[0, 1].map((groupIndex) => (
          <div
            key={groupIndex}
            className="logo-strip__group flex shrink-0 items-center gap-[var(--logo-strip-gap)]"
            aria-hidden={groupIndex === 1}
          >
            {logoStripItems.map((item) => (
              <img
                key={`${groupIndex}-${item.name}`}
                className="h-auto w-auto max-w-none shrink-0 object-contain"
                src={item.src}
                alt=""
                aria-hidden="true"
                width={item.width}
                height={item.height}
                loading="lazy"
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
