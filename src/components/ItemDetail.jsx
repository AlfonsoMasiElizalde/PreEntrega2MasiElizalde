
const ItemDetail = ({producto}) => {

  console.log(producto)

  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignContent:"center",
      flexDirection:"row"
    }}>
      <img src={producto.imagen} alt={producto.descripcion} />
      <h3>{producto.producto}, {producto.marca}</h3>
      <p>$ {producto.precio}</p>
    </div>
  )
}

export default ItemDetail