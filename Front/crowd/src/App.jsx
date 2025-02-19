import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/auth/Home';
import Dashboard from './components/auth/Dashboard';
import CreateFundraiser from './components/CreateFundraiser';
import DonationPage from './components/DonationPage';
import AboutProject from './components/AboutProject';
import HealthcareFunding from './components/HealthcareFunding';
import StartupFunding from './components/StartupFunding';
import Verification from './components/verification';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about-project"
          element={
            <ProtectedRoute>
              <AboutProject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/verification"
          element={
            <ProtectedRoute>
              <Verification />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-fundraiser"
          element={
            <ProtectedRoute>
              <CreateFundraiser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/healthcare-funding"
          element={
            <ProtectedRoute>
              <HealthcareFunding />
            </ProtectedRoute>
          }
        />
        <Route
          path="/startup-funding"
          element={
            <ProtectedRoute>
              <StartupFunding />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donate/:id"
          element={
            <ProtectedRoute>
              <DonationPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
