import React from "react";
import Image from "next/image";
import kristebasement from "../../public/kristebasement.jpg";
import paintbrush from "../../public/paintbrush.png";
import styles from "../page.module.css";
import Footer from "../footer";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About Me</h1>
      <p className={styles.about_text}>
        I am a Lithuanian-American artist based out of Columbus, OH. For as long
        as I can remember, I have been greatly influenced by my roots in the
        life between Lithuania and America. Some of my refugee family members
        found peace through artwork-and I still use their artistic materials to
        this day.
      </p>
      <Image src={paintbrush} className={styles.paintbrush} alt="" priority />

      <p className={styles.about_text}>
        The play between light and darkness is prevalent throughout my work,
        which is such a constant question for people who go through dark periods
        in their life. My art is an ode to people before me who found beauty in
        the little things, even among the chaos that life can bring.
      </p>
      <Image
        src={kristebasement}
        className={styles.kristebasement}
        alt=""
        priority
      />
      <Footer />
    </div>
  );
}
