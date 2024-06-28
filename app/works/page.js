"use client";

import React from "react";
import styles from "../page.module.css";
import Image from "next/image";
import one from "../../public/one.jpg";
import two from "../../public/two.jpg";
import three from "../../public/three.webp";
import four from "../../public/four.webp";
import five from "../../public/five.webp";
import six from "../../public/six.webp";
import seven from "../../public/seven.webp";
import eight from "../../public/eight.webp";
import nine from "../../public/nine.jpeg";
import ten from "../../public/ten.webp";
import eleven from "../../public/eleven.webp";
import twelve from "../../public/twelve.webp";
import thirteen from "../../public/thirteen.webp";
import fourteen from "../../public/fourteen.webp";
import fifteen from "../../public/fifteen.jpg";
import sixteen from "../../public/sixteen.jpg";
import Footer from "../footer";

const artData = [
  { src: one, size: "12 x 20", medium: "Pastel on paper" },
  { src: twelve, size: "12 x 20", medium: "Pastel on paper" },
  { src: three, size: "9 x 12", medium: "Oil paint on canvas" },
  { src: four, size: "14 x 20", medium: "Pastel on paper" },
  { src: five, size: "20 x 30", medium: "Pastel on paper" },
  { src: ten, size: "9 x 12", medium: "Pastel on paper" },
  { src: eight, size: "10 x 15", medium: "Pastel on paper" },
  { src: fourteen, size: "10 x 15", medium: "Pastel on paper" },
  { src: nine, size: "20 x 30", medium: "Pastel on paper" },
  { src: two, size: "15 x 20", medium: "Pastel on paper" },
  { src: eleven, size: "10 x 15", medium: "Pastel on paper" },
  { src: six, size: "8 x 10", medium: "Pastel on paper" },
  { src: thirteen, size: "8 x 10", medium: "Pastel on paper" },
  { src: seven, size: "10 x 18", medium: "Pastel on paper" },
  { src: fifteen, size: "10 x 15", medium: "Pastel on paper" },
  { src: sixteen, size: "15 x 20", medium: "Pastel on paper" },
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
