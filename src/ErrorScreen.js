import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ErrorScreen = ({ children }) => {
  return (
    <View style={styles.container}>
      {React.Children.map(children, ChildText => (
        React.cloneElement(ChildText, { style: styles.text })
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    margin: 12,
  }
});

export default ErrorScreen;
