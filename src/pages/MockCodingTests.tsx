import React from 'react';
import { useNavigate } from 'react-router-dom';

const MockCodingTests: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="py-8 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Mock Coding Tests</h1>
        
        
        <div className="mb-6">
          <label htmlFor="programmingLanguage" className="block text-lg font-semibold mb-2">Select Programming Language:</label>
          <select id="programmingLanguage" className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none">
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
          </select>
        </div>
        
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Coding Challenge</h2>
          <p className="text-gray-600 mb-4">Description of the coding challenge...</p>
          <div className="flex justify-between items-center">
          <button onClick={() => navigate("/codeeditor")} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">Start Test</button>

            <span className="text-sm text-gray-500">Time Left: 45:00</span>
          </div>
        </div>

       
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Previous Tests</h2>
          <ul className="divide-y divide-gray-200">
            <li className="py-4">
              <div className="flex justify-between items-center">
                <span className="text-lg">Test 1</span>
                <span className="text-sm text-gray-500">Completed</span>
              </div>
            </li>
            <li className="py-4">
              <div className="flex justify-between items-center">
                <span className="text-lg">Test 2</span>
                <span className="text-sm text-gray-500">Completed</span>
              </div>
            </li>
            <li className="py-4">
              <div className="flex justify-between items-center">
                <span className="text-lg">Test 3</span>
                <span className="text-sm text-gray-500">In Progress</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MockCodingTests;
