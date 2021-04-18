import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import AchievementCard from '../AchievementCard';
import useAchievements from '../AchievementsStore/useAchievements';
import StarsInput from './StarsInput';

const AchievementEditor = ({ achievement, onChange }) => {
  const { achievements, setAchievements } = useAchievements();

  console.log('achievement in editor: ', achievement);
  console.log('achievements list  ', achievements);

  const updateAchievement = (updatedAchievement) => {
    setAchievements(achievements.map(achievement => {
      if (achievement.id === updatedAchievement.id) {
        return updatedAchievement;
      }
      return achievement;
    }));
  };

  const handleChangeText = (text) => {
    updateAchievement({
      ...achievement,
      name: text,
    });
  };

  const handleChangeStars = (stars) => {
    updateAchievement({
      ...achievement,
      stars,
    });
  };

  return (
    <AchievementCard>
      <StarsInput stars={achievement.stars} onChange={handleChangeStars} />
      <TextInput style={styles.nameInput}
        value={achievement.name}
        onChangeText={handleChangeText}
      />
    </AchievementCard>
  );
};

const styles = StyleSheet.create({
  nameInput: {
    marginTop: 14,
    textAlign: 'center',
  },
});

export default AchievementEditor;
