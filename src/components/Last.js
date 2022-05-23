import React from "react";
import imgBuild from "../assets/img/build/build.jpg";

function Last() {
  return (
    <section className="last-sec" id="company-portfolio-section">
      <div className="left-overlay"></div>
      <div className="container position-relative">
        <div className="blog-inner-overlay"></div>
        <div className="row blog-area">
          <div className="col-12 col-lg-5 d-flex align-items-center text-center text-lg-left">
            <div className="blog-detail wow fadeInLeft">
              <p className="text">
                <b>Materijali su dostupni na hrvatskom jeziku</b>
                <br />i mogu biti prilagođeni vašim potrebama.
              </p>
              <ul>
                <li>TABLICE INTERAKCIJSKIH LIJEKOVA</li>
                <li>MEDICINSKI PLAKATI I ILUSTRACIJE</li>
                <li>MEDICINSKI KALKULATORI</li>
                <li>EDUKATIVNE BROŠURE</li>
                <li>VJEŽBA PREMA ZDRAVSTVENOM STANJU</li>
                <li>NAPREDNI DIGITALNI ALATI I APLIKACIJE</li>
                <li>MULTIMEDIJSKI SADRŽAJ ZA DRUŠTVENE MREŽE</li>
                <li>VIDEO MATERIJAL</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1 padding-bottom">
            <div className="blog-img wow fadeInRight">
              <img src={imgBuild} alt="blog-img" className="blog-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Last;
