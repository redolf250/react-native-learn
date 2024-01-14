import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

const Loader = ({vissible = false}) => {
  const {height, width} = useWindowDimensions();
  return (
    vissible && (
      <View style={[style.container, {height, width}]}>
        <View style={style.loader}>
          <ActivityIndicator size={'large'} color={'blue'} />
          <Text style={{marginRight: 10, fontSize: 16, fontWeight: '400'}}>
            Loading...
          </Text>
        </View>
      </View>
    )
  );
};

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: -20,
    backgroundColor: 'rgba(0, 0, 0 , 0.5)',
    justifyContent: 'center',
  },
  loader: {
    height: 80,
    gap: 10,
    marginHorizontal: 50,
    backgroundColor: '#ffff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
});

export default Loader;
