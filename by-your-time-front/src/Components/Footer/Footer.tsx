import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <p className="footer-links">
          <a href="/about">
            <b>About</b>
          </a>

          <a href="/terms-and-conditions">
            <b>Terms&Conditions</b>
          </a>

          <a href="/contact">
            <b>Contact</b>
          </a>
        </p>
        <p className="footer-company-name">
          <b>ByYourTime © 2022</b>
        </p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>
              <b>Piata Presei Libere 1</b>
            </span>
            <span>
              <b>Bucharest, Romania</b>
            </span>
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>
            <b>0749 *** ***</b>
          </p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:celeste.ceramicasrl@gmail.com">
              alexandra.dumitru2811@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Who has time these days – time to listen, time to concentrate, time,
          even, to think? It seems like we’re all increasingly in a rush. We’re
          often quick to say we’re busy. Our advice, buy your time!
        </p>

        {/* <a href="/"><img src="/images/logoOk2.png" height = "120px" alt="ByYourTime"/></a> */}

        <div className="footer-icons">
          <a
            href="https://www.facebook.com/celesteceramicasrl/"
            className="fa fa-facebook"
          ></a>
          <a
            href="https://www.instagram.com/celesteceramica/"
            className="fa fa-instagram"
          ></a>
          <a href="#" className="fa fa-linkedin"></a>
          <a href="#" className="fa fa-github"></a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
