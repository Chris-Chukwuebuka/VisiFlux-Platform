import React from "react";
import { FaCode, FaMobileAlt, FaDesktop, FaChalkboardTeacher, FaTools, FaProjectDiagram } from "react-icons/fa";

const ServiceCardSection = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Custom Software Development",
      description:
        "We specialize in developing bespoke software solutions that align perfectly with your business objectives. Our team collaborates closely with you to understand your requirements and deliver applications that enhance productivity and efficiency.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      description:
        "We specialize in developing bespoke software solutions that align perfectly with your business objectives. Our team collaborates closely with you to understand your requirements and deliver applications that enhance productivity and efficiency.",
    },
    {
      icon: <FaDesktop />,
      title: "Web Development",
      description:
        "We specialize in developing bespoke software solutions that align perfectly with your business objectives. Our team collaborates closely with you to understand your requirements and deliver applications that enhance productivity and efficiency.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Consultation Services",
      description:
        "We specialize in developing bespoke software solutions that align perfectly with your business objectives. Our team collaborates closely with you to understand your requirements and deliver applications that enhance productivity and efficiency.",
    },
    {
      icon: <FaTools />,
      title: "Tech Support and Maintenance",
      description:
        "We specialize in developing bespoke software solutions that align perfectly with your business objectives. Our team collaborates closely with you to understand your requirements and deliver applications that enhance productivity and efficiency.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Project Management",
      description:
        "We provide expert project management services to ensure your technology initiatives are completed on time and within budget, delivering exceptional value for your business.",
    },
  ];

  return (
    <section className="py-12 bg-white justify-center">
      <div className="text-center mb-12">
      <div className="h-1 w-16 bg-yellow-500 mx-auto mt-4 mb-10 rounded-full"></div>

        <h3 className="text-purple-800 text-2xl font-bold mt-2" style={{ fontFamily: "Montserrat" }}>Our Services</h3>
        <h2 className="text-2xl font-bold text-purple-800 mt-2 text-center" style={{ fontFamily: "Montserrat" }}>
          Transforming Ideas into Innovative Technology Solutions
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center font-extrabold justify-center text-purple-800 text-6xl mb-4">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-center text-purple-800 mb-2" style={{ fontFamily: "Montserrat" }}>
              {service.title}
            </h3>
            <p className="text-purple-800 font-medium text-center  mb-4" style={{ fontFamily: "Lora" }}>{service.description}</p>
            <div className="flex justify-end">
              <button className="text-purple-800 text-xl hover:text-yellow-600">
                <i className="fas fa-arrow-circle-right"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mb-2 mt-5">
        <h2
          className="text-xl md:text-2xl font-bold mb-2 text-purple-800"
          style={{
            fontFamily: "Montserrat",
          }}
        >
          Your Next Big Idea Starts Here.
        </h2>
        </div>
    </section>
  );
};

export default ServiceCardSection;
