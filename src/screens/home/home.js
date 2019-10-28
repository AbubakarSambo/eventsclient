import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { EventCard } from '../../components';

export const Home = () => {
  return (
    <SafeAreaView>
      <EventCard heading="Title bish" />
      <EventCard heading="Title two" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
