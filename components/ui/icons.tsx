export function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="icon-svg">
      <circle cx="8.75" cy="8.75" r="5.65" />
      <path d="m13 13 4 4" />
    </svg>
  );
}

export function CartIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="icon-svg">
      <path d="M2.7 3.4h2.2l1.4 8.3h7.9l1.6-5.5H6.1" />
      <circle cx="7.6" cy="16.2" r="1.1" />
      <circle cx="14" cy="16.2" r="1.1" />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="header-utility-icon">
      <circle cx="10" cy="10" r="7.2" />
      <path d="M2.8 10h14.4" />
      <path d="M10 2.8c2 1.95 3.08 4.35 3.08 7.2S12 15.25 10 17.2C8 15.25 6.92 12.85 6.92 10S8 4.75 10 2.8Z" />
    </svg>
  );
}

export function LanguageIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="header-utility-icon">
      <path d="M3.25 5.05h8.1" />
      <path d="M7.3 3.2v1.85" />
      <path d="M5 5.05c.35 2.7 2.05 4.95 5.35 6.65" />
      <path d="M10.8 5.05c-.28 2.35-1.58 4.35-4.1 6" />
      <path d="M11.95 16.8l3.4-8.4 3.4 8.4" />
      <path d="M13 14.25h4.7" />
    </svg>
  );
}

export function CompactChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12" className="header-chevron-icon">
      <path d="m3 4.5 3 3 3-3" />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="icon-svg">
      <path d="M3.5 6.25h13" />
      <path d="M3.5 10h13" />
      <path d="M3.5 13.75h13" />
    </svg>
  );
}

export function ProductStepIcon({ iconSrc, title }: { iconSrc: string; title: string }) {
  return (
    <img
      className="product-step-icon"
      src={iconSrc}
      alt=""
      aria-hidden="true"
      width={60}
      height={60}
      title={title}
    />
  );
}

export function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="icon-svg">
      <path d="M5 10h9" />
      <path d="m10.5 5 4.5 5-4.5 5" />
    </svg>
  );
}
