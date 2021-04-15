import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Achievement from './Achievement/Achievement'

const AchievementList = ({ achievements }) => {
  const achievementElements = achievements.map(achievement => (
    <Achievement
      key={achievement.id}
      achievement={achievement}
    />
  ));

  return (
    <View style={styles.container}>
      {achievementElements}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AchievementList;
