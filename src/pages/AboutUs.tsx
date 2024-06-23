import React from 'react';
import { FaUser, FaBriefcase, FaGraduationCap } from 'react-icons/fa'; // Import icons from react-icons library

const AboutUs: React.FC = () => {
  return (
    <div className="relative h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white overflow-hidden">
      {/* Main content centered in the screen */}
      <div className="max-w-3xl bg-white bg-opacity-20 rounded-lg p-8 shadow-lg mx-auto mt-24 mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          ACM SIGCHI IITK
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-200">
          ACM SIGCHI IITK, or the Association for Computing Machinery's Special Interest Group on Computer-Human Interaction at the Indian Institute of Technology Kanpur, is a student chapter dedicated to advancing the field of human-computer interaction (HCI). It serves as a vibrant community where students, researchers, and professionals collaborate to explore innovative ways to improve interactions between people and computers. Through workshops, seminars, and research initiatives, ACM SIGCHI IITK fosters a deep understanding of HCI principles, user experience design, and usability evaluation. The chapter's activities aim to bridge the gap between theory and practice, empowering members to apply cutting-edge research in real-world applications. By nurturing a culture of creativity and technological innovation, ACM SIGCHI IITK plays a pivotal role in shaping the future of HCI both within the institute and beyond.
        </p>
      </div>

      {/* Icons positioned slightly above the bottom of the page */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-8">
        <FaUser className="text-4xl text-blue-300 hover:text-blue-100 transition duration-300 transform hover:scale-110 cursor-pointer" />
        <FaBriefcase className="text-4xl text-green-300 hover:text-green-100 transition duration-300 transform hover:scale-110 cursor-pointer" />
        <FaGraduationCap className="text-4xl text-yellow-300 hover:text-yellow-100 transition duration-300 transform hover:scale-110 cursor-pointer" />
      </div>
    </div>
  );
}

export default AboutUs;
