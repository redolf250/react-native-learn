import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomTextInput = ({placeHolder, iconName, iconColor, password, onChangeText}) => {
  const [isVissible, setIsVissible] = useState(password);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        styles.viewContainer,
        isFocused ? styles.viewContainerFocus : styles.viewContainer,
      ]}>
      <Icon name={iconName} color={iconColor} size={35} />
      <TextInput
        secureTextEntry={isVissible}
        style={styles.textInput}
        placeholder={placeHolder}
        onChangeText={onChangeText}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
      />
      {password && (
        <Icon
          name={isVissible ? 'visibility' : 'visibility-off'}
          color={iconColor}
          size={35}
          onPress={() => setIsVissible(!isVissible)}
        />
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  viewContainer: {
    width: wp(90),
    height: hp(7),
    backgroundColor: '#ecececb7',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 3,
  },
  viewContainerFocus: {
    borderColor: '#d9d8d8',
    borderWidth: 2,
  },
  textInput: {
    width: wp(69),
    height: hp(7),
    fontSize: 20,
  },
});