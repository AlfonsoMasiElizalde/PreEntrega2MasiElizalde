import { Link } from "react-router-dom"

const Item = ({producto}) => {
  return (
    <div className="card">

        <Link to={`/producto/${producto.id}`}>

            <img src={producto.imagen} alt={producto.descripcion}/>

            <h3 className="card-title">{producto.producto}, {producto.marca}</h3>

            <p className="card-price">$ {producto.precio}</p>

        </Link>

    </div>
  )
}

export default Item