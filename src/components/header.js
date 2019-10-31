import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import CheckBox from 'react-native-check-box';

import { CardTitle, FancyText } from './typography';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { colors, typography, dimensions } from '../theme';
import { IconButton } from './button';

export const Header = ({ text, checked, navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <IconButton
        name="chevron-left"
        size={20}
        color={colors.primaryDark}
        callBack={goBack}
      />
    </View>
  );
};

export const HomeHeader = ({ text, children }) => {
  return (
    <ImageBackground
      source={{
        uri:
          'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/10/c0.jpg',
      }}
      style={{
        width: '100%',
        height: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={styles.landingText}>Hello, Abuja</Text>
      <Text style={styles.landingText}>What's happening?</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  landingText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    // backgroundColor: '#fff',
    height: 50,
  },
});
