"use client";
import { createContext, useState, useContext, useEffect } from 'react';

const FruitContext = createContext();

export const fruitData = {
  apple: {
    id: 'apple',
    name: 'Premium Apples',
    headline: 'Crisp & Refreshing',
    heroQuote: 'Delivering structural firmness and crisp taste, engineered with integrity.',
    description: 'Sourced from high-altitude orchards, our premium apples are optically sorted for flawless color and brix levels.',
    colorTheme: 'apple',
    accent: 'var(--brand-500)',
    specs: { temp: '0°C to 4°C', origin: 'Washington, USA', index: 'A-Grade' },
    metrics: { harvest: 'Late Autumn', brix: '12-14°Bx', priority: 'Sea Freight' }
  },
  mango: {
    id: 'mango',
    name: 'Alphonso Mangoes',
    headline: 'Tropical Golden Richness',
    heroQuote: 'Delivering tropical richness, engineered with thermal precision.',
    description: 'The king of fruits, hand-picked in Ratnagiri and temperature-sealed to preserve its volatile aromatic compounds.',
    colorTheme: 'mango',
    accent: 'var(--brand-500)',
    specs: { temp: '10°C to 12°C', origin: 'Ratnagiri, India', index: 'Premium' },
    metrics: { harvest: 'Summer', brix: '18-22°Bx', priority: 'Air Express' }
  },
  pineapple: {
    id: 'pineapple',
    name: 'Golden Pineapples',
    headline: 'Sweet & Tangy Perfection',
    heroQuote: 'Delivering golden sweetness, engineered for perfect ripeness.',
    description: 'Costa Rican pineapples harvested at peak maturity and shipped with strict crown-to-base thermal monitoring.',
    colorTheme: 'pineapple',
    accent: 'var(--brand-500)',
    specs: { temp: '7°C to 10°C', origin: 'Costa Rica', index: 'Select' },
    metrics: { harvest: 'Year Round', brix: '15-17°Bx', priority: 'Sea Freight' }
  },
  orange: {
    id: 'orange',
    name: 'Valencia Oranges',
    headline: 'Juicy Citrus Burst',
    heroQuote: 'Delivering bright citrus acidity, engineered for maximum yield.',
    description: 'Valencia oranges characterized by high juice content and thin rinds, protected by our advanced humidity transit protocols.',
    colorTheme: 'orange',
    accent: 'var(--brand-500)',
    specs: { temp: '3°C to 8°C', origin: 'Valencia, Spain', index: 'Grade 1' },
    metrics: { harvest: 'Spring-Summer', brix: '10-12°Bx', priority: 'Mixed Transit' }
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
