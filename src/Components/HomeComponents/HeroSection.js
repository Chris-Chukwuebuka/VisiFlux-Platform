import React from "react";
import HeroImage from "../../Assets/Hero-Image.png"; // Replace with the actual path to your image

const HeroSection = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        {/* Text Content */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="display-4 fw-bold  mb-3" style={{ color: "#3F0B55", fontFamily: "Montserrat", lineHeight: "1.2" }}>
            The World’s Leading Innovation Hub
          </h1>
          <p className="h5 fw-semibold  mb-4" style={{ fontFamily: "Montserrat", color: "#A731BED4", lineHeight: "1.5", fontSize: "1.2rem" }}>
          Making Innovation Simple, Accessible, and Classy          </p>
          <p className="text-dark mb-4"style={{ fontFamily: "Lora", color: "#000000", lineHeight: "1.5", fontSize: "1rem", fontWeight: "400" }} >
            VisiFlux is a forward-thinking IT firm, incorporated under the CAC
            Act in 2024 and headquartered in the vibrant city of Lagos, Nigeria.
            We are dedicated to harnessing the power of technology to create
            innovative products that address real-world problems.
          </p>
          <button className="btn btn-lg rounded-pill fw-medium  px-4 py-2" style={{ backgroundColor: "#3F0B55", color: "white", fontFamily: "Montserrat", fontSize: "0.9rem" }}>
            Learn More
          </button>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src={HeroImage}
            alt="Hero Illustration"
            className="img-fluid"
            style={{ maxWidth: "450px", width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
