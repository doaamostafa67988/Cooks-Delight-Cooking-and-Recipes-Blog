import { useCallback, useEffect, useState } from 'react';

const recipes = [
  {
    id: 1,
    name: 'Savory Herb-Infused Chicken',
    image:
      'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=80',
    instructions: [
      'Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken',
    ],
    prepTimeMinutes: 20,
    cookTimeMinutes: 20,
    difficulty: 'Easy',
    servings: 3,
    rating: 4.95,
    mealType: ['Dinner'],
  },
  {
    id: 2,
    name: 'Decadent Chocolate Mousse',
    image: '/assets/chocolate-mousse.png',
    instructions: [
      'Dive into the velvety indulgence of our Decadent Chocolate Mousse. A dessert that transcends sweetness!',
    ],
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    difficulty: 'Medium',
    servings: 4,
    rating: 4.92,
    mealType: ['Dessert'],
  },
  {
    id: 3,
    name: 'Lemon Garlic Grilled Chicken',
    image:
      'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=80',
    instructions: [
      'Experience the perfect blend of zesty lemon and aromatic garlic with this roasted chicken recipe',
    ],
    prepTimeMinutes: 20,
    cookTimeMinutes: 40,
    difficulty: 'Hard',
    servings: 4,
    rating: 4.86,
    mealType: ['Dinner'],
  },
  {
    id: 4,
    name: 'Quinoa Veggie Stir-Fry',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    instructions: [
      "Quick, wholesome, and bursting with flavors, it's perfect for a healthy weeknight dinner.",
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    difficulty: 'Easy',
    servings: 3,
    rating: 4.78,
    mealType: ['Lunch', 'Dinner'],
  },
  {
    id: 5,
    name: 'Berry Bliss Smoothie Bowl',
    image:
      'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&w=900&q=80',
    instructions: [
      'This berry smoothie bowl is not only visually appealing but also a powerhouse of antioxidants.',
    ],
    prepTimeMinutes: 10,
    cookTimeMinutes: 0,
    difficulty: 'Easy',
    servings: 2,
    rating: 4.81,
    mealType: ['Breakfast', 'Snack'],
  },
  {
    id: 6,
    name: 'Spaghetti Aglio e Olio',
    image:
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80',
    instructions: [
      'A minimalist yet flavorful dish with garlic, olive oil, and a hint of red pepper flakes.',
    ],
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    difficulty: 'Easy',
    servings: 2,
    rating: 4.74,
    mealType: ['Lunch', 'Dinner'],
  },
  {
    id: 7,
    name: 'Grilled Veggies with Sauce',
    image:
      'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80',
    instructions: [
      'Served with a zesty chimichurri sauce its a perfect addition to your outdoor gatherings.',
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    difficulty: 'Medium',
    servings: 6,
    rating: 4.76,
    mealType: ['Side Dish', 'Snack'],
  },
  {
    id: 8,
    name: 'Golden Pancake Stack',
    image:
      'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80',
    instructions: [
      'Fluffy pancakes stacked high with warm syrup, berries, and a soft butter finish.',
    ],
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    difficulty: 'Easy',
    servings: 4,
    rating: 4.7,
    mealType: ['Breakfast'],
  },
  {
    id: 9,
    name: 'Roasted Tomato Soup',
    image:
      'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80',
    instructions: [
      'A silky tomato soup with roasted garlic, herbs, and a cozy weeknight flavor.',
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 35,
    difficulty: 'Easy',
    servings: 4,
    rating: 4.73,
    mealType: ['Lunch'],
  },
  {
    id: 10,
    name: 'Citrus Salmon Plate',
    image:
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80',
    instructions: [
      'Tender salmon with citrus, fresh greens, and a bright herb dressing.',
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 18,
    difficulty: 'Medium',
    servings: 2,
    rating: 4.84,
    mealType: ['Dinner'],
  },
  {
    id: 11,
    name: 'Vanilla Berry Tart',
    image:
      'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=900&q=80',
    instructions: [
      'A crisp tart shell filled with vanilla cream and topped with fresh seasonal berries.',
    ],
    prepTimeMinutes: 30,
    cookTimeMinutes: 25,
    difficulty: 'Medium',
    servings: 8,
    rating: 4.88,
    mealType: ['Dessert'],
  },
  {
    id: 12,
    name: 'Crispy Avocado Bites',
    image:
      'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80',
    instructions: [
      'Crunchy avocado bites with lime, herbs, and a creamy dipping sauce.',
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    difficulty: 'Easy',
    servings: 4,
    rating: 4.69,
    mealType: ['Snack', 'Side Dish'],
  },
];

let recipeState = {
  recipes,
  featuredRecipes: recipes,
  loading: false,
  error: null,
};

const listeners = new Set();

export const useRecipeStore = () => {
  const [state, setState] = useState(recipeState);

  useEffect(() => {
    listeners.add(setState);
    return () => listeners.delete(setState);
  }, []);

  const fetchRecipes = useCallback(() => {
    recipeState = {
      ...recipeState,
      recipes,
      featuredRecipes: recipes,
      loading: false,
      error: null,
    };
    listeners.forEach((listener) => listener(recipeState));
  }, []);

  return { ...state, fetchRecipes };
};
