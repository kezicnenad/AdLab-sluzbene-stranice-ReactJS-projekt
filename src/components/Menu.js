import React from 'react';
import imgLogo from "../assets/img/logo.png";

function Menu({ menu, closeMenu }) {
  return (
    <div>
      {menu === true ? (
        <div className="side-menu side-menu-opacity">
          <div className="bg-overlay"></div>
          <div className="inner-wrapper">
            <span
              className="btn-close"
              id="btn_sideNavClose"
              onClick={closeMenu}
            >
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
                        <a
                          onClick={(e) => closeMenu(e, "#pocetna")}
                          className="nav-link scroll"
                          href="#pocetna"
                        >
                          Početna
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          onClick={(e) => closeMenu(e, "#o-nama")}
                          className="nav-link scroll"
                          href="#o-nama"
                        >
                          O nama
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          onClick={(e) => closeMenu(e, "#built-by-doctors")}
                          className="nav-link scroll"
                          href="#built-by-doctors"
                        >
                          Built By Doctors
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link scroll"
                          href="#kontakt"
                          onClick={(e) => closeMenu(e, "#kontakt")}
                        >
                          Kontakt
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
      ) : (
        <div className="side-menu-none side-menu-opacity">
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
      )}
    </div>
  );
}

export default Menu;