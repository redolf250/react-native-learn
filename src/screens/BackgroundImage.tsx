import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {CustomButton} from '../../components/index';
import {SocialButtons} from '../../components/index';
import {Line} from '../../components/index';

const BackgroundImage = () => {
  return (
    <ImageBackground
      style={styles.imageContainer}
      source={require('../assets/newbg.png')}>
      <SafeAreaView>
        <View style={styles.viewContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton
              type={'login'}
              text={'Login'}
              onPress={() => console.log('Login Pressed')}
            />
            <CustomButton
              text={'Sign Up'}
              onPress={() => console.log('Sign Up Pressed')}
              type={undefined}
            />
          </View>
          <View style={styles.sectionContainer}>
            <Line />
            <View style={styles.section}>
              <Text style={styles.altSectionColor}>Or</Text>
            </View>
            <Line />
          </View>
          <View style={styles.thirdPartyContainer}>
            <SocialButtons
              text={'Continue with Google'}
              iconSize={15}
              type={'google'}
              raised={false}
              light={false}
              onPress={() => console.log('Continue with Google')}
            />
            <SocialButtons
              text={'Continue with Apple'}
              iconSize={20}
              type={'apple'}
              raised={false}
              light={true}
              onPress={() => console.log('Continue with Apple')}
            />
            <SocialButtons
              text={'Continue with Facebook'}
              iconSize={15}
              type={'facebook'}
              raised={false}
              light={false}
              onPress={() => console.log('Continue with Facebook')}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default BackgroundImage;

const styles = StyleSheet.create({
  imageContainer: {
    width: wp(100),
    height: hp(100),
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  viewContainer: {
    width: wp(100),
    height: hp(50),
    backgroundColor: '#FFFF',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 25,
  },
  buttonContainer: {
    width: 'auto',
    height: hp(9),
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  sectionContainer: {
    width: 'auto',
    height: hp(5),
    paddingHorizontal: 20,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'center',
  },

  altSectionColor: {
    width: wp(8),
    height: hp(8),
    color: '#a3a2a2a6',
    textAlign: 'center',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: -15,
  },
  section: {
    width: wp(10),
    height: wp(8),
    alignContent: 'center',
  },
  thirdPartyContainer: {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
