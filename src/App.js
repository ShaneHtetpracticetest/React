import React from 'react'
import Header from './header'
import Body from './body'
import Footer from './footer'
import Card from './Card'

const App = () => {
  return(
    <div>
      <Header />
      <Body />
      <Card title='t1' text='something' />
      <Card titel='t2' text='anything' />
      <Footer />
    </div>
  )
}

export default App