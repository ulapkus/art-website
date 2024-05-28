import React from "react";
import Image from "next/image";
import kristeportrait from "../../public/kristeportrait.jpg";
import gmaillogo from "../../public/gmail.png";

const contact = () => {
  return (
    <div className="contact">
      <div className="contact-main">
        <Image src={kristeportrait} className="photo-contact" />
        <div className="contact-bottom">
          <p className="contact-me">Feel free to contact me!</p>

          <div className="gmail-container">
            <Image src={gmaillogo} className="gmail-logo" />
            <p className="gmail-contact">KLAPKUS@GMAIL.COM</p>
          </div>
          <div className="contact-insta">
            <img
              className="insta-img"
              src="https://static.vecteezy.com/system/resources/previews/017/743/717/original/instagram-icon-logo-free-png.png"
            ></img>
            <p className="insta-word">INSTAGRAM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
