import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CreateFundraiser = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goal: "",
    category: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your API call here
    navigate("/dashboard");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/assets/Bgimage.jpg')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/30 shadow-xl rounded-2xl p-8 max-w-lg w-full backdrop-blur-xl border border-white/20 relative"
      >
        {/* Floating Card Effect */}
        <motion.div
          animate={{
            y: [0, -5, 0],
            transition: { repeat: Infinity, duration: 3 },
          }}
        >
          <h1 className="text-4xl font-extrabold text-emerald-900 text-center mb-6">
            Create a Fundraiser
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold text-emerald-900">
                Title
              </label>
              <input
                type="text"
                className="w-full p-3 bg-white/40 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all hover:shadow-md"
                placeholder="Enter fundraiser title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-emerald-900">
                Description
              </label>
              <textarea
                className="w-full p-3 bg-white/40 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all hover:shadow-md"
                rows="4"
                placeholder="Describe your fundraiser"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
              ></textarea>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-emerald-900">
                Goal Amount ($)
              </label>
              <input
                type="number"
                className="w-full p-3 bg-white/40 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all hover:shadow-md"
                placeholder="Enter goal amount"
                value={formData.goal}
                onChange={(e) =>
                  setFormData({ ...formData, goal: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-emerald-900">
                Category
              </label>
              <select
                className="w-full p-3 bg-white/40 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all hover:shadow-md"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                required
              >
                <option value="">Select a category</option>
                <option value="Startup">Startup</option>
                <option value="Medical">Medical</option>
              </select>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all"
            >
              Create Fundraiser
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CreateFundraiser;
