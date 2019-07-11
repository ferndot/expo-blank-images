import React from 'react'
import { StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native'
import { ScreenOrientation } from 'expo'
import SafeAreaView from '~/components/SafeAreaView'
import Logo from '~/components/svg/Logo'
import Slides from '~/components/layout/Slides'
import KioskMode from '~/components/layout/KioskMode'

import { Actions } from 'react-native-router-flux'

export default class HomeView extends React.Component {
  state = {
    orientation: 'portrait',
  }

  componentDidMount() {
    this._listenForOrientationChanges()
  }

  async _listenForOrientationChanges() {
    // Focus: Allow all orientations
    this.props.navigation.addListener(
      'willFocus',
      async payload => {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL)
      }
    )

    // Blur: Allow only portrait orientations
    this.props.navigation.addListener(
      'willBlur',
      async payload => {
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.PORTRAIT
        )
      }
    )

    // Fire the handler for the initial state
    this._handleOrientationChanges(Dimensions.get('screen'))

    // Handle orientation changes
    Dimensions.addEventListener(
      'change',
      dimensions => this._handleOrientationChanges(dimensions.screen)
    )
  }

  _handleOrientationChanges(screen) {
    if (screen.height > screen.width) {
      // Portrait mode
      this.setState({ orientation: 'portrait' })
    } else {
      // Landscape mode
      this.setState({ orientation: 'landscape' })
    }
  }

  renderPortrait = () => (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => Actions.productList()}>
        <Logo style={styles.logo} />
      </TouchableOpacity>

      <Slides style={styles.slides} />
    </SafeAreaView>
  )

  renderLandscape = () => (
    <SafeAreaView style={styles.container}>
      <KioskMode />
    </SafeAreaView>
  )

  render() {
    if (this.state.orientation === 'portrait') {
      return this.renderPortrait()
    } else if (this.state.orientation === 'landscape') {
      return this.renderLandscape()
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    marginVertical: 20,
    width: 420,
    height: 350,
  },
  slides: {
    flex: 1,
  },
})
