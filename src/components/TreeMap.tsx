import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  LayoutChangeEvent,
  Alert,
  Pressable,
} from 'react-native';

const COLORS = [
  '#FF5733', '#33FF57', '#3357FF', '#F39C12',
  '#9B59B6', '#1ABC9C', '#E74C3C', '#2ECC71',
  '#3498DB', '#E67E22', '#8E44AD', '#16A085',
];

const TAB_BAR_HEIGHT = 60; // Adjust if your tab bar is taller

type BlockData = {
  id: string;
  label?: string;
  content?: React.ReactNode;
};

interface TreeMapProps {
  data?: BlockData[];
  loading?: boolean;
}

export default function TreeMap({ data = [], loading = false }: TreeMapProps) {
  const [layout, setLayout] = useState({ width: 0, height: 0 });

  const handleLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    setLayout({ width, height });
  };

  const cellWidth = layout.width / 6;
  const cellHeight = (layout.height - TAB_BAR_HEIGHT) / 6;

  const blocks: React.ReactNode[] = [];
  let blockIndex = 0;

  const handlePress = (label: string) => {
    Alert.alert('Block Pressed', `Clicked ${label}`);
  };

  const renderBlock = (
    key: string,
    left: number,
    top: number,
    width: number,
    height: number,
    color: string,
    index: number
  ) => {
    const label = data[index]?.label ?? `Block ${index + 1}`;
    const content = loading
      ? <Text style={styles.loading}>Loading...</Text>
      : data[index]?.content ?? <Text style={styles.label}>{label}</Text>;

    return (
      <Pressable
        key={key}
        style={[
          styles.block,
          { left, top, width, height, backgroundColor: color },
        ]}
        onPress={() => handlePress(label)}
      >
        {content}
      </Pressable>
    );
  };

  if (layout.width > 0 && layout.height > 0) {
    // 4x4 main block
    blocks.push(
      renderBlock(
        'main-block',
        0,
        0,
        cellWidth * 4,
        cellHeight * 4,
        '#AED6F1',
        blockIndex++
      )
    );

    // Top-right
    for (let row = 0; row < 4; row += 2) {
      for (let col = 4; col < 6; col += 2) {
        blocks.push(
          renderBlock(
            `top-${row}-${col}`,
            col * cellWidth,
            row * cellHeight,
            cellWidth * 2,
            cellHeight * 2,
            COLORS[blockIndex % COLORS.length],
            blockIndex++
          )
        );
      }
    }

    // Bottom
    for (let row = 4; row < 6; row += 2) {
      for (let col = 0; col < 6; col += 2) {
        blocks.push(
          renderBlock(
            `bottom-${row}-${col}`,
            col * cellWidth,
            row * cellHeight,
            cellWidth * 2,
            cellHeight * 2,
            COLORS[blockIndex % COLORS.length],
            blockIndex++
          )
        );
      }
    }
  }

  return <View style={styles.container} onLayout={handleLayout}>{blocks}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  block: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loading: {
    color: '#999',
    fontStyle: 'italic',
  },
});
