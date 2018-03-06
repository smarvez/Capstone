import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
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
      email:"",
      password:"",
    }

  async updateItem(item, method) {
    await fetch('https://e-pro-api.herokuapp.com/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.email,
      }),
      }).then((response) => response.json())
          .then((responseJson) => {
            return responseJson.movies;
          })
          .catch((error) => {
            console.error(error);
        });
  }

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    let email = value.email
    let password = value.password
    this.setState({
      password:password,
      email:email
    })
    console.log('value: ', value);
  }

  render() {
    console.log("email state = ", this.state.email)
    console.log("password state = ", this.state.password)
    return (
      <View style={styles.container}>
        <SignIn
        ref={ c => this._form = c}
        type={User}
        options={options}/>
        <Button
          title="Sign In!"
          onPress={
            this.handleSubmit
            // (event)=>{
            //   event.stopPropagation()
            //   const item = {
            //     "email":this.state.email,
            //     "password":this.state.password
            //   }
            //   this.updateItem(item,"POST")
            // }
          }
        />
      </View>
    )
  }

}

export default Form;
