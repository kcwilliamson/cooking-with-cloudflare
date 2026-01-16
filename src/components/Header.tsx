import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-masterclass-black border-b border-masterclass-gray sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-white">
              Cloudflare<span className="text-cloudflare-orange">Class</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/classes" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Browse
            </Link>
            <Link 
              to="/saved-courses" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              My Courses
            </Link>
            <Link 
              to="/instructors" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Instructors
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-300 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2">
              Log In
            </button>
            <Link
              to="/classes"
              className="bg-white text-masterclass-black px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-masterclass-charcoal border-t border-masterclass-gray">
          <div className="px-4 py-6 space-y-4">
            <Link
              to="/classes"
              className="block text-white font-medium hover:text-cloudflare-orange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse
            </Link>
            <Link
              to="/saved-courses"
              className="block text-white font-medium hover:text-cloudflare-orange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Courses
            </Link>
            <Link
              to="/instructors"
              className="block text-white font-medium hover:text-cloudflare-orange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Instructors
            </Link>
            <div className="pt-4 border-t border-masterclass-gray space-y-3">
              <button className="block w-full text-left text-white font-medium hover:text-cloudflare-orange transition-colors">
                Log In
              </button>
              <Link
                to="/classes"
                className="block w-full bg-white text-masterclass-black px-6 py-3 rounded-md text-center font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
