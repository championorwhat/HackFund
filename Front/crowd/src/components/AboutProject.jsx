// src/components/AboutProject.jsx
import { Link } from 'react-router-dom'

const AboutProject = () => {
  return (
    
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-green-50 p-8 rounded-lg shadow-md mb-12">
        <h1 className="text-4xl font-bold mb-6 text-green-800">About HackFund</h1>
        <p className="text-xl mb-6">
          Bridging traditional wisdom with modern funding solutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Our platform enables access to life-saving treatments. It extends opportunities to those who cannot afford them.
            Funds provide immediate relief for patients and their families. This alleviates the financial burden of medical treatment.
          </p>
          <p className="text-gray-700 mb-4">
            It connects healthcare practitioners, researchers, and startups with people who wish
            to offer support through crowdfunding and investment.
          </p>
          <p className="text-gray-700 mb-4">
            We believe that financial constraints should never be a barrier to receiving quality healthcare or launching innovative ideas.
            Through community-driven support, we aim to democratize access to funding and create a world where everyone has 
            the opportunity to thrive, heal, and innovate.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img 
            src="/assets/mission.jpg" 
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
              <span className="text-3xl">🏥</span>
            </div>
            <h3 className="font-semibold mb-2">Healthcare Funding</h3>
            <p className="text-gray-600">
              Supporting patients with medical expenses, treatments, and recovery needs through community contributions
            </p>
          </div>
          <div className="text-center p-4">
            <div className="w-24 h-24 mx-auto bg-blue-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">💡</span>
            </div>
            <h3 className="font-semibold mb-2">Startup Innovation</h3>
            <p className="text-gray-600">
              Empowering entrepreneurs to bring their healthcare and wellness solutions to market
            </p>
          </div>
          <div className="text-center p-4">
            <div className="w-24 h-24 mx-auto bg-amber-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">🤝</span>
            </div>
            <h3 className="font-semibold mb-2">Community Support</h3>
            <p className="text-gray-600">
              Building connections between those in need and individuals ready to help through secure, transparent funding
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