"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import one from "../../public/one.png";
import two from "../../public/two.png";
import three from "../../public/three.png";
import four from "../../public/four.png";
import five from "../../public/five.png";
import six from "../../public/six.png";
import seven from "../../public/seven.png";
import eight from "../../public/eight.png";
import nine from "../../public/nine.png";
import ten from "../../public/ten.png";

const shop = () => {
  return (
    <div className="main">
      <div className="works-art-container">
        <div className="art">
          <Image className="art" src={one} alt="artwork" />
          <div className="text">Text for Image One</div>
        </div>
        <div className="art">
          <Image className="art" src={two} alt="artwork" />
          <div className="text">Text for Image Two</div>
        </div>
        <div className="art">
          <Image className="art" src={three} alt="artwork" />
          <div className="text">Text for Image One</div>
        </div>
        <div className="art">
          <Image className="art" src={four} alt="artwork" />
          <div className="text">Text for Image Two</div>
        </div>
        <div className="art">
          <Image className="art" src={five} alt="artwork" />
          <div className="text">Text for Image One</div>
        </div>
        <div className="art">
          <Image className="art" src={six} alt="artwork" />
          <div className="text">Text for Image Two</div>
        </div>
        <div className="art">
          <Image className="art" src={seven} alt="artwork" />
          <div className="text">Text for Image One</div>
        </div>
        <div className="art">
          <Image className="art" src={eight} alt="artwork" />
          <div className="text">Text for Image Two</div>
        </div>
        <div className="art">
          <Image className="art" src={nine} alt="artwork" />
          <div className="text">Text for Image One</div>
        </div>
        <div className="art">
          <Image className="art" src={ten} alt="artwork" />
          <div className="text">Text for Image Two</div>
        </div>
        <div className="art">
          <Image className="art" src={nine} alt="artwork" />
          <div className="text">Text for Image One</div>
        </div>
        <div className="art">
          <Image className="art" src={ten} alt="artwork" />
          <div className="text">Text for Image Two</div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-main">
          <p className="footer-words">KLAPKUS@GMAIL.COM | </p>
          <p className="footer-words socials">
            <img
              className="facebook-img"
              src="https://static-00.iconduck.com/assets.00/facebook-icon-2048x2048-h5ikr429.png"
            ></img>
            FACEBOOK |
          </p>
          <p className="footer-words socials">
            <img
              className="insta-img"
              src="https://static.vecteezy.com/system/resources/previews/017/743/717/original/instagram-icon-logo-free-png.png"
            ></img>
            INSTAGRAM
          </p>
        </div>
      </div>
    </div>
  );
};

export default shop;
