"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-background">
      <Link href="/" className="nav-kriste">
        KRISTE AUKŠTUOLIS
      </Link>
      <div className="main-links">
        <Link href="/works" className="nav-link">
          WORKS
        </Link>
        <Link href="/shop" className="nav-link">
          SHOP
        </Link>
        <Link href="/about" className="nav-link">
          ABOUT
        </Link>
        <Link href="/contact" className="nav-link">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
