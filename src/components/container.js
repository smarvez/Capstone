import React from 'react';
import { Text, View } from 'react-native';
import Submit from './submit';
import Form from './form';
import InputBox from './inputbox';
import SmallInputBox from './smallinputbox';

const Container = () => {

  const { flexStyle, } = styles;

  return (
    <View style = {styles.flexStyle}>
      <Submit />
      <InputBox />
      <SmallInputBox />
    </View>
  )

};

const styles = {
  flexStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
}

export default Container;
