"use client";

import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Navbar() {
  return (
    <>
      <div className={styles.nav_background}>
        <Link href="/" className={styles.nav_link}>
          HOME
        </Link>
        <Link href="/works" className={styles.nav_link}>
          WORKS
        </Link>
        <Link href="/about" className={styles.nav_link_two}>
          ABOUT
        </Link>
        <Link href="/contact" className={styles.nav_link_two}>
          CONTACT
        </Link>
      </div>
      <div
        style={{
          borderBottom: "1px solid black",
          position: "fixed",
          width: "87%",
          zIndex: 1000,
          fontSize: "8vh",
          top: "100px",
          left: "105px",
        }}
      ></div>
      <div
        style={{
          position: "fixed",
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
            height: "100vh",
            width: "20.5%",
            color: "#F43C34",
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
    </>
  );
}
