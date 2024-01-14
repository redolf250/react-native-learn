import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeFirst from './HomeFirst';
import MainHome from './MainHome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true')
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnboardingScreen">
        {!isFirstLaunch && (
          <Stack.Screen
            name={'OnboardingScreen'}
            options={{headerShown: false}}
            component={HomeFirst}
          />
        )}
        <Stack.Screen name={'Main'} component={MainHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;
