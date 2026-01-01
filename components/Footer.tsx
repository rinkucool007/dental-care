
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, CLINIC_NAME, getIcon } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-xl font-bold font-display">{CLINIC_NAME}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Establishing a new standard in dental excellence. Creating beautiful, healthy smiles through evidence-based dentistry and high-quality care.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
              {getIcon('Smile', 18)}
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
              {getIcon('Activity', 18)}
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li><Link to="/about" className="hover:text-teal-400 transition-colors">Who We Are</Link></li>
            <li><Link to="/services" className="hover:text-teal-400 transition-colors">Our Services</Link></li>
            <li><Link to="/consultation" className="hover:text-teal-400 transition-colors">Book Online</Link></li>
            <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Working Hours</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            {CONTACT_INFO.hours.map((h, i) => (
              <li key={i} className="flex justify-between">
                <span>{h.day}</span>
                <span className="text-teal-400">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex items-start space-x-3">
              {getIcon('MapPin', 18, 'text-teal-400 mt-1 flex-shrink-0')}
              <span>{CONTACT_INFO.address}</span>
            </li>
            <li className="flex items-center space-x-3">
              {getIcon('Phone', 18, 'text-teal-400 flex-shrink-0')}
              <span>{CONTACT_INFO.phone}</span>
            </li>
            <li className="flex items-center space-x-3">
              {getIcon('Mail', 18, 'text-teal-400 flex-shrink-0')}
              <span>{CONTACT_INFO.email}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
        <p>&copy; {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved. | <Link to="#" className="underline">Privacy Policy</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
