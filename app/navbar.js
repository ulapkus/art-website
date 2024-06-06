"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(max-width: 768px)");
      const handleMediaChange = (e) => {
        setIsMobile(e.matches);
      };
      setIsMobile(mediaQuery.matches);
      mediaQuery.addEventListener("change", handleMediaChange);
      return () => {
        mediaQuery.removeEventListener("change", handleMediaChange);
      };
    }
  }, []);

  return (
    <div>
      {isMobile ? (
        <div className="nav_background_mobile">
          <Link href="/" className="nav_kriste_mobile">
            KRISTE AUKŠTUOLIS
          </Link>
          <div className="main_links_mobile">
            <Link
              href="/components_mobile/works_mobile"
              className="nav_link_mobile"
            >
              WORKS
            </Link>
            <Link
              href="/components_mobile/about_mobile"
              className="nav_link_mobile"
            >
              ABOUT
            </Link>
            <Link
              href="/components_mobile/contact_mobile"
              className="nav_link_mobile"
            >
              CONTACT
            </Link>
          </div>
        </div>
      ) : (
        <div className="nav_background">
          <Link href="/" className="nav_kriste">
            KRISTE AUKŠTUOLIS
          </Link>
          <div className="main_links">
            <Link href="/components_web/works" className="nav_link">
              WORKS
            </Link>
            <Link href="/components_web/about" className="nav_link">
              ABOUT
            </Link>
            <Link href="/components_web/contact" className="nav_link">
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
