import React from "react";
import "../../index.css"

const ServiceHeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex  justify-start service-hero"
     
    >
      <div className=" text-white pt-60 pb-12 pl-12 pr-12 rounded-md max-w-lg text-start">
        <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "Montserrat" }}>
          Innovative IT Solutions Tailored to Your Needs.
        </h1>
        <p className="text-lg mb-6 font-medium" style={{ fontFamily: "Lora" }}>
          Our expertise in technology innovation allows us to deliver solutions
          that not only solve current challenges but also pave the way for
          future growth.
        </p>
        <button className="px-11 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition" style={{ fontFamily: "Montserrat" }}>
          Explore
        </button>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
