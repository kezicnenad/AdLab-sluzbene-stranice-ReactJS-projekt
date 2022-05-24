import React from "react";
import imgBuild from "../assets/img/build/materijali.jpg";

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
                <h4>
                  <b>Materijali su dostupni na hrvatskom jeziku</b>
                </h4>
                <br />i mogu biti prilagođeni vašim potrebama.
              </p>
              <ul>
                <a href="https://builtbydoctors.com/paper-drug-interaction-charts/">
                  <li>Tablice interakcije lijekova</li>
                </a>
                <a href="https://builtbydoctors.com/app-ss/">
                  <li>Medicinski plakati i ilustracije</li>
                </a>
                <a href="https://builtbydoctors.com/medical-slide-rulers/">
                  <li>Medicinski kalkulatori</li>
                </a>
                <a href="https://builtbydoctors.com/top-lw/">
                  <li>Edukativne brošure</li>
                </a>
                <a href="https://builtbydoctors.com/app-ex/">
                  <li>Vježba prema zdravstvenom stanju</li>
                </a>
                <a href="https://builtbydoctors.com/app-ss/">
                  <li>Napredni digitalni alati i aplikacije</li>
                </a>
                <a href="https://socialmedia-health.com/smart-tools">
                  <li>Multimedijski sadržaj za društvene mreže</li>
                </a>
                <a href="https://builtbydoctors.com/ipe-ss/">
                  <li>Video materijal</li>
                </a>
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
