import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { CardTitle, FancyText } from './typography';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { colors, typography, dimensions } from '../theme';
import { IconButton } from './button';

export const Tag = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.primary }}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    margin: 3,
    borderColor: colors.primary,
  },
});
