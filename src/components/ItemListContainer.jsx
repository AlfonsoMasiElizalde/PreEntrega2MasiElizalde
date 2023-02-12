import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ItemList from "./ItemList"
import { traerProductos } from "./ProductsList"


export const ItemListContainer = () => {

  const [ productos, setProductos ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const { idCategoria } = useParams()

  useEffect( () => {
    if (idCategoria) {
      traerProductos()
        .then(res => {
          setProductos(res.filter(producto => producto.categoria === idCategoria))
        })
        .catch(error => console.log(error))
        .finally(()=>setLoading(false))
    } else {
      traerProductos()
        .then(res => {
          setProductos(res)
        })
        .catch(error => console.log(error))
        .finally( () => setLoading(false))
    }
  }, [idCategoria])

  return (

    loading
    ?
      <h2 style={{
        display:"flex",
        justifyContent:"center",
        fontSize:"32px"        
      }}>Por favor espere a que termine de cargar...</h2>
    :

    <div className="mostrador-productos">
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer