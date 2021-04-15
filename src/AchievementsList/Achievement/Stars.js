import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

const Stars = ({ achievement }) => {
  const stars = [];
  for (let i = 0; i < achievement.stars; i++) {
    stars.push(<Image style={styles.starImage} source={require('./medal.png')} />);
  }

  return (
    <View style={styles.container}>
      {stars}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  starImage: {
    height: 32,
    width: 32,
  }
});

export default Stars;
