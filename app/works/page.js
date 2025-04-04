"use client";

import React from "react";
import Image from "next/image";
import avocado from "../../public/avocado.jpg";
import pistacio from "../../public/pistacio.jpg";
import woman from "../../public/woman.jpg";
import Footer from "../footer";
import vytas from "../../public/vytas.jpg";
import selfportrait from "../../public/selfportrait.jpg";
import porcelin from "../../public/porcelin.jpg";
import gandrai from "../../public/gandrai.jpg";
import oldman from "../../public/oldman.jpg";
import barsciai from "../../public/barsciai.jpg";
import Navbar from "../navbar";
import imatter from "../../public/imatter.jpg";
import ukrainianwoman from "../../public/ukranian.jpg";

export default function Works() {
  return (
    <div>
      <div className="main">
        <Navbar />
        <div className="works_art_container_one">
          <div className="art_container_two">
            <div className="art_background one">
              <div className="art_piece">
                <Image className="art_img" src={gandrai} alt="" />
              </div>
            </div>

            <div className="art_text_container">
              <div className="art_text_styling_one">
                <div className="art_text">
                  SAULĖLYDŽIO GANDRAI / SUNSET STORKS
                </div>
                <div>48" X 24"</div>
                <div>OIL ON CANVAS</div>
              </div>
              <div className="art_text_styling_two">2025</div>
            </div>
          </div>

          <div className="art_container_two">
            <div className="art_background two">
              <div className="art_piece">
                <Image className="art_img" src={oldman} alt="" />
              </div>
            </div>
            <div className="art_text_container">
              <div className="art_text_styling_one">
                <div className="art_text">UNITED STATE OF RELAXATION</div>
                <div style={{ fontSize: "1.5vh" }}>OIL ON CANVAS</div>
                <div>10.5" X 12.5"</div>
              </div>
              <div className="art_text_styling_two">2025</div>
            </div>
          </div>

          <div className="art_container_two">
            <div className="art_background three">
              <div className="art_piece">
                <Image className="art_img" src={imatter} alt="" />
              </div>
            </div>
            <div className="art_text_container">
              <div className="art_text_styling_one">
                <div className="art_text">I MATTER</div>
                <div style={{ fontSize: "1.5vh" }}>PASTEL ON PAPER</div>
                <div>16" X 12"</div>
              </div>
              <div className="art_text_styling_two">2020</div>
            </div>
          </div>

          <div className="art_container_two">
            <div className="art_background four">
              <div className="art_piece">
                <Image className="art_img" src={pistacio} alt="" />
              </div>
            </div>
            <div className="art_text_container">
              <div className="art_text_styling_one">
                <div className="art_text">PISTACIO</div>
                <div style={{ fontSize: "1.5vh" }}>PASTEL ON PAPER</div>
                <div>12" X 16"</div>
              </div>
              <div className="art_text_styling_two">2022</div>
            </div>
          </div>
        </div>

        <div className="works_art_container_two">
          <div className="art_container_two">
            <div className="art_background five">
              <div className="art_piece">
                <Image className="art_img" src={barsciai} alt="" />
              </div>
            </div>
            <div className="art_text_container">
              <div className="art_text_styling_one">
                <div className="art_text">NAMINIAI ŠALTIBARŠČIAI</div>
                <div style={{ fontSize: "1.5vh" }}>OIL ON CANVAS</div>
                <div>36" X 24"</div>
              </div>
              <div className="art_text_styling_two">2025</div>
            </div>
          </div>

          <div className="art_container_two">
            <div className="art_background six">
              <div className="art_piece">
                <Image className="art_img" src={ukrainianwoman} alt="" />
              </div>
            </div>
            <div className="art_text_container">
              <div className="art_text_styling_one">
                <div className="art_text">UKRAINIAN WOMAN</div>
                <div style={{ fontSize: "1.5vh" }}>PASTEL ON PAPER</div>
                <div>12" X 16"</div>
              </div>
              <div className="art_text_styling_two">2020</div>
            </div>
          </div>

          <div className="art_container_two">
            <div className="art_background seven">
              <div className="art_piece">
                <Image className="art_img" src={woman} alt="" />
              </div>
            </div>

            <div className="art_text_container">
              <div className="art_text_styling_one">
                <div className="art_text">IN MY FEELINGS</div>
                <div style={{ fontSize: "1.5vh" }}>OIL ON CANVAS</div>
                <div>14.5" X 19"</div>
              </div>
              <div className="art_text_styling_two">2024</div>
            </div>
          </div>
        </div>
        <div className="works_art_container_three">
          <div className="art_container_two">
            <div className="art_background eleven">
              <div className="art_piece">
                <Image className="art_img" src={porcelin} alt="" />
              </div>
            </div>
            <div className="art_text_container">
              <div className="art_text_styling_one">
                <div className="art_text">PORCELAIN</div>
                <div style={{ fontSize: "1.5vh" }}>PASTEL ON PAPER</div>
                <div>12" X 16"</div>
              </div>
              <div className="art_text_styling_two">2022</div>
            </div>
          </div>

          <div className="art_container_two">
            <div className="art_background ten">
              <div className="art_piece">
                <Image className="art_img" src={selfportrait} alt="" />
              </div>
            </div>
            <div className="art_text_container">
              <div className="art_text_styling">
                <div className="art_text">SELF PORTRAIT</div>
                <div style={{ fontSize: "1.5vh" }}>PASTEL ON PAPER</div>
                <div>10" X 12"</div>
              </div>
              <div className="art_text_styling_two">2022</div>
            </div>
          </div>

          <div className="art_container_two">
            <div className="art_background nine">
              <div className="art_piece">
                <Image className="art_img" src={vytas} alt="" />
              </div>
            </div>
            <div className="art_text_container">
              <div className="art_text_styling_one">
                <div className="art_text">WA/ORRIER</div>
                <div style={{ fontSize: "1.5vh" }}>PASTEL ON PAPER</div>
                <div>19" X 25"</div>
              </div>
              <div className="art_text_styling_two">2023</div>
            </div>
          </div>

          <div className="art_container_two">
            <div className="art_background eight">
              <div className="art_piece">
                <Image className="art_img" src={avocado} alt="" />
              </div>
            </div>
            <div className="art_text_container">
              <div className="art_text_styling_one">
                <div className="art_text">IT'S AN AVOCADO</div>
                <div style={{ fontSize: "1.5vh" }}>OIL ON LINEN</div>
                <div>9.5" X 12.5"</div>
              </div>
              <div className="art_text_styling_two">2024</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
