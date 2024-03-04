/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const Tab = ({selctionMode, option1, option2, onSelectSwitch}) => {
  const [getSelectionMode, setSelectionMode] = useState(selctionMode);
  const updateSwitchData = value => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View style={styles.viewContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: getSelectionMode == 1 ? '#AD40AF' : '#e4e4e4'},
        ]}
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}>
        <Text
          style={[
            styles.text,
            {color: getSelectionMode == 1 ? '#ffff' : '#AD40AF'},
          ]}>
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: getSelectionMode == 2 ? '#AD40AF' : '#e4e4e4'},
        ]}
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}>
        <Text
          style={[
            styles.text,
            {color: getSelectionMode == 2 ? '#ffff' : '#AD40AF'},
          ]}>
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  viewContainer: {
    width: '90%',
    height: 44,
    borderRadius: 10,
    backgroundColor: '#e4e4e4',
    borderColor: '#AD40AF',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
