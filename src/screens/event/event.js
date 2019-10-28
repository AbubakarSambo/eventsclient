import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import { Tag, IconButton } from '../../components';
import { blue } from 'ansi-colors';
import { colors } from '../../theme';

export const Event = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={{ width: '100%', height: 200 }}
          source={{
            uri:
              'https://www.talentedge.co.uk/wp-content/uploads/2019/05/HOME-PLACEHOLDER-EDIT.jpg',
          }}
        />
        <ScrollView horizontal={true} style={styles.tagHolder}>
          <Tag text="Costumed" />
          <Tag text="Costumed" />
          <Tag text="Costumed" />
          <Tag text="Costumed" />
          <Tag text="Costumed" />
          <Tag text="Costumed" />
          <Tag text="Costumed" />
          <Tag text="Costumed" />
          <Tag text="Costumed" />
          <Tag text="Costumed" />
          <Tag text="Costumed" />
          <Tag text="Costumed" />
          <Tag text="Costumed" />
          <Tag text="Costumed" />
        </ScrollView>
        <View style={styles.descContainer}>
          <View style={styles.details}>
            <View style={styles.detailRow}>
              <Text style={styles.bold}>Date:</Text>
              <Text> 21st December, 2019</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.bold}>Time:</Text>
              <Text> 8:30 pm</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.bold}>Location:</Text>
              <Text>
                {' '}
                12 Grimauld place asokoro abuja nigeria long address
              </Text>
            </View>
          </View>
          <View style={styles.bookmark}>
            <IconButton
              color={colors.primary}
              name="bookmark-o"
              size={30}
            />
          </View>
        </View>
        <View style={styles.eventDesc}>
          <Text>
            An event about talking about other events till there’s
            only one person crowned as the winner. An event about
            talking about other events till there’s only one person
            crowned as the winner. An event about talking about other
            events till there’s only one person crowned as the winner
            An event about talking about other events till there’s
            only one person crowned as the winner. An event about
            talking about other events till there’s only one person
            crowned as the winner. An event about talking about other
            events till there’s only one person crowned as the winner
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  tagHolder: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  descContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 130,
  },
  detailRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bold: {
    fontWeight: 'bold',
    // fontSize: 17,
  },
  details: {
    padding: 10,
    flex: 1.2,
  },
  bookmark: {
    padding: 10,
    flex: 1,
  },
  eventDesc: {
    padding: 10,
  },
});
