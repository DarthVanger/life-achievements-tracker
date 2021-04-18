import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import AchievementsList from './src/AchievementsList/AchievementsList';
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
