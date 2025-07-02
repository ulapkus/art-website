"use client";

import React, { useState } from "react";
import Image from "next/image";
import avocado from "../../public/avocado.jpg";
import pistacio from "../../public/pistacio.jpg";
import woman from "../../public/woman.jpg";
import Footer from "../footer";
import vytas from "../../public/vytas.jpg";
import farm from "../../public/farm.jpeg";
import selfportrait from "../../public/selfportrait.jpg";
import porcelain from "../../public/porcelain.jpg";
import gandrai from "../../public/gandrai.jpg";
import oldman from "../../public/oldman.jpg";
import barsciai from "../../public/barsciai.jpg";
import Navbar from "../navbar";
import imatter from "../../public/imatter.jpg";
import ukrainianwoman from "../../public/ukranian.jpg";
import wheat from "../../public/wheat.jpg";
import lordknows from "../../public/lordknows.jpg";
import rasa from "../../public/rasa.jpeg";

export default function Works() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };
  return (
    <div className="works_container">
      <Navbar />
      <div className="main">
        <div className="works_art_container_one">
          <div className="art_container_two">
            <div className="art_background one">
              <div className="art_piece">
                <Image
                  className="art_img"
                  src={gandrai}
                  alt=""
                  priority
                  width={1000}
                  onClick={() => openModal(gandrai)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="art_text_container">
              <div className="art_text_styling_one">
                <div className="art_text">
                  SAULĖLYDŽIO GANDRAI / SUNSET STORKS
                </div>
                <div className="art-details">OIL ON CANVAS</div>
                <div className="art-details">48" X 24"</div>
              </div>
              <div className="art_text_styling_two">2025</div>
            </div>
          </div>

          <div className="art_container_two">
            <div className="art_background fourteen">
              <div className="art_piece_horizontal">
                <Image
                  className="art_img_horizontal"
                  src={lordknows}
                  alt=""
                  priority
                  onClick={() => openModal(lordknows)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="art_text_container">
              <div className="art_text_styling_one">
                <div className="art_text">LORD KNOWS I'VE TRIED</div>
                <div className="art-details">OIL ON LINEN</div>
                <div className="art-details">36" X 24"</div>
              </div>
              <div className="art_text_styling_two">2025</div>
            </div>
          </div>

          <div className="art_container_two">
            <div className="art_background thirteen">
              <div className="art_piece_horizontal">
                <Image
                  className="art_img_horizontal"
                  src={rasa}
                  alt=""
                  priority
                  onClick={() => openModal(rasa)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="art_text_container">
              <div className="art_text_styling_one">
                <div className="art_text">RASA</div>
                <div className="art-details">OIL ON CANVAS</div>
                <div className="art-details">40" X 30"</div>
              </div>
              <div className="art_text_styling_two">2025</div>
            </div>
          </div>

          <div className="art_container_two">
            <div className="art_background three">
              <div className="art_piece">
                <Image
                  className="art_img"
                  src={imatter}
                  alt=""
                  priority
                  onClick={() => openModal(imatter)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="art_text_container">
              <div className="art_text_styling_one">
                <div className="art_text">I MATTER</div>
                <div className="art-details">PASTEL ON PAPER</div>
                <div className="art-details">16" X 12"</div>
              </div>
              <div className="art_text_styling_two">2020</div>
            </div>
          </div>

          <div className="art_container_two">
            <div className="art_background four">
              <div className="art_piece_horizontal">
                <Image
                  className="art_img_horizontal"
                  src={pistacio}
                  alt=""
                  priority
                  onClick={() => openModal(pistacio)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="art_text_container">
              <div className="art_text_styling_one">
                <div className="art_text">PISTACIO</div>
                <div className="art-details">PASTEL ON PAPER</div>
                <div className="art-details">12" X 16"</div>
              </div>
              <div className="art_text_styling_two">2022</div>
            </div>
          </div>
        </div>

        <div className="works_art_container_two">
          <div className="art_container_two">
            <div className="art_background five">
              <div className="art_piece">
                <Image
                  className="art_img"
                  src={barsciai}
                  alt=""
                  priority
                  onClick={() => openModal(barsciai)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="art_text_container">
              <div className="art_text_styling_one">
                <div className="art_text">NAMINIAI ŠALTIBARŠČIAI</div>
                <div className="art-details">OIL ON CANVAS</div>
                <div className="art-details">36" X 24"</div>
              </div>
              <div className="art_text_styling_two">2025</div>
            </div>
          </div>

          <div className="art_container_two">
            <div className="art_background six">
              <div className="art_piece">
                <Image
                  className="art_img"
                  src={ukrainianwoman}
                  alt=""
                  priority
                  onClick={() => openModal(ukrainianwoman)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="art_text_container">
              <div className="art_text_styling_one">
                <div className="art_text">UKRAINIAN WOMAN</div>
                <div className="art-details">PASTEL ON PAPER</div>
                <div className="art-details">16" X 12"</div>
              </div>
              <div className="art_text_styling_two">2023</div>
            </div>
          </div>

          <div className="art_container_two">
            <div className="art_background ten">
              <div className="art_piece">
                <Image
                  className="art_img"
                  src={selfportrait}
                  alt=""
                  priority
                  onClick={() => openModal(selfportrait)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="art_text_container">
              <div className="art_text_styling">
                <div className="art_text">SELF PORTRAIT</div>
                <div className="art-details">PASTEL ON PAPER</div>
                <div className="art-details">16" X 12"</div>
              </div>
              <div className="art_text_styling_two">2022</div>
            </div>
          </div>

          <div className="art_container_two">
            <div className="art_background seven">
              <div className="art_piece">
                <Image
                  className="art_img"
                  src={woman}
                  alt=""
                  priority
                  onClick={() => openModal(woman)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>

            <div className="art_text_container">
              <div className="art_text_styling_one">
                <div className="art_text">IN MY FEELINGS</div>
                <div className="art-details">OIL ON CANVAS</div>
                <div className="art-details">19" X 14.5"</div>
              </div>
              <div className="art_text_styling_two">2024</div>
            </div>
          </div>

          <div className="art_container_two">
            <div className="art_background eight">
              <div className="art_piece_horizontal">
                <Image
                  className="art_img_horizontal"
                  src={avocado}
                  alt=""
                  priority
                  onClick={() => openModal(avocado)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="art_text_container">
              <div className="art_text_styling_one">
                <div className="art_text">IT'S AN AVOCADO</div>
                <div className="art-details">OIL ON LINEN</div>
                <div className="art-details">9.5" X 12.5"</div>
              </div>
              <div className="art_text_styling_two">2024</div>
            </div>
          </div>
        </div>

        <div className="works_art_container_three">
          <div className="art_container_two">
            <div className="art_background twelve">
              <div className="art_piece">
                <Image
                  className="art_img"
                  src={wheat}
                  alt=""
                  priority
                  onClick={() => openModal(wheat)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>

            <div className="art_text_container">
              <div className="art_text_styling_one">
                <div className="art_text">GYVYBĖS SAULĖ / SUN OF LIFE</div>
                <div className="art-details">OIL ON CANVAS</div>
                <div className="art-details">40" X 30"</div>
              </div>
              <div className="art_text_styling_two">2025</div>
            </div>
          </div>

          <div className="art_container_two">
            <div className="art_background fifteen">
              <div className="art_piece">
                <Image
                  className="art_img"
                  src={farm}
                  alt=""
                  priority
                  onClick={() => openModal(farm)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="art_text_container">
              <div className="art_text_styling">
                <div className="art_text">KAIMIŠKAS VAKARAS</div>
                <div className="art-details">OIL ON CANVAS</div>
                <div className="art-details">25" X 21"</div>
              </div>
              <div className="art_text_styling_two">2025</div>
            </div>
          </div>

          <div className="art_container_two">
            <div className="art_background eleven">
              <div className="art_piece">
                <Image
                  className="art_img"
                  src={porcelain}
                  alt=""
                  priority
                  onClick={() => openModal(porcelain)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="art_text_container">
              <div className="art_text_styling_one">
                <div className="art_text">PORCELAIN</div>
                <div className="art-details">PASTEL ON PAPER</div>
                <div className="art-details">16" X 12"</div>
              </div>
              <div className="art_text_styling_two">2022</div>
            </div>
          </div>

          <div className="art_container_two">
            <div className="art_background two">
              <div className="art_piece_horizontal">
                <Image
                  className="art_img_horizontal"
                  src={oldman}
                  alt=""
                  priority
                  onClick={() => openModal(oldman)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="art_text_container">
              <div className="art_text_styling_one">
                <div className="art_text">UNITED STATE OF RELAXATION</div>
                <div className="art-details">OIL ON CANVAS</div>
                <div className="art-details">10.5" X 12.5"</div>
              </div>
              <div className="art_text_styling_two">2025</div>
            </div>
          </div>

          <div className="art_container_two">
            <div className="art_background nine">
              <div className="art_piece">
                <Image
                  className="art_img"
                  src={vytas}
                  alt=""
                  priority
                  onClick={() => openModal(vytas)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="art_text_container">
              <div className="art_text_styling_one">
                <div className="art_text">WA/ORRIER</div>
                <div className="art-details">PASTEL ON PAPER</div>
                <div className="art-details">19" X 25"</div>
              </div>
              <div className="art_text_styling_two">2023</div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          <button onClick={closeModal} className="modal-close-button">
            ✕
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative" }}
          >
            <Image
              src={modalImage}
              alt="Modal Image"
              width={800}
              height={600}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
