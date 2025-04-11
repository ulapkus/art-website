import React from "react";
import Image from "next/image";
import kristebasement from "../../public/kristenewpic.jpeg";
import Footer from "../footer";
import Navbar from "../navbar";
import kristelogo from "../../public/kristelogo.png";

export default function About() {
  return (
    <div className="about_container">
      <Navbar />
      <div className="about">
        <h1 className="about-me">About Me</h1>
        <p className="about_text">
          My name is Kristė (kris-teh) Aukštuolis (oak-stwhoah-lis). I am a
          Lithuanian-American artist based out of Columbus, OH, but originally
          from Chicago, IL. As long as I can remember, I have been greatly
          influenced by my roots between Lithuania and America. Some of my
          refugee family members found peace through artwork-and I still use
          some of their art materials to this day.
        </p>
        {/* <Image src={paintbrush} className="paintbrush" alt="" priority /> */}

        <p className="about_text">
          The play between light and darkness is prevalent throughout my work.
          With that, comes a search for comprehension of various themes of
          identity: religion, trauma, and belonging.
        </p>
        <p className="about_text">
          My art is an ode to people before me who found beauty in the little
          things, even among the chaos that life can bring.
        </p>
        <p className="about_text">
          I hope to hear from you and am excited to share a piece of me with you
          all.
        </p>
        <Image className="kristelogo" src={kristelogo} alt="" priority />
        <Image
          src={kristebasement}
          className="kristebasement"
          alt=""
          priority
        />
      </div>
      <Footer />
    </div>
  );
}
