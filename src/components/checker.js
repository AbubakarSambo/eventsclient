import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CheckBox from 'react-native-check-box';

import { CardTitle, FancyText } from './typography';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { colors, typography, dimensions } from '../theme';
import { IconButton } from './button';

export const Checker = ({ text, checked }) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <CheckBox
        style={{ flex: 1, padding: 10, alignItems: 'flex-end' }}
        onClick={() => console.log('l')}
        isChecked={checked}
        checkBoxColor="#fff"
        checkedCheckBoxColor={colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    height: 30,
    paddingLeft: 10,
    margin: 5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
});
