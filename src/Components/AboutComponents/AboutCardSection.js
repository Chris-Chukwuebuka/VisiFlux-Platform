import React from 'react';

const AboutCardSection = () => {
  const cards = [
    {
      title: 'Who we are',
      content:
        'We are dedicated to harnessing the power of technology to solve real-world problems. Based in Lagos, Nigeria, we specialize in creating innovative and scalable solutions that transform businesses.',
      bgColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
    },
    {
      title: 'Our Vision',
      content:
        'Our vision is to be a global leader in technology innovation, recognized for our ability to create transformative solutions that empower individuals and businesses alike.',
      bgColor: 'bg-purple-800',
    },
    {
      title: 'Our Mission',
      content:
        'Our mission is to leverage technology to develop cutting-edge products that solve pressing problems and drive innovation. We are committed to delivering exceptional value to our clients and partners.',
      bgColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-full mx-auto"
          >
            {/* Background Block */}
            <div
              className={`absolute inset-0 -translate-x-4 -translate-y-6 ${card.bgColor} rounded-lg drop-shadow-lg`}
              style={{
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)',
              }}
            ></div>

            {/* Foreground Card */}
            <div className="relative bg-white p-6 rounded-lg shadow-xl w-full h-full">
              {/* Title */}
              <h3 className="text-xl font-semibold text-purple-800 flex items-center mb-4 relative" style={{ fontFamily: 'Montserrat' }}>
                <span className="absolute left-0 bottom-0 w-8 h-1 bg-yellow-500 -mt-1 rounded-pill"></span>
                <span className="ml-10">{card.title}</span>
              </h3>
              {/* Content */}
              <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: 'Laro' }}>
                {card.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutCardSection;
