import React from "react";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="h-40 w-full object-contain mb-4"
      />
      <h3 className="text-lg font-semibold text-purple-700 mb-2 p-2">{title}</h3>
      <p className="text-black font-medium  mb-10 p-1 pb-2" style={{ fontFamily: "Lora", width: "250px", height: "40px", fontSize: "0.5rem" }}>{description}</p>
      <div className="text-center">
      <a
        href="/services"
        className="text-purple-600 font-semibold hover:underline text-decoration-none " style={{ fontSize: "1rem", fontFamily: "Lora" }}
      >
        Explore
      </a>
      </div>
     
    </div>
  );
};

export default ServiceCard;
