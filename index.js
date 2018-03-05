import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Main from './src/components/main';

const App = () => {
  return (
    <View>
      <Text>Hello World!</Text>
      <Main/>
    </View>
  );
};

AppRegistry.registerComponent('epro', () => App);
