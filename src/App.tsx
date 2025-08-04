// App.tsx
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/themeToggle';
import RootLayout from './RootLayout';
import Tabs from './components/tabs/Tabs';


export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <RootLayout>
          <ThemeToggle />
          <Tabs />
        </RootLayout>
      </SafeAreaView>
    </ThemeProvider>
  );
}
