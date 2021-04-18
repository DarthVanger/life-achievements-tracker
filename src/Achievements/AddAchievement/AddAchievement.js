import React, { useState, useMemo, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import AchievementEditor from '../EditAchievement/AchievementEditor';
import guid from '../AchievementsStore/guid';
import useAchievements from '../AchievementsStore/useAchievements';

const AddAchievement = ({ onPress, onChange }) => {
  const { achievements, setAchievements } = useAchievements();

  const handlePress = () => {
    onPress();
  };

  const newAchievement = useMemo(() => ({
    id: guid(),
    stars: 1,
    name: '',
  }), []);

  useEffect(() => {
    setAchievements([
      ...achievements,
      newAchievement,
    ]);
  }, []);

  const achievement = achievements.find(a => a.id === newAchievement.id) || newAchievement;

  return (
    <AchievementEditor achievement={achievement} />
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
  },
});

export default AddAchievement;
