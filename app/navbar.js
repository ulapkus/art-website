"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navStyle = {
    display: "flex",
    justifyContent: isHome ? "flex-start" : "space-around",
    width: isHome ? "100%" : "45%",
  };

  const linkStyle = {
    color: isHome ? "#F5431C" : "#F5431C",
  };

  const linkStyleTwo = {
    color: isHome ? "white" : "#F5431C",
    fontWeight: isHome ? "400" : "400",
  };

  return (
    <div className="nav_maincontainer">
      <div className="nav_background" style={navStyle}>
        <Link href="/" className="nav_link" style={linkStyle}>
          HOME
        </Link>
        <Link href="/about" className="nav_link" style={linkStyle}>
          ABOUT
        </Link>
        <Link href="/works" className="nav_link_two" style={linkStyleTwo}>
          WORKS
        </Link>
        <Link href="/shop" className="nav_link_two" style={linkStyleTwo}>
          SHOP
        </Link>
      </div>
      <div
        style={{
          borderBottom: "1px solid black",
          position: "absolute",
          width: "87%",
          zIndex: 1000,
          fontSize: "8vh",
          top: "100px",
          left: "105px",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "30%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            writingMode: "vertical-lr",
            transform: "rotate(180deg)",
            height: "200vh",
            width: "20.5%",
            color: "#F5431C",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            paddingRight: "7vh",
            paddingBottom: "12vh",
            borderLeft: "1px solid black",
            fontSize: "2vh",
            fontWeight: "400",
          }}
        >
          COLUMBUS, OHIO
        </div>
      </div>
    </div>
  );
}
