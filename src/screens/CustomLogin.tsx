import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const CustomLogin = () => {
  return (
    <SafeAreaView>
     <ImageBackground
     style={styles.imageContainer}
     source={require('../assets/back.jpeg')}
     >

     </ImageBackground>
    </SafeAreaView>
  )
}

export default CustomLogin

const styles = StyleSheet.create({
    imageContainer:{
        width: '100%',
        height: '80%',
    }
})