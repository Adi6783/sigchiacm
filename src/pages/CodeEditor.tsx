import React, { useState } from 'react';

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>('');

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-900 text-white p-4">
        <h1 className="text-2xl font-bold mb-4">Explorer</h1>
        <ul className="space-y-2">
          <li className="text-blue-300 hover:text-white cursor-pointer">File 1</li>
          <li className="text-blue-300 hover:text-white cursor-pointer">File 2</li>
          <li className="text-blue-300 hover:text-white cursor-pointer">File 3</li>
          
        </ul>
      </div>

     
      <div className="border-l border-gray-700"></div>

    
      <div className="w-4/5 bg-gray-800 relative">
        <div className="bg-gray-900 p-2 rounded-t-lg">
          <div className="flex justify-between">
            <div className="text-gray-200">File</div>
            <div>
              <button className="text-green-500 hover:text-white mr-2">Edit</button>
              <button className="text-green-500 hover:text-white">Run</button>
            </div>
          </div>
        </div>
        <div className="p-4">
          <textarea
            className="w-full h-full bg-gray-900 text-white p-4 resize-none"
            style={{ minHeight: 'calc(100vh - 90px)' }} 
            value={code}
            onChange={handleCodeChange}
            placeholder="Start typing your code here..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
