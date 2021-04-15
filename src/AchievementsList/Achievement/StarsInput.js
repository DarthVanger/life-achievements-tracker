import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

const StarsInput = ({ stars, onChange }) => {
  const starElements = [];

  for (let starIndex = 0; starIndex < 5; starIndex++) {
    starElements.push((
      <TouchableHighlight onPress={() => onChange(starIndex + 1)}>
        <Image
          style={{ height: 32, width: 32, opacity: starIndex < stars ? 1 : 0.5 }}
          source={require('./medal.png')}
          key={starIndex}
        />
      </TouchableHighlight>
    ));
  }

  return (
    <View style={styles.container}>
      {starElements}
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
