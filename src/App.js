import React from 'react'
import SetCarousel from './components/carousel/Carousel'
import Destination from './components/Destination/Destination'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search'
import Select from './components/select/Select';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Destination/>
      <Search/>
      <Select/>
      <SetCarousel/>
      <Footer/>
     </div>
  )
}

export default App
