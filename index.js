import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Main from './src/components/main.js';

const App = () => {
  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
};

AppRegistry.registerComponent('epro', () => App);
