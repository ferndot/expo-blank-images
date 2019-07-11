import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';
import { Video } from 'expo-av';

const videos = []

export default class KioskMode extends Component {
  componentDidMount() {
    // Keep awake
    activateKeepAwake()
  }

  componentWillUnmount() {
    // Do not keep awake
    deactivateKeepAwake()
  }

  render() {
    return (
      <View style={styles.container}>
        <Video
          source={videos[0]}
          ref="videoPlayer"
          resizeMode={Video.RESIZE_MODE_CONTAIN}
          shouldPlay
          isLooping

          style={styles.video}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    flex: 1,
  },
})
