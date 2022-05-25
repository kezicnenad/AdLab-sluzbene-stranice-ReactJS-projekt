import React from 'react';
import zastita from '../assets/docs/zastita-podataka.pdf';

function Cookie() {

  const setCookie = (e) => {
    e.preventDefault();
    localStorage.setItem("adlab", "cookie");
    document.getElementById("cookiealert").style.display = "none";
  };
  
  if (localStorage.getItem("adlab")){
    console.log('da');
  } else {
      return (
        <div
          className="alert text-center hj. cookiealert"
          id="cookiealert"
          role="alert"
        >
          <p>
            Kako bi održavali stranicu i osigurali da sve funkcionalnosti budu
            na najvišoj razini, a sve u cilju poboljšanja korisničkog iskustva
            koristimo kolačiće (eng. cookies).
          </p>
          {"  "}
          <a href={zastita} target="_blank" className="cookieSaznaj">
            <b>Saznaj više</b>{" "}
          </a>
          <button
            type="button"
            className="btn purple-btn rounded-pill contact_btn acceptCookies"
            onClick={(e) => setCookie(e)}
          >
            Prihvati sve
          </button>
        </div>
      );
  }

}

export default Cookie
