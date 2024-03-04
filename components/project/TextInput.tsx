import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomTextInput = ({
  placeHolder,
  iconName,
  iconColor,
  iconSize,
  password,
  onChangeText = () => {},
}) => {
  const [isVissible, setIsVissible] = useState(password);
  const [isFocused, setIsFocused] = useState(false);

  // const {width_1, height_2} = Dimensions.get("window")

  return (
    <View
      style={[
        styles.viewContainer,
        isFocused ? styles.viewContainerFocus : styles.viewContainer,
      ]}>
        
      <Icon name={iconName} color={iconColor} size={iconSize} />
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
          size={iconSize}
          onPress={() => setIsVissible(!isVissible)}
        />
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  viewContainer: {
    width: wp(93),
    height: hp(7),
    backgroundColor: '#ecececb7',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 4,
    marginVertical:15,
  },
  viewContainerFocus: {
    borderColor: '#d9d8d8',
    borderWidth: 2,
  },
  textInput: {
    width: wp(87),
    height: hp(7),
    fontSize: 20,
  },
});

// #767373b7'
