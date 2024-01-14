import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Login from '../auth/Login';
import SignUp from '../auth/SignUp';
import {Header} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import NewLogin from '../auth/NewLogin';
import HomeFirst from '../onboarding/HomeFirst';
import MainHome from '../onboarding/MainHome';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Boarding">
        <Stack.Screen
          name={'Boarding'}
          options={{headerShown: false}}
          component={HomeFirst}
        />
        <Stack.Screen name={'Main'} component={MainHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;
