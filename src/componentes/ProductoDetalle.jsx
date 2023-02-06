import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getFetch } from "./ProductItems"

const ProductoDetalle = ({}) => {
    const [ productos, setProductos ] = useState([])

    const {idProducto} = useParams()

    useEffect(()=>{
        if (idProducto) {
            getFetch()
                .then(res => {
                    setProductos(res.filter(producto => producto.id === idProducto))
                })
                .catch(error => console.log(error))
        } else {
            getFetch()
                .then(res => {
                    setProductos(res)
                })
                .catch(error => console.log(error))
        }
    },[idProducto])

}


export default ProductoDetalle