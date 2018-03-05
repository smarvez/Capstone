import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
// import Main from './src/components/main';
import Header from './src/components/header';
import Form from './src/components/form';

const App = () => {
  return (
    <View>
      <Header/>
      <Form/>
    </View>
  );
};

AppRegistry.registerComponent('epro', () => App);
