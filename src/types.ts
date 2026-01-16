export interface Tutorial {
  id: string;
  title: string;
  author: string;
  videoUrl: string;
  videoPoster?: string;
  description: string;
  totalTime: string;
  prepTime?: string;
  cookTime?: string;
  difficulty: 'Easy' | 'Intermediate' | 'Advanced';
  overview: string;
  yield?: string;
  ingredients: Ingredient[];
  steps: Step[];
  rating: number;
  ratingCount: number;
  comments: Comment[];
  moduleId: string;
  featured?: boolean;
  updatedDate?: string;
}

export interface ModuleCollection {
  id: string;
  title: string;
  description: string;
  tutorials: Tutorial[];
}

export interface Ingredient {
  id: string;
  name: string;
  description: string;
  required: boolean;
}

export interface Step {
  id: string;
  number: number;
  title: string;
  description: string;
  timestamp?: string;
  image?: string;
  tips?: string[];
}

export interface Comment {
  id: string;
  author: string;
  avatar?: string;
  date: string;
  rating: number;
  text: string;
  helpful: number;
}

export interface UserRating {
  moduleId: string;
  rating: number;
}
