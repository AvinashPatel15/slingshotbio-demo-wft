"use client";

import React from "react";
import Link from "next/link";
import { primaryNavigation } from "@/contentMap";
import { useScrollState } from "@/hooks/useScrollState";
import {
  CartIcon,
  CompactChevronIcon,
  GlobeIcon,
  LanguageIcon,
  MenuIcon,
  SearchIcon,
} from "@/components/ui/icons";

const navItems = primaryNavigation.map(({ label, href, links }) => ({
  label,
  href: href ?? "#",
  dropdown: Boolean(links?.length),
}));

export default function Header() {
  const isScrolled = useScrollState(18);

  return (
    <header className={`site-header${isScrolled ? " site-header--scrolled" : ""}`}>
      <div className="header-topbar">
        <div className="frame header-container">
          <div className="header-topbar__frame">
            <div className="header-utility">
              <button type="button" className="header-utility__button">
                <GlobeIcon />
                <span>{isScrolled ? "US" : "United States"}</span>
                <CompactChevronIcon />
              </button>
              <button type="button" className="header-utility__button">
                <LanguageIcon />
                <span>EN</span>
                <CompactChevronIcon />
              </button>
            </div>

            <div className="header-tools header-tools--default">
              <button type="button" className="tool-button tool-button--nav" aria-label="Search">
                <SearchIcon />
              </button>
              <button type="button" className="tool-button tool-button--nav" aria-label="Cart">
                <CartIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="header-mainbar">
        <div className="frame header-container">
          <div className="header-mainbar__frame">
            <div className="header-mainbar__lead">
              <div className="header-utility header-utility--compact">
                <button type="button" className="header-utility__button">
                  <GlobeIcon />
                  <span>US</span>
                </button>
                <span className="header-utility__dot" aria-hidden="true" />
                <button type="button" className="header-utility__button">
                  <span>EN</span>
                  <CompactChevronIcon />
                </button>
              </div>

              <Link href="/" className="brand-logo" aria-label="SlingshotBio home">
                <img
                  className="brand-logo__full"
                  src="/assets/icons-svg/slingshot-logo.svg"
                  alt="SlingshotBio"
                />
                <img
                  className="brand-logo__mark"
                  src="/assets/icons-svg/logo-mark.svg"
                  alt=""
                  aria-hidden="true"
                />
              </Link>
            </div>

            <nav className="primary-nav" aria-label="Primary navigation">
              {navItems.map((item) => (
                <Link key={item.label} className="nav-link" href={item.href}>
                  <span>{item.label}</span>
                  {item.dropdown ? <CompactChevronIcon /> : null}
                </Link>
              ))}
              <span className="nav-separator" aria-hidden="true" />
              <Link className="nav-link nav-link--accent" href="/shop#shop-all-product">
                Shop Now
              </Link>
              <span className="nav-separator nav-separator--tools" aria-hidden="true" />
              <button type="button" className="tool-button tool-button--nav tool-button--inline" aria-label="Search">
                <SearchIcon />
              </button>
              <button type="button" className="tool-button tool-button--nav tool-button--inline" aria-label="Cart">
                <CartIcon />
              </button>
            </nav>
            <button type="button" className="mobile-menu-button" aria-label="Open navigation menu">
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
