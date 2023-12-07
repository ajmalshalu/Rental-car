import React, { Fragment } from 'react'
import Router from '../../routers/Router'
import Staff from '../../pages/Staff'
import Headers from '../Header/Headers'
import Footer from '../Footer/Footer'

const Layout1 = () => {
  return (
    <Fragment>
    <div>
      <Router />
    </div>
    <Footer />
  </Fragment>
  )
}

export default Layout1