import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import StarsInput from './StarsInput';

const EditAchievement = ({ achievement }) => {
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
    <View style={styles.container}>
      <StarsInput stars={formData.stars} onChange={handleChangeStars} />
      <TextInput style={styles.nameInput}
        value={formData.name}
        onChangeText={handleChangeText}
      />
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
    height: 100,
  },
  nameInput: {
    marginTop: 16,
    fontSize: 32,
    textAlign: 'center',
    width: '100%',
  },
});

export default EditAchievement;
