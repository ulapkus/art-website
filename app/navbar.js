"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";

  const navStyle = {
    display: "flex",
    justifyContent: isHome ? "flex-start" : "space-around",
    width: isHome ? "100%" : "100%",
  };

  const linkStyle = {
    color: isHome ? "#F5431C" : "#F5431C",
    marginRight: isHome ? "0" : "1.5vw",
    marginLeft: isHome ? "0" : "1.5vw",
  };

  const linkStyleTwo = {
    color: isHome ? "white" : "#F5431C",
    fontWeight: isHome ? "400" : "400",
    marginRight: isHome ? "0" : "1.5vw",
    marginLeft: isHome ? "0" : "1.5vw",
  };

  const linkStyleContainerOne = {
    width: isHome ? "35%" : "100%",
  };

  const linkStyleContainerTwo = {
    width: isHome ? "65%" : "100%",
  };

  const linkStyleContainerThree = {
    height: isAbout ? "111vh" : "240vh",
  };

  return (
    <div className="nav_maincontainer">
      <div className="nav_background" style={navStyle}>
        <div className="nav_links_container_one" style={linkStyleContainerOne}>
          <Link href="/" className="nav_link" style={linkStyle}>
            HOME
          </Link>
          <Link href="/about" className="nav_link" style={linkStyle}>
            ABOUT
          </Link>
        </div>
        <div className="nav_links_container_two" style={linkStyleContainerTwo}>
          <Link href="/works" className="nav_link_two" style={linkStyleTwo}>
            WORKS
          </Link>
          <a
            href="https://artbykriste.etsy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav_link_two"
            style={{ ...linkStyleTwo, textDecoration: "none" }}
          >
            SHOP
          </a>
        </div>
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
