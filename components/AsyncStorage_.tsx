import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const MyAsyncStorage = () => {
  const [text, setText] = useState('');
  const [isPressed, setIsPressed] = useState(false);

  const onSaveDataPressed = async () => {
    try {
      await AsyncStorage.setItem('username', text);
      console.log("Username saved"); 
    } catch (error) {
      console.log(error); 
    }
    
  };
  return (
    <View style={styles.view}>
      <TextInput
        style={styles.input}
        placeholder="Enter your name..."
        onChangeText={text => setText(text)}
      />
      <TouchableOpacity
        onPress={onSaveDataPressed}
        style={[
          styles.opacity,
          isPressed ? [styles.isPressed] : styles.opacity,
        ]}>
        <Text style={styles.opacityText}>Save Username</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: 'dodgerblue',
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 15,
  },
  btnView: {
    width: '100%',
    height: 70,
  },
  opacity: {
    width: '100%',
    height: 50,
    backgroundColor: 'dodgerblue',
    borderRadius: 20,
    textAlign: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  isPressed: {
    backgroundColor: '#0071ca',
  },
  opacityText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default MyAsyncStorage;
