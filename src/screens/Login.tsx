import React, {useState} from 'react';
import {View, Text, StyleSheet, Keyboard, Alert} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import renderer from 'react-test-renderer';
import Loader from '../../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({}) => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleErrors = (errorMessage, input) => {
    setErrors(prevState => ({...prevState, [input]: errorMessage}));
  };

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.username) {
      handleErrors('Please enter username!', 'username');
      valid = false;
    } else if (inputs.username.match(/\S+@\S.\S+/)) {
      console.log('Hi');
    }

    if (valid) {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    Keyboard.dismiss();
    setLoading(!loading);
    setTimeout(async () => {
      setLoading(false);
      let data = await AsyncStorage.getItem('user');
      let user = {...JSON.parse(data), loggedIn: true};
      if (user.email === inputs.username && user.password === inputs.password) {
        AsyncStorage.setItem('user', JSON.stringify(user));
        // navigation.navigate('Home', {name: user.email});
      } else {
        Alert.alert('Information', 'Invalid user credentials!');
      }
    }, 5000);
  };

  const getItem = async () => {
    let data = await AsyncStorage.getItem('user');
    console.log({...JSON.parse(data), loggedIn: true});
  };

  return (
    <View style={styles.view}>
      <Loader vissible={loading} />
      <Input
        iconName={'person'}
        placeHolder={'Username'}
        label={'Username'}
        error={errors.username}
        onFocus={() => handleChange(null, 'username')}
        onChangeText={text => handleChange(text, 'username')}
      />
      <Input
        iconName={'lock'}
        placeHolder={'Password'}
        label={'Password'}
        password={true}
        error={errors.password}
        onFocus={() => handleChange(null, 'password')}
        onChangeText={text => handleChange(text, 'password')}
      />
      <Button title={'Login'} onPress={handleLogin} />
      <Text
        style={styles.toRegisterPage}
        onPress={() => navigation.navigate('Register')}>
        Don't have account? Register
      </Text>
    </View>
  );
};

Login.defaultProps = {
  btn_text: 'Sign In',
};

const styles = StyleSheet.create({
  view: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 15,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  toRegisterPage: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Login;
