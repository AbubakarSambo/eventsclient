import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableNativeFeedback,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { colors, typography, dimensions } from '../theme';

export const Button = ({ text, callBack }) => {
  return (
    <TouchableNativeFeedback onPress={callBack}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export const SocialButton = ({ type, callBack }) => {
  const buttonType = type === 'facebook';
  return (
    <TouchableNativeFeedback onPress={callBack}>
      <View
        style={
          buttonType ? styles.facebookButton : styles.googleButton
        }
      >
        {buttonType ? (
          <Icon
            name="facebook-f"
            color={colors.primaryText}
            type="font-awesome"
          />
        ) : (
          <Icon
            name="google"
            color={colors.primaryText}
            type="font-awesome"
          />
        )}
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    // width: '80%',
    borderWidth: 1,
    borderColor: colors.black,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: colors.primaryText,
    marginTop: 3,
    fontFamily: typography.primary,
    fontSize: 15,
  },
  facebookButton: {
    width: '30%',
    borderWidth: 1,
    borderColor: colors.black,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: colors.facebook,
    flexGrow: 1,
  },
  googleButton: {
    width: '30%',
    borderWidth: 1,
    borderColor: colors.black,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: colors.google,
    flexGrow: 1,
  },
});
