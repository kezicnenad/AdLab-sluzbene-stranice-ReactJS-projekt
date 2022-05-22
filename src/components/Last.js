import React from 'react';
import imgLast from "../assets/img/last/last.jpg";

function Last() {
  return (
    <section className="blog-sec2" id="last-section">
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
                Built by Doctors globalni je industrijski lider u proizvodnji
                stručnog sadržaja najviše kvalitete za potrebe edukativnih
                marketinških materijala farmaceutske industrije. Svi materijali
                temeljeni su na uvijek recentnim znanstvenim podacima i
                saznanjima i rezultat su interdisciplarnog rada tima
                sastavljenog od liječnika, medicinskih novinara, graﬁčkih
                dizajnera i specijaliziranih medicinskih ilustratora.
              </p>
              <p className="text">
                Built by Doctors portfolio pokriva više od 20 područja i više od
                170 zdravstvenih stanja te sadrži više od 1200 stručnih
                medicinskih materijala namijenjenih liječnicima, farmaceutima,
                zdravsvenim djelatnicima te pacijentima i njihovim
                njegovateljima i bližnjima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Last;
