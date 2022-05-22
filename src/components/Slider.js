import React from 'react';

import Slika1 from "../assets/img/slides/slide1.jpg";
import Slika2 from "../assets/img/slides/slide2.jpg";
import Slika3 from "../assets/img/slides/slide3.jpg";

function Slider() {
  return (
    <section className="slider-area">
      <div className="bg-overlay"></div>
      <div className="container position-relative">
        <div className="inner-bg-overlay"></div>
        <div className="row">
          <div
            className="slider-detail col-12 col-lg-6 text-center text-lg-left wow fadeInLeft"
            data-wow-delay=".8s"
          >
            <div className="slider-slide">
              <div className="slider-inner-content">
                <h4 className="slide-heading">
                  Blue <span>AdLab</span>
                </h4>
                <p className="slide-text">
                  je boutique healthcare marketing agency specijalizirana za pružanje pomoći sudionicima zdravstvenog sustava.
                </p>
                <a
                  href="#about-sec"
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
{/* 
            <div className="slider-slide">
              <div className="slider-inner-content">
                <h4 className="slide-heading">
                  Slide <span>#2</span>
                </h4>
                <p className="slide-text">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting. Lorem Ipsum has been the industry’s standard
                  dummy. Lorem Ipsum has been the industry’s standard dummy.
                </p>{" "}
                <a
                  href="#about-sec"
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

            <div className="slider-slide">
              <div className="slider-inner-content">
                <h4 className="slide-heading">
                  Slide <span>#3</span>
                </h4>
                <p className="slide-text">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting. Lorem Ipsum has been the industry’s standard
                  dummy. Lorem Ipsum has been the industry’s standard dummy.
                </p>
                <a
                  href="#about-sec"
                  className="btn anim-btn rounded-pill scroll"
                >
                  LEARN MORE
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div> */}
          </div>

          <div
            className="slider-img col-12 col-lg-6 wow fadeInRight"
            data-wow-delay=".8s"
            data-depth="0.1"
          >
            <div className="img-slide">
              <img className="single-img-slide" src={Slika1} alt="1" />
            </div>
            {/* <div className="img-slide">
              <img className="single-img-slide" src={Slika2} alt="2" />
            </div>
            <div className="img-slide">
              <img className="single-img-slide" src={Slika3} alt="3" />
            </div> */}
          </div>
        </div>

        {/* <div className="slider-arrows">
          <a
            href="javascript:void(0);"
            className="slider-arr slider-arr-up"
            id="slider-arr-up"
          >
            <i className="fas fa-angle-up"></i>
          </a>
          <a
            href="javascript:void(0);"
            className="slider-arr slider-arr-down"
            id="slider-arr-down"
          >
            <i className="fas fa-angle-down"></i>
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default Slider;