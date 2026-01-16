import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Tutorial } from '../types';

interface ModuleNavigationProps {
  modules: Tutorial[];
  currentModuleId: string;
  onModuleChange: (moduleId: string) => void;
}

export default function ModuleNavigation({ modules, currentModuleId, onModuleChange }: ModuleNavigationProps) {
  const currentIndex = modules.findIndex(m => m.id === currentModuleId);
  const prevModule = currentIndex > 0 ? modules[currentIndex - 1] : null;
  const nextModule = currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

  return (
    <div className="border-t border-gray-200 bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {prevModule ? (
            <button
              onClick={() => onModuleChange(prevModule.id)}
              className="flex items-center gap-2 text-left flex-1 p-4 bg-white rounded-lg border border-gray-200 hover:border-cloudflare-orange transition-colors group"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-cloudflare-orange" />
              <div className="flex-1">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Previous</div>
                <div className="font-medium text-gray-900 group-hover:text-cloudflare-orange">{prevModule.title}</div>
              </div>
            </button>
          ) : (
            <div className="flex-1" />
          )}

          {nextModule ? (
            <button
              onClick={() => onModuleChange(nextModule.id)}
              className="flex items-center gap-2 text-right flex-1 p-4 bg-white rounded-lg border border-gray-200 hover:border-cloudflare-orange transition-colors group"
            >
              <div className="flex-1">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Next</div>
                <div className="font-medium text-gray-900 group-hover:text-cloudflare-orange">{nextModule.title}</div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cloudflare-orange" />
            </button>
          ) : (
            <div className="flex-1" />
          )}
        </div>

        <div className="mt-6">
          <div className="text-sm text-gray-600 mb-2">All Modules</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => onModuleChange(module.id)}
                className={`text-left p-4 rounded-lg border transition-all ${
                  module.id === currentModuleId
                    ? 'bg-cloudflare-orange text-white border-cloudflare-orange'
                    : 'bg-white border-gray-200 hover:border-cloudflare-orange'
                }`}
              >
                <div className="font-medium mb-1">{module.title}</div>
                <div className={`text-sm ${module.id === currentModuleId ? 'text-orange-100' : 'text-gray-500'}`}>
                  {module.duration} • {module.difficulty}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
