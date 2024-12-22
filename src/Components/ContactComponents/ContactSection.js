import React, { useState } from 'react';
import ContactImg from '../../Assets/ContactUsImg.png';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import { PuffLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: null });

    try {
      const response = await fetch('https://formspree.io/f/xyzyrwlk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({ submitting: false, success: true });
        toast.success('Message Sent Successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus({ submitting: false, success: false });
      toast.error('Failed to send message. Please try again later.');
    }
  };

  return (
    <div>
      {/* Image Section */}
      <div className="w-full mb-6">
        <img
          src={ContactImg}
          alt="Contact Illustration"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col lg:flex-row bg-gray-100 p-6 lg:p-12 max-w-5xl mx-auto rounded-lg shadow-lg">
        {/* Sidebar */}
        <div className="bg-purple-900 text-white w-full lg:w-1/3 p-8 rounded-t-lg lg:rounded-l-lg lg:rounded-t-none">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <div className="mb-4">
            <div className="flex items-center mb-4">
              <span className="bg-yellow-500 text-purple-900 p-2 rounded-full mr-3">
                <FaMapMarkerAlt size={20} />
              </span>
              <span className="text-sm">
                <strong className="font-bold">ADDRESS</strong>
                <br /> 123 Tech Avenue, Lagos, Nigeria
              </span>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-4">
              <span className="bg-yellow-500 text-purple-900 p-2 rounded-full mr-3">
                <FaPhoneAlt size={20} />
              </span>
              <span className="text-sm">
                <strong className="font-bold">PHONE</strong>
                <br /> +234 123 456 7890
              </span>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-4">
              <span className="bg-yellow-500 text-purple-900 p-2 rounded-full mr-3">
                <FaEnvelope size={20} />
              </span>
              <span className="text-sm">
                <strong className="font-bold">EMAIL</strong>
                <br />
                info@visiflux.com
              </span>
            </div>
          </div>
          <div className="mt-4 flex space-x-4">
            <a href="##" className="text-yellow-500">
              <FaFacebook size={20} />
            </a>
            <a href="##" className="text-yellow-500">
              <FaTwitter size={20} />
            </a>
            <a href="##" className="text-yellow-500">
              <FaLinkedin size={20} />
            </a>
            <a href="##" className="text-yellow-500">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white w-full lg:w-2/3 p-8 rounded-b-lg lg:rounded-r-lg lg:rounded-b-none">
          <h2 className="text-2xl font-bold mb-6 text-purple-900">Get in Touch with VisiFlux</h2>
          <div className="w-20 h-1 rounded-pill mb-6" style={{ background: 'linear-gradient(to right, #C0880E, #FFB617, #A07009)' }}></div> {/* Gold line */}
          <p className="text-gray-500 mb-6 font-medium text-sm">
            We’re here to answer your questions and help with your technology needs.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-1/2 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-yellow-500 font-bold"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-1/2 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-yellow-500 font-bold"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-yellow-500 font-bold"
            ></textarea>
            <button
              type="submit"
              disabled={formStatus.submitting}
              className={`bg-yellow-600 text-black font-medium rounded-full px-6 py-2 hover:bg-yellow-700 transition ${formStatus.submitting && 'opacity-50 cursor-not-allowed'}`}
            >
              {formStatus.submitting ? <PuffLoader size={20} color="#fff" /> : 'SEND NOW'}
            </button>
          </form>
        </div>
      </div>

      {/* Toastify container */}
      <ToastContainer />
    </div>
  );
};

export default ContactSection;
