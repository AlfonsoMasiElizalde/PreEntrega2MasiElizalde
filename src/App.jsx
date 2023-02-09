import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"

import NavBar from './components/NavBar'
import Banner from "./components/Banner"
import DetailProductContainer from "./components/DetailProductContainer"
import ItemListContainer from './components/ItemListContainer'

import './App.css'


function App() {

  return (
    
    <BrowserRouter>

      <NavBar/>

      <Banner/>

      <Routes>
        <Route path="/" element={ <ItemListContainer /> }></Route>

        <Route path="/apartado/:NombreApartado" element={ <ItemListContainer /> }></Route>

        <Route path="/producto/:idProducto" element={ <DetailProductContainer /> }></Route>

        {/* <Route path="/carrito" element={  }></Route>*/}

        <Route path="*" element={ <Navigate to={"/"} />}></Route>
      </Routes>

    </BrowserRouter>
      
  )
}

export default App