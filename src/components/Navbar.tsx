import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Heart, Menu, X, User, LogOut, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    navigate('/');
  };

  const getDashboardLink = () => {
    if (!user) return '/';
    switch (user.role) {
      case 'patient':
        return '/patient-dashboard';
      case 'donor':
        return '/donor-dashboard';
      case 'provider':
        return '/provider-dashboard';
      default:
        return '/';
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-secondary-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-accent-500" />
            <span className="text-xl font-semibold text-secondary-900">BloodBank</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-secondary-700 hover:text-secondary-900 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-secondary-700 hover:text-secondary-900 transition-colors">
              About
            </Link>
            <Link to="/blood-requests" className="text-secondary-700 hover:text-secondary-900 transition-colors">
              Find Blood
            </Link>
            <Link to="/education" className="text-secondary-700 hover:text-secondary-900 transition-colors">
              Education
            </Link>
            <Link to="/contact" className="text-secondary-700 hover:text-secondary-900 transition-colors">
              Contact
            </Link>
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 text-secondary-700 hover:text-secondary-900 transition-colors"
                >
                  <User className="h-5 w-5" />
                  <span>{user.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-secondary-100">
                    <div className="py-1">
                      <Link
                        to={getDashboardLink()}
                        className="flex items-center px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <User className="h-4 w-4 mr-2" />
                        Dashboard
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-secondary-700 hover:text-secondary-900 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-primary-500 text-white px-4 py-2 rounded-full hover:bg-primary-600 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-secondary-700 hover:text-secondary-900 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-secondary-100">
              <Link
                to="/"
                className="block px-3 py-2 text-secondary-700 hover:text-secondary-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-secondary-700 hover:text-secondary-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/blood-requests"
                className="block px-3 py-2 text-secondary-700 hover:text-secondary-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Find Blood
              </Link>
              <Link
                to="/education"
                className="block px-3 py-2 text-secondary-700 hover:text-secondary-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Education
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-secondary-700 hover:text-secondary-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {user ? (
                <>
                  <Link
                    to={getDashboardLink()}
                    className="block px-3 py-2 text-secondary-700 hover:text-secondary-900 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-secondary-700 hover:text-secondary-900 transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-3 py-2 text-secondary-700 hover:text-secondary-900 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-3 py-2 text-secondary-700 hover:text-secondary-900 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;