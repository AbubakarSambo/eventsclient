import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CardTitle, FancyText } from './typography';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { colors, typography, dimensions } from '../theme';
import { Checker } from './checker';
import { GroupButton } from './button';
import Modal from 'react-native-modal';

export const Filter = ({ visible, toggleFilterModal, items }) => {
  return (
    <Modal
      coverScreen={true}
      isVisible={visible}
      style={styles.modal}
    >
      <View style={styles.insideModal}>
        <View style={styles.header}>
          <CardTitle text="Select Filters" />
        </View>
        <ScrollView>
          {items &&
            items.map(singleItem => {
              let { id, text, checked } = singleItem;
              return (
                <Checker key={id} text={text} checked={checked} />
              );
            })}
        </ScrollView>
        <View
          style={
            {
              // display: 'flex',
              // flex: 1,
              // flexDirection: 'column-reverse',
              // backgroundColor: 'blue',
            }
          }
        >
          <View style={styles.footer}>
            <GroupButton text="Cancel" callBack={toggleFilterModal} />
            <GroupButton text="Done" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    marginTop: 100,
    marginBottom: 100,
    padding: 10,
    borderRadius: 5,
  },
  header: {
    // backgroundColor: 'orange',
    height: 30,
    flexDirection: 'column-reverse',
  },
  footer: {
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
  },
  insideModal: {
    flex: 1,
  },
});
