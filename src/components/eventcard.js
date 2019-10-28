import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { CardTitle, FancyText } from './typography';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { colors, typography, dimensions } from '../theme';
import { IconButton } from './button';

export const EventCard = ({
  heading,
  description,
  date,
  price,
  callBack,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.desc}>
        <CardTitle text={heading} />
        <Text style={{ paddingBottom: 4 }} numberOfLines={4}>
          Event Title is an event title because if it os not then how
          will you know what to do with your life you bloody notorius
          will you know what to do with your life you bloody notorius
          will you know what to do with your life you bloody notorius
          will you know what to do with your life you bloody notorius
          will you know what to do with your life you bloody notorius
          tagwai
        </Text>
        <FancyText text="Saturday" />
        <FancyText text="Free Entry" />
        <View style={styles.icons}>
          <IconButton name="bookmark-o" />
          <IconButton name="caret-square-o-right" />
        </View>
      </View>
      <View style={styles.image}>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={{
            uri:
              'https://www.talentedge.co.uk/wp-content/uploads/2019/05/HOME-PLACEHOLDER-EDIT.jpg',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 3.5,
    borderColor: colors.gray,
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    height: 180,
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
  },
  desc: {
    flex: 1,
    display: 'flex',
    padding: 2,
  },
  image: {
    flex: 1,
  },
});
