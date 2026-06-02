import { footerNavigation, type NavigationLink } from "../contentMap";
import type {
  BiomarkerDot,
  BiomarkerRing,
  BiomarkerTag,
  ComparisonColumn,
  FooterLinkGroup,
  FooterSocialLink,
  LogoStripItem,
  ProductStep,
  ResourceCard,
  StudyMetaItem,
  TestimonialSlide,
} from "./types";

export const logoStripItems: LogoStripItem[] = [
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

export const studyMetaItems: StudyMetaItem[] = [
  {
    icon: "/assets/illustrations/study-placeholder-1.svg",
    text: "Global, multi-site instrument standardization study",
    alt: "Study illustration placeholder 1",
  },
  {
    icon: "/assets/illustrations/study-placeholder-2.svg",
    text: "Standardized antibody panel and staining protocol",
    alt: "Study illustration placeholder 2",
  },
  {
    icon: "/assets/illustrations/study-placeholder-3.svg",
    text: "Over 30 flow cytometers used across multiple laboratories",
    alt: "Study illustration placeholder 3",
  },
  {
    icon: "/assets/illustrations/study-placeholder-4.svg",
    text: "Immune cell subset percentages used to assess instrument performance",
    alt: "Study illustration placeholder 4",
  },
];

export const comparisonColumns: ComparisonColumn[] = [
  {
    title: "Biological controls",
    description:
      "Donor PBMCs create inherent data quality challenges that compromise assay reliability.",
    variant: "muted",
    items: [
      {
        title: "Up to 60% variability",
        description: "in population counts across sites, instruments, and operators",
      },
      {
        title: "Missed low-frequency cells",
        description: "due to noise floor masking rare populations",
      },
      {
        title: "Tech errors hidden in noise",
        description: "making troubleshooting and QC nearly impossible",
      },
    ],
  },
  {
    title: "TBNK Mimic™",
    description:
      "Synthetic reproducibility enables confident data interpretation and rapid issue detection.",
    variant: "accent",
    items: [
      {
        title: "Consistent detection",
        description: "of all cell types across sites, machines, and operators",
      },
      {
        title: "Tech errors immediately visible",
        description: "as peaks stand out against stable baseline",
      },
      {
        title: "Operator error detection",
        description: "enables targeted training and site integration QC",
      },
    ],
  },
];

export const productSteps: ProductStep[] = [
  {
    id: "instrument-standardization",
    title: "Instrument Standardization & Harmonization",
    iconSrc: "/assets/shop-controls/tabs/instrument-standardization.svg",
    products: [
      {
        name: "ScatterBridge™",
        description:
          "Instrument-to-instrument standardization control with nine hydrogel populations for FSC/SSC harmonization.",
        price: "US $300.00",
        imageSrc: "/assets/shop-controls/scatterbridge.png",
        href: "https://shop.slingshotbio.com/products/scatterbridge%E2%84%A2",
      },
      {
        name: "FlowCytes® Non-Fixed WBC Mimics",
        description:
          "Shelf-stable scatter mimics for unfixed lymphocyte, monocyte, and granulocyte gating and longitudinal instrument checks.",
        price: "US $284.00",
        imageSrc: "/assets/shop-controls/scatterbridge.png",
        href: "https://shop.slingshotbio.com/products/flowcytes-wbc-scatter-mimic",
      },
      {
        name: "FlowCytes® Fixed WBC Mimic",
        description:
          "Fixed white blood cell scatter control for standardized whole blood population analysis and system suitability.",
        price: "US $284.00",
        imageSrc: "/assets/shop-controls/scatterbridge.png",
        href: "https://shop.slingshotbio.com/products/flowcytes%C2%AE-fixed-wbc-scatter-mimic",
      },
    ],
  },
  {
    id: "spectral-unmixing",
    title: "Spectral Unmixing & Compensation",
    iconSrc: "/assets/shop-controls/tabs/spectral-unmixing.svg",
    products: [
      {
        name: "SpectraComp®",
        description:
          "Single-stain cell mimics built for dependable spectral unmixing and compensation across workflows.",
        price: "US $338.00",
        sizeOptions: ["25 Tests", "100 Tests"],
        imageSrc: "/assets/shop-controls/spectracomp.png",
        href: "https://shop.slingshotbio.com/products/spectracomp",
      },
      {
        name: "ViaComp®",
        description:
          "2-in-1 viability controls that replicate live/dead staining behavior with reproducible signal separation.",
        price: "US $240.00",
        imageSrc: "/assets/shop-controls/viacomp.png",
        href: "https://shop.slingshotbio.com/products/viacomp",
      },
      {
        name: "ViaComp® Flex",
        description:
          "Separate positive and negative viability controls for flexible toxicity studies and high-resolution viability gating.",
        price: "US $240.00",
        imageSrc: "/assets/shop-controls/viacomp.png",
        href: "https://shop.slingshotbio.com/products/viacompflex",
      },
    ],
  },
  {
    id: "immunophenotyping",
    title: "Immunophenotyping Controls",
    iconSrc: "/assets/shop-controls/tabs/immunophenotyping.svg",
    products: [
      {
        name: "TBNK Mimic™",
        description:
          "Lyophilized immune-cell mimics for reproducible gating, population tracking, and panel consistency across operators and sites.",
        price: "US $530.00",
        imageSrc: "/assets/shop-controls/tbnk-mimic.png",
        href: "https://shop.slingshotbio.com/products/tbnk-mimic",
      },
      {
        name: "TruCytes™ CD34+ Stem Cell Gating Control",
        description:
          "CD34, CD45, and viability-marker controls engineered for stem-cell enumeration and robust gating validation.",
        price: "US $324.00",
        imageSrc: "/assets/shop-controls/cd34-stem-cell-mimic.png",
        href: "https://shop.slingshotbio.com/products/trucytes%E2%84%A2-cd34-stem-cell-gating-control",
      },
      {
        name: "TruCytes™ Lymphocyte Subsets Control",
        description:
          "Synthetic T, B, and NK subset controls for panel validation, training, and harmonized immunophenotyping workflows.",
        price: "US $530.00",
        imageSrc: "/assets/shop-controls/tbnk-mimic.png",
        href: "https://shop.slingshotbio.com/products/trucytes-lymphocyte-subsets",
      },
    ],
  },
  {
    id: "quantitative-antigen-density",
    title: "Quantitative Antigen Density",
    iconSrc: "/assets/shop-controls/tabs/quant-antigen.svg",
    products: [
      {
        name: "QuantCytes™ CD19",
        description:
          "Quantitative CD19 controls to calculate molecules-per-cell and compare antigen density across experiments.",
        price: "US $148.00",
        imageSrc: "/assets/shop-controls/quantcytes-cd19.png",
        href: "https://shop.slingshotbio.com/products/ctx-trucytes-cd19",
      },
      {
        name: "TruCytes™ BCMA Quant",
        description:
          "Four-population BCMA control for calibrated antigen-density measurements with flow-cytometry MFI inputs.",
        price: "US $148.00",
        imageSrc: "/assets/shop-controls/stimcytes-bcma.png",
        href: "https://shop.slingshotbio.com/products/trucytes%E2%84%A2-quantitative-bcma-cell-mimic",
      },
      {
        name: "TruCytes™ CD20 Potency",
        description:
          "CD20 quantitative control kit designed for potency benchmarking and target-expression normalization.",
        price: "US $650.00",
        imageSrc: "/assets/shop-controls/stimcytes-cd20.png",
        href: "https://shop.slingshotbio.com/products/trucytes-potency-cd20",
      },
    ],
  },
];

export const testimonialSlides: TestimonialSlide[] = [
  {
    quote:
      "We've integrated Slingshot cell mimics as crucial controls in several of our flow cytometry workflows. Whether in assessing cell viability or managing compensation and unmixing, these off-the-shelf controls seamlessly slot into our processes. This enhances our workflow efficiency without having to compromise on data quality and reliability.",
    author: "Dr. Veronica Nash",
    title: "US Regional Head of Flow Cytometry",
    imageSrc: "/assets/testimonials/veronica-nash.png",
    imageAlt: "Dr. Veronica Nash",
    logoSrc: "/assets/testimonials/cerba-research.png",
    logoAlt: "Cerba Research",
    href: "/resources/case-studies/development-of-a-ki-67-expressing-cell-mimic-for-assay-validation-at-cerba-research",
  },
  {
    quote:
      "Clinicians need better tools to guide decision making on the choice of antiplatelet therapy in coronary artery disease patients, particularly after coronary stenting. The Prolocor pFCG test will be an important asset as we tailor antiplatelet therapies to balance thrombotic and bleeding risk.",
    author: "Dominick J. Angiolillo",
    title:
      "MD, PhD, FACC, FESC, FSCAI | Professor of Medicine, Chief, Division of Cardiology, Director, Thrombosis Research Center",
    imageSrc: "/assets/testimonials/dominick-angiolillo.png",
    imageAlt: "Dominick J. Angiolillo",
    logoSrc: "/assets/testimonials/uf-college-of-medicine.png",
    logoAlt: "UF College of Medicine",
    href: "https://www.jacc.org/doi/10.1016/j.jacc.2024.08.051",
  },
  {
    quote:
      "In our search for reliable controls for cell therapy assays, partnering with Slingshot has been a game-changer. Together, we addressed significant challenges by engineering custom CD3 T-cell mimics.",
    author: "Amina Kariminia",
    title: "Ph.D. | Immunologist, Analytical Development Scientist",
    imageSrc: "/assets/testimonials/amina-kariminia.png",
    imageAlt: "Amina Kariminia",
    logoSrc: "/assets/testimonials/partner-logo-3.svg",
    logoAlt: "Partner logo",
    href: "/resources/case-studies/novel-egfr-cd3-cell-mimics-for-validating-car-t-cell-enumeration-by-flow-cytometry",
  },
];

export const customBiomarkerTags: BiomarkerTag[] = [
  { label: "CD122", x: 585, y: 56 },
  { label: "EGFR", x: 400, y: 24 },
  { label: "BCMA", x: 236, y: 160 },
  { label: "HER2", x: 78, y: 34 },
  { label: "CD19", x: 250, y: 70 },
  { label: "CD38", x: 92, y: 252 },
  { label: "CD45", x: 300, y: 250 },
  { label: "CD65", x: 248, y: 470 },
  { label: "CD14", x: 78, y: 405 },
  { label: "CD4", x: 322, y: 115 },
  { label: "CD20", x: 440, y: 523 },
  { label: "CD25", x: 665, y: 118 },
  { label: "CD56", x: 280, y: 548 },
  { label: "EpCAM", x: 790, y: 510 },
  { label: "CCR7", x: 900, y: 440 },
  { label: "ROR1", x: 760, y: 26 },
  { label: "CD47", x: 890, y: 178 },
  { label: "LAG-3", x: 930, y: 64 },
  { label: "TIM-3", x: 1068, y: 126 },
  { label: "CD30", x: 1130, y: 500 },
  { label: "MSLN", x: 1012, y: 410 },
  { label: "CD8", x: 1162, y: 332 },
  { label: "GPC3", x: 1040, y: 258 },
  { label: "PD-L1", x: 1160, y: 190, isGhost: true },
  { label: "CD3", x: 1110, y: 30, isGhost: true },
  { label: "CD65", x: 930, y: 300, isGhost: true },
  { label: "CD3", x: 940, y: 535, isGhost: true },
  { label: "CD223", x: 116, y: 535, isGhost: true },
  { label: "CD122", x: 76, y: 135, isGhost: true },
  { label: "CD123", x: 210, y: 322, isGhost: true },
  { label: "Claudin 18.2", x: 655, y: 548, isGhost: true },
];

export const customBiomarkerRings: BiomarkerRing[] = [
  { src: "/assets/illustrations/custom-biomarkers/ring-397.svg", size: 397 },
  { src: "/assets/illustrations/custom-biomarkers/ring-509.svg", size: 509 },
  { src: "/assets/illustrations/custom-biomarkers/ring-633.svg", size: 633 },
  { src: "/assets/illustrations/custom-biomarkers/ring-773.svg", size: 773 },
  { src: "/assets/illustrations/custom-biomarkers/ring-951.svg", size: 951 },
];

export const customBiomarkerDots: BiomarkerDot[] = [
  { src: "/assets/illustrations/custom-biomarkers/dot-orange.svg", orbitSize: 509, angle: 77.9, duration: 18 },
  { src: "/assets/illustrations/custom-biomarkers/dot-orange.svg", orbitSize: 509, angle: 230.3, duration: 22, reverse: true },
  { src: "/assets/illustrations/custom-biomarkers/dot-gray.svg", orbitSize: 633, angle: -88.4, duration: 26 },
  { src: "/assets/illustrations/custom-biomarkers/dot-gray.svg", orbitSize: 509, angle: -46.6, duration: 20, reverse: true },
  { src: "/assets/illustrations/custom-biomarkers/dot-gray.svg", orbitSize: 633, angle: 34.7, duration: 28 },
];

export const relatedResources: ResourceCard[] = [
  {
    kind: "Blog",
    title: "How Potency Assay Strategy Can Accelerate Cell Therapy Development",
    imageSrc: "/assets/resources/resource-preview-1.png",
    meta: "9 min read",
    href: "https://www.slingshotbio.com/resources/blog/how-potency-assay-strategy-can-accelerate-cell-therapy-development",
    cta: "Read Article",
  },
  {
    kind: "Blog",
    title: "Biomarker Controls: How Becoming a Control Freak will Enhance your Future Experiments",
    imageSrc: "/assets/resources/resource-preview-2.png",
    meta: "2 min read",
    href: "https://www.slingshotbio.com/resources/blog/biomarker-controls-how-becoming-a-control-freak-will-enhance-your-future-experiments",
    cta: "Read Article",
  },
  {
    kind: "Education",
    title: "Navigating the Opportunities and Challenges in Analytical Development",
    imageSrc: "/assets/resources/resource-preview-3.png",
    meta: "41 min",
    href: "https://www.slingshotbio.com/resources/webinars/navigating-the-opportunities-and-challenges-in-analytical-development",
    cta: "Watch Now",
  },
];

export const footerLinkGroups: FooterLinkGroup[] = footerNavigation.map(({ label, links }) => ({
  heading: label,
  links: links ?? [],
}));

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
