import React from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import { Divider } from '@rneui/base';

const Scroll = ({onClick}) => {
  const items = [
    {id: 1, name: 'R'},
    {id: 2, name: 'Re'},
    {id: 3, name: 'Red'},
    {id: 4, name: 'Redo'},
    {id: 5, name: 'Redol'},
    {id: 6, name: 'Redolf'},
    {id: 1, name: 'R'},
    {id: 2, name: 'Re'},
    {id: 3, name: 'Red'},
    {id: 4, name: 'Redo'},
    {id: 5, name: 'Redol'},
    {id: 6, name: 'Redolf'},
    {id: 1, name: 'R'},
    {id: 2, name: 'Re'},
    {id: 3, name: 'Red'},
    {id: 4, name: 'Redo'},
    {id: 5, name: 'Redol'},
    {id: 6, name: 'Redolf'},
  ];

  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(!Refreshing);
    console.log('Refreshing');
    setRefreshing(Refreshing);
  };
  return (
    <View style={style.scrollContainer}>
      <ScrollView
        horizontal={false}
        bounces={true}
        refreshControl={
          <RefreshControl refreshing={Refreshing} onRefresh={onRefresh} />
        }>
        {items.map((item, index) => (
          <TouchableOpacity key={index} onPress={onClick} activeOpacity={0.5}>
            <Text style={style.text} key={index}>
              {item.name}
            </Text>   
            <Divider inset={true} width={1}/> 
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  scrollContainer: {
    marginTop: '70%',
    marginLeft: '1%',
    marginRight: '1%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  text: {
    margin: 10,
    height: 70,
    backgroundColor: '#0d86ef',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 10,
    borderRadius: 5,
  },
  itemSeperator: {
    marginLeft: '2%',
    marginRight: '2%',
    height: 1.5,
    backgroundColor: 'gray',
  },
});

export default Scroll;
