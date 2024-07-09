/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Alert,
  Platform,
  StatusBar,
} from 'react-native';
import ApiRequest from './components/ApiRequest';
// import Login from './src/screens/Login';
import MyView from './components/project/MyView';
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

    
        // <MyView />

        <ApiRequest/>
   
    
    // <CustomLogin />
    // <BackgroundImage />
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
