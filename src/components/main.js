import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Main extends Component {
  state = {
    users : []
  }

  async componentWillMount(){
    const response = await fetch('https://epro.herokuapp.com/users/')
    const json = await response.json()
    this.setState({users:json})
  }

  renderUsers(){
    return this.state.users.map(user => {
      <Text>{user}</Text>
    })
  }

  render(){
    return (
      <View>
        {this.renderUsers()}
      </View>
    )
  }

}

export default Main;
