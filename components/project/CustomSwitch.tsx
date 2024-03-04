import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const CustomSwitch = ({selctionMode, text, onSelectSwitch, number}) => {
  const [getSelectionMode, setSelectionMode] = useState(selctionMode);
  const updateSwitchData = value => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor:
              getSelectionMode == {number} ? '#AD40AF' : '#e4e4e4',
          },
        ]}
        activeOpacity={1}
        onPress={() => updateSwitchData({number})}>
        <Text
          style={[
            styles.text,
            {color: getSelectionMode == {number} ? '#ffff' : '#AD40AF'},
          ]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
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
