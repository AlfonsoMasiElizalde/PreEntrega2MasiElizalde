import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import ProdDetail from "./ProdDetail";
import { traerProductos } from "./ProductsList";

const DetailProductContainer = () => {
  const [ producto, setProducto ] = useState({})
  const { IdProducto } = useParams()

  useEffect(()=>{
    traerProductos(IdProducto)
    .then(response => setProducto(response))
    .catch(error => setProducto(error))
  }, [])

  return (
    <div>
      <ProdDetail producto={producto} />
    </div>
  )
}

export default DetailProductContainer