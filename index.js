import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Header from './src/components/header';
import Submit from './src/components/submit';
import Form from './src/components/form';
import InputBox from './src/components/inputbox';
import Container from './src/components/container';
import styles from './style.js';

const App = () => {

  return (
    <View>
      <Header />
      <Submit />
    </View>
  );
};

AppRegistry.registerComponent('epro', () => App);
