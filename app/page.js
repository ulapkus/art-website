import React from "react";
import Image from "next/image";
import background from "../public/background.webp";
import four from "../public/four.png";
import one from "../public/one.png";
import eight from "../public/eight.png";
import five from "../public/five.png";

const page = () => {
  return (
    <div className="external">
      <div className="horizontal-scroll-wrapper">
        <div className="img-wrapper slower">
          <Image className="four art" src={four} alt="artwork" />
        </div>
        <div className="img-wrapper slower">
          <Image className="one art" src={one} alt="artwork" />
        </div>
        <div className="img-wrapper slower">
          <Image className="eight art" src={eight} alt="artwork" />
        </div>
        <div className="img-wrapper slower">
          <Image className="five art" src={five} alt="artwork" />
        </div>
      </div>
    </div>
  );
};

export default page;
