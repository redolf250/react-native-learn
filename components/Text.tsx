import React from 'react'
import { TouchableOpacity } from 'react-native';

const Text = (props) => {
  return (
    <TouchableOpacity onPress={props.printtext}>
        <Text>{props.data}</Text>
    </TouchableOpacity>
    
  )
}

export default Text
