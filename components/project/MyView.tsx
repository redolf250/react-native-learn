/* eslint-disable react-native/no-inline-styles */
import {Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from './Button';
import TextInput from './TextInput';
import CustomTextInput from './TextInput';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchInput from './SearchInput';
import HouseCard from './HouseCard';
import {IMAGES} from '.';
import Tab from './Tab';
import {useState} from 'react';

const MyView = () => {
  const [getTab, SetGetTab] = useState(1);
  const onSelectSwitch = (value: any) => {
    SetGetTab(value);
  };

  // const [orientation, setOrientation] = useState('portrait');

  // const getOrientation = () => {
  //   const { width, height } = Dimensions.get('window');
  //   if (width < height) {
  //     setOrientation('portrait');
  //   } else {
  //     setOrientation('landscape');
  //   }
  // };



  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {

  //       const response = await fetch('http://192.168.100.112:5159/sales')
  //       // .then((response) => console.log(JSON.stringify(response)))
  //       // .catch((error) => console.error(error));
      
  //       const jsonData = await response.json();
  //       console.log(jsonData);
      
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   getOrientation();

  //   const subscription = Dimensions.addEventListener('change', () => {
  //     getOrientation();
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  return (

    <SafeAreaView style={[styles.view]}>

      
      <Tab
        selctionMode={1}
        option1={'Free Games'}
        option2={'Paid Games'}
        onSelectSwitch={onSelectSwitch}
      />
      {getTab == 1 && (
        <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 20}}>
          Welcome to free catalouge
        </Text>
      )}
      {getTab == 2 && (
        <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 20}}>
          Welcome to Paid catalouge
        </Text>
      )}

    

      {/* <ScrollView>
        <HouseCard imageSource={IMAGES.IMAGE_1} />
        <HouseCard imageSource={IMAGES.IMAGE_2} />
        <HouseCard imageSource={IMAGES.IMAGE_3} /> 
        <HouseCard imageSource={IMAGES.IMAGE_5} />
        <HouseCard imageSource={IMAGES.IMAGE_6} />
        <HouseCard imageSource={IMAGES.IMAGE_7} />
      </ScrollView> */}

      {/* <SearchInput
        iconName={'search'}
        iconSize={35}
        placeHolder={'Search'}
        iconColor={'#767373b7'}
      /> */}

      {/* <TextInput
        iconName={'person'}
        iconSize={30}
        placeHolder={'example@example.com'}
        iconColor={'#767373b7'}
        password={false}
        onChangeText={undefined}
      />

      <TextInput
        iconName={'mail'}
        iconSize={30}
        placeHolder={'example@example.com'}
        iconColor={'#767373b7'}
        password={true}
        onChangeText={undefined}
      /> */}


    </SafeAreaView>
  );
};

export default MyView;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    flex: 1,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
