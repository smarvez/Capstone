import React from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './../../style.js';

const SmallInputBox = ({onChangeText}) => {

  return (
    <View>
      <TextInput
      style = {styles.smallInputStyle}
      autoCapitalize = "none"
      onChangeText={onChangeText}/>
    </View>
  )

}

export default SmallInputBox;
