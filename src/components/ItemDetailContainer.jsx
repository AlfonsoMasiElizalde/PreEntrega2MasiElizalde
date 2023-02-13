import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ItemDetail from "./ItemDetail"
import { traerProductos } from "./ProductsList"

const ItemDetailContainer = () => {
  const [ producto, setProducto ] = useState({})

  const { idProducto } = useParams()

  useEffect(()=>{
    traerProductos(idProducto)
      .then(response => setProducto(response))
      .catch(error => setProducto(error))
  }, [])

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  )
}

export default ItemDetailContainer