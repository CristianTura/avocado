import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import ProductSummary from '../../components/ProductSummary/ProductSummary'

const ProductItem = () => {
    const router = useRouter();
    // console.log(router)

  const [product, setProduct] = useState(null)

  const API = `/api/avo/${router.query.id}`

  useEffect(() => {
    async function fetch () {
      const res = await axios(API)
      setProduct(res.data)
    }
    fetch()
  }, [API, setProduct])
  // console.log(product)
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductItem