import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegistrationScreen';
import ContactsScreen from '../Screens/ContactScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../Screens/WelcomeScreen';

const Stack = createNativeStackNavigator();



const NavContainerApp = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
    <Stack.Screen name="Register" options={{headerShown: false}} component={RegisterScreen} />
    <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
    <Stack.Screen name="Home" component={ContactsScreen} />
  </Stack.Navigator>
  </NavigationContainer>

  )
}

export default NavContainerApp;


const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  input: {
    backgroundColor: "white",
    borderBottomWidth: 0.5,
    height: 60,
    marginHorizontal: 15,
    marginVertical: 5
  },
  button: {
    // height:20,
    // marginHorizontal:20,
    // marginVertical:50,
    // justifyContent:"center",
    // alignItems:"center"
    color: "white",
    fontSize: 20
  },
  buttonContainer: {
    marginHorizontal: 20,
    backgroundColor: "skyblue",
    height: 35,
    borderWidth: 1,
    // marginVertical:20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15
  }
});