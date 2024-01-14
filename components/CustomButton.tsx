import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomButton = ({text, type, onPress}) => {
  return (
    <TouchableOpacity
      style={type === 'login' ? styles.btnLogin : styles.btnSignUp}
      onPress={onPress}>
      <Text
        style={type === 'login' ? styles.btnLoginText : styles.btnSignUpText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnLogin: {
    backgroundColor: '#090909f9',
    color: '#FFFF',
    width: wp(42),
    borderRadius: 55,
    justifyContent: 'center',
  },
  btnSignUp: {
    borderWidth: 2,
    borderColor: '#e5e1e1bf',
    width: wp(42),
    borderRadius: 55,
    justifyContent: 'center',
  },
  btnLoginText: {
    color: '#FFFF',
    textAlign: 'center',
    fontSize: 20,
  },
  btnSignUpText: {
    color: '#534f4fde',
    textAlign: 'center',
    fontSize: 20,
  },
});
