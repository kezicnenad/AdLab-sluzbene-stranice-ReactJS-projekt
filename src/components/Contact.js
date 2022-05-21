import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import imgContact from "../assets/img/contact-background.png";

function Contact() {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m6988qb",
        "template_xytkgtq",
        form.current,
        "r0QkJt1msyHY7FipA"
      )
      .then(
        (result) => {
          // console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setName("");
      setEmail("");
      setSubject('');
      setMessage("");
      window.open("neki_pdf.pdf", "_blank");
  };

  return (
    <section
      className="contact-sec padding-top padding-bottom"
      id="contact-sec"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7">
            <h4 className="heading text-center text-lg-left">Get in Touch</h4>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="row contact-form wow fadeInLeft"
              id="contact-form-data"
            >
              <div className="col-sm-12" id="result"></div>
              <div className="col-12 col-md-5">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  name="from_mail"
                  placeholder="Email Address *"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="form-control"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="col-12 col-md-7">
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn purple-btn rounded-pill w-100 contact_btn"
                >
                  <i
                    className="fa fa-spinner fa-spin mr-2 d-none"
                    aria-hidden="true"
                  ></i>
                  Send Message
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </form>
          </div>
          <div className="col-12 col-lg-5 text-center text-lg-left position-relative">
            <div className="contact-details wow fadeInRight">
              <h4 className="heading">Our location</h4>
              <p className="text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered .
              </p>
              <ul>
                <li>
                  <i className="las la-map-marker addr"></i>123 Park Avenue, New
                  York, United States{" "}
                </li>
                <li>
                  <i className="las la-phone-volume phone"></i>
                  <span>+385 1 234 56 78</span>
                  <span>+385 1 234 56 78</span>
                </li>
                <li>
                  <i className="las la-paper-plane email"></i>info@adlab.hr
                </li>
              </ul>
            </div>
            <img
              src={imgContact}
              className="contact-background"
              alt="contact"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact