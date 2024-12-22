import React from 'react';
import { FiCheck } from 'react-icons/fi'; // Importing the check icon
import teamImage from '../../Assets/AboutUsImg.png'; // Replace with actual image path

const AboutHeroSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex gap-6 sm:gap-12 mb-6 border-b border-black mt-12 sm:mt-16">
            <p className="text-black font-bold font-sans text-sm sm:text-base">
              Our Story
            </p>
            <p className="text-gray-500 font-serif text-sm sm:text-base">
              Management Team
            </p>
            <p className="text-gray-500 font-serif text-sm sm:text-base">
              Careers
            </p>
          </div>
          <img
            src={teamImage}
            alt="Team working together"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h3
            className="text-xl sm:text-2xl font-semibold text-gray-800 ps-20 pt-10 mb-5 pb-2 relative"
            style={{ fontFamily: 'Montserrat' }}
          >
            About VisiFlux
            <span className="absolute left-0 bottom-0 w-12  sm:w-16 h-1 bg-yellow-500 mt-2"></span>
          </h3>
          <h1
            className="text-2xl sm:text-3xl font-bold text-purple-800 mb-6"
            style={{ fontFamily: 'Montserrat' }}
          >
            The World's Leading Innovation Hub
          </h1>
          <p
            className="text-gray-700 mb-6 font-medium text-sm sm:text-base"
            style={{ fontFamily: 'Lora' }}
          >
            VisiFlux is a forward-thinking IT firm, incorporated under the CAC
            Act in 2024 and headquartered in the vibrant city of Lagos, Nigeria.
            We are dedicated to harnessing the power of technology to create
            innovative products that address real-world problems.
          </p>
          <blockquote
            className="border-l-4 border-yellow-500 pl-4 text-gray-600 mb-6 text-sm sm:text-base"
            style={{ fontFamily: 'Lora' }}
          >
            Our team consists of passionate professionals who are committed to
            pushing the boundaries of what technology can achieve, ensuring our
            solutions are not only effective but also scalable for future needs.
          </blockquote>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-purple-800 font-medium">
            <li className="flex items-center"   style={{ fontFamily: 'Montserrat' }}>
              <FiCheck className="text-yellow-600 mr-2" /> Creating Solutions
            </li>
            <li className="flex items-center"   style={{ fontFamily: 'Montserrat' }}>
              <FiCheck className="text-yellow-600 mr-2" /> Driving Innovation
            </li>
            <li className="flex items-center"   style={{ fontFamily: 'Montserrat' }}>
              <FiCheck className="text-yellow-600 mr-2" /> Empowering Businesses
            </li>
            <li className="flex items-center" style={{ fontFamily: 'Montserrat' }}>
              <FiCheck className="text-yellow-600 mr-2" /> Enhance Connectivity
            </li>
            <li className="flex items-center" style={{ fontFamily: 'Montserrat' }}>
              <FiCheck className="text-yellow-600 mr-2" /> Promote Sustainability
            </li>
            <li className="flex items-center" style={{ fontFamily: 'Montserrat' }}>
              <FiCheck className="text-yellow-600 mr-2" /> Inspire Growth
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
