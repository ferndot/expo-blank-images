import React from 'react'
import Navigator from '~/navigation'
import { AppLoading } from 'expo'

import { loadAssetsAsync } from '~/utils/assets'

export default class AppRoot extends React.Component {
  state = {
    isReady: false,
  }

  _loadAssetsAsync() {
    const imageAssets = [
      // Products
      require('~/assets/products/tab1/1.jpg'),
      require('~/assets/products/tab1/2.jpg'),
      require('~/assets/products/tab1/3.jpg'),
      require('~/assets/products/tab1/4.jpg'),
    ]
    const fontAssets = {
      'brush-script': require('~/assets/fonts/brush-script.ttf'),
    }

    return loadAssetsAsync(imageAssets, fontAssets);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )
    }

    return <Navigator />
  }
}
