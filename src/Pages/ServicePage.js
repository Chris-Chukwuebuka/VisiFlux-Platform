import React from 'react'
import ServiceHeroSection from '../Components/ServiceComponents/ServiceHeroSection'
import ServiceCardSection from '../Components/ServiceComponents/ServiceCardSection'
import ServiceBanner from '../Components/ServiceComponents/ServiceBanner'

const ServicePage = () => {
  return (
    <div className='mt-24 mb-20 '>
      {/* Service Hero Section   */}
      <ServiceHeroSection />
      {/* Service Card Section */}
      <ServiceCardSection />
      {/* Service Banner */}
      <ServiceBanner />
      
    </div>
  )
}

export default ServicePage