"use client";

import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Navbar() {
  return (
    <div className={styles.nav_background}>
    <Link href="/" className={styles.nav_kriste}>
      KRISTE AUKŠTUOLIS
    </Link>
    <div className={styles.main_links}>
      <Link href="/works" className={styles.nav_link}>
        WORKS
      </Link>
      <Link href="/about" className={styles.nav_link}>
        ABOUT
      </Link>
      <Link href="/contact" className={styles.nav_link}>
        CONTACT
      </Link>
    </div>
  </div>
  );
};
