import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaComments, FaPaperPlane } from 'react-icons/fa';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form data:', formData);
    // Reset the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-800 text-white">
      <div className="w-full max-w-2xl p-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-4xl font-extrabold mb-8 text-center tracking-wider">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="relative">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              <FaUser className="inline-block mb-1 mr-2" /> Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-md focus:ring-4 focus:ring-blue-500 transition-all duration-300"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              <FaEnvelope className="inline-block mb-1 mr-2" /> Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-md focus:ring-4 focus:ring-blue-500 transition-all duration-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              <FaComments className="inline-block mb-1 mr-2" /> Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-md focus:ring-4 focus:ring-blue-500 transition-all duration-300"
              rows={5}
              placeholder="Type your message"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-block px-8 py-3 bg-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500"
            >
              <FaPaperPlane className="inline-block mr-2" /> Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
