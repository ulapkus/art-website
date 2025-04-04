"use client";

import React from "react";
import Image from "next/image";
import one from "../../public/one.webp";
import two from "../../public/two.webp";
import three from "../../public/three.webp";
import four from "../../public/four.webp";
import five from "../../public/five.webp";
import Navbar from "../navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="shop_container">
        <div className="shop_title_container">
          <div className="shop_title">Prints</div>
        </div>
        <div className="shop_row_one">
          <div className="shop_item">
            <Image src={one} alt="" />
          </div>
          <div className="shop_item">
            <Image src={two} alt="" />
          </div>
          <div className="shop_item">
            <Image src={three} alt="" />
          </div>
        </div>
        <div className="shop_row_two">
          <div className="shop_item">
            <Image src={four} alt="" />
          </div>
          <div className="shop_item">
            <Image src={five} alt="" />
          </div>
          <div className="shop_item">
            <Image src={three} alt="" />
          </div>
        </div>
      </div>
      <div className="shop_title_container_two">
        <div className="shop_title">Stickers</div>
      </div>
    </>
  );
}
