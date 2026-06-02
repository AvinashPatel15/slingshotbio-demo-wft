import Image from "next/image";

type LogoStripItem = {
  name: string;
  src: string;
  width: number;
  height: number;
};

const logoStripItems: LogoStripItem[] = [
  { name: "Myeloma", src: "/assets/logo-strip/myeloma.svg", width: 179, height: 52 },
  { name: "Takeda", src: "/assets/logo-strip/takeda.svg", width: 131, height: 44 },
  { name: "Gilead", src: "/assets/logo-strip/gilead.svg", width: 145, height: 40 },
  { name: "Bristol Myers Squibb", src: "/assets/logo-strip/bristol-myers.svg", width: 200, height: 32 },
  { name: "Novartis", src: "/assets/logo-strip/novartis.svg", width: 200, height: 33 },
  { name: "Amgen", src: "/assets/logo-strip/amgen.svg", width: 126, height: 30 },
  { name: "Johnson & Johnson", src: "/assets/logo-strip/johnson-johnson.svg", width: 200, height: 36 },
  { name: "Roche", src: "/assets/logo-strip/roche.svg", width: 89, height: 48 },
  { name: "Pfizer", src: "/assets/logo-strip/pfizer.svg", width: 103, height: 42 },
  { name: "Merck", src: "/assets/logo-strip/merck.svg", width: 134, height: 40 },
  { name: "Termo Fisher", src: "/assets/logo-strip/termo-fisher.svg", width: 142, height: 32 },
  { name: "Bayer", src: "/assets/logo-strip/bayer.svg", width: 52, height: 52 },
  { name: "Regeneron", src: "/assets/logo-strip/regeneron.svg", width: 184, height: 22 },
  { name: "BioTechne", src: "/assets/logo-strip/biotechne.svg", width: 169, height: 30 },
  { name: "Neogenomics", src: "/assets/logo-strip/neogenomics.svg", width: 92, height: 42 },
  { name: "Agilent", src: "/assets/logo-strip/agilent.svg", width: 135, height: 52 },
  { name: "PPD", src: "/assets/logo-strip/ppd.svg", width: 94, height: 28 },
  { name: "IQVIA", src: "/assets/logo-strip/iqvia.svg", width: 173, height: 30 },
  { name: "Lonza", src: "/assets/logo-strip/lonza.svg", width: 130, height: 28 },
  { name: "Menarini", src: "/assets/logo-strip/menarini.svg", width: 147, height: 40 },
  { name: "Charles River", src: "/assets/logo-strip/charles-river.svg", width: 180, height: 43 },
  { name: "Resilience", src: "/assets/logo-strip/resilience.svg", width: 180, height: 49 },
  { name: "Patheon", src: "/assets/logo-strip/patheon.svg", width: 145, height: 53 },
  { name: "Beckman Coulter", src: "/assets/logo-strip/beckman-coulter.svg", width: 114, height: 52 },
  { name: "BD", src: "/assets/logo-strip/bd.svg", width: 103, height: 40 },
];

export function LogoStrip() {
  return (
    <section
      aria-label="Customer and partner logos"
      className="absolute inset-x-0 bottom-6 z-20 h-[var(--logo-strip-height)] overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,#000_12%,#000_58%,transparent_64%,transparent_100%)] md:bottom-7"
    >
      <div className="flex h-full w-max animate-logo-drift items-center gap-[var(--logo-strip-gap)]">
        {[0, 1].map((groupIndex) => (
          <div
            aria-hidden={groupIndex === 1}
            className="flex shrink-0 items-center gap-[var(--logo-strip-gap)]"
            key={groupIndex}
          >
            {logoStripItems.map((item) => (
              <Image
                alt=""
                aria-hidden="true"
                className="h-auto w-auto max-w-none shrink-0 object-contain opacity-100 brightness-0 invert"
                height={item.height}
                key={`${groupIndex}-${item.name}`}
                loading="lazy"
                src={item.src}
                width={item.width}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
