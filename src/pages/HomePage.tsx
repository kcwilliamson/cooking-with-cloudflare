import { Link } from 'react-router-dom';
import { Star, Bookmark, ArrowRight, BookOpen } from 'lucide-react';
import { featuredTutorial, allModuleCollections } from '../curriculumData';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Featured Tutorial */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <Link to={`/tutorial/${featuredTutorial.id}`} className="relative group">
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src={featuredTutorial.videoPoster}
              alt={featuredTutorial.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <button className="absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors">
            <Bookmark className="w-5 h-5 text-gray-700" />
          </button>
        </Link>

        <div className="flex flex-col justify-center">
          <div className="text-sm font-semibold text-cloudflare-orange uppercase tracking-wide mb-2">
            Tutorial of the Day
          </div>
          <Link to={`/tutorial/${featuredTutorial.id}`}>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 hover:text-gray-700 transition-colors">
              {featuredTutorial.title}
            </h1>
          </Link>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed mt-4">
            {featuredTutorial.description}
          </p>
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.round(featuredTutorial.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600">{featuredTutorial.ratingCount}</span>
          </div>
          <div className="text-sm text-gray-600 mt-2">{featuredTutorial.totalTime}</div>
        </div>
      </div>

      {/* 6 Comprehensive Learning Paths Section */}
      <div className="mb-16 border-t border-gray-200 pt-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            6 Comprehensive Learning Paths
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master Cloudflare from the ground up with our structured curriculum. 
            From getting started to advanced topics, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {allModuleCollections.map((module, index) => {
            const firstTutorial = module.tutorials[0];
            return (
              <Link
                key={module.id}
                to={`/module/${module.id}`}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-cloudflare-orange"
              >
                <div className="aspect-video overflow-hidden relative bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src={firstTutorial.videoPoster}
                    alt={module.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-cloudflare-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                      Module {index}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white text-sm">
                      <BookOpen className="w-4 h-4" />
                      <span className="font-semibold">{module.tutorials.length} Courses</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cloudflare-orange transition-colors flex items-center justify-between">
                    {module.title}
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cloudflare-orange group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {module.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/classes"
            className="inline-flex items-center gap-2 bg-cloudflare-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Explore All Courses
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Individual Module Sections with Tutorials */}
      {allModuleCollections.map((collection) => (
        <div key={collection.id} className="mb-16">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {collection.title}
              </h2>
              <p className="text-gray-600">{collection.description}</p>
            </div>
            <Link
              to={`/module/${collection.id}`}
              className="text-sm font-medium text-gray-700 hover:text-cloudflare-orange transition-colors whitespace-nowrap"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collection.tutorials.slice(0, 4).map((tutorial) => (
              <Link
                key={tutorial.id}
                to={`/tutorial/${tutorial.id}`}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
                  <img
                    src={tutorial.videoPoster}
                    alt={tutorial.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {tutorial.difficulty === 'Easy' && (
                    <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded uppercase">
                      Easy
                    </div>
                  )}
                  <button className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <Bookmark className="w-4 h-4 text-gray-700" />
                  </button>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {tutorial.title}
                </h3>
                <div className="flex items-center gap-2 text-sm mb-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.round(tutorial.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">{tutorial.ratingCount.toLocaleString()}</span>
                </div>
                <div className="text-sm text-gray-600">{tutorial.totalTime}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
