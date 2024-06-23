import React, { ReactNode } from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

type MembersProps = {
  children?: ReactNode;
};

const members = [
  { name: 'Abhishek Pardhi', photo: 'https://via.placeholder.com/100' },
  { name: 'Sohan Kumar', photo: 'https://via.placeholder.com/100' },
  { name: 'Aditya Anand', photo: 'https://via.placeholder.com/100' },
  { name: 'Manish Tanwar', photo: 'https://via.placeholder.com/100' },
  { name: 'Akanksha Singh', photo: 'https://via.placeholder.com/100' },
  { name: 'Revati Jain', photo: 'https://via.placeholder.com/100' },
  { name: 'Srikanth K Muraleedharan', photo: 'https://via.placeholder.com/100' },
  { name: 'Vijay Kumar Thakur', photo: 'https://via.placeholder.com/100' },
  { name: 'Raghavi Jain', photo: 'https://via.placeholder.com/100' },
  { name: 'Anmol Pabla', photo: 'https://via.placeholder.com/100' },
  { name: 'Kreet Saxena', photo: 'https://via.placeholder.com/100' },
  { name: 'Vansh Jain', photo: 'https://via.placeholder.com/100' },
  { name: 'Anshuman', photo: 'https://via.placeholder.com/100' },
  { name: 'Anushka Panda', photo: 'https://via.placeholder.com/100' },
  { name: 'Jeet Singh Luthra', photo: 'https://via.placeholder.com/100' },
];

const officers = [
  { name: 'Rahul Singhal', photo: 'https://via.placeholder.com/100' },
  { name: 'Aryan Sharma', photo: 'https://via.placeholder.com/100' },
  { name: 'Vikrant Vora', photo: 'https://via.placeholder.com/100' },
  { name: 'Krishna Pateriya', photo: 'https://via.placeholder.com/100' },
  { name: 'Avi Kumar', photo: 'https://via.placeholder.com/100' },
];


const Members: React.FC<MembersProps> = () => {
  return (
    <div className="py-8 flex justify-center bg-gray-100">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Members</h1>

        <h2 className="text-3xl font-semibold text-center mb-6">Chapter Officers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {officers.map((officer, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-md">
              <img src={officer.photo} alt={officer.name} className="w-24 h-24 rounded-full mb-4" />
              <div className="text-lg font-semibold">{officer.name}</div>
              <div className="flex space-x-3 mt-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-semibold text-center mb-6">Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-md">
              <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full mb-4" />
              <div className="text-lg font-semibold">{member.name}</div>
              <div className="flex space-x-3 mt-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
