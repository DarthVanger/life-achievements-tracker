import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const StarsInput = ({ achievement }) => {
  const [name, setName] = useState(achievement);
  const stars = [];

  for (let starIndex = 0; starIndex < 5; starIndex++) {
    stars.push((
      <Image
        style={{ height: 32, width: 32, opacity: starIndex < achievement.stars ? 1 : 0.5 }}
        source={require('./medal.png')}
        key={starIndex}
      />
    ));
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
});

export default StarsInput;
