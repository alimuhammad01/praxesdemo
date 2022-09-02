import React from 'react'
import FeaturedListing from './components/featured'
import Header from './components/header/Header'
import './App.css';
const App = () => {
  return (
    <div className='app'>
      <Header/>
      <FeaturedListing/>
    </div>
  )
}

export default App

