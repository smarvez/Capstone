import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Main extends Component {
  state = {
    users : []
  }

  async componentDidMount(){
    const response = await fetch('https://e-pro-api.herokuapp.com/users')
    const json = await response.json()
    console.log("json = ",json);
    this.setState({users : json})
  }

  renderUsers(){
    console.log(this.state.users)
    return this.state.users.map(user => {
      return <Text key={user.id}>{user.first_name}</Text>
    })
  }

  render() {
    return (
      <View>
        <Text>{this.renderUsers()}</Text>
      </View>
    )
  }

}

export default Main;
