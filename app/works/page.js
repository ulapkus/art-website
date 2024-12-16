"use client";

import React from "react";
import styles from "../page.module.css";
import Image from "next/image";
import one from "../../public/one.webp";
import two from "../../public/two.webp";
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
import fifteen from "../../public/fifteen.webp";
import sixteen from "../../public/sixteen.webp";
import Footer from "../footer";
import oneNew from "../../public/onenew.jpg";
import twoNew from "../../public/twonew.jpg";
import threeNew from "../../public/threenewish.jpg";

export default function Works() {
  return (
    <div className={styles.main}>
      <div className={styles.works_art_container}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "33%",
            marginTop: "10%",
          }}
        >
          <div style={{ height: "53vh", width: "38vh" }}>
            <div
              style={{
                height: "40vh",
                backgroundColor: "#C76A67",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "46.4%",
                  left: "18%",
                  transform: "translate(-50%, -50%)",
                  width: "15%",
                  zIndex: 2,
                }}
              >
                <Image className={styles.art_img} src={two} alt="" />
              </div>
            </div>

            <div style={{ color: "#F43C34", paddingTop: "1vh" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    fontSize: "1.75vh",
                    fontStyle: "italic",
                    fontWeight: "500",
                  }}
                >
                  THE MIND INSIDE
                </div>
                <div>2021</div>
              </div>
              <div style={{ fontSize: "1.5vh" }}>PASTEL ON PAPER</div>
              <div>30" X 20"</div>
            </div>
          </div>

          <div style={{ height: "53vh", width: "38vh" }}>
            <div
              style={{
                position: "absolute",
                top: "98.5%",
                left: "17.8%",
                transform: "translate(-50%, -50%)",
                width: "38vh",
                height: "38vh",
                zIndex: 2,
              }}
            >
              <Image className={styles.art_img} src={one} alt="" />
            </div>
            <div style={{ color: "#F43C34", paddingTop: "41.5vh" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    fontSize: "1.75vh",
                    fontStyle: "italic",
                    fontWeight: "500",
                  }}
                >
                  THE MIND INSIDE
                </div>
                <div>2021</div>
              </div>
              <div style={{ fontSize: "1.5vh" }}>PASTEL ON PAPER</div>
              <div>30" X 20"</div>
            </div>
          </div>

          <div style={{ height: "53vh", width: "38vh" }}>
            <Image
              src={threeNew}
              style={{ width: "38vh", height: "38vh", zIndex: 1 }}
              alt=""
            />
            <div
              style={{
                position: "absolute",
                top: "152.5%",
                left: "18%",
                transform: "translate(-50%, -50%)",
                width: "15%",
                zIndex: 2,
              }}
            >
              <Image className={styles.art_img} src={five} alt="" />
            </div>
            <div style={{ color: "#F43C34", paddingTop: "1vh" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    fontSize: "1.75vh",
                    fontStyle: "italic",
                    fontWeight: "500",
                  }}
                >
                  THE MIND INSIDE
                </div>
                <div>2021</div>
              </div>
              <div style={{ fontSize: "1.5vh" }}>PASTEL ON PAPER</div>
              <div>30" X 20"</div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "33%",
            marginTop: "20%",
          }}
        >
          <div style={{ height: "53vh", width: "38vh" }}>
            <div
              style={{
                height: "40vh",
                backgroundColor: "#db7139",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "54.75%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "15%",
                  zIndex: 2,
                }}
              >
                <Image className={styles.art_img} src={eight} alt="" />
              </div>
            </div>
            <div style={{ color: "#F43C34", paddingTop: "1vh" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    fontSize: "1.75vh",
                    fontStyle: "italic",
                    fontWeight: "500",
                  }}
                >
                  THE MIND INSIDE
                </div>
                <div>2021</div>
              </div>
              <div style={{ fontSize: "1.5vh" }}>PASTEL ON PAPER</div>
              <div>30" X 20"</div>
            </div>
          </div>

          <div style={{ height: "53vh", width: "38vh" }}>
            <div
              style={{
                position: "absolute",
                top: "107.3%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "38vh",
                height: "38vh",
                zIndex: 2,
              }}
            >
              <Image className={styles.art_img} src={eleven} alt="" />
            </div>
            <div style={{ color: "#F43C34", paddingTop: "42.5vh" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    fontSize: "1.75vh",
                    fontStyle: "italic",
                    fontWeight: "500",
                  }}
                >
                  THE MIND INSIDE
                </div>
                <div>2021</div>
              </div>
              <div style={{ fontSize: "1.5vh" }}>PASTEL ON PAPER</div>
              <div>30" X 20"</div>
            </div>
          </div>

          <div style={{ height: "53vh", width: "38vh" }}>
            <Image
              src={oneNew}
              style={{ width: "38vh", height: "38vh", zIndex: 1 }}
              alt=""
            />
            <div
              style={{
                position: "absolute",
                top: "159.5%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "15%",
                zIndex: 2,
              }}
            >
              <Image className={styles.art_img} src={nine} alt="" />
            </div>
            <div style={{ color: "#F43C34", paddingTop: "1vh" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    fontSize: "1.75vh",
                    fontStyle: "italic",
                    fontWeight: "500",
                  }}
                >
                  THE MIND INSIDE
                </div>
                <div>2021</div>
              </div>
              <div style={{ fontSize: "1.5vh" }}>PASTEL ON PAPER</div>
              <div>30" X 20"</div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "33%",
            marginTop: "1%",
          }}
        >
          <div style={{ height: "53vh", width: "38vh" }}>
            <div
              style={{
                height: "40vh",
                backgroundColor: "#B48598",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "39%",
                  right: "3%",
                  transform: "translate(-50%, -50%)",
                  width: "15%",
                  zIndex: 2,
                }}
              >
                <Image className={styles.art_img} src={five} alt="" />
              </div>
            </div>
            <div style={{ color: "#F43C34", paddingTop: "1vh" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    fontSize: "1.75vh",
                    fontStyle: "italic",
                    fontWeight: "500",
                  }}
                >
                  THE MIND INSIDE
                </div>
                <div>2021</div>
              </div>
              <div style={{ fontSize: "1.5vh" }}>PASTEL ON PAPER</div>
              <div>30" X 20"</div>
            </div>
          </div>

          <div style={{ height: "53vh", width: "38vh" }}>
       
            <div
              style={{
                position: "absolute",
                top: "92%",
                right: "-4%",
                transform: "translate(-50%, -50%)",
                width: "38vh",
                height: "38vh",
                zIndex: 2,
              }}
            >
              <Image className={styles.art_img} src={two} alt="" />
            </div>
            <div style={{ color: "#F43C34", paddingTop: "43vh" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    fontSize: "1.75vh",
                    fontStyle: "italic",
                    fontWeight: "500",
                  }}
                >
                  THE MIND INSIDE
                </div>
                <div>2021</div>
              </div>
              <div style={{ fontSize: "1.5vh" }}>PASTEL ON PAPER</div>
              <div>30" X 20"</div>
            </div>
          </div>

          <div style={{ height: "53vh", width: "38vh" }}>
            <Image
              src={oneNew}
              style={{ width: "38vh", height: "38vh", zIndex: 1 }}
              alt=""
            />
            <div
              style={{
                position: "absolute",
                top: "144.1%",
                right: "3%",
                transform: "translate(-50%, -50%)",
                width: "15%",
                zIndex: 2,
              }}
            >
              <Image className={styles.art_img} src={one} alt="" />
            </div>
            <div style={{ color: "#F43C34", paddingTop: "1vh" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    fontSize: "1.75vh",
                    fontStyle: "italic",
                    fontWeight: "500",
                  }}
                >
                  THE MIND INSIDE
                </div>
                <div>2021</div>
              </div>
              <div style={{ fontSize: "1.5vh" }}>PASTEL ON PAPER</div>
              <div>30" X 20"</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
