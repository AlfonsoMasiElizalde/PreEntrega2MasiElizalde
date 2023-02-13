
const ItemDetail = ({producto}) => {
  return (
    <div className="card-detail-container">
      <div className="card-detail">
        <img src={producto.imagen} alt={producto.descripcion} />
        <h3 className="card-detail-title">{producto.producto}, {producto.marca}</h3>
        <p className="card-detail-price">$ {producto.precio}</p>
      </div>
    </div>
  )
}

export default ItemDetail