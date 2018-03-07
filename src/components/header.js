import React from 'react';
import { Text, View } from 'react-native';


const Header = () => {
  //descructure styles to reference our style object below. Then we'll put in the style prop
  const { header, headerText, } = styles;

  return (
    <View style = {styles.header}>
      <Text style = {styles.headerText}>E/PRO</Text>
    </View>
  )
};

const styles = {
  header: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    position: 'relative',
  },
  headerText: {
    fontSize: 20,
  },
}



export default Header;
