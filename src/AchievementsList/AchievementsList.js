import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Achievement from './Achievement/Achievement'
import EditAchievement from './Achievement/EditAchievement';

const AchievementList = ({ achievements }) => {
  const [editedAchievement, setEditedAchievement] = useState(undefined);

  const handleAchievementEdit = (achievement) => {
    setEditedAchiement(achievement);
  }

  const achievementElements = achievements.map(achievement => {
    if (editedAchievement === achievement) {
      return <EditAchievement achievement={achievement} />;
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AchievementList;
