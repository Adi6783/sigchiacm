import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type ResProps = {
  children?: React.ReactNode;
};

const resNames = [
  'Open call for volunteers',
  'Development Fund',
  'Guide for authors',
  'Guide for organisers',
  'Connect to SIGs nearby',
  'Previous teams'
];

const Respage: React.FC<ResProps> = () => {
  const [selectedRes, setSelectedRes] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleCardClick = (name: string) => {
    setSelectedRes(name);
    navigate('/info'); 
  };

  return (
    <div className="py-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-8">Resources</h1>
      <div className="flex flex-col w-full max-w-4xl">
        {resNames.map((name, index) => (
          <div
            key={index}
            className="bg-blue-500 text-white shadow-md rounded-lg p-6 text-center cursor-pointer hover:bg-blue-600 mb-4"
            onClick={() => handleCardClick(name)}
          >
            <h2 className="text-xl font-semibold">{name}</h2>
          </div>
        ))}
      </div>
      {selectedRes && (
        <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md w-full max-w-2xl text-center">
          <p className="text-lg">Displaying {selectedRes}</p>
          
          <div className="bg-white p-4 rounded-md shadow-inner">
            <p>Content for {selectedRes} goes here...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Respage;
