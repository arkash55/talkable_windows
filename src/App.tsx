import React from 'react';
import { SafeAreaView } from 'react-native';
import Tabs from './tabs/Tabs';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs />
    </SafeAreaView>
  );
}
