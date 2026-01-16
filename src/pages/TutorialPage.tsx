import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Star, Bookmark, Share2, Play, Pause, ClipboardList, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { allTutorials, allModuleCollections } from '../curriculumData';

export default function TutorialPage() {
  const { tutorialId } = useParams();
  const tutorial = allTutorials.find(t => t.id === tutorialId);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [checkedIngredients, setCheckedIngredients] = useState<Set<string>>(new Set());
  const [checkedSteps, setCheckedSteps] = useState<Set<string>>(new Set());
  const [showIngredientsModal, setShowIngredientsModal] = useState(false);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const toggleIngredient = (id: string) => {
    const newChecked = new Set(checkedIngredients);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedIngredients(newChecked);
  };

  const toggleStep = (id: string) => {
    const newChecked = new Set(checkedSteps);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedSteps(newChecked);
  };

  if (!tutorial) {
    return <div className="max-w-7xl mx-auto px-4 py-8">Tutorial not found</div>;
  }

  // Get module information
  const currentModule = allModuleCollections.find(
    module => module.id === tutorial.moduleId
  );

  // Get all tutorials in the same module
  const moduleTutorials = allTutorials.filter(
    t => t.moduleId === tutorial.moduleId
  );

  // Find current tutorial index and get prev/next
  const currentIndex = moduleTutorials.findIndex(t => t.id === tutorial.id);
  const previousTutorial = currentIndex > 0 ? moduleTutorials[currentIndex - 1] : null;
  const nextTutorial = currentIndex < moduleTutorials.length - 1 ? moduleTutorials[currentIndex + 1] : null;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            {/* Module Context */}
            {currentModule && (
              <div className="mb-4">
                <Link 
                  to={`/module/${currentModule.id}`}
                  className="text-sm font-semibold text-cloudflare-orange hover:text-orange-600 transition-colors uppercase tracking-wide"
                >
                  {currentModule.title}
                </Link>
                <div className="text-sm text-gray-600 mt-1">
                  Course {currentIndex + 1} of {moduleTutorials.length}
                </div>
              </div>
            )}

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {tutorial.title}
            </h1>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3 mb-6">
              {previousTutorial ? (
                <Link
                  to={`/tutorial/${previousTutorial.id}`}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Link>
              ) : (
                <button
                  disabled
                  className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-sm font-medium text-gray-400 cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
              )}

              {nextTutorial ? (
                <Link
                  to={`/tutorial/${nextTutorial.id}`}
                  className="flex items-center gap-2 px-4 py-2 bg-cloudflare-orange text-white rounded-md text-sm font-medium hover:bg-orange-600 transition-colors"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ) : (
                <button
                  disabled
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-400 rounded-md text-sm font-medium cursor-not-allowed"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={tutorial.videoPoster}
              alt={tutorial.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-6 transition-all hover:scale-110"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 text-gray-900" />
              ) : (
                <Play className="w-8 h-8 text-gray-900 ml-1" />
              )}
            </button>
          </div>
        </div>

        <div className="border-t border-b border-gray-200 py-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="font-semibold text-gray-900 mb-1">Total Time</div>
              <div className="text-gray-600">{tutorial.totalTime}</div>
            </div>
            {tutorial.prepTime && (
              <div>
                <div className="font-semibold text-gray-900 mb-1">Prep Time</div>
                <div className="text-gray-600">{tutorial.prepTime}</div>
              </div>
            )}
            {tutorial.cookTime && (
              <div>
                <div className="font-semibold text-gray-900 mb-1">Cook Time</div>
                <div className="text-gray-600">{tutorial.cookTime}</div>
              </div>
            )}
            <div>
              <div className="font-semibold text-gray-900 mb-1">Rating</div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-gray-900 font-medium">{tutorial.rating}</span>
                <span className="text-gray-600">({tutorial.ratingCount.toLocaleString()})</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {tutorial.overview}
        </p>

        <div className="flex gap-3 mb-12">
          <button className="flex items-center gap-2 bg-cloudflare-orange text-white px-6 py-3 rounded font-medium hover:bg-orange-600 transition-colors">
            <Bookmark className="w-5 h-5" />
            Save
          </button>
          <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded font-medium hover:bg-gray-50 transition-colors">
            <Share2 className="w-5 h-5" />
            Share
          </button>
          <button 
            onClick={() => setShowIngredientsModal(true)}
            className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded font-medium hover:bg-gray-50 transition-colors"
          >
            <ClipboardList className="w-5 h-5" />
            What you'll need
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-gray-900">
              TO DO LIST
            </h2>
            {tutorial.yield && (
              <div className="mb-4 font-semibold text-gray-900">
                Yield: {tutorial.yield}
              </div>
            )}
            <ul className="space-y-3">
              {tutorial.ingredients.map((ingredient) => (
                <li key={ingredient.id} className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id={`ingredient-${ingredient.id}`}
                    checked={checkedIngredients.has(ingredient.id)}
                    onChange={() => toggleIngredient(ingredient.id)}
                    className="mt-1 w-4 h-4 text-cloudflare-orange border-gray-300 rounded focus:ring-cloudflare-orange cursor-pointer"
                  />
                  <label htmlFor={`ingredient-${ingredient.id}`} className="flex-1 cursor-pointer text-gray-700">
                    <span className="font-medium">{ingredient.name}</span>
                    {ingredient.description && (
                      <span className="text-gray-600"> - {ingredient.description}</span>
                    )}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-gray-900">
              PREPARATION
            </h2>
            <div className="space-y-8">
              {tutorial.steps.map((step) => (
                <div key={step.id} className="flex gap-4">
                  <input
                    type="checkbox"
                    id={`step-${step.id}`}
                    checked={checkedSteps.has(step.id)}
                    onChange={() => toggleStep(step.id)}
                    className="mt-1 w-5 h-5 text-cloudflare-orange border-gray-300 rounded focus:ring-cloudflare-orange cursor-pointer flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      {step.timestamp && (
                        <button className="flex items-center gap-2 bg-cloudflare-orange text-white px-3 py-1 rounded text-sm font-semibold hover:bg-orange-600 transition-colors">
                          <Play className="w-4 h-4" />
                          {step.timestamp}
                        </button>
                      )}
                      <label htmlFor={`step-${step.id}`} className="font-bold text-gray-900 cursor-pointer">Step {step.number}</label>
                    </div>
                    <div className={step.image ? 'flex gap-4 items-start' : ''}>
                      {step.image && (
                        <div 
                          onClick={() => setExpandedImage(step.image!)}
                          className="flex-shrink-0 w-48 rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:border-cloudflare-orange transition-colors"
                        >
                          <img
                            src={step.image}
                            alt={`${step.title} - Dashboard screenshot`}
                            className="w-full h-auto hover:opacity-90 transition-opacity"
                          />
                        </div>
                      )}
                      <p className="text-gray-700 leading-relaxed flex-1">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {moduleTutorials.length > 1 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Videos in This Module</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {moduleTutorials.map((video, index) => (
                <Link
                  key={video.id}
                  to={`/tutorial/${video.id}`}
                  className={`group ${video.id === tutorial.id ? 'ring-2 ring-cloudflare-orange rounded-lg' : ''}`}
                >
                  <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
                    <img
                      src={video.videoPoster}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-gray-900/90 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    {video.id === tutorial.id && (
                      <div className="absolute inset-0 border-4 border-cloudflare-orange rounded-lg pointer-events-none"></div>
                    )}
                  </div>
                  <h3 className={`font-semibold text-sm mb-1 line-clamp-2 ${
                    video.id === tutorial.id 
                      ? 'text-cloudflare-orange' 
                      : 'text-gray-900 group-hover:text-cloudflare-orange'
                  } transition-colors`}>
                    {video.title}
                  </h3>
                  <div className="text-xs text-gray-600">{video.totalTime}</div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-gray-900">
            RATINGS
          </h2>
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl font-bold text-gray-900">
                {tutorial.rating} <span className="text-2xl text-gray-600">out of 5</span>
              </div>
            </div>
            <div className="text-sm text-gray-600 mb-4">
              {tutorial.ratingCount.toLocaleString()} user ratings
            </div>
            <div className="mb-6">
              <div className="text-sm font-semibold text-gray-900 mb-2">Your rating</div>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setUserRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-colors"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= (hoverRating || userRating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6 pb-3 border-b-4 border-gray-900">
              <h2 className="text-2xl font-bold text-gray-900">
                COMMUNITY
              </h2>
              <a
                href="https://community.cloudflare.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-cloudflare-orange hover:text-orange-600 transition-colors"
              >
                Join the Discussion →
              </a>
            </div>
            <div className="mb-8">
              <textarea
                placeholder="Share your notes with other learners or make a private note for yourself..."
                className="w-full border border-gray-300 rounded p-4 text-sm resize-none focus:ring-2 focus:ring-cloudflare-orange focus:border-transparent"
                rows={4}
              />
              <div className="flex justify-between items-center mt-3">
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors">
                    PUBLIC
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors">
                    Private
                  </button>
                </div>
                <button className="px-6 py-2 bg-cloudflare-orange text-white text-sm font-medium rounded hover:bg-orange-600 transition-colors">
                  Submit
                </button>
              </div>
            </div>

            {tutorial.comments.length > 0 && (
              <div className="space-y-6">
                {tutorial.comments.map((comment) => (
                  <div key={comment.id} className="border-b border-gray-200 pb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-gray-900">{comment.author}</span>
                      <span className="text-sm text-gray-500">• {comment.date}</span>
                    </div>
                    <p className="text-gray-700 mb-2">{comment.text}</p>
                    <button className="text-sm text-gray-600 hover:text-gray-900">
                      👍 Helpful ({comment.helpful})
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Ingredients List Modal */}
      {showIngredientsModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowIngredientsModal(false)}>
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">What You'll Need</h2>
              <button
                onClick={() => setShowIngredientsModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                Before starting this tutorial, make sure you have the following items ready. Check them off as you gather them.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Required Items</h3>
                  <ul className="space-y-3">
                    {tutorial.ingredients.filter(i => i.required).map((ingredient) => (
                      <li key={ingredient.id} className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <input
                          type="checkbox"
                          id={`modal-${ingredient.id}`}
                          checked={checkedIngredients.has(ingredient.id)}
                          onChange={() => toggleIngredient(ingredient.id)}
                          className="mt-1 w-5 h-5 text-cloudflare-orange border-gray-300 rounded focus:ring-cloudflare-orange cursor-pointer"
                        />
                        <label htmlFor={`modal-${ingredient.id}`} className="flex-1 cursor-pointer">
                          <div className="font-semibold text-gray-900">{ingredient.name}</div>
                          <div className="text-sm text-gray-600">{ingredient.description}</div>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                {tutorial.ingredients.some(i => !i.required) && (
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Optional Items</h3>
                    <ul className="space-y-3">
                      {tutorial.ingredients.filter(i => !i.required).map((ingredient) => (
                        <li key={ingredient.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                          <input
                            type="checkbox"
                            id={`modal-${ingredient.id}`}
                            checked={checkedIngredients.has(ingredient.id)}
                            onChange={() => toggleIngredient(ingredient.id)}
                            className="mt-1 w-5 h-5 text-cloudflare-orange border-gray-300 rounded focus:ring-cloudflare-orange cursor-pointer"
                          />
                          <label htmlFor={`modal-${ingredient.id}`} className="flex-1 cursor-pointer">
                            <div className="font-semibold text-gray-900">{ingredient.name}</div>
                            <div className="text-sm text-gray-600">{ingredient.description}</div>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-blue-50 border-l-4 border-cloudflare-blue p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Pro Tip:</strong> Having all your accounts, tokens, and settings ready before starting will make the tutorial much smoother. You can check items off as you prepare them.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowIngredientsModal(false)}
                  className="bg-cloudflare-orange text-white px-6 py-3 rounded font-semibold hover:bg-orange-600 transition-colors"
                >
                  Got it, let's start!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Expansion Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" 
          onClick={() => setExpandedImage(null)}
        >
          <button
            onClick={() => setExpandedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-6xl max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <img
              src={expandedImage}
              alt="Expanded screenshot"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
