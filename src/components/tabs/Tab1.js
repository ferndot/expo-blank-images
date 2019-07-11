import React from 'react'
import { StyleSheet, View } from 'react-native'
import ProductGrid from '~/components/ProductGrid'

import { products } from '~/utils/data'

export default class Tab1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ProductGrid products={products.slice(0, 4)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  }
})
