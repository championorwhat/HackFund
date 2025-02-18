import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8 items-center">
            <Link to="/" className="text-xl font-bold">
              Fundraiser App
            </Link>
            <Link to="/explore" className="text-gray-600 hover:text-gray-900">
              Explore
            </Link>
            <Link to="/create-fundraiser" className="text-gray-600 hover:text-gray-900">
              Create Fundraiser
            </Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar