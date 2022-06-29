import React from 'react';
import Menu from './Menu';
import imgLogoBlack from "../assets/img/logo-black.png";

function Header() {
  return (
    <header id="home">
      <div className="inner-header">
        {/* <!--colored-lines--> */}
        <div className="color-lines row no-gutters">
          <div className="col-4 bg-red"></div>
          <div className="col-4 bg-purple"></div>
          <div className="col-4 bg-green"></div>
        </div>
        {/* <!--upper-nav--> */}
        <div className="upper-nav">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <ul className="top-personal-info">
                  <li>
                    <a href="#">
                      {/* <i className="las la-phone"></i> +385 99 194 88 84 */}
                    </a>
                  </li>
                  <li>
                    <a href="#contact-sec">
                      <i className="las la-envelope"></i> office@adlab.hr
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 text-right">
                {/* <ul className="top-social-links">
                  <li>
                    <a href="#" className="link-holder fb">
                      <i className="lab la-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-holder twit">
                      <i className="lab la-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-holder link-in">
                      <i className="lab la-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-holder insta">
                      <i className="lab la-instagram"></i>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!--main nav--> */}
        <div className="main-navigation">
          <div className="container">
            <div className="row">
              <div className="col-4 col-lg-3">
                <a className="navbar-brand simple-nav-logo" href="/">
                  <img src={imgLogoBlack} alt="logo" className='logo' />
                </a>
                <a className="navbar-brand fixed-nav-logo" href="/">
                  <img src={imgLogoBlack} alt="logo" />
                </a>
              </div>
              <div className="col-8 col-lg-9 simple-navbar">
                <nav className="navbar navbar-expand-lg">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <a className="nav-link home" href="#">
                          Početna
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link scroll" href="#o-nama">
                          O nama
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link scroll"
                          href="#built-by-doctors"
                        >
                          Built By Doctors
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link scroll" href="#kontakt">
                          Kontakt
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
                {/* <ul className="top-social-links fixed-nav-links">
                  <li>
                    <a href="#" className="link-holder fb">
                      <i className="lab la-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-holder twit">
                      <i className="lab la-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-holder link-in">
                      <i className="lab la-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link-holder insta">
                      <i className="lab la-instagram"></i>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!--toggle btn--> */}
        {/* ODE SREDIT NAVIGACIJU */}
        <div
          className="sidemenu_btn"
          id="sidemenu_toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {/* <!--Side Nav--> */}
      <Menu />
    </header>
  );
}

export default Header
