import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';


export default function ThemeToggle() {
  const { mode, setMode } = useTheme();

  const toggle = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <Pressable onPress={toggle} style={styles.button}>
      <Text style={styles.text}>Toggle Theme: {mode}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#0078D7',
    borderRadius: 6,
    alignSelf: 'center',
  },
  text: {
    color: '#fff',
  },
});