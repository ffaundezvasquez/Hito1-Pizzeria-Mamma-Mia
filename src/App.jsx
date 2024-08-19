import './App.css'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/Home'
import Footer from './assets/components/Footer'
import productos from  "../src/utils/pizzas.json"
import Cart from './assets/components/Cart'



function App() {


  return (
    <>
      <Navbar/>
      <Cart productos={productos}/>
      {/* <Home productos={productos}/> */}
      <Footer/>
    </>
  )
}

export default App
