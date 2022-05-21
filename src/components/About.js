import React from 'react';

import Slika1 from "../assets/img/about/about.jpg";

function Second() {
  return (
    <section className="about-sec" id="about-sec">
      <div className="about-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 services-area padding-top padding-bottom">
            <div className="purple-overlay" style={{backgroundImage: 'url(' + Slika1 + ')', backgroundPosition: 'center', backgroundSize: '100%'}}>
            </div>
            <div className="row no-gutters wow fadeInLeft">
            </div>
          </div>
          <div className="col-12 col-lg-6 about-area padding-top padding-bottom text-center text-lg-left">
            <div className="about-content wow fadeInRight">
              <div className="about-inner-content">
                <h4 className="heading">
                  We are <span>AdLab agency</span>
                </h4>
                <p className="text">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting. Lorem Ipsum has been the industry’s standard
                  dummy. Lorem Ipsum has been the industry’s standard dummy.
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting. Lorem Ipsum has been the industry’s standard
                  dummy. Lorem Ipsum has been the industry’s standard dummy.
                </p>
                <p className="text">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting. Lorem Ipsum has been the industry’s standard
                  dummy. Lorem Ipsum has been the industry’s standard dummy.
                </p>
                
                <a
                  href="#about-sec"
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
