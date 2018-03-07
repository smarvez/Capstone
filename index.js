import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Header from './src/components/header';
import Container from './src/components/container';
import styles from './style.js';

const App = () => {

  return (
    <View>
      <Header />
      <Container />
    </View>
  );
};

AppRegistry.registerComponent('epro', () => App);
