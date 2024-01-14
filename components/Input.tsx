import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Input = ({
  iconName,
  error,
  placeHolder,
  password,
  label,
  onChangeText,
  onFocus,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isVissible, setIsVissible] = useState(password);
  const [errorVissible, setErrorVissible] = useState(false);

  return (
    <View style={{marginBottom: 12}}>
      <Text style={{fontSize: 15, color: 'grey', paddingBottom: 8}}>
        {label}
      </Text>
      <View
        style={[
          styles.inputContainer,
          error
            ? styles.inputContainerError
            : isFocused
            ? styles.inputContainerFocused
            : styles.inputContainer,
        ]}>
        <Icon name={iconName} color={'black'} size={30} />
        <TextInput
          style={styles.input}
          placeholder={placeHolder}
          secureTextEntry={isVissible}
          onChangeText={onChangeText}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
        />
        {password && (
          <Icon
            name={isVissible ? 'visibility' : 'visibility-off'}
            color={'black'}
            size={30}
            onPress={() => setIsVissible(!isVissible)}
          />
        )}
      </View>
      {error && <Text style={styles.errorStyle}>{error}</Text>}
    </View>
  );
};

Input.defaultProps = {
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
  errorStyle: {
    fontSize: 14,
    color: '#d60e0ed1',
    paddingTop: 8,
  },
  noError: {
    fontSize: 10,
    color: 'white',
    paddingTop: 0,
  },
  inputContainerFocused: {
    borderColor: '#6a6868ae',
    borderWidth: 2,
    borderRadius: 5,
  },
  inputContainerError: {
    borderColor: '#d60e0ed1',
    borderWidth: 2,
    borderRadius: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    width: '100%',
    padding: 5,
    backgroundColor: '#d6cfcfb0',
  },
  input: {
    width: '80%',
    padding: 10,
    fontSize: 20,
    fontWeight: '400',
    color: 'grey',
  },
  btnView: {
    width: '100%',
    height: 70,
  },
  opacity: {
    width: '100%',
    height: 50,
    backgroundColor: 'dodgerblue',
    borderRadius: 20,
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

export default Input;
