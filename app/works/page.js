"use client";

import React from "react";
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
import styles from "../page.module.css";

export default function Works() {

  return (
    <div className={styles.main}>
    <div className={styles.works_art_container}>
      <div className={styles.art}>
        <Image className={styles.art_img} src={one} alt="" />
        <div className={styles.text_container}>
          <div className={styles.text}>12 x 20</div>
          <div className={styles.text}>Pastel on paper</div>
        </div>
      </div>
      <div className={styles.art}>
        <Image className={styles.art_img} src={twelve} alt="" />
        <div className={styles.text_container}>
          <div className={styles.text}>12 x 20</div>
          <div className={styles.text}>Pastel on paper</div>
        </div>
      </div>
      <div className={styles.art}>
        <Image className={styles.art_img} src={three} alt="" />
        <div className={styles.text_container}>
          <div className={styles.text}>9 x 12</div>
          <div className={styles.text}>Oil paint on canvas</div>
        </div>
      </div>
      <div className={styles.art}>
        <Image className={styles.art_img} src={four} alt="" />
        <div className={styles.text_container}>
          <div className={styles.text}>14 x 20</div>
          <div className={styles.text}>Pastel on paper</div>
        </div>
      </div>
      <div className={styles.art}>
        <Image className={styles.art_img} src={five} alt="" />
        <div className={styles.text_container}>
          <div className={styles.text}>20 x 30</div>
          <div className={styles.text}>Pastel on paper</div>
        </div>
      </div>
      <div className={styles.art}>
        <Image className={styles.art_img} src={ten} alt="" />
        <div className={styles.text_container}>
          <div className={styles.text}>9 x 12</div>
          <div className={styles.text}>Pastel on paper</div>
        </div>
      </div>
      <div className={styles.art}>
        <Image className={styles.art_img} src={eight} alt="" />
        <div className={styles.text_container}>
          <div className={styles.text}>10 x 15</div>
          <div className={styles.text}>Pastel on paper</div>
        </div>
      </div>
      <div className={styles.art}>
        <Image className={styles.art_img} src={fourteen} alt="" />
        <div className={styles.text_container}>
          <div className={styles.text}>10 x 15</div>
          <div className={styles.text}>Pastel on paper</div>
        </div>
      </div>
      <div className={styles.art}>
        <Image className={styles.art_img} src={nine} alt="" />
        <div className={styles.text_container}>
          <div className={styles.text}>20 x 30</div>
          <div className={styles.text}>Pastel on paper</div>
        </div>
      </div>
      <div className={styles.art}>
        <Image className={styles.art_img} src={two} alt="" />
        <div className={styles.text_container}>
          <div className={styles.text}>15 x 20</div>
          <div className={styles.text}>Pastel on paper</div>
        </div>
      </div>
      <div className={styles.art}>
        <Image className={styles.art_img} src={eleven} alt="" />
        <div className={styles.text_container}>
          <div className={styles.text}>10 x 15</div>
          <div className={styles.text}>Pastel on paper</div>
        </div>
      </div>
      <div className={styles.art}>
        <Image className={styles.art_img} src={six} alt="" />
        <div className={styles.text_container}>
          <div className={styles.text}>8 x 10</div>
          <div className={styles.text}>Pastel on paper</div>
        </div>
      </div>
      <div className={styles.art}>
        <Image className={styles.art_img} src={thirteen} alt="" />
        <div className={styles.text_container}>
          <div className={styles.text}>8 x 10</div>
          <div className={styles.text}>Pastel on paper</div>
        </div>
      </div>
      <div className={styles.art}>
        <Image className={styles.art_img} src={seven} alt="" />
        <div className={styles.text_container}>
          <div className={styles.text}>10 x 18</div>
          <div className={styles.text}>Pastel on paper</div>
        </div>
      </div>
      <div className={styles.art}>
        <Image className={styles.art_img} src={fifteen} alt="" />
        <div className={styles.text_container}>
          <div className={styles.text}>10 x 15</div>
          <div className={styles.text}>Pastel on paper</div>
        </div>
      </div>
      <div className={styles.art}>
        <Image className={styles.art_img} src={sixteen} alt="" />
        <div className={styles.text_container}>
          <div className={styles.text}>15 x 20</div>
          <div className={styles.text}>Pastel on paper</div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
};


