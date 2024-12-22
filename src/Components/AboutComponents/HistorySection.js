import React from 'react';

const HistorySection = () => {
  const historyData = [
    {
      title: '',
      content:
        'VisiFlux was founded in 2024 with a single goal in mind: to revolutionize the way businesses leverage technology to solve real-world challenges. From the very beginning, we’ve been driven by a passion for innovation and a commitment to creating solutions that make a meaningful impact.',
    },
    {
      title: '',
      content:
        'In 2024, VisiFlux was officially incorporated under the CAC Act in Lagos, Nigeria. Our first breakthrough came with the launch of our custom software solutions for small businesses, enabling them to automate and streamline their operations. This was followed by the successful development of a mobile app for a major retail client, which helped us establish our presence in the industry.',
    },
    {
      title: '',
      content:
        'Like many startups, our early days weren’t without their challenges. We faced resource limitations and stiff competition, but our dedication to delivering quality solutions and our drive to innovate helped us stay ahead. Over time, our team grew stronger, and we developed a reputation for delivering top-tier, custom solutions.',
    },
    {
      title: '',
      content:
        'In 2025, we expanded our service offerings to include web development and IT consultation services. That same year, we built a strong partnership with several startups, further cementing our reputation as a trusted technology partner.',
    },
    {
      title: '',
      content:
        'Today, VisiFlux is proud to serve a diverse range of clients, from startups to established enterprises. Our focus remains on creating innovative solutions in software development, mobile app development, web design, and IT consultation services. With a growing team of passionate professionals, we are committed to pushing the boundaries of technology and driving business transformations.',
    },
  ];

  return (
    <section className="py-12 px-6 bg-white container">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-purple-800 text-center mb-12" style={{ fontFamily: 'Montserrat' }}>
          Our History
        </h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-800 h-full hidden lg:block"></div>
          <div className="space-y-12 lg:space-y-0">
            {historyData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center lg:flex-row ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >

                {/* Text Box */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full lg:w-5/12 mb-8 lg:mb-0 lg:max-w-md ">
                  <p className="text-gray-700 text-sm leading-relaxed container" style={{ fontFamily: 'Lora' }}>{item.content}</p>
                </div>

                {/* Horizontal Line (only on large screens) */}
                <div className="hidden lg:block lg:w-1 lg:h-4 bg-purple-800"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
