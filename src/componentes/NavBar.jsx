import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <nav className="navbar">
        <h1 className="navbar-logo">
            <NavLink to={"/"}>Don Pepe</NavLink>
        </h1>
        <h2 className="navbar-links">
            <ul>
                <li>
                    <NavLink to={"/"}>Almacén</NavLink>
                </li>
                <li>
                    <NavLink to={"/nosotros"}>Nosotros</NavLink>
                </li>
                <li>
                    <NavLink to={"/contáctanos"}>Contáctanos</NavLink>
                </li>
            </ul>
        </h2>
        <Link to={"/Carrito"}>
            <CartWidget />
        </Link>
    </nav>
  )
}

export default NavBar

