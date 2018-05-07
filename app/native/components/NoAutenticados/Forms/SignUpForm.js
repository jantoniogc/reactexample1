import React from 'react';
import { View, Button, TextInput, Text, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';


const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  textInput: {
    marginBottom: 16,
  },
  linea: {
    backgroundColor: '#000000',
    height: 2,
  },
  errors: {
    color: '#FF0000',

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
      secureTextEntry={(props.input.name === 'password' || props.input.name === 'confirmPassw')}
      onBlur={props.input.onBlur}
    />
    {props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
  </View>
);

const fieldImagen = props => (
  <View>
    {props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
  </View>
);

const validate = (values, props) => {
  const errors = {};
  if (!props.imagen) {
    errors.imagen = 'Imagen es requerida';
  }
  const requiredFields = [
    'nombre',
    'correo',
    'password',
    'confirmPassw',
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.nombre && values.nombre.length < 5) {
    errors.nombre = 'Deben ser al menos 5 caracteres';
  } else if (values.nombre && values.nombre.length > 10) {
    errors.nombre = 'Deben ser menos de 10 caracteres';
  }
  if (values.correo && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
    errors.correo = 'Invalid email address';
  }

  if (values.password && values.password.length < 5) {
    errors.password = 'Deben ser al menos 5 caracteres';
  } else if (values.password && values.password.length > 15) {
    errors.password = 'Deben ser menos de 15 caracteres';
  }

  if (values.password !== values.confirmPassw) {
    errors.confirmPassw = 'Las contraseñas no coinciden';
  }
  return errors;
};

const SignUpForm = props => (
  <View style={styles.container}>
    <Field name="imagen" component={fieldImagen} />
    <Field name="nombre" component={fieldNombre} ph="Nombre" />
    <Field name="correo" component={fieldNombre} ph="Correo" />
    <Field name="password" component={fieldNombre} ph="Contraseña" />
    <Field name="confirmPassw" component={fieldNombre} ph="Confirmar Contraseña" />
    <Button
      title="Registrar"
      onPress={props.handleSubmit(props.registro)}
    />
  </View>);

export default reduxForm({
  form: 'SignUpForm',
  validate
})(SignUpForm);
