import React from 'react';
import { Text, View } from 'react-native';
import styles from './../../style.js';


const Header = ({headerText}) => {
  //descructure styles to reference our style object below. Then we'll put in the style prop
  const { textStyle, viewStyle } = styles;

  return (
    <View style = {styles.header}>
      <Text style = {styles.headerText}>E/PRO</Text>
    </View>
  )
};

export default Header;
