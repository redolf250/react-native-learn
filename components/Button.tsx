import React, {useState} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({title, onPress = () => {}}) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <TouchableOpacity
      style={[styles.opacity, isPressed ? [styles.isPressed] : styles.opacity]}
      onPressIn={() => setIsPressed(!isPressed)}
      onPress={onPress}>
      <Text style={styles.opacityText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnView: {
    width: '100%',
    height: 70,
  },
  opacity: {
    marginTop: '3%',
    width: '100%',
    height: 50,
    backgroundColor: 'dodgerblue',
    borderRadius: 5,
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
  modal: {
    backgroundColor: 'pink',
    margin: 10,
    gap: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Button;
