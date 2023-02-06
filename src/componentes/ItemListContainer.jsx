import { Link } from "react-router-dom"
import productos from "./ProductItems"

const ItemListContainer = () => {

  return (
    <div className="mostrador-productos">

      {productos.map(item => 

        <div key={item.id} className="card">

          <Link to={`/producto/${item.id}`}>

            <img src={item.imagen} alt={item.descripcion}/>
            <h3 className="card-title">{item.producto}, {item.marca}</h3>
            <p className="card-price">$ {item.precio}</p>
            
          </Link>

        </div>

      )}

    </div>
  )
}



export default ItemListContainer