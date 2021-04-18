import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import AchievementCard from './AchievementCard';
import StarsInput from './StarsInput';

const EditAchievement = ({ achievement, onSave }) => {
  const [formData, setFormData] = useState(achievement);

  const handleChangeText = (text) => {
    setFormData({
      ...formData,
      name: text,
    });
  };

  const handleChangeStars = (stars) => {
    setFormData({
      ...formData,
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
