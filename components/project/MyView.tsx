import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from './Button';
import TextInput from './TextInput';
import CustomTextInput from './TextInput';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const MyView = () => {
  return (
    <SafeAreaView style={styles.view}>
      <Text>Hello redolf!</Text>
    </SafeAreaView>
  );
};

export default MyView;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});
