export type NavigationLink = {
  label: string;
  href: string;
};

export type NavigationGroup = {
  label: string;
  href?: string;
  links?: NavigationLink[];
};

export type FooterSocialLink = {
  label: string;
  href: string;
  iconSrc: string;
};

export const productPurposeRoutes: NavigationLink[] = [
  { label: "Instrument Standardization & Harmonization", href: "/purpose/instrument-standardization-harmonization" },
  { label: "Spectral Unmixing & Compensation", href: "/purpose/spectral-unmixing-compensation" },
  { label: "Immunophenotyping Controls", href: "/purpose/immunophenotyping-controls" },
  { label: "Quantitative Antigen Density", href: "/purpose/quantitative-antigen-density" },
  { label: "Functional CAR-T Benchmarking", href: "/purpose/functional-car-t-benchmarking" },
];

export const productBrandRoutes: NavigationLink[] = [
  { label: "FlowCytes®", href: "/brands/flowcytes" },
  { label: "ScatterBridge®", href: "/brands/scatterbridge" },
  { label: "SpectraComp®", href: "/brands/spectracomp" },
  { label: "ViaComp®", href: "/brands/viacomp" },
  { label: "PhenoCytes™", href: "/brands/phenocytes" },
  { label: "QuantCytes™", href: "/brands/quantcytes" },
  { label: "StimCytes™", href: "/brands/stimcytes" },
];

export const productRoutes: NavigationLink[] = [
  { label: "SpectraComp®", href: "/products/spectracomp" },
  { label: "ViaComp®", href: "/products/viacomp" },
  { label: "TBNK Mimic™", href: "/products/tbnk-mimic" },
  { label: "ScatterBridge®", href: "/products/scatterbridge" },
  { label: "FlowCytes® WBC (Unfixed) 25 Tests", href: "/products/flowcytes-wbc-unfixed" },
  { label: "Custom Cell Mimics", href: "/custom-biomarker-cell-mimics" },
  { label: "View All Products", href: "/shop" },
];

export const resourceRoutes: NavigationLink[] = [
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/resources/case-studies" },
  { label: "Webinars", href: "/resources/webinars" },
  { label: "Videos", href: "/resources/videos" },
  { label: "Events", href: "/events" },
  { label: "Press Releases & News", href: "/resources/press-releases" },
  { label: "Posters", href: "/resources/poster" },
  { label: "Certificates of Analysis", href: "/resources/certificate-of-analysis" },
  { label: "Technical Data Sheets", href: "/resources/technical-data-sheet" },
  { label: "Application Notes", href: "/resources/application-note" },
  { label: "Published Articles", href: "/resources/published-article" },
  { label: "ISO 9001 Certificate", href: "https://23580880.fs1.hubspotusercontent-na1.net/hubfs/23580880/ISO%20Certification/Slingshot%20Biosciences%2c%20Inc.%20ISO%209001_2015%20Certificate%202025(R)%20(1).pdf" },
  { label: "All Resources", href: "/resources" },
];

export const companyRoutes: NavigationLink[] = [
  { label: "About", href: "/about-us" },
  { label: "Leadership", href: "/about-us#leadership" },
  { label: "News & Events", href: "/resources/press-releases" },
  { label: "Worldwide Distributors", href: "/worldwide-distribution" },
  { label: "Careers", href: "/about-us/careers" },
  { label: "Contact", href: "/contact" },
];

export const industryRoutes: NavigationLink[] = [
  { label: "Biotechnology & Biopharma", href: "/industries/biotechnology-biopharma" },
  { label: "Cell & Gene Therapy", href: "/industries/cell-gene-therapy" },
  { label: "Clinical Diagnostics", href: "/industries/clinical-diagnostics" },
  { label: "Clinical Research", href: "/industries/clinical-research" },
];

export const primaryNavigation: NavigationGroup[] = [
  {
    label: "Products",
    href: "/shop",
    links: [...productPurposeRoutes, ...productBrandRoutes, ...productRoutes],
  },
  {
    label: "Industries",
    href: "/industries",
    links: industryRoutes,
  },
  { label: "Resources", href: "/resources", links: resourceRoutes },
  { label: "How Mimics Work", href: "/how-mimics-work" },
  { label: "Company", href: "/about-us", links: companyRoutes },
  { label: "Contact Us", href: "/contact" },
];

export const footerNavigation: NavigationGroup[] = [
  {
    label: "Products",
    links: [
      { label: "SpectraComp®", href: "/brands/spectracomp" },
      { label: "ScatterBridge®", href: "/brands/scatterbridge" },
      { label: "ViaComp®", href: "/brands/viacomp" },
      { label: "FlowCytes® Unmixed", href: "/brands/flowcytes" },
      { label: "TBNK™ Mimic", href: "/products/tbnk-mimic" },
      { label: "StimCytes™", href: "/brands/stimcytes" },
      { label: "QuantCytes™", href: "/brands/quantcytes" },
      { label: "FlowCytes®", href: "/brands/flowcytes" },
      { label: "PhenoCytes™", href: "/brands/phenocytes" },
    ],
  },
  { label: "Primary Purpose", links: productPurposeRoutes },
  {
    label: "Learning Resources",
    links: resourceRoutes.filter(({ label }) =>
      ["Blog", "Case Studies", "Webinars", "Videos", "Events", "Press Releases & News"].includes(label),
    ),
  },
  {
    label: "Technical Resources",
    links: resourceRoutes.filter(({ label }) =>
      [
        "Posters",
        "Certificates of Analysis",
        "Technical Data Sheets",
        "Application Notes",
        "Published Articles",
        "ISO 9001 Certificate",
      ].includes(label),
    ),
  },
  { label: "Company", links: companyRoutes },
];

export const footerLegalLinks: NavigationLink[] = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Shipping & Returns", href: "/return-policy" },
];

export const footerSocialLinks: FooterSocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/slingshotbio",
    iconSrc: "/assets/footer/social-facebook.svg",
  },
  {
    label: "X",
    href: "https://x.com/slingshotbio",
    iconSrc: "/assets/footer/social-x.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/slingshotbio",
    iconSrc: "/assets/footer/social-instagram.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/slingshot-biosciences",
    iconSrc: "/assets/footer/social-linkedin.svg",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@slingshotbiosciences",
    iconSrc: "/assets/footer/social-youtube.svg",
  },
];
