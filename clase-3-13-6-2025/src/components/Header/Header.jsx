import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/admin">Panel de administrador</Link></li>
          <li><Link to="/registro">Registrate</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header