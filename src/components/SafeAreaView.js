import React from 'react'
import { StyleSheet, SafeAreaView as BaseSafeAreaView } from 'react-native'

export default SafeAreaView = ({ style, ...additionalProps }) => {
  return(
    <BaseSafeAreaView
      style={{ ...customStyle, ...style }} {...additionalProps}
    />
  )
}

const customStyle = StyleSheet.create({
  marginTop: 25,
})
