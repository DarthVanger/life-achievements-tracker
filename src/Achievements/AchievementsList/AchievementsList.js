import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Achievement from './Achievement'
import { useNavigation } from '@react-navigation/native';
import useAchievements from '../AchievementsStore/useAchievements';

const AchievementList = () => {
  const navigation = useNavigation();
  const { achievements, setAchievements } = useAchievements();

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

  const renderItem = ({ item }) => (
    <Achievement achievement={item} />
  );

  const hanldeAddAchievementPress = () => {
    navigation.navigate('Add Achievement')
  };

  return (
    <View style={styles.container}>
      <Button title="New Achievement" onPress={hanldeAddAchievementPress} />
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
