import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import useAchievements from '../AchievementsStore/useAchievements';
import AchievementEditor from './AchievementEditor';

const EditAchievement = ({ route, onChange }) => {
  const { achievements, setAchievements } = useAchievements();

  const achievement = achievements.find(a => a.id === route.params.achievement.id);

  return (
    <AchievementEditor achievement={achievement} />
  );
};

const styles = StyleSheet.create({
  nameInput: {
    marginTop: 14,
    textAlign: 'center',
  },
});

export default EditAchievement;
