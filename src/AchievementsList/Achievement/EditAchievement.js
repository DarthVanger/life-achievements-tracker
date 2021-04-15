import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Stars from './Stars';

const EditAchievement = ({ achievement }) => {
  const [name, setName] = useState(achievement);

  const handleChangeText = (text) => {
    setName(text);
  };

  return (
    <View style={styles.container}>
      <Stars achievement={achievement} />
      <TextInput style={styles.nameInput}
        value={name}
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
