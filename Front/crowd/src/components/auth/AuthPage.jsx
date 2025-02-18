import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate(); // Initialize navigate

  const toggleAuthMode = () => setIsSignup(!isSignup);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock authentication check (Replace this with actual API call)
    if (email === "test@example.com" && password === "password") {
      console.log("Login Successful!");
      localStorage.setItem('token', 'mockToken'); // Save token in localStorage
      navigate("/dashboard"); // Redirect to dashboard after login
    } else {
      alert("Invalid credentials!"); // Show error message
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/Bgimage.jpg')" }}
    >
      <div className="bg-white/80 p-8 rounded-xl shadow-lg max-w-sm w-full min-h-[500px] backdrop-blur-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {isSignup ? "Sign Up" : "Member Login"}
        </h2>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div className="mb-4 relative">
              <img
                src="/assets/person.svg"
                alt="User Icon"
                className="absolute left-3 top-3 w-6 h-6 opacity-70"
              />
              <input
                type="text"
                className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          )}
          <div className="mb-4 relative">
            <img
              src="/assets/person.svg"
              alt="Email Icon"
              className="absolute left-3 top-3 w-6 h-6 opacity-70"
            />
            <input
              type="email"
              className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 relative">
            <img
              src="/assets/key.svg"
              alt="Key Icon"
              className="absolute left-3 top-3 w-6 h-6 opacity-70"
            />
            <input
              type="password"
              className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="text-sm text-center text-gray-700 mt-4">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={toggleAuthMode}
            className="text-blue-500 hover:underline ml-1"
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
