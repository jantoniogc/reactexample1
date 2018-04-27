import React from 'react';
import { View, Button, TextInput, Text, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';


const styles = StyleSheet.create({
  textInput: {
    marginBottom: 16
  },
  linea: {
    backgroundColor: '#000000',
    height: 2
  },
  errors: {
    color: '#FF0000'
  }
});

const fieldNombre = props => (
  <View style={styles.textInput}>
    <TextInput
      placeholder={props.ph}
      onChangeText={props.input.onChange}
      value={props.input.value}
      keyboardType={props.input.name === 'correo' ? 'email-address' : 'default'}
      autoCapitalize="none"
      secureTextEntry={
        props.input.name === 'password' || props.input.name === 'confirmPassw'
      }
      onBlur={props.input.onBlur}
    />
    {props.meta.touched &&
      props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
  </View>
);

const validate = (values) => {
  const errors = {};
  const requiredFields = ['correo', 'password'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  if (
    values.correo &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)
  ) {
    errors.correo = 'Invalid email address';
  }

  if (values.password && values.password.length < 5) {
    errors.password = 'Deben ser al menos 5 caracteres';
  } else if (values.password && values.password.length > 15) {
    errors.password = 'Deben ser menos de 15 caracteres';
  }

  return errors;
};

const SignInForm = props => (
  <View>
    <Field name="correo" component={fieldNombre} ph="Correo" />
    <Field name="password" component={fieldNombre} ph="Contraseña" />
    <Button
      title="SignIn"
      onPress={props.handleSubmit((values) => {
        console.log(values);
      })}
    />
  </View>
);

export default reduxForm({
  form: 'SignInForm',
  validate
})(SignInForm);
