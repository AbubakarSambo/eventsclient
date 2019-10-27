import React, { useState } from 'react';

import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import { Button, SocialButton } from '../components';

import { colors, typography, dimensions } from '../theme';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.container}
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.subContainer}>
          <Text style={styles.textStyle}>Sign Up</Text>

          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            autoCapitalize="none"
            placeholder="Email address"
            autoCorrect={false}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            autoCapitalize="none"
            placeholder="Password"
            autoCorrect={false}
          />
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.input}
            autoCapitalize="none"
            placeholder="Confirm Password"
            autoCorrect={false}
          />
          <TextInput
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
            autoCapitalize="none"
            placeholder="Phone Number"
            autoCorrect={false}
          />
          <Button text="Sign up" />
          <View style={styles.socialStyle}>
            <SocialButton type="facebook" />
            <SocialButton type="google" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 55,
    backgroundColor: colors.primaryText,
    height: '100%',
  },
  subContainer: {
    display: 'flex',
    margin: 'auto',
  },
  socialStyle: {
    display: 'flex',
    flexDirection: 'row',
    height: 55,
  },
  textStyle: {
    color: colors.black,
    marginTop: 3,
    marginLeft: 10,
    fontFamily: typography.primary,
    fontSize: 25,
    backgroundColor: colors.primaryText,
  },
  input: {
    height: 50,
    // width: '80%',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    margin: 10,
    fontFamily: typography.primary,
    fontSize: 16,
  },
});
