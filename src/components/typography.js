import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import { colors, typography, dimensions } from '../theme';

export const TextLink = ({ text, callBack }) => {
  console.log(callBack);
  let android = Platform.OS === 'android';
  return android ? (
    <TouchableNativeFeedback onPress={callBack}>
      <View style={styles.style} onPress={callBack}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity onPress={callBack}>
      <View style={styles.style} onPress={callBack}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  style: {
    marginLeft: 10,
  },
  textStyle: {
    color: colors.facebook,
  },
});
