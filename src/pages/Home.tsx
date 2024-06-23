import React, { ReactNode } from 'react';
import img1 from "../images/spoimage.webp";
import img2 from "../images/spo2.svg";
import { useNavigate } from 'react-router-dom';

type HomeProps = {
  children?: ReactNode;
};

const Home: React.FC<HomeProps> = () => {
  const navigate = useNavigate();
  return (
    <div className="py-8 bg-gradient-to-b from-blue-900 to-blue-600">
      <div className="container mx-auto px-4 flex justify-between items-start">
        <div className="w-3/5">
          <div className="py-8 text-white">
            <h1 className="text-4xl font-bold text-center mb-4">IIT Kanpur ACM SIGCHI student chapter</h1>
            <p className="text-lg text-center">Special Interest Group on Computer-Human Interaction</p>
          </div>
          
          <div className="text-center">
            <button onClick={()=>{
              navigate("/contactus")
            }} className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 hover:animate-expand-contract focus:outline-none">
              Contact Us
            </button>
          </div>

          <div className="mt-12 text-white">
            <h2 className="text-3xl font-semibold mb-4">Upcoming Events</h2>
            <p className="mb-6">Stay tuned for the latest updates</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-red-500 p-4 rounded-lg shadow-md hover:animate-oscillate">
                <h3 className="text-lg font-semibold mb-2">28th June</h3>
                <p>Venue: L-20, Time: 6 PM IST</p>
              </div>
              <div className="bg-red-500 p-4 rounded-lg shadow-md hover:animate-oscillate">
                <h3 className="text-lg font-semibold mb-2">3rd July</h3>
                <p>Venue: Zoom, Time: 7 PM IST</p>
              </div> 
              <div className="bg-red-500 p-4 rounded-lg shadow-md hover:animate-oscillate">
                <h3 className="text-lg font-semibold mb-2">5th July</h3>
                <p>Venue: OAT, Time: 7 PM IST</p>
              </div> 
            </div>
          </div>

          <div className="mt-12 text-violet-500">
            <h2 className="text-3xl font-semibold mb-4">Past Events</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-yellow-300 p-4 rounded-lg shadow-md hover:animate-oscillate">
                <h3 className="text-lg font-semibold mb-2">Monthly chapter meet, june 3</h3>
                <p>OAT</p>
              </div>
              <div className="bg-yellow-300 p-4 rounded-lg shadow-md hover:animate-oscillate">
                <h3 className="text-lg font-semibold mb-2">Workshop, may 25</h3>
                <p>L-20</p>
              </div>
              <div className="bg-yellow-300 p-4 rounded-lg shadow-md hover:animate-oscillate">
                <h3 className="text-lg font-semibold mb-2">Workshop, may 15</h3>
                <p>L-18</p>
              </div>
              <div className="bg-yellow-300 p-4 rounded-lg shadow-md hover:animate-oscillate">
                <h3 className="text-lg font-semibold mb-2">MCM, may 5</h3>
                <p>Main Ground</p>
              </div>
              <div className="bg-yellow-300 p-4 rounded-lg shadow-md hover:animate-oscillate">
                <h3 className="text-lg font-semibold mb-2">Workshop</h3>
                <p>OAT</p>
              </div>
              <div className="bg-yellow-300 p-4 rounded-lg shadow-md hover:animate-oscillate">
                <h3 className="text-lg font-semibold mb-2">Workshop</h3>
                <p>OAT</p>
              </div>
              <div className="bg-yellow-300 p-4 rounded-lg shadow-md hover:animate-oscillate">
                <h3 className="text-lg font-semibold mb-2">Workshop</h3>
                <p>OAT</p>
              </div>
              <div className="bg-yellow-300 p-4 rounded-lg shadow-md hover:animate-oscillate">
                <h3 className="text-lg font-semibold mb-2">Workshop</h3>
                <p>OAT</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-white">
            <h2 className="text-3xl font-semibold mb-4">Connect with Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-white">Twitter</a>
              <a href="#" className="text-blue-300 hover:text-white">Facebook</a>
              <a href="#" className="text-blue-300 hover:text-white">LinkedIn</a>
            </div>
          </div>

          <div className="mt-12 text-white">
            <h2 className="text-3xl font-semibold mb-4">What team does</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-800 rounded-lg p-6 hover:animate-oscillate">
                <h3 className="text-xl font-semibold mb-2">Development</h3>
                <p>Frontend and Backend Development</p>
              </div>
              <div className="bg-blue-800 rounded-lg p-6 hover:animate-oscillate">
                <h3 className="text-xl font-semibold mb-2">Stock Exchange Simulation</h3>
                <p>Study the market like never before</p>
              </div>
              <div className="bg-blue-800 rounded-lg p-6 hover:animate-oscillate">
                <h3 className="text-xl font-semibold mb-2">Machine learning</h3>
                <p>Contribute through ML and AI</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-2/5 mt-12 pt-12">
          <img src={img1} alt="SPO" className=" pt-12 mt-12" />
          <img src={img2} alt="SPO" className="  pt-12 mt-12" />
        </div>
      </div>
    </div>
  );
};

export default Home;
