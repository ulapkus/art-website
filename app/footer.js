"use client";

import React from "react";
import styles from "./page.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_main}>
        <p className={styles.footer_words}>KLAPKUS@GMAIL.COM | </p>
        <p className={`${styles.footer_words} ${styles.socials}`}>
          <img
            className={styles.insta_img}
            src="https://static.vecteezy.com/system/resources/previews/017/743/717/original/instagram-icon-logo-free-png.png"
            alt="Instagram"
          ></img>
          INSTAGRAM
        </p>
      </div>
    </div>
  );
}
