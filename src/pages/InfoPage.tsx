import React from 'react';
import { FaUser, FaBriefcase, FaGraduationCap } from 'react-icons/fa'; // Import icons from react-icons library

const InfoPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      {/* Central message */}
      <div className="text-4xl font-bold text-center mb-8">
        This page has no information for now
      </div>

      {/* Icons with hover effects */}
      <div className="flex items-center justify-center space-x-8">
        <FaUser className="text-8xl text-blue-300 hover:text-blue-100 transition duration-300 transform hover:scale-110 cursor-pointer" />
        <FaBriefcase className="text-8xl text-green-300 hover:text-green-100 transition duration-300 transform hover:scale-110 cursor-pointer" />
        <FaGraduationCap className="text-8xl text-yellow-300 hover:text-yellow-100 transition duration-300 transform hover:scale-110 cursor-pointer" />
      </div>
    </div>
  );
}

export default InfoPage;
