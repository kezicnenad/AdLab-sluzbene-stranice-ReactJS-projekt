import React from 'react';
import imgLast from "../assets/img/last/last.jpg";

function Last() {
  return (
    <section className="blog-sec2" id="company-portfolio-section">
      <div className="right-overlay"></div>
      <div className="container position-relative">
        <div className="blog-inner-overlay2"></div>
        <div className="row blog-area">
          <div className="col-12 col-lg-6">
            <div className="blog-img wow fadeInRight">
              <img className="blog-image2" src={imgLast} alt="blog-img" />
            </div>
          </div>
          <div className="col-12 col-lg-5 d-flex align-items-center text-center text-lg-left last padding-bottom">
            <div className="blog-detail wow fadeInLeft padding-top">
              <p className="text">
                Lorem ipsum is simply dummy text of the printing and
                typesetting. Lorem Ipsum has been the industry’s standard dummy.
              </p>
              <p className="text">
                Lorem ipsum is simply dummy text of the printing and
                typesetting. Lorem Ipsum has been the industry’s standard dummy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Last;
