import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AchievementsList from './src/AchievementsList/AchievementsList';
import guid from './src/utils/guid';

export default function App() {
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

  const achievements = initialAchievements;

  console.log('achievements: ', achievements);

  return (
    <View style={styles.container}>
      <AchievementsList achievements={achievements} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
