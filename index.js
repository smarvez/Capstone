import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Header from './src/components/header';

const App = () => {
  return (
    <View>
      <Header/>
      <Form/>
      <Main/>
    </View>
  );
};

AppRegistry.registerComponent('epro', () => App);
