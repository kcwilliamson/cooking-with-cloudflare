import { useParams, Link } from 'react-router-dom';
import { Star, Bookmark } from 'lucide-react';
import { allModuleCollections } from '../curriculumData';

export default function ModulePage() {
  const { moduleId } = useParams();
  const collection = allModuleCollections.find(m => m.id === moduleId);

  if (!collection) {
    return <div className="max-w-7xl mx-auto px-4 py-8">Module not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {collection.title}
      </h1>
      <p className="text-lg text-gray-600 mb-6">{collection.description}</p>

      <div className="bg-gradient-to-r from-cloudflare-orange to-orange-500 rounded-lg p-6 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Want personalized guidance?</h3>
            <p className="text-white/90">Join our live classes with expert instructors for hands-on learning and Q&A sessions.</p>
          </div>
          <Link
            to="/classes"
            className="bg-white text-cloudflare-orange px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap ml-6"
          >
            View Live Classes
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {collection.tutorials.map((tutorial) => (
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
            <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
              {tutorial.title}
            </h3>
            <div className="text-sm text-gray-600 mb-1">{tutorial.author}</div>
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
  );
}
