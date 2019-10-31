import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Modal,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import {
  Tag,
  IconButton,
  Filter,
  CardTitle,
  Header,
} from '../../components';
import { blue } from 'ansi-colors';
import { colors } from '../../theme';

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

export const Event = ({ navigation }) => {
  const [filterModal, setFilterModal] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header navigation={navigation} />
        <CardTitle text="Event Title" />
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
      <View>
        <Filter
          visible={filterModal}
          toggleFilterModal={() => setFilterModal(!filterModal)}
          items={items}
        />
      </View>
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
    borderRightWidth: 0.3,
    borderColor: '#ddd',
  },
  bookmark: {
    padding: 10,
    flex: 1,
  },
  eventDesc: {
    padding: 10,
    borderTopWidth: 0.5,
    borderColor: '#ddd',
  },
});
