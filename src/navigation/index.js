import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Router, Stack, Scene } from 'react-native-router-flux'

import HomeView from '~/views/HomeView'
import ProductListView from '~/views/ProductListView'

export default class RootNavigator extends Component {
  render() {
    return (
      <Router
        sceneStyle={styles.scene}
        onStateChange={this.handleNavigation}
      >
        <Stack key="root" hideNavBar>
          <Scene key="home" component={HomeView} title="Home" />
          <Scene key="productList" component={ProductListView} title="Product List" />
        </Stack>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  scene: {
    backgroundColor: '#000000',
  }
})
