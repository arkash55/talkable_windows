import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
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
        return <GeneralScreen />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {renderScreen()}
      </View>
      <View style={styles.tabBarWrapper}>
        <TabBar selectedTab={selectedTab} onTabChange={setSelectedTab} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flex: 1,
    paddingBottom: 70, // enough space for floating tab bar
  },
  tabBarWrapper: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.9,
    elevation: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
