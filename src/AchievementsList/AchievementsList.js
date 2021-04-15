import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Achievement from './Achievement/Achievement'
import EditAchievement from './Achievement/EditAchievement';
import guid from '../utils/guid';

const AchievementList = () => {
  const initialAchievements = [
    {
      id: guid(),
      name: 'born',
      stars: 1,
    },
    {
      id: guid(),
      name: 'still alive',
      stars: 2,
    }
  ];

  const [achievements, setAchievements] = useState(initialAchievements);
  const [editedAchievement, setEditedAchievement] = useState(undefined);

  const handleAchievementEdit = (achievement) => {
    console.log('edit achievement: ', achievement);
    setEditedAchievement(achievement);
  };

  const handleAchievementSave = (updatedAchievement) => {
    setAchievements(achievements.map(achievement => {
      if (achievement.id === updatedAchievement.id) {
        return updatedAchievement;
      }
      return achievement;
    }));
  };

  const achievementElements = achievements.map(achievement => {
    if (editedAchievement === achievement) {
      return (
        <EditAchievement
          key={achievement.id}
          achievement={achievement}
          onSave={handleAchievementSave}
        />
      );
    }

    return (
      <Achievement
        key={achievement.id}
        achievement={achievement}
        onEdit={() => handleAchievementEdit(achievement)}
      />
    );
  });

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
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingTop: 50,
  },
});

export default AchievementList;
