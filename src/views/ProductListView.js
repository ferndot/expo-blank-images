import React from 'react'
import { StyleSheet, SafeAreaView, View, TouchableOpacity } from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import Logo from '~/components/svg/Logo'
import Tab1 from '~/components/tabs/Tab1'
import Tab2 from '~/components/tabs/Tab2'

import { Actions } from 'react-native-router-flux'

export default class ProductListView extends React.Component {
  state = {
    tabState: {
      index: 0,
      routes: [
        { key: 'tab1', title: 'tab1' },
        { key: 'tab2', title: 'tab2' },
      ],
    },
  }

  _renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.tabBarIndicator}
      inactiveColor="#C89D51"
      activeColor="#C89D51"
      style={styles.tabBar}
    />
  )

  _tabIndexChange = index => {
    this.setState({ tabState: { ...this.state.tabState, index }})
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => Actions.home()}>
          <Logo style={styles.logo} />
        </TouchableOpacity>
        <View style={styles.content}>
          <TabView
            navigationState={this.state.tabState}
            renderScene={SceneMap({
              tab1: Tab1,
              tab2: Tab2,
            })}
            onIndexChange={this._tabIndexChange}
            renderTabBar={this._renderTabBar}
          />
        </View>
      </SafeAreaView>
    )
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
    width: 240,
    height: 200,
  },
  content: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#000000',
  },
  tabBarIndicator: {
    backgroundColor: '#C89D51',
  },
})
