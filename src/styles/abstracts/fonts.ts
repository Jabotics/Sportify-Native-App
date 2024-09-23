import * as Font from 'expo-font';

export const customFonts = {
};

export const loadFonts = async () => {
  await Font.loadAsync(customFonts);
};