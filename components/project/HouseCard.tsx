import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

const HouseCard = ({imageSource}) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <ImageBackground source={imageSource} style={styles.imageContainer}>
      <View style={styles.topView}>
        <View style={styles.topViewLeftItem}>
          <Text style={styles.textColor}>4k</Text>
          <Icon name={'visibility'} color={'white'} size={25} />
        </View>
        <View style={styles.topViewRightItem}>
          <AntIcon
            name={'heart'}
            color={isLiked ? '#e70d0dfb' : 'white'}
            size={30}
            onPress={() => setIsLiked(!isLiked)}
          />
        </View>
      </View>
      <View style={styles.bottomItems}>
        <View style={styles.bottomItemsLeft}>
          <Text style={styles.facilityText}>Royal Botanic Garden</Text>
          <View style={styles.locationView}>
            <EvilIcon name={'location'} color={'white'} size={25} />
            <Text style={styles.textColor}>Hill Tower, SYD, AU</Text>
          </View>
        </View>
        <View style={styles.bottomItemsRight}>
          <TouchableOpacity
            style={styles.btnAdd}
            onPress={() => console.log('You added me!')}>
            <AntIcon name={'plus'} color={'white'} size={25} />
            <Text style={styles.textColor}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HouseCard;

const styles = StyleSheet.create({
  imageContainer: {
    width: wp(95),
    height: hp(40),
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    paddingVertical: 6,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  topView: {
    width: wp(92),
    height: hp(8),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 6,
  },
  topViewLeftItem: {
    width: 'auto',
    height: hp(6),
    backgroundColor: '#3a3a3b80',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    gap: 5,
    paddingVertical: 6,
    borderRadius: 25,
  },
  topViewRightItem: {
    width: 'auto',
    height: hp(6),
    backgroundColor: '#3a3a3b80',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 25,
  },
  textColor: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  bottomItems: {
    width: wp(92),
    height: hp(8),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 6,
  },
  bottomItemsLeft: {
    width: wp(63),
    height: hp(10),
    paddingHorizontal: 5,
    paddingVertical: 6,
    marginBottom: 15,
  },
  bottomItemsRight: {
    width: wp(30),
    height: hp(8),
    paddingHorizontal: 7,
    paddingVertical: 7,
  },
  btnAdd: {
    width: wp(26),
    height: hp(5),
    backgroundColor: '#016bfa',
    borderRadius: 30,
    paddingHorizontal: 5,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginLeft: -4,
    marginTop: 6,
  },
  facilityText: {
    width: 'auto',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  locationView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 5,
    marginLeft: -4,
  },
});
