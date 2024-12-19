import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Contact Page Section */}
      <section className="h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/contactus.jpg" // Ensure this path is correct
              alt="Contact Us"
              className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Contact Details Section */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            {/* Title */}
            <h2 className="text-4xl font-bold text-[#22333B] mb-6 text-center md:text-left">
              CONTACT US
            </h2>

            {/* Description */}
            <p className="text-[#22333B] leading-relaxed mb-6">
              We’re here to help! Whether you have a question about our products, need assistance
              with an order, or just want to say hello, don’t hesitate to reach out to us.
            </p>

            {/* Store Hours */}
            <div className="mb-6">
              <h3 className="text-[#22333B] font-semibold text-lg mb-2">OUR STORE IS OPEN 24/7</h3>
              <p className="text-[#22333B] leading-relaxed">
                Shop with us anytime, anywhere! We’re always ready to provide you with the best
                shopping experience.
              </p>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-[#22333B] font-semibold text-lg mb-2">CONTACT DETAILS</h3>
              <p className="text-[#22333B] mb-2">
                <strong>Tel:</strong> 8 (775) 946 70 52
              </p>
              <p className="text-[#22333B] mb-6">
                <strong>Email:</strong> tickandlens@mail.com
              </p>

              <p className="text-[#22333B] leading-relaxed">
                Feel free to contact us via phone or email, and our team will get back to you as
                quickly as possible. We look forward to hearing from you!
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start space-x-6 mt-6">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22333B] text-2xl hover:text-gray-600"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22333B] text-2xl hover:text-gray-600"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22333B] text-2xl hover:text-gray-600"
              >
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
