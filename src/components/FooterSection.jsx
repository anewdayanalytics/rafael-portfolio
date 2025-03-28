import React, { useState } from "react";
import SendArrow from "../assets/sendArrow.svg";
import { CiLocationOn, CiMail, CiMobile1, CiPhone } from "react-icons/ci";

const FooterSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    budget: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation check
    for (let key in formData) {
      if (!formData[key]) {
        alert("All fields are required!");
        return;
      }
    }

    // Submit form
    e.target.submit();
  };
  return (
    <div className="mt-5" id="contact">
      <div className="container footer-section">
        <div className="footer-card">
          <div className="row">
            <div className="col-md-6">
              <div className="title">Let’s discuss your Project</div>
              <div className="description mt-4 w-75">
                There are many variations of passages of Lorem Ipsu available.
                but the majority have suffered alte.
              </div>
              <div className="d-flex flex-column align-items-start mt-4 gap-4">
                <div className="tile d-flex align-items-start gap-2 active">
                  <div
                    className="icon-wrapper"
                    style={{ background: "#A53DFF" }}
                  >
                    <CiLocationOn size={30} color="white" />
                  </div>
                  <div>
                    <div className="heading">Address</div>
                    <div className="description">New Mexico 31134</div>
                  </div>
                </div>
                <div className="tile d-flex align-items-start gap-2">
                  <div className="icon-wrapper">
                    <CiMail size={30} color="#A53DFF" />
                  </div>
                  <div>
                    <div className="heading">Address</div>
                    <div className="description">New Mexico 31134</div>
                  </div>
                </div>
                <div className="tile d-flex align-items-start gap-2">
                  <div className="icon-wrapper">
                    <CiMobile1 size={30} color="#A53DFF" />
                  </div>
                  <div>
                    <div className="heading">Address</div>
                    <div className="description">New Mexico 31134</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="description">
                There are many variations of passages of Lorem Ipsu available,
                but the majority have suffered alte.
              </div>
              <div>
                <form
                  action="https://formsubmit.co/dacori@thetechnext.net"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <div className="d-flex flex-column align-items-start mt-4">
                    <label htmlFor="name">Name*</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      onChange={handleChange}
                    />
                  </div>

                  <div className="d-flex flex-column align-items-start mt-4">
                    <label htmlFor="email">Email*</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      onChange={handleChange}
                    />
                  </div>

                  <div className="d-flex flex-column align-items-start mt-4">
                    <label htmlFor="location">Location*</label>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      required
                      onChange={handleChange}
                    />
                  </div>

                  <div className="d-flex align-items-start mt-4 gap-4">
                    <div>
                      <label htmlFor="budget">Budget*</label>
                      <input
                        type="text"
                        name="budget"
                        id="budget"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="subject">Subject*</label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="d-flex flex-column align-items-start mt-4">
                    <label htmlFor="message">Message*</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary px-4 mt-4 d-flex align-items-center gap-2"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3">
              {" "}
              <div className="logo">B</div>
              <div className="logo-text">Broolyn</div>
            </div>
            <div className="footer-links">
              <div class="d-flex gap-3 flex-md-row flex-column">
                <a class="nav-link" href="#home">
                  Home
                </a>
                <a class="nav-link" href="#about">
                  About
                </a>
                <a class="nav-link" href="#portfolio">
                  Portfolio
                </a>
                <a class="nav-link" href="#services">
                  Services
                </a>
                <a class="" href="#contact">
                  Contact
                </a>
              </div>
            </div>
            <div className="copyright">
              Copyright © {new Date().getFullYear()} All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
