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
        <Link href="/about" className="nav-link">
          ABOUT
        </Link>
        <Link href="/about" className="nav-link">
          CONTACT
        </Link>
        {/* <Link href="/about" className="nav-link">
          INSTAGRAM
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
