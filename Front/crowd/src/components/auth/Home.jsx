// src/components/Home.jsx
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-green-600 text-white p-12 rounded-lg mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to HackFund</h1>
        <p className="text-xl mb-6">
          "All for one and one for all!"
        </p>
        <p className="mb-8">
          Discover startups in need, attain the power to create your own and support initiatives for the better through our platform.
        </p>
        <Link
          to="/about-project"
          className="inline-block bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
        >
          Learn About Our Project
        </Link>
      </div>

      <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Funding Category</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="border rounded-lg p-8 shadow-lg bg-green-50 hover:bg-green-100 transition duration-300">
          <div className="flex justify-center mb-4">
            <img
              src="/assets/healthcare.png" 
              alt="Healthcare"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-center text-green-800">Healthcare Funding</h3>
          <p className="text-gray-700 mb-6">
            Support medical research, patient care initiatives, and healthcare innovations through
            crowdfunding. Help make healthcare accessible to everyone.
          </p>
          <div className="text-center">
            <Link
              to="/healthcare-funding"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full"
            >
              Explore Healthcare Projects
            </Link>
          </div>
        </div>

        <div className="border rounded-lg p-8 shadow-lg bg-green-50 hover:bg-green-100 transition duration-300">
          <div className="flex justify-center mb-4">
            <img
              src="/assets/startup.png"
              alt="Startup"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-center text-green-800">Startup Funding</h3>
          <p className="text-gray-700 mb-6">
            Invest in promising startups that are revolutionizing herbal medicine, ayurveda,
            education, financial awareness and so much more. Be part of the green revolution.
          </p>
          <div className="text-center">
            <Link
              to="/startup-funding"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full"
            >
              Discover Startup Opportunities
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home