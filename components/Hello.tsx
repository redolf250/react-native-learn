import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Hello = props => {
  return (
    <View style={style.view}>
      <TouchableOpacity>
        <Text>{props.text}</Text>
      </TouchableOpacity>
      <View style={style.buttonView}>
        <Button
          title="Sign In"
          onPress={() => console.log('Hello welcome to sign in')}
        />
        <Button
          title="Sign Up"
          onPress={() => console.log('Hello welcome to sign up')}
        />
      </View>
    </View>
  );
};


const style = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  buttonView: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default Hello;
