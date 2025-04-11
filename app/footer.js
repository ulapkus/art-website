"use client";

import React, { useState } from "react";
import Image from "next/image";
import instagramlogo from "../public/instagram.webp";
import emaillogo from "../public/emaillogo.png";
import etsylogo from "../public/etsy.png";

export default function Footer() {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

  const copyToClipboard = async (event) => {
    try {
      const email = "kriste@artbykriste.com";
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
    <div className="footer">
      <div className="email_container" onClick={copyToClipboard}>
        <Image
          className="logo_contact"
          src={emaillogo}
          alt=""
          width={100}
          height={100}
        ></Image>
        <p className="email_footer">kriste@artbykriste.com</p>
      </div>

      <a
        href="https://www.instagram.com/art.by.kriste?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        className="instagram_container"
      >
        <Image
          className="logo_contact"
          src={instagramlogo}
          alt=""
          width={100}
          height={100}
        />
        <p className="instagram_footer">@art.by.kriste</p>
      </a>
      <a
        href="https://artbykriste.etsy.com"
        target="_blank"
        className="instagram_container"
      >
        <Image
          className="logo_contact"
          src={etsylogo}
          alt=""
          width={100}
          height={100}
        />
        <p className="instagram_footer">Etsy Shop</p>
      </a>

      {tooltip.visible && (
        <div
          className="email_copied"
          style={{
            position: "fixed",
            top: tooltip.y,
            left: tooltip.x,
          }}
        >
          Email copied!
        </div>
      )}
    </div>
  );
}
