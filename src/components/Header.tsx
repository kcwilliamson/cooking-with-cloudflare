import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown } from 'lucide-react';

export default function Header() {
  const [showLiveClassesDropdown, setShowLiveClassesDropdown] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-gray-900">Cooking with</span>
            <span className="text-2xl font-semibold text-cloudflare-orange">Cloudflare</span>
          </Link>
          
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="What would you like to learn?"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cloudflare-orange focus:border-transparent"
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Lessons
            </Link>
            <Link to="/saved-courses" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Your Course Box
            </Link>
            <div className="relative">
              <button 
                onClick={() => setShowLiveClassesDropdown(!showLiveClassesDropdown)}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Live Classes
                <ChevronDown className={`w-4 h-4 transition-transform ${showLiveClassesDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showLiveClassesDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  <Link
                    to="/classes"
                    onClick={() => setShowLiveClassesDropdown(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-cloudflare-orange transition-colors"
                  >
                    Course List
                  </Link>
                  <Link
                    to="/instructors"
                    onClick={() => setShowLiveClassesDropdown(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-cloudflare-orange transition-colors"
                  >
                    Instructors
                  </Link>
                </div>
              )}
            </div>
            <Link to="/index" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Index
            </Link>
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Log in
            </button>
            <button className="bg-cloudflare-orange text-white px-4 py-2 rounded text-sm font-medium hover:bg-orange-600 transition-colors">
              Create a free account
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
