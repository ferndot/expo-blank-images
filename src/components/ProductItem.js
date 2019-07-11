import React from 'react'
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class ProductItem extends React.Component {
  render() {
    const { product } = this.props

    return (
      <TouchableOpacity
        style={styles.productItem}
        onPress={() => {}}
      >
        <Image
          style={styles.productImage}
          source={product.image}
        />
        <Text style={styles.productTitle}>
          { product.name }
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  productItem: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
  },
  productImage: {
    flex: 1,
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  productTitle: {
    color: '#ffffff',
    fontSize: 20,
  },
})
