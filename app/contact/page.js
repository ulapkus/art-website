"use client";

import React, { useState } from "react";
import Image from "next/image";
import kristeportrait from "../../public/kristepic.webp";
import gmaillogo from "../../public/emaillogo.png";
import styles from "../page.module.css";
import instagramlogo from "../../public/instagram.webp";

export default function Contact() {
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
    <div className={styles.contact}>
      <Image
        src={kristeportrait}
        className={styles.photo_contact}
        alt=""
        priority
      />
      <div className={styles.contact_bottom}>
        <p className={styles.contact_me}>Let's connect!</p>
        <div className={styles.gmail_contact} onClick={copyToClipboard}>
          <Image src={gmaillogo} className={styles.logo_contact} alt="" />
          <p className={styles.gmail_word}>klapkus@gmail.com</p>
        </div>
        <a
          className={styles.insta_contact}
          href="https://www.instagram.com/art.by.kriste?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
        >
          <Image
            className={styles.logo_contact}
            src={instagramlogo}
            alt=""
            width={100}
            height={100}
          />
          <p className={styles.insta_word}>@art.by.kriste</p>
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
    </div>
  );
}
