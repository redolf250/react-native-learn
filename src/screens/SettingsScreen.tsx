import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const SettingsScreen = ({navigation, route}) => {
  const [isPressed, setIsPressed] = useState(false);
  // const {name} = route.params;
  return (
    <View style={style.mainContainer}>
      <Text style={style.counter}>Redolf</Text>
      <TouchableOpacity
        style={[style.opacity, isPressed ? [style.isPressed] : style.opacity]}
        onPressIn={() => setIsPressed(!isPressed)}
       >
        <Text style={style.opacityText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

// onPress={() =>
//   navigation.navigate({
//     name: 'Home',
//     params: {name: 'Redolf'},
//     merge: false,
//   })
// }

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    margin: 15,
  },
  counter: {
    width: '50%',
    height: 50,
    backgroundColor: 'grey',
    borderRadius: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  opacity: {
    width: '20%',
    height: 40,
    backgroundColor: 'dodgerblue',
    borderRadius: 15,
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

export default SettingsScreen;
