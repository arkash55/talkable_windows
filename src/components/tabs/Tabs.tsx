import React, { useState } from 'react';
import { View } from 'react-native';
import TabBar from './TabBar';
import HomeScreen from '../../screens/main/HomeScreen';
import GeneralScreen from '../../screens/main/GeneralScreen';
import SettingsScreen from '../../screens/main/SettingsScreen';


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
