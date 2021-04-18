import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AchievementsList from './src/AchievementsList/AchievementsList';

export default function App() {
  return (
    <AchievementsList />
  );
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AchievementsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
