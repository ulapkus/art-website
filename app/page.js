"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footermobile from "./components_mobile/footermobile";

const page = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(max-width: 768px)");
      const handleMediaChange = (e) => {
        setIsMobile(e.matches);
      };
      setIsMobile(mediaQuery.matches);
      mediaQuery.addEventListener("change", handleMediaChange);
      return () => {
        mediaQuery.removeEventListener("change", handleMediaChange);
      };
    }
  }, []);

  return (
    <div className="main_page_again">
      {isMobile ? (
        <div className="art_container_mobile">
          <div className="art_first_mobile">
            <Link href="/works" className="first_mobile">
              VIEW ARTWORK
            </Link>
          </div>
          <div className="art_second_mobile">
            <Link href="/about" className="second_mobile">
              ABOUT ME
            </Link>
          </div>
          <div className="art_third_mobile">
            <Link href="/contact" className="third_mobile">
              CONTACT INFO
            </Link>
          </div>
          <Footermobile />
        </div>
      ) : (
        <div className="art_container_container">
          <div className="art_container">
            <div className="art_first">
              <Link href="/works" className="first">
                VIEW ARTWORK
              </Link>
            </div>
            <div className="second_third">
            <div className="art_second">
              <Link href="/about" className="second">
                ABOUT ME
              </Link>
            </div>
            <div className="art_third">
              <Link href="/contact" className="third">
                CONTACT INFO
              </Link>
            </div>
            </div>
          </div>
          <div className="footer">
            <div className="footer_main">
              <p className="footer_words">KLAPKUS@GMAIL.COM | </p>
              <p className="footer_words socials">
                <img
                  className="insta_img"
                  src="https://static.vecteezy.com/system/resources/previews/017/743/717/original/instagram-icon-logo-free-png.png"
                ></img>
                INSTAGRAM
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
