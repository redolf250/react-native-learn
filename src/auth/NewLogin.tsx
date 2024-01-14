import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NewLogin = () => {
  return (
    <View style={{width: '100%', height: '100%', color: 'white'}}>
      <StatusBar style="light" />
      <Image
        style={{width: '100%', height: '100%', position: 'absolute'}}
        source={require('../assets/background.png')}
      />
      <View
        style={{
          width: '100%',
          height: '50%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          position: 'absolute',
        }}>
        <Image
          style={{ width: '100%', height: '30%'}}
          source={require('../assets/light.png')}
        />
        <Image
          style={{ width: '90%', height: '60%'}}
          source={require('../assets/light.png')}
        />
      </View>
      <View>
        <Text>Login</Text>
      </View>
    </View>
    
  );
};

export default NewLogin;

const styles = StyleSheet.create({});
