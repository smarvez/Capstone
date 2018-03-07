import React from 'react';
import { Text, View } from 'react-native';

const TopNav = () => {

  const {topNavStyle, topNavText} = styles;

  return (
    <View style = {styles.topNavStyle}>
      <Text style = {styles.topNavText}>E/PRO</Text>
    </View>
  )
}

const styles = {
  topNavStyle: {
      backgroundColor: '#DEF2F1',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      position: 'relative',
  },
  topNavText:{
    fontSize: 20,
    fontFamily: 'DidactGothic-Regular',
  }
}

export default TopNav;
