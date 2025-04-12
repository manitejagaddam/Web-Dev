import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DashboardLayout from './components/layout/DashboardLayout';

// Pages
import HomePage from './pages/HomePage';
import LoanProductsPage from './pages/LoanProductsPage';
import LoanSuggestionTool from './pages/LoanSuggestionTool';
import Resources from './pages/Resources';
import AboutUs from './pages/AboutUs';
// import Dashboard from './pages/Dashborad';
// import Dashboard from './dashboard/DashboardHome';

// Dashboard Components
import DashboardHome from './components/dashboard/DashboardHome';
import ApplicationsList from './components/dashboard/ApplicationsList';
import ApplicationDetail from './components/dashboard/ApplicationDetail';
import UserProfile from './components/dashboard/UserProfile';

// Form Components
import LoanApplicationForm from './components/forms/LoanApplicationForm';

// Auth Components
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
// import LoanTracking from './pages/LoanTracking';
import LoanTrackings from './pages/LoanTracking';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/FinTech/login" />;
  }
  
  return <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/FinTech/" element={<HomePage />} />
              <Route path="/FinTech/services" element={<LoanProductsPage />} />
              <Route path="/FinTech/loan-suggestion" element={<LoanSuggestionTool />} />
              <Route path="/FinTech/resources" element={<Resources />} />
              <Route path="/FinTech/about" element={<AboutUs />} />
              {/* <Route path="/FinTech/dashboard" element={<DashboardHome />} /> */}
              <Route path="/FinTech/login" element={<LoginForm />} />
              <Route path="/FinTech/signup" element={<RegisterForm />} />
              <Route path="/FinTech/loan-products" element={<LoanProductsPage />} />
              <Route path="/FinTech/loan-tracking" element={<LoanTrackings />} />

              {/* Protected Routes */}
              <Route 
                path="/FinTech/apply" 
                element={
                  <ProtectedRoute>
                    <LoanApplicationForm />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/FinTech/dashboard" 
                element={
                  <ProtectedRoute>
                    <DashboardLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<DashboardHome />} />
                <Route path="applications" element={<ApplicationsList />} />
                <Route path="applications/:id" element={<ApplicationDetail />} />
                <Route path="profile" element={<UserProfile />} />
              </Route>

              {/* Redirect to appropriate page based on authentication */}
              <Route path="/FinTech/*" element={<AuthRedirect />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

// Component to redirect based on auth state
const AuthRedirect: React.FC = () => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  return <Navigate to={user ? "/FinTech/dashboard" : "/FinTech/login"} />;
};

export default App;