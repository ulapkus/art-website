import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="main-page-again">
      <div className="art-container">
        <div className="art-first">
          <div className="words-first">
            <p className="first">SEE AVAILABLE PRINTS</p>
            {/* <p className="first">PRINTS</p> */}
          </div>
        </div>
        <div className="art-second">
          <div className="words-second">
            <p className="second">VIEW ARTWORK</p>
          </div>
        </div>
        <div className="art-third">
          <div className="words-third">
            <p className="third">COLLECT ORIGINAL</p>
            <p className="third">PAINTINGS</p>
          </div>
        </div>
      </div>
      <div className="footer">
        {/* <h1>LET'S CONNECT!</h1> */}
        <div className="footer-main">
          <p className="footer-words">KLAPKUS@GMAIL.COM | </p>
          <p className="footer-words socials">
            <img
              className="facebook-img"
              src="https://static-00.iconduck.com/assets.00/facebook-icon-2048x2048-h5ikr429.png"
            ></img>
            FACEBOOK |
          </p>
          <p className="footer-words socials">
            <img
              className="insta-img"
              src="https://static.vecteezy.com/system/resources/previews/017/743/717/original/instagram-icon-logo-free-png.png"
            ></img>
            INSTAGRAM
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
