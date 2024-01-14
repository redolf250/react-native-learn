//import liraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const MainHome = () => {
  const navigation = useNavigation();

  const handleReset = async () => {
    await AsyncStorage.removeItem('alreadyLaunched');
    navigation.navigate('OnboardingScreen');
  };

  return (
    <View style={styles.container}>
      <Text>Hello welcome</Text>
      <TouchableOpacity
        onPress={() => handleReset()}
        style={{
          color: 'white',
          backgroundColor: '#0077ca',
          width: 120,
          height: 40,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
});

export default MainHome;
