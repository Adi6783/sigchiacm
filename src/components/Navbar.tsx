
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();

  // Function to check if the current path matches the link path
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-blue-900 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">SIGCHI</h1>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className={`text-white ${isActive('/') ? 'text-green-300' : ''} hover:text-green-300 transition`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              className={`text-white ${isActive('/contactus') ? 'text-green-300' : ''} hover:text-green-300 transition`}
            >
              Contact us
            </Link>
          </li>
          <li>
            <Link
              to="/members"
              className={`text-white ${isActive('/members') ? 'text-green-300' : ''} hover:text-green-300 transition`}
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              to="/res"
              className={`text-white ${isActive('/res') ? 'text-green-300' : ''} hover:text-green-300 transition`}
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className={`text-white ${isActive('/aboutus') ? 'text-green-300' : ''} hover:text-green-300 transition`}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/faqs"
              className={`text-white ${isActive('/faqs') ? 'text-green-300' : ''} hover:text-green-300 transition`}
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              to="/mock-coding-tests"
              className={`text-white ${isActive('/mock-coding-tests') ? 'text-green-300' : ''} hover:text-green-300 transition`}
            >
              Mock Coding Tests
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
