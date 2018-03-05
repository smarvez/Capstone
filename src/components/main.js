import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Main extends Component {
  state = {
    users : []
  }

  async componentDidMount(){
    const response = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
    const json = await response.json()
    this.setState({users:json})
  }

  renderUsers(){
    return this.state.users.map(user => {
      return <Text>{user.title}</Text>
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
