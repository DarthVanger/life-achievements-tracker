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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b5e8ff',
 //   padding: 14,
 //   margin: 10,
    borderRadius: 5,
//    height: 200,
//    width: '100%',
 //   alignSelf: 'stretch',
  },
});

export default AchievementCard;
