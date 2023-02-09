import { productos } from "./ProductsList"

const ProdDetail = () => {
  return (
    <div>
        <img src={productos.imagen} alt={productos.descripcion} />
    </div>
  )
}

export default ProdDetail