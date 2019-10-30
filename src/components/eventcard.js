import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { CardTitle, FancyText } from './typography';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { colors, typography, dimensions } from '../theme';
import { IconButton } from './button';

export const EventCard = props => {
  let android = Platform.OS === 'android';

  let { title, description, date, price, saved, navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.desc}>
        <CardTitle text={title} />
        <Text style={{ paddingBottom: 4 }} numberOfLines={4}>
          {description}
        </Text>
        <FancyText text={date} />
        <FancyText text={price} />
        <View style={styles.icons}>
          <IconButton
            color={saved ? colors.primary : colors.gray}
            size={20}
            name={saved ? 'bookmark' : 'bookmark-o'}
          />
          <IconButton
            color={colors.gray}
            size={20}
            name="caret-square-o-right"
          />
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
