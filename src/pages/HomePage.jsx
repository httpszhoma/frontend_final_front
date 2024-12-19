import React from 'react';
import videoBg from '../assets/video-bg.mp4';
import logo from '../assets/logo2.png'; 

const HomePage = () => (
  <div className="bg-gray-100 font-sans">
    {/* Background Video Section */}
    <section className="relative h-[90vh]">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoBg} type="video/mp4" />
      </video>
    </section>


    {/* Centered Logo Section */}
    <section className="flex items-center justify-center bg-[#22333B] py-8">
      <div className="flex justify-center items-center">
        <img
          src={logo}
          alt="Tick & Lens"
          className="h-16 md:h-44" 
        />
      </div>
    </section>

    {/* About Us Section */}
    <section className="h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-stretch justify-center">
        {/* Image Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img
            src="/images/aboutus.jpg"
            alt="About Us"
            className="w-full h-auto object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 bg-[#F7F5F0] flex items-center p-12 rounded-lg">
          <div>
            {/* Title */}
            <h2 className="text-4xl font-bold text-[#22233B] mb-6 text-center md:text-left relative">
              ABOUT US
            </h2>

            {/* Description */}
            <p className="text-[#22333B] leading-relaxed text-lg mb-8">
              Welcome to <strong>TICK & LENS</strong>, your go-to destination for
              high-quality jewelry, watches, and eyewear. We believe that the right
              accessories can transform any outfit, and we're here to help you find
              pieces that make you feel confident, stylish, and unique.
            </p>
            <p className="text-[#22333B] leading-relaxed text-lg">
              Our carefully curated collection features timeless designs, precision,
              elegance, and quality. At <strong>TICK & LENS</strong>, customer
              satisfaction is our top priority. We are committed to delivering
              exceptional service and ensuring your favorite accessories are
              delivered right to your door.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
