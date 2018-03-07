import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Header from './src/components/header';
import Submit from './src/components/submit';

const App = () => {
  return (
    <View>
      <Header />
      <Submit />
    </View>
  );
};

AppRegistry.registerComponent('epro', () => App);
