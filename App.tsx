/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useDeviceOrientation} from '@react-native-community/hooks';
import {
  SafeAreaView,
  StyleSheet,
  Alert,
  Platform,
  StatusBar,
  View,
} from 'react-native';
import Hello from './components/Hello';
import TextField from './components/TextField';
import Text from './components/Text';
import Counter from './components/Counter';
import Scroll from './components/ScrollView';
import 'react-native-gesture-handler';
import BottomNavigation from './src/navigations/BottomStackNavigation_';
import MyAsyncStorage from './components/AsyncStorage_';
// import Login from './src/screens/Login';
import Registration from './src/screens/RegistrationScreen';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './components/Loader';
import Ratings from './components/Ratings';
import Elements from './components/Elements';
import Login from './src/auth/Login';
import StackNavigation from './src/onboarding/StackNavigation';
import Lottie from './components/LottieView';
import BackgroundImage from './src/screens/BackgroundImage';
import CustomLogin from './src/screens/CustomLogin';
// import BottomNavigation from './src/navigations/BottomStackNavigation';

function App(): JSX.Element {
  function onClick() {
    console.log('hello click');
  }

  // const Stack = createNativeStackNavigator();

  // const [initialRoute, setInitialRoute] = React.useState('');

  // React.useEffect(() => {
  //   setTimeout(authUser, 2000);
  // }, []);

  // const authUser = async () => {
  //   let data = await AsyncStorage.getItem('user');
  //   console.log(data);
  //   if (data) {
  //     data = JSON.parse(data);
  //     if (data?.loggedIn) {
  //       setInitialRoute('Home');
  //     } else {
  //       setInitialRoute('Login');
  //     }
  //   } else {
  //     setInitialRoute('Register');
  //   }
  // };

  return (
    // <CustomLogin />
    <BackgroundImage />
    // <Lottie />
    // <>
    // <SafeAreaView>
    // {/* <StatusBar barStyle={'light-content'}  /> */}
    //   {/* <Elements /> */}
    //   {/* <Login /> */}
    //   <StackNavigation />
    // </SafeAreaView>

    // </>
    // <NavigationContainer>
    //   {initialRoute == '' ? (
    //     <Loader vissible={true} />
    //   ) : (
    //     <>
    //       <Stack.Navigator initialRouteName={initialRoute}>
    //         <Stack.Screen
    //           options={{headerShown: false}}
    //           name={'Login'}
    //           component={Login}
    //         />
    //         <Stack.Screen
    //           options={{headerShown: false}}
    //           name={'Register'}
    //           component={Registration}
    //         />
    //         <Stack.Screen
    //           options={{headerShown: false}}
    //           name={'Home'}
    //           component={HomeScreen}
    //         />
    //       </Stack.Navigator>
    //     </>
    //   )}

    // <Ratings />
    // </NavigationContainer>
    // <Registration />
    // <Login />
    // <BottomNavigation />
    // <StackNavigation />
    // <MyAsyncStorage />
    // <Scroll onClick={onClick}/>
    // <Counter />
    // <TextField btn_text={'Sign Up'} />
    // <Hello text={'Hello'} />
    // <SafeAresaView style={[styles.container]}>
    //   <View style={styles.view1} />
    //   <View style={styles.view2} />
    //   {/* <Button color="orange" title="Click Me" onPress={log} /> */}
    // </SafeAresaView>
  );
}

function log() {
  Alert.alert('Database Error', 'Oops! something went wrong..', [
    {text: 'Yes', onPress: () => console.log('Yes')},
    {text: 'No', onPress: () => console.log('No')},
  ]);
}

const styles = StyleSheet.create({
  view1: {
    backgroundColor: 'dodgerblue',
    flex: 0.5,
    position: 'relative',
  },
  view2: {
    backgroundColor: 'pink',
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'relative',
  },
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  sectionTitle: {
    fontSize: 20,
    paddingBottom: 5,
    fontWeight: '200',
  },
});

export default App;
