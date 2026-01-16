import { Link } from 'react-router-dom';
import { BookmarkCheck } from 'lucide-react';

interface SavedCourse {
  id: string;
  title: string;
  image: string;
  totalTime: string;
}

// Mock saved courses - in a real app, this would come from user state/localStorage
const savedCourses: SavedCourse[] = [
  {
    id: 'waf-top-5-issues',
    title: 'WAF: Top 5 Common Issues',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop',
    totalTime: '12 minutes',
  },
  {
    id: 'workers-fundamentals',
    title: 'Cloudflare Workers: Build at the Edge',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    totalTime: '18 minutes',
  },
  {
    id: 'zero-trust-fundamentals',
    title: 'Zero Trust Security: Modern Network Protection',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=300&fit=crop',
    totalTime: '22 minutes',
  },
];

export default function CourseBox() {
  if (savedCourses.length === 0) {
    return null;
  }

  return (
    <div className="bg-orange-50 border-t-4 border-cloudflare-orange py-8 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <BookmarkCheck className="w-6 h-6 text-cloudflare-orange" />
          <h2 className="text-2xl font-bold text-gray-900">Your Course Box</h2>
          <span className="text-sm text-gray-600">({savedCourses.length} saved)</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {savedCourses.map((course) => (
            <Link
              key={course.id}
              to={`/tutorial/${course.id}`}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2 group-hover:text-cloudflare-orange transition-colors">
                  {course.title}
                </h3>
                <p className="text-xs text-gray-600">{course.totalTime}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <Link
            to="/saved-courses"
            className="text-sm font-medium text-cloudflare-orange hover:text-orange-600 transition-colors"
          >
            View all saved courses →
          </Link>
        </div>
      </div>
    </div>
  );
}
