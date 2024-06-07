import React from "react";
import Image from "next/image";
import kristeportrait from "../../../public/kristeportrait.jpg";
import gmaillogo from "../../../public/gmail.png";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact_main">
        <Image src={kristeportrait} className="photo_contact" alt="" priority />
        <div className="contact_bottom">
          <p className="contact_me">Feel free to contact me!</p>

          <div className="gmail_container">
            <Image src={gmaillogo} className="gmail_logo" />
            <p className="gmail_contact">KLAPKUS@GMAIL.COM</p>
          </div>
          <div className="contact_insta">
            <img
              className="insta_img"
              src="https://static.vecteezy.com/system/resources/previews/017/743/717/original/instagram-icon-logo-free-png.png"
            ></img>
            <p className="insta_word">INSTAGRAM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
