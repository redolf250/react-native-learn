import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarActiveTintColor: '#555',
          tabBarLabelStyle: {fontSize: 14, paddingBottom: 1},
          tabBarStyle: {height: 60},
          header: () => false,
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
              size = focused ? 30 : 25;
              color = focused ? 'dodgerblue' : '#555';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
              size = focused ? 30 : 25;
              color = focused ? 'dodgerblue' : '#555';
            } else if (route.name === 'Tickets') {
              iconName = 'payment';
              size = focused ? 30 : 25;
              color = focused ? 'dodgerblue' : '#555';
            } else if (route.name === 'Profile') {
              iconName = 'person';
              size = focused ? 30 : 25;
              color = focused ? 'dodgerblue' : '#555';
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen
          options={{tabBarBadge: 100}}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{tabBarBadge: 2}}
          name="Tickets"
          component={SettingsScreen}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default BottomNavigation;
