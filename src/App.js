import Footer from './Pages/Footer'
import Hero from './Pages/Hero'
import ImageSlider from './Pages/ImageSlider'
import Navbar from './Pages/Navbar'
import Offers from './Pages/Offers'
import Plan from './Pages/Plan'
import Rooms from './Pages/Rooms'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <ImageSlider />
      <Footer />
    </div>
  )
}

export default App
