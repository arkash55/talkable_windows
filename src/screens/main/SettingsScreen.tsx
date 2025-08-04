import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { signOutUser } from '../../services/authService';
import { useTheme } from '../../contexts/ThemeContext';


export default function SettingsScreen() {
  const { theme } = useTheme();

  const handleSignOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.text, { color: theme.colors.text }]}>Settings!</Text>

      <Pressable onPress={handleSignOut} style={[styles.button, { backgroundColor: theme.colors.primary }]}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, marginBottom: 24 },
  button: { padding: 12, borderRadius: 6 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
