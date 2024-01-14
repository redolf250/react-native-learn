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
        screenOptions={{
          tabBarStyle: {height: 55},
          header: () => false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarBadge: 100,
            tabBarLabelStyle: {fontSize: 14, paddingBottom: 1},
            tabBarActiveTintColor: '#555',
            tabBarIcon: ({focused, color, size}) => (
              (size = focused ? 30 : 25),
              (color = focused ? 'dodgerblue' : '#555'),
              (<MaterialIcons name="home" color={color} size={size} />)
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarBadge: 2,
            tabBarLabelStyle: {fontSize: 14, paddingBottom: 1},
            tabBarActiveTintColor: '#555',
            tabBarIcon: ({focused, color, size}) => (
              (size = focused ? 30 : 25),
              (color = focused ? 'dodgerblue' : '#555'),
              (<MaterialIcons name="person" color={color} size={size} />)
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarBadge: 1,
            tabBarLabelStyle: {fontSize: 14, paddingBottom: 1},
            tabBarActiveTintColor: '#555',
            tabBarIcon: ({focused, color, size}) => (
              (size = focused ? 30 : 25),
              (color = focused ? 'dodgerblue' : '#555'),
              (<MaterialIcons name="settings" color={color} size={size} />)
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default BottomNavigation;
