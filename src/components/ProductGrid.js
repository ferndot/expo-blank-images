import React from 'react'
import Grid from 'react-native-grid-component'
import ProductItem from '~/components/ProductItem'

export default class ProductGrid extends React.Component {
  renderProduct = (product, index) => (
    <ProductItem product={product} />
  )

  render() {
    const { products } = this.props

    return (
      <Grid
        data={products}
        numColumns={2}
        renderItem={this.renderProduct}
        keyExtractor={(item, index) => item.name}
      />
    )
  }
}
