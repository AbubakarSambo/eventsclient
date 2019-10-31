import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  EventCard,
  HomeHeader,
  IconButton,
  Filter,
} from '../../components';
import { colors } from '../../theme';

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

let items = [
  { id: 1, text: 'sample', checked: true },
  { id: 5, text: 'jamie', checked: true },
  { id: 2, text: 'john', checked: true },
  { id: 3, text: 'girl', checked: false },
  { id: 46, text: 'boy', checked: true },
  { id: 47, text: 'boy', checked: false },
  { id: 48, text: 'joel', checked: true },
  { id: 49, text: 'gerald', checked: false },
  { id: 43, text: 'costume', checked: false },
];
export const Home = ({ navigation }) => {
  const [filterModal, setFilterModal] = useState(false);
  return (
    <SafeAreaView>
      <HomeHeader />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          paddingLeft: 10,
          // paddingLeft: '10',
        }}
      >
        <IconButton
          name="filter"
          size={20}
          color={colors.primary}
          callBack={() => setFilterModal(true)}
        />
      </View>
      <ScrollView>
        {events &&
          events.map(singleEvent => {
            return (
              <EventCard {...singleEvent} navigation={navigation} />
            );
          })}
      </ScrollView>
      <Filter
        visible={filterModal}
        toggleFilterModal={() => setFilterModal(!filterModal)}
        items={items}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
