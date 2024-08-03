import React from 'react';

const ContactUsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <ul className="mb-4">
            <li className="flex items-center mb-2">
              <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 3.81 1.71 7.21 4.4 9.5l.6.5.6-.5C10.29 19.21 12 15.81 12 12c0-2.07-.64-3.98-1.73-5.56L12 9l-2.27 2.44C8.64 8.02 10.48 6 12 6c1.52 0 3.36 2.02 3.27 5.44L16 9l1.13-.56C15.64 8.02 13.81 6 12 6z"></path>
              </svg>
              <span className="text-gray-700">Email: <a href="mailto:rexatechin@gmail.com" className="text-blue-500">rexatechin@gmail.com</a></span>
            </li>
            <li className="flex items-center mb-2">
              <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 3.81 1.71 7.21 4.4 9.5l.6.5.6-.5C10.29 19.21 12 15.81 12 12c0-2.07-.64-3.98-1.73-5.56L12 9l-2.27 2.44C8.64 8.02 10.48 6 12 6c1.52 0 3.36 2.02 3.27 5.44L16 9l1.13-.56C15.64 8.02 13.81 6 12 6z"></path>
              </svg>
              <span className="text-gray-700">Phone: <a href="tel:+919207421202" className="text-blue-500">+91 9207421202</a></span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 3.81 1.71 7.21 4.4 9.5l.6.5.6-.5C10.29 19.21 12 15.81 12 12c0-2.07-.64-3.98-1.73-5.56L12 9l-2.27 2.44C8.64 8.02 10.48 6 12 6c1.52 0 3.36 2.02 3.27 5.44L16 9l1.13-.56C15.64 8.02 13.81 6 12 6z"></path>
              </svg>
              <span className="text-gray-700">Address: MALIYAKKAL HOUSE, VELLOOR, VELLOOR, Malappuram, Pookkottur, Vellur, Kerala, India, 676517</span>
            </li>
            <li className="flex items-center mt-2">
              <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 3.81 1.71 7.21 4.4 9.5l.6.5.6-.5C10.29 19.21 12 15.81 12 12c0-2.07-.64-3.98-1.73-5.56L12 9l-2.27 2.44C8.64 8.02 10.48 6 12 6c1.52 0 3.36 2.02 3.27 5.44L16 9l1.13-.56C15.64 8.02 13.81 6 12 6z"></path>
              </svg>
              <span className="text-gray-700">Legal Name: Pixa Ai</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
