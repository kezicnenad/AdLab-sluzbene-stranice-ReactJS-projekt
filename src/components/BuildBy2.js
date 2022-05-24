import React from 'react';
import imgLast from "../assets/img/build/build2.jpg";

function BuildBy2() {
  return (
    <section className="blog-sec2" id="built-by-2">
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
            <div className="blog-detail wow fadeInLeft padding-top padding-top-build2">
              <p className="text">
                Svi materijali temeljeni su na uvijek recentnim znanstvenim podacima
                i saznanjima i rezultat su interdisciplinarnog rada tima
                sastavljenog od liječnika, medicinskih novinara, graﬁčkih
                dizajnera i specijaliziranih medicinskih ilustratora.
             <br/><br/>
                Built by Doctors portfolio pokriva <b>više od 20 područja</b> i{" "}
                <b>više od 170 zdravstvenih stanja</b> te sadrži{" "}
                <b>više od 1200 stručnih medicinskih materijala</b> namijenjenih
                liječnicima, farmaceutima, zdravstvenim djelatnicima te
                pacijentima i njihovim njegovateljima i bližnjima.
                <br />
                <br />
                Blue Ad Lab ekskluzivni je partner tvrtke Built By Doctors za
                područje Republike Hrvatske.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuildBy2;
