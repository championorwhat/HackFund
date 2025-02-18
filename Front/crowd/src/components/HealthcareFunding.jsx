// src/components/HealthcareFunding.jsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const HealthcareFunding = () => {
  const [fundraisers, setFundraisers] = useState([])
  
  useEffect(() => {
    // This would be an API call in a real application
    const mockHealthcareFundraisers = [
      {
        id: 1,
        title: 'Traditional Medicine Research Center',
        description: 'Support our research on ancient herbal remedies for modern diseases',
        goal: 75000,
        raised: 42000,
        category: 'Research',
        image: '/images/research-lab.jpg'
      },
      {
        id: 2,
        title: 'Ayurvedic Cancer Treatment Support',
        description: 'Help us provide alternative cancer treatments to patients in need',
        goal: 50000,
        raised: 35000,
        category: 'Patient Care',
        image: '/images/patient-care.jpg'
      },
      {
        id: 3,
        title: 'Rural Herbal Medicine Dispensary',
        description: 'Building accessible dispensaries in rural areas to provide traditional treatments',
        goal: 25000,
        raised: 12500,
        category: 'Infrastructure',
        image: '/images/rural-clinic.jpg'
      },
      {
        id: 4,
        title: 'Medical Plants Conservation Project',
        description: 'Preserving endangered medicinal plants through sustainable cultivation',
        goal: 35000,
        raised: 15000,
        category: 'Conservation',
        image: '/images/plants-conservation.jpg'
      }
    ]
    
    setFundraisers(mockHealthcareFundraisers)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-green-50 p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4 text-green-800">Healthcare Fundraising</h1>
        <p className="text-gray-700 mb-4">
          Support innovative healthcare initiatives based on traditional medicine, Ayurveda, and natural healing practices.
        </p>
        <Link
          to="/create-fundraiser"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Start Your Healthcare Fundraiser
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fundraisers.map((fundraiser) => (
          <div key={fundraiser.id} className="border rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 overflow-hidden">
              <img
                src={fundraiser.image}
                alt={fundraiser.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-sm rounded-full mb-2">
                {fundraiser.category}
              </span>
              <h2 className="text-xl font-semibold mb-2">{fundraiser.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-2">{fundraiser.description}</p>
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: `${(fundraiser.raised / fundraiser.goal) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>${fundraiser.raised.toLocaleString()} raised</span>
                  <span>${fundraiser.goal.toLocaleString()} goal</span>
                </div>
              </div>
              <Link
                to={`/fundraiser/${fundraiser.id}`}
                className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded"
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

export default HealthcareFunding