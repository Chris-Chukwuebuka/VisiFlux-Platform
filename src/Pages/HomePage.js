import React from 'react'
import HeroSection from '../Components/HomeComponents/HeroSection'
import BannerSection from '../Components/HomeComponents/BannerSection'
import ServiceSection from '../Components/HomeComponents/ServicesSection'
import WhyChooseUs from '../Components/HomeComponents/WhyChooseUsSection'
import WhatWeDoSection from '../Components/HomeComponents/WhatWeDoSection'
import OurTeamSection from '../Components/HomeComponents/OurTeamSection'  

const HomePage = () => {
  return (
    <div className="home-page mt-5" >
      {/* HeroSection */}
      <HeroSection />
      {/* Banner Section */}
      <BannerSection />
      {/* service section */}
      <ServiceSection />
      {/* why choose us section */}
      <WhyChooseUs />
      {/* what we do section */}
      <WhatWeDoSection />
      {/* our team section */}
      <OurTeamSection />
    </div>
  )
}

export default HomePage