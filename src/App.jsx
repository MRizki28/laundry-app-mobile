import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import RouterHandle from './router/Index';


const App = () => {
  return (
    <NavigationContainer>
      <RouterHandle></RouterHandle>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})