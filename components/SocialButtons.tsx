import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SocialIcon} from '@rneui/base';
import {TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SocialButtons = ({iconSize, type, raised, text, light, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <SocialIcon
        iconSize={iconSize}
        raised={raised}
        type={type}
        light={light}
      />
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SocialButtons;

const styles = StyleSheet.create({
  button: {
    width: 'auto',
    height: hp(7.5),
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#e5e1e1bf',
    borderRadius: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  btnText: {
    color: '#534f4fde',
    textAlign: 'center',
    fontSize: 20,
    paddingLeft: 25,
  },
});
