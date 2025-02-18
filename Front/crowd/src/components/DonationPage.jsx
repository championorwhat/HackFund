import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const DonationPage = () => {
  const [amount, setAmount] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Add your payment processing logic here
    navigate(`/fundraiser/${id}`)
  }

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Make a Donation</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2">Donation Amount ($)</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Donate
        </button>
      </form>
    </div>
  )
}

export default DonationPage