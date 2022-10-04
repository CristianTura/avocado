import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../global.css'
import CartProvider from '../store/Cart'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
