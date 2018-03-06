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
    position: 'relative'
  },
  
  headerText: {
    fontSize: 20,
  },

});

module.exports = styles;
