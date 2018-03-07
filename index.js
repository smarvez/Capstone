import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Header from './src/components/header';
import Container from './src/components/container';
import Banner from './src/components/banner';
import TopNav from './src/components/topnav';
import styles from './style.js';

const App = () => {

  return (
    <View>
      <Header />
      <TopNav />
      <Banner />
      <Container />
    </View>
  );
};

AppRegistry.registerComponent('epro', () => App);
