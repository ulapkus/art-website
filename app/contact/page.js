import React from "react";

const contact = () => {
  return (
    <div className="contact">
      <h3>CONTACT ME</h3>
      <div className="contact-main">
        <p className="photo-contact">photo</p>
        {/* <p className="words-contact">You can contact me directly at: </p> */}
        <div className="contact-bottom">
          <p className="gmail-contact">KLAPKUS@GMAIL.COM</p>
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
