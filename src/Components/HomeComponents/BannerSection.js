import React from "react";
import { BsPlayCircle } from "react-icons/bs"; // React Icon for play button

const BannerSection = () => {
  return (
    <section
      className="d-flex flex-column align-items-center justify-content-center text-center py-5"
      style={{
        backgroundColor: "#3F0B55",
        color: "#FFD700",
        minHeight: "300px",
      }}
    >
      {/* Title */}
      <h2 className="fw-bold mb-3" style={{ fontSize: "2rem" }}>
        Still <span className="text-warning">curious?</span>
      </h2>

      {/* Subtitle with linear gradient text */}
      <p
        className="mb-4"
        style={{
          maxWidth: "600px",
          fontSize: "1.1rem",
          background: "linear-gradient(to right, #C0880E, #FFB617, #A07009)",
          WebkitBackgroundClip: "text", // For text gradient in WebKit-based browsers
          color: "transparent", // Make text color transparent so the gradient shows
        }}
      >
        Watch our introductory video to learn more about how we innovate and
        deliver impactful IT solutions
      </p>

      {/* Button */}
      <button
        className="btn btn-warning d-flex align-items-center justify-content-center fw-bold px-4 py-2 rounded-pill"
        style={{
          color: "#000",
          fontSize: "1rem",
          background: "linear-gradient(to right, #C0880E, #FFB617, #A07009)",
        }}
      >
        Watch Video{" "}
        <BsPlayCircle className="ms-2" style={{ fontSize: "1.2rem" }} />
      </button>
    </section>
  );
};

export default BannerSection;
