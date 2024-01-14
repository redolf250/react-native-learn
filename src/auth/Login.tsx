import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {Input} from '@rneui/base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Loader from '../../components/Loader';
import {Keyboard} from 'react-native';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
} from 'react-native-reanimated';

const Login = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVissible] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <StatusBar style="light" hidden={true} StatusBarStyle={'light-content'} />
      <View style={styles.topContainer}>
        <Image
          style={{height: '205%', width: '100%', position: 'absolute'}}
          source={require('../assets/background.png')}
        />
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify().damping(3)}
          source={require('../assets/light.png')}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify().damping(3)}
          source={require('../assets/light.png')}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Animated.View
          entering={FadeInDown.delay(1000).springify()}
          style={styles.containerStyle}>
          <Icon name={'mail'} size={35} color={'#0077ca'} />
          <TextInput style={styles.textInput} placeholder={'Username'} />
        </Animated.View>
        <Animated.View
          entering={FadeInDown.duration(1000).delay(200).springify()}
          style={styles.containerStyle}>
          <Icon name={'lock'} size={35} color={'#0077ca'} />
          <TextInput
            style={styles.textInput}
            secureTextEntry={!isVisible}
            placeholder={'Password'}
          />
          <Icon
            name={isVisible ? 'visibility' : 'visibility-off'}
            size={35}
            color={'#0077ca'}
            onPress={() => setIsVissible(!isVisible)}
          />
        </Animated.View>

        <Animated.View entering={FadeInDown.duration(1000).delay(400).springify()}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              Keyboard.dismiss();
            }}>
            <Text style={styles.opacityText}>Login</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(1000).delay(600).springify()} >
          <Text
            style={{alignSelf: 'center', fontSize: 20}}
            onPress={() => navigation.navigate('SignUp')}>
            Don't have account? Register
          </Text>
        </Animated.View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  opacityText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  topContainer: {
    width: 'inherit',
    height: '55%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 30,
    justifyContent: 'center',
    position: 'relative',
  },
  bottomContainer: {
    width: '100%',
    height: '30%',
    backgroundColor: 'white',
    margin: 5,
    gap: 10,
  },
  containerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e7ecef',
    width: '95%',
    height: 60,
    borderRadius: 5,
    margin: 5,
    paddingLeft: 5,
  },

  buttonStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    height: 50,
    borderRadius: 10,
    margin: 5,
    paddingLeft: 5,
    backgroundColor: '#0077ca',
  },
  textInput: {
    width: '80%',
    fontSize: 20,
  },
  button: {
    width: '100%',
    height: 70,
  },
});
