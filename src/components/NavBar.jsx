import CartWidget from "./CartWidget"
import "./navbar.scss"
const NavBar = () => {
    return (
    <nav className="navbar">
    <div className="brand">
        <h2>Espacio-Gamer</h2>
    </div>

    <ul>
        <li>Teclados</li>
        <li>Monitores</li>
        <li>Mouse</li>
        <li>Auriculares</li>
    </ul>

        <CartWidget />
    </nav>
    )
}

export default NavBar
