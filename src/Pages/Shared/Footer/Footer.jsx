import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted online marketplace delivering quality products with exceptional
              service. Experience seamless shopping with secure payments and fast delivery.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <HiLocationMarker className="text-lg flex-shrink-0" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              {['About Us', 'Shop', 'Track Order', 'Returns & Refunds', 'FAQs'].map((item) => (
                <li key={item}>
                  <a className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm cursor-pointer flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Customer Service
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              {['Contact Us', 'Shipping Policy', 'Terms & Conditions', 'Privacy Policy', 'Payment Methods'].map((item) => (
                <li key={item}>
                  <a className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm cursor-pointer flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <div className="space-y-4 mb-6">
              <a href="mailto:support@dokanhub.com" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors text-sm group">
                <HiMail className="text-xl text-blue-400" />
                <span>support@dokanhub.com</span>
              </a>
              <a href="tel:+8801234567890" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors text-sm group">
                <HiPhone className="text-xl text-blue-400" />
                <span>+880 123 456 7890</span>
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { icon: FaFacebook, color: 'hover:bg-blue-600' },
                  { icon: FaInstagram, color: 'hover:bg-pink-600' },
                  { icon: FaLinkedin, color: 'hover:bg-blue-700' },
                  { icon: FaGithub, color: 'hover:bg-gray-700' }
                ].map(({ icon: Icon, color }, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label={`social-${index}`}
                    className={`w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center ${color} transition-all duration-300 cursor-pointer transform hover:scale-110`}
                  >
                    <Icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} DokanHub. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-400">
            Crafted with <span className="text-red-500">♥</span> by{" "}
            <NavLink to="https://www.linkedin.com/in/ah-abir" target="_blank" className="text-blue-400 font-medium hover:underline">
            <span className="text-blue-400 font-medium">Abir Hasan</span>
            </NavLink>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;