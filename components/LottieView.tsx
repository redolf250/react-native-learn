import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from 'react-native';


const Lottie = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        style={styles.lottie}
        source={require('../assets/animations/booster.json')}
        autoPlay={true}
        loop={true}
      />

      <Text onPress={() => console.log('Your pressed me!')}>Hello</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    height: hp(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#59f8679c',
  },
  lottie: {
    width: wp(100),
    height: hp(80),
  },
});

export default Lottie;
