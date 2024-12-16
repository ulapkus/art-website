"use client";

import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
// import kristetwo from "../public/WhatsAppThree.jpeg";
import kristetwo from "../public/WhatsAppFour.jpeg";
import Navbar from "./navbar";

export default function Page() {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "250px",
          width: "100%",
          zIndex: 1000,
          fontSize: "8vh",
          left: "375px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>KRISTĖ</div>
          <div style={{ marginLeft: "55px", color: "white" }}>AUKŠTUOLIS</div>
        </div>
      </div>
      <div>
        <Navbar />
        <div className={styles.art_container_container}>
          <div
            style={{
              position: "fixed",
              right: "0",
              top: "0",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              objectFit: "cover",
              height: "100vh",
              width: "60vw",
            }}
          >
            <Image src={kristetwo} style={{ height: "100%", width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
