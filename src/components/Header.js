import React from 'react';
import imgLogo from "../assets/img/logo.png";
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
        <a
          href="javascript:void(0)"
          className="sidemenu_btn"
          id="sidemenu_toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      {/* <!--Side Nav--> */}
      <div className="side-menu side-menu-opacity">
        <div className="bg-overlay"></div>
        <div className="inner-wrapper">
          <span className="btn-close" id="btn_sideNavClose">
            <i></i>
            <i></i>
          </span>
          <div className="container">
            <div className="row w-100 side-menu-inner-content">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <a href="/" className="navbar-brand">
                  <img src={imgLogo} alt="logo" />
                </a>
              </div>
              <div className="col-12 col-lg-8">
                <nav className="side-nav w-100">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link scroll" href="#home">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link scroll" href="#about-sec">
                        About AdLab
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link scroll"
                        href="#company-portfolio-section"
                      >
                        Built By Doctors
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link scroll" href="#contact-sec">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-12 col-lg-4 d-flex align-items-center">
                <div className="side-footer text-white w-100">
                  <div className="menu-company-details">
                    <span>+385 99 194 88 84</span>
                    <span>office@adlab.hr</span>
                  </div>
                  {/* <ul className="social-icons-simple">
                    <li>
                      <a
                        className="facebook-text-hvr"
                        href="javascript:void(0)"
                      >
                        <i className="fab fa-facebook-f"></i>{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        className="instagram-text-hvr"
                        href="javascript:void(0)"
                      >
                        <i className="fab fa-twitter"></i>{" "}
                      </a>{" "}
                    </li>
                    <li>
                      <a
                        className="instagram-text-hvr"
                        href="javascript:void(0)"
                      >
                        <i className="fab fa-youtube"></i>{" "}
                      </a>{" "}
                    </li>
                    <li>
                      <a
                        className="instagram-text-hvr"
                        href="javascript:void(0)"
                      >
                        <i className="fab fa-instagram"></i>{" "}
                      </a>
                    </li>
                  </ul> */}
                  <p className="text-white">
                    © 2022. Ad Lab. Made With Love By{" "}
                    <a href="https://reset.hr">reset.hr</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a id="close_side_menu" href="javascript:void(0);"></a>
    </header>
  );
}

export default Header
