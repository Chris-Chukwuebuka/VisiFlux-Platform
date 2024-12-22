import React from "react";
import illustration from "../../Assets/ChooseImg.png"; // Add your custom illustration image

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Expertise and Experience",
      description:
        "Our team has years of experience in delivering cutting-edge IT solutions.",
      icon: "🛠️",
    },
    {
      id: 2,
      title: "Innovative Solutions",
      description:
        "We leverage the latest technology to provide innovative and scalable solutions.",
      icon: "💡",
    },
    {
      id: 3,
      title: "Client-Centric Approach",
      description:
        "We prioritize your needs and work closely with you to deliver tailored solutions.",
      icon: "❤️",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mx-auto max-w-7xl p-6">
      {/* Left Illustration */}
      <div className="flex-1 mb-6 lg:mb-0">
        <img
          src={illustration}
          alt="Illustration"
          className="w-full max-w-md mx-auto"
        />
      </div>

      {/* Right Text Section */}
      <div className="flex-1 text-left">
        {/* Section Title */}
        <h2
          className="text-3xl font-bold text-purple-800 mb-2"
          style={{ fontFamily: "Montserrat" }}
        >
          Why Choose Us?
        </h2>
        <div
          className="w-20 h-1 rounded-pill mb-6"
          style={{
            background: "linear-gradient(to right, #C0880E, #FFB617, #A07009)",
          }}
        ></div>{" "}
        {/* Gold line */}
        {/* Description */}
        <p
          className="text-black mb-6"
          style={{ fontFamily: "Lora", fontSize: "1.1rem", fontWeight: "400" }}
        >
          We combine innovation, expertise, and commitment to deliver
          exceptional IT solutions tailored to your needs.
        </p>
        {/* Features */}
        <div className="space-y-6">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-start space-x-4">
              <div className="text-purple-700 text-3xl">{feature.icon}</div>
              <div>
                <h3
                  className="font-semibold text-lg text-black"
                  style={{ fontFamily: "Lora" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-gray-500"
                  style={{
                    fontFamily: "Lora",
                    fontSize: "0.9rem",
                    fontWeight: "400",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
