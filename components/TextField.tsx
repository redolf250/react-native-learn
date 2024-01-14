import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TextInputBase,
  TouchableOpacity,
  Pressable,
  Modal,
} from 'react-native';

const TextField = props => {
  const [text, setText] = useState('');
  const [isPressed, setIsPressed] = useState(false);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <View style={styles.view}>
      <View style={styles.modal}>
        <Modal visible={modalIsVisible} animationType="slide">
          <TextInput
            style={styles.input}
            placeholder="Enter your name..."
            onChangeText={text => setText(text)}
          />
          <TouchableOpacity
            style={[
              styles.opacity,
              isPressed ? [styles.isPressed] : styles.opacity,
            ]}
            onPressIn={() => setIsPressed(!isPressed)}
            onPress={() => setModalIsVisible(!modalIsVisible)}>
            <Text style={styles.opacityText}>Click Me!</Text>
          </TouchableOpacity>
        </Modal>
      </View>

      <TouchableOpacity
        style={[
          styles.opacity,
          isPressed ? [styles.isPressed] : styles.opacity,
        ]}
        onPressIn={() => setIsPressed(!isPressed)}
        onPress={() => setModalIsVisible(!modalIsVisible)}>
        <Text style={styles.opacityText}>Click Me!</Text>
      </TouchableOpacity>
    </View>
  );
};

TextField.defaultProps = {
  btn_text: 'Sign In',
};

const styles = StyleSheet.create({
  view: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 10,
    backgroundColor: 'grey',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: 'dodgerblue',
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 15,
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
  modal: {
    backgroundColor: 'pink',
    margin: 10,
    gap: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TextField;
