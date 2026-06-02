import React from "react";
import Link from "next/link";
import { footerNavigation, footerLegalLinks, footerSocialLinks } from "@/contentMap";

const footerLinkGroups = footerNavigation.map(({ label, links }) => ({
  heading: label,
  links: links ?? [],
}));

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="frame site-footer__frame">
        <div className="site-footer__header reveal">
          <h2>
            Not Plastic. Not a Person. Not an Animal. <span>Cell Mimics.</span>
          </h2>
          <p>
            Plastic isn't biology. Donors aren't reproducible. Animals aren't human. Stop
            choosing between them.
          </p>
          <a className="btn btn--primary btn--primary-glow btn--lg site-footer__cta" href="mailto:info@slingshotbio.com">
            GET IN TOUCH
          </a>
        </div>

        <div className="site-footer__divider" aria-hidden="true" />

        <nav className="site-footer__links" aria-label="Footer navigation">
          {footerLinkGroups.map((group) => (
            <div className="site-footer__link-group" key={group.heading}>
              <h3>{group.heading}</h3>
              <ul>
                {group.links.map((link) => (
                  <li key={`${group.heading}-${link.label}-${link.href}`}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="site-footer__bottom">
          <p>© 2026 Slingshot Biosciences, Inc. All rights reserved.</p>
          <nav className="site-footer__legal" aria-label="Legal links">
            {footerLegalLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="site-footer__social" aria-label="Social links">
            {footerSocialLinks.map((link) => (
              <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} key={link.label}>
                <img src={link.iconSrc} alt="" loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
