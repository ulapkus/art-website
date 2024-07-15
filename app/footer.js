"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import instagramlogo from "../public/instagram.webp";
import emaillogo from "../public/emaillogo.png";

export default function Footer() {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

  const copyToClipboard = async (event) => {
    try {
      const email = "klapkus@gmail.com";
      await navigator.clipboard.writeText(email);

      const x = event.clientX;
      const y = event.clientY;

      setTooltip({ visible: true, x, y });

      setTimeout(() => {
        setTooltip({ visible: false, x: 0, y: 0 });
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className={styles.footer}>
      <div className={styles.email_container} onClick={copyToClipboard}>
        <Image
          className={styles.logo_contact}
          src={emaillogo}
          alt=""
          width={100}
          height={100}
        ></Image>
        <p className={styles.email_footer}>klapkus@gmail.com</p>
      </div>

      <a
        href="https://www.instagram.com/art.by.kriste?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        className={styles.instagram_container}
      >
        <Image
          className={styles.logo_contact}
          src={instagramlogo}
          alt=""
          width={100}
          height={100}
        ></Image>
        <p className={styles.instagram_footer}>@art.by.kriste</p>
      </a>
      {tooltip.visible && (
        <div
          className={styles.email_copied}
          style={{
            position: "fixed",
            top: tooltip.y,
            left: tooltip.x,
            backgroundColor: "black",
            color: "white",
            padding: "5px",
            borderRadius: "3px",
            zIndex: 1000,
            transform: "translate(-50%, -100%)",
          }}
        >
          Email copied!
        </div>
      )}
    </div>
  );
}
