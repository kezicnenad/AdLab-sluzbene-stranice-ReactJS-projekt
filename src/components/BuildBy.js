import React from 'react';
import imgBuild from "../assets/img/build/build.jpg";

function BuildBy() {
  return (
    <section className="blog-sec" id="built-by-doctors">
      <div className="left-overlay"></div>
      <div className="container position-relative">
        <div className="blog-inner-overlay"></div>
        <div className="row blog-area">
          <div className="col-12 col-lg-5 d-flex align-items-center text-center text-lg-left">
            <div className="blog-detail wow fadeInLeft">
              <h4 className="heading">
                Build by <span>Doctors</span>
              </h4>
              <p className="text">
                Built by Doctors globalni je industrijski lider u proizvodnji stručnog sadržaja najviše kvalitete za potrebe edukativnih marketinških materijala farmaceutske industrije.
              </p>
              <a
                className="btn anim-btn rounded-pill"
                id="we-are"
                href="#built-by-2"
              >
                VIDI VIŠE
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </a>
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

export default BuildBy
