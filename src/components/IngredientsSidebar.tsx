import { CheckCircle2, Circle, Clock, Award } from 'lucide-react';
import { Ingredient } from '../types';
import { useState } from 'react';

interface IngredientsSidebarProps {
  ingredients: Ingredient[];
  duration: string;
  difficulty: string;
}

export default function IngredientsSidebar({ ingredients, duration, difficulty }: IngredientsSidebarProps) {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleCheck = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
      <div className="mb-6 pb-6 border-b border-gray-200">
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium">{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium">{difficulty}</span>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold mb-4">Requirements</h3>
      <div className="space-y-3">
        {ingredients.map((ingredient) => (
          <div key={ingredient.id} className="ingredient-item">
            <button
              onClick={() => toggleCheck(ingredient.id)}
              className="flex-shrink-0 mt-0.5"
              aria-label={`Mark ${ingredient.name} as ${checkedItems.has(ingredient.id) ? 'incomplete' : 'complete'}`}
            >
              {checkedItems.has(ingredient.id) ? (
                <CheckCircle2 className="w-5 h-5 text-cloudflare-orange" />
              ) : (
                <Circle className="w-5 h-5 text-gray-300 hover:text-gray-400" />
              )}
            </button>
            <div className="flex-1">
              <div className={`font-medium text-sm ${checkedItems.has(ingredient.id) ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                {ingredient.name}
                {ingredient.required && <span className="text-red-500 ml-1">*</span>}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">{ingredient.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <button className="w-full bg-cloudflare-orange text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
          Start Tutorial
        </button>
        <button className="w-full mt-2 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          Save for Later
        </button>
      </div>
    </div>
  );
}
