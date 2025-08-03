import React, { useState } from 'react';
import { View } from 'react-native';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import TabBar from './TabBar';
import GeneralScreen from './GeneralScreen';

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState<'home' | 'settings' | 'general'>('home');

  const renderScreen = () => {
    switch (selectedTab) {
        case 'home':
            return <HomeScreen />;
        case 'general': 
            return <GeneralScreen/>
        case 'settings':
            return <SettingsScreen />;
        default:
            return <HomeScreen />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {renderScreen()}
      <TabBar selectedTab={selectedTab} onTabChange={setSelectedTab} />
    </View>
  );
}
