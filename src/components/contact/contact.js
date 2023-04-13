import "./contact.css";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5uyub14",
        "template_cabc1am",
        form.current,
        "_N4P6bWPI_SF_Dg8k"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          e.target.reset();
        },
        (err) => {
          console.log(err.text);
          alert("error on sending message");
        }
      );
  };
  useEffect(() => {
    let timeoutId;

    if (isSent) {
      timeoutId = setTimeout(() => {
        setIsSent(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isSent]);
  return (
    <section className="contact section" id="contact">
      <div className="container_title">
        <h3 className="section_title">Get in touch</h3>
        <span className="section_subtitle">Contact Me</span>
      </div>

      <div className="contact_container container grid">
        <div className="card_container">
          <div className="card info_card">
            <label className="card_title">Contact Information</label>
            <div className="card_info">
              <div className="contact_card">
                <i className="contact_card_icon">
                  <MdLocationPin />
                </i>
                <div className="contact_card_data">
                  <span className="card_data">
                    Barangay 31-D, Davao City, Philippines 8000
                  </span>
                  <h3 className="card_data_title">Address</h3>
                </div>
              </div>
              <div className="contact_card">
                <i className="contact_card_icon">
                  <IoIosMail />
                </i>
                <div className="contact_card_data">
                  <span className="card_data">nashrudinhabibon@gmail.com</span>
                  <h3 className="card_data_title">Email</h3>
                </div>
              </div>
              <div className="contact_card">
                <i className="contact_card_icon">
                  <IoLogoWhatsapp />
                </i>
                <div className="contact_card_data">
                  <span className="card_data">+63 936-703-4630</span>
                  <h3 className="card_data_title">Whatsapp</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="card message_card">
            <label className="card_title">Send a Message</label>
            <form ref={form} onSubmit={sendEmail} className="form">
              {isSent && (
                <Alert severity="success" color="info">
                  Your message has been sent successfully, I will send you a
                  message immediately
                </Alert>
              )}

              <div className="group">
                <input placeholder=" " name="name" type="text" required />
                <label>Name</label>
              </div>
              <div className="group">
                <input
                  placeholder=" "
                  type="email"
                  id="email"
                  name="email"
                  required
                />
                <label>Email</label>
              </div>
              <div className="group">
                <textarea
                  placeholder=" "
                  id="comment"
                  name="message"
                  rows="10"
                  required
                ></textarea>
                <label>Message</label>
              </div>

              <button>
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
