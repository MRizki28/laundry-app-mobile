import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Logo, SplashScrenn } from '../../assets/img/Index'


const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000)
  }, { navigation });

  return (
    <ImageBackground source={SplashScrenn} style={styles.background}>
      <Image source={Logo} style={styles.logo}></Image>
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 222,
    height: 108
  }
})