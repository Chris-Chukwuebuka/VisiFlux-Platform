import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Assets/VisiFlux.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Close the mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false); // Close menu on scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Determine the button text based on the current path
  const buttonText = location.pathname === "/services" ? "Let's Talk" : "Get Started";

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-20 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-gray-800 no-underline">
          <img src={Logo} alt="VisiFlux" className="w-32" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-lg text-gray-800 hover:text-yellow-500 no-underline"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-lg text-gray-800 hover:text-yellow-500 no-underline"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-lg text-gray-800 hover:text-yellow-500 no-underline"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-lg text-gray-800 hover:text-yellow-500 no-underline"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 flex flex-col items-center space-y-4">
            <Link
              to="/"
              className="block text-lg text-gray-900 hover:text-yellow-500 px-4 py-2 no-underline font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-lg text-gray-900 hover:text-yellow-600 px-4 py-2 no-underline font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block text-lg text-gray-900 hover:text-yellow-600 px-4 py-2 no-underline font-medium"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block text-lg text-gray-900 hover:text-yellow-600 px-4 py-2 no-underline font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>

            {/* Button at the end */}
            <Link
              to="/get-started"
              className="mt-4 bg-purple-950 font-medium text-white px-6 py-2 rounded-full text-lg hover:bg-yellow-600 transition no-underline"
              onClick={toggleMenu}
            >
              {buttonText}
            </Link>
          </div>
        )}

        {/* Desktop Button */}
        <Link
          to="/get-started"
          className="hidden md:inline-block bg-purple-950 font-medium text-white px-6 py-2 rounded-full text-lg hover:bg-yellow-600 transition no-underline"
        >
          {buttonText}
        </Link>
      </div>
    </header>
  );
};

export default Header;
