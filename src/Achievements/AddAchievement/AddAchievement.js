import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
//import AchievementCard from './AchievementCard';
//import Stars from './Stars';

const AddAchievement = ({ achievement, onPress, onChange }) => {
  const handlePress = () => {
    onPress();
  };

  return (
    <View>
      <Text style={styles.text}>New Achievement</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
  },
});

export default AddAchievement;
