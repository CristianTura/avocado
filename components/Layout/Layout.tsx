import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Container } from 'semantic-ui-react'
import Footer from '../Footer/Footer'

type Props = {
    children: React.ReactNode
}
const Layout: React.FC<Props> = ({children}) => {
  return (
    <>
      <Navbar />
        <Container as="main" text>
          {children}
        </Container>
      <Footer />
    </>
  )
}

export default Layout