import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Submit = () => {

  const { textStyle, buttonStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}>
        Login
      </Text>
    </TouchableOpacity>
  )
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    // paddingTop: 20,
    paddingBottom: 20
  },
  buttonStyle: {
    flex: 1,
    width: '75%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3aafa9',
    padding: 20,
    borderRadius: 8,
    borderColor: '#3aafa9',
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5
  }
};


export default Submit;
