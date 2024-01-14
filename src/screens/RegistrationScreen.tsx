import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Loader from '../../components/Loader';

const Registration = ({navigation}) => {
  const [inputs, setInputs] = useState({
    email: '',
    contact: '',
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
    if (!inputs.email) {
      handleErrors('Please enter email!', 'email');
      valid = false;
    }

    if (valid) {
      handleRegister();
    }
  };

  const handleRegister = () => {
    console.log(inputs);
    setLoading(!loading);
    setTimeout(() => {
      setLoading(false);
      try {
        if (inputs) {
          AsyncStorage.setItem('user', JSON.stringify(inputs))
          navigation.navigate('Login');
        }
      } catch (error) {
        Alert.alert('Error', 'Oops! Something went wrong');
      }
    }, 5000);
  };

  return (
    <View style={styles.view}>
      <Loader vissible={loading} />
      <Input
        iconName={'mail'}
        placeHolder={'Email'}
        label={'Email'}
        error={errors.Email}
        onFocus={() => handleChange(null, 'email')}
        onChangeText={text => handleChange(text, 'email')}
      />
      <Input
        iconName={'phone'}
        placeHolder={'Contact'}
        label={'Contact'}
        error={errors.Contact}
        onFocus={() => handleChange(null, 'contact')}
        onChangeText={text => handleChange(text, 'contact')}
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
      <Button title={'Register'} onPress={validate} />
      <Text
        style={styles.toRegisterPage}
        onPress={() => navigation.navigate('Login')}>
        Already have account? Login
      </Text>
    </View>
  );
};

Registration.defaultProps = {
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

export default Registration;
