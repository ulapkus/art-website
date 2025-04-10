"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isAbout = pathname === "/about";

  const linkStyleContainerThree = {
    height: isAbout ? "111vh" : "240vh",
  };

  return (
    <div>
      <div className="nav_background">
        <Link href="/" className="nav_link">
          HOME
        </Link>
        <Link href="/about" className="nav_link">
          ABOUT
        </Link>
        <Link href="/works" className="nav_link">
          WORKS
        </Link>
        <a
          href="https://artbykriste.etsy.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav_link"
        >
          SHOP
        </a>
      </div>
      <div className="navbar_line_top"></div>
      <div
        className="navbar_line_side_container"
        style={linkStyleContainerThree}
      >
        <div className="navbar_line_side">COLUMBUS, OHIO</div>
      </div>
    </div>
  );
}
