import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import AchievementCard from './AchievementCard';
import Stars from './Stars';

const AddAchievement = ({ achievement, onPress, onChange }) => {
  const handlePress = () => {
    onPress();
  };

  return (
    <AchievementCard onPress={handlePress}>
      <Text style={styles.text}>New Achievement</Text>
    </AchievementCard>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
  },
});

export default AddAchievement;
