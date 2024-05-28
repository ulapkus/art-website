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
import nine from "../../public/nine.webp";
import ten from "../../public/ten.webp";
import eleven from "../../public/eleven.webp";
import twelve from "../../public/twelve.webp";
import thirteen from "../../public/thirteen.webp";
import fourteen from "../../public/fourteen.webp";
import fifteen from "../../public/fifteen.jpg";
import Footer from "../footer/footer";

const page = () => {
  return (
    <div className="main">
      <div className="works-art-container">
        <div className="art">
          <Image className="art_img" src={one} alt="artwork" />
          <div className="text_container">
            <div className="text">Text for image</div>
            <div className="text">Text for image</div>
          </div>
        </div>
        <div className="art">
          <Image className="art_img" src={twelve} alt="artwork" />
          <div className="text_container">
            <div className="text">Text for image</div>
            <div className="text">Text for image</div>
          </div>
        </div>
        <div className="art">
          <Image className="art_img" src={three} alt="artwork" />
          <div className="text_container">
            <div className="text">9 x 12</div>
            <div className="text">Oil paint on canvas</div>
          </div>
        </div>
        <div className="art">
          <Image className="art_img" src={four} alt="artwork" />
          <div className="text_container">
            <div className="text">Text for image</div>
            <div className="text">Text for image</div>
          </div>
        </div>
        <div className="art">
          <Image className="art_img" src={five} alt="artwork" />
          <div className="text_container">
            <div className="text">Text for image</div>
            <div className="text">Text for image</div>
          </div>
        </div>
        <div className="art">
          <Image className="art_img" src={ten} alt="artwork" />
          <div className="text_container">
            <div className="text">Text for image</div>
            <div className="text">Text for image</div>
          </div>
        </div>
        <div className="art">
          <Image className="art_img" src={eight} alt="artwork" />
          <div className="text_container">
            <div className="text">Text for image</div>
            <div className="text">Text for image</div>
          </div>
        </div>
        <div className="art">
          <Image className="art_img" src={fourteen} alt="artwork" />
          <div className="text_container">
            <div className="text">Text for image</div>
            <div className="text">Text for image</div>
          </div>
        </div>
        <div className="art">
          <Image className="art_img" src={nine} alt="artwork" />
          <div className="text_container">
            <div className="text">Text for image</div>
            <div className="text">Text for image</div>
          </div>
        </div>
        <div className="art">
          <Image className="art_img" src={two} alt="artwork" />
          <div className="text_container">
            <div className="text">Text for image</div>
            <div className="text">Text for image</div>
          </div>
        </div>
        <div className="art">
          <Image className="art_img" src={eleven} alt="artwork" />
          <div className="text_container">
            <div className="text">Text for image</div>
            <div className="text">Text for image</div>
          </div>
        </div>
        <div className="art">
          <Image className="art_img" src={six} alt="artwork" />
          <div className="text_container">
            <div className="text">Text for image</div>
            <div className="text">Text for image</div>
          </div>
        </div>
        <div className="art">
          <Image className="art_img" src={thirteen} alt="artwork" />
          <div className="text_container">
            <div className="text">Text for image</div>
            <div className="text">Text for image</div>
          </div>
        </div>
        <div className="art">
          <Image className="art_img" src={seven} alt="artwork" />
          <div className="text_container">
            <div className="text">Text for image</div>
            <div className="text">Text for image</div>
          </div>
        </div>
        <div className="art">
          <Image className="art_img" src={fifteen} alt="artwork" />
          <div className="text_container">
            <div className="text">Text for image</div>
            <div className="text">Text for image</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
