import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Splash, Akun, Pesanan } from '../page/Index';
import { BottomNavigation } from '../components/Index';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} ></BottomNavigation>}>
      <Tab.Screen name='Home' component={Home} options={{ headerShown: false }}></Tab.Screen>
      <Tab.Screen name='Pesanan' component={Pesanan} options={{ headerShown: false }}></Tab.Screen>
      <Tab.Screen name='Akun' component={Akun} options={{ headerShown: false }}></Tab.Screen>
    </Tab.Navigator>
  )
}
const RouterHandle = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default RouterHandle

const styles = StyleSheet.create({})