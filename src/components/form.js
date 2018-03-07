import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import styles from './../../style.js';
import InputBox from './inputbox';
import SmallInputBox from './smallinputbox';



class Form extends Component {

  constructor(props) {
     super(props)
     this.state = {
         email: "",
         password: "",
         sample:""
       }
   }

  loginUser = async (method) => {
      const response = await fetch('https://e-pro-api.herokuapp.com/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',

        },
        body: JSON.stringify({
          email:this.state.email,
          password:this.state.password
        }),
      })
      const responseJson = await response.json()
      console.log(this.state.email);
      console.log(this.state.password);
      console.log(responseJson)
  }


  render() {
    return (

      <View style={styles.container}>
        <InputBox
        value={this.state.email}
         onChangeText={(text) => this.setState({email:text})}
         />

        <InputBox
        value={this.state.password}
        onChangeText={(text) => this.setState({password:text})}
        />

        <SmallInputBox/>

        <Button
          title="Sign In!"
          onPress={
          this.loginUser
          }
        />


      </View>
    )
  }



}

export default Form;
