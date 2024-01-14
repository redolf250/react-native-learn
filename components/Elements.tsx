import {StyleSheet, Switch, Text, View} from 'react-native';
import React from 'react';
import {
  Avatar,
  BottomSheet,
  CheckBox,
  FAB,
  Input,
  Overlay,
  PricingCard,
  Slider,
  SocialIcon,
  SpeedDial,
} from '@rneui/base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Elements = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  return (
    <View style={styles.mainContainer}>
      <Avatar
        rounded={true}
        // containerStyle={{height:200, width: 200}}
        source={{uri: 'C:/Users/BTC OMEN/Pictures/New folder (2)/re.png'}}
      />
      <Switch
        trackColor={{false: 'grey', true: 'dodgerblue'}}
        thumbColor={'dodgerblue'}
        value={isEnabled}
        onValueChange={() => setIsEnabled(!isEnabled)}
      />
      <Slider
        animateTransitions={true}
        style={{width: 350, height: 20}}
        thumbTintColor={'dodgerblue'}
        trackStyle={{color: 'dodgerblue'}}
      />
      <CheckBox
        checked={isChecked}
        title={'Start Reading'}
        checkedTitle={'Done Reading'}
        onPress={() => setIsChecked(!isChecked)}
      />
      <CheckBox
        checked={isChecked}
        title={'Start Reading'}
        checkedTitle={'Done Reading'}
        onPress={() => setIsChecked(!isChecked)}
        checkedIcon={'dot-circle-o'}
        uncheckedIcon={'circle-o'}
      />
      <Input
        placeholder={'Username'}
        leftIcon={<Icon name={'person'} color={'black'} size={30} />}
        secureTextEntry={true}
        onFocus={() => console.log("I'm Focused")}
        inputContainerStyle={{
          backgroundColor: '#ffd2d2',
          borderColor: '#ffd2d2',
          borderWidth: 3,
          borderRadius: 5,
        }}
      />
      <Overlay
        isVisible={isEnabled}
        overlayStyle={{width: '90%', height: '90%', backgroundColor: '#fff'}}
        onBackdropPress={() => setIsEnabled(!isEnabled)}>
        <PricingCard
          title={'Free'}
          color={'green'}
          price={'0'}
          info={['1 User', 'Basic Support', 'All Core Features']}
          button={{title: 'Buy', icon: 'flight-takeoff'}}
          onButtonPress={() => setIsEnabled(!isEnabled)}
        />
        <PricingCard
          title={'Premium'}
          color={'dodgerblue'}
          price={'$100'}
          info={['10 User', 'Full Support', 'All Core Features']}
          button={{title: 'Buy', icon: 'flight-takeoff'}}
          onButtonPress={() => setIsEnabled(!isEnabled)}
        />
      </Overlay>
      <FAB
        // title={'ADD'}
        placement={'left'}
        icon={<Icon name={'add-circle'} color={'white'} size={25} />}
        onPress={() => setIsEnabled(!isEnabled)}
      />
      <SpeedDial
        isOpen={open}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
        icon={{name: 'edit', color: 'white'}}
        openIcon={{name: 'close', color: 'white'}}>
        <SpeedDial.Action title={'ADD'} icon={{name: 'add', color: 'white'}} />
        <SpeedDial.Action
          title={'PURCHASE'}
          icon={{name: 'payment', color: 'white'}}
        />
        <SpeedDial.Action
          title={'Settings'}
          icon={{name: 'settings', color: 'white'}}
          onPress={() => setIsEnabled(!isEnabled)}
        />
      </SpeedDial>
      <SocialIcon type={'twitter'} title={'Twitter'} />
      <SocialIcon type={'whatsapp'} title={'Twitter'} />
      <SocialIcon type={'facebook'} title={'Twitter'} />
      <SocialIcon
        type={'instagram'}
        title={'Twitter'}
        onPress={() => console.log('Instagram')}
      />
      <BottomSheet/>
    </View>
  );
};

export default Elements;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    marginVertical: 15,
  },
});
