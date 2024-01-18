import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchInput = ({
  placeHolder,
  iconName,
  iconColor,
  iconSize,
  onChangeText = () => {},
}) => {
  return (
    <View style={styles.viewContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={placeHolder}
        onChangeText={onChangeText}
      />
      <Icon name={iconName} color={iconColor} size={iconSize} />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  viewContainer: {
    width: wp(92),
    height: hp(7),
    backgroundColor: '#e4e1e17e',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  textInput: {
    width: wp(78),
    height: hp(7),
    fontSize: 20,
    paddingLeft: 15,
  },
});
