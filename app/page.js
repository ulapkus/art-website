"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import kristetwo from "../public/kristeimgexpanded.png";
import Navbar from "./navbar";

export default function Page() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      document.body.style.overflowY = "hidden";

      return () => {
        document.body.style.overflowY = "auto";
      };
    }
  }, [pathname]);

  return (
    <div className="home_container">
      <Navbar />
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
          <Image priority src={kristetwo} />
        </div>
      </div>
    </div>
  );
}
