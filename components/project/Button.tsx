import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Button = ({text, onPress = {}}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0d3ef0e9',
    color: '#FFFF',
    width: wp(95),
    height: hp(6),
    borderRadius: 10,
    justifyContent: 'center',
  },

  btnText: {
    color: '#FFFF',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
