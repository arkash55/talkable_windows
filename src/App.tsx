// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import AppRouter from './routers/appRouter';


export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NavigationContainer>
          <AppRouter />
        </NavigationContainer>
      </AuthProvider>
    </ThemeProvider>
  );
}
