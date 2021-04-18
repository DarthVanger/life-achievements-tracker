import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import AchievementsList from './src/Achievements/AchievementsList/AchievementsList';
import EditAchievement from './src/Achievements/EditAchievement/EditAchievement';
import AddAchievement from './src/Achievements/AddAchievement/AddAchievement';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={AchievementsList}
        />
        <Stack.Screen
          name="Edit Achievement"
          component={EditAchievement}
        />
        <Stack.Screen
          name="Add Achievement"
          component={AddAchievement}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
