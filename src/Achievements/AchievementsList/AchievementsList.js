import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Achievement from './Achievement/Achievement'
import EditAchievement from './Achievement/EditAchievement';
import AddAchievement from './Achievement/AddAchievement';
import { useNavigation } from '@react-navigation/native';
import guid from '../utils/guid';

const AchievementList = () => {
  const navigation = useNavigation();

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
  const [achievementInEditMode, setAchievementInEditMode] = useState(undefined);
  const [addingNewAchievement, setAddingNewAchievement] = useState(false);

  const handleSwitchToEditMode = (achievement) => {
    setAchievementInEditMode(achievement);
  };

  const handleAddAchievementPress = () => {
    setAddingNewAchievement(true);
  };

  const handleAddAchievementChange = (achievement) => {
    if (achievement.name === '') return;
    setAchievements([
      ...achievements,
      achievement
    ]);
  };

  const handleAchievementEdit = (updatedAchievement) => {
    setAchievements(achievements.map(achievement => {
      if (achievement.id === updatedAchievement.id) {
        return updatedAchievement;
      }
      return achievement;
    }));
  };

  const achievementElements = achievements.map(achievement => {
    if (achievementInEditMode === achievement) {
      return (
        <EditAchievement
          key={achievement.id}
          achievement={achievement}
          onChange={handleAchievementEdit}
        />
      );
    }

    return (
      <Achievement
        key={achievement.id}
        achievement={achievement}
        onEdit={() => handleSwitchToEditMode(achievement)}
      />
    );
  });

  const renderItem = ({ item }) => (
    <Achievement achievement={item} />
  );


  return (
    <View style={styles.container}>
      <Button title="New Achievement" onPress={navigation.navigate('Add Achievement')} />
      <FlatList
        data={achievements}
        renderItem={renderItem}
        keyExtractor={achievement => achievement.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default AchievementList;
