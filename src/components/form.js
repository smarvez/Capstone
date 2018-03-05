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
    user : [],
  }

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignIn
        ref={ c => this._form = c}
        type={User}
        options={options} />
        <Button
          title="Sign In!"
          onPress={this.handleSubmit}
        />
      </View>
    )
  }

}

export default Form;
