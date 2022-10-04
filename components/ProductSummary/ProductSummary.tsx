import React from 'react'
import { Item, Label } from 'semantic-ui-react'
import data from "../../database/data"

import AddToCart from './AddToCart'
import ProductAttributes from './ProductAttributes'

type ProductSummaryProps = {
  product: TProduct
}

const image = "https://www.eltiempo.com/files/image_640_428/uploads/2022/08/11/62f5313e6b498.jpeg";

const ProductSummary = ({ product }: ProductSummaryProps) => {
  // console.log(data)
  return (
  <>
    <Item.Group as="section">
      <Item style={{ alignItems: 'center' }}>
        <Item.Image size="medium">
          <img src={image} alt={product.name} />
        </Item.Image>
        <Item.Content>
          <Item.Header as="h1">{product.name}</Item.Header>
          <Item.Description>
            <p>{product.price}</p>
            <Label>{`SKU: ${product.sku}`}</Label>
          </Item.Description>
          <Item.Extra>
            <AddToCart product={product} />
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
    <ProductAttributes {...product.attributes} />
  </>
  )
}


export default ProductSummary
