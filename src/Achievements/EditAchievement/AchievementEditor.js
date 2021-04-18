import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import AchievementCard from '../AchievementCard';
import useAchievements from '../AchievementsStore/useAchievements';
import StarsInput from './StarsInput';
import ErrorScreen from '../../ErrorScreen';

const AchievementEditor = ({ achievement, onChange }) => {
  const { achievements, setAchievements, errorSaving } = useAchievements();

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

  if (errorSaving) {
    return (
      <ErrorScreen>
        <Text>Error saving achievement 😔</Text>
        <Text>Please contact developer</Text>
      </ErrorScreen>
    );
  }

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
