import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation, route}) => {
  const [isPressed, setIsPressed] = React.useState(false);
  const [userData, setUserData] = React.useState(false);
  // const {name} = route.params;

  // React.useEffect(() => {
  //   getUserData()
    
  // }, []);

  // const getUserData = async () => {
  //   let data = await AsyncStorage.getItem('user');
  //   setUserData(JSON.parse(data));
    
  // };

  const handleLogout = async () => {
    let data = await AsyncStorage.getItem('user');
    let user = {...JSON.parse(data), loggedIn: false};
    AsyncStorage.setItem('user', JSON.stringify(user));
    navigation.navigate('Login');
    console.log(user)
  };

  return (
    <View style={style.mainContainer}>
      <Text style={style.counter}>Redolf</Text>
      <TouchableOpacity
        style={[style.opacity, isPressed ? [style.isPressed] : style.opacity]}
        onPressIn={() => setIsPressed(!isPressed)}
        onPress={handleLogout}>
        <Text style={style.opacityText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

// onPress={() =>
//   navigation.navigate({name: 'Settings', params: {name: 'Asamani'}})
// }

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    margin: 5,
  },
  counter: {
    width: '80%',
    height: 50,
    backgroundColor: 'grey',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  opacity: {
    width: '40%',
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
});

export default HomeScreen;
