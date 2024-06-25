import React from "react";
import Image from "next/image";
import kristeportrait from "../../public/kristeportrait.jpg";
import gmaillogo from "../../public/gmail.png";
import styles from "../page.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <Image src={kristeportrait} className={styles.photo_contact} alt="" priority />
      <div className={styles.contact_bottom}>
        <p className={styles.contact_me}>Feel free to contact me!</p>

        <div className={styles.gmail_container}>
          <Image src={gmaillogo} className={styles.gmail_logo} alt="" />
          <p className={styles.gmail_contact}>KLAPKUS@GMAIL.COM</p>
        </div>
        <div className={styles.contact_insta}>
          <img
            className={styles.insta_img}
            src="https://static.vecteezy.com/system/resources/previews/017/743/717/original/instagram-icon-logo-free-png.png"
            alt="" ></img>
          <p className={styles.insta_word}>INSTAGRAM</p>
        </div>
      </div>
    </div>
  );
}
