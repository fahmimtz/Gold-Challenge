import React from 'react'
import Header from '../components/js/header/Header';
import Footer from '../components/js/footer/Footer';


const RenderLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default RenderLayout
