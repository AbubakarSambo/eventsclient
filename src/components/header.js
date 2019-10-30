import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CheckBox from 'react-native-check-box';

import { CardTitle, FancyText } from './typography';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { colors, typography, dimensions } from '../theme';
import { IconButton } from './button';

export const Header = ({ text, checked }) => {
  return (
    <View style={styles.container}>
      <IconButton
        name="chevron-left"
        size={20}
        color={colors.primaryDark}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 10,
    marginTop: 10,
  },
});
