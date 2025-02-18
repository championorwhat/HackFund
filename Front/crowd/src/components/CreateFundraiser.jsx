import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateFundraiser = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    goal: '',
    category: ''
  })
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Add your API call here
    navigate('/dashboard')
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Create a Fundraiser</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2">Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>
        <div>
          <label className="block mb-2">Description</label>
          <textarea
            className="w-full p-2 border rounded"
            rows="4"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          ></textarea>
        </div>
        <div>
          <label className="block mb-2">Goal Amount ($)</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={formData.goal}
            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
          />
        </div>
        <div>
          <label className="block mb-2">Category</label>
          <select
            className="w-full p-2 border rounded"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <option value="">Select a category</option>
            <option value="education">Education</option>
            <option value="medical">Medical</option>
            <option value="environment">Environment</option>
            <option value="community">Community</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Create Fundraiser
        </button>
      </form>
    </div>
  )
}

export default CreateFundraiser