import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Layout from '../components/Layout/Layout'
import KawaiiHeader from '../components/KawaiiHeader/KawaiiHeader'
import ProductList from '../components/ProductList/ProductList'


const API = '/api/avo'
const Home: NextPage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    async function fetch () {
      const res = await axios(API)
      setProductList(res.data.data)
    }
    fetch()

  }, [])
  
  const router = useRouter();

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default Home
