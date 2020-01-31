import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Login from './components/Login/Login'
import Form from './components/Form/Form';


export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Login />
      <Form />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
