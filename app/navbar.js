"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Add this hook at the top, outside the component
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
}

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const { width } = useWindowSize();

  const navStyle = {
    display: "flex",
    justifyContent:
      width <= 480 ? "space-around" : isHome ? "flex-start" : "space-around",
    width: isHome ? "100%" : "100%",
  };

  const linkStyle = {
    color: isHome ? "#F5431C" : "#F5431C",
    marginRight: isHome ? "0" : "1.5vw",
    marginLeft: isHome ? "0" : "1.5vw",
  };

  const linkStyleTwo = {
    color: width <= 480 ? "#F5431C" : isHome ? "white" : "#F5431C",
    fontWeight: isHome ? "400" : "400",
    marginRight: isHome ? "0" : "1.5vw",
    marginLeft: isHome ? "0" : "1.5vw",
  };

  const linkStyleContainerOne = {
    width: width <= 480 ? "100%" : isHome ? "35%" : "100%",
  };

  const linkStyleContainerTwo = {
    width: width <= 480 ? "100%" : isHome ? "65%" : "100%",
  };

  const linkStyleContainerThree = {
    height: isAbout ? "111vh" : "240vh",
  };

  return (
    <div>
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
