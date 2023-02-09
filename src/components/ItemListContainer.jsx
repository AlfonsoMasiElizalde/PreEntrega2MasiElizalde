import { Link } from "react-router-dom"

import { productos } from "./ProductsList"

export const ItemListContainer = () => {

  return (
    <div className="mostrador-productos">

      {productos.map( producto => 

        <div key={producto.id} className="card">

          <Link to={`/producto/${producto.id}`}>

            <img src={producto.imagen} alt={producto.descripcion}/>
            <h3 className="card-title">{producto.producto}, {producto.marca}</h3>
            <p className="card-price">$ {producto.precio}</p>
            
          </Link>

        </div>

      )}
    </div>
  )
}

export default ItemListContainer