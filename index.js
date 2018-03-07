import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Header from './src/components/header';
import Container from './src/components/container';
import Banner from './src/components/banner';
import styles from './style.js';

const App = () => {

  return (
    <View>
      <Header />
      <Banner />
      <Container />
    </View>
  );
};

AppRegistry.registerComponent('epro', () => App);
