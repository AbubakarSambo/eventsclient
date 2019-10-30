/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { colors } from './src/theme';
import { Signup } from './src/screens/signup';
import { Login } from './src/screens/login';
import { Home } from './src/screens/home/home';
import { Saved } from './src/screens/saved/saved';
import { Profile } from './src/screens/profile/profile';
import { Event } from './src/screens/event/event';

const AuthStack = createStackNavigator(
  {
    Signup: Signup,
    Login: Login,
    Event: Event,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Signup',
  },
);
const AppStack = createBottomTabNavigator(
  {
    Home: createStackNavigator(
      {
        Home: Home,
        Event: Event,
      },
      {
        headerMode: 'none',
        initialRouteName: 'Home',
      },
    ),
    Saved: Saved,
    Profile: Profile,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Saved') {
          iconName = 'bookmark';
        } else if (routeName === 'Profile') {
          iconName = 'user';
        }
        return (
          <Icon
            color={focused ? colors.primary : colors.primaryDark}
            size={20}
            name={iconName}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: 'gray',
    },
  },
);

const SwicthNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'App',
  },
);

export default createAppContainer(SwicthNavigator);
