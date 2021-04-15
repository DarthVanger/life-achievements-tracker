import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Stars from './Stars';
import EditAchievement from './EditAchievement';

const Achievement = ({ achievement }) => {
  const [isEditModeOn, setIsEditModeOn] = useState(false);

  console.log('test');

  const handlePress = () => {
    setIsEditModeOn(true);
  };

  if (isEditModeOn) {
    return <EditAchievement achievement={achievement} />;
  }

  return (
    <TouchableHighlight style={styles.container} onPress={handlePress}>
      <View>
        <Stars achievement={achievement} />
        <Text>{achievement.name}</Text>
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
  },
});

export default Achievement;
