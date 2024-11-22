import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import { StatusBar } from 'expo-status-bar';

const backUp = () => {
  return (
    <ImageBackground 
    style={styles.background}
    source={require('../assets/back.jpg')}>
        <View style={styles.logoContainer}>
        <Image 
        source={require('../assets/logo.jpg')}
        style={styles.logo} />
        <Text style={{color:"blue", backgroundColor:'red'}}>Fpaz!</Text>
        </View>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
        <StatusBar style="auto" />
    </ImageBackground>
  )
}

export default backUp

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems:'center',
    },
    loginButton: {
        width:'100%',
        height:'70',
        backgroundColor: "#fc5c65",
    },
    registerButton: {
        width:'100%',
        height:'70',
        backgroundColor: "#4ecdc4",
    },
    logo: {
        width:'100',
        height:'100',
    },
    logoContainer: {
        position: 'absolute',
        top:'50',
        alignItems:'center',
    }
})