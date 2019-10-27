import React from 'react';
import { StyleSheet } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

export const Loader = ({ visible }) => {
  console.log(visible);
  return (
    <AnimatedLoader
      visible={visible}
      overlayColor="rgba(255,255,255,0.75)"
      source={require('./loader.json')}
      animationStyle={styles.largeLottie}
      speed={1}
    />
  );
};

const styles = StyleSheet.create({
  largeLottie: {
    width: 80,
    height: 80,
  },
});
