import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },

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

  inputStyle: {
    backgroundColor: '#FEFFFF',
    borderRadius: 25,
    height: 55,
    width:  300,
    borderColor: 'rgba(58,175,169,0.5)',
    borderWidth: 2.5,
    color: '#17252A',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 23,
    fontFamily: 'DidactGothic-Regular',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  smallInputStyle: {
    backgroundColor: '#FEFFFF',
    borderRadius: 8,
    height: 50,
    width: 60,
    borderColor: 'rgba(58,175,169,0.5)',
    borderWidth: 2.2,
    color: '#17252A',
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 23,
    fontFamily: 'DidactGothic-Regular',
  }

});

module.exports = styles;
