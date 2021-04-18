import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import AchievementCard from './AchievementCard';
import Stars from './Stars';

const Achievement = ({ achievement, onEdit }) => {
  const handlePress = () => {
    onEdit();
  };

  return (
    <AchievementCard onPress={handlePress}>
      <Stars achievement={achievement} />
      <Text style={styles.text}>{achievement.name}</Text>
    </AchievementCard>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
  },
});

export default Achievement;
