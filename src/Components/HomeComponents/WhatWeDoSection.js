import React from 'react';

const WhatWeDoSection = () => {
  const features = [
    {
      id: 1,
      title: 'Creating Solutions',
      description:
        'Designing and implementing technology products that address evolving needs effectively.',
      icon: '💡',
    },
    {
      id: 2,
      title: 'Innovation and Research',
      description:
        'Committed to fostering innovation through research, collaboration, and solving global challenges.',
      icon: '🔍',
    },
    {
      id: 3,
      title: 'Partnership and Funding',
      description:
        'Collaborating with stakeholders to explore, secure funding, and ensure successful outcomes.',
      icon: '🤝',
    },
  ];

  return (
    <div className=" text-white py-12" style={{ backgroundColor: '#3F0B55' }}>
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'white', fontSize: '2rem', fontFamily: 'Montserrat' }}>What We Do</h2>

      {/* Feature Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 max-w-7xl mx-auto px-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white text-gray-700 rounded-lg shadow-md p-6 w-full lg:w-1/3 flex flex-col"
          >
            {/* Icon and Title Side-by-Side */}
            <div className="flex items-center mb-4">
              <div className=" text-4xl mr-3" >{feature.icon}</div>
              <h3 className="font-bold text-lg " style={{ color: '#3F0B55', fontSize: '1.2rem', fontFamily: 'Montserrat' }}>
                {feature.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-black text-sm leading-relaxed ps-12" style={{ fontFamily: 'Lora', fontWeight: '700' }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDoSection;
