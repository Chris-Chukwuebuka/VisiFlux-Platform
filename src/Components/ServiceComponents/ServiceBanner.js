import React from "react";
import "../../index.css";

const ServiceBanner = () => {
  return (
    <section className="relative bg-cover bg-center h-[500px] flex items-center justify-center service-banner">
      {/* Overlay */}
      <div className="absolute inset-0 bg-purple-800 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h2
          className="text-lg md:text-xl font-semibold mb-6text-xl  mb-20 text-yellow-500"
          style={{ fontFamily: "Montserrat" }}
        >
          Let’s Build Something Amazing Together.
        </h2>
        <a
          href="/contact"
          className="inline-block text-black px-6 py-3 bg-yellow-500  font-bold rounded-md hover:bg-yellow-600 transition duration-300 rounded-pill text-decoration-none "
          style={{ fontFamily: "Montserrat" }}
        >
          Request Consultation
        </a>
      </div>
    </section>
  );
};

export default ServiceBanner;
