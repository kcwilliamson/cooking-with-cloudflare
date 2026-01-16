import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Clock, Users, Calendar } from 'lucide-react';
import { liveClasses } from '../data/classes';
import { instructors } from '../data/instructors';

export default function ClassesPage() {
  const [searchParams] = useSearchParams();
  const instructorFilter = searchParams.get('instructor');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');

  const categories = ['All', 'Security', 'Development', 'AI & ML', 'Performance'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  let filteredClasses = liveClasses;

  if (instructorFilter) {
    filteredClasses = filteredClasses.filter(c => c.instructorId === instructorFilter);
  }

  if (selectedCategory !== 'All') {
    filteredClasses = filteredClasses.filter(c => c.category === selectedCategory);
  }

  if (selectedLevel !== 'All') {
    filteredClasses = filteredClasses.filter(c => c.level === selectedLevel);
  }

  const getInstructor = (instructorId: string) => {
    return instructors.find(i => i.id === instructorId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Live Classes</h1>
        <p className="text-lg text-gray-600 mb-6">
          Join expert-led sessions for hands-on learning, live Q&A, and personalized guidance
        </p>
        <Link
          to="/instructors"
          className="inline-block text-cloudflare-orange font-medium hover:text-orange-600 transition-colors"
        >
          Meet Our Instructors →
        </Link>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-cloudflare-orange text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Level</label>
          <div className="flex gap-2">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  selectedLevel === level
                    ? 'bg-cloudflare-orange text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClasses.map((liveClass) => {
          const instructor = getInstructor(liveClass.instructorId);
          const spotsLeft = liveClass.maxStudents - liveClass.enrolled;
          const percentFull = (liveClass.enrolled / liveClass.maxStudents) * 100;

          return (
            <div
              key={liveClass.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={liveClass.image}
                  alt={liveClass.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-cloudflare-orange text-white text-xs font-semibold px-3 py-1 rounded">
                  {liveClass.level}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 text-gray-900 text-xs font-semibold px-3 py-1 rounded">
                  {liveClass.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {liveClass.title}
                </h3>

                {instructor && (
                  <Link
                    to={`/instructors`}
                    className="flex items-center gap-2 mb-3 group"
                  >
                    <img
                      src={instructor.headshot}
                      alt={instructor.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-cloudflare-orange transition-colors">
                      {liveClass.instructor}
                    </span>
                  </Link>
                )}

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {liveClass.description}
                </p>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cloudflare-orange" />
                    <span>{liveClass.nextSession}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cloudflare-orange" />
                    <span>{liveClass.duration} • {liveClass.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-cloudflare-orange" />
                    <span>{liveClass.enrolled}/{liveClass.maxStudents} enrolled</span>
                  </div>
                </div>

                {/* Enrollment Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>{spotsLeft} spots left</span>
                    <span>{Math.round(percentFull)}% full</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-cloudflare-orange rounded-full h-2 transition-all"
                      style={{ width: `${percentFull}%` }}
                    />
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {liveClass.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  className="w-full bg-cloudflare-orange text-white py-3 rounded font-semibold hover:bg-orange-600 transition-colors"
                  onClick={() => alert('Enrollment feature coming soon!')}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredClasses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No classes found matching your filters.</p>
        </div>
      )}
    </div>
  );
}
