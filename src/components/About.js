import React from 'react';

import Slika1 from "../assets/img/about/about.jpg";

function Second() {
  return (
    <section className="about-sec" id="about-sec">
      <div className="about-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 services-area padding-top padding-bottom">
            <div
              className="purple-overlay"
              style={{
                backgroundImage: "url(" + Slika1 + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRight: "15px solid white",
              }}
            ></div>
            <div className="row no-gutters wow fadeInLeft"></div>
          </div>
          <div className="col-12 col-lg-6 about-area padding-top padding-bottom text-center text-lg-left">
            <div className="about-content wow fadeInRight">
              <div className="about-inner-content">
                <h4 className="heading">
                  We are <span>AdLab agency</span>
                </h4>
                <p className="text">
                  Blue Ad Lab je boutique healthcare marketing agency
                  specijalizirana za pružanje pomoći sudionicima zdravstvenog
                  sustava (liječnicima, farmaceutskim tvrtkama, udrugama) u
                  njihovim svakodnevnim komunikacijskim aktivnostima. Svojim
                  radom želimo medicinu i znanost dodatno približiti javnosti te
                  tako unaprijeediti zdravlje i kvalitetu života čitavog
                  društva.
                </p>
                <p className="text">
                  Materijali su dostupni na hrvatskom jeziku i mogu biti
                  prilagođeni vašim potrebama. • TABLICE INTERAKCIJSKIH LIJEKOVA
                  • MEDICINSKI PLAKATI I ILUSTRACIJE • MEDICINSKI KALKULATORI •
                  EDUKATIVNE BROŠURE ZA PACIJENETE • VJEŽBE PREMA ZDRAVSVENOM
                  STANJU • NAPREDNI DIGITALNI ALATI I APLIKACIJE • MULTIMEDIJSKI
                  SADRŽAJI ZA DRUŠTVENE MREŽE • VIDEO MATERIJAL
                </p>

                <a
                  href="#company-portfolio-section"
                  id="we-are"
                  className="btn anim-btn rounded-pill scroll"
                >
                  LEARN MORE
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Second
