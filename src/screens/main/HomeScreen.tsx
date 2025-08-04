// HomeScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import TreeMap from '../../components/TreeMap';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (

      <TreeMap 
        loading={false}
        data={[
          { id: '1', label: 'Priority 1' },
          { id: '2', label: 'Priority 5' },
          { id: '3', label: 'Priority 6' },
          { id: '4', label: 'Priority 2' },
          { id: '5', label: 'Bottom 3' },
          { id: '6', label: 'Bottom 4' }
        ]}
      />


  );
}
