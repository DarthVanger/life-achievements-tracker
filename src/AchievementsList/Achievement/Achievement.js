import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Stars from './Stars';

const Achievement = ({ achievement, onEdit }) => {
  const handlePress = () => {
    onEdit();
  };

  return (
    <TouchableHighlight style={styles.container} onPress={handlePress}>
      <View>
        <Stars achievement={achievement} />
        <Text>{achievement.name}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b5e8ff',
    padding: 16,
    margin: 10,
    borderRadius: 5,
    width: 160,
    height: 100,
  },
});

export default Achievement;
