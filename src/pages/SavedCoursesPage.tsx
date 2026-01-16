import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, CheckCircle, Clock, Search } from 'lucide-react';
import { allTutorials } from '../curriculumData';

type TabType = 'saved' | 'completed' | 'recent';

export default function SavedCoursesPage() {
  const [activeTab, setActiveTab] = useState<TabType>('saved');

  // Mock data - in a real app, this would come from user state/localStorage
  const savedCourseIds = ['waf-top-5-issues', 'workers-fundamentals', 'zero-trust-fundamentals', 'ai-fundamentals', 'workers-kv-guide', 'd1-database'];
  const completedCourseIds = ['waf-top-5-issues', 'workers-fundamentals'];
  const recentCourseIds = ['zero-trust-fundamentals', 'ai-fundamentals', 'waf-top-5-issues', 'workers-ai-advanced'];

  const savedCourses = allTutorials.filter(t => savedCourseIds.includes(t.id));
  const completedCourses = allTutorials.filter(t => completedCourseIds.includes(t.id));
  const recentCourses = allTutorials.filter(t => recentCourseIds.includes(t.id));

  const getCurrentCourses = () => {
    switch (activeTab) {
      case 'saved':
        return savedCourses;
      case 'completed':
        return completedCourses;
      case 'recent':
        return recentCourses;
      default:
        return savedCourses;
    }
  };

  const currentCourses = getCurrentCourses();

  const getTabTitle = () => {
    switch (activeTab) {
      case 'saved':
        return 'Saved Courses';
      case 'completed':
        return 'Completed Courses';
      case 'recent':
        return 'Recently Viewed';
      default:
        return 'Saved Courses';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('saved')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors ${
                activeTab === 'saved'
                  ? 'bg-gray-100 text-gray-900 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Bookmark className="w-5 h-5" />
              Saved Courses
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors ${
                activeTab === 'completed'
                  ? 'bg-gray-100 text-gray-900 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <CheckCircle className="w-5 h-5" />
              Completed Courses
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors ${
                activeTab === 'recent'
                  ? 'bg-gray-100 text-gray-900 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Clock className="w-5 h-5" />
              Recently Viewed
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{getTabTitle()}</h1>
            <p className="text-gray-600">{currentCourses.length} courses</p>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={`Search your ${activeTab} courses`}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cloudflare-orange focus:border-transparent"
              />
            </div>
          </div>

          {/* Courses Grid */}
          {currentCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentCourses.map((course) => (
                <Link
                  key={course.id}
                  to={`/tutorial/${course.id}`}
                  className="group"
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg mb-3 bg-gray-100">
                    <img
                      src={course.videoPoster}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {activeTab === 'completed' && (
                      <div className="absolute top-3 right-3 bg-green-500 text-white p-2 rounded-full">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-cloudflare-orange transition-colors">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-600">{course.totalTime}</span>
                    {course.rating && (
                      <>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">★ {course.rating}</span>
                      </>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                {activeTab === 'saved' && <Bookmark className="w-16 h-16 mx-auto" />}
                {activeTab === 'completed' && <CheckCircle className="w-16 h-16 mx-auto" />}
                {activeTab === 'recent' && <Clock className="w-16 h-16 mx-auto" />}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No {activeTab} courses yet
              </h3>
              <p className="text-gray-600 mb-6">
                {activeTab === 'saved' && 'Start saving courses to build your learning collection'}
                {activeTab === 'completed' && 'Complete courses to track your progress'}
                {activeTab === 'recent' && 'Your recently viewed courses will appear here'}
              </p>
              <Link
                to="/"
                className="inline-block bg-cloudflare-orange text-white px-6 py-3 rounded font-semibold hover:bg-orange-600 transition-colors"
              >
                Explore Courses
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
