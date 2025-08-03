import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';



type TabName = 'home' | 'settings' | 'general';
type TabProps = {
  selectedTab: TabName;
  onTabChange: (tab: TabName) => void;
};
export default function TabBar({ selectedTab, onTabChange }: TabProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => onTabChange('home')} style={styles.tab}>
        <Text style={selectedTab === 'home' ? styles.active : styles.inactive}>Home</Text>
      </Pressable>
      <Pressable onPress={() => onTabChange('general')} style={styles.tab}>
        <Text style={selectedTab === 'general' ? styles.active : styles.inactive}>General</Text>
      </Pressable>
      <Pressable onPress={() => onTabChange('settings')} style={styles.tab}>
        <Text style={selectedTab === 'settings' ? styles.active : styles.inactive}>Settings</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  active: {
    fontWeight: 'bold',
    color: '#0078D7',
  },
  inactive: {
    color: '#444',
  },
});
