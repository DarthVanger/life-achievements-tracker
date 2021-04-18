import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Achievement from './Achievement'
import { useNavigation } from '@react-navigation/native';
import useAchievements from '../AchievementsStore/useAchievements';
import ErrorScreen from '../../ErrorScreen';

const AchievementList = () => {
  const navigation = useNavigation();
  const {
    achievements,
    setAchievements,
    isLoading,
    errorLoading,
  } = useAchievements();

  const renderItem = ({ item }) => (
    <Achievement achievement={item} />
  );

  const hanldeAddAchievementPress = () => {
    navigation.navigate('Add Achievement')
  };

  if (errorLoading) {
    return (
      <ErrorScreen>
        <Text>Error loading achievements 😔</Text>
        <Text>Please contact developer</Text>
      </ErrorScreen>
    );
  }

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
