import { Step } from '../types';
import { Lightbulb } from 'lucide-react';

interface RecipeStepsProps {
  steps: Step[];
}

export default function RecipeSteps({ steps }: RecipeStepsProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Step-by-Step Instructions</h2>
      {steps.map((step) => (
        <div key={step.id} className="recipe-step">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-cloudflare-orange text-white flex items-center justify-center text-xl font-bold">
                {step.number}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{step.description}</p>
              
              {step.image && (
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full rounded-lg mb-4"
                />
              )}
              
              {step.tips && step.tips.length > 0 && (
                <div className="bg-blue-50 border-l-4 border-cloudflare-blue p-4 rounded">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-cloudflare-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-cloudflare-blue mb-2">Pro Tips</div>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {step.tips.map((tip, index) => (
                          <li key={index}>• {tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
