// src/components/StartupFunding.jsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const StartupFunding = () => {
  const [startups, setStartups] = useState([])
  
  useEffect(() => {
    // This would be an API call in a real application
    const mockStartups = [
      {
        id: 101,
        title: 'EcoByte',
        description: 'AI-powered analytics for optimizing energy consumption and reducing carbon footprints.',
        goal: 150000,
        raised: 87000,
        category: 'Sustainable Dev',
        image: '/assets/ecobyte.webp'
      },
      {
        id: 102,
        title: 'FinGuard',
        description: 'Next-gen cybersecurity for fintech platforms, ensuring secure transactions and fraud detection.',
        goal: 200000,
        raised: 120000,
        category: 'FinTech',
        image: '/assets/fintechr.webp'
      },
      {
        id: 103,
        title: 'AgriGenix',
        description: 'Smart AI-driven solutions for precision farming and sustainable agriculture.',
        goal: 75000,
        raised: 45000,
        category: 'Agri-Tech',
        image: '/assets/agritech.webp'
      },
      {
        id: 104,
        title: 'MediSync',
        description: 'A decentralized platform that securely connects patients and healthcare providers using blockchain.',
        goal: 120000,
        raised: 60000,
        category: 'Service Platform',
        image: '/assets/medtech.webp'
      }
    ]
    
    setStartups(mockStartups)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-green-50 p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4 text-green-800">Startup Funding Opportunities</h1>
        <p className="text-gray-700 mb-4">
          Invest in innovative startups focused on natural medicine, wellness, and health technology.
        </p>
        <Link
          to="/create-fundraiser"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          List Your Startup
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {startups.map((startup) => (
          <div key={startup.id} className="border rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 overflow-hidden">
              <img
                src={startup.image}
                alt={startup.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 text-sm rounded-full mb-2">
                {startup.category}
              </span>
              <h2 className="text-xl font-semibold mb-2">{startup.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-2">{startup.description}</p>
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${(startup.raised / startup.goal) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>${startup.raised.toLocaleString()} raised</span>
                  <span>${startup.goal.toLocaleString()} goal</span>
                </div>
              </div>
              <Link
                to={`/fundraiser/${startup.id}`}
                className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StartupFunding