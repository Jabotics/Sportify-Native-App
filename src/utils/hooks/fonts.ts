import * as Font from 'expo-font';
import { useEffect, useState, useRef } from 'react';

export const customFonts = {
  'RobotoCondensed': require('@/assets/fonts/RobotoCondensed-VariableFont_wght.ttf'),
};

export const loadFonts = async () => {
  await Font.loadAsync(customFonts);
};

export const useLoadFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const hasLoadedFonts = useRef(false); 

  useEffect(() => {
    const loadResources = async () => {
      if (!hasLoadedFonts.current) { 
        try {
          await loadFonts();
          setFontsLoaded(true);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('An unknown error occurred');
          }
        }
        hasLoadedFonts.current = true; 
      }
    };

    loadResources();
  }, []);

  return { fontsLoaded, error }; 
};
