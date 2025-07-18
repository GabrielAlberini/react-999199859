import { Link } from "react-router-dom"
import "./Header.css"
import { useAuth } from "../../context/AuthContext"

const Header = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          {
            user && <>
              <li><Link to="/admin">Panel de administrador</Link></li>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </>
          }
          {
            !user && <>
              <li><Link to="/registro">Registrate</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header