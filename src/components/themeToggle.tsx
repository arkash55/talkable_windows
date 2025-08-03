import React, { useEffect, useRef } from 'react';
import { View, Pressable, Animated, StyleSheet, Text } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { mode, setMode } = useTheme();
  const isDark = mode === 'dark';

  // Animated values
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const toggleTheme = () => {
    // animate fade out and shrink
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 0.5,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setMode(isDark ? 'light' : 'dark'); // toggle theme

      // animate fade in and grow
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  return (
    <Pressable onPress={toggleTheme} style={styles.container}>
      <Animated.Text
        style={[
          styles.icon,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        {isDark ? '🌙' : '🌞'}
      </Animated.Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 30,
    zIndex: 999,
    elevation: 3,
  },
  icon: {
    fontSize: 28,
  },
});
