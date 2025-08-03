// AppRouter.tsx
import React from 'react';
import { SafeAreaView, View, ActivityIndicator } from 'react-native';

import { useTheme } from '@react-navigation/native';
import Tabs from '../components/tabs/Tabs';
import ThemeToggle from '../components/themeToggle';
import { useAuth } from '../contexts/AuthContext';
import AuthNavigator from '../navigator/authNavigator';
import RootLayout from '../RootLayout';

export default function AppRouter() {
  const { user, loading } = useAuth();
  const { colors } = useTheme();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {user ? (
        <RootLayout>
          <ThemeToggle />
          <Tabs />
        </RootLayout>
      ) : (
        <AuthNavigator />
      )}
    </SafeAreaView>
  );
}
