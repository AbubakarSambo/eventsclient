import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { EventCard, HomeHeader } from '../../components';

let events = [
  {
    title: 'Title 1',
    description: `Event Title is an event title because if it os not then how will you know what to do with your life you bloody notorius
will you know what to do with your life you bloody notorius
  will you know what to do with your life you bloody notorius
  will you know what to do with your life you bloody notorius
  will you know what to do with your life you bloody notorius
  tagwai`,
    date: 'Monday, 12th November',
    price: 'Free',
    saved: true,
  },
  {
    title: 'Title 32',
    description: `Event Title is an event title because if it os not then how will you know what to do with your life you bloody notorius
  will you know what to do with your life you bloody notorius
  will you know what to do with your life you bloody notorius
  will you know what to do with your life you bloody notorius
  will you know what to do with your life you bloody notorius
  tagwai`,
    date: 'Monday, 12th November',
    price: 'Free',
    saved: false,
  },
  {
    title: 'Title 13',
    description: `Event Title is an event title because if it os not then how will you know what to do with your life you bloody notorius
  will you know what to do with your life you bloody notorius
  will you know what to do with your life you bloody notorius
  will you know what to do with your life you bloody notorius
  will you know what to do with your life you bloody notorius
  tagwai`,
    date: 'Monday, 12th November',
    price: 'Free',
    saved: true,
  },
  {
    title: 'Title 44',
    description: `Event Title is an event title because if it is
  tagwai`,
    date: 'Monday, 12th November',
    price: 'Free',
    saved: false,
  },
];

export const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <HomeHeader />
      <ScrollView>
        {events &&
          events.map(singleEvent => {
            return (
              <EventCard {...singleEvent} navigation={navigation} />
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
