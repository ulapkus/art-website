"use client";

import React from "react";
import Link from "next/link";
import viewartwork from "../public/viewartwork.jpg";
import basement from "../public/basement_edited.jpg";
import pastels from "../public/pastelsorganized.jpg";
import Image from "next/image";
import Footer from "./footer";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.art_container_container}>
      <div className={styles.art_container}>
        <div className={styles.art_first}>
          <Link href="/works" className={styles.link_first}>
            <p className={styles.home_text}>VIEW ARTWORK</p>
            <Image
              src={viewartwork}
              className={styles.image_viewartwork}
              alt="View Artwork"
              priority
            />
          </Link>
        </div>
        <div className={styles.second_third}>
          <div className={styles.art_second}>
            <Link href="/about" className={styles.link_second}>
              <p className={styles.home_text}>ABOUT ME</p>
              <Image
                src={pastels}
                className={styles.image_viewartwork}
                alt="About Me"
                priority
              />
            </Link>
          </div>
          <div className={styles.art_third}>
            <Link href="/contact" className={styles.link_third}>
              <p className={styles.home_text}>CONTACT INFO</p>
              <Image
                src={basement}
                className={styles.image_viewartwork}
                alt="Contact Info"
                priority
              />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
