import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, ActivityIndicator} from 'react-native';

const ApiRequest = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState();
  const [response, setResponse] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(res => {
        setLoading(false);
        setResponse(res);
      })
      .catch(err => {
        setLoading(false);
        setError(err);
      });
  }, []);

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator 
              size="small" 
              style={style.activityIndicator} 
            />
         
    }

    if (isError) {
      console.log(isError);
    }

    if (response) {
      console.log(response);
      return (
        <Text
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            fontWeight: '700',
            fontSize: 30,
          }}>
          {' '}
          Api Request{' '}
        </Text>
      );
    }
  };

  return <View style={style.container}>{getContent()}</View>;
};

export default ApiRequest;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loaderContainer: {
    backgroundColor: '#b5acac',
    padding: 20,
    borderRadius: 5,
    shadowColor: '#aea7a7',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  activityIndicator: {
    transform: [{ scale: 1.5 }],
  },
});
