"use client";
import { createContext, useState, useContext, useEffect } from 'react';

const FruitContext = createContext();

export const fruitData = {
  apple: {
    id: 'apple',
    name: 'Fuji Apples',
    headline: 'Crisp & Refreshing',
    heroQuote: 'Bite into summer with the crunchiest, juiciest apples you\'ll ever taste!',
    description: 'Fresh from the orchard and straight to your door! These bad boys are perfectly sweet, wildly crisp, and make the ultimate snack.',
    colorTheme: 'apple',
    accent: 'var(--brand-500)',
    specs: { temp: 'Chilled', origin: 'Washington, USA', index: 'Snack Ready' },
    metrics: { harvest: 'Super Sweet', brix: 'Max Crunch', priority: 'Perfect for Baking' }
  },
  mango: {
    id: 'mango',
    name: 'Alphonso Mangoes',
    headline: 'Tropical Golden Richness',
    heroQuote: 'It\'s literally sunshine in a box. Get ready for a messy, juicy masterpiece.',
    description: 'The absolute king of fruits. We fly these golden beauties in fresh so you can experience pure, melt-in-your-mouth tropical heaven.',
    colorTheme: 'mango',
    accent: 'var(--brand-500)',
    specs: { temp: 'Room Temp', origin: 'Ratnagiri, India', index: 'Melt-In-Mouth' },
    metrics: { harvest: 'Ultra Juicy', brix: 'Liquid Gold', priority: 'Perfect for Smoothies' }
  },
  pineapple: {
    id: 'pineapple',
    name: 'Golden Pineapples',
    headline: 'Sweet & Tangy Perfection',
    heroQuote: 'Tangy, sweet, and spiky on the outside. A total beach party in your mouth!',
    description: 'Hand-picked at peak ripeness in Costa Rica. These golden pineapples are so sweet you\'ll forget what sugar is.',
    colorTheme: 'pineapple',
    accent: 'var(--brand-500)',
    specs: { temp: 'Cool', origin: 'Costa Rica', index: 'Pre-Cut Ready' },
    metrics: { harvest: 'Tangy Sweet', brix: 'No Core Hassle', priority: 'Perfect for Grilling' }
  },
  orange: {
    id: 'orange',
    name: 'Valencia Oranges',
    headline: 'Juicy Citrus Burst',
    heroQuote: 'Squeeze the day! The freshest, zestiest oranges for your morning boost.',
    description: 'Bursting with Vitamin C and ridiculous amounts of juice. Whether you are snacking or juicing, these are an absolute vibe.',
    colorTheme: 'orange',
    accent: 'var(--brand-500)',
    specs: { temp: 'Chilled', origin: 'Valencia, Spain', index: 'Juice King' },
    metrics: { harvest: 'Zesty & Bright', brix: '100% Squeezable', priority: 'Perfect for Breakfast' }
  }
};

export function FruitProvider({ children }) {
  const [activeFruit, setActiveFruit] = useState('apple');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', activeFruit);
  }, [activeFruit]);

  return (
    <FruitContext.Provider value={{ 
      activeFruit, 
      setActiveFruit,
      fruitInfo: fruitData[activeFruit]
    }}>
      {children}
    </FruitContext.Provider>
  );
}

export function useFruit() {
  return useContext(FruitContext);
}
