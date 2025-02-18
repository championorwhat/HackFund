// src/components/AboutProject.jsx
import { Link } from 'react-router-dom'

const AboutProject = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-green-50 p-8 rounded-lg shadow-md mb-12">
        <h1 className="text-4xl font-bold mb-6 text-green-800">About PharmaFlow Funding</h1>
        <p className="text-xl mb-6">
          Bridging traditional wisdom with modern funding solutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            PharmaFlow Funding aims to create a bridge between traditional healthcare wisdom and modern
            funding mechanisms. We believe that India's rich heritage of natural medicine - Ayurveda, 
            Yoga, Unani, and Naturopathy - deserves proper funding and support to reach its full potential
            in the modern world.
          </p>
          <p className="text-gray-700 mb-4">
            Our platform connects healthcare practitioners, researchers, and startups with people who want
            to support natural and traditional medicine through crowdfunding and investment.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img 
            src="/images/mission.jpg" 
            alt="Our Mission" 
            className="rounded-lg shadow-md max-h-80 object-cover"
          />
        </div>
      </div>

      <div className="bg-green-50 p-8 rounded-lg shadow-md mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-green-700 text-center">Our Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-4">
            <div className="w-24 h-24 mx-auto bg-green-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">🌿</span>
            </div>
            <h3 className="font-semibold mb-2">Ayurveda</h3>
            <p className="text-gray-600">
              Supporting the world's oldest holistic healing system through modern funding
            </p>
          </div>
          <div className="text-center p-4">
            <div className="w-24 h-24 mx-auto bg-blue-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">🧘</span>
            </div>
            <h3 className="font-semibold mb-2">Yoga & Naturopathy</h3>
            <p className="text-gray-600">
              Investing in natural healing practices that promote wellness and prevention
            </p>
          </div>
          <div className="text-center p-4">
            <div className="w-24 h-24 mx-auto bg-amber-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">🔬</span>
            </div>
            <h3 className="font-semibold mb-2">Unani</h3>
            <p className="text-gray-600">
              Preserving and modernizing traditional healing systems from the Middle East
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-green-700">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="border rounded-lg p-6 shadow-sm bg-white">
            <div className="text-3xl font-bold text-green-600 mb-2">01</div>
            <h3 className="font-semibold mb-2">Create Your Project</h3>
            <p className="text-gray-600">
              Submit your healthcare initiative or startup idea on our platform
            </p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm bg-white">
            <div className="text-3xl font-bold text-green-600 mb-2">02</div>
            <h3 className="font-semibold mb-2">Get Verified</h3>
            <p className="text-gray-600">
              Our team verifies your credentials and project legitimacy
            </p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm bg-white">
            <div className="text-3xl font-bold text-green-600 mb-2">03</div>
            <h3 className="font-semibold mb-2">Receive Funding</h3>
            <p className="text-gray-600">
              Supporters contribute to your project through our secure platform
            </p>
          </div>
          <div className="border rounded-lg p-6 shadow-sm bg-white">
            <div className="text-3xl font-bold text-green-600 mb-2">04</div>
            <h3 className="font-semibold mb-2">Make It Happen</h3>
            <p className="text-gray-600">
              Use the funds to bring your healthcare innovation to life
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-green-700">Ready to Get Started?</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link
            to="/healthcare-funding"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg"
          >
            Browse Healthcare Projects
          </Link>
          <Link
            to="/startup-funding"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg"
          >
            Explore Startup Opportunities
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutProject