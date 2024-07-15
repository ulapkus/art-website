"use client";

import React from "react";
import styles from "../page.module.css";
import Image from "next/image";
import one from "../../public/one.webp";
import two from "../../public/two.webp";
import three from "../../public/three.webp";
import four from "../../public/four.webp";
import five from "../../public/five.webp";
import six from "../../public/six.webp";
import seven from "../../public/seven.webp";
import eight from "../../public/eight.webp";
import nine from "../../public/nine.webp";
import ten from "../../public/ten.webp";
import eleven from "../../public/eleven.webp";
import twelve from "../../public/twelve.webp";
import thirteen from "../../public/thirteen.webp";
import fourteen from "../../public/fourteen.webp";
import fifteen from "../../public/fifteen.webp";
import sixteen from "../../public/sixteen.webp";
import Footer from "../footer";

const artData = [
  { src: one, size: "12 x 16", medium: "Pastel" },
  { src: twelve, size: "12 x 20", medium: "Pastel" },
  { src: three, size: "9 x 12", medium: "Oil on canvas" },
  { src: four, size: "9 x 12", medium: "Pastel" },
  { src: five, size: "20 x 30", medium: "Pastel" },
  { src: ten, size: "12 x 16", medium: "Pastel" },
  { src: eight, size: "12 x 16", medium: "Pastel" },
  { src: nine, size: "12 x 16", medium: "Pastel" },
  { src: two, size: "15 x 20", medium: "Pastel" },
  { src: eleven, size: "9 x 12  ", medium: "Pastel" },
  { src: thirteen, size: "8 x 10", medium: "Pastel" },
  { src: six, size: "8 x 10", medium: "Pastel" },
  { src: seven, size: "10 x 18", medium: "Pastel" },
  { src: fifteen, size: "19 x 25", medium: "Pastel" },
  { src: sixteen, size: "15 x 20", medium: "Pastel" },
  { src: fourteen, size: "10 x 15", medium: "Pastel" },
];

const ArtItem = ({ src, size, medium }) => (
  <div className={styles.art}>
    <Image className={styles.art_img} src={src} alt="" />
    <div className={styles.text_container}>
      <div className={styles.text}>{size}</div>
      <div className={styles.text}>{medium}</div>
    </div>
  </div>
);

export default function Works() {
  return (
    <div className={styles.main}>
      <div className={styles.works_art_container}>
        {artData.map((art, index) => (
          <ArtItem key={index} {...art} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
