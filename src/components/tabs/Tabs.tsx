import React, { useState } from 'react';
import { View } from 'react-native';
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import TabBar from './TabBar';
import GeneralScreen from '../../screens/GeneralScreen';

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
