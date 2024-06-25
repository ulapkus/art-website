import React from "react";
import Image from "next/image";
import kristebasement from "../../../public/kristebasement.jpg";

export default function Aboutmobile() {
  return (
    <div className="about_mobile">
      <p className="about_p_one_mobile">Hi!</p>
      <p className="about_p_one_mobile">My name is</p>
      <p className="about_p_one_mobile">Kristė Aukštuolis</p>


      <p className="about_p_mobile">
        I am a Lithuanian-American artist based out of Columbus, OH. As long as
        I can remember, I have been greatly influenced by my roots in the life
        between Lithuania and America. Some of my refugee family members found
        peace through artwork-and I still use their artistic materials to this
        day. The play between light and darkness is prevalent throughout my
        work, which is such a constant question for people who go through dark
        periods in their life. My art is an ode to people before me who found
        beauty in the little things, even among the chaos that life can bring.
      </p>
      <div className="kristebasement_container_mobile">
        <Image src={kristebasement} className="kristebasement_mobile" alt="" />
      </div>
    </div>
  );
}
