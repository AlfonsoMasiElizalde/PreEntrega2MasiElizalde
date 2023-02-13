import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

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
    <div>
      <h2>
        Elegi tu producto por categoria!
        <ul style={{
          display:"flex",
          justifyContent:"space-evenly",
          alignContent:"center",
        }}>
          <Link to={"categoria/despensa"} >Despensa</Link>
          <Link to={"categoria/heladera"} >Heladera</Link>
          <Link to={"categoria/bebida"} >Bebida</Link>
        </ul>
      </h2>
      <div className="mostrador-productos">
        <ItemList productos={productos} />
      </div>
    </div>
  )
}

export default ItemListContainer