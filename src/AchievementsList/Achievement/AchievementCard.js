import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const AchievementCard = ({ children, ...props }) => {
  return (
    <TouchableHighlight style={styles.container} {...props}>
      <View>
        {children}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b5e8ff',
    padding: 14,
    margin: 10,
    borderRadius: 5,
    width: 160,
    height: 100,
  },
});

export default AchievementCard;
