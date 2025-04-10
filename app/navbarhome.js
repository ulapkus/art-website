"use client";

import React from "react";
import Link from "next/link";

export default function Navbarhome() {
  return (
    <div>
      <div className="nav_background_home">
        <div className="nav_links_container_one_home">
          <Link href="/" className="nav_link_home">
            HOME
          </Link>
          <Link href="/about" className="nav_link_home">
            ABOUT
          </Link>
        </div>
        <div className="nav_links_container_two_home">
          <Link href="/works" className="nav_link_two_home">
            WORKS
          </Link>
          <a
            href="https://artbykriste.etsy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav_link_two_home"
          >
            SHOP
          </a>
        </div>
      </div>
      <div className="navbar_line_top_home"></div>
      <div className="navbar_line_side_container_home">
        <div className="navbar_line_side">COLUMBUS, OHIO</div>
      </div>
    </div>
  );
}
