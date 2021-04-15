import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Stars from './Stars';

const Achievement = ({ achievement, onEdit }) => {
  const [achievementWasPressed, setAchievementWasPressed] = useState(false);

  if (achievementWasPressed) {
    return <Text>asdf</Text>;
  }
  const handlePress = () => {
    setAchievementWasPressed(true);
  };

  return (
    <TouchableHighlight style={styles.container} onPress={handlePress}>
      <View>
        <Stars achievement={achievement} />
        <Text>{achievement.name}</Text>
        <Text>pressed: {achievementWasPressed ? 'true' : 'false'}</Text>
      </View>
    </TouchableHighlight>
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
});

export default Achievement;
