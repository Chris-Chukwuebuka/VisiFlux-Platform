import React from "react";
import AboutHeroSection from "../Components/AboutComponents/AboutHeroSection";
import AboutCardSection from "../Components/AboutComponents/AboutCardSection";
import AboutHistorySection from "../Components/AboutComponents/HistorySection";

const AboutPage = () => {
  return (
    <div className="container-fluid mt-10 mb-20 md:mt-5 container  ">
      {/* About Section hero section */}
      <AboutHeroSection />
      {/* About card section */}
      <AboutCardSection />
      {/* About History section */}
      <AboutHistorySection />
    </div>
  );
};

export default AboutPage;
