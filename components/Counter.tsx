import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Conter = () => {
  const [isPressed, setIsPressed] = useState(false);

  let [counter, setCounter] = useState(0);

  const onValueIncrease = () => {
    counter = counter + 1;
    setCounter(counter);
  };

  const onValueDecrease = () => {
    counter = counter - 1;
    setCounter(counter);
  };

  return (
    <View style={style.mainContainer}>
      <TouchableOpacity
        style={[style.opacity, isPressed ? [style.isPressed] : style.opacity]}
        onPressIn={() => setIsPressed(!isPressed)}
        onPress={onValueDecrease}>
        <Text style={style.opacityText}>-</Text>
      </TouchableOpacity>
      <Text style={style.counter}>{counter}</Text>
      <TouchableOpacity
        style={[style.opacity, isPressed ? [style.isPressed] : style.opacity]}
        onPressIn={() => setIsPressed(!isPressed)}
        onPress={onValueIncrease}>
        <Text style={style.opacityText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    margin: 15,
  },
  counter: {
    width: '20%',
    height: 50,
    backgroundColor: 'grey',
    borderRadius: 65,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  opacity: {
    width: '14%',
    height: 50,
    backgroundColor: 'dodgerblue',
    borderRadius: 65,
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

export default Conter;
