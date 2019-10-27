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

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, toggleVisible] = useState(false);

  const doLogIn = () => {
    let data = {
      email,
      password,
    };
    if (email && password) {
      console.log(data);
    } else {
      console.log('error');
    }
  };
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.container}
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.subContainer}>
          <Text style={styles.textStyle}>Log In</Text>
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
          <Button text="Log In" callBack={doLogIn} />
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
    paddingTop: '40%',
    backgroundColor: colors.primaryText,
    height: '100%',
  },
  subContainer: {
    display: 'flex',
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
