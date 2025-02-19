import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clearing auth tokens)
    navigate('/login');
  };

  return (
    <nav className="bg-emerald-900 shadow-lg backdrop-blur-100xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left Side Links */}
          <div className="flex space-x-8 items-center">
            <Link to="/" className="text-xl font-bold text-white">
              HackFund
            </Link>
            <Link to="/about-project" className="text-white hover:text-gray-900">
              About Us
            </Link>
            <Link to="/dashboard" className="text-white hover:text-gray-900">
              Dashboard
            </Link>
            <Link to="/create-fundraiser" className="text-white hover:text-gray-900">
              Create Fundraiser
            </Link>
          </div>

          {/* Logout Button on Right */}
          <button
            onClick={handleLogout}
            className="bg-emerald-950 text-white px-4 py-2 rounded-md hover:bg-emerald-800 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
