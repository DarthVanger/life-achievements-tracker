import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Stars from './Stars';

const EditAchievement = ({ achievement }) => {
  return (
    <View style={styles.container}>
      <Stars achievement={achievement} />
      <Text>EDIT {achievement.name}</Text>
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

export default EditAchievement;
