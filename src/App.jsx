import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"

import ItemListContainer from './componentes/ItemListContainer'
import NavBar from './componentes/NavBar'
import ProductoDetalle from "./componentes/ProductoDetalle"

import './App.css'



function App() {

  return (
    
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={ <ItemListContainer /> }></Route>

        <Route path="/apartado/:NombreApartado" element={ <ItemListContainer /> }></Route>

        <Route path="/producto/:idProducto" element={ <ProductoDetalle /> }></Route>

        <Route path="*" element={ <Navigate to={"/"} />}></Route>
      </Routes>

    </BrowserRouter>
      
  )
}

export default App

//         <Route></Route>