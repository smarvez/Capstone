import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Main from './src/components/main';
import Header from './src/components/header';
import Form from './src/components/form';
import InputBox from './src/components/inputbox';
import Container from './src/components/container';
import styles from './style.js';

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
