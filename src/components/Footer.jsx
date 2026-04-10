import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Heart className="text-primary-500 fill-primary-500" size={24} />
              <span className="text-xl font-bold text-white tracking-tight">
                Akash Kashyap <span className="text-primary-500">Foundation</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Empowering communities and individual lives through sustainable development, education, and healthcare initiatives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-500 transition-colors"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-primary-500 transition-colors"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-primary-500 transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-primary-500 transition-colors"><FaLinkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-primary-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary-500 transition-colors">Our Mission</Link></li>
              <li><Link to="/contact" className="hover:text-primary-500 transition-colors">Get Involved</Link></li>
              <li><Link to="/donate" className="hover:text-primary-500 transition-colors">Ways to Give</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold mb-6">Our Programs</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary-500 transition-colors">Child Education</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Clean Water Access</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Healthcare Services</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Women Empowerment</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-500 shrink-0" />
                <span>123 Kindness Way, Suite 101, New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-500 shrink-0" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-500 shrink-0" />
                <span>contact@hopegivers.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:row items-center justify-between text-xs space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Akash Kashyap Foundation. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
