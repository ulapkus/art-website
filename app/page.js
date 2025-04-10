"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import kristetwo from "../public/kristeimgexpanded.png";
import Navbarhome from "./navbarhome";
import Footer from "./footer";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default function Page() {
  const pathname = usePathname();
  const { width } = useWindowSize();

  useEffect(() => {
    if (pathname === "/") {
      document.body.style.overflowY = "hidden";

      return () => {
        document.body.style.overflowY = "auto";
      };
    }
  }, [pathname]);

  if (typeof width === "undefined") {
    return null;
  }

  return (
    <div>
      {width <= 480 ? (
        // Mobile layout
        <div className="home_container">
          <Navbarhome />
          <div className="art_container_container">
            <div className="home_kriste_name">KRISTĖ</div>
            <div className="home_kriste_name">AUKŠTUOLIS</div>
            <div className="navbar_line_top_home_two"></div>
            <div className="home_columbus_text">ARTIST IN COLUMBUS, OHIO</div>
            <div className="home_image_container">
              <Image priority src={kristetwo} alt="" />
            </div>
            <Footer />
          </div>
        </div>
      ) : (
        // Desktop layout
        <div className="home_container">
          <Navbarhome />
          <div className="home_kriste_name_container_container">
            <div className="home_kriste_name_container">
              <div className="home_kriste_name">KRISTĖ</div>
            </div>
          </div>
          <div className="art_container_container">
            <div className="home_aukstuolis_name_container">
              <div className="home_aukstuolis_name">AUKŠTUOLIS</div>
            </div>
            <div className="home_image_container">
              <Image priority src={kristetwo} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
