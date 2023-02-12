import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"

import NavBar from './components/NavBar'
import Banner from "./components/Banner"
import ItemListContainer from './components/ItemListContainer'

import './App.css'
import ItemDetailContainer from "./components/ItemDetailContainer"


function App() {

  return (
    
    <BrowserRouter>

      <NavBar/>

      <Banner/>

      <Routes>
        <Route path="/" element={ <ItemListContainer /> } />

        <Route path="/categoria/:idCategoria" element={ <ItemListContainer /> } />

        <Route path="/producto/:idProducto" element={ <ItemDetailContainer /> } />

        {/* <Route path="/carrito" element={  }></Route>*/}

        <Route path="*" element={ <Navigate to={"/"} />} />
      </Routes>

    </BrowserRouter>
      
  )
}

export default App