import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from '../../Assets/VisiFlux.png';
import RightPointedArrow from '../../Assets/arrow-icon.png';
import '../../index.css';
const Footer = () => {
  const purpleDot = {
    display: "inline-block",
    width: "8px",
    height: "8px",
    backgroundColor: "#3F0B55",
    borderRadius: "50%",
    marginRight: "10px",
  };

  return (
    <div>
      <footer
        className="bg-light text-dark pt-5 pb-3  container-fluid"
        style={{ borderTop: "1px solid #3F0B55", borderBottom: "1px solid #3F0B55" }}
      >
        <div className="mt-5 container">
          <div className="row mb-5">
            {/* Company Description */}
            <div className="col-md-3">
              <h5 className="fw-bold" style={{ color: "#3F0B55" }}>
                <img src={Logo} alt="Logo" style={{ width: "100px" }} />
              </h5>
              <p className="small fw-medium" style={{ color: "#3F0B55", fontSize: "1rem", fontFamily: "Lora" }}>
                The World’s Leading Innovation Hub. Making Innovation Simple, Accessible, and Classy
              </p>
              <div className="d-flex gap-3">
                <NavLink to="#" className="text-dark">
                  <FaFacebook size={20} />
                </NavLink>
                <NavLink to="#" className="text-dark">
                  <FaTwitter size={20} />
                </NavLink>
                <NavLink to="#" className="text-dark">
                  <FaLinkedin size={20} />
                </NavLink>
                <NavLink to="#" className="text-dark">
                  <FaInstagram size={20} />
                </NavLink>
              </div>
            </div>

            {/* Services */}
            <div className="col-md-2">
              <h6 className="fw-bold fs-6" style={{ color: "#3F0B55", fontFamily: "Montserrat" }}>Services</h6>
              <ul className="list-unstyled text-decoration-none" style={{ color: "#3F0B55" }}>
                <li><span style={purpleDot}></span><NavLink to="/services/custom-software" className="text-dark ">Custom Software Development</NavLink></li>
                <li><span style={purpleDot}></span><NavLink to="/services/mobile-app" className="text-dark">Mobile App Development</NavLink></li>
                <li><span style={purpleDot}></span><NavLink to="/services/web-development" className="text-dark">Web Development</NavLink></li>
                <li><span style={purpleDot}></span><NavLink to="/services/consultation" className="text-dark">Consultation Services</NavLink></li>
                <li><span style={purpleDot}></span><NavLink to="/services/tech-support" className="text-dark">Tech Support and Maintenance</NavLink></li>
              </ul>
            </div>

            {/* Company */}
            <div className="col-md-2">
              <h6 className="fw-bold fs-6" style={{ color: "#3F0B55", fontFamily: "Montserrat" }}>Company</h6>
              <ul className="list-unstyled" style={{ color: "#3F0B55" }}>
                <li><span style={purpleDot}></span><NavLink to="/about" className="text-dark">About Us</NavLink></li>
                <li><span style={purpleDot}></span><NavLink to="/careers" className="text-dark">Careers</NavLink></li>
                <li><span style={purpleDot}></span><NavLink to="/terms" className="text-dark">Terms of Service</NavLink></li>
                <li><span style={purpleDot}></span><NavLink to="/privacy" className="text-dark">Privacy Policy</NavLink></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-2">
              <h6 className="fw-bold fs-6" style={{ color: "#3F0B55", fontFamily: "Montserrat" }}>Contact</h6>
              <ul className="list-unstyled" style={{ color: "#3F0B55" }}>
                <li><span style={purpleDot}></span>Email: <NavLink to="mailto:info@visiflux.com" className="text-dark">info@visiflux.com</NavLink></li>
                <li><span style={purpleDot}></span>Phone: +234 667 233 446</li>
                <li><span style={purpleDot}></span>Address: 123 Tech Avenue, <span className="p-1">Lagos, Nigeria</span> </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="col-md-3">
              <h6 className="fw-bold fs-6" style={{ color: "#3F0B55", fontFamily: "Montserrat" }}>Newsletter</h6>
              <p className="small" style={{ color: "#3F0B55", fontFamily: "Lora" }}>Stay up-to-date with our latest news and offers!</p>
              <div className="d-flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="form-control newsletter-input"
                  style={{
                    borderRadius: "20px 0 0 20px",
                    backgroundColor: "#3F0B55",
                    color: "white",
                    border: "none",
                  }}
                />
                <button
                  className="btn"
                  style={{
                    borderRadius: "0 20px 20px 0",
                    backgroundColor: "#3F0B55",
                    color: "#3F0B55",
                    border: "none",
                  }}
                >
                  <img src={RightPointedArrow} alt="Right Arrow" style={{ width: "35px" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="text-center mt-2 fw-medium">
        <small style={{ color: "#3F0B55", fontFamily: "Lora" }}>© 2024 VisiFlux. All Rights Reserved.</small>
      </div>
    </div>
  );
};

export default Footer;
