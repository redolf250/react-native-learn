import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Rating} from 'react-native-ratings';

const Ratings = () => {
  const [ratings, setRatings] = React.useState('');
  const values = ['Poor', 'Bad', 'Good', 'Very good', 'Excellent'];

  const handleRatings = (rating: number) => {
    setRatings(values[rating]);
  };

  return (
    <View style={styles.mainView}>
      <Rating
        type={'heart'}
        ratingCount={4}
        imageSize={30}
        startingValue={0}
        minValue={0}
        showRating={true}
        onStartRating={(rating: number) => handleRatings(rating)}
        onSwipeRating={(rating: number) => handleRatings(rating)}
      />
      <Text style={{fontSize: 20, fontWeight: '500'}}>{ratings}</Text>
    </View>
  );
};

export default Ratings;

const styles = StyleSheet.create({
  mainView: {
    gap: 10,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
});
