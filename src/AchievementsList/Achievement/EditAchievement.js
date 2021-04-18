import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import AchievementCard from './AchievementCard';
import StarsInput from './StarsInput';

const EditAchievement = ({ achievement, onChange }) => {
  const handleChangeText = (text) => {
    onChange({
      ...achivement,
      name: text,
    });
  };

  const handleChangeStars = (stars) => {
    onChange({
      ...achievement,
      stars,
    });
  };

  return (
    <AchievementCard>
      <StarsInput stars={formData.stars} onChange={handleChangeStars} />
      <TextInput style={styles.nameInput}
        value={formData.name}
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

export default EditAchievement;
