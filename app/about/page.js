import React from "react";
import Image from "next/image";
import kristebasement from "../../public/kristebasement.jpg";
import styles from "../page.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <p className={styles.about_text}>
        I am a Lithuanian-American artist based out of Columbus, OH. As long as
        I can remember, I have been greatly influenced by my roots in the life
        between Lithuania and America. Some of my refugee family members found
        peace through artwork-and I still use their artistic materials to this
        day. The play between light and darkness is prevalent throughout my
        work, which is such a constant question for people who go through dark
        periods in their life. My art is an ode to people before me who found
        beauty in the little things, even among the chaos that life can bring.
      </p>
      <Image src={kristebasement} className={styles.kristebasement} alt="" priority />
    </div>
  );
}
