import React from 'react'
import { StyleSheet, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default SlideGradient = () => {
  return (
    <LinearGradient
      colors={['black', 'transparent']}
      style={styles.slideGradient}
    />
  )
}

const styles = StyleSheet.create({
  slideGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  }
})
