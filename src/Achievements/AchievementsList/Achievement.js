import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import AchievementCard from './AchievementCard';
import Stars from './Stars';

const Achievement = ({ achievement, onEdit }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Edit Achievement', { achievement });
  };


  return (
    <TouchableHighlight style={styles.container} onPress={handlePress}>
      <View>
        <Stars achievement={achievement} />
        <Text style={styles.text}>{achievement.name}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  //  flex: 1,
  //  alignItems: 'center',
  //  justifyContent: 'center',
    backgroundColor: '#b5e8ff',
 //   padding: 14,
 //   margin: 10,
    borderRadius: 5,
//    height: 200,
//    width: '100%',
 //   alignSelf: 'stretch',
//      width: '100%',
  },
  text: {
    marginTop: 16,
    fontSize: 24,
  },
});

export default Achievement;
