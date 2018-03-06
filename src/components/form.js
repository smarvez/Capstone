import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import t from 'tcomb-form-native';
import styles from './../../style.js';

const SignIn = t.form.Form;

const User = t.struct({
  email: t.String,
  password: t.String,
});

const options = {
  fields: {
    email: {
      error: 'Please enter an email address',
    },
    password:{
      error: 'Please enter a password',
    },
  },
}

class Form extends Component {

  state = {
      email: "",
      password: ""
    }

  async APICall(method) {
    try {
      let response = await fetch('https://e-pro-api.herokuapp.com/login', {
        method: method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email:this.state.email,
          password:this.state.password
        }),
      })
      let responseJson = await response.json()
      console.log(responseJson)
      return responseJson
        } catch(error) {
            console.error(error);
          }
  }

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    let newEmail = value.email
    let newPassword = value.password
    this.setState({
      email:newEmail,
      password:newPassword
    })
    this.APICall('POST')
  }

  render() {

    return (
      <View style={styles.container}>

        {/*// <TextInput
        // autoCapitalize = 'none'
        // />*/}

        <SignIn
        autoCapitalize="none"
        ref={ c => this._form = c}
        type={User}
        options={options}/>

        <Button
          title="Sign In!"
          onPress={
            this.handleSubmit
          }/>

      </View>
    )
  }



}

export default Form;
