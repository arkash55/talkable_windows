import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

type TabName = 'home' | 'settings' | 'general';
type TabProps = {
  selectedTab: TabName;
  onTabChange: (tab: TabName) => void;
};

export default function TabBar({ selectedTab, onTabChange }: TabProps) {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.card }]}>
      {(['home', 'general', 'settings'] as TabName[]).map((tab) => {
        const isActive = selectedTab === tab;
        return (
          <Pressable
            key={tab}
            onPress={() => onTabChange(tab)}
            style={[
              styles.tab,
              isActive && {
                backgroundColor: theme.colors.primary + '22',
                borderRadius: 12,
              },
            ]}
          >
            <Text style={isActive
              ? [styles.activeText, { color: theme.colors.primary }]
              : [styles.inactiveText, { color: theme.colors.text }]}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // borderTopWidth and borderColor removed for clean edges
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 6,
    height: 40,
  },
  activeText: {
    fontWeight: 'bold',
  },
  inactiveText: {
    opacity: 0.7,
  },
});
