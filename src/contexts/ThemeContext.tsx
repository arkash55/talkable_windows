// theme/ThemeContext.tsx
import React, { createContext, useContext, useState } from 'react';

import { Theme } from '@react-navigation/native';
import { LightTheme, DarkTheme } from '../theme/theme';

type ThemeMode = 'light' | 'dark';

const ThemeContext = createContext<{
  theme: Theme;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}>({
  theme: LightTheme,
  mode: 'light',
  setMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('light');
  const theme = mode === 'light' ? LightTheme : DarkTheme;

  return (
    <ThemeContext.Provider value={{ theme, mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
