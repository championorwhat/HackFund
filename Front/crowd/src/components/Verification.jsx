import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Verification = () => {
  const [formData, setFormData] = useState({
    companyContent: "",
    authorizedDoc: null,
    companyEvaluation: null,
    whyFundraise: "",
    preExistingLoans: "No",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add API call for verification submission
    navigate("/dashboard"); // Redirect to dashboard after submission
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
            Verification
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Content */}
            <div>
              <label className="block mb-2 font-semibold text-emerald-900">
                Company-Related Content (120 words min)
              </label>
              <textarea
                className="w-full p-3 bg-white/40 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all hover:shadow-md"
                rows="4"
                placeholder="Describe your company"
                value={formData.companyContent}
                maxLength={600}
                onChange={(e) =>
                  setFormData({ ...formData, companyContent: e.target.value })
                }
                required
              ></textarea>
            </div>

            {/* Authorized Documents */}
            <div>
              <label className="block mb-2 font-semibold text-emerald-900">
                Authorized Documents (Upload)
              </label>
              <input
                type="file"
                className="w-full p-2 bg-white/40 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                onChange={(e) =>
                  setFormData({ ...formData, authorizedDoc: e.target.files[0] })
                }
                required
              />
            </div>

            {/* Company Evaluation */}
            <div>
              <label className="block mb-2 font-semibold text-emerald-900">
                Company Evaluation (Upload)
              </label>
              <input
                type="file"
                className="w-full p-2 bg-white/40 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                onChange={(e) =>
                  setFormData({ ...formData, companyEvaluation: e.target.files[0] })
                }
                required
              />
            </div>

            {/* Why Fundraise? */}
            <div>
              <label className="block mb-2 font-semibold text-emerald-900">
                Why Fundraise?
              </label>
              <input
                type="text"
                className="w-full p-3 bg-white/40 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all hover:shadow-md"
                placeholder="Reason for fundraising"
                value={formData.whyFundraise}
                onChange={(e) =>
                  setFormData({ ...formData, whyFundraise: e.target.value })
                }
                required
              />
            </div>

            {/* Pre-Existing Loans */}
            <div>
              <label className="block mb-2 font-semibold text-emerald-900">
                Do you have pre-existing loans?
              </label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className={`px-4 py-2 rounded-md transition-all ${
                    formData.preExistingLoans === "Yes"
                      ? "bg-emerald-900 text-white"
                      : "bg-white/40 border border-gray-300"
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, preExistingLoans: "Yes" })
                  }
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded-md transition-all ${
                    formData.preExistingLoans === "No"
                      ? "bg-emerald-900 text-white"
                      : "bg-white/40 border border-gray-300"
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, preExistingLoans: "No" })
                  }
                >
                  No
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all"
            >
              Submit for Verification
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Verification;
