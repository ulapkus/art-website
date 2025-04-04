import React from "react";
import Image from "next/image";
import kristebasement from "../../public/kristebasement.webp";
import paintbrush from "../../public/paintbrush.png";
import styles from "../page.module.css";
import Footer from "../footer";
import Navbar from "../navbar";
import kristetwo from "../../public/WhatsAppThree.jpeg";

export default function About() {
  return (
    <div className="about">
      <Navbar />
      <div className="art_container_container_two">
        <h1 className="about-me">About Me</h1>
        <p className="about_text">
          I am a Lithuanian-American artist based out of Columbus, OH. For as
          long as I can remember, I have been greatly influenced by my roots in
          the life between Lithuania and America. Some of my refugee family
          members found peace through artwork-and I still use their artistic
          materials to this day.
        </p>
        <Image src={paintbrush} className="paintbrush" alt="" priority />

        <p className="about_text">
          The play between light and darkness is prevalent throughout my work,
          which is such a constant question for people who go through dark
          periods in their life. My art is an ode to people before me who found
          beauty in the little things, even among the chaos that life can bring.
        </p>
        <Image
          src={kristebasement}
          className="kristebasement"
          alt=""
          priority
        />
        <Footer />
      </div>
    </div>
  );
}
