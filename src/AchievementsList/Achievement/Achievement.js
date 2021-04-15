import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Stars from './Stars';

const Achievement = ({ achievement }) => {
  return (
    <View style={styles.container}>
      <Stars achievement={achievement} />
      <Text>{achievement.name}</Text>
    </View>
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
  },
});

export default Achievement;
