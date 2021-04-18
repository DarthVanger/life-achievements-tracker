import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

const Stars = ({ achievement }) => {
  const stars = [];
  for (let i = 0; i < achievement.stars; i++) {
    stars.push((
      <Image
        style={styles.starImage}
        source={require('./medal.png')}
        key={i}
      />
    ));
  }

  return (
    <View style={styles.container}>
      {stars}
    </View>
  );
};

const starWidth = 32;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    width: starWidth * 5,
  },
  starImage: {
    height: 32,
    width: starWidth,
  }
});

export default Stars;
