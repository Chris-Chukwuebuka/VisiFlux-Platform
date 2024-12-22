import React from "react";
import ServiceCard from "./ServiceCard";

// Import your images
import softwareDevImage from "../../Assets/softwareDevelopmentImg.png";
import mobileAppImage from "../../Assets/mobileAppDevImg.png";
import webDevImage from "../../Assets/webDevImg.png";
import consultationImage from "../../Assets/consultationServiceImg.png";

const ServiceSection = () => {
  const services = [
    {
      title: "Software Development",
      description:
        "Developing bespoke software solutions that align perfectly with your business objectives.",
      image: softwareDevImage,
    },
    {
      title: "Mobile App Development",
      description:
        "Developing bespoke software solutions that align perfectly with your business objectives.",
      image: mobileAppImage,
    },
    {
      title: "Web Development",
      description:
        "Developing bespoke software solutions that align perfectly with your business objectives.",
      image: webDevImage,
    },
    {
      title: "Consultation Services",
      description:
        "Developing bespoke software solutions that align perfectly with your business objectives.",
      image: consultationImage,
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      {/* Heading Section */}
      <div className="text-center mb-8 relative">
        {/* Gold Bar */}
        <div
          className="mx-auto mb-3 h-1 w-20 rounded-pill"
          style={{
            background: "linear-gradient(to right, #C0880E, #FFB617, #A07009)",
          }}
        ></div>

        {/* Heading */}
        <h2
          className="text-4xl font-bold text-purple-700"
          style={{ fontFamily: "Montserrat" }}
        >
          Our Services
        </h2>

        {/* Subheading */}
        <p
          className="text-gray-700 font-medium mt-4"
          style={{
            fontFamily: "Montserrat",
            fontSize: "1.5rem",
            lineHeight: "1.5",
            margin: "auto",
            width: "75%",
          }}
        >
          We offer a diverse range of services tailored to meet the unique needs
          of our clients
        </p>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
