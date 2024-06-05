"use client";

import React from "react";
import Image from "next/image";
import one from "../../../public/one.jpg";
import two from "../../../public/two.jpg";
import three from "../../../public/three.webp";
import four from "../../../public/four.webp";
import five from "../../../public/five.webp";
import six from "../../../public/six.webp";
import seven from "../../../public/seven.webp";
import eight from "../../../public/eight.webp";
import nine from "../../../public/nine.jpeg";
import ten from "../../../public/ten.webp";
import eleven from "../../../public/eleven.webp";
import twelve from "../../../public/twelve.webp";
import thirteen from "../../../public/thirteen.webp";
import fourteen from "../../../public/fourteen.webp";
import fifteen from "../../../public/fifteen.jpg";
import sixteen from "../../../public/sixteen.jpg";
import Footermobile from "../footermobile";

const worksmobile = () => {
  return (
    <div className="main_mobile">
      <div className="works_art_container_mobile">
        <div className="art_mobile">
          <Image className="art_img_mobile" src={one} alt="" />
          <div className="text_container_mobile">
            <div className="text_mobile">12 x 20</div>
            <div className="text_mobile">Pastel on paper</div>
          </div>
        </div>
        <div className="art_mobile">
          <Image className="art_img_mobile" src={twelve} alt="" />
          <div className="text_container_mobile">
            <div className="text_mobile">12 x 20</div>
            <div className="text_mobile">Pastel on paper</div>
          </div>
        </div>
        <div className="art_mobile">
          <Image className="art_img_mobile" src={three} alt="" />
          <div className="text_container_mobile">
            <div className="text_mobile">9 x 12</div>
            <div className="text_mobile">Oil paint on canvas</div>
          </div>
        </div>
        <div className="art_mobile">
          <Image className="art_img_mobile" src={four} alt="" />
          <div className="text_container_mobile">
            <div className="text_mobile">14 x 20</div>
            <div className="text_mobile">Pastel on paper</div>
          </div>
        </div>
        <div className="art_mobile">
          <Image className="art_img_mobile" src={five} alt="" />
          <div className="text_container_mobile">
            <div className="text_mobile">20 x 30</div>
            <div className="text_mobile">Pastel on paper</div>
          </div>
        </div>
        <div className="art_mobile">
          <Image className="art_img_mobile" src={ten} alt="" />
          <div className="text_container_mobile">
            <div className="text_mobile">9 x 12</div>
            <div className="text_mobile">Pastel on paper</div>
          </div>
        </div>
        <div className="art_mobile">
          <Image className="art_img_mobile" src={eight} alt="" />
          <div className="text_container_mobile">
            <div className="text_mobile">10 x 15</div>
            <div className="text_mobile">Pastel on paper</div>
          </div>
        </div>
        <div className="art_mobile">
          <Image className="art_img_mobile" src={fourteen} alt="" />
          <div className="text_container_mobile">
            <div className="text_mobile">10 x 15</div>
            <div className="text_mobile">Pastel on paper</div>
          </div>
        </div>
        <div className="art_mobile">
          <Image className="art_img_mobile" src={nine} alt="" />
          <div className="text_container_mobile">
            <div className="text_mobile">20 x 30</div>
            <div className="text_mobile">Pastel on paper</div>
          </div>
        </div>
        <div className="art_mobile">
          <Image className="art_img_mobile" src={two} alt="" />
          <div className="text_container_mobile">
            <div className="text_mobile">15 x 20</div>
            <div className="text_mobile">Pastel on paper</div>
          </div>
        </div>
        <div className="art_mobile">
          <Image className="art_img_mobile" src={eleven} alt="" />
          <div className="text_container_mobile">
            <div className="text_mobile">10 x 15</div>
            <div className="text_mobile">Pastel on paper</div>
          </div>
        </div>
        <div className="art_mobile">
          <Image className="art_img_mobile" src={six} alt="" />
          <div className="text_container_mobile">
            <div className="text_mobile">8 x 10</div>
            <div className="text_mobile">Pastel on paper</div>
          </div>
        </div>
        <div className="art_mobile">
          <Image className="art_img_mobile" src={thirteen} alt="" />
          <div className="text_container_mobile">
            <div className="text_mobile">8 x 10</div>
            <div className="text_mobile">Pastel on paper</div>
          </div>
        </div>
        <div className="art_mobile">
          <Image className="art_img_mobile" src={seven} alt="" />
          <div className="text_container_mobile">
            <div className="text_mobile">10 x 18</div>
            <div className="text_mobile">Pastel on paper</div>
          </div>
        </div>
        <div className="art_mobile">
          <Image className="art_img_mobile" src={fifteen} alt="" />
          <div className="text_container_mobile">
            <div className="text_mobile">10 x 15</div>
            <div className="text_mobile">Pastel on paper</div>
          </div>
        </div>
        <div className="art_mobile">
          <Image className="art_img_mobile" src={sixteen} alt="" />
          <div className="text_container_mobile">
            <div className="text_mobile">15 x 20</div>
            <div className="text_mobile">Pastel on paper</div>
          </div>
        </div>
      </div>
      <Footermobile />
    </div>
  );
};

export default worksmobile;
