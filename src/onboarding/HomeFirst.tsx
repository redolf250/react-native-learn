//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');

const HomeFirst = () => {
  const navigation = useNavigation();

  const handleDone = async () => {
    navigation.navigate('Main');
    await AsyncStorage.setItem('alreadyLaunched', 'true');
  };

  return (
    <Onboarding
      onDone={handleDone}
      onSkip={handleDone}
      containerStyles={{paddingHorizontal: 15}}
      pages={[
        {
          backgroundColor: '#a7f3d0',
          image: (
            <View style={styles.lottie}>
              <LottieView
                style={styles.lottie}
                source={require('../assets/animations/booster.json')}
                autoPlay
                loop
              />
            </View>
          ),
          title: 'Boost Productivity',
          subtitle: 'Subscribe this channel to boost your productivity level',
        },
        {
          backgroundColor: '#fef3c7',
          image: (
            <View style={styles.lottie}>
              <LottieView
                source={require('../assets/animations/achieve.json')}
                autoPlay
                loop
              />
            </View>
          ),
          title: 'Work Seamlessly',
          subtitle: 'Get your work done seamlessly without interruption',
        },
        {
          backgroundColor: '#a78bfa',
          image: (
            <View style={styles.lottie}>
              <LottieView
                source={require('../assets/animations/achieve.json')}
                autoPlay
                loop
              />
            </View>
          ),
          title: 'Achieve Higher Goals',
          subtitle:
            'By boosting your productivity we help you to achieve higher goals',
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
});

export default HomeFirst;
