"use client";
import { createContext, useState, useContext, useEffect } from 'react';

const FruitContext = createContext();

export const fruitData = {
  apple: {
    id: 'apple',
    name: 'Premium Apples',
    headline: 'Crisp & Refreshing',
    colorTheme: 'apple',
    accent: 'var(--brand-500)',
    specs: { temp: '0°C to 4°C', origin: 'Washington, USA', index: 'A-Grade' }
  },
  mango: {
    id: 'mango',
    name: 'Alphonso Mangoes',
    headline: 'Tropical Golden Richness',
    colorTheme: 'mango',
    accent: 'var(--brand-500)',
    specs: { temp: '10°C to 12°C', origin: 'Ratnagiri, India', index: 'Premium' }
  },
  pineapple: {
    id: 'pineapple',
    name: 'Golden Pineapples',
    headline: 'Sweet & Tangy Perfection',
    colorTheme: 'pineapple',
    accent: 'var(--brand-500)',
    specs: { temp: '7°C to 10°C', origin: 'Costa Rica', index: 'Select' }
  },
  orange: {
    id: 'orange',
    name: 'Valencia Oranges',
    headline: 'Juicy Citrus Burst',
    colorTheme: 'orange',
    accent: 'var(--brand-500)',
    specs: { temp: '3°C to 8°C', origin: 'Valencia, Spain', index: 'Grade 1' }
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
