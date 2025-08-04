// layout/RootLayout.tsx
import { useTheme } from './contexts/ThemeContext'; 

import React from 'react';
import { View, StyleSheet } from 'react-native';


const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
});

export default RootLayout;
