import { Link } from 'react-router-dom';
import { Star, ArrowRight, Play } from 'lucide-react';
import { featuredTutorial, allModuleCollections } from '../curriculumData';
import FloatingLogos from '../components/FloatingLogos';

export default function HomePage() {
  return (
    <div className="bg-masterclass-black min-h-screen">
      {/* Hero Section with Floating Logos */}
      <section className="relative bg-masterclass-black text-white overflow-hidden">
        <FloatingLogos />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Learn from the best,
              <br />
              <span className="text-cloudflare-orange">build the future</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Master Cloudflare's platform with expert-led courses. From Workers to AI, 
              Zero Trust to Full-Stack — everything you need in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/classes"
                className="bg-white text-masterclass-black px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-all duration-200 flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-masterclass-black transition-all duration-200">
                View Plans
              </button>
            </div>
          </div>
        </div>

        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-masterclass-black to-transparent"></div>
      </section>

      {/* Featured Course */}
      <section className="bg-masterclass-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group cursor-pointer">
              <Link to={`/tutorial/${featuredTutorial.id}`}>
                <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src={featuredTutorial.videoPoster}
                    alt={featuredTutorial.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-masterclass-black ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-white">
              <div className="text-sm font-semibold text-cloudflare-orange uppercase tracking-wider mb-3">
                Featured Course
              </div>
              <Link to={`/tutorial/${featuredTutorial.id}`}>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 hover:text-gray-300 transition-colors">
                  {featuredTutorial.title}
                </h2>
              </Link>
              <div className="text-lg text-gray-400 mb-4">
                {featuredTutorial.author || 'Cloudflare Expert'}
              </div>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                {featuredTutorial.description}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(featuredTutorial.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-400">{featuredTutorial.ratingCount.toLocaleString()} ratings</span>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-400">{featuredTutorial.totalTime || featuredTutorial.duration}</span>
                <span className="text-gray-600">•</span>
                <span className="text-gray-400">{featuredTutorial.difficulty}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Modules */}
      <section className="bg-masterclass-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore all courses
            </h2>
            <p className="text-xl text-gray-400">
              Choose from 6 comprehensive learning paths
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allModuleCollections.map((module) => {
              const firstTutorial = module.tutorials[0];
              return (
                <Link
                  key={module.id}
                  to={`/module/${module.id}`}
                  className="group"
                >
                  <div className="bg-masterclass-gray rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={firstTutorial.videoPoster}
                        alt={module.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-masterclass-black to-transparent opacity-60"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-xs font-semibold text-cloudflare-orange uppercase tracking-wider mb-1">
                          {module.tutorials.length} Courses
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cloudflare-orange transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {module.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-masterclass-black py-20 border-t border-masterclass-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to master Cloudflare?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get unlimited access to all courses and learn at your own pace
          </p>
          <Link
            to="/classes"
            className="inline-flex items-center gap-2 bg-cloudflare-orange text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-orange-600 transition-all duration-200"
          >
            Start Learning Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
